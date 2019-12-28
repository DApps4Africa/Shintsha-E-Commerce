<template>
<v-app id="app" >
    <v-app-bar app class="green_color" color="#0d9436" dark>
        <v-btn class="transparent" text>
            <v-toolbar-title id="appName" :ripple="{ center: true }">Shintsha</v-toolbar-title>
        </v-btn>
        <v-btn icon>
            <v-icon to="/" :ripple="{ center: true }"></v-icon>
        </v-btn>
    </v-app-bar>
    <v-bottom-navigation cols="12" sm="8" md="4" class="fix-bottom" :value="activeBtn" color="#0d9436" fixed horizontal shift>
        <v-btn v-for="(menuItem,i) in menuItems" :key="i" :to="menuItem.to" style="width:400px" width="300">
            <span class="responsive_text">{{menuItem.text}}</span>
            <v-icon>{{menuItem.icon}}</v-icon>
        </v-btn>
    </v-bottom-navigation>
      <v-content style="width:100vw">
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>
</v-app>
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
    font-size: 30px;
}

html {
    overflow-y: scroll;
}

body {
    position: absolute;
}

.green_color {
    background-image: linear-gradient(45deg, skyblue, green);
}

html {
    font-size: calc(1em + 1vw)
}
</style>
