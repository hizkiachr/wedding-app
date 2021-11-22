<template>
  <base-card>
    <v-parallax
      dark
      :src="require('@/assets/articles/b.jpeg')"
      height="auto"
    >
      <section class="col-md-4 col-12">
        <v-btn
          class="black--text"
          @click="$router.go(-1)"
        >
          Back
        </v-btn>
      </section>

      <v-carousel
        v-if="venueDetail.venue_banners"
        v-model="model"
      >
        <v-carousel-item
          v-for="(banner, i) in venueDetail.venue_banners"
          :key="i"
        >
          <v-img
            :src="banner.venue_image"
            height="100%"
          />
        <!--
          <v-sheet
          :color="color"
          height="110%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="text-h2">
              Slide {{ i + 1 }}
            </div>
          </v-row>
          </v-sheet> -->
        </v-carousel-item>
      </v-carousel>
      <section class="px-5 py-3">
        <v-card>
          <v-card-title>
            <h1 class="text-h4 font-weight-bold">
              {{ venueDetail.venue_name }}
            </h1>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="8">
                <h2>{{ venueDetail.venue_address1 }}</h2>
                <h2>{{ venueDetail.venue_address2 }}</h2>
              </v-col>
              <v-col
                lg="8"
                cols="12"
              >
                <h2>About Place</h2>
                <br>
                <p>
                  {{ venueDetail.venue_description }}
                </p>
              </v-col>
              <v-col cols="8">
                <h2>Price : Rp. {{ venueDetail.venue_price }}</h2>
                <br>
                <h2>Capacity : {{ venueDetail.venue_capacity }} pax</h2>
                <br>
                <h2>Facilities : </h2>
                <br>
                <p>{{ venueDetail.venue_facility_list }}</p>
                <h2>{{ venueDetail.venue_roomspace }}m</h2>
              </v-col>
              <v-col cols="4">
                <v-card elevation="1">
                  <v-card-title>
                    Contact for Order
                  </v-card-title>
                  <v-card-text>
                    <div>
                      <h3>
                        Phone Number
                      </h3>
                      <div>
                        {{ venueDetail.venue_contact }}
                      </div>
                    </div>
                    <div>
                      <h3>
                        Website
                      </h3>
                      <div>
                        <a :href="venueDetail.venue_website">Website</a>
                      </div>
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="#25D366"
                      class="white--text"
                    >
                      Contact
                      <v-icon>
                        mdi mdi-whatsapp
                      </v-icon>
                    </v-btn>
                    <v-btn
                      color="#833AB4"
                      class="white--text"
                      :href="venueDetail.venue_socmed1"
                    >
                      Instagram
                      <v-icon>
                        mdi mdi-instagram
                      </v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-card-actions>
                    <v-btn
                      color="#1DA1F2"
                      class="white--text"
                      :href="venueDetail.venue_socmed3"
                    >
                      Twitter
                      <v-icon>
                        mdi mdi-twitter
                      </v-icon>
                    </v-btn>
                    <v-btn
                      :href="venueDetail.venue_socmed2"
                      color="#4267B2"
                      class="white--text"
                    >
                      Facebook
                      <v-icon>
                        mdi mdi-facebook
                      </v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </section>
    </v-parallax>
  </base-card>
</template>
<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'VenueDetails',
    components: {

    },
    data: () => ({
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    }),
    computed: {
      ...mapState('venue', ['venueDetail']),
    },
    mounted () {
      this.getVenueDetail()
    },
    methods: {
      ...mapActions('venue', ['fetchVenueDetail']),
      getVenueDetail () {
        const id = this.$route.params.id
        this.fetchVenueDetail({ id: id })
      },
    },
  }
</script>
