<template>
  <div id="capacity">
    <v-parallax
      dark
      :src="require('@/assets/articles/b.jpeg')"
      height="auto"
    >
      <!-- <section class="col-md-4 col-12 "> -->
      <v-app-bar
        class="black--text"
        color="red lighten-4"
      >
        <div class="flex justify-space-between align-center d-flex">
          <div>
            <v-btn
              class="black--text"
              :to="{name:'home'}"
            >
              Back
            </v-btn>
          </div>
          <div class="ml-n14">
            <h1>Criteria Capacity</h1>
          </div>
          <div class="hidden" />
        </div>
      </v-app-bar>
      <!-- </section> -->
      <articles :venue-list="ahpCapacityList" />
    </v-parallax>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'Facilty',

    components: {
      Articles: () => import('@/components/home/Articles'),
    },
    computed: {
      ...mapState('ahp', ['ahpCapacityList']),
    },
    mounted () {
      this.fetchData()
    },
    methods: {
      ...mapActions('venue', ['fetchVenueList']),
      ...mapActions('ahp', ['calculateAhpCapacityList']),
      async fetchData () {
        await this.fetchVenueList()
        await this.calculateAhpCapacityList()
      },
    },
  }
</script>
