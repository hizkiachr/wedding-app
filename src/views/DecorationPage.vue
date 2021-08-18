<template>
  <div id="decoration">
    <!-- <section class="col-md-4 col-12 "> -->
    <v-app-bar
      class="white--text"
      color="pink accent-1"
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
          <h1>Criteria Decoration</h1>
        </div>
        <div class="hidden" />
      </div>
    </v-app-bar>
    <!-- </section> -->
    <articles :venue-list="venueList" />
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'Decoration',

    components: {
      Articles: () => import('@/components/home/Articles'),
    },
    computed: {
      ...mapState('venue', ['venueList']),
    },
    mounted () {
      this.fetchData()
    },
    methods: {
      ...mapActions('venue', ['fetchVenueList']),
      async fetchData () {
        this.fetchVenueList({ decoration: 2 })
      },
    },
  }
</script>
