<template>
  <div>
    <div class="col-md-12 form-input">
      <label>How much money have invested </label>
      <base-input v-model="funding_amount" placeholder="900" type="number" />
    </div>
    <div class="col-md-12 form-input">
      <label
        >What is your rate of devotion <br />
        <small
          >Devotion entrepreneurs put into startup. Could be any of the
          following: Part time dedication( less than 35 hours per week), Full
          time dedication(more than35 hours per week), I don’t know</small
        >
      </label>
      <base-input
        v-model="rate_of_devotion"
        placeholder="eg. Full time"
        type="text"
      />
    </div>
    <div class="col-md-12">
      <label>Who are your cofounders?</label>
      <div
        v-for="(cofounder, index) in cofounders"
        :key="index"
        class="col-md-12 no-padding form-input"
      >
        <div class="col-md-4 no-padding">
          <base-input v-model="cofounder.name" placeholder="Name" type="text" />
        </div>
        <div class="col-md-4 no-padding">
          <base-input
            v-model="cofounder.email"
            placeholder="Email"
            type="text"
          />
        </div>
        <div class="col-md-4 no-padding">
          <base-select
            v-model="cofounder.cofounder_role_id"
            :data="cofounderdetail"
            required
          />
        </div>
      </div>
      <div style="margin-bottom: 20px">
        <button
          @click="$store.commit('startups/setCofounder')"
          class="btn btn-xs btn-default"
        >
          Add more co-founders
        </button>
        <button
          @click="$store.commit('startups/removeCofounder')"
          class="btn btn-xs btn-danger"
        >
          Remove co-founder
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapFields, mapMultiRowFields } from 'vuex-map-fields'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapFields({
      funding_amount: 'startups.cofounderdetail.funding_amount',
      rate_of_devotion: 'startups.cofounderdetail.rate_of_devotion'
    }),
    ...mapMultiRowFields(['startups.cofounderdetail.cofounders']),
    ...mapState({
      cofounderdetail: (state) => state.startups.startupcofounder
    })
  }
}
</script>
