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
        <profile />
      </div>
    </div>
  </div>
</template>
<script>
import Profile from './../../../components/dashboard/investor/ProfileForm'
export default {
  components: {
    Profile
  }
}
</script>
