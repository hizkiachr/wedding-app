<template>
  <div id="roomspace">
    <section class="col-md-4 col-12">
      <v-btn
        class="black--text"
        :to="{name:'home'}"
      >
        Back
      </v-btn>
    </section>

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
