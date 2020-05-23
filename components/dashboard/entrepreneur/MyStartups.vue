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
        <b-table striped hover :items="items"></b-table>
      </div>
      <br />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
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
</style>
