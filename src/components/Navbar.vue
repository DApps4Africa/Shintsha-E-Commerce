<template>
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
    <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight" />
  </v-app-bar>
</template>

<script>
export default {
    
}
</script>