<template>
  <v-container
    fluid
    class="ovr_lay"
  >
    <v-app-bar>
      <v-toolbar-title>Delivery</v-toolbar-title>
    </v-app-bar>
    <v-col>
      <v-row
        align="center"
        justify="space-between"
      >
        <v-card
          v-for="(item,i) in items"
          :key="i"
          :to="item.to"
          class="ma-3 pa-6"
          max-width="300"
          fluid
          shaped
        >
          <v-card-title>
            <span class="title font-weight-light">{{ item.title }}</span>
          </v-card-title>

          <v-card-text class="headline font-weight-bold">
            {{ item.text }}
          </v-card-text>

          <v-card-actions>
            <v-col class="text-center">
              <v-btn
                :ripple="{ center: true }"
              >
                {{ item.btn }}
              </v-btn>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          title: "Farmer",
          text:"Use our Track My Order service on the website to see exactly when your shopping will arrive - you can track your delivery to the nearest 30 minutes!",
          btn: "Manage Shipping",
          to: "/trackshippingview"
        },
        {
          title: "Customer",
          text:"The order management process starts from when a customer places an order, to keeping track of that order until it is fulfilled.",
          btn: "Manage Orders",
          to: "/manageorderview"
        },
        {
          title: "Deliverer",
          text:"Manage your delivery: it's easy and stress free. We offer a range of delivery options to you according to the specifics of your shipment.",
          btn: "Manage Delivery",
          to: "/managedeliveryview"
        }
      ]
    }),
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