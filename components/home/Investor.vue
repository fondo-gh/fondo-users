<template>
  <div class="explore container">
    <div class="service-caption">
      <h1 class="norm-padding">Become a FONDO Investor Today!</h1>
      <p>
        Fondo is giving investors an opportunity to invest as little as they can
        and also to diversify their investment portfolios by investing in other
        startups.
      </p>
      <br />
      <nuxt-link to="/register">Get Started Here</nuxt-link>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      featured: (state) => state.startups.featured
    })
  }
}
</script>
<style>
.service-caption {
  padding: 3% 0 3% 0;
}

.service-caption h1 {
  font-weight: 700;
}

.service-caption a {
  display: inline-block;
  background: var(--fondo-yellow);
  color: #333;
  padding: 10px 25px;
  font-size: 1.2em;
  font-weight: 700;
  border-radius: 5px;
}
</style>
