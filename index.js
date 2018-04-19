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
    'font-family-name-quotes': 'always-where-required',

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
    'function-url-quotes': 'always',
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
    'length-zero-no-unit': true,

    // # String
    // Disallow (unescaped) newlines in strings.
    'string-no-newline': true,
    // Specify single or double quotes around strings
    // Strings must always be wrapped with single quotes.
    'string-quotes': 'single',

    // # Time
    // Disallow animation and transition times under 100ms.
    'time-min-milliseconds': 100,

    // # Unit
    // Specify a blacklist of disallowed units.
    'unit-blacklist': ['in', 'pt', 'pc', 'mm', 'cm', 'ch', 'ex'],
    // Specify lowercase or uppercase for units.
    'unit-case': 'lower',
    // Specify a whitelist of allowed units.
    // 'unit-whitelist': false,
    // Disallow unknown units.
    'unit-no-unknown': true,

    // # Value
    // Disallow vendor prefixes for values.
    'value-no-vendor-prefix': true,

    // # Value list
    // Specify lowercase or uppercase for keywords values.
    'value-keyword-case': 'lower',
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
    // Specify pattern of custom properties.
    // Only lowercase letters and dashes, like CSS properties.
    'custom-property-pattern': /^.([a-z](-[a-z])?)+(__([a-z](-[a-z])?)+)?(--([a-z](-[a-z])?)+)?$/,

    // # Shorthand property
    // Disallow redundant values in shorthand properties.
    'shorthand-property-no-redundant-values': true,

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
    // Disallow shorthand properties that override related longhand properties within declaration blocks.
    'declaration-block-no-shorthand-property-overrides': true,
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
    'block-opening-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
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
    // Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
    'selector-attribute-brackets-space-inside': 'never',
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
    // Disallow qualifying a selector by type.
    'selector-no-qualifying-type': [ true, { ignore: [ 'attribute' ] } ],
    // Disallow id selectors.
    'selector-max-id': 0,
    // Disallow nested type selectors.
    'selector-max-type': 1,
    // Disallow universal selectors.
    'selector-max-universal': 0,

    // Disallow vendor prefixes for selectors.
    'selector-no-vendor-prefix': true,
    // Specify lowercase or uppercase for pseudo-class selectors.
    'selector-pseudo-class-case': 'lower',
    // Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors.
    'selector-pseudo-class-parentheses-space-inside': 'never',
    // Specify lowercase or uppercase for pseudo-element selectors.
    'selector-pseudo-element-case': 'lower',
    // Specify single or double colon notation for applicable pseudo-elements.
    // Applicable pseudo-elements must always use the double colon notation.
    'selector-pseudo-element-colon-notation': 'double',
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

    // # Rule
    // Require or disallow an empty line before rules.
    // There must always be an empty before rules.
    // There must never be an empty line before nested rules
    'rule-empty-line-before': [ 'always', {
      'except': [
        'inside-block'
      ]
    }],

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
    'media-feature-parentheses-space-inside': 'never',

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
    'at-rule-empty-line-before': ['always', { except: ['blockless-after-blockless'] }],
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
    // Specify a blacklist of disallowed words within comments.
    'comment-word-blacklist': [ 'TODO', 'FIXME', 'XXX' ],

    // # General / Sheet
    // Specify indentation.
    'indentation': [ 2, { indentInsideParens: 'twice' } ],
    // Limit the number of adjacent empty lines.
    'max-empty-lines': 2,
    // Limit the length of a line.
    'max-line-length': 120,
    // Limit the depth of nesting.
    'max-nesting-depth': 5,
    // Disallow duplicate selectors.
    'no-duplicate-selectors': true,
    // Disallow end-of-line whitespace.
    'no-eol-whitespace': true,
    // Disallow double-slash comments (//...) which are not supported by CSS.
    'no-invalid-double-slash-comments': true,
    // Disallow missing end-of-source newline.
    'no-missing-end-of-source-newline': true,
    // Disallow animation names that do not correspond to a @keyframes declaration.
    'no-unknown-animations': true,
  },
};
