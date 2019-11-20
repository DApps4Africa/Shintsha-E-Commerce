<template>
    <v-container class="pa-2" fluid>
        <v-card id="profileCard">
            <v-toolbar color="#0d9436" dark>
                <v-toolbar-title>My Profile</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-row>
                <v-col cols="12" class="fit-screen">
                    <v-row align="center" justify="center">
                        <template>
                            <v-row justify="center">
                                <v-col cols="12">
                                    <v-row align="center">
                                        <v-overlay color="#0d9436" :absolute="absolute" :opacity="1"
                                            :value="!registered" :z-index="1">
                                            <template class="fit_screen">
                                                <v-card>
                                                    <v-tabs v-model="tab" background-color="deep-purple accent-4"
                                                        centered dark icons-and-text>
                                                        <v-tabs-slider></v-tabs-slider>

                                                        <v-tab href="#tab-1">
                                                            Recents
                                                            <v-icon>mdi-phone</v-icon>
                                                        </v-tab>

                                                        <v-tab href="#tab-2">
                                                            Favorites
                                                            <v-icon>mdi-heart</v-icon>
                                                        </v-tab>

                                                        <v-tab href="#tab-3">
                                                            Nearby
                                                            <v-icon>mdi-account-box</v-icon>
                                                        </v-tab>
                                                    </v-tabs>

                                                    <v-tabs-items v-model="tab">
                                                        <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
                                                            <v-card flat>
                                                                <v-card-text>test</v-card-text>
                                                            </v-card>
                                                        </v-tab-item>
                                                    </v-tabs-items>
                                                </v-card>
                                            </template>
                                        </v-overlay>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </template>
                    </v-row>
                </v-col>
            </v-row>
            <v-col class="fit_screen">
            </v-col>
        </v-card>
    </v-container>
</template>

<script>
    export default {
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
            ]
        }),
        beforeMount() {},
        methods: {
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
        },
    }
</script>
<style scoped>
    .fit_screen {
        height: 100%;
        width: 100%;
    }
</style>