<template>
  <div class="full-container">
    <div class="header-container">
      <base-header />
    </div>
    <div class="banner-container">
      <carousel />
    </div>
    <div class="explore-container">
      <explore />
    </div>
    <div class="featured-container">
      <featured />
    </div>
    <div class="investor-container">
      <investor />
    </div>
    <div class="footer-container">
      <base-footer />
    </div>
  </div>
</template>
<script>
import Carousel from './../components/home/Carousel'
import Explore from './../components/home/Explore'
import Featured from './../components/home/Featured'
import Investor from './../components/home/Investor'

export default {
  components: {
    Carousel,
    Explore,
    Featured,
    Investor
  }
}
</script>
