<template>
    <div class="w-3/5 flex justify-center rounded-full">
        <button type="button" id="user-menu" aria-expanded="false" aria-haspopup="true"
        :disabled="isDisable"
        @click="changingImage"   >
            <span class="sr-only">Open user menu</span>
            <img :alt="`${filteredUserInfo.username}'in profil resmi`" class="h-40 rounded-full" crossorigin="anonymous" data-testid="user-avatar" draggable="false"
            :src="`${filteredUserInfo.imageURL}`">
        </button>
    </div>
</template>

<script>
import { mapState} from "vuex";

export default {
    props : {
        filteredUserInfo : {},
        username : ""
    },
    computed : {
        ...mapState([
            'isChangingImage',
            'currentUser'
        ]),
        isDisable() {
            if (this.$route.params.user == this.currentUser.username) {
                return false
            } else {
                return true
            }
        }
    },
    methods : {
        changingImage() {
            this.$store.commit('updateIsChangingImage', true)
        }
    }
}
</script>