<template>
    <div class="w-full flex justify-center">
        <div class="w-full flex flex-wrap items-center">
            <div class="w-72 ml-8 mt-8" v-for="postimage in currentUserPosts" :key="postimage">
                <img class="w-72 h-72" :src="`${postimage.imageURL}`" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";


export default {
    data() {
        return {
            currentUserPosts : []
        }
    },

    computed : {
        ...mapState([
                'postData',
                'currentUser',
            ]),
    },
    created () {
        for (let i = 0; i < this.postData.length; i++) {
            if (this.postData[i].username === this.currentUser.username) {
                this.currentUserPosts.push(this.postData[i])
            }
        }
    },
}
</script>
