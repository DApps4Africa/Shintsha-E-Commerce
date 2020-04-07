<template>
  <v-app id="inspire">
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
        sm="8"
        md="4"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card
            class="elevation-20"
            shaped
          >
            <v-card-title color="green darken-1">
              Verification form
            </v-card-title>
            <v-card-text>
              <v-text-field
                label="Verification Code"
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
