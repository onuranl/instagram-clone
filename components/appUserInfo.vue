<template>
    <div class="w-full mx-auto ">
        <!--upper side-->
        <div class="h-12 w-full flex items-center space-x-6 space-y-2">
            <!--username-->
            <div class="">
                <p class="text-2xl text-gray-500"> {{username}} </p>
            </div>
            <!--editprofile-->
            <div v-if="isEditing" class="w-36 flex justify-between">
                <button @click="addPost">
                    <div class="border border-black rounded-md p-1 w-24 flex justify-center">
                        Add Post
                    </div>
                </button>
                <button>
                    <div class="">
                        <svg aria-label="Seçenekler" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z" fill-rule="evenodd"></path></svg>
                    </div>
                </button>
            </div>
            <!--follow button-->
            <div v-if="!isEditing" >
                <div v-if="!isFollowing">
                    <button @click="addFollower">
                        <div class="border border-gray-500 rounded-md p-1 w-24 flex justify-center  bg-blue-500">
                            <p class="text-white"> Follow </p>
                        </div>
                    </button>
                </div>
                <div v-if="isFollowing" class="flex justify-center space-x-2">
                    <button >
                        <div class="border border-gray-500 rounded-md p-1 w-24 flex justify-center bg-white">
                            <p class="text-black"> Message </p>
                        </div>
                    </button>
                    <button @click="unFollow" >
                        <div class="border border-gray-500 rounded-md p-1 w-8 flex justify-center bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <!--bottom side-->
        <div class="w-full h-12 mt-2" v-for="userInfo in filteredUserInfo" :key="userInfo.id">
            <!--postscount-->
            <div class="flex space-x-6" for="userInfo">
                <p>0 post</p>
                <button @click="checkFollowers" >  {{userInfo.followers.length}} followers </button>
                <button @click="checkFolloweds" > {{userInfo.following.length}} following </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState} from "vuex";


const API_URL = "http://localhost:1234/"

export default {
    data() {
        return {
            isEditing : Boolean,
        }
    },
    created() {
        if(this.$route.params.user == this.currentUser.username) {
            this.isEditing = true
        } else {
            this.isEditing = false
        }
    },
    props : {
        filteredUserInfo : {},
        username : ""
    },
    computed : {
        ...mapState([
            'currentUser',
            'userData'
        ]),
        isFollowing() {
            var result = Boolean
            for(let i = 0; i < this.userData.length; i++) {
                if (this.userData[i].username == this.currentUser.username) {
                    for(let j = 0; j < this.userData[i].following.length; j++) {
                        if (this.userData[i].following[j] == this.username) {
                            result = true
                            break;
                        } else {
                            result = false
                        }
                    }
                }
            }
            return result
        }
    },
    methods : {
        addPost() {
            this.$store.commit('updateIsPosting', true)
        },
        addFollower() {
            fetch((API_URL + "follow"), {
                method: 'POST',
                body: JSON.stringify({
                    currentUser : this.currentUser.username,
                    followedUser : this.$route.params.user
            }),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(res => res.json())
            .then(() => location.reload())
        },
        unFollow() {
            fetch((API_URL + "unfollow"), {
                method: 'POST',
                body: JSON.stringify({
                    currentUser : this.currentUser.username,
                    unfollowedUser : this.$route.params.user
            }),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(res => res.json())
            .then(() => location.reload())
        },
        checkFolloweds() {
            this.$store.commit('updateCheckFolloweds', true)
        },
        checkFollowers() {
            this.$store.commit('updateCheckFollowers', true)
        }
    },
}
</script>

<style lang="scss" scoped>

</style>