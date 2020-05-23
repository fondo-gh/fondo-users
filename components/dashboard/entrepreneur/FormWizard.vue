<template>
  <div>
    <form-wizard @on-complete="onComplete" :start-index="1" color="#ffd801">
      <tab-content title="Basic Startup Details" icon="ti-user">
        <startup-basic-details />
      </tab-content>
      <tab-content title="Additional Info" icon="ti-settings">
        My second tab content
      </tab-content>
      <tab-content title="Last step" icon="ti-check">
        Yuhuuu! This seems pretty damn simple
      </tab-content>
    </form-wizard>
  </div>
</template>
<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import StartupBasicDetails from './forms/StartupBasicDetails'

export default {
  components: {
    FormWizard,
    TabContent,
    StartupBasicDetails
  }
}
</script>
