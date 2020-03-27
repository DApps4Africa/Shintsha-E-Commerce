<template>
  <v-flex class="flex_custom">
    <v-responsive>
      <v-col class="form">
        <v-flex class="tab-content">
          <v-col id="registerproduct">
            <v-form
              action="/"
              method="post"
            >
              <v-col>
                <h1 class="remove_margin">
                  Register Product
                </h1>
              </v-col>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="name"
                    :counter="50"
                    :rules="nameRules"
                    label="Name"
                    required
                  />

                  <v-select
                    v-model="select"
                    :items="category"
                    :rules="[v => !!v || 'Category is required']"
                    label="Category"
                    required
                  />

                  <v-text-field
                    type="number"
                    v-model="quantity"
                    :rules="quantityRules"
                    label="Quantity"
                    required
                  />

                  <v-text-field
                    type="number"
                    v-model="price"
                    :rules="priceRules"
                    label="Price"
                    required
                  />
                  <v-col class="text-center">
                    <v-btn
                      :ripple="{ center: true }"
                      @click="registerProduct"
                    >
                      Add Product
                    </v-btn>
                  </v-col>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-flex>
      </v-col>
    </v-responsive>
  </v-flex>
</template>

<script>
import swal from 'sweetalert2'
import countriesApi from "countries-api";

export default {
    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 50) || 'Name must be less than 10 characters',
        ],
        category: [
            'Category 1',
            'Category 2',
            'Category 3',
            'Category 4',
        ],
        quantity: '',
        quantityRules: [
            v => !!v || 'Quantity is required',
        ],
        price: 0,
        priceRules: [
            v => !!v || 'Price is required',
        ],
    }),

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
        error(message) {
            swal.fire({
                icon: 'warn',
                title: 'Under Development',
                text: message,
                confirmButtonColor: 'green',
            })
        },
        validate() {
            if (this.$refs.form.validate()) {
                this.snackbar = true
            }
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
        getCountryList() {
            var countries = countriesApi.findByRegion("Africa");
            countries.data.forEach(country => {
                this.countries.push(country.name.common);
                this.countryCodes.push("+" + country.callingCode[0]);
            });
        },
        selectCountryUsingCode(code) {
            this.selectedCountry = this.countries[this.countryCodes.indexOf(code)];
        },
        selectCodeUsingCountry(country) {
            this.countryCode = this.countryCodes[this.countries.indexOf(country)];
        },
    },
}
</script>

<style scoped>
.v-application a {
    color: white;
}

.remove_margin {
    margin: auto;
}

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

.form {
    background-image: linear-gradient(45deg, skyblue, green);
    padding: 40px;
    max-width: 600px;
    margin: 40px auto;
    border-radius: 4px;
    box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);
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

h1 {
    text-align: center;
    color: #ffffff;
    font-weight: 300;
    margin: 0 0 40px;
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
</style>