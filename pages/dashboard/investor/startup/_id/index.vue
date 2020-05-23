<template>
  <div class="full-container">
    <div class="header-container">
      <base-header />
    </div>
    <div class="main-container container">
      <div class="col-md-3 sidebar-container">
        <base-investor-sidebar />
      </div>

      <div class="col-md-9">
        <startups />
      </div>
    </div>
  </div>
</template>
<script>
import Startups from '~/components/dashboard/investor/StartupDetails'
export default {
  components: {
    Startups
  },
  async asyncData({ store }) {
    await store.dispatch('startups/getAllStartups')
  }
}
</script>
