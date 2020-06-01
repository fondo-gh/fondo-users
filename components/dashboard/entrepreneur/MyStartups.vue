<template>
  <div class="main-investor-container">
    <div class="link-heading-text">
      <div class="col-md-12">
        <h3><strong>My Startups</strong></h3>
        <br />
        <nuxt-link
          class="new-startup"
          to="/dashboard/entrepreneur/mystartups/create"
          >Create new startup</nuxt-link
        >
      </div>
      <br />
      <br />
      <div class="col-md-12 startup-table">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <td>Company Name</td>
                <td>Status</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="startup in mystartups" :key="startup.id">
                <td>{{ startup.company_name }}</td>
                <td>
                  <span v-if="startup.approved" class="label label-success">
                    Approved</span
                  >
                  <span v-else class="label label-danger">Pending</span>
                </td>
                <td>
                  <nuxt-link
                    :to="
                      `/dashboard/entrepreneur/mystartups/completeregister/${startup.id}`
                    "
                    class="btn btn-default btn-xs"
                    >Complete Registration</nuxt-link
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      mystartups: (state) => state.startups.mystartups
    })
  }
}
</script>

<style scoped>
.new-startup {
  outline: none;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgb(151, 151, 151);
  background: var(--fondo-yellow);
  transition: 0.3s;
  cursor: pointer;
  color: #333;
  font-size: 1em;
  font-weight: 700;
  text-decoration: none;
}
.startup-table {
  margin-top: 50px;
}

table thead tr {
  font-weight: 600;
}
</style>
