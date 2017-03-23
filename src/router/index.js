import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Comming from '@/components/Comming'
import MovieDetail from '@/components/MovieDetail'
import Search from '@/components/Search'
import SearchResult from '@/components/Search/searchresult'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
        path: '/comming',
        name: 'Comming',
        component: Comming
    },
    {
      path: '/movie/:id',
      name: 'MovieDetail',
      component: MovieDetail
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/searchresult',
      name: 'SearchResult',
      component: SearchResult
    }
  ]
})
