<template>
  <v-content>
    <v-app-bar
      app
      class="green_color"
      color="#0d9436"
      dark
    >
      <v-btn
        class="transparent"
        text
      >
        <v-toolbar-title
          id="appName"
          :ripple="{ center: true }"
        >
          Shintsha
        </v-toolbar-title>
      </v-btn>
      <v-btn icon>
        <v-icon
          to="/"
          :ripple="{ center: true }"
        />
      </v-btn>
      <v-spacer />
      <v-app-bar-nav-icon @click="drawer = !drawer" />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list>
        <v-list-item
          link
          v-for="(menuItem,i) in menuItems"
          :key="i"
          :to="menuItem.to"
        >
          <v-list-item-action>
            <v-icon>{{ menuItem.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ menuItem.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-container fluid>
      <router-view />
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data() {
        return {
            drawer: false,
            activeBtn: 1,
            menuItems: [{
                    to: "/dashboardview",
                    icon: "chart-bar",
                    text: "Dashboard"
                },
                {
                    to: "/orderview",
                    icon: "align-justify",
                    text: "Order"
                },
                {
                    to: "/manageprofileview",
                    icon: "address-card",
                    text: "Manage Profile"
                },
                {
                    to: "/walletview",
                    icon: "chalkboard-teacher",
                    text: "Wallet"
                }
            ]
        };
    }
  }
</script>