<template>
  <v-row justify="center">
    <v-dialog
      v-model="$store.state.showProductDetailsModal"
      persistent
    >
      <v-card>
        <v-card-title class="headline">
          Product Details
        </v-card-title>
        <v-card-text>
          <v-container />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="green darken-1"
            text
            @click="$store.state.showProductDetailsModal = false"
          >
            Continue Shopping
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
            
        }
    }
}
</script>