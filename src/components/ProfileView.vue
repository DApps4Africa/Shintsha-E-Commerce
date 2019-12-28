<template>
<v-container>
    <v-row no-gutters>
        <v-col cols="12" sm="6" md="8">
            <v-card id="profileCard">
                <v-toolbar color="#0d9436" dark>
                    <v-toolbar-title>My Profile</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-row>
                    <v-col>
                        <v-card>
                            <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
                                <v-tab v-for="tab in options" :key="tab.title">
                                    {{ tab.title }}
                                </v-tab>
                            </v-tabs>
                            <v-tabs-items v-model="tab">
                                <v-tab-item value="tab-1">
                                    <v-card flat>
                                        <v-card-text>test</v-card-text>
                                    </v-card>
                                </v-tab-item>
                                <v-tab-item value="tab-1">
                                    <v-card flat>
                                        <v-card-text>test</v-card-text>
                                    </v-card>
                                </v-tab-item>
                            </v-tabs-items>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" sm="12" md="6">
                        <v-row align="center">
                            <v-overlay class="ovr_lay" color="transparent" :absolute="false" :opacity="1" :value="!this.$store.state.registered" :z-index="1" light>
                                <vloginform></vloginform>
                            </v-overlay>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import vloginform from './LoginRegisterFormView'
export default {
    components: {
        vloginform
    },
    data: () => ({
        options: [{
                title: "Register as Farmer"
            },
            {
                title: "Register as Consumer"
            },
            {
                title: "Register as Delivery Services"
            }
        ],
        isRegistered: false,
        tab: null,
    }),
    beforeMount() {
        this.isRegistered = this.$store.state.registered;
        //console.log(this.isRegistered)
    },
    methods: {},
}
</script>

<style scoped>
.fit_screen {
    height: 100%;
    width: 100%;
}

html {
    overflow-y: scroll;
}

body {
    position: absolute;
}

.v-overlay__content {
    height: 65%;
}

.transparent_custom {
    color: rgba(255, 255, 255, 0.041);
}

.ovr_lay {
    background-image: linear-gradient(45deg, skyblue, green);
    background-color: transparent;
}

.v-overlay__scrim {
    background-image: linear-gradient(45deg, skyblue, green);
}

.v-overlay__content {
    height: 60%;
}
</style>
