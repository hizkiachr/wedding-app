<template>
  <div id="about">
    <core-app-bar />
    <base-card dark>
      <v-img
        v-if="abouts[0].header_about != null"
        :src="abouts[0].header_about"
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
            offset-md="4"
          >
            <h1 class="text-h2 font-weight-black">
              About This App
            </h1>

            <!-- <v-btn
            color="primary"
            depressed
          >
            Subscribe
          </v-btn> -->
          </v-col>
        </v-row>
      </v-img>
    </base-card>
    <section class="px-5 py-3">
      <v-card>
        <v-card-title>
          <h1 class="text-h4 font-weight-bold">
            Wedding Venue Recommendation
          </h1>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col
              lg="8"
              cols="12"
            >
              <br>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut tortor tellus. Donec maximus curs us pulvinar.
                Proin vehicula eros mauris, sit amet rutrum libero vestibulum ac. Morbi ullamcorper eu lacus vulputate consect.
                Etur vivamus sagittis accumsan quam eu malesuada. Proin et ante vel libero ultrices cursus. Donec felis leo, cu
                rsus eget hendrerit at, congue nec enim.
              </p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </section>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'About',
    components: {
      CoreAppBar: () => import('@/components/core/AppBar'),
    },
    data () {
      return {
        abouts: [],
      }
    },
    mounted () {
      this.onFetchData()
    },
    methods: {
      async onFetchData () {
        const abouts = await axios.get(
          'http://127.0.0.1:8000/api/about',
        )
        this.abouts = abouts.data.data
      },
    },
  }
</script>
