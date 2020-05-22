<template>
  <div class="main-investor-container">
    <div class="link-heading-text">
      <div class="col-md-12">
        <h3><strong>Create a new startup</strong></h3>
        <p>
          Please provide the details below to startup the process of create a
          new startup
        </p>
      </div>
      <br />
      <div class="form-container">
        <form @submit.prevent="saveProfile">
          <div class="col-md-12 form-input">
            <label for="last name">Company Name </label>
            <base-input v-model="company_name" type="text" required />
          </div>
          <div class="col-md-12 form-input">
            <label for="first name">Description of startup</label>
            <textarea v-model="caption" required></textarea>
          </div>
          <div class="col-md-12 form-input">
            <label for="last name">How much do you want to raise? </label>
            <base-input
              v-model="funds_to_raise"
              placeholder="eg. $200,000"
              type="text"
            />
          </div>
          <div class="col-md-12 form-input">
            <label for="last name"
              >How much time do you have to raise this amount?
            </label>
            <base-input
              v-model="occupation"
              placeholder="eg. 3 months"
              type="text"
            />
          </div>
          <div class="col-md-12 form-input">
            <base-button
              type="button"
              class="form-button-inverse"
              @click.native="selectImage"
              >Upload Image</base-button
            >
          </div>
          <div class="col-md-12">
            <base-button :disabled="loader" class="form-button" type="submit"
              ><span v-if="!loader">Continue</span>
              <span v-if="loader"
                ><img
                  class="loader"
                  src="~assets/images/loader.svg"
                  alt=""/></span
            ></base-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapFields } from 'vuex-map-fields'
import { mapState } from 'vuex'
export default {
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

.form-input {
  margin-bottom: 20px;
}
</style>
