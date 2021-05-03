<template>
    <div>
        <app-navbar />
        <app-user-page />
    </div>
</template>

<script>
import AppNavbar from "../components/appNavbar.vue";
import AppUserPage from '~/components/appUserPage.vue';


export default {
    components : {AppNavbar, AppUserPage},
}
</script>