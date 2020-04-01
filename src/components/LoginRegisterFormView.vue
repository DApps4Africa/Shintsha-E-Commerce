<template>
  <v-flex class="flex_custom">
    <v-responsive :aspect-ratio="20/9">
      <!-- partial:index.partial.html -->
      <v-col class="form">
        <v-flex class="tab-content">
          <v-col id="signup">
            <v-form
              action="/"
              method="post"
            >
              <v-col>
                <h1 class="remove_margin">
                  Sign Up
                </h1>
              </v-col>
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
              </v-row>
              <v-select
                :items="countries"
                label="Country"
                v-model="selectedCountry"
              />
              <v-text-field
                :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="passwordRules"
                :type="showNewPassword ? 'text' : 'password'"
                name="input-10-2"
                label="Set a Password"
                hint="At least 8 characters"
                class="input-group--focused"
                counter
                v-model="newPassword"
                @click:append="showNewPassword = !showNewPassword"
              />
              <v-text-field
                :append-icon="showConfirmNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="passwordMatchRules"
                :type="showConfirmNewPassword ? 'text' : 'password'"
                name="input-10-2"
                label="Enter Password Again"
                hint="Password must match previous password"
                counter
                v-model="confirmNewPassword"
                class="input-group--focused"
                @click:append="showConfirmNewPassword = !showConfirmNewPassword"
              />
              <v-col class="text-center">
                <v-btn
                  :ripple="{ center: true }"
                  @click="registerUser"
                >
                  Get Started
                </v-btn>
              </v-col>
              <v-col class="text-center">
                <a @click="changeTab(1)">Already have an account</a>
              </v-col>
            </v-form>
          </v-col>
          <v-flex
            id="login"
            class="tab_item_container pad_container"
          >
            <h1 class="remove_margin">
              Welcome Back!
            </h1>
            <h1 class="remove_margin">
              Login
            </h1>
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
              <v-col class="text-center">
                <v-btn
                  :ripple="{ center: true }"
                  to="/profileview"
                >
                  Login
                </v-btn>
              </v-col>
              <v-col class="text-center">
                <a
                  color="white"
                  @click="changeTab(2)"
                >Create a new account</a>
              </v-col>
              <v-col class="text-center">
                <a
                  color="white"
                  @click="accountRecoveryTab()"
                >Recover account</a>
              </v-col>
            </v-form>
          </v-flex>
        </v-flex>
        <!-- tab-content -->
      </v-col>
      <!-- /form -->
      <!-- partial -->
      <recoveryview />
    </v-responsive>
  </v-flex>
</template>

<script>
import countryList from "country-list";
import recoveryview from "./PasswordRecoveryView";
import swal from "sweetalert2";
import countriesApi from "countries-api";
import request from "request";

export default {
    components: {
        recoveryview,
    },
    data: () => ({
        isRegistered: false,
        tab: null,
        tab_login: null,
        checkbox: false,
        valid: true,
        name: "",
        email: "",
        select: null,
        show_login: false,
        show_signup: true,
        showNewPassword: false,
        showConfirmNewPassword: false,
        showLoginPassword: false,
        showRecoveryOverlay: false,
        country: "",
        cellNumber: "",
        newPassword: "",
        confirmNewPassword: "",
        loginPassword: "",
        countries: [],
        countryCodes: [],
        countryCode: "",
        selectedCountry: "",
        cellPhoneNumberRules: [
            v => !!v || "CellPhone number is required",
            v =>
            (v && !isNaN(v) && v.length <= 10) ||
            "CellPhone number must be less than 10 characters and must exlcude the country code"
        ],
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
        passwordEntryRules: [value => !!value || "Password is required."],
        countryCodeRules: [
            v => !!v || "Country Code Required",
            v => (v && v.length > 0) || "Country Code cannot be empty"
        ]
    }),
    beforeMount() {
        this.getCountryList();
    },
    watch: {
        countryCode: function (code) {
            this.selectCountryUsingCode(code);
            console.log("selectedCountryCode: ", code);
        },
        selectedCountry: function (country) {
            this.selectCodeUsingCountry(country);
            console.log("selectedCountry: ", country);
        }
    },
    methods: {
        login: async function (user) {
            return new Promise((resolve, reject) => {
            })
        },
        selectCountryUsingCode(code) {
            this.selectedCountry = this.countries[this.countryCodes.indexOf(code)];
        },
        selectCodeUsingCountry(country) {
            this.countryCode = this.countryCodes[this.countries.indexOf(country)];
        },
        registerUser() {
            if (this.newPassword !== this.confirmNewPassword) {
                this.error("Passwords dont match!!");
            }
            else{
              this.$router.push("/verifynumbermodal")
            }
        },
        accountRecoveryTab() {
            this.$store.state.passwordRecoveryDialog = true;
        },
        getCountryList() {
            var countries = countriesApi.findByRegion("Africa");
            countries.data.forEach(country => {
                this.countries.push(country.name.common);
                this.countryCodes.push("+" + country.callingCode[0]);
            });
        },
        changeTab(whichTab) {
            // console.log('clicked on tab: ', whichTab)
            switch (whichTab) {
                case 1:
                    document.getElementById("login").parentNode.classList.add("active");
                    document.getElementById("signup").classList.remove("active");
                    document.getElementById("signup").style.display = "none";
                    document.getElementById("login").style.display = "block";
                    document.getElementById("login").classList.toggle("fade");
                    break;
                case 2:
                    document.getElementById("signup").parentNode.classList.add("active");
                    document.getElementById("login").classList.remove("active");
                    document.getElementById("login").style.display = "none";
                    document.getElementById("signup").style.display = "block";
                    document.getElementById("signup").classList.toggle("fade");
                    break;
            }
        },
        error(message) {
            swal.fire({
                icon: "error",
                title: "Try Again",
                text: message
            });
        }
    }
};
</script>

<style scoped>
.v-application a {
    color: white;
}

.remove_margin {
    margin: auto;
}

/* CSS link color */
body {
    overflow-y: scroll;
}

.flex_custom {
    height: 30%;
    padding-bottom: 30px;
    padding-top: 10px;
}

.tab_item_container {
    opacity: 1;
    transition: opacity 5s;
}

#tab_item_container.fade {
    opacity: 0;
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

html {
    overflow-y: scroll;
}

body {
    background: #c1bdba;
    font-family: "Titillium Web", sans-serif;
}

a {
    text-decoration: none;
    color: #1ab188;
    transition: 0.5s ease;
}

a:hover {
    color: #179b77;
}

.form {
    background-image: linear-gradient(45deg, skyblue, green);
    padding: 40px;
    max-width: 600px;
    margin: 40px auto;
    border-radius: 4px;
    box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);
}

.tab-group {
    list-style: none;
    padding: 0;
    margin: 0 0 10px 0;
}

.tab-group:after {
    content: "";
    display: table;
    clear: both;
}

.tab-group li a {
    display: block;
    text-decoration: none;
    padding: 15px;
    background: rgba(160, 179, 176, 0.25);
    color: #a0b3b0;
    font-size: 20px;
    float: left;
    width: 50%;
    text-align: center;
    cursor: pointer;
    transition: 5s ease;
}

.tab-group li a:hover {
    background: #179b77;
    color: #ffffff;
}

.tab-group .active a {
    background: #1ab188;
    color: #ffffff;
}

.tab-content>div:last-child {
    display: none;
}

h1 {
    text-align: center;
    color: #ffffff;
    font-weight: 300;
    margin: 0 0 40px;
}

label {
    position: absolute;
    -webkit-transform: translateY(6px);
    transform: translateY(6px);
    left: 13px;
    color: rgba(255, 255, 255, 0.5);
    transition: all 0.25s ease;
    -webkit-backface-visibility: hidden;
    pointer-events: none;
    font-size: 22px;
}

label .req {
    margin: 2px;
    color: #1ab188;
}

label.active {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    left: 2px;
    font-size: 14px;
}

label.active .req {
    opacity: 0;
}

label.highlight {
    color: #ffffff;
}

input,
textarea {
    font-size: 22px;
    display: block;
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    background: none;
    background-image: none;
    border: 1px solid #a0b3b0;
    color: #ffffff;
    border-radius: 0;
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

input:focus,
textarea:focus {
    outline: 0;
    border-color: #1ab188;
}

textarea {
    border: 2px solid #a0b3b0;
    resize: vertical;
}

.field-wrap {
    position: relative;
    margin-bottom: 40px;
}

.top-row:after {
    content: "";
    display: table;
    clear: both;
}

.top-row>div {
    float: left;
    width: 48%;
    margin-right: 4%;
}

.top-row>div:last-child {
    margin: 0;
}

.button {
    border: 0;
    outline: none;
    border-radius: 0;
    padding: 15px 0;
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    background: #1ab188;
    color: #ffffff;
    transition: all 0.5s ease;
    -webkit-appearance: none;
}

.button:hover,
.button:focus {
    background: #179b77;
}

.button-block {
    display: block;
    width: 100%;
}

.forgot {
    margin-top: -20px;
    text-align: right;
}
</style>
