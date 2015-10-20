module.exports = {
  rules: {

    // # Strings
    // Specify single or double quotes around strings
    'string-quotes': [
      2,
      // Strings must always be wrapped with single quotes.
      'single',
    ],

    // # Color
    // Specify lowercase or uppercase for hex colors.
    'color-hex-case': [
      2,
      // Hex colours must always be lower case.
      'lower',
    ],
    // Specify short or long notation for hex colors.
    'color-hex-length': [
      2,
      // Hex colours must always use shorthand where possible.
      'short',
    ],
    // Disallow invalid hex colors.
    'color-no-invalid-hex': 2,

    // # Number
    // Require or disallow a leading zero for fractional numbers less than 1.
    'number-leading-zero': [
      2,
      // There must always be a leading zero.
      'always',
    ],
    // Limit the number of decimal places allowed in numbers.
    'number-max-precision': [
      2,
      // There must be a maximum of 2 decimal places
      2
    ],
    // Disallow trailing zeros within numbers.
    'number-no-trailing-zeros': 2,
    // Disallow units for zero lengths.
    'number-zero-length-no-unit': 2,

    // # Function
    // Disallow an unspaced operator within calc functions.
    'function-calc-no-unspaced-operator': 2,
    // Require a newline or disallow whitespace after the commas of functions.
    'function-comma-newline-after': [
      2,
      // There must always be a newline after the commas in multi-line functions.
      'always-multi-line',
    ],
    // Require a newline or disallow whitespace before the commas of functions.
    'function-comma-newline-before': [
      2,
      // There must never be a whitespace before the commas in multi-line functions.
      'never-multi-line',
    ],
    // Require a single space or disallow whitespace after the commas of functions.
    'function-comma-space-after': [
      2,
      // There must always be a single space after the commas in single-line functions
      'always-single-line',
    ],
    // Require a single space or disallow whitespace before the commas of functions.
    'function-comma-space-before': [
      2,
      // There must never be whitepace before the commas in single-line functions.
      'never-single-line',
    ],
    // Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
    'function-linear-gradient-no-nonstandard-direction': 2,
    // Require a single space or disallow whitespace on the inside of the parentheses of functions.
    'function-parentheses-space-inside': [
      2,
      // There must never be whitespace on the inside the parentheses.
      'never',
    ],
    // Require a single space or disallow whitespace after functions.
    'function-space-after': [
      2,
      // There must always be a single space after the function.
      'always',
    ],
    // Specify single, double or no quotes for urls.
    'function-url-quotes': [
      2,
      // Url quotes must always be single.
      'single',
    ],

    // # Value
    // Disallow vendor prefixes for values.
    'value-no-vendor-prefix': 2,

    // # Value list
    // Require a newline or disallow whitespace after the commas of value lists.
    'value-list-comma-newline-after': [
      2,
      // There must always be a newline after the commas in multi-line value lists.
      'always-multi-line',
    ],
    // Require a newline or disallow whitespace before the commas of value lists.
    'value-list-comma-newline-before': [
      2,
      // There must never be whitespace before the commas in multi-line value lists.
      'never-multi-line',
    ],
    // Require a single space or disallow whitespace after the commas of value lists.
    'value-list-comma-space-after': [
      2,
      // There must always be a single space after the commas in single-line value lists.
      'always-single-line',
    ],
    // Require a single space or disallow whitespace before the commas of value lists.
    'value-list-comma-space-before': [
      2,
      // There must never be whitespace before the commas in single-line value lists.
      'never-single-line',
    ],

    // # Property
    // Specify a blacklist of disallowed properties.
    'property-blacklist': 0,
    // Disallow vendor prefixes for properties.
    'property-no-vendor-prefix': 2,
    // Specify a whitelist of allowed properties.
    'property-whitelist': 0,

    // # Custom property
    // Disallow custom properties outside of :root selectors.
    'custom-property-no-outside-root': 2,
    // Specify pattern of custom properties.
    'custom-property-pattern': [
      2,
      // Only lowercase letters and dashes, like CSS properties.
      /^([a-z]+-+?)*([a-z]+)$/,
    ],

    // # Declaration
    // Require a single space or disallow whitespace after the bang of declarations.
    'declaration-bang-space-after': [
      2,
      // There must never be whitespace after the bang.
      'never',
    ],
    // Require a single space or disallow whitespace before the bang of declarations.
    'declaration-bang-space-before': [
      2,
      // There must always be a single space before the bang.
      'always',
    ],
    // Require a newline or disallow whitespace after the colon of declarations.
    'declaration-colon-newline-after': [
      2,
      // There must always be a newline after the colon if the declaration's value is multi-line.
      'always-multi-line',
    ],
    // Require a single space or disallow whitespace after the colon of declarations.
    'declaration-colon-space-after': [
      2,
      // There must always be a single space after the colon if the declaration's value is single-line.
      'always-single-line',
    ],
    // Require a single space or disallow whitespace before the colon of declarations.
    'declaration-colon-space-before': [
      2,
      // There must never be whitespace before the colon
      'never',
    ],
    // Disallow !important within declarations.
    'declaration-no-important': 2,

    // # Declaration block
    // Require a newline or disallow whitespace after the semicolons of declaration blocks.
    'declaration-block-semicolon-newline-after': [
      2,
      // There must always be a newline after the semicolon.
      'always',
    ],
    // Require a newline or disallow whitespace before the semicolons of declaration blocks.
    'declaration-block-semicolon-newline-before': [
      2,
      // There must never be whitespace before the semicolons in multi-line rules.
      'never-multi-line',
    ],
    // Require a single space or disallow whitespace after the semicolons of declaration blocks.
    'declaration-block-semicolon-space-after': [
      2,
      // There must always be a single space after the semicolon in single-line declaration blocks.
      'always-single-line',
    ],
    // Require a single space or disallow whitespace before the semicolons of declaration blocks.
    'declaration-block-semicolon-space-before': [
      2,
      // There must never be whitespace before the semicolons.
      'never',
    ],

    // # Nesting block
    // Require a newline or disallow whitespace before the opening brace of nesting blocks.
    'nesting-block-opening-brace-newline-before': [
      2,
      // There must always be a newline before the opening brace in single-line blocks.
      'always-single-line',
    ],
    // Require a single space or disallow whitespace before the opening brace of nesting blocks.
    'nesting-block-opening-brace-space-before': [
      2,
      // There must never be whitespace before the opening brace in single-line blocks.
      'never-single-line',
    ],

    // # Block
    // Require a newline or disallow whitespace after the closing brace of blocks.
    'block-closing-brace-newline-after': [
      2,
      // There must always be a newline after the closing brace.
      'always',
    ],
    // Require a newline or disallow whitespace before the closing brace of blocks.
    'block-closing-brace-newline-before': [
      2,
      // There must always be a newline before the closing brace in multi-line blocks.
      'always-multi-line',
    ],
    // Require a single space or disallow whitespace after the closing brace of blocks.
    'block-closing-brace-space-after': [
      2,
      // There must always be a single space after the closing brace in single-line blocks.
      'always-single-line',
    ],
    // Require a single space or disallow whitespace before the closing brace of blocks.
    'block-closing-brace-space-before': [
      2,
      // There must always be a single space before the closing brace in single-line blocks.
      'always-single-line',
    ],
    // Disallow empty blocks.
    'block-no-empty': 2,
    // Require a newline after the opening brace of blocks.
    'block-opening-brace-newline-after': [
      2,
      // There must always be a newline after the opening brace.
      'always-multi-line',
    ],
    // Require a newline or disallow whitespace before the opening brace of blocks.
    // (this rule is totally bugged out and does not work properly)
    'block-opening-brace-newline-before': 0,
    // Require a single space or disallow whitespace after the opening brace of blocks.
    'block-opening-brace-space-after': [
      2,
      // There must always be a single space after the opening brace in single-line blocks.
      'always-single-line',
    ],
    // Require a single space or disallow whitespace before the opening brace of blocks.
    'block-opening-brace-space-before': [
      2,
      // There must always be a single space before the opening brace.
      'always',
    ],

    // # Selector
    // Require a single space or disallow whitespace after the combinators of selectors.
    'selector-combinator-space-after': [
      2,
      // There must always be a single space after the combinators.
      'always',
    ],
    // Require a single space or disallow whitespace before the combinators of selectors.
    'selector-combinator-space-before': [
      2,
      // There must always be a single space before the combinators.
      'always'
    ],
    // Disallow attribute selectors.
    'selector-no-attribute': 0,
    // Disallow combinators in selectors.
    'selector-no-combinator': 0,
    // Disallow id selectors.
    'selector-no-id': 2,
    // Disallow type selectors.
    'selector-no-type': 2,
    // Disallow universal selectors.
    'selector-no-universal': 2,
    // Disallow vendor prefixes for selectors.
    'selector-no-vendor-prefix': 2,
    // Specify single or double colon notation for applicable pseudo-elements.
    'selector-pseudo-element-colon-notation': [
      2,
      // Applicable pseudo-elements must always use the double colon notation.
      'double',
    ],
    // Disallow the composition of:root selectors.
    'selector-root-no-composition': 2,

    // # Selector list
    // Require a newline or disallow whitespace after the commas of selector lists.
    'selector-list-comma-newline-after': [
      2,
      // There must always be a newline after the commas in multi-line selector lists.
      'always-multi-line',
    ],
    // Require a newline or disallow whitespace before the commas of selector lists.
    'selector-list-comma-newline-before': [
      2,
      // There must never be whitespace before the commas in multi-line selector lists.
      'never-multi-line',
    ],
    // Require a single space or disallow whitespace after the commas of selector lists.
    'selector-list-comma-space-after': [
      2,
      // There must always be a single space after the commas in single-line selector lists.
      'always-single-line',
    ],
    // Require a single space or disallow whitespace before the commas of selector lists.
    'selector-list-comma-space-before': [
      2,
      // There must never be whitespace before the commas.
      'never',
    ],

    // # Rule
    // Require or disallow an empty line before nested rules.
    'rule-nested-empty-line-before': [
      2,
      // There must never be an empty before rules.
      'never',
    ],
    // Disallow duplicate properties within rules.
    'rule-no-duplicate-properties': 2,
    // Disallow shorthand properties that override related longhand properties.
    'rule-no-shorthand-property-overrides': 2,
    // Disallow single-line rules.
    'rule-no-single-line': 2,
    // Require or disallow an empty line before non-nested rules.
    'rule-non-nested-empty-line-before': [
      2,
      // There must always be an empty line before rules.
      'always',
    ],
    // Specify the order of properties within rules.
    'rule-properties-order': [
      2,
      [
        // Strong properties (for easy debugging)
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

        // Basic box properties
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

        // Flexible layout properties
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

        // Multi-column layout properties
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

        // Table properties
        'border-collapse',
        'border-spacing',
        'caption-side',
        'empty-cells',
        'table-layout',

        // Basic UI properties
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

        // Lists and counters properties
        'counter-increment',
        'counter-reset',
        'list-style',
        'list-style-image',
        'list-style-position',
        'list-style-type',

        // Paged media properties
        'orphans',
        'page-break-after',
        'page-break-before',
        'page-break-inside',
        'marks',
        'quotes',

        // Text properties
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

        // Animation properties
        'animation',
        'animation-delay',
        'animation-direction',
        'animation-duration',
        'animation-fill-mode',
        'animation-iteration-count',
        'animation-name',
        'animation-play-state',
        'animation-timing-function',

        // Background and border properties
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

        // Filter effects, masking, image properties
        'filter',
        'image-orientation',
        'image-rendering',
        'image-resolution',
        'mask',
        'mask-type',
        'object-fit',
        'object-position',

        // Marquee properties
        'marquee-direction',
        'marquee-play-count',
        'marquee-speed',
        'marquee-style',

        // Scrollbar properties
        'scrollbar-3dlight-color',
        'scrollbar-arrow-color',
        'scrollbar-base-color',
        'scrollbar-darkshadow-color',
        'scrollbar-face-color',
        'scrollbar-highlight-color',
        'scrollbar-shadow-color',
        'scrollbar-track-color',

        // Speech properties
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

        // Transform properties
        'transform',
        'transform-origin',
        'transform-style',
        'backface-visibility',
        'perspective',
        'perspective-origin',

        // Transitions properties
        'transition',
        'transition-delay',
        'transition-duration',
        'transition-property',
        'transition-timing-function',

        // Stack order and zoom properties
        'z-index',
        'zoom'
      ]
    ],
    // Require or disallow a trailing semicolon within rules.
    'rule-trailing-semicolon': [
      2,
      // There must always be a trailing semicolon.
      'always',
    ],

    // # Root
    // Disallow standard properties inside :root selectors.
    'root-no-standard-properties': 2,

    // # Media feature
    // Require a single space or disallow whitespace after the colon in media features.
    'media-feature-colon-space-after': [
      2,
      // There must always be a single space after the colon.
      'always',
    ],
    // Require a single space or disallow whitespace before the colon in media features.
    'media-feature-colon-space-before': [
      2,
      // There must never be whitespace before the colon.
      'never',
    ],
    // Disallow vendor prefixes for media feature names.
    'media-feature-name-no-vendor-prefix': 2,
    // Require a single space or disallow whitespace after the range operator in media features.
    'media-feature-range-operator-space-after': [
      2,
      // There must always be a single space after the range operator.
      'always',
    ],
    // Require a single space or disallow whitespace before the range operator in media features.
    'media-feature-range-operator-space-before': [
      2,
      // There must always be a single space before the range operator.
      'always',
    ],

    // # Custom media
    // Specify pattern of custom media query names.
    'custom-media-pattern': [
      2,
      // Only lowercase letters and dashes, like CSS properties.
      /^([a-z]+-+?)*([a-z]+)$/,
    ],

    // # Media query
    // Require a single space or disallow whitespace on the inside of the parentheses within media queries.
    'media-query-parentheses-space-inside': [
      2,
      // There must never be whitespace on the inside the parentheses.
      'never',
    ],

    // # Media query list
    // Require a newline or disallow whitespace after the commas of media query lists.
    'media-query-list-comma-newline-after': [
      2,
      // There must always be a newline after the commas in multi-line media query lists.
      'always-multi-line',
    ],
    // Require a newline or disallow whitespace before the commas of media query lists.
    'media-query-list-comma-newline-before': [
      2,
      // There must never be a white before the commas in multi-line media query lists.
      'never-multi-line',
    ],
    // Require a single space or disallow whitespace after the commas of media query lists.
    'media-query-list-comma-space-after': [
      2,
      // There must always be a single space after the commas in single-line media query lists.
      'always-single-line',
    ],
    // Require a single space or disallow whitespace before the commas of media query lists.
    'media-query-list-comma-space-before': [
      2,
      // There must never be whitepace before the commas.
      'never',
    ],

    // # At rule
    // Require or disallow an empty line before @rules.
    'at-rule-empty-line-before': [
      2,
      // There must always be an empty line before @rules.
      'always',
    ],
    // Disallow vendor prefixes for @rules.
    'at-rule-no-vendor-prefix': 2,

    // # Comment
    // Require or disallow an empty line before comments.
    'comment-empty-line-before': 0,
    // Require a single space or disallow whitespace on the inside of comment markers.
    'comment-space-inside': [
      2,
      // There must always be a single space inside the markers.
      'always',
    ],

    // # General / Sheet
    // Specify indentation.
    'indentation': [
      2,
      // 2 space indentation
      2,
    ],
    // Disallow end-of-line whitespace.
    'no-eol-whitespace': 2,
    // Disallow missing end-of-file newline.
    'no-missing-eof-newline': 2,
    // Disallow multiple empty lines.
    'no-multiple-empty-lines': 2,
  },
};
