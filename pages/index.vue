<template>
    <div>
        <app-home-page v-if="isLogin"/>
        <app-login-page v-if="!isLogin" />
  </div>
</template>

<script>
import AppNavbar from "../components/appNavbar.vue";
import AppAddPost from "../components/appAddPost.vue"

import { mapState } from "vuex";
import AppHomePage from '~/components/appHomePage.vue';
import AppLoginPage from '~/components/appLoginPage.vue';

export default {
    components : {AppHomePage, AppLoginPage},
    computed: {
        ...mapState([
            'isLogin'
        ]),
    },
}
</script>
