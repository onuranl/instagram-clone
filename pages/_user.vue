<template>
    <div>
        <app-user-page />
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "user",
    // computed: {
    //     ...mapState([
    //         'currentUser',
    //         'userData'
    //     ]),
    //     filteredUserInfo() {
    //         return this.userData.filter(data => {
    //             return data.username.toLowerCase().includes(this.currentUser.username.toLowerCase())
    //         })
    //     },
    // }
}
</script>