<template>
  <div class="full-container">
    <div class="header-container">
      <base-header />
    </div>
    <div class="login-full-container">
      <div class="col-md-6 no-padding login-banner">
        <login-banner />
      </div>
      <div class="col-md-6 no-padding">
        <signup />
      </div>
    </div>
  </div>
</template>
<script>
import Signup from './../../components/signup/Signup'
import LoginBanner from './../../components/signup/LoginBanner'

export default {
  components: {
    Signup,
    LoginBanner
  }
}
</script>
