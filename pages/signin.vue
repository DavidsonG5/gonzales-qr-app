<template>
    <div class="d-flex justify-center align-center" style="height: 100vh;">
        <vcard max-width="600" class="mx-auto">
            <v-card-text>
                <v-form class="mx-6">
                    <p>Login</p>
                    <v-text-field label="Email Address" outline prepend-inner-icon=""></v-text-field>
                    <v-text-field label="Password" type="password" outline prepend-inner-icon=""></v-text-field>
                    <v-btn color="primary" block>Signin</v-btn>

                </v-form>
            </v-card-text>
        </vcard>
    </div>
</template>

<script>
export default {
    layout: "auth",
}
</script>