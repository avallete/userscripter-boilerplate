// Use package.json as "unique source of truth" for multiples infos
import { Metadata } from 'userscript-metadata'
import package_json from '../package.json'

export type UserscriptMetadata = Metadata & {
  id: string
  name: string
  description: string
  version: string
  author: string
  homepage: string
  support: string
  hostname: string
  sitename: string
  repositoryURL: string
  license: string
  run_at: string
  releaseBranch: string
}

const userscriptMetadata: UserscriptMetadata = {
  id: package_json.name,
  name: package_json.name,
  description: package_json.description,
  // Automatically match the userscript metadata version to the package.json one
  version: package_json.version,
  author: package_json.author,
  homepage: package_json.homepage,
  support: package_json.bugs.url,
  hostname: 'example.cypress.io',
  sitename: package_json.repository.url,
  repositoryURL: package_json.repository.url,
  license: package_json.license,
  run_at: 'document-idle',
  releaseBranch: 'gh-pages',
}

export default userscriptMetadata
