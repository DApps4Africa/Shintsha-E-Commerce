<template>
  <v-row>
    <v-col>
      <v-app-bar
        color="green darken-1"
        dark
      >
        <v-toolbar-title>My Profile</v-toolbar-title>
      </v-app-bar><br>
      <v-row
        justify="center"
      >
        <v-card
          width="75%"
        >
          <v-card-title>
            Farmer
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-raw>
                <v-col>
                  <div
                    class="app-header text-center"
                    justify="center"
                  >
                    <h1>Name</h1>
                    <h2>
                      A Decentralized
                    </h2>
                  </div>
                </v-col>
                <v-col>
                  <v-row
                    class="pad_left "
                    justify="end"
                    align="start"
                  >
                    <v-avatar
                      color="orange"
                      size="62"
                    >
                      <img
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                      >
                    </v-avatar>
                  </v-row>
                </v-col>
              </v-raw>
            </v-container>
          </v-card-text>
        </v-card>
      </v-row>
    </v-col>
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
  
<style scoped>
.fit_screen {
    height: 100%;
    width: 100%;
}

html {
    overflow-y: scroll;
}

body {
    position: absolute;
}

.v-overlay__content {
    height: 65%;
}

.transparent_custom {
    color: rgba(255, 255, 255, 0.041);
}

.ovr_lay {
    background-image: linear-gradient(45deg, skyblue, green);
    background-color: transparent;
}

.v-overlay__scrim {
    background-image: linear-gradient(45deg, skyblue, green);
}

.v-overlay__content {
    height: 60%;
}
</style>
