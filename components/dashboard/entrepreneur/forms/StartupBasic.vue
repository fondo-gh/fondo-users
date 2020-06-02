<template>
  <div>
    <div class="col-md-12 form-input">
      <label for="last name">Company Name </label>
      <base-input v-model="company_name" type="text" required />
    </div>
    <div class="col-md-12 form-input">
      <label for="first name">Description of startup</label>
      <textarea v-model="caption" required></textarea>
    </div>
    <div class="col-md-12 form-input">
      <label for="last name">How much do you want to raise? </label>
      <base-input
        v-model="funds_to_raise"
        placeholder="eg. $200,000"
        type="text"
      />
    </div>
    <div class="col-md-12 form-input">
      <label for="last name"
        >How much time do you have to raise this amount?
      </label>
      <base-input
        v-model="duration_for_raise"
        placeholder="eg. 3 months"
        type="text"
      />
    </div>
    <div class="col-md-12 form-input">
      <base-button
        type="button"
        class="form-button-inverse"
        @click.native="selectImage"
        >Select Startup Image
        <small><i>(Not more than 2MB)</i></small></base-button
      >
      <input
        type="file"
        @change="loadImage"
        accept="image/*"
        style="display: none"
        ref="imageInput"
      />
      <br />
      <img :src="product_image" class="img-responsive" alt="" width="20%" />
    </div>
  </div>
</template>
<script>
import { mapFields } from 'vuex-map-fields'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      file: null,
      imageUrl: null
    }
  },
  computed: {
    ...mapFields({
      company_name: 'startups.newstartup.company_name',
      caption: 'startups.newstartup.caption',
      funds_to_raise: 'startups.newstartup.funds_to_raise',
      duration_for_raise: 'startups.newstartup.duration_for_raise',
      loader: 'startups.newstartup.loader',
      product_image: 'startups.newstartup.product_image'
    }),
    ...mapState({
      user: (state) => state.auth.currentUser
    })
  },
  methods: {
    selectImage() {
      this.$refs.imageInput.click()
    },
    saveBasicData() {
      if (!this.file) {
        alert('You have to upload an image for your startup')
      } else {
        this.$store.dispatch('startups/createBasicStartup')
      }
    },
    loadImage(event) {
      const file = event.target.files[0]
      this.file = event.target.files[0]
      this.$store.commit('startups/setImage', event.target.files[0])
      if (file.size > 2000000) {
        alert('Event image cannot be more than 2MB')
      } else {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.imageUrl = e.target.result
        }
        reader.readAsDataURL(file)
      }
    }
  }
}
</script>
