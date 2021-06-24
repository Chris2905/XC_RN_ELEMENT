module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      // 添加ES特性支持，使之能够识别ES6语法
      jsx: true,
      "legacyDecorators": true
    },
  },
  env: {
    "browser": true,
    "es6": true,
    "node": true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react'],
  settings: {
    version: 'detect',
    react: {
      version: "16.6.0-alpha.8af6728"
    }
  },
  rules: {
    'constructor-super': 'error',
    'comma-spacing': [2, { before: false, after: true }],
    'max-len': ['warn', { code: 400, "tabWidth": 4 }],
    // 'no-console': ["error", { allow: ["warn", "error"] }],
    'no-debugger': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': 'error',
    'no-extra-semi': 'error',
    'no-inline-comments': 2,
    //不允许重复使用分隔空格
    'no-multi-spaces': 2,
    //不允许多个空行
    'no-multiple-empty-lines': 2,
    'pines-between-class-members': 0,

    'getter-return': 0,
    'no-unused-vars': 'error',
    // jsx中使用单引号
    // 'jsx-quotes': ['error', 'prefer-single'],
    // React相关校验规则
    'react/jsx-indent': [2, 4],
    'react/display-name': 'warn',
    'react/prop-types': [
      'error',
      {
        ignore: ['className', 'children', 'style', 't'],
      },
    ],
    'react/jsx-no-undef': ['warn', { allowGlobals: true }],
    'react/no-deprecated': 'warn',
    'react/no-string-refs': 'warn',
    'react/no-children-prop': 0,
    semi: ['warn', 'always'],
    'semi-spacing': [2, { before: false, after: true }],
  },
};
