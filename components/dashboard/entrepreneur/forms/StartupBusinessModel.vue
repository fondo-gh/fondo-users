<template>
  <div>
    <form @submit.prevent="saveBasicData">
      <div class="col-md-12 form-input">
        <label for="last name">What are your key resources? </label>
        <textarea v-model="key_resourses"></textarea>
      </div>
      <div class="col-md-12 form-input">
        <label for="last name">Who is your target market? </label>
        <textarea v-model="customer_target"></textarea>
      </div>
      <div class="col-md-12 form-input">
        <label for="last name">What is your value proposition </label>
        <textarea v-model="value_proposition"></textarea>
      </div>
      <div class="col-md-12 form-input">
        <label for="last name">What are your sales channel? </label>
        <textarea v-model="sales_channel"></textarea>
      </div>
      <div class="col-md-12 form-input">
        <label for="last name">What is your revenue streams? </label>
        <textarea v-model="revenue_streams"></textarea>
      </div>
      <div class="col-md-12 form-input">
        <label for="last name">Describe your key metrics </label>
        <textarea v-model="key_metrics"></textarea>
      </div>
      <div class="col-md-12 form-input">
        <label for="last name">Describe your cost structure </label>
        <textarea v-model="cost_structure"></textarea>
      </div>
      <div class="col-md-12 form-input">
        <base-button
          type="button"
          class="form-button-inverse"
          @click.native="selectImage"
          >Upload Your Financial File (pdf, word, excel)
          <small><i>(Not more than 5MB)</i></small></base-button
        >
        <input
          type="file"
          @change="loadImage"
          accept="image/*"
          style="display: none"
          ref="imageInput"
        />
        <br />
      </div>
      <div class="col-md-12 form-input">
        <base-button
          type="button"
          class="form-button-inverse"
          @click.native="selectImage"
          >Upload any other file (pdf, word, excel)
          <small><i>(Not more than 5MB)</i></small></base-button
        >
        <input
          type="file"
          @change="loadImage"
          accept="image/*"
          style="display: none"
          ref="imageInput"
        />
        <br />
      </div>
    </form>
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
      key_resourses: 'startups.startupbusinessmodel.key_resourses',
      customer_target: 'startups.startupbusinessmodel.customer_target',
      value_proposition: 'startups.startupbusinessmodel.value_proposition',
      sales_channel: 'startups.startupbusinessmodel.sales_channel',
      revenue_streams: 'startups.startupbusinessmodel.revenue_streams',
      key_metrics: 'startups.startupbusinessmodel.key_metrics',
      cost_structure: 'startups.startupbusinessmodel.cost_structure',
      financial_file: 'startups.startupbusinessmodel.financial_file',
      optional_file: 'startups.startupbusinessmodel.optional_file'
    }),
    ...mapState({
      user: (state) => state.auth.currentUser
    })
  },
  methods: {
    saveBasicData() {
      if (!this.file) {
        alert('You have to upload an image for your startup')
      } else {
        this.$store.dispatch('startups/createBasicStartup')
      }
    },
    selectImage() {
      this.$refs.imageInput.click()
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
