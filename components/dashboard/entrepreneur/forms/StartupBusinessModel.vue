<template>
  <div>
    <form @submit.prevent="saveBasicData">
      <div class="col-md-12 form-input">
        <label for="last name"
          >What are your key resources?
          <br />
          <small
            >(Physical,intellectual and financial assets of the company)</small
          >
        </label>
        <textarea v-model="key_resourses"></textarea>
      </div>
      <div class="col-md-12 form-input">
        <label for="last name"
          >Who is your target market? <br />
          <small>(Market or customer target suitable for your product)</small>
        </label>
        <textarea v-model="customer_target"></textarea>
      </div>
      <div class="col-md-12 form-input">
        <label for="last name"
          >What is your value proposition? <br />
          <small
            >(Why is the customer willing to pay for the solution?)</small
          ></label
        >
        <textarea v-model="value_proposition"></textarea>
      </div>
      <div class="col-md-12 form-input">
        <label for="last name"
          >What are your sales channel? <br />
          <small
            >(How is the company intending to reach its customers?)</small
          ></label
        >
        <textarea v-model="sales_channel"></textarea>
      </div>
      <div class="col-md-12 form-input">
        <label for="last name"
          >What is your revenue streams? <br />
          <small>(What are the sources of revenue for your business?)</small>
        </label>
        <textarea v-model="revenue_streams"></textarea>
      </div>
      <div class="col-md-12 form-input">
        <label for="last name"
          >Describe your key metrics <br />
          <small>(State your key performance indicators)</small>
        </label>
        <textarea v-model="key_metrics"></textarea>
      </div>
      <div class="col-md-12 form-input">
        <label for="last name"
          >Describe your cost structure <br />
          <small
            >(What are the company’s costs and how should it affect
            pricing?)</small
          >
        </label>
        <textarea v-model="cost_structure"></textarea>
      </div>
      <div class="col-md-12 form-input">
        <base-button
          type="button"
          class="form-button-inverse"
          @click.native="selectFile('financialFile')"
          >Upload Your Financial File (pdf, word, excel)
          <small><i>(Not more than 5MB)</i></small> <br />
          <small
            >(This should contain your expenses,revenue,gross profit and net
            profit)</small
          ></base-button
        >
        <input
          type="file"
          @change="loadFinancialFile"
          style="display: none"
          ref="financialFile"
        />
        <span>{{ financialFile.url }}</span>
        <br />
      </div>
      <div class="col-md-12 form-input">
        <base-button
          type="button"
          class="form-button-inverse"
          @click.native="selectFile('otherFile')"
          >Upload any other relevant file pertaining to your business (pdf,
          word, excel) <small><i>(Not more than 5MB)</i></small></base-button
        >
        <input
          type="file"
          @change="loadOtherFile"
          accept="image/*"
          style="display: none"
          ref="otherFile"
        />
        <span>{{ otherFile.url }}</span>
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
      financialFile: {
        file: null,
        url: null
      },
      otherFile: {
        file: null,
        url: null
      }
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
      cost_structure: 'startups.startupbusinessmodel.cost_structure'
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
    selectFile(file) {
      this.$refs[file].click()
    },
    loadFinancialFile(event) {
      const file = event.target.files[0]
      this.financialFile.url = event.target.files[0].name
      const payload = {
        file: event.target.files[0],
        type: 'financial_file'
      }
      this.$store.commit('startups/setFile', payload)
      if (file.size > 5000000) {
        alert('Financial cannot be more than 5MB')
      } else {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.financialFile.file = e.target.files[0]
        }
        reader.readAsDataURL(file)
      }
    },
    loadOtherFile(event) {
      const file = event.target.files[0]
      this.otherFile.url = event.target.files[0].name
      const payload = {
        file: event.target.files[0],
        type: 'optional_file'
      }
      this.$store.commit('startups/setFile', payload)
      if (file.size > 5000000) {
        alert('Other file cannot be more than 5MB')
      } else {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.otherFile.file = e.target.files[0]
        }
        reader.readAsDataURL(file)
      }
    }
  }
}
</script>
