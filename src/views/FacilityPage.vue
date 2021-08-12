<template>
  <div id="facility">
    <section class="col-md-4 col-12">
      <v-btn
        class="black--text"
        :to="{name:'home'}"
      >
        Back
      </v-btn>
    </section>
    <articles :venue-list="ahpFacilityList" />
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
      ...mapState('ahp', ['ahpFacilityList']),
    },
    mounted () {
      this.fetchData()
    },
    methods: {
      ...mapActions('venue', ['fetchVenueList']),
      ...mapActions('ahp', ['calculateAhpFacilityList']),
      async fetchData () {
        await this.fetchVenueList()
        await this.calculateAhpFacilityList()
      },
    },
  }
</script>
