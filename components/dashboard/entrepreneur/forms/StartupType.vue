<template>
  <div>
    <div class="col-md-12 form-input">
      <label for="last name"
        >What is your startup type <span class="required-field">*</span>
      </label>
      <base-select v-model="startup_type_id" :data="startuptypes" required />
    </div>
    <div class="col-md-12 form-input">
      <label for="last name"
        >Which industry suitably describes your startup?
        <span class="required-field">*</span>
      </label>
      <base-select
        v-model="startup_industry_id"
        :data="startupindustries"
        required
      />
    </div>
    <div class="col-md-12 form-input">
      <label for="last name"
        >Does your startup has patent? <span class="required-field">*</span>
      </label>
      <base-select v-model="has_patent" :data="hasPatent" required />
    </div>
    <div class="col-md-12 form-input">
      <label for="last name">Where is your startup located? </label>
      <base-input
        v-model="location"
        placeholder="eg. Otu adzin road"
        type="text"
      />
    </div>
    <div class="col-md-12 form-input">
      <label for="last name"
        >What is your business registration number?
        <span class="required-field">*</span></label
      >
      <base-input v-model="business_registration_number" type="text" required />
    </div>
  </div>
</template>
<script>
import { mapFields } from 'vuex-map-fields'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      hasPatent: [
        { id: true, name: 'Yes' },
        { id: false, name: 'No' }
      ]
    }
  },
  computed: {
    ...mapFields({
      startup_type_id: 'startups.startupdetails.startup_type_id',
      startup_industry_id: 'startups.startupdetails.startup_industry_id',
      has_patent: 'startups.startupdetails.has_patent',
      location: 'startups.startupdetails.location',
      business_registration_number:
        'startups.startupdetails.business_registration_number',
      loader: 'startups.newstartup.loader'
    }),
    ...mapState({
      user: (state) => state.auth.currentUser,
      startuptypes: (state) => state.startups.startuptypes,
      startupindustries: (state) => state.startups.startupindustries
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
