<template>
  <div class="footer">
    <div class="container">
      <div class="col-md-4 quick-links">
        <ul>
          <li><nuxt-link to="#">About</nuxt-link></li>
          <li><nuxt-link to="#">Contact us</nuxt-link></li>
          <li><nuxt-link to="#">Privacy Policy</nuxt-link></li>
          <li><nuxt-link to="#">Terms of use</nuxt-link></li>
          <li><nuxt-link to="#">FAQs</nuxt-link></li>
        </ul>
      </div>
      <div class="col-md-4 social-media">
        <h4>Be Social</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo omnis
          fugiat eaque quasi reiciendis, laborum aliquid reprehenderit
          accusantium eum earum iure iste inventore illum consectetur autem id
          soluta recusandae. At.
        </p>
        <ul>
          <li>
            <a href="#"> <span class="fa fa-facebook"></span></a>
          </li>
          <li>
            <a href="#"> <span class="fa fa-twiiter"></span></a>
          </li>
          <li>
            <a href="#"> <span class="fa fa-instagram"></span></a>
          </li>
        </ul>
      </div>
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
}

.quick-links ul li {
  display: block;
}

.quick-links ul li a {
  color: white;
  text-decoration: none;
  padding-top: 10px;
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
