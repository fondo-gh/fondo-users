<template>
  <div class="full-container">
    <div class="header-container">
      <base-header />
    </div>
    <div class="main-container container">
      <div class="col-md-3 sidebar-container">
        <base-investor-sidebar />
      </div>

      <div class="col-md-9 main-investor-container">
        <welcome />
        <br />
        <startups />
      </div>
    </div>
  </div>
</template>
<script>
import Welcome from '~/components/dashboard/investor/Welcome'
import Startups from '~/components/dashboard/investor/Startups'

export default {
  components: {
    Welcome,
    Startups
  },
  async asyncData({ store }) {
    await store.dispatch('investor/getApprovedStartups')
  }
}
</script>
