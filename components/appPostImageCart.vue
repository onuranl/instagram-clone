<template>
    <div>
        <div class="w-full flex justify-center mb-4"
        v-if="currentUserHasPosts">
            <div class="grid grid-cols-3 gap-8">
                <div
                v-for="postimage in filteredUserPost"
                :key="postimage.id">
                    <img class="w-80 h-80"
                    :src="`${postimage.imageURL}`">
                </div>
            </div>
        </div>

        <div v-if="!currentUserHasPosts">
            <div class="w-full flex items-center"
            v-if="isCurrentUser">
                <div class="w-96">
                    <img src="https://www.instagram.com/static/images/mediaUpsell.jpg/6efc710a1d5a.jpg">
                </div>
                <div class="w-8/12 flex justify-center ">
                    <h2>Start capturing and sharing your moments.
                    </h2>
                </div>
            </div>

            <div class="w-full flex justify-center"
            v-if="!isCurrentUser">
                <div class="space-y-6 mt-8">
                    <div class="flex justify-center">
                        <div class="rounded-full h-16 w-16 flex justify-center items-center border border-black">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex w-full justify-center">
                        <p class="font-light text-2xl">No Posts Yet</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState} from "vuex";

export default {
    props : {
        filteredUserPost : {},
        username : ""
    },
    computed : {
        ...mapState([
            'currentUser'
        ]),
        currentUserHasPosts() {
            if (!this.filteredUserPost.length) {
                return false
            } else {
                return true
            }
        },
        isCurrentUser() {
            if (this.username == this.currentUser.username) {
                return true
            } else {
                return false
            }
        }
    }
}
</script>
