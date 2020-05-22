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
        <startups />
      </div>
    </div>
  </div>
</template>
<script>
import Startups from '~/components/dashboard/entrepreneur/MyStartups'
export default {
  components: {
    Startups
  }
}
</script>
