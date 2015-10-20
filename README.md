# stylelint-config-strict

[StyleLint][] sharable config for strict linting.

## Installation

Install this config package and StyleLint:

```bash
$ npm install --save-dev stylelint stylelint-config-strict
```

## Usage

This set of configs is meant to be extended on a per-project basis as necessary
using StyleLint's [shareable configs][config] feature.

To start, simply add `extends: ["strict"]` to your `.stylelintrc`:

```json
{
  "extends": ["strict"]
}
```

Add any additional plugins you want, for example:

```json
{
  "extends": ["strict", "another-style-guideline"]
}
```

Feel free to change any rules as you see fit:

```json
{
  "extends": ["strict"],

  "rules": {
      "string-quotes": [2, "double"]
  }
}
```

For more details about how shareable configs work, see the [StyleLint documentation][config].

[StyleLint]: https://github.com/stylelint/stylelint
[config]: https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md
