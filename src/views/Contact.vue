<template>
  <div id="contact">
    <core-app-bar />

    <base-card dark>
      <v-img
        v-if="contacts[0].header_contact != null"
        :src="contacts[0].header_contact"
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
            offset-md="3"
          >
            <h1 class="text-h2 font-weight-black">
              Contact
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
            Get In Touch
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut tortor tellus. Donec maximus curs us pulvinar.
                Proin vehicula eros mauris, sit amet rutrum libero vestibulum ac. Morbi ullamcorper eu lacus vulputate consect.
                Etur vivamus sagittis accumsan quam eu malesuada. Proin et ante vel libero ultrices cursus. Donec felis leo, cu
                rsus eget hendrerit at, congue nec enim.
              </p>
            </v-col>
            <v-col cols="4">
              <v-card elevation="1">
                <v-card-title v-if="contacts.length > 0">
                  {{ contacts[0].title_contact }}
                </v-card-title>
                <!-- <v-card-title>
                  Contact Us
                </v-card-title> -->
                <v-card-text>
                  <div>
                    <h3>
                      Phone Number
                    </h3>
                    <div>
                      08123456789
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
                    href="https://www.instagram.com/hizkiachristopher/"
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
                    href="https://twitter.com/hizkiachr"
                  >
                    Twitter
                    <v-icon>
                      mdi mdi-twitter
                    </v-icon>
                  </v-btn>
                  <v-btn
                    href="https://www.facebook.com/hizkiachr/"
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
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'Contact',
    components: {
      CoreAppBar: () => import('@/components/core/AppBar'),
    },
    data () {
      return {
        contacts: [],
      }
    },
    mounted () {
      this.onFetchData()
    },
    methods: {
      async onFetchData () {
        const contacts = await axios.get(
          'http://127.0.0.1:8000/api/contact',
        )
        this.contacts = contacts.data.data
      },
    },
  }
</script>
