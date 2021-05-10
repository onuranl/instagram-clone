<template>
    <div>
        <main class="w-full flex justify-center">
            <section class="w-8/12">
                <!--user-->
                <div class="w-full mt-3 flex p-5 border-b-2 border-fuchsia-600">
                    <app-user-avatar :filteredUserInfo="filteredUserInfo" :username="username" />
                    <app-user-info :filteredUserInfo="filteredUserInfo" :username="username" />
                </div>
                <!--posts-->
                <div>
                    <!--posts icon-->
                    <div class="h-12 flex justify-center ">
                        <a href="" class="flex justify-center items-center space-x-2 w-20 h-12 border-t-2 border-black ">
                            <svg aria-label="Posts" class="_8-yf5 " fill="#262626" height="12" viewBox="0 0 48 48" width="12"><path clip-rule="evenodd" d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z" fill-rule="evenodd"></path></svg>
                            <p>POSTS</p>
                        </a>
                    </div>
                    <!--posts section-->
                    <!-- <app-none-post-image-cart v-if="!hasPosts" /> -->
                    <app-post-image-cart :filteredUserPost="filteredUserPost" />
                </div>
            </section>
            <app-add-post v-if="isPosting" :currentUser="currentUser" />
            <app-change-image v-if="isChangingImage" :currentUser="currentUser" />
        </main>
    </div>
</template>

<script>
import AppPostImageCart from '~/components/appPostImageCart.vue';
import AppNonePostImageCart from '~/components/appNonePostImageCart.vue';
import AppAddPost from '~/components/appAddPost.vue';
import AppChangeImage from './appChangeImage.vue';
import AppUserAvatar from './appUserAvatar.vue';
import AppUserInfo from './appUserInfo.vue';

import { mapState} from "vuex";


export default {
    components : {AppPostImageCart, AppAddPost, AppNonePostImageCart, AppChangeImage, AppUserAvatar, AppUserInfo},
    data() {
        return {
            hasPosts : Boolean,
            username : "",
        }
    },
    created() {
        this.username = this.$route.params.user

        // this.postData.forEach(element => {
        //     if (element.username == this.currentUser.username) {
        //         this.hasPosts = true
        //     } else {
        //         this.hasPosts = false
        //     }
        // });
    },
    computed: {
        ...mapState([
            'userData',
            'postData',
            'currentUser',
            'isPosting',
            'isChangingImage',
        ]),
        filteredUserPost() {
            return this.postData.filter(data => {
                return data.username.toLowerCase().includes(this.username.toLowerCase())
            })
        },
        filteredUserInfo() {
            return this.userData.filter(data => {
                return data.username.toLowerCase().includes(this.username.toLowerCase())
            })
        }
    },

}
</script>