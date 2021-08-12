import Vue from 'vue'
import Vuex from 'vuex'
import venue from './venue.module'
import ahp from './ahp.module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: require('@/data/articles.json'),
    drawer: false,
    items: [
      {
        text: 'Home',
        to: '/',
      },
      {
        text: 'About',
        to: '/about',
      },
      {
        text: 'Contact',
        to: '/contact',
      },
    ],
  },
  getters: {
    categories: state => {
      const categories = []

      for (const article of state.articles) {
        if (
          !article.category ||
          categories.find(category => category.text === article.category)
        ) continue

        const text = article.category

        categories.push({
          text,
          href: '#!',
        })
      }

      return categories.sort().slice(0, 4)
    },
    links: (state) => {
      return state.items
    },
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
  },
  actions: {

  },
  modules: {
    venue,
    ahp,
  },
})
