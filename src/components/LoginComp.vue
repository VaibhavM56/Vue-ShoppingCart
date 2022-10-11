<template>
  <form class="login mt-5" @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="formData.email"
      />

      <p class="msgerr">{{ setEmailError }}</p>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model="formData.password"
      />
    </div>

    <p class="msgerr">{{ setPasswordError }}</p>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      setEmailError: "",
      setPasswordError: "",
    };
  },
  methods: {
    goToProducts() {
      this.$router.push("/products");
    },

    validateEmail() {
      if (this.formData.email) {
        let emailRegex = /^\S+@\S+$/;
        if (emailRegex.test(this.formData.email)) {
          this.setEmailError = "";
          return true;
        } else {
          this.setEmailError = "enter valid email";
        }
      } else {
        this.setEmailError = "email is required";
      }
    },
    validatePassword() {
      if (this.formData.password) {
        let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (passRegex.test(this.formData.password)) {
          this.setPasswordError = "";
          return true;
        } else {
          this.setPasswordError = "enter valid password minimum 8 characters";
        }
      } else {
        this.setPasswordError = "password is required";
      }
    },
    handleSubmit() {
      this.validateEmail();
      this.validatePassword();

      if (this.validateEmail() && this.validatePassword()) {
        this.$store.commit("login");
        alert("Submitted successfully");
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
.login {
  margin-left: 30%;
  padding: 20px;
  width: 40%;
  align-items: center;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  border-radius: 13px;
  z-index: 100;
}
.loginText {
  cursor: pointer;
  margin-left: 10%;
}
.msgerr {
  color: red;
}
</style>
