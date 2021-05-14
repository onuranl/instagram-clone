<template>
    <div class="mt-5 mb-5">
        <!--upper side-->
        <div class="h-8  flex items-center">
            <div class="w-1/2">
                <p class="font-semibold text-sm text-gray-500 m-2"> Suggestions For You</p>
            </div>
            <div class="w-1/2 flex justify-end">
                <button>
                    <p class="text-gray-900">See All</p>
                </button>
            </div>
        </div>
        <!--users-->
        <div class="h-12 flex items-center justify-between" v-for="users in getUserData" :key="users.name">
            <div class="flex w-2/3">
                <div class="w-20 flex justify-center ">
                    <button class="" type="button" id="user-menu" aria-expanded="false" aria-haspopup="true">
                        <span class="sr-only">Open user page</span>
                        <!--user-avatar-->
                        <img alt="in profil resmi" class="w-10 h-10 rounded-full" crossorigin="anonymous" data-testid="user-avatar" draggable="false" :src="`${users.imageURL}`">
                    </button>
                </div>
                <div class="w-32">
                    <!--username-->
                    <button>
                        <p> {{users.username}} </p>
                    </button>
                    <p class="text-xs">Recommended for you</p>
                </div>
            </div>
            <div class="w-1/3 flex justify-end">
                <nuxt-link :to="`/${users.username}`">
                    <button>
                        <p class="text-blue-500"> Visit </p>
                    </button>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed : {
        ...mapState([
        'userData',
        'currentUser'
        ]),
        getUserData() {
            return this.userData.slice(0,5)
        },
        filteredUserData() {
            for (let i = 0; i < this.getUserData.length; i++) {
                if (this.getUserData[i].username == this.currentUser.username) {
                    return this.getUserData.splice(i, 1)
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>