// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Essentials from './components/Essentials'
import Ecosystem from './components/Ecosystem'

// install plugins
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/essentials', name: 'essentials', component: Essentials },
    { path: '/ecosystem', name: 'ecosystem', component: Ecosystem }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <app></app>
      <h1>Named Routes</h1>
      <p>Current route name: {{ $route.name }}</p>
      <p>
        <router-link :to="{ name: 'essentials' }">Essentials</router-link>  |  
        <router-link :to="{ name: 'ecosystem' }">Ecosystem</router-link>
      </p>
      <router-view class="view"></router-view>
    </div>
  `,
  components: {
    App,
    Essentials,
    Ecosystem
  }
}).$mount('#app') // replace div#app in index.html
