<template>
  <div class="container">
    <div class="logo-container col-md-2">
      <nuxt-link to="/"
        ><img src="~assets/images/fondo_logo.jpg" width="70" alt="fondo logo"
      /></nuxt-link>
    </div>
    <div ref="menuIcon" class="menu-icon hidden-md hidden-lg" @click="openMenu">
      <div ref="barOne" class="bar1"></div>
      <div ref="barTwo" class="bar2"></div>
      <div ref="barThree" class="bar3"></div>
    </div>
    <div ref="navigationContainer" class="nav-container">
      <div class="col-md-8 nav-links">
        <ul>
          <li><nuxt-link to="#">What is FONDO?</nuxt-link></li>
          <li><nuxt-link to="#">Our startups</nuxt-link></li>
          <li><nuxt-link to="#">Invest in startup</nuxt-link></li>
        </ul>
      </div>
      <div class="col-md-2 other-links">
        <ul>
          <li><nuxt-link to="/login">Login</nuxt-link></li>
          <li><nuxt-link to="/register">Signup</nuxt-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    openMenu() {
      const menu = this.$refs.menuIcon
      const navigationContainer = this.$refs.navigationContainer
      menu.classList.toggle('change')
      navigationContainer.classList.toggle('mobile-nav')
    }
  }
}
</script>
<style scoped>
.nav-links ul {
  list-style: none;
  padding: 0 !important;
  text-align: center;
  margin-top: 15px;
}
.nav-links ul li {
  display: inline-block;
}

.nav-links ul li a {
  color: #333;
  padding: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: 0.5s;
}

.nav-links ul li a:hover {
  color: var(--fondo-yellow);
}

.other-links {
  margin-top: 15px;
}

.other-links ul {
  list-style: none;
  padding: 0 !important;
  text-align: center;
}
.other-links ul li {
  display: inline-block;
}
.other-links ul li a {
  color: #333;
  padding: 5px 12px;
  border: 1px solid rgb(180, 180, 180);
  border-radius: 4px;
  text-decoration: none;
}

.mobile-nav {
  display: block;
  transition: 0.5s;
}
</style>
