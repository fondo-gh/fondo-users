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
            params: { id: feature.id }
          }"
        >
          <b-card
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              <h5>
                <strong>{{ feature.title }}</strong>
              </h5>
              <small>{{ feature.location }}</small>
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
      startups: (state) => state.startups.startups
    })
  }
}
</script>
<style></style>
