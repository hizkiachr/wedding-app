<template>
  <div id="home">
    <core-app-bar />
    <v-parallax
      dark
      :src="require('@/assets/articles/b.jpeg')"
      height="auto"
    >
      <articles :venue-list="ahpResult">
        <banner />
        <criteria />
      <!-- <carousel /> -->
      </articles>
    </v-parallax>
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
