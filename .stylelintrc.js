// ref: http://cluex-developers.hateblo.jp/entry/2019/01/10/171237
module.exports = {
  plugins: [
    "stylelint-scss"
  ],
  extends: "stylelint-config-standard",
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/dollar-variable-colon-space-after': 'always'
  },
  ignoreFiles: ["**/*.tsx"]
}
