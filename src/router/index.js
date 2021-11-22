import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    },
    {
      path: '/formvenue',
      name: 'formvenue',
      component: () => import(/* webpackChunkName: "contact" */ '../views/FormVenue.vue'),
    },
    {
      path: '/venue/:id',
      name: 'VenueDetail',
      component: () => import(/* webpackChunkName: "contact" */ '../views/Venuedetails'),
    },
    {
      path: '/price',
      name: 'pricepage',
      component: () => import(/* webpackChunkName: "contact" */ '../views/PricePage'),
    },
    {
      path: '/facility',
      name: 'facilitypage',
      component: () => import(/* webpackChunkName: "contact" */ '../views/FacilityPage'),
    },
    {
      path: '/capacity',
      name: 'capacitypage',
      component: () => import(/* webpackChunkName: "contact" */ '../views/CapacityPage'),
    },
    {
      path: '/roomspace',
      name: 'roomspacepage',
      component: () => import(/* webpackChunkName: "contact" */ '../views/RoomSpacePage'),
    },
    {
      path: '/indoor',
      name: 'indoorpage',
      component: () => import(/* webpackChunkName: "contact" */ '../views/IndoorPage'),
    },
    {
      path: '/outdoor',
      name: 'outdoorpage',
      component: () => import(/* webpackChunkName: "contact" */ '../views/OutdoorPage'),
    },
    {
      path: '/decoration',
      name: 'decorationpage',
      component: () => import(/* webpackChunkName: "contact" */ '../views/DecorationPage'),
    },
  ],
})
