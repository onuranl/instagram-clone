<template>
    <div >
        <app-navbar />
        <main class="w-full flex justify-center">
            <section class="w-8/12 flex justify-center m-2">
                <!--left side-->
                <div class="w-4/5 mt-6">
                    <!--story section-->
                    <div class="h-24 p-2 border border-gray-500">
                        <div class="h-full p-1 flex justify-start">
                            <!--user-->
                            <div class="bg-white h-full w-20 flex justify-center ">
                                <button class="mb-3" type="button" id="user-menu" aria-expanded="false" aria-haspopup="true">
                                    <span class="sr-only">Open user story</span>
                                    <!--user-avatar-->
                                    <img alt="in profil resmi" class="w-12 h-12" crossorigin="anonymous" data-testid="user-avatar" draggable="false" src="https://instagram.fkgf2-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fkgf2-1.fna.fbcdn.net&amp;_nc_ohc=4Nn_SAq9gJsAX_mW4yx&amp;edm=AP9-OL4AAAAA&amp;ccb=7-4&amp;oh=67f2385a8c0f0a73db7078652fa6c792&amp;oe=6098DA8F&amp;_nc_sid=737f18&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4">
                                    <!--username-->
                                    <p class="text-xs mt-2"> {{currentUser.username}} </p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!--post section-->
                    <app-post-section :filteredPosts="filteredPosts" />
                </div>
                <!--right side-->
                <div class="h-5/6 w-2/5 mt-6 ml-2  ">
                    <!--user-select section-->
                    <div class="h-20">
                        <div class="h-3/4 mt-2 flex items-center">
                            <!--current-user-avatar-->
                            <div class="h-full w-20 flex justify-center ">
                                <button class="" type="button" id="user-menu" aria-expanded="false" aria-haspopup="true">
                                    <span class="sr-only">Open user page</span>
                                    <!--user-avatar-->
                                    <img alt="in profil resmi" class="w-12 h-12" crossorigin="anonymous" data-testid="user-avatar" draggable="false" src="https://instagram.fkgf2-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fkgf2-1.fna.fbcdn.net&amp;_nc_ohc=4Nn_SAq9gJsAX_mW4yx&amp;edm=AP9-OL4AAAAA&amp;ccb=7-4&amp;oh=67f2385a8c0f0a73db7078652fa6c792&amp;oe=6098DA8F&amp;_nc_sid=737f18&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4">
                                </button>
                            </div>
                            <!--current-username-->
                            <div class="w-20">
                                <!--username-->
                                <button>
                                    <p> {{currentUser.username}} </p>
                                </button>
                            </div>
                            <!--switch-user-->
                            <div class="w-3/5 flex justify-end ">
                                <button>
                                    <p class="mr-2 text-blue-500	"> Switch </p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!--suggestion section-->
                    <div class="mt-5 mb-5">
                        <!--upper side-->
                        <div class="h-8 flex items-center">
                            <div class="w-1/2">
                                <p class="font-semibold text-sm text-gray-500 m-2"> Suggestions For You</p>
                            </div>
                            <div class="w-1/2 flex justify-end">
                                <button>
                                    <p class="mr-2 text-gray-900">See All</p>
                                </button>
                            </div>
                        </div>
                        <!--users-->
                        <div class="">
                            <div class="h-12 flex items-center">
                                <div class="w-20 flex justify-center ">
                                    <button class="" type="button" id="user-menu" aria-expanded="false" aria-haspopup="true">
                                        <span class="sr-only">Open user page</span>
                                        <!--user-avatar-->
                                        <img alt="in profil resmi" class="w-10 h-10" crossorigin="anonymous" data-testid="user-avatar" draggable="false" src="https://instagram.fkgf2-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fkgf2-1.fna.fbcdn.net&amp;_nc_ohc=4Nn_SAq9gJsAX_mW4yx&amp;edm=AP9-OL4AAAAA&amp;ccb=7-4&amp;oh=67f2385a8c0f0a73db7078652fa6c792&amp;oe=6098DA8F&amp;_nc_sid=737f18&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4">
                                    </button>
                                </div>
                                <div class="w-32">
                                    <!--username-->
                                    <button>
                                        <p> onur123 </p>
                                    </button>
                                    <p class="text-xs">Recommended for you</p>
                                </div>
                                <div class="w-2/5 flex justify-end ">
                                    <button>
                                        <p class="mr-2 text-blue-500"> Follow </p>
                                    </button>
                                </div>
                            </div>
                            <div class="h-12 flex items-center">
                                <div class="h-full w-20 flex justify-center ">
                                    <button class="" type="button" id="user-menu" aria-expanded="false" aria-haspopup="true">
                                        <span class="sr-only">Open user page</span>
                                        <!--user-avatar-->
                                        <img alt="in profil resmi" class="w-10 h-10" crossorigin="anonymous" data-testid="user-avatar" draggable="false" src="https://instagram.fkgf2-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fkgf2-1.fna.fbcdn.net&amp;_nc_ohc=4Nn_SAq9gJsAX_mW4yx&amp;edm=AP9-OL4AAAAA&amp;ccb=7-4&amp;oh=67f2385a8c0f0a73db7078652fa6c792&amp;oe=6098DA8F&amp;_nc_sid=737f18&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4">
                                    </button>
                                </div>
                                <div class=" w-32 h-full ">
                                    <!--username-->
                                    <button>
                                        <p> onur123 </p>
                                    </button>
                                    <p class="text-xs">Recommended for you</p>
                                </div>
                                <div class="w-2/5 flex justify-end ">
                                    <button>
                                        <p class="mr-2 text-blue-500"> Follow </p>
                                    </button>
                                </div>
                            </div>
                            <div class="h-12 flex items-center">
                                <div class="h-full w-20 flex justify-center ">
                                    <button class="" type="button" id="user-menu" aria-expanded="false" aria-haspopup="true">
                                        <span class="sr-only">Open user page</span>
                                        <!--user-avatar-->
                                        <img alt="in profil resmi" class="w-10 h-10" crossorigin="anonymous" data-testid="user-avatar" draggable="false" src="https://instagram.fkgf2-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fkgf2-1.fna.fbcdn.net&amp;_nc_ohc=4Nn_SAq9gJsAX_mW4yx&amp;edm=AP9-OL4AAAAA&amp;ccb=7-4&amp;oh=67f2385a8c0f0a73db7078652fa6c792&amp;oe=6098DA8F&amp;_nc_sid=737f18&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4">
                                    </button>
                                </div>
                                <div class=" w-32 h-full ">
                                    <!--username-->
                                    <button>
                                        <p> onur123 </p>
                                    </button>
                                    <p class="text-xs">Recommended for you</p>
                                </div>
                                <div class="w-2/5 flex justify-end ">
                                    <button>
                                        <p class="mr-2 text-blue-500"> Follow </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--footer section-->
                    <div class="h-20 ml-3">
                        <div class="h-8">
                            <p class="leading-4 text-sm text-gray-500">© 2021 Instagram from Facebook</p>
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
import AppPostSection from './appPostSection.vue';


export default {
    components : {AppNavbar, AppPostSection},
    computed: {
        ...mapState([
            'currentUser',
            'userData',
            'postData'
        ]),
        filteredUsers() {
            var users
            for(let i = 0; i < this.userData.length; i++) {
                if (this.userData[i].username == this.currentUser.username) {
                    users = this.userData[i].following
                }
            }
            return users
        },
        filteredPosts() {
            var result = []
            for (let i = 0; i < this.postData.length; i++) {
                for (let j = 0; j < this.filteredUsers.length; j++) {
                    if (this.postData[i].username == this.filteredUsers[j]) {
                        result.push(this.postData[i])
                    }
                }
            }
            return result
        }
    },
}
</script>

