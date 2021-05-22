<template>
    <div>
        <app-navbar/>
        <main class="w-full flex justify-center">
            <section class="w-8/12 flex justify-center m-2">
                <!--left side-->
                <div class="w-4/5 mt-6">
                    <app-story-section />
                    <app-post-section :filteredPosts="filteredPosts" />
                </div>
                <!--right side-->
                <div class="h-5/6 w-2/5 mt-6 ml-2  ">
                    <app-user-switch />
                    <app-suggestion-section />
                    <app-footer />
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import { mapState } from "vuex";


export default {
    computed: {
        ...mapState([
            'currentUser',
            'userData',
            'postData'
        ]),
        filteredUserInfo() {
            var result
            result = this.userData.filter(data => {
                return data.username.toLowerCase().includes(this.currentUser.username.toLowerCase())
            })
            return result.reverse()
        },
        filteredPosts() {
            var result = []
            for (let i = 0; i < this.postData.length; i++) {
                for (let j = 0; j < this.filteredUserInfo[0].following.length; j++) {
                    if (this.postData[i].username == this.filteredUserInfo[0].following[j]) {
                        result.push(this.postData[i])
                    }
                }
            }
            return result.sort(() => Math.random() - 0.5)
        },
    },
}
</script>

