<template>
  <div id="formvenue">
    <v-parallax
      dark
      :src="require('@/assets/articles/b.jpeg')"
      height="auto"
    >
      <core-app-bar />
      <base-card dark>
        <v-img
          :src="require('@/assets/articles/c.jpeg')"
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
              offset-md="9"
            >
              <h1 class="text-h2 font-weight-black">
                Add Venue
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
              Form Add Venue to AHP
            </h1>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                lg="8"
                cols="12"
              >
                <form>
                  <v-file-input
                    :rules="rules"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Pick an image"
                    prepend-icon="mdi-camera"
                    label="Venue Picture"
                  />
                  <v-text-field
                    v-model="name"
                    :error-messages="nameErrors"
                    label="Venue Name"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                  />
                  <v-text-field
                    v-model="location"
                    :error-messages="locationErrors"
                    label="Venue Location"
                    required
                    @input="$v.location.$touch()"
                    @blur="$v.location.$touch()"
                  />
                  <v-text-field
                    v-model="street"
                    :error-messages="streetErrors"
                    label="Venue Street"
                    required
                    @input="$v.street.$touch()"
                    @blur="$v.street.$touch()"
                  />
                  <v-text-field
                    v-model="address1"
                    :error-messages="address1Errors"
                    label="Venue Address 1"
                    required
                    @input="$v.address1.$touch()"
                    @blur="$v.address1.$touch()"
                  />
                  <v-text-field
                    v-model="address2"
                    :error-messages="address2Errors"
                    label="Venue Address 2"
                    required
                    @input="$v.address2.$touch()"
                    @blur="$v.address2.$touch()"
                  />
                  <v-text-field
                    v-model="price"
                    :error-messages="priceErrors"
                    label="Venue Price"
                    required
                    @input="$v.price.$touch()"
                    @blur="$v.price.$touch()"
                  />
                  <v-text-field
                    v-model="facility"
                    :error-messages="facilityErrors"
                    label="Venue Facility"
                    required
                    @input="$v.facility.$touch()"
                    @blur="$v.facility.$touch()"
                  />
                  <v-text-field
                    v-model="capacity"
                    :error-messages="capacityErrors"
                    label="Venue Capacity"
                    required
                    @input="$v.capacity.$touch()"
                    @blur="$v.capacity.$touch()"
                  />
                  <v-text-field
                    v-model="roomspace"
                    :error-messages="roomspaceErrors"
                    label="Venue Room Space"
                    required
                    @input="$v.roomspace.$touch()"
                    @blur="$v.roomspace.$touch()"
                  />
                  <v-text-field
                    v-model="description"
                    :error-messages="descriptionErrors"
                    label="Venue Description"
                    required
                    @input="$v.description.$touch()"
                    @blur="$v.description.$touch()"
                  />

                  <v-btn
                    class="mr-4"
                    @click="submit"
                  >
                    submit
                  </v-btn>
                  <v-btn @click="clear">
                    clear
                  </v-btn>
                </form>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </section>
    </v-parallax>
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
