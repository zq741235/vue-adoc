// https://eslint.vuejs.org/
import pluginVue from 'eslint-plugin-vue'
export default [
    {
        ignores: []
    },
  // add more generic rulesets here, such as:
  // js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  // ...pluginVue.configs['flat/vue2-recommended'], // Use this if you are using Vue.js 2.x.
  {
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off'
    }
  }
]
