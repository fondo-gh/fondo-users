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
        <welcome />
      </div>
    </div>
  </div>
</template>
<script>
import Welcome from '~/components/dashboard/entrepreneur/WelcomeEntrepreneur'
export default {
  components: {
    Welcome
  }
}
</script>
