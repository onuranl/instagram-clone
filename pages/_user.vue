<template>
    <div>
        <app-navbar />
        <app-user-page />
    </div>
</template>

<script>
import AppNavbar from "../components/appNavbar.vue";
import AppPostImageCart from '~/components/appPostImageCart.vue';
import AppAddPost from '~/components/appAddPost.vue';
import AppUserPage from '~/components/appUserPage.vue';


export default {
    components : {AppNavbar, AppPostImageCart, AppAddPost, AppUserPage},
}
</script>