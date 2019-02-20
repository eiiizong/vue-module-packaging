
// https://eslint.org/docs/user-guide/configuring

module.exports = {
  // 此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  parserOptions: {
    // 此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
    parser: 'babel-eslint'
  },
  parserOptions: {
    // 此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是 script，此处设置为 module，指某块导入方式
    sourceType: 'module'
  },
  //此项指定环境的全局变量，下面的配置指定为浏览器环境
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  // 此项是用来提供插件的，插件名称省略了eslint-plugin-，下面这个配置是用来规范html的
  plugins: ['vue', 'html'],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // js语句结尾必须使用分号
    semi: ['error', 'always'],
    // 引号类型 双引号double 单引号single
    quotes: ['error', 'double'],
    parserOptions: {
      ecmaVersion: 2018
    }
  }
};
