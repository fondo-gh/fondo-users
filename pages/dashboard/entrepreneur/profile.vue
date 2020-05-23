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
        <profile />
      </div>
    </div>
  </div>
</template>
<script>
import Profile from '~/components/dashboard/entrepreneur/ProfileForm'
export default {
  components: {
    Profile
  }
}
</script>
