module.exports = {
    plugins: ['stylelint-scss'],
    extends: [
        'stylelint-config-standard',
        'stylelint-config-css-modules',
        'stylelint-config-prettier',
    ],
    rules: {
        'at-rule-empty-line-before': [
            'always',
            {
                ignore: ['after-comment', 'first-nested'],
                ignoreAtRules: ['import'],
            },
        ],
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'for',
                    'each',
                    'else',
                    'extend',
                    'extends',
                    'if',
                    'ignores',
                    'include',
                    'mixin',
                ],
            },
        ],
        'block-opening-brace-space-before': 'always',
        'declaration-colon-space-after': 'always',
        'declaration-colon-space-before': 'never',
        indentation: 4,
        'max-empty-lines': 1,
        'max-nesting-depth': null,
        'no-descending-specificity': null,
        'rule-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
            },
        ],
    },
    ignoreFiles: ['**/_resets.scss'],
};
