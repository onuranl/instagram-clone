<template>
    <div class="h-20">
        <div class="h-3/4 mt-2 flex items-center">
            <!--current-user-avatar-->
            <div class="h-full w-20 flex justify-center items-center" >
                <nuxt-link :to="`${currentUser.username}`">
                    <button type="button" id="user-menu" aria-expanded="false" aria-haspopup="true">
                        <span class="sr-only">Open user page</span>
                        <!--user-avatar-->
                        <img alt="in profil resmi" class="w-12 h-12 rounded-full" crossorigin="anonymous" data-testid="user-avatar" draggable="false"
                        :src="`${currentUser.imageURL}`">
                    </button>
                </nuxt-link>
            </div>
            <!--current-username-->
            <div class="w-20">
                <!--username-->
                <nuxt-link :to="`${currentUser.username}`">
                    <button>
                        <p> {{currentUser.username}} </p>
                    </button>
                </nuxt-link>
            </div>
            <!--switch-user-->
            <div class="w-3/5 flex justify-end ">
                <button>
                    <p class="text-blue-500	"> Switch </p>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed : {
        ...mapState([
            'currentUser'
        ])
    },
}
</script>
