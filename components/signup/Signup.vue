<template>
  <div class="signup-content col-md-12">
    <div class="login-form-container col-md-12 ">
      <h4 class="norm-padding"><strong>SIGN UP</strong></h4>
      <p v-if="error" class="error-box animated fadeIn">
        <span>{{ error }}</span>
      </p>

      <p class="norm-padding">Check your progress in securing an investment</p>
      <br />
      <form @submit.prevent="register">
        <div class="col-md-12 form-input input-radio">
          <ul>
            <li>
              <input
                v-model="user_type_id"
                type="radio"
                name="type"
                value="1"
              />
              <span for="startup">I have a startup</span><br />
            </li>
            <li>
              <input
                v-model="user_type_id"
                type="radio"
                name="type"
                value="2"
              />
              <span for="startup">I am an investor</span><br />
            </li>
          </ul>
        </div>
        <div class="col-md-12 form-input">
          <label for="first name">First Name</label>
          <base-input
            v-model="first_name"
            required
            type="text"
            placeholder="e.g John"
          />
        </div>
        <div class="col-md-12 form-input">
          <label for="last name">Last Name</label>
          <base-input
            v-model="last_name"
            required
            type="text"
            placeholder="e.g Doe"
          />
        </div>
        <div class="col-md-12 form-input">
          <label for="email">Email</label>
          <base-input
            v-model="email"
            required
            type="email"
            placeholder="e.g Johndoe@gmail.com"
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
        <div class="col-md-12 form-input">
          <label for="password">Confirm Password</label>
          <base-input
            v-model="password_confirmation"
            required
            type="password"
            placeholder="******"
          />
        </div>
        <div class="col-md-12">
          <base-button :disabled="loader" class="form-button" type="submit"
            ><span v-if="!loader">Sign up</span
            ><span v-if="loader"
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
      user_type_id: 'auth.register.user_type_id',
      first_name: 'auth.register.first_name',
      last_name: 'auth.register.last_name',
      email: 'auth.register.email',
      password: 'auth.register.password',
      password_confirmation: 'auth.register.password_confirmation',
      error: 'auth.error',
      loader: 'auth.register.loader'

    })
  },
  methods: {
    register() {
      this.$store.dispatch('auth/register')
    }
  }
}
</script>
<style>
.signup-content {
  padding: 2% 20% 5% 20%;
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

.input-radio ul {
  padding: 0 !important;
  list-style: none;
}

.input-radio ul li {
  display: inline-block;
  margin-left: 10px;
}
</style>
