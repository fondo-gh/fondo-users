<template>
  <div class="main-investor-container">
    <div class="link-heading-text">
      <div class="col-md-12">
        <h3><strong>Profile</strong></h3>
      </div>
      <br />
      <!-- <p>All fields are required</p> -->
      <div class="form-container">
        <form @submit.prevent="saveProfile">
          <template v-if="user">
            <div class="form-input">
              <div class="col-md-6 form-input">
                <label for="last name">First Name </label>
                <base-input v-model="user.first_name" type="text" readonly />
              </div>
              <div class="col-md-6 form-input">
                <label for="last name">Last Name </label>
                <base-input v-model="user.last_name" type="text" readonly />
              </div>
            </div>
            <div class="col-md-12 form-input">
              <label for="last name">Email </label>
              <base-input v-model="user.email" type="text" readonly />
            </div>
          </template>
          <div class="col-md-12 form-input">
            <label for="first name">A short bio about yourself</label>
            <textarea v-model="bio" name="bio" id="" required></textarea>
          </div>
          <div class="col-md-12 form-input">
            <label for="last name"
              >Interest <small><i>Seperate with comma</i></small></label
            >
            <base-input v-model="interest" type="text" />
          </div>
          <div class="col-md-12 form-input">
            <label for="last name">Occupation </label>
            <base-input v-model="occupation" type="text" />
          </div>
          <div class="col-md-12 form-input">
            <label for="email"
              >Startups invested in<small
                ><i> Seperate with comma</i></small
              ></label
            >
            <base-input v-model="startups_invested_in" type="text" />
          </div>

          <div class="col-md-12 form-input">
            <label for="email">Amount Invested ($)</label>
            <base-input v-model="amount_invested" type="number" />
          </div>

          <div class="col-md-12">
            <base-button :disabled="loader" class="form-button" type="submit"
              ><span v-if="!loader">Save Changes</span>
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
  </div>
</template>
<script>
import { mapFields } from 'vuex-map-fields'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapFields({
      bio: 'investor.profile.bio',
      interest: 'investor.profile.interest',
      startups_invested_in: 'investor.profile.startups_invested_in',
      amount_invested: 'investor.profile.amount_invested',
      occupation: 'investor.profile.occupation',
      loader: 'investor.profile.loader'
    }),
    ...mapState({
      user: (state) => state.auth.currentUser
    })
  },
  methods: {
    saveProfile() {
      this.$store.dispatch('investor/saveProfile')
    }
  }
}
</script>
<style scoped>
.link-heading-text {
  text-align: left;
}

.link-heading-text a {
  background: var(--fondo-deep-yellow);
  padding: 10px 20px;
  border-radius: 5px;
  color: #333;
  font-weight: 500;
}

.main-investor-container {
  padding-left: 25px;
  padding-right: 25px;
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
