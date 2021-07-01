module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: ['prettier', 'react'],
    rules: {
        'global-require': 0,
        'import/no-cycle': 0,
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: ['next.config.js'] },
        ],
        'jsx-a11y/anchor-is-valid': 0,
        'no-await-in-loop': 0,
        'no-constant-condition': 0,
        'no-noninteractive-element-to-interactive-role': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'no-shadow': 0,
        'no-underscore-dangle': 0,
        'one-var': ['error', 'consecutive'],
        'prefer-object-spread': 'off',
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': 'off',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 'first'],
        'react/jsx-props-no-spreading': 'off',
        'react/no-danger': 'off',
        'react/no-array-index-key': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
    },
};
