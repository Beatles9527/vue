// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function (createElement) {
    return createElement('h2',
      {class: 'box'},
      ['Hello World...', createElement('button', ['按钮'])])
  }
})

// runtime-compiler(v1)
// template -> ast -> render -> vdom -> UI

// runtime-only(v2)(性能更高，代码量更少)
// render -> vdom -> UI
