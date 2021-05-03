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
    <articles />
  </div>
</template>

<script>
  export default {
    name: 'Price',

    components: {
      Articles: () => import('@/components/home/Articles'),
    },
  }
</script>
