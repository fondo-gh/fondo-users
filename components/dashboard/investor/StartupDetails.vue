<template>
  <div>
    <div class="link-heading-text">
      <div class="col-md-12">
        <h3>
          <strong>{{ featured.company_name }}</strong>
          <small>{{ featured.startup_industry }}</small>
        </h3>
        <p>{{ featured.caption }}</p>
      </div>
      <div class="col-md-12 card-container">
        <h4>
          Interested in this startup?
          <nuxt-link to="#">Sign an NDA to see more details</nuxt-link>
        </h4>
      </div>
      <br />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      featured: (state) => state.investor.onestartup
    })
  }
}
</script>
<style></style>
