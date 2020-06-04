<template>
  <div>
    <div class="col-md-12">
      <label>Select your team structure</label>
      <div
        v-for="(team, index) in startup_teams"
        :key="index"
        class="col-md-12 no-padding form-input"
      >
        <div class="col-md-6 no-padding">
          <base-input v-model="team.name" placeholder="Name" type="text" />
        </div>
        <div class="col-md-6 no-padding">
          <base-select
            v-model="team.business_team_id"
            :data="startupteam"
            required
          />
        </div>
      </div>
      <div style="margin-bottom: 20px">
        <button
          @click="$store.commit('startups/setTeam')"
          class="btn btn-xs btn-default"
        >
          Add team
        </button>
        <button
          @click="$store.commit('startups/removeTeam')"
          class="btn btn-xs btn-danger"
        >
          Remove team
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMultiRowFields } from 'vuex-map-fields'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapMultiRowFields(['startups.teamdetail.startup_teams']),

    ...mapState({
      startupteam: (state) => state.startups.startupteam
    })
  },
  methods: {
    saveBasicData() {
      if (!this.file) {
        alert('You have to upload an image for your startup')
      } else {
        this.$store.dispatch('startups/createBasicStartup')
      }
    }
  }
}
</script>
