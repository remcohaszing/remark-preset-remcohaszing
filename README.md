# remark-preset-remcohaszing

[![github actions](https://github.com/remcohaszing/remark-preset-remcohaszing/actions/workflows/ci.yaml/badge.svg)](https://github.com/remcohaszing/remark-preset-remcohaszing/actions/workflows/ci.yaml)
[![npm](https://img.shields.io/npm/v/remark-preset-remcohaszing)](https://www.npmjs.com/package/remark-preset-remcohaszing)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)

An opiniated [remark](https://remark.js.org) preset.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [License](#license)

## Installation

```sh
npm install remark-preset-remcohaszing
```

## Usage

This package is intended to be used with
[`remark-cli`](https://github.com/remarkjs/remark/tree/main/packages/remark-cli) and
[`remark-language-server`](https://github.com/remarkjs/remark-language-server).

To use it, create a file named `.remarkrc.yaml` with the following content:

```yaml
plugins:
  - remark-preset-remcohaszing
```

Then run:

```sh
remark --frail .
```

## API

This package only has a default export. The default export is the remark preset. The preset contains
the following plugins:

- [`remark-frontmatter`](https://github.com/remarkjs/remark-frontmatter)
- [`remark-gfm`](https://github.com/remarkjs/remark-gfm)
- [`remark-lint-definition-case`](https://github.com/remarkjs/remark-lint/tree/HEAD/packages/remark-lint-definition-case)
- [`remark-lint-final-definition`](https://github.com/remarkjs/remark-lint/tree/HEAD/packages/remark-lint-final-definition)
- [`remark-lint-heading-increment`](https://github.com/remarkjs/remark-lint/tree/HEAD/packages/remark-lint-heading-increment)
- [`remark-lint-no-duplicate-defined-urls`](https://github.com/remarkjs/remark-lint/tree/HEAD/packages/remark-lint-no-duplicate-defined-urls)
- [`remark-lint-no-duplicate-definitions`](https://github.com/remarkjs/remark-lint/tree/HEAD/packages/remark-lint-no-duplicate-definitions)
- [`remark-lint-no-empty-url`](https://github.com/remarkjs/remark-lint/tree/HEAD/packages/remark-lint-no-empty-url)
- [`remark-lint-no-reference-like-url`](https://github.com/remarkjs/remark-lint/tree/HEAD/packages/remark-lint-no-reference-like-url)
- [`remark-lint-no-unneeded-full-reference-image`](https://github.com/remarkjs/remark-lint/tree/HEAD/packages/remark-lint-no-unneeded-full-reference-image)
- [`remark-lint-no-unneeded-full-reference-link`](https://github.com/remarkjs/remark-lint/tree/HEAD/packages/remark-lint-no-unneeded-full-reference-link)
- [`remark-lint-no-unused-definitions`](https://github.com/remarkjs/remark-lint/tree/HEAD/packages/remark-lint-no-unused-definitions)
- [`remark-toc`](https://github.com/remarkjs/remark-toc)
- [`remark-validate-links`](https://github.com/remarkjs/remark-validate-links)
- [`retext-english`](https://github.com/retextjs/retext/tree/main/packages/retext-english)
- [`retext-indefinite-article`](https://github.com/retextjs/retext-indefinite-article)
- [`retext-quotes`](https://github.com/retextjs/retext-quotes)
- [`retext-repeated-words`](https://github.com/retextjs/retext-repeated-words)
- [`retext-syntax-urls`](https://github.com/retextjs/retext-syntax-urls)
- [`unified-consistency`](https://github.com/remcohaszing/unified-consistency)
- [`unified-prettier`](https://github.com/remcohaszing/unified-prettier)

## License

[MIT](LICENSE.md) © [Remco Haszing](https://github.com/remcohaszing)
