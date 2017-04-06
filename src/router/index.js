import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/components/Index'], resolve)
    },
    {
        path: '/comming',
        name: 'Comming',
        component: resolve => require(['@/components/Comming'], resolve)
    },
    {
      path: '/movie/:id',
      name: 'MovieDetail',
      component: resolve => require(['@/components/MovieDetail'], resolve)
    },
    {
      path: '/search',
      name: 'Search',
      component: resolve => require(['@/components/Search'], resolve)
    },
    {
      path: '/searchresult',
      name: 'SearchResult',
      component: resolve => require(['@/components/Search/SearchResult'], resolve)
    },
    {
      path: '/smallComment/:id',
      name: 'smallComment',
      component: resolve => require(['@/components/Comment/smallComment'], resolve)
    },
    {
      path: '/cast/:id',
      name: 'cast',
      component: resolve => require(['@/components/Casts'], resolve)
    },
    {
      path: '/castitem/:id',
      name: 'castitem',
      component: resolve => require(['@/components/Casts/CastItem'], resolve)
    }
  ]
})
