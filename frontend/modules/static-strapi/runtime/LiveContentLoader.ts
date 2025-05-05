import type Strapi from 'strapi-sdk-js'
import type { ContentLoader, SingleTypeOptions } from '../types'

export class LiveContentLoader implements ContentLoader {
  constructor(private strapi: Strapi, private config: SingleTypeOptions) {}

  async getSingleType<T>(contentType: string) {
    if (!(contentType in this.config)) {
      throw new Error(`No config for "${contentType}" content type`)
    }
    const params = this.config[contentType]
    return this.strapi.find<T>(contentType, params)
      .catch(({ error }) => {
        if (error.status === 403) {
          throw new Error(`Got 403 Forbidden fetching "${contentType}". Are permissions set correctly?`)
        }
        else if (error.name === 'UnknownError' && error.details?.code === 'ECONNREFUSED') {
          const url = this.strapi.options.url
          throw new Error(`Could not connect to CMS at URL "${url}". Is the Strapi instance running?`)
        }
        else {
          throw new Error(`Error while loading "${contentType}": `)
        }
      })
  };
}
