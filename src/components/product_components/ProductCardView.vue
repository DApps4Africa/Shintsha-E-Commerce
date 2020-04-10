<template>
  <v-container
    fluid
    class="ovr_lay"
  >
    <v-app-bar>
      <v-toolbar-title>Product</v-toolbar-title>
      <v-spacer />
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      />
      <v-badge
        :content="$store.state.cart.length"
        color="black"
        overlap
        transition="slide-x-transition"
      >
        <v-hover v-model="hover">
          <v-icon
            @click="showCart(product)"
            large
          >
            add_shopping_cart
          </v-icon>
        </v-hover>
      </v-badge>
    </v-app-bar>
    <v-col>
      <v-row
        align="center"
        justify="space-around"
      >
        <template>
          <v-card
            v-for="(product ,$index) in products"
            :key="$index"
            class="mx-auto my-12"
            width="350"
          >
            <v-card-title>{{ product.product_name }}</v-card-title>
            <v-img 
              src=""
              height="100px" 
            />
            <v-card-title>Details</v-card-title>
            <v-card-text>
              <div class="my-4 subtitle-1">
                <b>Country</b> <br> {{ product.country }} <br>
                <b>Quantity</b><br>
                <div>{{ product.quantity }} KG left</div>
                <b>Price</b> <br> {{ product.price }} {{ localCurrency }} <br>
                <b> Available</b> {{ product.available? "Yes":"No" }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="deep-purple lighten-2"
                text
                @click="addToCart(product)"
              >
                Add To Cart
              </v-btn>
              <v-spacer />
              <v-btn
                color="deep-grey lighten-2"
                text
                @click="showDetails(product)"
              >
                More Details
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-row>

      <loading
        :active.sync="isLoading"
        :is-full-page="true"
      />
      <infinite-loading @infinite="filterProducts" />
      <purchaseModal />
    </v-col>
  </v-container>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import Loading from 'vue-loading-overlay';
import swal from "sweetalert2";
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import purchaseModal from './PurchaseProductModal'
export default {
    components: {
        purchaseModal,
        Loading,
        InfiniteLoading
    },
    data() {
        return {
            hover: null,
            products: [],
            isLoading: false,
            localCurrency: 'ZAR'
        }
    },
    
    beforeMount() {
        console.log("Product cart", this.$store.state.cartItems.length);
        this.filterProducts();
    },
    methods: {
        filterProducts($state) {
            //console.log('this.$store.state.selectedCategory: ', this.$store.state.selectedCategory)
            //console.log('filterProducts: ', $state)
            $state.loaded();
            this.products = this.$store.state.registredProducts.filter((product) => {
                return product.category === this.$store.state.selectedCategory && product.available
            })
            console.log('products: ', this.products)
            $state.complete();
        },

        showCart(product) {
            console.log('product to purchase: ', product)
            this.productToPurchase = product
            this.$store.state.showPurchaseProductModal = true
        },

        addToCart(product, message){
            this.$store.state.cart.push(product)
            this.cart++
            swal.fire({
                icon: "succes",
                title: "Product added",
                text: message
            });
        },

        showDetails(product) {
            console.log('product to purchase: ', product)
            this.productToPurchase = product
            this.$store.state.showProductDetailsModal = true
        },
        //ADD filter
        searchProducts (value, search, item) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },
    }
}
</script>

<style scoped>
.transparent_custom {
    color: rgba(255, 255, 255, 0.041);
}

.ovr_lay {
    background-image: linear-gradient(45deg, skyblue, green);
    background-color: transparent;
}
</style>