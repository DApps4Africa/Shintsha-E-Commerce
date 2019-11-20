<template>
  <div id="app">
    <v-app>
      <v-app-bar app class="green_color" color="#0d9436" dark>
        <v-btn class="transparent" height="100%" text>
          <v-toolbar-title id="appName" :ripple="{ center: true }">Shintsha</v-toolbar-title>
        </v-btn>
        <div class="flex-grow-1"></div>
        <v-btn icon>
          <v-icon to="/" :ripple="{ center: true }"></v-icon>
        </v-btn>
      </v-app-bar>
      <v-bottom-navigation :value="activeBtn" grow color="#0d9436" absolute>
        <v-btn v-for="(menuItem,i) in menuItems" :key="i" :to="menuItem.to">
          <span class="responsive_text">{{menuItem.text}}</span>
          <v-icon>{{menuItem.icon}}</v-icon>
        </v-btn>
      </v-bottom-navigation>


      <v-content>
        <v-container fluid>
          <v-row>
            <v-col>
              <router-view />
            </v-col>
          </v-row>
        </v-container>
      </v-content>

    </v-app>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeBtn: 2,
        menuItems: [{
            to: "/profileview",
            icon: "person",
            text: "Profile"
          },
          {
            to: "/registerproductview",
            icon: "add",
            text: "Regiser Product"
          },
          {
            to: "/marketplaceview",
            icon: "local_florist",
            text: "Market Place"
          },
          {
            to: "/deliveryserviceview",
            icon: "local_shipping",
            text: "Delivery Services"
          }
        ]
      }
    },
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Courgette&display=swap');

  #appName {
    font-family: 'Courgette', cursive;
    font-size: 30px;
  }

  .green_color {
    background-image: linear-gradient(45deg, skyblue, green);
  }

  html {
    font-size: calc(1em + 1vw)
  }
</style>