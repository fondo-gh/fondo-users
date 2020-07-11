<template>
  <div>
    <div class="col-md-12 form-input">
      <label for="last name"
        >Which stage is your product? <span class="required-field">*</span>
      </label>
      <base-select
        v-model="product_progress_id"
        :data="productprogressdetail"
        required
      />
    </div>
    <div class="col-md-12 form-input">
      <label for="last name">Is your product online? provide a url </label>
      <base-input
        v-model="product_url"
        placeholder="eg. https://example.com"
        type="url"
      />
    </div>
  </div>
</template>
<script>
import { mapFields } from 'vuex-map-fields'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapFields({
      product_progress_id: 'startups.productdetails.product_progress_id',
      product_url: 'startups.productdetails.product_url'
    }),
    ...mapState({
      productprogressdetail: (state) => state.startups.productprogressdetail
    })
  },
  methods: {
    saveBasicData() {
      if (!this.file) {
        alert('You have to upload an image for your startup')
      } else {
        this.$store.dispatch('startups/createBasicStartup')
      }
    }
  }
}
</script>
