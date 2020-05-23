<template>
  <div class="footer">
    <div class="container quick-links">
      <ul>
        <li>
          <nuxt-link to="#"><span class="fa fa-facebook"></span></nuxt-link>
        </li>
        <li>
          <nuxt-link to="#"><span class="fa fa-twitter"></span></nuxt-link>
        </li>
        <li>
          <nuxt-link to="#"><span class="fa fa-instagram"></span></nuxt-link>
        </li>
      </ul>
      <ul>
        <li><nuxt-link to="#">Terms & Conditions</nuxt-link></li>
        |
        <li><nuxt-link to="#">Privacy Policy</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.quick-links h4 {
  color: white;
  margin-bottom: 25px;
}
.quick-links ul {
  padding: 0 !important;
  list-style: none;
  text-align: center;
}

.quick-links ul li {
  display: inline-block;
  margin-left: 10px;
}

.quick-links ul li a {
  color: white;
  text-decoration: none;
  padding-top: 10px;
  font-weight: 500;
  font-size: 1.2em;

}

.social-media ul {
  list-style: none;
  padding: 0 !important;
}

.social-media ul li {
  display: inline-block;
  margin-left: 6px;
}

.social-media ul li a {
  color: white;
}

.social-media h4 {
  color: white;
  margin-bottom: 25px;
}

.social-media p {
  color: white;
}
</style>
