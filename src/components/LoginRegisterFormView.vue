<template>
<v-flex class="flex_custom">
    <v-responsive :aspect-ratio="20/9">
        <!-- partial:index.partial.html -->
        <v-col class="form">
            <v-flex class="tab-content">
                <v-col id="signup">

                    <v-form action="/" method="post">
                        <v-col>
                            <h1 class="remove_margin">Sign Up</h1>
                        </v-col>
                        <v-text-field label="Cell-Phone Number" v-model="cellNumber" :rules="cellPhoneNumberRules"></v-text-field>
                        <v-select :items="countries" label="Country" v-model="country"></v-select>
                        <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show3 ? 'text' : 'password'" name="input-10-2" label="Set a Password" hint="At least 8 characters" class="input-group--focused" v-model="password" @click:append="show1 = !show1"></v-text-field>
                        <v-text-field :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show4 ? 'text' : 'password'" name="input-10-2" label="Enter Password Again" hint="Password must match previous password" v-model="password1" class="input-group--focused" @click:append="show1 = !show1"></v-text-field>
                        <v-col class="text-center">
                            <v-btn :ripple="{ center: true }">Get Started</v-btn>
                        </v-col>
                        <v-col class="text-center">
                            <a @click="changeTab(1)">Already have an account</a>
                        </v-col>
                    </v-form>
                </v-col>

                <v-flex id="login" class="tab_item_container pad_container">
                    <h1 class="remove_margin">Welcome Back!</h1>
                    <h1 class="remove_margin">Login</h1>
                    <v-form action="/" method="post">
                        <v-text-field label="Cell-Phone Number" :rules="cellPhoneNumberRules" hint="Cell Phone Number excluding country code"></v-text-field>
                        <v-text-field :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show5 ? 'text' : 'password'" name="input-10-2" label="Enter Password" hint="Password set when you registered" v-model="password3" class="input-group--focused" @click:append="show3 = !show3"></v-text-field>
                        <v-col class="text-center">
                            <v-btn :ripple="{ center: true }">Login</v-btn>
                        </v-col>
                        <v-col class="text-center">
                            <a color="white" @click="changeTab(2)">Create a new account</a>
                        </v-col>
                        <v-col class="text-center">
                            <a color="white" @click="accountRecoveryTab()">Recover account</a>
                        </v-col>
                    </v-form>
                </v-flex>
            </v-flex><!-- tab-content -->
        </v-col> <!-- /form -->
        <!-- partial -->
        <recoveryview v-if="showRecoveryOverlay"></recoveryview>
    </v-responsive>
</v-flex>
</template>

<script>
import countryList from 'country-list'
import recoveryview from './PasswordRecoveryView'
export default {
    components: {
        recoveryview
    },
    data: () => ({
        countries: [],
        cellPhoneNumberRules: [
            v => !!v || 'CellPhone number is required',
            v => (v && v.length <= 10) || 'CellPhone number must be less than 10 characters and must exlcude the country code',
        ],
        rules: {
            required: value => !!value || 'Required.'
        },
        isRegistered: false,
        tab: null,
        tab_login: null,
        checkbox: false,
        valid: true,
        name: '',
        email: '',
        select: null,
        show_login: false,
        show_signup: true,
        show1: false,
        show2: false,
        show3: false,
        showRecoveryOverlay: false,
        country: '',
        cellNumber: ''
    }),
    beforeMount() {
        this.getCountryList()
    },
    methods: {
        accountRecoveryTab() {
            this.showRecoveryOverlay = true
        },
        getCountryList() {

            countryList.getNames().map((country) => {
                this.countries.push(country)
            })
        },
        changeTab(whichTab) {
            console.log('clicked on tab: ', whichTab)
            switch (whichTab) {
                case 1:
                    document.getElementById('login').parentNode.classList.add('active')
                    document.getElementById('signup').classList.remove('active')
                    document.getElementById('signup').style.display = 'none';
                    document.getElementById('login').style.display = 'block';
                    document.getElementById('login').classList.toggle('fade');
                    break;
                case 2:
                    document.getElementById('signup').parentNode.classList.add('active')
                    document.getElementById('login').classList.remove('active')
                    document.getElementById('login').style.display = 'none';
                    document.getElementById('signup').style.display = 'block';
                    document.getElementById('signup').classList.toggle('fade');
                    break;
            }
        }

    }
}
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
    font-family: 'Titillium Web', sans-serif;
}

a {
    text-decoration: none;
    color: #1ab188;
    transition: .5s ease;
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
    transition: border-color .25s ease, box-shadow .25s ease;
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
    letter-spacing: .1em;
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
