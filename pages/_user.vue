<template>
    <div>
      <app-navbar />
    <main class="w-full flex justify-center">
        <section class="w-8/12">
            <!--user-->
            <div class="w-full mt-3 flex p-5 border-b-2 border-fuchsia-600">
                <!--user-avatar-->
                <div class="w-3/5 flex justify-center">
                    <button class="" type="button" id="user-menu" aria-expanded="false" aria-haspopup="true">
                        <span class="sr-only">Open user menu</span>
                        <img alt="in profil resmi" class="h-40" crossorigin="anonymous" data-testid="user-avatar" draggable="false" src="https://instagram.fkgf2-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fkgf2-1.fna.fbcdn.net&amp;_nc_ohc=4Nn_SAq9gJsAX_mW4yx&amp;edm=AP9-OL4AAAAA&amp;ccb=7-4&amp;oh=67f2385a8c0f0a73db7078652fa6c792&amp;oe=6098DA8F&amp;_nc_sid=737f18&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4">
                    </button>
                </div>
                <!--user-info-->
                <div class="w-full mx-auto ">
                    <!--upper side-->
                    <div class="h-12 w-full flex items-center space-x-6 space-y-2">
                        <!--username-->
                        <div class="">
                            <p class="text-2xl text-gray-500">onur123</p>
                        </div>
                        <!--editprofile-->
                        <div class="border border-black rounded-md p-1 w-24 flex justify-center">
                            <button>
                                Edit Profile
                            </button>
                        </div>
                        <!--settings-->
                        <div class="">
                            <button class="">
                                <svg aria-label="Seçenekler" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z" fill-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </div>
                    <!--bottom side-->
                    <div class="w-full h-12 mt-2 ">
                        <!--postscount-->
                        <div class="flex space-x-6">
                            <p>0 post</p>
                            <a href="">2 followers</a>
                            <a href="">200 following</a>
                        </div>
                    </div>
                </div>
            </div>
            <!--posts-->
            <div class="">
                <!--posts icon-->
                <div class="h-12 flex justify-center ">
                    <a href="" class="flex justify-center items-center space-x-2 w-20 h-12 border-t-2 border-black ">
                        <svg aria-label="Posts" class="_8-yf5 " fill="#262626" height="12" viewBox="0 0 48 48" width="12"><path clip-rule="evenodd" d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z" fill-rule="evenodd"></path></svg>
                        <p>POSTS</p>
                    </a>
                </div>
                <!--posts section-->
                <div class="w-full flex items-center">
                    <div class="w-96">
                        <img src="https://www.instagram.com/static/images/mediaUpsell.jpg/6efc710a1d5a.jpg" alt="">
                    </div>
                    <div class="w-8/12 flex justify-center ">
                        <h2>Start capturing and sharing your moments.
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </div>
</template>

<script>
import AppNavbar from "../components/appNavbar.vue";
import { mapState } from "vuex";


export default {
    components : {AppNavbar},
    computed: {
        ...mapState([
            'userData'
        ]),
    },
    created() {
        this.$store.dispatch("getUserData")
    }
}
</script>