<template>
    <div class="w-3/5 flex justify-center rounded-full">
        <button :disabled="isDisable" @click="changingImage"  type="button" id="user-menu" aria-expanded="false" aria-haspopup="true" v-for="userInfo in filteredUserInfo " :key="userInfo.id" >
            <span class="sr-only">Open user menu</span>
            <img alt="in profil resmi" class="h-40 rounded-full" crossorigin="anonymous" data-testid="user-avatar" draggable="false" :src="`${userInfo.imageURL}`">
        </button>
    </div>
</template>

<script>
import { mapState} from "vuex";

export default {
    data() {
        return {}
    },
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
            this.$store.commit('uptadeIsChangingImage', true)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>