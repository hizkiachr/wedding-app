<template>
  <div id="outdoor">
    <section class="col-md-4 col-12">
      <v-btn
        class="black--text"
        :to="{name:'home'}"
      >
        Back
      </v-btn>
    </section>
    <articles :venue-list="venueList" />
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'Outdoor',

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
        this.fetchVenueList({ kind: 1 })
      },
    },
  }
</script>
