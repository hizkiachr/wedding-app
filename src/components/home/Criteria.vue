<template>
  <v-container fluid>
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="items"
          item-text="name"
          item-value="link"
          label="Criteria"
          solo
          @change="onChangeItem"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      items: [{
        name: 'Price',
        link: '/price',
      }, {
        name: 'Facility',
        link: '/facility',
      }, {
        name: 'Capacity',
        link: '/capacity',
      }, {
        name: 'Room Space',
        link: '/roomspace',
      }],
    }),
    methods: {
      onChangeItem (e) {
        console.log(e)
        // const findItem = this.items.find(e)

        this.$router.push(e)
      },
    },
  }
</script>
