import Vue from 'vue'
import VueRouter from 'vue-router'
import {store} from "./store";
import routes from './router'

window.eventBus = new Vue();
Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter(
    routes
)

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
        next({
            name: 'login',
        })
        } else {
        next()
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (store.getters.loggedIn) {
        next({
            name: 'home',
        })
        } else {
        next()
        }
    } else {
        next()
    }
})

Vue.component('master', require('./components/layouts/Master.vue').default);
Vue.component('navigation', require('./components/Navigation.vue').default);
const app = new Vue({
    el: '#app',
    store,
    router: router,
});
