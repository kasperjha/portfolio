import type { StaticStrapiComponentMap } from './types'

/**
 * Converts pascal case to kebab case.
 *
 * @param pascalCase string in PascalCase
 * @returns string in KebabCase
 */
function toKebabCase(pascalCase: string) {
  return pascalCase.replace(/([a-z0–9])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * Generates a map associating component names of vue and strapi.
 * Works by mapping components names that match configured prefixes.
 * Only vue component that match the vue prefix get a map entry.
 *
 * @param vueComponents Vue component names in pascal case
 * @param strapiCategory Strapi component category prefix
 * @param vuePrefix Vue component name prefix
 * @returns component map
 */
export function generateComponentMap(vueComponents: string[], strapiCategory: string, vuePrefix: string) {
  const getStrapiComponentName = (pascalName: string) => {
    const suffix = toKebabCase(pascalName.slice(vuePrefix.length))
    return `${strapiCategory.toLowerCase()}.${suffix}`
  }
  return vueComponents.reduce((acc, pascalCase) => {
    const strapiName = getStrapiComponentName(pascalCase)
    return { ...acc, ...{ [strapiName]: pascalCase } }
  }, {})
}

/**
 * Generates contents of the component map virtual file.
 * @param componentMap StaticStrapiComponentMap
 * @returns string with file contents
 */
export function generateComponentMapContents(componentMap: StaticStrapiComponentMap) {
  if (Object.entries(componentMap).length < 1) {
    return 'export default new Map<string, Component>()\n'
  }

  const importNames = Object.values(componentMap).join(', ')
  const mapRows = Object.entries(componentMap).map(([strapiName, vueName]) => `['${strapiName}', ${vueName}]`)
  const mapRowsWithWhitespace = `${mapRows.join(',\n  ')}\n`

  const contents = ``
    + `import { type Component } from '@nuxt/schema'\n`
    + `import { ${importNames} } from '#components'\n\n`
    + `export default new Map<string, Component>([\n  ${
      mapRowsWithWhitespace
    }])\n`

  return contents
}
