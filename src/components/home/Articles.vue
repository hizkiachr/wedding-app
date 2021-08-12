<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <slot />
      </v-col>

      <v-col
        v-for="(venue, i) in paginatedArticles"
        :key="i"
        cols="12"
        :md="layout[i] === 2 ? 6 : layout[i] === 3 ? 4 : undefined"
      >
        <base-card
          :height="400"
          color="grey lighten-1"
          dark
          :to="{name:'VenueDetail',params:{id:venue.id}}"
        >
          <v-img
            :src="venue.venue_picture"
            height="100%"
            gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
          >
            <v-row
              class="fill-height text-right ma-0"
            >
              <v-col cols="12">
                <!-- <v-chip
              label
              class="mx-0 mb-2 text-uppercase"
              color="grey darken-3"
              text-color="white"
              small
              @click.stop=""
            >
              {{ value.category }}
            </v-chip> -->

                <h3 class="text-h6 font-weight-bold mb-2">
                  {{ venue.venue_name }}
                </h3>

                <div class="text-caption">
                  {{ venue.venue_location }}
                </div>

                <div class="text-caption">
                  {{ venue.venue_street }}
                </div>
              </v-col>
            </v-row>
          </v-img>
        </base-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="3"
        class="text-center"
      >
        <base-btn
          v-if="page !== 1"
          class="ml-0"
          square
          title="Previous page"
          @click="page--"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </base-btn>
      </v-col>
      <v-col
        class="text-right"
        cols="3"
      >
        <base-btn
          v-if="pages > 1 && page < pages"
          class="mr-0"
          square
          title="Next page"
          @click="page++"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </base-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // import { mapActions, mapState } from 'vuex'
  import BaseCard from '@/components/base/Card'

  export default {
    name: 'Feed',
    components: {
      BaseCard,
    },
    props: {
      value: {
        type: Object,
        default: () => ({}),
      },
      venueList: {
        type: Array,
        default: () => ([]),
      },
    },
    data: () => ({
      layout: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      page: 1,
    }),
    computed: {

      pages () {
        return Math.ceil(this.venueList.length / 11)
      },
      paginatedArticles () {
        const start = (this.page - 1) * 11
        const stop = this.page * 11

        return this.venueList.slice(start, stop)
      },
    },
    watch: {
      page () {
        window.scrollTo(0, 0)
      },
    },
    // mounted () {
    //   this.getVenueList()
    // },
    // methods: {
    //   ...mapActions('venue', ['fetchVenueList']),
    //   getVenueList () {
    //     this.fetchVenueList()
    //   },
    // },
  }
</script>
<style>
.v-image__image {
  transition: .3s linear;
}
</style>
