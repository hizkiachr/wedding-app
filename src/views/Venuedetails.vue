<template>
  <base-card>
    <section class="col-md-4 col-12">
      <v-btn
        class="black--text"
        :to="{name:'home'}"
      >
        Back
      </v-btn>
    </section>
    <v-img
      :src="require('@/assets/articles/atria_01.jpg')"
      class="grey lighten-2"
      height="400"
      width="100%"
    >
      <v-row
        class="fill-height pa-3"
        align="center"
      >
        <v-col
          cols="12"
          md="7"
          offset-md="5"
        />
      </v-row>
    </v-img>
    <section class="px-5 py-3">
      <v-card>
        <v-card-title>
          <h1 class="text-h4 font-weight-bold">
            Atria Gading Serpong
          </h1>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="8">
              <h2>Jalan. Gading Serpong Boulevard Gg. Kavling 2,</h2>
              <h2>Pakulonan Bar., Kec. Klp. Dua, Tangerang, Banten 15810</h2>
            </v-col>
            <v-col
              lg="8"
              cols="12"
            >
              <h2>About Place</h2>
              <br>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut tortor tellus. Donec maximus curs us pulvinar.
                Proin vehicula eros mauris, sit amet rutrum libero vestibulum ac. Morbi ullamcorper eu lacus vulputate consect.
                Etur vivamus sagittis accumsan quam eu malesuada. Proin et ante vel libero ultrices cursus. Donec felis leo, cu
                rsus eget hendrerit at, congue nec enim.
              </p>
            </v-col>
            <v-col cols="8">
              <h2>Price : Rp. 123.456.789</h2>
              <br>
              <h2>Capacity : 50 pax</h2>
              <br>
              <h2>Facilities : </h2>
              <br>
              <p>Free Catering, Free Parking, Free Stand</p>
              <h2>240m x 160m</h2>
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
                      081322233078
                    </div>
                  </div>
                  <div>
                    <h3>
                      Website
                    </h3>
                    <div>
                      <a href="https://www.instagram.com/atriaserpong/">Atria</a>
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
                    href="https://www.instagram.com/atriaserpong/"
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
                    href="https://twitter.com/AtriaHtlSerpong"
                  >
                    Twitter
                    <v-icon>
                      mdi mdi-twitter
                    </v-icon>
                  </v-btn>
                  <v-btn
                    href="https://www.facebook.com/AtriaGadingSerpong/"
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
  </base-card>
</template>
<script>
  export default {
    name: 'VenueDetails',
    components: {

    },
  }
</script>
