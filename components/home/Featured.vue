<template>
  <div class="explore container">
    <div class="service-caption">
      <h3 class="norm-padding">Featured Startups</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo omnis
        fugiat eaque quasi reiciendis, laborum aliquid reprehenderit.
      </p>
    </div>

    <br />
    <div class="card-container">
      <div
        v-for="feature in featured"
        :key="feature.id"
        class="col-md-3 featured-content"
      >
        <nuxt-link :to="{ name: 'courses-id', params: { slug: feature.slug } }">
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
      featured: (state) => state.startups.featured
    })
  }
}
</script>
<style></style>
