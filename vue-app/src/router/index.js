import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RewardsView from '../views/RewardsView.vue'
import OrderView from '../views/OrderView.vue'
import OurStory from '../views/OurStory.vue'
import SignIn from '../views/SignIn.vue'
import ProductsList from '../components/ProductsList.vue'
import ProductSummary from '../views/ProductSummary.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/rewards',
    name: 'Rewards',
    component: RewardsView,
  },
  {
    path: '/our-story',
    name: 'Our-Story',
    component: OurStory,
  },
  {
    path: '/sign-in',
    name: 'Sign-In',
    component: SignIn,
  },
  {
    path: '/order',
    name: 'Order',
    component: OrderView,
  },
  {
    // Will redirect in menu view to products by category
    path: '/menu/:category',
    name: 'Product',
    component: ProductsList,
  },
  {
    path: '/menu/all',
    name: 'Menu',
    component: ProductsList,
  },
  {
    path: '/menu/product-summary/:product',
    name: 'Product-Summary',
    component: ProductSummary,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
