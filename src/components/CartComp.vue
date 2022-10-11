<template>
  <div class="product-card">
    <div
      class="card product-card-inside"
      style="width: 18rem"
      v-for="cartItem in cartItems"
      :key="cartItem.id"
    >
      <img :src="cartItem.imageUrl" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ cartItem.shoeName }}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Price:{{ cartItem.price }}</li>
        <li class="list-group-item">
          <label htmlFor="qty">Qty</label>
          <input
            :min="1"
            type="number"
            id="qty"
            name="qty"
            :value="cartItem.quantity"
          />
        </li>
      </ul>
      <div class="card-body">
        <button class="btn btn-danger" @click="removeFromCart(cartItem)">
          Remove Products
        </button>
      </div>
    </div>
  </div>

  <div class="card cart-summary" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title"><h2>Cart Summary</h2></h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Total Price:{{ totalPrice }}</li>
    </ul>
    <div class="card-body">
      <button class="btn btn-warning">Checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     total: 0,
  //     adjQty: "",
  //   };
  // },
  methods: {
    removeFromCart(product) {
      this.$store.dispatch("deleteProduct", product);
    },
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
    // totalPrice() {
    //   this.cartItems.forEach((item) => {
    //     this.total += item.price * item.quantity;
    //     console.log(this.total, "total");
    //   });
    //   return this.total;
    // },
  },
};
</script>

<style>
.product-card {
  display: flex;
  flex-direction: row;
  margin: 2% 0 0 2%;
  justify-content: space-around;
}

/* .product-card-inside {
  margin: 2%;
} */

#qty {
  width: 2.5rem;
}

.cart-summary {
  margin: 30px 0 0 45%;
}
</style>
