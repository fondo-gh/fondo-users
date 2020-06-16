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
        :before-change="saveDetails"
      >
        <startup-basic-details />
      </tab-content>
      <tab-content
        title="Startup Type"
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
      <tab-content
        title="Product Detail"
        icon="ti-check"
        :before-change="saveProductDetail"
      >
        <product-detail />
      </tab-content>
      <tab-content
        title="Startup Co founders"
        icon="ti-check"
        :before-change="saveCofounderDetail"
      >
        <startup-cofounder />
      </tab-content>
      <tab-content
        title="Startup Team Details"
        icon="ti-check"
        :before-change="saveTeamDetail"
      >
        <team-detail />
      </tab-content>
      <tab-content title="Finish" icon="ti-check">
        <div>
          <h4>
            Thank you for adding a startup.Your Application is been reviewed.
          </h4>
        </div>
      </tab-content>
    </form-wizard>
  </div>
</template>
<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import StartupBasicDetails from './forms/StartupBasic'
import StartupType from './forms/StartupType'
import StartupContactDetails from './forms/StartupContactDetails'
import StartupBusinessModel from './forms/StartupBusinessModel'
import ProductDetail from './forms/ProductDetail'
import StartupCofounder from './forms/CofounderDetail'
import TeamDetail from './forms/TeamDetail'

export default {
  components: {
    FormWizard,
    TabContent,
    StartupBasicDetails,
    StartupType,
    StartupContactDetails,
    StartupBusinessModel,
    ProductDetail,
    StartupCofounder,
    TeamDetail
  },
  methods: {
    onComplete() {
      this.$router.push({ name: 'dashboard-entrepreneur-mystartups' })
    },
    async saveType() {
      const startuptype = this.$store.state.startups.startupdetails
      if (
        !startuptype.startup_type_id ||
        !startuptype.startup_industry_id ||
        !startuptype.business_registration_number ||
        startuptype.has_patent === '' ||
        startuptype.has_patent === null
      ) {
        this.$toasted.show(
          'Please make sure all required fields are not empty',
          {
            theme: 'toasted-primary',
            position: 'top-center',
            duration: 3000
          }
        )
        return false
      }
      const startupId = this.$route.params.id
      await this.$store.dispatch('startups/saveType', startupId)
      return true
    },

    async saveContact() {
      const contact = this.$store.state.startups.startupcontact
      if (!contact.email || !contact.phone) {
        this.$toasted.show(
          'Please make sure all required fields are not empty',
          {
            theme: 'toasted-primary',
            position: 'top-center',
            duration: 3000
          }
        )
        return false
      }
      const startupId = this.$route.params.id
      await this.$store.dispatch('startups/saveContact', startupId)
      return true
    },

    async saveDetails() {
      const newstartup = this.$store.state.startups.newstartup
      if (
        !newstartup.company_name ||
        !newstartup.caption ||
        !newstartup.funds_to_raise ||
        !newstartup.duration_for_raise
      ) {
        this.$toasted.show(
          'Please make sure all required fields are not empty',
          {
            theme: 'toasted-primary',
            position: 'top-center',
            duration: 3000
          }
        )
        return false
      }
      const startupId = this.$route.params.id
      await this.$store.dispatch('startups/saveDetails', startupId)
      return true
    },

    async saveBusiness() {
      const bmodel = this.$store.state.startups.startupbusinessmodel
      if (bmodel.financial_file_upload === null) {
        this.$toasted.show(
          'Please make sure all required fields are not empty',
          {
            theme: 'toasted-primary',
            position: 'top-center',
            duration: 3000
          }
        )
        return false
      }

      const startupId = this.$route.params.id
      await this.$store.dispatch('startups/saveBusinessModel', startupId)
      return true
    },

    async saveProductDetail() {
      const startupId = this.$route.params.id
      await this.$store.dispatch('startups/saveProductDetail', startupId)
      return true
    },

    async saveCofounderDetail() {
      const cofounder = this.$store.state.startups.cofounderdetail
      if (!cofounder.funding_amount || !cofounder.rate_of_devotion) {
        this.$toasted.show(
          'Please make sure all required fields are not empty',
          {
            theme: 'toasted-primary',
            position: 'top-center',
            duration: 3000
          }
        )
        return false
      }

      const startupId = this.$route.params.id
      await this.$store.dispatch('startups/saveCofounderDetail', startupId)
      return true
    },
    async saveTeamDetail() {
      const startupId = this.$route.params.id
      await this.$store.dispatch('startups/saveTeamDetail', startupId)
      return true
    }
  }
}
</script>
