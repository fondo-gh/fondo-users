<template>
  <div class="welcome-text">
    <h3>
      Welcome Back, <span v-if="user">{{ user.first_name }}</span>
    </h3>
    <p v-if="startups.length > 0">
      These are potential startups you can invest in
    </p>
    <p v-if="startups.length === 0">
      Sorry we do not have any startup ready for investment. Please come back
      later
    </p>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      user: (state) => state.auth.currentUser,
      startups: (state) => state.startups.startups
    })
  }
}
</script>
<style scoped>
.welcome-text {
  text-align: left;
}

.welcome-text a {
  background: var(--fondo-deep-yellow);
  padding: 10px 20px;
  border-radius: 5px;
  color: #333;
  font-weight: 500;
}
</style>
