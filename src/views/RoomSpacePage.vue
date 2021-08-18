<template>
  <div id="roomspace">
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
          <h1>Criteria Room Space</h1>
        </div>
        <div class="hidden" />
      </div>
    </v-app-bar>
    <!-- </section> -->
    <articles :venue-list="ahpRoomSpaceList" />
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'RoomSpace',

    components: {
      Articles: () => import('@/components/home/Articles'),
    },
    computed: {
      ...mapState('ahp', ['ahpRoomSpaceList']),
    },
    mounted () {
      this.fetchData()
    },
    methods: {
      ...mapActions('venue', ['fetchVenueList']),
      ...mapActions('ahp', ['calculateAhpRoomSpaceList']),
      async fetchData () {
        await this.fetchVenueList()
        await this.calculateAhpRoomSpaceList()
      },
    },
  }
</script>
