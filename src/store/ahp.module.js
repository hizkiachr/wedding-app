import AHP from 'ahp'
const venue = {
  state: {
    ahpPriceList: [],
    ahpFacilityList: [],
    ahpCapacityList: [],
    ahpRoomSpaceList: [],
    ahpResult: [],
  },
  mutations: {
    setAHPPriceList (state, payload) {
      state.ahpPriceList = payload
    },
    setAHPFacilityList (state, payload) {
      state.ahpFacilityList = payload
    },
    setAHPCapacityList (state, payload) {
      state.ahpCapacityList = payload
    },
    setAHPRoomSpaceList (state, payload) {
      state.ahpRoomSpaceList = payload
    },
    setAHPResult (state, payload) {
      state.ahpResult = payload
    },
  },
  actions: {
    async calculateAhpPriceList (context) {
      const venueList = context.rootState.venue.venueList
      // console.log(venueList)
      var ahpContext = new AHP()

      const mapVenueName = venueList.map((value) => {
        return value.venue_name
      })

      const mapVenuePrice = venueList.map((value) => {
        return value.venue_price
      })

      // Gedung
      ahpContext.addItems(mapVenueName)

      // Criteria
      ahpContext.addCriteria(['harga'])

      // rank criteria with absolute rank scole
      ahpContext.setCriteriaItemRankByGivenScores('harga', mapVenuePrice)

      ahpContext.rankCriteria([['harga', 'harga', 1]])

      const output = ahpContext.run()

      const rankedScoreMap = output.rankedScoreMap

      const venueRankedMap = []

      Object.entries(rankedScoreMap).forEach((venue, venueKey) => {
        // console.log(value[0])
        // console.log(venueList.find((value) => value.venue_name === 'Getsemany Function Hall'))

        const venueDetail = venueList.find((value) => {
          // eslint-disable-next-line eqeqeq
          return value.venue_name === venue[0]
        })
        venueDetail.score = venue[1]

        venueRankedMap.push(venueDetail)
        // venueDetail.score = value
        // return venueDetail
      })

      const sortVenueScore = venueRankedMap.sort((a, b) => b.score - a.score)

      context.commit('setAHPPriceList', sortVenueScore)

      console.log('harga', venueRankedMap)
      console.log('hasilHarga', sortVenueScore)
    },
    async calculateAhpFacilityList (context) {
      const venueList = context.rootState.venue.venueList
      // console.log(venueList)
      var ahpContext = new AHP()

      const mapVenueName = venueList.map((value) => {
        return value.venue_name
      })

      const mapVenueFacility = venueList.map((value) => {
        return value.venue_facility
      })

      // Gedung
      ahpContext.addItems(mapVenueName)

      // Criteria
      ahpContext.addCriteria(['fasilitas'])

      // rank criteria with absolute rank scole
      ahpContext.setCriteriaItemRankByGivenScores('fasilitas', mapVenueFacility)

      ahpContext.rankCriteria([['fasilitas', 'fasilitas', 1]])

      const output = ahpContext.run()

      console.log(output)

      const rankedScoreMap = output.rankedScoreMap

      const venueRankedMap = []

      Object.entries(rankedScoreMap).forEach((venue, venueKey) => {
        // console.log(value[0])
        // console.log(venueList.find((value) => value.venue_name === 'Getsemany Function Hall'))

        const venueDetail = venueList.find((value) => {
          // eslint-disable-next-line eqeqeq
          return value.venue_name === venue[0]
        })
        venueDetail.score = venue[1]

        venueRankedMap.push(venueDetail)
        // venueDetail.score = value
        // return venueDetail
      })

      const sortVenueScore = venueRankedMap.sort((a, b) => b.score - a.score)

      context.commit('setAHPFacilityList', sortVenueScore)

      console.log('fasilitas', venueRankedMap)
      console.log('hasilFasilitas', sortVenueScore)
    },
    async calculateAhpCapacityList (context) {
      const venueList = context.rootState.venue.venueList
      // console.log(venueList)
      var ahpContext = new AHP()

      const mapVenueName = venueList.map((value) => {
        return value.venue_name
      })

      const mapVenueCapacity = venueList.map((value) => {
        return value.venue_capacity
      })

      // Gedung
      ahpContext.addItems(mapVenueName)

      // Criteria
      ahpContext.addCriteria(['kapasitas'])

      // rank criteria with absolute rank scole
      ahpContext.setCriteriaItemRankByGivenScores('kapasitas', mapVenueCapacity)

      ahpContext.rankCriteria([['kapasitas', 'kapasitas', 1]])

      const output = ahpContext.run()

      console.log(output)

      const rankedScoreMap = output.rankedScoreMap

      const venueRankedMap = []

      Object.entries(rankedScoreMap).forEach((venue, venueKey) => {
        // console.log(value[0])
        // console.log(venueList.find((value) => value.venue_name === 'Getsemany Function Hall'))

        const venueDetail = venueList.find((value) => {
          // eslint-disable-next-line eqeqeq
          return value.venue_name === venue[0]
        })
        venueDetail.score = venue[1]

        venueRankedMap.push(venueDetail)
        // venueDetail.score = value
        // return venueDetail
      })

      const sortVenueScore = venueRankedMap.sort((a, b) => b.score - a.score)

      context.commit('setAHPCapacityList', sortVenueScore)

      console.log('kapasitas', venueRankedMap)
      console.log('hasilKapasitas', sortVenueScore)
    },
    async calculateAhpRoomSpaceList (context) {
      const venueList = context.rootState.venue.venueList
      // console.log(venueList)
      var ahpContext = new AHP()

      const mapVenueName = venueList.map((value) => {
        return value.venue_name
      })

      const mapVenueRoomSpace = venueList.map((value) => {
        return value.venue_roomspace
      })

      // Gedung
      ahpContext.addItems(mapVenueName)

      // Criteria
      ahpContext.addCriteria(['luas'])

      // rank criteria with absolute rank scole
      ahpContext.setCriteriaItemRankByGivenScores('luas', mapVenueRoomSpace)

      ahpContext.rankCriteria([['luas', 'luas', 1]])

      const output = ahpContext.run()

      console.log(output)

      const rankedScoreMap = output.rankedScoreMap

      const venueRankedMap = []

      Object.entries(rankedScoreMap).forEach((venue, venueKey) => {
        // console.log(value[0])
        // console.log(venueList.find((value) => value.venue_name === 'Getsemany Function Hall'))

        const venueDetail = venueList.find((value) => {
          // eslint-disable-next-line eqeqeq
          return value.venue_name === venue[0]
        })
        venueDetail.score = venue[1]

        venueRankedMap.push(venueDetail)
        // venueDetail.score = value
        // return venueDetail
      })

      const sortVenueScore = venueRankedMap.sort((a, b) => b.score - a.score)

      context.commit('setAHPRoomSpaceList', sortVenueScore)

      console.log('luas', venueRankedMap)
      console.log('hasilLuas', sortVenueScore)
    },
    async calculateAhpResult (context) {
      const venueList = context.rootState.venue.venueList
      // console.log(venueList)
      var ahpContext = new AHP()

      const mapVenueName = venueList.map((value) => {
        return value.venue_name
      })

      const mapVenuePrice = venueList.map((value) => {
        return value.venue_price
      })

      const mapVenueFacility = venueList.map((value) => {
        return value.venue_facility
      })

      const mapVenueCapacity = venueList.map((value) => {
        return value.venue_capacity
      })

      const mapVenueRoomSpace = venueList.map((value) => {
        return value.venue_roomspace
      })

      // Gedung
      ahpContext.addItems(mapVenueName)

      // Criteria
      ahpContext.addCriteria(['harga', 'fasilitas', 'kapasitas', 'luas'])

      // rank criteria with absolute rank scole
      ahpContext.setCriteriaItemRankByGivenScores('harga', mapVenuePrice)
      ahpContext.setCriteriaItemRankByGivenScores('fasilitas', mapVenueFacility)
      ahpContext.setCriteriaItemRankByGivenScores('kapasitas', mapVenueCapacity)
      ahpContext.setCriteriaItemRankByGivenScores('luas', mapVenueRoomSpace)

      ahpContext.rankCriteria([
        ['harga', 'kapasitas', 2.9],
        ['harga', 'fasilitas', 1.6],
        ['harga', 'luas', 3.6],
        ['kapasitas', 'fasilitas', 0.42],
        ['kapasitas', 'luas', 1.7],
        ['fasilitas', 'luas', 3],
      ])

      const output = ahpContext.run()

      console.log(output)

      const rankedScoreMap = output.rankedScoreMap

      const venueRankedMap = []

      Object.entries(rankedScoreMap).forEach((venue, venueKey) => {
        // console.log(value[0])
        // console.log(venueList.find((value) => value.venue_name === 'Getsemany Function Hall'))

        const venueDetail = venueList.find((value) => {
          // eslint-disable-next-line eqeqeq
          return value.venue_name === venue[0]
        })
        venueDetail.score = venue[1]

        venueRankedMap.push(venueDetail)
        // venueDetail.score = value
        // return venueDetail
      })

      const sortVenueScore = venueRankedMap.sort((a, b) => b.score - a.score)

      context.commit('setAHPResult', sortVenueScore)

      console.log('result', venueRankedMap)
      console.log('hasilResult', sortVenueScore)
    },
  },
  getters: {},
  namespaced: true,
}

export default venue
