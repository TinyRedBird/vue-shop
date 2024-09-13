//createRouter :创建router实例对象
//createWebHashHistory ：创建哈希模式的路由
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import Login from '../views/Login/index.vue'
import Register from '../views/Register/index.vue'
import Good from '../views/Good/index.vue'
import Shop from '../views/Shop/index.vue'
import SearchGood from '../views/SearchGood/index.vue'
import SearchShop from '../views/SearchShop/index.vue'
import MyOrder from '../views/MyOrder/index.vue'

import ShopManagement from '../views/ShopManagement/index.vue'

//导入二级组件
//Good
import Card from '../views/Shop/Card.vue'
import Layout from '../views/Good/Layout.vue'

//Home
// import SearchBox from '@/views/Home/SearchBox.vue'
// import CaregoryBox from '@/views/Home/CaregoryBox.vue'
// import Every from '../views/Home/Every.vue'
// import My from '../views/Home/My.vue'

//MyOrder






const routes = [
  //path和component对应关系的位置
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      //SearchBox 页默认在Home显示，所以二级路由的 path 置空
      // {path: '', component: SearchBox},
      // {path: '', component: My, name:'My',},
      // {path: '', component: CaregoryBox},
      // {path: '', component: Every},
    ],
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/Good',
    name: 'Good',
    component: Good,
    children: [
      {path: '', component: Layout},
      {path: '', component: Card},
    ],
  },
  {
    path: '/Shop',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/SearchGood',
    name: 'SearchGood',
    component: SearchGood,
  },
  {
    path: '/SearchShop',
    name: 'SearchShop',
    component: SearchShop,
  },
  {
    path: '/MyOrder',
    name: 'MyOrder',
    component: MyOrder,
  },
  {
    path: '/ShopManagement',
    name: 'ShopManagement',
    component: ShopManagement
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
