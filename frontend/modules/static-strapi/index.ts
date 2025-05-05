import { addComponentsDir, addImportsDir, addTemplate, createResolver, defineNuxtModule, updateTemplates, useLogger } from 'nuxt/kit'
import { defu } from 'defu'
import type { ModuleOptions, ResolvedComponent } from './types'
import { buildContentCacheContents, getAllSingleTypeContent } from './content'
import { generateComponentMap, generateComponentMapContents } from './components'

const logger = useLogger(`StaticStrapi`)

/**
 * Adds template for the strapi content cache file.
 * @param options StaticStrapiOptions
 */
function addContentCacheTemplate(options: ModuleOptions) {
  addTemplate({
    filename: 'StaticStrapiContentCache.mjs',
    getContents: async () => {
      try {
        const content = await getAllSingleTypeContent(options)
        return buildContentCacheContents(content)
      }
      catch (error) {
        logger.error(error)
        return buildContentCacheContents({})
      }
    },
  })
}

// global variable to access outside of module setup scope
let componentNames: string[] = []

/**
 * Updates components list from result of nuxt hook.
 * @param components Resolved components from 'components:extend hook
 */
function extendComponents(components: ResolvedComponent[]) {
  const relevantComponents = components.filter(c => c.pascalName.startsWith('CmsBlock'))
  componentNames = relevantComponents.map(c => c.pascalName)
}

/**
 * Adds template for map the CMS to Vue component map.
 */
function addComponentMapTemplate(vuePrefix: string, strapiCategory: string) {
  addTemplate({
    filename: 'StaticStrapiComponentMap.ts',
    getContents: async () => {
      const componentMap = generateComponentMap(componentNames, vuePrefix, strapiCategory)
      return generateComponentMapContents(componentMap)
    },
  })
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'static-strapi',
  },

  defaults: {
    singleTypes: {},
    useLiveContent: import.meta.env.NODE_ENV === 'development',
    strapi: undefined,
  },

  hooks: {
    // TODO: only update StaticStrapi templates
    'builder:watch': () => updateTemplates(),
    'components:extend': components => extendComponents(components),
  },

  setup(options: ModuleOptions, nuxt) {
    const resolver = createResolver(import.meta.url)

    logger.info(`Using ${options.useLiveContent ? 'live' : 'cached'} content`)

    // throw new Error('TRHOW')

    // exposes all module options in runtime config
    nuxt.options.runtimeConfig.public.staticStrapi = defu(nuxt.options.runtimeConfig.public.staticStrapi, options)

    // add components and modules
    addComponentsDir({ path: resolver.resolve('runtime/components') })
    addImportsDir(resolver.resolve('runtime/composables'))

    // add templates to VFS
    addContentCacheTemplate(options)
    addComponentMapTemplate('Blocks', 'CmsBlock')
  },
})
