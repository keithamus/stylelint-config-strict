module.exports = {
  rules: {

    // # Strings
    // Specify single or double quotes around strings
    // Strings must always be wrapped with single quotes.
    'string-quotes': 'single',

    // # Color
    // Specify lowercase or uppercase for hex colors.
    // Hex colours must always be lower case.
    'color-hex-case':  'lower',
    // Specify short or long notation for hex colors.
    // Hex colours must always use shorthand where possible.
    'color-hex-length': 'short',
    // Disallow hex colors.
    // 'color-no-hex': false,
    // Disallow invalid hex colors.
    'color-no-invalid-hex': true,
    // Disallow named colors.
    'color-no-named': true,

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
    // Require a single space or disallow whitespace on the inside of the parentheses of functions.
    // There must never be whitespace on the inside the parentheses.
    'function-parentheses-space-inside': 'never',
    // Specify single, double or no quotes for urls.
    // Url quotes must always be single.
    'function-url-quotes': 'single',
    // Specify a whitelist of only allowed functions.
    // 'function-whitelist': false,
    // Require a single space or disallow whitespace after functions.
    // There must always be a single space after the function.
    'function-whitespace-after': 'always',

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

    // # Unit
    // Specify a blacklist of disallowed units.
    'unit-blacklist': ['in', 'pt', 'pc', 'mm', 'cm', 'ch', 'ex'],
    // Specify a whitelist of allowed units.
    // 'unit-whitelist': false,

    // # Property
    // Specify a blacklist of disallowed properties.
    // 'property-blacklist': false,
    // Disallow vendor prefixes for properties.
    'property-no-vendor-prefix': true,
    // Specify a blacklist of disallowed units for specfic properties.
    // 'property-unit-blacklist': false,
    // Specify a whitelist of disallowed units for specfic properties.
    // 'property-unit-whitelist': false,
    // Specify a whitelist of allowed properties.
    // 'property-whitelist': false,

    // # Custom property
    // Disallow custom properties outside of :root selectors.
    'custom-property-no-outside-root': true,
    // Specify pattern of custom properties.
    // Only lowercase letters and dashes, like CSS properties.
    'custom-property-pattern': /^([a-z]+-+?)*([a-z]+)$/,

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
    // Disallow single-line declaration blocks
    'declaration-block-no-single-line': true,
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
    // Specify single or double colon notation for applicable pseudo-elements.
    // Applicable pseudo-elements must always use the double colon notation.
    'selector-pseudo-element-colon-notation': 'double',
    // Disallow the composition of:root selectors.
    'selector-root-no-composition': true,

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

    // # Rule
    // Require or disallow an empty line before nested rules.
    // There must never be an empty before rules.
    'rule-nested-empty-line-before': 'never',
    // Disallow duplicate properties within rules.
    'rule-no-duplicate-properties': true,
    // Disallow shorthand properties that override related longhand properties.
    'rule-no-shorthand-property-overrides': true,
    // Require or disallow an empty line before non-nested rules.
    // There must always be an empty line before rules.
    'rule-non-nested-empty-line-before': 'always',
    // Specify the order of properties within rules.
    'rule-properties-order': [
      [
        // Strong properties (for easy debugging)
        {
          emptyLineBefore: false,
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
          emptyLineBefore: false,
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
          emptyLineBefore: false,
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
          emptyLineBefore: false,
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
          emptyLineBefore: false,
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
          emptyLineBefore: false,
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
          emptyLineBefore: false,
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
          emptyLineBefore: false,
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
          emptyLineBefore: false,
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
          emptyLineBefore: false,
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
          emptyLineBefore: false,
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
          emptyLineBefore: false,
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
          emptyLineBefore: false,
          properties: [
            'marquee-direction',
            'marquee-play-count',
            'marquee-speed',
            'marquee-style',
          ],
        },

        // Scrollbar properties
        {
          emptyLineBefore: false,
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
          emptyLineBefore: false,
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
          emptyLineBefore: false,
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
          emptyLineBefore: false,
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
          emptyLineBefore: false,
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
    // Require or disallow a trailing semicolon within rules.
    // There must always be a trailing semicolon.
    'rule-trailing-semicolon': 'always',

    // # Root
    // Disallow standard properties inside :root selectors.
    'root-no-standard-properties': true,

    // # Media feature
    // Require a single space or disallow whitespace after the colon in media features.
    // There must always be a single space after the colon.
    'media-feature-colon-space-after': 'always',
    // Require a single space or disallow whitespace before the colon in media features.
    // There must never be whitespace before the colon.
    'media-feature-colon-space-before': 'never',
    // Disallow vendor prefixes for media feature names.
    'media-feature-name-no-vendor-prefix': true,
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
    // Disallow vendor prefixes for @rules.
    'at-rule-no-vendor-prefix': true,

    // # Comment
    // Require or disallow an empty line before comments.
    // 'comment-empty-line-before': false,
    // Require a single space or disallow whitespace on the inside of comment markers.
    // There must always be a single space inside the markers.
    'comment-whitespace-inside': 'always',

    // # General / Sheet
    // Specify indentation.
    // 2 space indentation
    'indentation': 2,
    // Limit the length of a line.
    'max-line-length': 120,
    // Disallow more than a specified number of adjacent empty lines.
    'max-empty-lines': 2,
    // Disallow end-of-line whitespace.
    'no-eol-whitespace': true,
    // Disallow missing end-of-file newline.
    'no-missing-eof-newline': true,
  },
};
