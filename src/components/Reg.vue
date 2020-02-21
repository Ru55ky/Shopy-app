<template>
    <v-container
            class="fill-height"
            fluid
    >
        <v-row
                align="center"
                justify="center"
        >
            <v-col
                    cols="12"
                    sm="8"
                    md="5"
            >
                <v-card class="elevation-12">
                    <v-toolbar
                            color="primary"
                            dark
                            flat
                    >
                        <v-toolbar-title>Login form</v-toolbar-title>
                        <v-spacer />

                    </v-toolbar>
                    <v-card-text>
                        <v-form v-model="valid" ref="form">
                            <v-text-field
                                    label="Email"
                                    name="email"
                                    prepend-icon="mdi-email"
                                    type="email"
                                    v-model="email"
                                    :rules="emailRules"
                                    requared
                            />

                            <v-text-field
                                    id="password"
                                    label="Password"
                                    name="password"
                                    prepend-icon="mdi-lock"
                                    type="password"
                                    v-model="password"
                                    :counter="8"
                                    :rules="passwordRules"
                            />
                            <v-text-field
                            label="confirmPassword"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            v-model="confirmPassword"
                            :rules="confirmPasswordRules"
                            :counter="8"
                            >

                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn color="primary" class="mr-4" :disabled="!valid" @click="onSubmit">Login</v-btn>

                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data(){
            return{
                valid: false,
                email: '',
                password: '',
                confirmPassword: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => v.length >= 8 || 'Password must be equal or more then 8 characters',
                ],
                confirmPasswordRules: [
                    v => !!v || 'Password is required',
                    v => v === this.password || 'Password should match'
                ]
            }
        },
        methods: {
            onSubmit() {
                if(this.$refs.form.validate()){
                    const user = {
                        email: this.email,
                        password: this.password
                    }
                    console.log(user)
                }
            }
        }
    }



</script>

<style scoped>

</style>