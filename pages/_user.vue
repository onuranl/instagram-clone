<template>
    <div>
        <app-navbar :filteredUserInfo="filteredUserInfo" />
        <app-user-page />
    </div>
</template>

<script>
import AppNavbar from "../components/appNavbar.vue";
import AppUserPage from '~/components/appUserPage.vue';

import { mapState } from "vuex";

export default {
    components : {AppNavbar, AppUserPage},
    name: "user",
    computed: {
        ...mapState([
            'currentUser',
            'userData'
        ]),
        filteredUserInfo() {
            return this.userData.filter(data => {
                return data.username.toLowerCase().includes(this.currentUser.username.toLowerCase())
            })
        },
    }
}
</script>