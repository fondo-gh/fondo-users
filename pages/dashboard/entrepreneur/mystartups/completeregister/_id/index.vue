<template>
  <div class="full-container">
    <div class="header-container">
      <base-header />
    </div>
    <div class="main-container container">
      <div class="col-md-3 sidebar-container">
        <base-entrepreneur-sidebar />
      </div>

      <div class="col-md-9">
        <create-startup />
      </div>
    </div>
  </div>
</template>
<script>
import CreateStartup from '~/components/dashboard/entrepreneur/CompleteRegistration'
export default {
  components: {
    CreateStartup
  },

  async asyncData({ store }) {
    await store.dispatch('startups/getStartupData')
  }
}
</script>
