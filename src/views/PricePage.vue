<template>
  <div id="price">
    <section class="col-md-4 col-12">
      <v-btn
        class="black--text"
        :to="{name:'home'}"
      >
        Back
      </v-btn>
    </section>

    <articles :venue-list="ahpPriceList" />
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'Price',

    components: {
      Articles: () => import('@/components/home/Articles'),
    },
    computed: {
      ...mapState('ahp', ['ahpPriceList']),
    },
    mounted () {
      this.fetchData()
    },
    methods: {
      ...mapActions('venue', ['fetchVenueList']),
      ...mapActions('ahp', ['calculateAhpPriceList']),
      async fetchData () {
        await this.fetchVenueList()
        await this.calculateAhpPriceList()
      },
    },
  }
</script>
