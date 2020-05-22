<template>
  <div class="explore container">
    <div class="service-caption">
      <h3 class="norm-padding">What we do at FONDO</h3>
      <p>
        We help startups to be investment ready and connects them to potential
        investors acroos the globe.
      </p>
    </div>
    <br />
    <div class="card-container">
      <div v-for="lexplore in explore" :key="lexplore.id" class="col-md-3">
        <b-card
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            <h4><span :class="lexplore.icon"></span> {{ lexplore.title }}</h4>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      explore: (state) => state.explore.explore
    })
  }
}
</script>
