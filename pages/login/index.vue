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
        <login />
      </div>
    </div>
  </div>
</template>
<script>
import Login from './../../components/login/Login'
import LoginBanner from './../../components/login/LoginBanner'

export default {
  components: {
    Login,
    LoginBanner
  }
}
</script>
