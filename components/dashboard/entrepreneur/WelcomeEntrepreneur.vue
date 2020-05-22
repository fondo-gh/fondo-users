<template>
  <div class="welcome-text">
    <h3>
      Welcome back, <span v-if="user">{{ user.first_name }}</span>
    </h3>
    <p>View your investment progress below</p>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      user: (state) => state.auth.currentUser
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
