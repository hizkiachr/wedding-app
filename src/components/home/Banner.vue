<template>
  <base-card dark>
    <v-img
      :src="require('@/assets/articles/headerhome.jpeg')"
      class="grey lighten-2"
      height="400"
      width="100%"
    >
      <v-row
        class="fill-height pt-16 mt-16"
        align="center"
      >
        <v-col
          cols="12"
          md="7"
          offset-md="6"
        >
          <h1 class="text-h2 font-weight-black">
            Wedding Venue Recommendation
          </h1>

          <div class="subheading text-uppercase pl-2 mb-4">
            South Tangerang
          </div>

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
</template>

<script>
  export default {
    name: 'HomeBanner',
  }
</script>
