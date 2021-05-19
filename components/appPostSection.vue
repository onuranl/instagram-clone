<template>
    <div>
        <div v-if="checkData">
            <div class="mt-5 border border-gray-300 mb-12"
            v-for="posts in filteredPosts"
            :key="posts.name">
                <!--post-header-->
                <div class="h-16 w-full p-3 flex  content-center">
                    <div class="w-1/3 flex justify-start">
                    <nuxt-link :to="`/${posts.username}`">
                        <button type="button" id="user-menu" aria-expanded="false" aria-haspopup="true">
                            <span class="sr-only">Open user page</span>
                            <img alt="in profil resmi" class="w-8 h-8" crossorigin="anonymous" data-testid="user-avatar" draggable="false" src="https://cdn130.picsart.com/318381621277201.jpg">
                        </button>
                    </nuxt-link>
                    <nuxt-link :to="`/${posts.username}`">
                        <button class="ml-5 mt-1">
                            <span class="sr-only">Open user page</span>
                            <p> {{posts.username}} </p>
                        </button>
                    </nuxt-link>
                    </div>
                    <div class="w-4/5 flex justify-end">
                        <button>
                            <svg aria-label="Diğer seçenekler" class="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16">
                                <circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle>
                                <circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle>
                                <circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle>
                            </svg>
                        </button>
                    </div>
                </div> <hr />
                <!--image-->
                <div class="h-2/3 w-full">
                    <div class="w-full h-full">
                        <img class="w-full h-full"
                        :src="`${posts.imageURL}`">
                    </div>
                </div>
                <!--comment-etc-section-->
                <div class="h-full">
                    <section class="h-10 flex">
                        <div class="w-48 flex justify-evenly flex-wrap content-center mt-2   ">
                            <span>
                                <button type="button">
                                    <div>
                                        <span>
                                            <svg aria-label="Beğen" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                                                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </button>
                            </span>
                            <span>
                                <button type="button">
                                    <div >
                                        <span >
                                            <svg aria-label="Yorum Yap" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                                                <path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </button>
                            </span>
                            <span>
                                <button type="button">
                                    <div >
                                        <span >
                                            <svg aria-label="Gönderi Paylaş" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                                                <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </button>
                            </span>
                        </div>
                        <span class="w-full flex justify-end items-center mr-4">
                            <button type="button">
                                <div>
                                    <span>
                                        <svg aria-label="Kaydet" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                                            <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </button>
                        </span>
                    </section>
                    <section class="h-6">
                        <button class="ml-4">
                            <p class="text-sm">1.000 beğenme</p>
                        </button>
                    </section>
                    <section class="h-6">
                        <div class="flex">
                            <button class="ml-4">
                                <p class="text-sm">onur123</p>
                            </button>
                            <p class="text-sm ml-3"> {{posts.description}} </p>
                        </div>
                    </section>
                    <section class="h-6">
                        <button class="ml-4">
                            <p class="text-sm text-gray-500	">15 yorumun tümünü gör</p>
                        </button>
                    </section>
                    <section class="h-6">
                        <button class="ml-4">
                            <p class="text-xs text-gray-500"> {{posts.created}} </p>
                        </button>
                    </section> <hr />
                    <section class="h-10 p-2">
                        <div class="flex justify-between">
                            <input class="ml-2 w-full" type="text" placeholder="Yorum ekle...">
                            <button type="submit"> <p class="text-blue-500"> Paylaş </p> </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div class="mt-5 flex justify-center"
        v-if="!checkData">
            Start making friends and enjoy it
        </div>
    </div>
</template>

<script>
    export default {
        props : {
            filteredPosts : {}
        },
        computed : {
            checkData() {
                if(this.filteredPosts.length) {
                    return true
                } else {
                    return false
                }
            },
        }
    }
</script>