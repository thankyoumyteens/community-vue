module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 函数左括号是否有空格
    'space-before-function-paren': 0,
    // 关闭缩进限制
    'indent': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
