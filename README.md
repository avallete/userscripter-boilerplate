# userscripter-boilerplate

A quick boilerplate for userscripter projects with e2e testing using cypress, ava for unit-testing, semantic-release and CI/CD with github actions

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/avallete/userscripter-boilerplate?color=282828&label=Release&logo=Github&logoColor=ffffff&style=flat)](https://github.com/avallete/userscripter-boilerplate/releases)
[![GitHub License](https://img.shields.io/github/license/avallete/userscripter-boilerplate?branch=master&label=License&logo=GitHub&logoColor=ffffff&labelColor=282828&color=informational&style=flat)](https://github.com/avallete/userscripter-boilerplate/blob/master/LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/avallete/userscripter-boilerplate/CD/master?branch=master&label=GitHub&logo=GitHub&logoColor=ffffff&labelColor=181717)](https://github.com/avallete/userscripter-boilerplate/actions/workflows/cd.yml)
[![codecov](https://codecov.io/gh/avallete/userscripter-boilerplate/branch/master/graph/badge.svg?token=8S4RJ01E54)](https://codecov.io/gh/avallete/userscripter-boilerplate)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/avallete/userscripter-boilerplate)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=avallete_userscripter-boilerplate&metric=alert_status)](https://sonarcloud.io/dashboard?id=avallete_userscripter-boilerplate)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=avallete_userscripter-boilerplate&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=avallete_userscripter-boilerplate)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/avallete/userscripter-boilerplate.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/avallete/userscripter-boilerplate/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/avallete/userscripter-boilerplate.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/avallete/userscripter-boilerplate/context:javascript)
[![deepcode](https://www.deepcode.ai/api/gh/badge?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybTEiOiJnaCIsIm93bmVyMSI6ImF2YWxsZXRlIiwicmVwbzEiOiJ1c2Vyc2NyaXB0ZXItYm9pbGVycGxhdGUiLCJpbmNsdWRlTGludCI6ZmFsc2UsImF1dGhvcklkIjoyODE1NiwiaWF0IjoxNjE1NTM1MjIyfQ.zoFW4xFH1kFYGgZmclMVqXajcgSeDilGuG28XkZ6-S4)](https://www.deepcode.ai/app/gh/avallete/userscripter-boilerplate/_/dashboard?utm_content=gh%2Favallete%2Fuserscripter-boilerplate)

## Why and for whom ?

This project is build to give a full featured, production ready userscript project with great developer experience.
Enforcing good development practices and making the best use of automation for both, development and release.

## What's in it ?

- Easy unit-testing and coverage using [AVA](https://github.com/avajs/ava) and [nyc](https://github.com/istanbuljs/nyc)
- Ready to go e2e-testing using [Cypress](https://github.com/cypress-io/cypress)
- Automatic build, version, and releases using [semantic-release](https://github.com/semantic-release/semantic-release)
- [Prettier](https://github.com/prettier/prettier) for better code consistency
- Already configured eslint with plugins for TS and JS, some worth to be mentioned:
  - [airbnb/base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) base for TS and JS (you may want to add react to it)
  - [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
  - [eslint-plugin-radar](https://github.com/es-joy/eslint-plugin-radar)
- Development safeguards with git pre-commit and pre-push hooks using [husky](https://github.com/typicode/husky)
- CI/CD workflow powered with [Github Actions](https://github.com/features/actions)
- A welcoming and organized contribution environment for collaborators with [Github Issues Templates](https://docs.github.com/en/github/building-a-strong-community/configuring-issue-templates-for-your-repository), [Github PR Template](https://docs.github.com/en/github/building-a-strong-community/creating-a-pull-request-template-for-your-repository)
- Some optional third parties integration:
  - [LGTM](https://lgtm.com/), [SonarCloud](https://sonarcloud.io/), [DeepCode](https://www.deepcode.ai/) for code analysis and quality monitoring
  - [CodeCov](https://about.codecov.io/) for code coverage monitoring
  - [Snyk](https://snyk.io/) for vulnerabilities monitoring

## How to use ?

First things first, you want to create a new repository on github to host your project.

```bash
git clone https://github.com/avallete/userscripter-boilerplate.git my-user-script
cd my-user-script/ && rm -rf .git/
git init
git remote add origin <your-github-repository-url>
npm install -D
git push -u origin master
```

Then, you want to configure some data to fit your project
(like name, description, author, repository url, ...) in two main places:

- `src/userscript.ts`
- `package.json`

You'll see that `userscript` use `package.json` as single source of truth,
it's very useful when working with [semantic-release](https://github.com/semantic-release/semantic-release) to automate your releases.

## How to setup the CI/CD ?

First things first, the 'basic CI' to run unit-tests, coverage and e2e-tests for PR will
work out of the box, you don't have anything to do.

But for CD (automatic version release) and CodeCov PR annotation, you gonna need to do some little configuration.

1. How to setup automatic release (CD) ?

To create new releases, the CD use `semantic-release/git` which will automatically update the `package.json` version and push it to the master branch.
Then, each release is picked up by another action and a new build is publish to the `gh-pages` branch of the repository.

To use this workflow you gonna need to:

1. Create a Github [PAT](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
2. [Add this PAT in your repository as secret](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository) naming it `GH_SEMANTIC_RELEASE_TOKEN`
3. That's it !

4. How to setup automatic [CodeCov](https://about.codecov.io/) annotation (CI/CD) ?

5. Create/Add your project to your CodeCov dashboard
6. [Get back your repository token](https://docs.codecov.io/docs/frequently-asked-questions#where-is-the-repository-upload-token-found)
7. [Add this token in your repository as secret](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository) naming it `CODECOV_TOKEN`

8. How to have the others third party Github integrations ?
   Some other integrations are setup in this project because I think they are useful. However, if your create a private project or a simple one, you may want to skip them.
   Still, here is the list of the integrations setup to work with this project structure, you just have to sign-up and add your repository to enable them:

- [LGTM](https://lgtm.com/), [SonarCloud](https://sonarcloud.io/), [DeepCode](https://www.deepcode.ai/) code analysis / code smell
- [Snyk](https://snyk.io/) for vulnerabilities monitoring
