<template>
  <div>
    <form-wizard
      @on-complete="onComplete"
      color="#ffd801"
      finish-button-text="Finish"
      error-color="#ff4949"
      next-button-text="Save & Continue"
    >
      <h3 slot="title">Complete your startup registration</h3>
      <tab-content
        title="Startup Details"
        icon="ti-user"
        :before-change="saveType"
      >
        <startup-type />
      </tab-content>
      <tab-content
        title="Contact Info"
        icon="ti-settings"
        :before-change="saveContact"
      >
        <startup-contact-details />
      </tab-content>
      <tab-content
        title="Business Model"
        icon="ti-check"
        :before-change="saveBusiness"
      >
        <startup-business-model />
      </tab-content>
      <tab-content title="Finish" icon="ti-check">
        <div>
          <h4>
            Thank you for adding a startup.Your Application will reviewed
            shortly
          </h4>
        </div>
      </tab-content>
    </form-wizard>
  </div>
</template>
<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import StartupType from './forms/StartupType'
import StartupContactDetails from './forms/StartupContactDetails'
import StartupBusinessModel from './forms/StartupBusinessModel'

export default {
  components: {
    FormWizard,
    TabContent,
    StartupType,
    StartupContactDetails,
    StartupBusinessModel
  },
  methods: {
    onComplete() {
      this.$router.push({ name: 'dashboard-entrepreneur-mystartups' })
    },
    async saveType() {
      const startupId = this.$route.params.id
      await this.$store.dispatch('startups/saveType', startupId)
      return true
    },

    async saveContact() {
      if (this.$store.state.startups.startupcontact.email === null) {
        this.$toasted.show('Email field is required', {
          theme: 'toasted-primary',
          position: 'top-center',
          duration: 3000
        })
        return false
      }
      if (this.$store.state.startups.startupcontact.phone === null) {
        this.$toasted.show('Phone field is required', {
          theme: 'toasted-primary',
          position: 'top-center',
          duration: 3000
        })
        return false
      }
      const startupId = this.$route.params.id
      await this.$store.dispatch('startups/saveContact', startupId)
      return true
    },

    async saveBusiness() {
      const startupId = this.$route.params.id
      await this.$store.dispatch('startups/saveBusinessModel', startupId)
      return true
    }
  }
}
</script>
