<template>
  <v-flex
    class="flex_custom"
  >
    <v-col class="form">
      <h1 class="remove_margin">
        Add Product
      </h1>
      <v-form
        action="/"
        method="post"
      >
        <v-row>
          <v-col cols="4">
            <v-text-field
              :items="productName"
              label="Product Name"
              v-model="countryCode"
            />
          </v-col>
          <v-col cols="8">
            <v-select
              :items="category"
              label="Category"
              v-model="category"
            />
          </v-col>
        </v-row>
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
        <v-col class="text-center">
          <v-btn :ripple="{ center: true }">
            Add to my listing
          </v-btn>
        </v-col>
      </v-form>
    </v-col>
  </v-flex>
</template>

<script>
export default {
    data: () => ({
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
            v =>
            (v && !isNaN(v) && v.length <= 10) ||
            "CellPhone number must be less than 10 characters and must exlcude the country code"
        ],
        countryCodeRules: [
            v => !!v || "Country Code Required",
            v => (v && v.length > 0) || "Country Code cannot be empty"
        ]
    })
}
</script>

<style scoped>
.flex_custom {
    background-image: linear-gradient(45deg, skyblue, green);
    height: 30%;
    padding-bottom: 30px;
    padding-top: 10px;
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
</style>