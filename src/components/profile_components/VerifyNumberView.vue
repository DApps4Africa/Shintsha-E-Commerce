<template>
  <v-app id="inspire">
    <v-container
      class="ovr_lay"
      fluid
    >
      <v-row
        justify="center"
      >
        <v-col>
          <v-card
            class="elevation-20"
            shaped
          >
            <v-container>
              <v-row justify="center">
                <v-col
                  cols="12"
                  sm="8"
                  md="4"
                >
                  <v-card-title color="green darken-1">
                    Verification
                  </v-card-title>
                  <v-card-text>
                    <v-text-field
                      label="Code"
                      color="green darken-1"
                      name="verificationcode"
                      type="text"
                    />
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      color="green darken-1"
                      @click="verify"
                      shaped
                    >
                      Verify
                    </v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        verify() {
            this.$store.state.isLoggedIn = true;
            this.$router.push("/profileview");
            // @dev Check if code is valid
        }
    }
}
</script>
<style scoped>
 .ovr_lay {
    background-image: linear-gradient(45deg, skyblue, green);
    background-color: transparent;
}
 </style>