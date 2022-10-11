<template>
  <nav class="navbar navbar-expand-lg bg-info">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->

      <router-link to="/" class="navbar-brand">Ekart</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/products" class="nav-link">Products</router-link>
          <router-link to="/cart" class="nav-link">Cart</router-link>
          <router-link
            to="/login"
            class="nav-link mr-auto"
            v-if="!this.$store.state.isAuthenticated"
            >Login</router-link
          >

          <button
            class="btn btn-primary ml-auto"
            v-if="this.$store.state.isAuthenticated"
            @click="logout"
          >
            logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      alert("logged out");
      this.$store.commit("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style>
.ml-auto {
  margin-right: 0 !important;
}
</style>
