<template>
  <div id="home">
    <core-app-bar />
    <articles :venue-list="ahpResult">
      <banner />
      <criteria />
      <!-- <carousel /> -->
    </articles>

    <!-- <about />

    <subscribe />

    <social /> -->
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'Home',

    components: {
      // About: () => import('@/components/home/About'),
      CoreAppBar: () => import('@/components/core/AppBar'),
      Articles: () => import('@/components/home/Articles'),
      Banner: () => import('@/components/home/Banner'),
      Criteria: () => import('@/components/home/Criteria'),
      // Carousel: () => import('@/views/Carousel'),
      // Social: () => import('@/components/home/Social'),
      // Subscribe: () => import('@/components/home/Subscribe'),
    },
    computed: {
      ...mapState('venue', ['venueList']),
      ...mapState('ahp', ['ahpResult']),
    },
    mounted () {
      this.fetchData()
    },
    methods: {
      ...mapActions('venue', ['fetchVenueList']),
      ...mapActions('ahp', ['calculateAhpResult']),
      async fetchData () {
        await this.fetchVenueList()
        await this.calculateAhpResult()
      },
    },
  }
</script>
