<template>
  <div class="product-card">
    <div
      class="card"
      style="width: 18rem"
      v-for="product in products"
      :key="product.id"
    >
      <img :src="product.imageUrl" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ product.shoeName }}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Price:{{ product.price }}</li>
      </ul>
      <div class="card-body">
        <button class="btn btn-success" @click="addToCart(product)">
          Add Product
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch("getProducts", item);
    },
  },
};
</script>

<style>
.product-card {
  display: flex;
  flex-direction: row;
}
</style>
