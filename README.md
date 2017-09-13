# stylelint-config-strict

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/ygkcNhfZ9nTDeVM6P8LSGn1C/keithamus/stylelint-config-strict'>  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/ygkcNhfZ9nTDeVM6P8LSGn1C/keithamus/stylelint-config-strict.svg' /></a>

[StyleLint][] sharable config for strict [linting](https://en.wikipedia.org/wiki/Lint_(software)) of CSS.

## Installation

Install this config package and StyleLint:

```bash
$ npm install --save-dev stylelint stylelint-config-strict
```

## Usage

This set of configs is meant to be extended on a per-project basis as necessary
using StyleLint's [shareable configs][] feature.

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

Feel free to define additional rules, or override them as you see fit:

```json
{
  "extends": ["strict"],
  "rules": {
      "string-quotes": "double"
  }
}
```

For more details about how shareable configs work, see the [StyleLint documentation][shareable configs].

[StyleLint]: https://github.com/stylelint/stylelint
[shareable configs]: http://StyleLint.org/docs/developer-guide/shareable-configs
