export default {
  id: 'userscripter-boilerplate',
  name: 'userscripter-boirlerplate',
  description: 'some description for the script',
  // Automatically match the userscript metadata version to the package.json one
  version: process.env.npm_package_version || '1.0.0',
  author: 'author',
  homepage: 'https://github.com/author/my-awesome-userscript',
  support: 'https://github.com/author/my-awesome-userscript/issues',
  grant: 'none',
  hostname: 'example.cypress.io',
  sitename: 'myuserscript',
  namespace: 'greasyfork-namespace-url',
  noframes: true,
  license: 'MIT',
} as const
