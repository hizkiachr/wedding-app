<template>
  <div id="home">
    <core-app-bar />
    <articles>
      <banner />
      <criteria />
    </articles>

    <!-- <about />

    <subscribe />

    <social /> -->
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      // About: () => import('@/components/home/About'),
      CoreAppBar: () => import('@/components/core/AppBar'),
      Articles: () => import('@/components/home/Articles'),
      Banner: () => import('@/components/home/Banner'),
      Criteria: () => import('@/components/home/Criteria'),
      // Social: () => import('@/components/home/Social'),
      // Subscribe: () => import('@/components/home/Subscribe'),
    },
  }
</script>
