<template>
    <div>
        <app-navbar :filteredUserInfo="filteredUserInfo" />
        <div class="h-72 w-full flex justify-center mt-8">
            <div class="w-2/5">
                <div class="ml-5">
                    <p class="font-medium">Suggested</p>
                </div>

                <!--users-->
                <div class="mt-2">
                    <div class="h-12 flex items-center"
                    v-for="users in userData"
                    :key="users.id">
                        <div class="w-20 flex justify-center">
                            <button type="button" id="user-menu" aria-expanded="false" aria-haspopup="true">
                                <span class="sr-only">Open user page</span>
                                <!--user-avatar-->
                                <img class="w-10 h-10 rounded-full" crossorigin="anonymous" data-testid="user-avatar" draggable="false"
                                :src="`${users.imageURL}`"
                                :alt="`${users.username}'in profil resmi`">
                            </button>
                        </div>
                        <div class="w-32">
                            <!--username-->
                            <button>
                                <p> {{users.username}} </p>
                            </button>
                            <p class="text-xs">Recommended for you</p>
                        </div>
                        <div class="w-2/5 flex justify-end ">
                            <nuxt-link :to="`/${users.username}`">
                                <button>
                                    <p class="text-blue-500"> Visit </p>
                                </button>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState} from "vuex";

export default {
    computed : {
        ...mapState([
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