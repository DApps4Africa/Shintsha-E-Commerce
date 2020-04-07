<template>
  <v-content
    style="width:100vw; height:100vh; padding:0px;"
    class="ovr_lay"
    fluid
  >
    <v-app-bar class="app_bar">
      <v-toolbar-title>Select Product Option</v-toolbar-title>
    </v-app-bar>
    <v-row
      align="center"
      justify="center"
    >
      <v-card
        v-for="(item,i) in items"
        :key="i"
        :to="item.to"
        class="ma-3 pa-6"
        max-width="400"
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
  </v-content>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          title: "Farmer",
          text:"The farmer can add product and manage their availible product in the marketplace. They'll be able to update their stock",
          btn: "Manage Products",
          to: "/farmerproductview"
        },
        {
          title: "Customer",
          text:"Here The customer can buy availible products and choose a shipping option between deliverer listed on the marketplace ",
          btn: "Products Listing",
          to: "/categorycardview"
        }
      ]
    }),
  }
</script>
<style scoped>
.app_bar {
  background-image: linear-gradient(45deg, skyblue, green)
}
.ovr_lay {
  background-image: linear-gradient(45deg, skyblue, green);
  background-color: transparent;
}
html {
    overflow-y: scroll;
}

body {
    position: absolute;
}
</style>