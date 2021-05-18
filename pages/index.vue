<template>
    <div>
        <app-home-page v-if="isLogin"/>
        <app-login-page v-if="!isLogin" />
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState([
            'isLogin'
        ]),
    },
}
</script>
