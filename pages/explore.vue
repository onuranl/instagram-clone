<template>
    <div >
        <app-navbar :filteredUserInfo="filteredUserInfo" />
        <div class="w-full flex justify-center">
            <div class="grid grid-cols-3 gap-8 mt-8">
                <div
                v-for="postimage in postData"
                :key="postimage.id">
                    <img class="w-80 h-80"
                    :src="`${postimage.imageURL}`">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed : {
        ...mapState([
            'postData',
            'userData',
            'currentUser'
        ]),
        filteredUserInfo() {
            return this.userData.filter(data => {
                return data.username.toLowerCase().includes(this.currentUser.username.toLowerCase())
            })
        },
    },
}
</script>
