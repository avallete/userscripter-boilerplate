import { DEFAULT_METADATA_SCHEMA } from 'userscripter/build'
import { Metadata, StringItem } from 'userscript-metadata'

import U from './src/userscript'

export const MetadataSchema = {
  ...DEFAULT_METADATA_SCHEMA,
  items: {
    ...DEFAULT_METADATA_SCHEMA.items,
    homepage: new StringItem({
      key: 'homepage',
      unique: true,
      required: false,
    }),
    support: new StringItem({
      key: 'support',
      unique: true,
      required: false,
    }),
  },
}

export default function metadataConfigFactory(): Metadata {
  return {
    name: U.name,
    description: U.description,
    version: U.version,
    author: U.author,
    grant: U.grant,
    match: [`*://${U.hostname}/*`, `*://www.${U.hostname}/*`],
    noframes: U.noframes,
    namespace: U.namespace,
    homepage: U.homepage,
    support: U.support,
    run_at: 'document-idle',
    license: U.license,
  }
}
