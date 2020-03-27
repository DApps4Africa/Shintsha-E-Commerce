<template>
  <v-row justify="center">
    <v-col width="500">
      <v-dialog
        v-model="this.$store.state.passwordRecoveryDialog"
        persistent
      >
        <v-card>
          <v-card-title class="headline">
            Account Recovery
          </v-card-title>
          <v-stepper v-model="step">
            <v-stepper-header>
              <v-stepper-step
                color="green"
                :complete="step > 1"
                step="1"
              >
                CellPhone Number
              </v-stepper-step>
              <v-divider />
              <v-stepper-step
                color="green"
                :complete="step > 2"
                step="2"
              >
                Recovery Code
              </v-stepper-step>
              <v-divider />
            </v-stepper-header>
            <v-stepper-items>
              <v-stepper-content step="1">
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
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
                        v-model="cellNumber"
                        :counter="10"
                        :rules="cellPhoneNumberRules"
                        label="CellPhone number"
                        required
                      />
                    </v-col>
                  </v-row>
                  <v-select
                    :items="countries"
                    label="Country"
                    :rules="countryRules"
                    v-model="selectedCountry"
                  />
                </v-form>
                <v-btn
                  v-if="valid"
                  color="green"
                  @click="validateRecoveryDetails"
                >
                  Continue
                </v-btn>
                <v-btn
                  text
                  :ripple="{ center: true }"
                  color="black"
                  @click="closeView"
                >
                  Cancel
                </v-btn>
              </v-stepper-content>
              <v-stepper-content step="2">
                <v-text-field
                  v-model="recoveryCode"
                  label="Recovery Code"
                  required
                />
                <v-btn
                  color="green"
                  @click="step = 2"
                >
                  Continue
                </v-btn>
                <v-btn
                  text
                  :ripple="{ center: true }"
                  color="black"
                  @click="closeView"
                >
                  Cancel
                </v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import countryList from 'country-list'
import countriesApi from 'countries-api'
export default {
    data() {
        return {
            dialog: false,
            valid: false,
            validCode: true,
            selectedCountry: '',
            recoveryCode: '',
            cellNumber: '',
            showRecoveryInput: false,
            countryCode: '',
            step: 1,
            countryCodesAlphaCodes2: [],
            countries: [],
            countryCodes: [],
            countryCodeRules: [
                v => !!v || 'Country Code Required',
                v => (v && v.length > 0) || 'Country Code cannot be empty',
            ],
            countryRules: [
                v => !!v || 'Country is required',
                v => (v && v.length > 0) || 'Country name cannot be blank',
            ],
            cellPhoneNumberRules: [
                v => !!v || 'CellPhone number is required',
                v => (v && !isNaN(v) && v.length <= 10) || 'CellPhone number must be less than 10 characters and must exlcude the country code',
            ],

        }
    },
    beforeMount() {
        this.getCountryList()
    },
    watch: {
        countryCode: function (code) {
            this.selectCountryUsingCode(code)
            //console.log('selectedCountryCode: ', code)
        },
        selectedCountry: function (country) {
            this.selectCodeUsingCountry(country)
            //console.log('selectedCountry: ', country)
        }
    },
    methods: {
        closeView() {
            this.$store.state.passwordRecoveryDialog = false
        },
        getCountryList() {
            var countries = countriesApi.findByRegion('Africa')
            countries.data.forEach((country) => {
                this.countries.push(country.name.common)
                this.countryCodes.push("+" + country.callingCode[0])
                this.countryCodesAlphaCodes2.push(country.cca2)
            })
        },
        selectCountryUsingCode(code) {
            this.selectedCountry = this.countries[this.countryCodes.indexOf(code)]
        },
        selectCodeUsingCountry(country) {
            this.countryCode = this.countryCodes[this.countries.indexOf(country)]
        },
        validateRecoveryDetails() {
            if (this.$refs.form.validate()) {
                this.snackbar = true
                this.step = 2
            }
        },
        validateRecoveryCode() {
            if (this.$refs.form.validate()) {
                this.snackbar = true
            }
        }
    }
}
</script>

<style scoped>
.green_blue {
    background-image: linear-gradient(45deg, skyblue, green);
}
</style>
