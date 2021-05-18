<template>
    <div class="w-96 h-96 rounded-md mt-8 border border-black bg-white absolute">
        <div class="w-full h-full rounded-md">
            <div class="w-full h-10 border-b border-gray-500 flex justify-center items-center relative ">
                <p class="font-semibold">Followers</p>
                <div class="absolute top-2 right-2 ...">
                    <button
                    @click="checkFollowers">
                        <svg aria-label="Close" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
            <div class="w-full h-10 border-b border-black flex justify-center items-center">
                <p class="text-blue-700">PEOPLE</p>
            </div>
            <div class="w-full h-72 overflow-auto">
                <div>
                    <div class="h-12 flex items-center"
                    v-for="users in filteredUserInfo[0].followers"
                    :key="users.name">
                        <div class="w-20 flex justify-center ">
                            <button class="" type="button" id="user-menu" aria-expanded="false" aria-haspopup="true">
                                <span class="sr-only">Open user page</span>
                                <!--user-avatar-->
                                <img alt="in profil resmi" class="w-10 h-10" crossorigin="anonymous" data-testid="user-avatar" draggable="false" src="https://cdn130.picsart.com/318381621277201.jpg">
                            </button>
                        </div>
                        <div class="w-32">
                            <!--username-->
                            <button>
                                <p> {{users}} </p>
                            </button>
                        </div>
                        <div class="w-2/5 flex justify-end ">
                            <button class="w-24 border border-gray-500">
                                <p class="text-black"> Visit </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props : {
            filteredUserInfo : {}
        },
        methods : {
            checkFollowers() {
                this.$store.commit('updateCheckFollowers', false)
            }
        }
    }
</script>
