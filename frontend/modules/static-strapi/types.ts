import type { StrapiBaseRequestParams, StrapiOptions, StrapiResponse } from 'strapi-sdk-js'

export type SingleTypeOptions = Record<string, StrapiBaseRequestParams>
export type SingleTypeContentMap = Record<string, StrapiResponse<unknown>>
export type StaticStrapiComponentMap = Record<string, string>

export interface ModuleOptions {
  singleTypes: SingleTypeOptions
  useLiveContent: boolean
  strapi: undefined | StrapiOptions
}

export interface ResolvedComponent {
  pascalName: string
}

export interface ContentLoader {
  getSingleType: (contentType: string) => Promise<StrapiResponse<any>>
}
