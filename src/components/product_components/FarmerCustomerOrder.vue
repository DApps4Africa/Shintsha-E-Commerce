<template>
  <v-col>
    <v-app-bar
      color="green darken-1"
      dark
    >
      <v-toolbar-title>Customer's Orders</v-toolbar-title>
      <v-spacer />
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      />
    </v-app-bar>
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
            <v-btn>
              <v-icon
                @click="deleteProduct(product)"
              >
                delete_forever
              </v-icon>
              <v-icon
                @click="editProduct(product)"
              >
                create
              </v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-col>
</template>

<script>
export default {
    data() {
        return {
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
                    text: 'Quantity Ordered',
                    value: 'quantity'
                },
                {
                    text: 'Customer Number',
                    value: 'customer'
                },
                {
                    text: 'Deliver Number',
                    value: 'deliverer'
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
    }
}
</script>