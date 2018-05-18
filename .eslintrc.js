// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // http://eslint.cn/docs/rules/
  // add your custom rules here
  // "off" or 0 关闭规则
  // "warn" or 1 打开规则，出现警告提示
  // "error" or 2 打开规则，出现错误提示
  'rules': {
    //不要求文件末尾空行
    'eol-last': 0,
    //不要求使用 === 和 !==
    'eqeqeq': 0,
    //警告在return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 1,
    // 不要求箭头函数的参数使用圆括号
    'arrow-parens': 0,
    // 不强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': 0,
    //警告出现未使用过的变量
    "no-unused-vars": 1,
    // 禁止在非生成环境出现 debugger
    'no-debugger': process.env.NODE_ENV === 'development' ? 0 : 2
  }
}
