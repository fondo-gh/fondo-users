<template>
  <div class="dashboard-link">
    <ul>
      <li><nuxt-link to="/dashboard/entrepreneur">Dashboard</nuxt-link></li>
      <li>
        <nuxt-link to="/dashboard/entrepreneur/mystartups"
          >My Startups</nuxt-link
        >
      </li>
      <li>
        <nuxt-link to="/dashboard/entrepreneur/profile">Profile</nuxt-link>
      </li>
    </ul>
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
.dashboard-link ul {
  padding: 0 !important;
}

.dashboard-link ul li {
  display: block;
}

.dashboard-link ul li a {
  color: #333;
  padding: 10px 8px;
  display: block;
  font-size: 0.9em;
  border-bottom: 1px solid rgb(241, 241, 241);
  text-decoration: none;
  background: white;
  font-weight: 500;
  transition: 0.3s;
}

.dashboard-link ul li a:hover {
  color: var(--fondo-deep-yellow);
}
</style>
