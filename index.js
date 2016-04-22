module.exports = {
  rules: {

    // # Color
    // Specify lowercase or uppercase for hex colors.
    // Hex colours must always be lower case.
    'color-hex-case':  'lower',
    // Specify short or long notation for hex colors.
    // Hex colours must always use shorthand where possible.
    'color-hex-length': 'short',
    // Require (where possible) or disallow named colors.
    'color-named': 'never',
    // Disallow hex colors.
    // 'color-no-hex': false,
    // Disallow invalid hex colors.
    'color-no-invalid-hex': true,

    // # Font family
    // Specify whether or not quotation marks should be used around font family names,
    // and whether single or double.
    'font-family-name-quotes': 'single-where-required',

    // # Font weight
    // Require consistent numeric or named font-weight values.
    // 'font-weight-notation': false,

    // # Function
    // Specify a blacklist of disallowed functions.
    // 'function-blacklist': false,
    // Disallow an unspaced operator within calc functions.
    'function-calc-no-unspaced-operator': true,
    // Require a newline or disallow whitespace after the commas of functions.
    // There must always be a newline after the commas in multi-line functions.
    'function-comma-newline-after': 'always-multi-line',
    // Require a newline or disallow whitespace before the commas of functions.
    // There must never be a whitespace before the commas in multi-line functions.
    'function-comma-newline-before': 'never-multi-line',
    // Require a single space or disallow whitespace after the commas of functions.
    // There must always be a single space after the commas in single-line functions
    'function-comma-space-after': 'always-single-line',
    // Require a single space or disallow whitespace before the commas of functions.
    // There must never be whitepace before the commas in single-line functions.
    'function-comma-space-before': 'never-single-line',
    // Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
    'function-linear-gradient-no-nonstandard-direction': true,
    // Limit the number of adjacent empty lines within functions.
    'function-max-empty-lines': 0,
    // Specify lowercase or uppercase for function names.
    'function-name-case': 'lower',
    // Require a newline or disallow whitespace on the inside of the parentheses of functions.
    // There must always be a newline if the function call is multiline.
    'function-parentheses-newline-inside': 'always-multi-line',
    // Require a single space or disallow whitespace on the inside of the parentheses of functions.
    // There must never be whitespace on the inside the parentheses.
    'function-parentheses-space-inside': 'never-single-line',
    // Require or disallow data URIs for urls.
    // 'function-url-data-uris': 'always',
    // Specify single, double or no quotes for urls.
    // Url quotes must always be single.
    'function-url-quotes': 'single',
    // Specify a whitelist of only allowed functions.
    // 'function-whitelist': false,
    // Require a single space or disallow whitespace after functions.
    // There must always be a single space after the function.
    'function-whitespace-after': 'always',

    // # Number
    // Require or disallow a leading zero for fractional numbers less than 1.
    // There must always be a leading zero.
    'number-leading-zero': 'always',
    // Limit the number of decimal places allowed in numbers.
    // There must be a maximum of 2 decimal places
    'number-max-precision': 2,
    // Disallow trailing zeros within numbers.
    'number-no-trailing-zeros': true,
    // Disallow units for zero lengths.
    'number-zero-length-no-unit': true,

    // # String
    // Disallow (unescaped) newlines in strings.
    'string-no-newline': true,
    // Specify single or double quotes around strings
    // Strings must always be wrapped with single quotes.
    'string-quotes': 'single',

    // # Time
    // Disallow animation and transition times under 100ms.
    'time-no-imperceptible': true,

    // # Unit
    // Specify a blacklist of disallowed units.
    'unit-blacklist': ['in', 'pt', 'pc', 'mm', 'cm', 'ch', 'ex'],
    // Specify a whitelist of allowed units.
    // 'unit-whitelist': false,
    // Disallow unknown units.
    'unit-no-unknown': true,

    // # Value
    // Disallow vendor prefixes for values.
    'value-no-vendor-prefix': true,

    // # Value list
    // Require a newline or disallow whitespace after the commas of value lists.
    // There must always be a newline after the commas in multi-line value lists.
    'value-list-comma-newline-after': 'always-multi-line',
    // Require a newline or disallow whitespace before the commas of value lists.
    // There must never be whitespace before the commas in multi-line value lists.
    'value-list-comma-newline-before': 'never-multi-line',
    // Require a single space or disallow whitespace after the commas of value lists.
    // There must always be a single space after the commas in single-line value lists.
    'value-list-comma-space-after': 'always-single-line',
    // Require a single space or disallow whitespace before the commas of value lists.
    // There must never be whitespace before the commas in single-line value lists.
    'value-list-comma-space-before': 'never-single-line',

    // # Custom property
    // Disallow custom properties outside of :root selectors.
    'custom-property-no-outside-root': true,
    // Specify pattern of custom properties.
    // Only lowercase letters and dashes, like CSS properties.
    'custom-property-pattern': /^.([a-z](-[a-z])?)+(__([a-z](-[a-z])?)+)?(--([a-z](-[a-z])?)+)?$/,

    // # Property
    // Specify a blacklist of disallowed properties.
    // 'property-blacklist': false,
    // Specify lowercase or uppercase for properties.
    'property-case': 'lower',
    // Disallow vendor prefixes for properties.
    'property-no-vendor-prefix': true,
    // Specify a blacklist of disallowed units for specfic properties.
    // 'property-unit-blacklist': false,
    // Specify a whitelist of disallowed units for specfic properties.
    // 'property-unit-whitelist': false,
    // Specify a blacklist of disallowed property-value pairs.
    // 'property-value-blacklist':
    // Specify a whitelist of allowed property-value pairs.
    // 'property-value-whitelist':
    // Specify a whitelist of allowed properties.
    // 'property-whitelist': false,

    // # Declaration
    // Require a single space or disallow whitespace after the bang of declarations.
    // There must never be whitespace after the bang.
    'declaration-bang-space-after': 'never',
    // Require a single space or disallow whitespace before the bang of declarations.
    // There must always be a single space before the bang.
    'declaration-bang-space-before': 'always',
    // Require a newline or disallow whitespace after the colon of declarations.
    // There must always be a newline after the colon if the declaration's value is multi-line.
    'declaration-colon-newline-after': 'always-multi-line',
    // Require a single space or disallow whitespace after the colon of declarations.
    // There must always be a single space after the colon if the declaration's value is single-line.
    'declaration-colon-space-after': 'always-single-line',
    // Require a single space or disallow whitespace before the colon of declarations.
    // There must never be whitespace before the colon
    'declaration-colon-space-before': 'never',
    // Disallow !important within declarations.
    'declaration-no-important': true,

    // # Declaration block
    // Disallow duplicate properties within declaration blocks.
    'declaration-block-no-duplicate-properties': true,
    // Disallow property values that are ignored due to another property value in the same rule.
    'declaration-block-no-ignored-properties': true,
    // Disallow shorthand properties that override related longhand properties within declaration blocks.
    'declaration-block-no-shorthand-property-overrides': true,
    // Specify the order of properties within declaration blocks.
    'declaration-block-properties-order': [
      [
        // Strong properties (for easy debugging)
        {
          // emptyLineBefore: 'never',
          order: 'strict',
          properties: [
            'content',
            'opacity',
            'visibility',
            'overflow',
            'overflow-x',
            'overflow-y',
            'clear',
            'clip',
            'float',
            'display',
            'vertical-align',
            'box-sizing',
            'position',
          ],
        },

        // Basic box properties
        {
          // emptyLineBefore: 'never',
          order: 'strict',
          properties: [
            'top',
            'right',
            'bottom',
            'left',
            'width',
            'max-width',
            'min-width',
            'height',
            'max-height',
            'min-height',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
          ],
        },

        // Flexible layout properties
        {
          // emptyLineBefore: 'never',
          order: 'strict',
          properties: [
            'align-content',
            'align-items',
            'align-self',
            'flex',
            'flex-basis',
            'flex-direction',
            'flex-flow',
            'flex-grow',
            'flex-shrink',
            'flex-wrap',
            'justify-content',
            'order',
          ],
        },

        // Multi-column layout properties
        {
          // emptyLineBefore: 'never',
          order: 'strict',
          properties: [
            'break-after',
            'break-before',
            'break-inside',
            'column-count',
            'column-fill',
            'column-gap',
            'column-rule',
            'column-rule-color',
            'column-rule-style',
            'column-rule-width',
            'column-span',
            'column-width',
            'columns',
            'widows',
          ],
        },

        // Table properties
        {
          // emptyLineBefore: 'never',
          order: 'strict',
          properties: [
            'border-collapse',
            'border-spacing',
            'caption-side',
            'empty-cells',
            'table-layout',
          ],
        },

        // Basic UI properties
        {
          // emptyLineBefore: 'never',
          order: 'strict',
          properties: [
            'cursor',
            'ime-mode',
            'nav-down',
            'nav-index',
            'nav-left',
            'nav-right',
            'nav-up',
            'outline',
            'outline-color',
            'outline-offset',
            'outline-style',
            'outline-width',
            'resize',
            'user-select',
          ],
        },

        // Lists and counters properties
        {
          // emptyLineBefore: 'never',
          order: 'strict',
          properties: [
            'counter-increment',
            'counter-reset',
            'list-style',
            'list-style-image',
            'list-style-position',
            'list-style-type',
          ],
        },

        // Paged media properties
        {
          // emptyLineBefore: 'never',
          order: 'strict',
          properties: [
            'orphans',
            'page-break-after',
            'page-break-before',
            'page-break-inside',
            'marks',
            'quotes',
          ],
        },

        // Text properties
        {
          // emptyLineBefore: 'never',
          order: 'strict',
          properties: [
            'color',
            'direction',
            'font',
            'font-family',
            'font-feature-settings',
            'font-kerning',
            'font-language-override',
            'font-size',
            'font-size-adjust',
            'font-stretch',
            'font-style',
            'font-synthesis',
            'font-variant',
            'font-variant-alternates',
            'font-variant-caps',
            'font-variant-east-asian',
            'font-variant-ligatures',
            'font-variant-numeric',
            'font-variant-position',
            'font-weight',
            'hanging-punctuation',
            'hyphens',
            'letter-spacing',
            'line-break',
            'line-height',
            'overflow-wrap',
            'tab-size',
            'text-align',
            'text-align-last',
            'text-combine-upright',
            'text-decoration',
            'text-decoration-color',
            'text-decoration-line',
            'text-decoration-style',
            'text-indent',
            'text-justify',
            'text-orientation',
            'text-overflow',
            'text-shadow',
            'text-transform',
            'text-underline-position',
            'unicode-bidi',
            'white-space',
            'word-break',
            'word-spacing',
            'word-wrap',
            'writing-mode',
          ],
        },

        // Animation properties
        {
          // emptyLineBefore: 'never',
          order: 'strict',
          properties: [
            'animation',
            'animation-delay',
            'animation-direction',
            'animation-duration',
            'animation-fill-mode',
            'animation-iteration-count',
            'animation-name',
            'animation-play-state',
            'animation-timing-function',
          ],
        },

        // Background and border properties
        {
          // emptyLineBefore: 'never',
          order: 'strict',
          properties: [
            'background',
            'background-attachment',
            'background-clip',
            'background-color',
            'background-image',
            'background-origin',
            'background-position',
            'background-poistion-x',
            'background-poistion-y',
            'background-repeat',
            'background-size',
            'border',
            'border-color',
            'border-image',
            'border-image-outset',
            'border-image-repeat',
            'border-image-slice',
            'border-image-source',
            'border-image-width',
            'border-radius',
            'border-style',
            'border-width',
            'border-top',
            'border-top-color',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-top-style',
            'border-top-width',
            'border-right',
            'border-right-color',
            'border-right-style',
            'border-right-width',
            'border-bottom',
            'border-bottom-color',
            'border-bottom-left-radius',
            'border-bottom-right-radius',
            'border-bottom-style',
            'border-bottom-width',
            'border-left',
            'border-left-color',
            'border-left-style',
            'border-left-width',
            'box-decoration-break',
            'box-shadow',
          ],
        },

        // Filter effects, masking, image properties
        {
          // emptyLineBefore: 'never',
          order: 'strict',
          properties: [
            'filter',
            'image-orientation',
            'image-rendering',
            'image-resolution',
            'mask',
            'mask-type',
            'object-fit',
            'object-position',
          ],
        },

        // Marquee properties
        {
          // emptyLineBefore: 'never',
          order: 'strict',
          properties: [
            'marquee-direction',
            'marquee-play-count',
            'marquee-speed',
            'marquee-style',
          ],
        },

        // Scrollbar properties
        {
          // emptyLineBefore: 'never',
          order: 'strict',
          properties: [
            'scrollbar-3dlight-color',
            'scrollbar-arrow-color',
            'scrollbar-base-color',
            'scrollbar-darkshadow-color',
            'scrollbar-face-color',
            'scrollbar-highlight-color',
            'scrollbar-shadow-color',
            'scrollbar-track-color',
          ],
        },

        // Speech properties
        {
          // emptyLineBefore: 'never',
          order: 'strict',
          properties: [
            'mark',
            'mark-after',
            'mark-before',
            'phonemes',
            'rest',
            'rest-after',
            'rest-before',
            'voice-balance',
            'voice-duration',
            'voice-pitch',
            'voice-pitch-range',
            'voice-rate',
            'voice-stress',
            'voice-volume',
          ],
        },

        // Transform properties
        {
          // emptyLineBefore: 'never',
          order: 'strict',
          properties: [
            'transform',
            'transform-origin',
            'transform-style',
            'backface-visibility',
            'perspective',
            'perspective-origin',
          ],
        },

        // Transitions properties
        {
          // emptyLineBefore: 'never',
          order: 'strict',
          properties: [
            'transition',
            'transition-delay',
            'transition-duration',
            'transition-property',
            'transition-timing-function',
          ],
        },

        // Stack order and zoom properties
        {
          // emptyLineBefore: 'never',
          order: 'strict',
          properties: [
            'z-index',
            'zoom',
          ],
        },
      ],
      {
        unspecified: 'bottom',
      },
    ],
    // Require a newline or disallow whitespace after the semicolons of declaration blocks.
    // There must always be a newline after the semicolon.
    'declaration-block-semicolon-newline-after': 'always',
    // Require a newline or disallow whitespace before the semicolons of declaration blocks.
    // There must never be whitespace before the semicolons in multi-line rules.
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    // Require a single space or disallow whitespace after the semicolons of declaration blocks.
    // There must always be a single space after the semicolon in single-line declaration blocks.
    'declaration-block-semicolon-space-after': 'always-single-line',
    // Require a single space or disallow whitespace before the semicolons of declaration blocks.
    // There must never be whitespace before the semicolons.
    'declaration-block-semicolon-space-before': 'never',
    // Limit the number of declaration within single line declaration blocks.
    'declaration-block-single-line-max-declarations': 1,
    // Require or disallow a trailing semicolon within declaration blocks.
    'declaration-block-trailing-semicolon': 'always',

    // # Block
    // Require a newline or disallow whitespace after the closing brace of blocks.
    // There must always be a newline after the closing brace.
    'block-closing-brace-newline-after': 'always',
    // Require a newline or disallow whitespace before the closing brace of blocks.
    // There must always be a newline before the closing brace in multi-line blocks.
    'block-closing-brace-newline-before': 'always-multi-line',
    // Require a single space or disallow whitespace after the closing brace of blocks.
    // There must always be a single space after the closing brace in single-line blocks.
    'block-closing-brace-space-after': 'always-single-line',
    // Require a single space or disallow whitespace before the closing brace of blocks.
    // There must always be a single space before the closing brace in single-line blocks.
    'block-closing-brace-space-before': 'always-single-line',
    // Disallow empty blocks.
    'block-no-empty': true,
    // Disallow single-line blocks
    'block-no-single-line': true,
    // Require a newline after the opening brace of blocks.
    // There must always be a newline after the opening brace.
    'block-opening-brace-newline-after': 'always-multi-line',
    // Require a newline or disallow whitespace before the opening brace of blocks.
    // (this rule is totally bugged out and does not work properly)
    // 'block-opening-brace-newline-before': false,
    // Require a single space or disallow whitespace after the opening brace of blocks.
    // There must always be a single space after the opening brace in single-line blocks.
    'block-opening-brace-space-after': 'always-single-line',
    // Require a single space or disallow whitespace before the opening brace of blocks.
    // There must always be a single space before the opening brace.
    'block-opening-brace-space-before': 'always',

    // # Selector
    // Specify a pattern for class selectors.
    'selector-class-pattern': /^.([a-z](-[a-z])?)+(__([a-z](-[a-z])?)+)?(--([a-z](-[a-z])?)+)?$/,
    // Require a single space or disallow whitespace after the combinators of selectors.
    // There must always be a single space after the combinators.
    'selector-combinator-space-after': 'always',
    // Require a single space or disallow whitespace before the combinators of selectors.
    // There must always be a single space before the combinators.
    'selector-combinator-space-before': 'always',
    // Specify a pattern for id selectors.
    // 'selector-id-pattern': false,
    // Limit the specificity of selectors.
    'selector-max-specificity': '0,4,0',
    // Disallow attribute selectors.
    // 'selector-no-attribute': false,
    // Disallow combinators in selectors.
    // 'selector-no-combinator': false,
    // Disallow id selectors.
    'selector-no-id': true,
    // Disallow type selectors.
    'selector-no-type': true,
    // Disallow universal selectors.
    'selector-no-universal': true,
    // Disallow vendor prefixes for selectors.
    'selector-no-vendor-prefix': true,
    // Specify lowercase or uppercase for pseudo-class selectors.
    'selector-pseudo-class-case': 'lower',
    // Specify single or double colon notation for applicable pseudo-elements.
    // Applicable pseudo-elements must always use the double colon notation.
    'selector-pseudo-element-colon-notation': 'double',
    // Disallow the composition of:root selectors.
    'selector-root-no-composition': true,
    // Specify lowercase or uppercase for type selector.
    'selector-type-case': 'lower',

    // # Selector list
    // Require a newline or disallow whitespace after the commas of selector lists.
    // There must always be a newline after the commas in multi-line selector lists.
    'selector-list-comma-newline-after': 'always-multi-line',
    // Require a newline or disallow whitespace before the commas of selector lists.
    // There must never be whitespace before the commas in multi-line selector lists.
    'selector-list-comma-newline-before': 'never-multi-line',
    // Require a single space or disallow whitespace after the commas of selector lists.
    // There must always be a single space after the commas in single-line selector lists.
    'selector-list-comma-space-after': 'always-single-line',
    // Require a single space or disallow whitespace before the commas of selector lists.
    // There must never be whitespace before the commas.
    'selector-list-comma-space-before': 'never',

    // Root Selector
    // Disallow standard properties inside :root selectors.
    'root-no-standard-properties': true,

    // # Rule
    // Require or disallow an empty line before nested rules.
    // There must never be an empty before rules.
    'rule-nested-empty-line-before': 'never',
    // Require or disallow an empty line before non-nested rules.
    // There must always be an empty line before rules.
    'rule-non-nested-empty-line-before': 'always',

    // # Media feature
    // Require a single space or disallow whitespace after the colon in media features.
    // There must always be a single space after the colon.
    'media-feature-colon-space-after': 'always',
    // Require a single space or disallow whitespace before the colon in media features.
    // There must never be whitespace before the colon.
    'media-feature-colon-space-before': 'never',
    // Disallow vendor prefixes for media feature names.
    'media-feature-name-no-vendor-prefix': true,
    // Ensure that non-boolean media features have the punctuation they need: either a colon or a range-operator.
    'media-feature-no-missing-punctuation': true,
    // Require a single space or disallow whitespace after the range operator in media features.
    // There must always be a single space after the range operator.
    'media-feature-range-operator-space-after': 'always',
    // Require a single space or disallow whitespace before the range operator in media features.
    // There must always be a single space before the range operator.
    'media-feature-range-operator-space-before': 'always',

    // # Custom media
    // Specify pattern of custom media query names.
    // Only lowercase letters and dashes, like CSS properties.
    'custom-media-pattern': /^([a-z]+-+?)*([a-z]+)$/,

    // # Media query
    // Require a single space or disallow whitespace on the inside of the parentheses within media queries.
    // There must never be whitespace on the inside the parentheses.
    'media-query-parentheses-space-inside': 'never',

    // # Media query list
    // Require a newline or disallow whitespace after the commas of media query lists.
    // There must always be a newline after the commas in multi-line media query lists.
    'media-query-list-comma-newline-after': 'always-multi-line',
    // Require a newline or disallow whitespace before the commas of media query lists.
    // There must never be a white before the commas in multi-line media query lists.
    'media-query-list-comma-newline-before': 'never-multi-line',
    // Require a single space or disallow whitespace after the commas of media query lists.
    // There must always be a single space after the commas in single-line media query lists.
    'media-query-list-comma-space-after': 'always-single-line',
    // Require a single space or disallow whitespace before the commas of media query lists.
    // There must never be whitepace before the commas.
    'media-query-list-comma-space-before': 'never',

    // # At rule
    // Require or disallow an empty line before @rules.
    // There must always be an empty line before @rules.
    'at-rule-empty-line-before': ['always', { except: ['blockless-group'] }],
    // Specify lowercase or uppercase for at-rules names.
    'at-rule-name-case': 'lower',
    // Disallow vendor prefixes for @rules.
    'at-rule-no-vendor-prefix': true,
    // Require a newline after the semicolon of at-rules.
    'at-rule-semicolon-newline-after': 'always',

    // # Comment
    // Require or disallow an empty line before comments.
    // 'comment-empty-line-before': false,
    // Require a single space or disallow whitespace on the inside of comment markers.
    // There must always be a single space inside the markers.
    'comment-whitespace-inside': 'always',

    // # General / Sheet
    // Specify indentation.
    'indentation': 2,
    // Limit the number of adjacent empty lines.
    'max-empty-lines': 2,
    // Limit the length of a line.
    'max-line-length': 120,
    // Limit the depth of nesting.
    'max-nesting-depth': 5,
    // Disallow browser hacks that are irrelevant to the browsers you are targeting.
    'no-browser-hacks': [ true, { browsers: [ '> 1%', 'last 2 versions', 'Firefox ESR' ] } ],
    // Disallow duplicate selectors.
    'no-duplicate-selectors': true,
    // Disallow end-of-line whitespace.
    'no-eol-whitespace': true,
    // Disallow colors that are suspiciously close to being identical.
    'no-indistinguishable-colors': [ true, { threshold: 3 } ],
    // Disallow double-slash comments (//...) which are not supported by CSS.
    'no-invalid-double-slash-comments': true,
    // Disallow missing end-of-file newline.
    'no-missing-eof-newline': true,
    // Disallow animation names that do not correspond to a @keyframes declaration.
    'no-unknown-animations': true,
    // Require a reason comment before or after stylelint-disable comments.
    'stylelint-disable-reason': 'always-after',
  },
};
