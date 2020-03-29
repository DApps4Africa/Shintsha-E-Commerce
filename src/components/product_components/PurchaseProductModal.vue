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
              sort-by="product_name"
              class="elevation-1"
              hide-default-footer
            >
              <template v-slot:top>
                <v-toolbar
                  flat
                  color="white"
                >
                  <v-toolbar-title>My Cart</v-toolbar-title>
                  <v-divider
                    class="mx-4"
                    inset
                    vertical
                  />
                  <v-spacer />
                  <v-dialog
                    v-model="dialog"
                    max-width="500px"
                  >
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col
                              cols="12"
                              sm="6"
                              md="4"
                            >
                              <v-text-field
                                v-model="editedProduct.quantity"
                                label="Qauntity (kg)"
                              />
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer />
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="close"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="save"
                        >
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon
                  small
                  class="mr-2"
                  @click="editProduct(item)"
                >
                  mdi-plus
                </v-icon>
                <v-icon
                  small
                  @click="deleteProduct(item)"
                >
                  mdi-delete
                </v-icon>
              </template>
              <template v-slot:no-data>
                <v-btn
                  color="primary"
                  @click="initialize"
                >
                  Reset
                </v-btn>
              </template>
            </v-data-table>
          </v-container>
        </v-card-text>
        <v-card-text>
          <p>
            Total: {{ cartTotalPrice }}
            <input v-model="total">
          </p>
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
            @click="checkou()"
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
            formTitle: 'Quantity',
            cart: 0,
            total: 0,
            headers: [{
                    text: 'id',
                    value: 'product_id',
                    align: 'start',
                    sortable: false
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
                    value: 'actions',
                    sortable: false
                }
            ],
            editedProduct: {
                quantity: 0
            },
            editedIndex: -1,
            dialog: false
        }
    },

    computed() {
        this.selectItems();
    },
    methods: {
        selectItems($state) {

        },

        cartTotalPrice(product, cart) {
            return this.$store.state.cart.reduce((total, cart) => {
                return total + product.price * product.quantity
            }, 0)
        },

        checkout: async function (product) {
            return new Promise((resolve, reject) => {})
        },

        editProduct(product) {
            this.editedIndex = this.$store.state.cart.indexOf(product)
            this.editedProduct = Object.assign({}, product)
            this.dialog = true
        },

        deleteProduct(product) {
            const index = this.$store.state.cart.indexOf(product)
            confirm('Are you sure you want to delete this product?') && this.$store.state.cart.splice(index, 1)
        },
        save() {
            if (this.editedIndex > -1) {
                var _this = this
                this.$store.state.cart = this.$store.state.cart.map((product) => {
                    console.log('_this: ', _this.editedProduct)
                    if (product.product_id === _this.editedProduct.product_id) {
                        product = _this.editedProduct
                    }
                    return product
                })
            }
            this.dialog = false
            this.close()
        },
    }
}
</script>
