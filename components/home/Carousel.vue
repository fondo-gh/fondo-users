<template>
  <div class="banner-container">
    <div class="image-container">
      <img src="~assets/images/banner1.jpg" alt="Golf banner" />
    </div>
    <div class="caption-container">
      <h1>
        Unlocking Startup<br />
        Opportunities In Africa
      </h1>
      <p>
        we connects startups to potential <br />
        investors across the world.
      </p>
      <p><nuxt-link to="/">Start Here</nuxt-link></p>
    </div>
  </div>
</template>
<style scoped>
.banner-container {
  height: 600px;
  overflow: hidden;
}

.banner-container img {
  width: 100%;
}

.caption-container {
  position: absolute;
  top: 33%;
  left: 30%;
  text-align: center;
}

.caption-container h1 {
  color: white;
  font-size: 3.5em;
  font-weight: 700;
}

.caption-container p {
  color: white;
  font-size: 1.3em;
}

.caption-container a {
  background: var(--fondo-yellow);
  color: var(--fondo-ash);
  padding: 6px 25px;
  border-radius: 5px;
  font-size: 0.8em;
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
}
@media (max-width: 768px) {
  .image-container img {
    height: 100vh !important;
    width: 100vh !important;
    object-fit: cover;
  }

  .caption-container {
    position: absolute;
    top: 33%;
    left: 8%;
    margin: 0 auto;
    text-align: center;
  }

  .caption-container h1 {
    color: white;
    font-size: 2.5em;
    font-weight: 700;
  }
}
</style>
