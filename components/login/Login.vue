<template>
  <div class="login-content col-md-12">
    <div class="login-form-container col-md-12 ">
      <h4 class="norm-padding"><strong>LOGIN</strong></h4>
      <p v-if="error" class="error-box animated fadeIn">{{ error }}</p>
      <p class="norm-padding">Check your progress in securing an investment</p>
      <br />
      <form @submit.prevent="login">
        <div class="col-md-12 form-input">
          <label for="email">Email</label>
          <base-input
            v-model="email"
            required
            type="text"
            placeholder="e.g John@gmail.com"
          />
        </div>
        <div class="col-md-12 form-input">
          <label for="password">Password</label>
          <base-input
            v-model="password"
            required
            type="password"
            placeholder="******"
          />
        </div>
        <div class="col-md-12">
          <base-button :disabled="loader" class="form-button" type="submit">
            <span v-if="!loader">Login</span>
            <span v-if="loader"
              ><img
                class="loader"
                src="~assets/images/loader.svg"
                alt=""/></span
          ></base-button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapFields } from 'vuex-map-fields'
export default {
  computed: {
    ...mapFields({
      email: 'auth.user.email',
      password: 'auth.user.password',
      error: 'auth.error',
      loader: 'auth.user.loader'
      error: 'auth.error'
    })
  },
  methods: {
    login() {
      this.$store.dispatch('auth/login')
    }
  }
}
</script>
<style>
.login-content {
  padding: 10% 20% 5% 20%;
  background: rgb(248, 248, 248);
  height: 100vh;
}
.login-form-container {
  margin: 0 auto;
  background: white;
  border: 1px solid rgb(236, 236, 236);
  border-radius: 5px;
  padding: 30px;
}
.form-input {
  margin-bottom: 20px;
}

.form-button {
  outline: none;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgb(151, 151, 151);
  display: block;
  width: 100%;
  background: var(--fondo-yellow);
  transition: 0.3s;
  cursor: pointer;
  color: #333;
  font-size: 1.2em;
  font-weight: 700;
  margin-top: 30px;
}

.form-button:hover {
  background: transparent;
  color: #333;
}
</style>
