<template>
  <v-col>
    <v-row
      align="center"
      justify="center"
    >
      <v-card
        v-for="(item,i) in items"
        :key="i"
        :to="item.to"
        class="ma-3 pa-6"
        color="green darken-1"
        dark
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
  </v-col>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          title: "Add a  new Product",
          text:"You can add product and manage their availible product in the marketplace.",
          btn: "New Product",
          to: "/addproduct"
        },
        {
          title: "Customer Order",
          text:"As a fammer you will need to keep an eye on your customer order",
          btn: "Customer Order",
          to: "/customerorder"
        }
      ]
    }),
  }
</script>