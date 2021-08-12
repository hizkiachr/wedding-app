import axios from 'axios'

const venue = {
  state: {
    venueList: [],
    venueDetail: {},
  },
  mutations: {
    setVenueList (state, payload) {
      state.venueList = payload
    },
    setVenueDetail (state, payload) {
      state.venueDetail = payload
    },
  },
  actions: {
    // eslint-disable-next-line no-use-before-define
    async fetchVenueList (context, { kind, decoration } = { kind, decoration: null }) {
      const params = new URLSearchParams()
      if (kind != null) {
        params.append('kind', kind)
      }
      if (decoration != null) {
        params.append('decoration', decoration)
      }
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/venue?${params}`,
      )

      context.commit('setVenueList', data.data)
    },
    async fetchVenueDetail (context, { id }) {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/venue/${id}`,
      )

      context.commit('setVenueDetail', data.data)
    },
  },
  getters: {

  },
  namespaced: true,
}

export default venue
