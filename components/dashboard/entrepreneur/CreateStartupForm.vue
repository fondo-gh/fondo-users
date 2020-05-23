<template>
  <div class="main-investor-container">
    <div class="link-heading-text">
      <div class="col-md-12">
        <h3><strong>Create a new startup</strong></h3>
        <p>
          Please provide the details below to startup the process of creating a
          new startup
        </p>
      </div>
      <br />
      <div class="form-container">
        <startup-basic-details />
      </div>
    </div>
  </div>
</template>
<script>
import { mapFields } from 'vuex-map-fields'
import { mapState } from 'vuex'
import StartupBasicDetails from './forms/StartupBasicDetails'
export default {
  components: {
    StartupBasicDetails
  },
  computed: {
    ...mapFields({
      company_name: 'startups.newstartup.company_name',
      caption: 'startups.newstartup.caption',
      funds_to_raise: 'startups.newstartup.funds_to_raise',
      duration_for_raise: 'startups.newstartup.duration_for_raise',
      loader: 'startups.newstartup.loader'
    }),
    ...mapState({
      user: (state) => state.auth.currentUser
    })
  },
  methods: {
    selectImage() {}
  }
}
</script>
<style scoped>
.link-heading-text {
  text-align: left;
}

.link-heading-text a {
  background: var(--fondo-deep-yellow);
  padding: 10px 20px;
  border-radius: 5px;
  color: #333;
  font-weight: 500;
}

.main-investor-container {
  padding-left: 25px;
  padding-right: 25px;
}
</style>
