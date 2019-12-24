<template>
<v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
            <v-card-title class="headline">Account Recovery</v-card-title>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="cellNumber" :counter="10" :rules="cellPhoneNumberRules" label="CellPhone number" required></v-text-field>
                <v-select :items="countries" label="Country" v-model="country"></v-select>
                <v-text-field v-if="valid" v-model="recoveryCode" :counter="10" :rules="cellPhoneNumberRules" label="Recovery Code" required></v-text-field>
            </v-form>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :disabled="!valid" v-if="!showRecoveryInput" color="success" class="mr-4" @click="validate">
                    Recover
                </v-btn>
                <v-btn v-if="showRecoveryInput" :disabled="!validCode" color="success" class="mr-4" @click="validate">
                    Verify
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-row>
</template>

<script>
import countryList from 'country-list'
export default {
    data() {
        return {
            dialog: false,
            valid: true,
            validCode: true,
            country: '',
            countries: [],
            recoveryCode: '',
            cellNumber: '',
            showRecoveryInput: false,
            cellPhoneNumberRules: [
                v => !!v || 'CellPhone number is required',
                v => (v && v.length <= 10) || 'CellPhone number must be less than 10 characters and must exlcude the country code',
            ]
        }
    },
    beforeMount() {
        this.getCountryList()
    },
    methods: {
        getCountryList() {

            countryList.getNames().map((country) => {
                this.countries.push(country)
            })
        },
        validateRecoveryDetails() {
            if (this.$refs.form.validate()) {
                this.snackbar = true
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
