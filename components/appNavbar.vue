<template>
    <div>
        <nav class="bg-white ">
            <div class="w-full h-14 flex justify-evenly items-center">
                <!--logo-->
                <div class="mt-3">
                    <router-link to="/" >
                        <button>
                            <img class="" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram">
                        </button>
                    </router-link>
                </div>
                <!--search bar-->
                <div class="text-gray-600 ml-24">
                    <input @click="search" v-model="searchInput" class="border-2 border-gray-500 rounded-md pl-2 " type="search" placeholder="Search">
                    <button >
                        <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                            viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                            width="512px" height="512px">
                            <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                    </button>
                </div>
                <!--tools-->
                <div class="flex align-center justify-between w-48">
                    <div>
                        <nuxt-link to="/">
                            <button>
                                <svg aria-label="Ana Sayfa" class="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22">
                                    <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path>
                                </svg>
                            </button>
                        </nuxt-link>
                    </div>
                    <div>
                        <button>
                            <svg aria-label="Direct" class="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22">
                                <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"> </path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <nuxt-link to="/explore">
                            <button>
                                <svg aria-label="Kişiler Bul" class="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22">
                                    <path clip-rule="evenodd" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z" fill-rule="evenodd"> </path>
                                </svg>
                            </button>
                        </nuxt-link>
                    </div>
                    <div>
                        <button>
                            <svg aria-label="Hareket Akışı" class="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22">
                                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="ml-3 relative">
                        <div v-for="userinfo in filteredUserInfo" :key="userinfo.id">
                            <button @click="click" type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                <span class="sr-only">Open user menu</span>
                                <img :alt="`${currentUser.username}'in profil resmi`" class="w-6 h-6 rounded-full" crossorigin="anonymous" data-testid="user-avatar" draggable="false" :src="`${userinfo.imageURL}`">
                            </button>
                        </div>
                        <div v-if="button" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                            <nuxt-link :to="`/${currentUser.username}`"> <a  class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a> </nuxt-link>
                            <nuxt-link to="/" > <button @click="logOut" > <a  class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Sign out</a> </button> </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <!--searchingresults-->
            <div v-if="isSearching" class="w-full absolute flex justify-center right-2">
                <div class="w-96 h-96 bg-white">
                    <div class="h-5 w-full flex justify-between p-2">
                        <div>
                            <p>Arama Sonuçları</p>
                        </div>
                        <button @click="search">
                            <div class="w-5 justify-self-end">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.995 511.995" style="enable-background:new 0 0 511.995 511.995;" xml:space="preserve">
                                    <g>
                                        <g>
                                            <path d="M437.126,74.939c-99.826-99.826-262.307-99.826-362.133,0C26.637,123.314,0,187.617,0,256.005    s26.637,132.691,74.993,181.047c49.923,49.923,115.495,74.874,181.066,74.874s131.144-24.951,181.066-74.874    C536.951,337.226,536.951,174.784,437.126,74.939z M409.08,409.006c-84.375,84.375-221.667,84.375-306.042,0    c-40.858-40.858-63.37-95.204-63.37-153.001s22.512-112.143,63.37-153.021c84.375-84.375,221.667-84.355,306.042,0    C493.435,187.359,493.435,324.651,409.08,409.006z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M341.525,310.827l-56.151-56.071l56.151-56.071c7.735-7.735,7.735-20.29,0.02-28.046    c-7.755-7.775-20.31-7.755-28.065-0.02l-56.19,56.111l-56.19-56.111c-7.755-7.735-20.31-7.755-28.065,0.02    c-7.735,7.755-7.735,20.31,0.02,28.046l56.151,56.071l-56.151,56.071c-7.755,7.735-7.755,20.29-0.02,28.046    c3.868,3.887,8.965,5.811,14.043,5.811s10.155-1.944,14.023-5.792l56.19-56.111l56.19,56.111    c3.868,3.868,8.945,5.792,14.023,5.792c5.078,0,10.175-1.944,14.043-5.811C349.28,331.117,349.28,318.562,341.525,310.827z"/>
                                        </g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div class="h-72 mt-4">
                        <div class="h-12 flex items-center" v-for="user in filteredUser" :key="user.name">
                            <div class="w-20 flex justify-center ">
                                <button class="" type="button" id="user-menu" aria-expanded="false" aria-haspopup="true">
                                    <span class="sr-only">Open user page</span>
                                    <!--user-avatar-->
                                    <img :alt="`${user.username}'in profil resmi`" class="w-10 h-10 rounded-full" crossorigin="anonymous" data-testid="user-avatar" draggable="false" :src="`${user.imageURL}`">
                                </button>
                            </div>
                            <div class="w-32">
                                <!--username-->
                                <nuxt-link :to="`/${user.username}`">
                                    <button>
                                        <p> {{user.username}} </p>
                                    </button>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav> <hr />
    </div>
</template>



<script>
import { mapState } from "vuex";

    export default {
        data() {
            return {
                button : false,
                isSearching : false,
                searchInput : '',
            }
        },
        props: {
            filteredUserInfo : {}
        },
        computed: {
            ...mapState([
                'currentUser',
                'isLogin',
                'userData'
            ]),
            filteredUser() {
                return this.userData.filter(data => {
                    return data.username.toLowerCase().includes(this.searchInput.toLowerCase())
                })
            },
        },
        methods : {
            click() {
                this.button = !this.button
            },
            logOut() {
            window.localStorage.removeItem("_id")
            window.localStorage.removeItem("username")
            window.localStorage.removeItem("password")
            this.$store.commit("updateIsLogin", false)
            },
            search() {
                this.isSearching = !this.isSearching
            }
        },
    }
</script>
