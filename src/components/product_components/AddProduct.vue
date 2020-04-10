<template>
  <v-app id="inspire">
    <v-container
      class="ovr_lay"
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
            shaped
            class="mx-auto"
            max-width="500"
          >
            <v-card-title class="title font-weight-regular justify-space-between">
              <span>{{ currentTitle }}</span>
              <v-avatar
                color="green darken-2"
                class="subheading white--text"
                size="24"
                v-text="step"
              />
            </v-card-title>

            <v-window v-model="step">
              <v-window-item :value="1">
                <v-card-text>
                  <v-text-field
                    :items="productName"
                    label="Product Name"
                    v-model="countryCode"
                  />
                  <v-select
                    :items="category"
                    label="Category"
                    v-model="category"
                  />
                  <span class="caption grey--text text--darken-1">
                    All the product belong to a category
                  </span>
                </v-card-text>
              </v-window-item>

              <v-window-item :value="2">
                <v-card-text>
                  <v-text-field
                    label="Cell-Phone Number"
                    v-model="farmerPhoneNumber"
                    :rules="farmerPhoneNumberRules"
                  />
                  <v-text-field
                    :items="countryCodes"
                    :rules="countryCodeRules"
                    label="Country Code"
                    v-model="countryCode"
                  />
                  <span class="caption grey--text text--darken-1">
                    Please enter a phone number with the country code
                  </span>
                </v-card-text>
              </v-window-item>

              <v-window-item :value="3">
                <div class="pa-4 text-center">
                  <v-img
                    class="mb-4"
                    contain
                    height="128"
                    href="../assets/CaseBlack.png"
                  />
                  <h3 class="title font-weight-light mb-2">
                    Congratulations
                  </h3>
                  <span class="caption grey--text">Your Product was added to the listing!</span>
                </div>
              </v-window-item>
            </v-window>

            <v-divider />

            <v-card-actions>
              <v-btn
                :disabled="step === 1"
                text
                @click="step--"
              >
                Back
              </v-btn>
              <v-spacer />
              <v-btn
                :disabled="step === 3"
                color="green darken-2"
                depressed
                @click="step++"
              >
                Next
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
    data: () => ({
      step: 1,
      productName: "",
      category: [],
      country: "",
      farmerPhoneNumber: "",
      countries: [],
      countryCodes: [],
      countryCode: "",
      selectedCountry: "",
      farmerPhoneNumberRules: [
        v => !!v || "CellPhone number is required",
        v => (v && !isNaN(v) && v.length <= 10) || "CellPhone number must be less than 10 characters and must exlcude the country code"
      ],
      countryCodeRules: [
        v => !!v || "Country Code Required",
        v => (v && v.length > 0) || "Country Code cannot be empty"
      ]  
    }),

    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Name & Category'
          case 2: return 'Phone Number & Country Code'
          default: return 'Product added'
        }
      },
    },
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