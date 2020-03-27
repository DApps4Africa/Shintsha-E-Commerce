<template>
  <v-row justify="center">
    <v-dialog
      v-model="$store.state.showPurchaseProductModal"
      persistent
    >
      <v-card>
        <v-card-title class="headline">
          My Cart
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row justify="center">
              <v-btn
                color="green darken-1"
                dark
                @click.stop=""
              >
                Balance :
              </v-btn>
            </v-row>
            <v-data-table
              :headers="headers"
              :items="$store.state.cart"
              class="elevation-0"
              hide-default-footer
            >
              <template
                slot="items"
                slot-scope="product"
              >
                <tr>
                  <td>{{ product.product_id }}</td>
                  <td>{{ product.product_name }}</td>
                  <td>{{ product.quantity }}</td>
                  <td>{{ product.price }}</td>
                  <td>
                    <v-btn color="error">
                      DELETE
                    </v-btn>
                    <v-btn color="primary">
                      EDIT
                    </v-btn>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </v-container>
        </v-card-text>
        <v-card-text>
          <p>
            Total :
            <input v-model="total">
          </p>
          <p>{{ total }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="green darken-1"
            text
            @click="$store.state.showPurchaseProductModal = false"
          >
            Continue Shopping
          </v-btn>
          <v-btn
            color="black darken-1"
            text
            @click="$store.state.showPurchaseProductModal = false"
          >
            Checkout
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    data() {
        return {
            total:'',
            headers: [
                {
                    text: 'id',
                    value: 'product_id'
                },
                {
                    text: 'Name',
                    value: 'product_name'
                },
                {
                    text: 'Quantity',
                    value: 'quantity'
                },
                {
                    text: 'Price',
                    value: 'price'
                },
                {
                    text: 'Actions',
                    value: 'action'
                }
            ]
        }
    },

    computed() {
      this.selectItems();
    },
    methods: {
        selectItems($state) {

        },

        cartTotalPrice(product, cart){
          return this.$store.state.cart.reduce((total, cart) => {
            return total + product.price * product.quantity
          }, 0)
        },

        checkout(product) {

        },
    }
}
</script>
