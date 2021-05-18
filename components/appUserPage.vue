<template>
    <div>
        <div class="w-full flex justify-center" v-if="isUser">
            <section class="w-8/12">
                <!--user-->
                <div class="w-full mt-3 flex justify-center p-5 border-b-2 border-fuchsia-600 ">
                    <app-user-avatar :filteredUserInfo="filteredUserInfo" :username="username" />
                    <app-user-info :filteredUserInfo="filteredUserInfo" :username="username" />
                </div>
                <!--posts-->
                <div>
                    <app-posts-icon />
                    <app-post-image-cart :filteredUserPost="filteredUserPost" :username="username" />
                </div>
            </section>
            <app-add-post v-if="isPosting" :currentUser="currentUser" />
            <app-change-image v-if="isChangingImage" :currentUser="currentUser" />
            <app-following-section v-if="checkFolloweds" :filteredUserInfo="filteredUserInfo" />
            <app-followers-section v-if="checkFollowers" :filteredUserInfo="filteredUserInfo" />
        </div>
        <app-none-user v-if="!isUser" />
    </div>
</template>

<script>
import { mapState} from "vuex";

export default {
    data() {
        return {
            hasPosts : Boolean,
            username : "",
        }
    },
    created() {
        this.username = this.$route.params.user
    },
    computed: {
        ...mapState([
            'userData',
            'postData',
            'currentUser',
            'isPosting',
            'isChangingImage',
            'checkFolloweds',
            'checkFollowers'
        ]),
        filteredUserPost() {
            const userPosts = this.postData.filter(data => {
                return data.username.toLowerCase().includes(this.username.toLowerCase())
            })
            return userPosts.reverse()
        },
        filteredUserInfo() {
            return this.userData.filter(data => {
                return data.username.toLowerCase().includes(this.username.toLowerCase())
            })
        },
        isUser() {
            let result;
            for (let i = 0; i < this.userData.length; i++) {
                if (this.userData[i].username == this.username) {
                    result = true
                    break;
                } else {
                    result = false
                }
            }
            return result
        }
    },
}
</script>