<template>
  <div class="login-content">
    <div class="login-form-container col-md-12 ">
      <h4 class="norm-padding"><strong>SIGN UP</strong></h4>
      <p class="norm-padding">Check your progress in securing an investment</p>
      <br />
      <form>
        <div class="col-md-12 form-input input-radio">
          <ul>
            <li>
              <input type="radio" name="type" value="startup" />
              <span for="startup">I am a startup</span><br />
            </li>
            <li>
              <input type="radio" name="type" value="investor" />
              <span for="startup">I am an investor</span><br />
            </li>
          </ul>
        </div>
        <div class="col-md-12 form-input">
          <label for="email">Email</label>
          <base-input required type="text" placeholder="e.g John@gmail.com" />
        </div>
        <div class="col-md-12 form-input">
          <label for="password">Password</label>
          <base-input required type="text" placeholder="******" />
        </div>
        <div class="col-md-12">
          <base-button class="form-button" type="submit">Register</base-button>
        </div>
      </form>
    </div>
  </div>
</template>
<style>
.login-content {
  padding: 7% 20% 5% 20%;
  background: rgb(248, 248, 248);
  height: 100vh;
}
.login-form-container {
  margin: 0 auto;
  background: white;
  border: 1px solid rgb(236, 236, 236);
  border-radius: 5px;
  padding: 30px;
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

.input-radio ul {
  padding: 0 !important;
  list-style: none;
}

.input-radio ul li {
  display: inline-block;
  margin-left: 10px;
}
</style>
