<template>
  <div>
    <div class="card-container">
      <div
        v-for="feature in startups"
        :key="feature.id"
        class="col-md-3 featured-content"
      >
        <nuxt-link
          :to="{
            name: 'dashboard-investor-startup-id',
            params: { id: feature.uuid }
          }"
        >
          <b-card
            :img-alt="feature.company_name"
            img-top
            :img-src="feature.product_image"
            tag="article"
            style="max-width: 20rem;max-height: 20rem"
            class="mb-2"
          >
            <b-card-text>
              <h5>
                <strong>{{ feature.company_name }}</strong>
              </h5>
              <small>{{ feature.startup_detail.startup_industry }}</small>
            </b-card-text>
          </b-card>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      startups: (state) => state.investor.approvedstartups
    })
  }
}
</script>
<style></style>
