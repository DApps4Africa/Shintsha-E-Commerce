<template>
  <v-container
    fluid
    class="ovr_lay"
  >
    <v-app-bar>
      <v-toolbar-title>My Profile</v-toolbar-title>
    </v-app-bar>
    <v-row
      fluid
      justify="center"
    >
      <v-col>
        <v-card
          fluid
        >
          <v-container>
            <v-row justify="center">
              <v-col
                cols="auto"
                class="text-center pl-0"
              >
                <v-tabs
                  v-model="tab"
                  color="green darken-1"
                  centered
                  icons-and-text
                >
                  <v-tab href="#profile">
                    Profile
                    <v-icon>mdi-account</v-icon>
                  </v-tab>

                  <v-tab href="#editProfile">
                    Edit Profile
                    <v-icon>mdi-pencil</v-icon>
                  </v-tab>
                </v-tabs>

                <v-tabs-items
                  v-model="tab"
                >
                  <v-tab-item
                    value="profile"
                  >
                    <v-card
                      color="white"
                      flat
                    >
                      <v-card-title class="headline">
                        Details 
                      </v-card-title>
                      <v-card-text>
                        <h2> CellPhone </h2>
                        <h3> {{ $store.state.user.user_phone_number }} </h3>
                      </v-card-text>
                      <v-card-text>
                        <h2> Country </h2>
                        <h3> {{ $store.state.user.country_code }} </h3>
                      </v-card-text>
                      <v-card-text>
                        <h2> Ethereum Address</h2>
                        <h3> {{ $store.state.user.user_eth_address }} </h3>
                      </v-card-text>
                      <v-card-text>
                        <h2> User Address</h2>
                        <h3> {{ $store.state.user.user_address }} </h3>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn text>
                          More Info
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item
                    value="editProfile"
                  >
                    <v-card 
                      flat
                      width="600"
                    >
                      <v-form
                        action="/"
                        method="post"
                      >
                        <v-row>
                          <v-col cols="4">
                            <v-select
                              :items="countryCodes"
                              :rules="countryCodeRules"
                              label="Country Code"
                              v-model="countryCode"
                            />
                          </v-col>
                          <v-col cols="8">
                            <v-text-field
                              label="Cell-Phone Number"
                              v-model="cellNumber"
                              :rules="cellPhoneNumberRules"
                            />
                          </v-col>
                          <v-col
                            v-if="$store.state.user.isDeliverer"
                            cols="12"
                          >
                            <v-text-field
                              label="Licence Number"
                              v-model="licenceNumber"
                              :rules="licenceNumberRules"
                            />
                          </v-col>
                        </v-row>
                        <v-text-field
                          :append-icon="showLoginPassword ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="passwordEntryRules"
                          :type="showLoginPassword ? 'text' : 'password'"
                          name="input-10-2"
                          label="Enter Password"
                          hint="Password set when you registered"
                          v-model="loginPassword"
                          class="input-group--focused"
                          @click:append="showLoginPassword = !showLoginPassword"
                        />
                        <v-text-field
                          :append-icon="showLoginPassword ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="passwordEntryRules"
                          :type="showLoginPassword ? 'text' : 'password'"
                          name="input-10-2"
                          label="Re-Enter Password"
                          hint="Password set when you update your profile"
                          v-model="loginPassword"
                          class="input-group--focused"
                          @click:append="showLoginPassword = !showLoginPassword"
                        />
                        <v-col class="text-center">
                          <v-btn :ripple="{ center: true }">
                            Update
                          </v-btn>
                        </v-col>
                      </v-form>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </v-col>
            </v-row>
          </v-container>
          <v-btn
            fab
            color="green darken-1"
            bottom
            right
            absolute
            @click="dialog = !dialog"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <v-card>
              <v-card-text>
                <v-text-field label="CellPhone" />
                <v-text-field label="Amount" />
                <small class="grey--text">* Please give us your phone number to proceed the transaction.</small>
              </v-card-text>

              <v-card-actions>
                <v-spacer />

                <v-btn
                  text
                  color="primary"
                  @click="dialog = false"
                >
                  Submit
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import countriesApi from "countries-api";

export default {
    data() {
        return {
            dialog: false,
            tab: null,
            countries: [],
            country: "",
            countryCodes: [],
            countryCode: "",
            selectedCountry: "",
            countryCodeRules: [
            v => !!v || "Country Code Required",
            v => (v && v.length > 0) || "Country Code cannot be empty"
            ],
            cellNumber: "",
            cellPhoneNumberRules: [
                v => !!v || "CellPhone number is required",
                v =>
                (v && !isNaN(v) && v.length <= 10) ||
                "CellPhone number must be less than 10 characters and must exlcude the country code"
            ],
            showLoginPassword: false,
            loginPassword: "",
            confirmNewPassword: "",
            passwordEntryRules: [value => !!value || "Password is required."],
            passwordRules: [
                value => !!value || "Password is required.",
                value =>
                (value &&
                    new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})").test(
                        value
                    )) ||
                "Passowrd must include an upper case character and a numeric value"
            ],
            passwordMatchRules: [value => !!value || "Confirm Password required"],
            licenceNumber: "",
            licenceNumberRules: [
              v => !!v || "LicenceNumber number is required",
                v =>
                (v && !isNaN(v) && v.length <= 15) ||
                "LicenceNumber number must be less than 15 characters"
            ]
        }
    },
    mounted() {
        this.getCountryList();
    },
    methods: {
      getCountryList() {
            var countries = countriesApi.findByRegion("Africa");
            console.log("countries ", countries)
            countries.data.forEach(country => {
                this.countries.push(country.name.common);
                this.countryCodes.push("+" + country.callingCode[0]);
            });
        },
    }
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
