<template>
  <div>
    <form @submit.prevent="saveBasicData">
      <div class="col-md-12 form-input">
        <label for="last name"
          >What is the official email for your startup?
          <span class="required-field">*</span>
        </label>
        <base-input v-model="email" type="email" required />
      </div>
      <div class="col-md-12 form-input">
        <label for="last name"
          >Which telephone number can we reach you on?
          <span class="required-field">*</span>
        </label>
        <base-input
          v-model="phone"
          placeholder="eg. +233 000 000 00"
          type="tel"
          required
        />
      </div>
      <div class="col-md-12 form-input">
        <label for="last name"
          >Does your startup have a facebook page? Please provide handle
        </label>
        <base-input v-model="facebook_handle" type="text" />
      </div>
      <div class="col-md-12 form-input">
        <label for="last name"
          >Does your startup have a twitter page? Please provide handle
        </label>
        <base-input v-model="twitter_handle" type="text" />
      </div>
      <div class="col-md-12 form-input">
        <label for="last name"
          >Does your startup have a instagram page? Please provide handle
        </label>
        <base-input v-model="instagram_handle" type="text" />
      </div>
      <div class="col-md-12 form-input">
        <label for="last name"
          >Does your startup have a linkedin page? Please provide handle
        </label>
        <base-input v-model="linkedin_handle" type="text" />
      </div>
      <div class="col-md-12 form-input">
        <label for="last name"
          >Does your startup have a skype page? Please provide handle
        </label>
        <base-input v-model="skype_handle" type="text" />
      </div>
    </form>
  </div>
</template>
<script>
import { mapFields } from 'vuex-map-fields'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      file: null,
      imageUrl: null
    }
  },
  computed: {
    ...mapFields({
      email: 'startups.startupcontact.email',
      phone: 'startups.startupcontact.phone',
      facebook_handle: 'startups.startupcontact.facebook_handle',
      twitter_handle: 'startups.startupcontact.twitter_handle',
      instagram_handle: 'startups.startupcontact.instagram_handle',
      skype_handle: 'startups.startupcontact.skype_handle',
      linkedin_handle: 'startups.startupcontact.linkedin_handle',
      loader: 'startups.newstartup.loader'
    }),
    ...mapState({
      user: (state) => state.auth.currentUser
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
