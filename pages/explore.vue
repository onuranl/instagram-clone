<template>
    <div >
        <app-navbar />
        <div class="w-full h-screen flex justify-center">
            <div class="w-2/3">
                <div class="w-full flex flex-wrap items-center">
                    <div class="w-72 ml-8 mt-8" v-for="postimage in postData" :key="postimage">
                        <img :src="`${postimage.imageURL}`" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppNavbar from "../components/appNavbar.vue";

import { mapState } from "vuex";


export default {
    components : {AppNavbar},
    computed : {
        ...mapState([
            'postData'
        ])
    },
}
</script>
