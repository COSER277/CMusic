import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'explor' }
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      // 歌单详情
      // {
      //   path: 'sheet',
      //   name: 'songsheet',
      //   component: () => import(/* webpackChunkName: "" */ '../views/SongSheet.vue'),
      // },
      {
        path: 'sheet/:id',
        name: 'songsheet',
        component: () => import(/* webpackChunkName: "" */ '../views/SongSheet.vue'),
        props: true
      },
      // 发现音乐
      {
        path: 'explor',
        name: 'explor',
        component: () => import(/* webpackChunkName: "" */ '../views/ExplorMusic.vue'),
      },
      // 本地音乐
      {
        path: 'local',
        name: 'local',
        component: () => import(/* webpackChunkName: "" */ '../views/LocalMusic.vue'),
      },
      // 下载管理
      {
        path: 'download',
        name: 'download',
        component: () => import(/* webpackChunkName: "" */ '../views/DownloadManger.vue'),
      },
    ]
  },
  // 歌单详情
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
