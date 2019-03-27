// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here "规则名": [规则值, 规则配置]
  //规则级别分别：为"off"(0)关闭、"warn"(1)警告、"error"(2)错误--error触发时，程序退出
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,//箭头函数用小括号括起来
    // allow async-await
    'generator-star-spacing': 0,//生成器函数*的前后空格
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,//禁止使用debugger
    "no-unused-vars": [2, { 
      // 允许声明未使用变量
      "vars": "local",
      // 参数不检查
      "args": "none" 
    }],//不能有声明后未被使用的变量或参数
    //空行最多不能超过100行
    "no-multiple-empty-lines": [0, {"max": 100}],
    "indent": [2, 4],//缩进风格
    //关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [0],
    // 关闭语句强制分号结尾
    "semi": [0],
    // 关闭数组，对象最后一个元素后的逗号检查
    'comma-dangle': 0,
    'no-extra-semi': 0,//禁止多余的冒号
    'new-cap': 0,//函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    'no-new': 0,//禁止在使用new构造一个实例后不赋值
    'no-undef': 0,//不能有未定义的变量
    'max-len': 0,//字符串最大长度
    'space-before-function-paren': [0, 'always'],//函数定义时括号前面要不要有空格
    'no-console': 0,// 禁止使用console
    'no-unused-expressions': 0,//禁止无用的表达式
  }
}
