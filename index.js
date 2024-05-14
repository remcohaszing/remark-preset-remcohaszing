import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkLintDefinitionCase from 'remark-lint-definition-case'
import remarkLintFinalDefinition from 'remark-lint-final-definition'
import remarkLintHeadingHncrement from 'remark-lint-heading-increment'
import remarkLintNoDuplicateDefinedUrls from 'remark-lint-no-duplicate-defined-urls'
import remarkLintNoDuplicateDefinitions from 'remark-lint-no-duplicate-definitions'
import remarkLintNoEmptyUrl from 'remark-lint-no-empty-url'
import remarkLintNoReferenceLikeUrl from 'remark-lint-no-reference-like-url'
import remarkLintNoUnneededFullReferenceImage from 'remark-lint-no-unneeded-full-reference-image'
import remarkLintNoUnneededFullReferenceLink from 'remark-lint-no-unneeded-full-reference-link'
import remarkLintNoUnusedDefinitions from 'remark-lint-no-unused-definitions'
import remarkRetext from 'remark-retext'
import remarkToc from 'remark-toc'
import remarkValidateLinks from 'remark-validate-links'
import retextEnglish from 'retext-english'
import retextIndefiniteArticle from 'retext-indefinite-article'
import retextQuotes from 'retext-quotes'
import retextRepeatedWords from 'retext-repeated-words'
import retextSyntaxURLs from 'retext-syntax-urls'
import { unified } from 'unified'
import unifiedConsistency from 'unified-consistency'
import unifiedPrettier from 'unified-prettier'

/**
 * An opiniated remark preset.
 *
 * @type {import('unified').Preset}
 */
const remarkPresetRemcohaszing = {
  settings: /** @type {import('remark-stringify').Options} */ ({
    bullet: '-',
    emphasis: '_',
    quote: "'",
    rule: '-',
    tightDefinitions: true
  }),
  plugins: [
    [remarkFrontmatter, ['toml', 'yaml']],
    remarkGfm,
    remarkLintDefinitionCase,
    remarkLintFinalDefinition,
    remarkLintHeadingHncrement,
    remarkLintNoDuplicateDefinedUrls,
    remarkLintNoDuplicateDefinitions,
    remarkLintNoEmptyUrl,
    remarkLintNoReferenceLikeUrl,
    remarkLintNoUnneededFullReferenceImage,
    remarkLintNoUnneededFullReferenceLink,
    remarkLintNoUnusedDefinitions,
    [
      remarkRetext,
      unified()
        .use(retextEnglish)
        .use(retextIndefiniteArticle)
        .use(retextQuotes)
        .use(retextRepeatedWords)
        .use(retextSyntaxURLs)
    ],
    [remarkToc, { maxDepth: 6 }],
    [remarkValidateLinks, { repository: false }],
    unifiedConsistency,
    unifiedPrettier
  ]
}

export default remarkPresetRemcohaszing
