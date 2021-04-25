<template>
    <div>
        <!--home-->
        <div v-if="isLogin">
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
                        <div class="mt-5 border border-gray-500 mb-12">
                            <!--post-header-->
                            <div class="h-16 w-full p-3 flex  content-center">
                                <div class="w-1/3 flex justify-start">
                                    <button type="button" id="user-menu" aria-expanded="false" aria-haspopup="true">
                                        <span class="sr-only">Open user page</span>
                                        <img alt="in profil resmi" class="w-8 h-8" crossorigin="anonymous" data-testid="user-avatar" draggable="false" src="https://instagram.fkgf2-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fkgf2-1.fna.fbcdn.net&amp;_nc_ohc=4Nn_SAq9gJsAX_mW4yx&amp;edm=AP9-OL4AAAAA&amp;ccb=7-4&amp;oh=67f2385a8c0f0a73db7078652fa6c792&amp;oe=6098DA8F&amp;_nc_sid=737f18&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4">
                                    </button>
                                    <button class="ml-5">
                                        <span class="sr-only">Open user page</span>
                                        <p>onur123</p>
                                    </button>
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
                                    <img class="w-full h-full" src="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
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
                                        <p class="text-sm ml-3"> if you need a lippy I’m ur gal </p>
                                    </div>
                                </section>
                                <section class="h-6">
                                    <button class="ml-4">
                                        <p class="text-sm text-gray-500	">15 yorumun tümünü gör</p>
                                    </button>
                                </section>
                                <section class="h-6">
                                    <button class="ml-4">
                                        <p class="text-xs text-gray-500">7 SAAT ÖNCE</p>
                                    </button>
                                </section> <hr />
                                <section class="h-10 p-2">
                                    <div class="flex justify-between">
                                        <input class="ml-2 w-full" type="text" placeholder="Yorum ekle...">
                                        <button class="" type="submit"> <p class="text-blue-500"> Paylaş </p> </button>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div class="mt-5 border border-gray-500 mb-12">
                            <!--post-header-->
                            <div class="h-16 w-full p-3 flex  content-center">
                                <div class="w-1/3 flex justify-start">
                                    <button type="button" id="user-menu" aria-expanded="false" aria-haspopup="true">
                                        <span class="sr-only">Open user page</span>
                                        <img alt="in profil resmi" class="w-8 h-8" crossorigin="anonymous" data-testid="user-avatar" draggable="false" src="https://instagram.fkgf2-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fkgf2-1.fna.fbcdn.net&amp;_nc_ohc=4Nn_SAq9gJsAX_mW4yx&amp;edm=AP9-OL4AAAAA&amp;ccb=7-4&amp;oh=67f2385a8c0f0a73db7078652fa6c792&amp;oe=6098DA8F&amp;_nc_sid=737f18&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4">
                                    </button>
                                    <button class="ml-5">
                                        <span class="sr-only">Open user page</span>
                                        <p>onur123</p>
                                    </button>
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
                                    <img class="w-full h-full" src="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                                </div>
                            </div>
                            <!--comment-etc-section-->
                            <div class="h-44">
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
                                        <p class="text-sm ml-3"> if you need a lippy I’m ur gal </p>
                                    </div>
                                </section>
                                <section class="h-6">
                                    <button class="ml-4">
                                        <p class="text-sm text-gray-500	">15 yorumun tümünü gör</p>
                                    </button>
                                </section>
                                <section class="h-6">
                                    <button class="ml-4">
                                        <p class="text-xs text-gray-500">7 SAAT ÖNCE</p>
                                    </button>
                                </section> <hr />
                                <section class="h-10 p-2">
                                    <div class="flex justify-between">
                                        <input class="ml-2 w-full" type="text" placeholder="Yorum ekle...">
                                        <button class="" type="submit"> <p class="text-blue-500"> Paylaş </p> </button>
                                    </div>
                                </section>
                            </div>
                        </div>
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
        <!--login-->
        <main class="w-full h-screen flex justify-center" v-if="!isLogin">
            <div class="h-full w-4/5 flex justify-center items-center">
                <div class="h-5/6 w-full flex ">
                    <div class="w-1/2 flex justify-end">
                        <img src="../assets/Screenshot_1.png" alt="" class="h-full">
                    </div>
                    <div class="bg-white w-1/2 p-2 ">
                        <!--loginform-->
                        <div class="w-3/5 h-96 border border-indigo-600 mb-2 ">
                            <div class="w-full h-24 flex items-center justify-center">
                                <div class="w-2/3 flex justify-center">
                                    <img class="h-20 w-64" src="../assets/Screenshot_2.png" alt="">
                                </div>
                            </div>
                            <!--formsection-->
                            <form class="w-full h-36 flex justify-center mt-4 border-b-2 border-fuchsia-600" @submit.prevent="logIn">
                                <fieldset class="w-9/12 p-2 space-y-2" >
                                    <div class="bg-white w-full h-8 border-b-2 border-fuchsia-600 ">
                                        <input v-model="username" class="m-1 w-full" type="text" placeholder="Kullanıcı adı">
                                    </div>
                                    <div class="bg-white w-full h-8 border-b-2 border-fuchsia-600">
                                        <input v-model="password" class="m-1 w-full" type="password" placeholder="Şifre">
                                    </div>
                                    <div class="bg-white w-full h-8 rounded-lg bg-blue-500 border-b-2 border-fuchsia-600">
                                        <button class="w-full h-full" type="submit"> <p class="text-white">Giriş Yap</p> </button>
                                    </div>
                                </fieldset>
                            </form>
                            <div class="bg-red-100 text-red-700 px-4 py-3 relative flex justify-center" v-if="alert" role="alert">
                                <strong class="font-bold">Hatalı kullanıcı adı veya şifre !</strong>
                            </div>
                        </div>
                        <!--other-->
                        <div class="w-3/5 h-16 border border-indigo-600 flex justify-center items-center">
                            <div> <p>Hesabın yok mu ?</p> </div>
                            <nuxt-link to="/register"> <p class="text-blue-600 ml-2"> Kaydol </p>  </nuxt-link>
                        </div>
                        <div class="w-3/5 mt-4">
                            <div class="w-full flex justify-center">
                                <p>Uygulamayı indir</p>
                            </div>
                            <div class="w-full h-12 mt-4">
                                <div class="w-full flex justify-evenly">
                                    <a class="w-5/12" href=""> <img class="h-12" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_turkish-tr.png/30b29fd697b2.png" alt=""> </a>
                                    <a class="w-5/12" href=""> <img class="h-12" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_turkish-tr.png/9d46177cf153.png" alt=""> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
  </div>
</template>

<script>
import AppNavbar from "../components/appNavbar.vue";
import AppAddPost from "../components/appAddPost.vue"

import { mapState } from "vuex";

export default {
    components : {AppNavbar, AppAddPost},
    data() {
        return {
            username : "",
            password : "",
            alert : false,
        }
    },
    computed: {
        ...mapState([
            'userData',
            'currentUser',
            'isLogin'
        ]),
    },
    methods: {
        logIn() {
            for(let i = 0; i < this.userData.length; i++) {
                if (this.userData[i].username == this.username && this.userData[i].password == this.password) {
                    this.$store.commit("updateCurrentUser", this.userData[i])
                    this.$store.commit("updateIsLogin", true)
                    break;
                } else {
                    this.$store.commit("updateIsLogin", false)
                }
            }
            if(this.isLogin) {
                window.localStorage.setItem("_id", this.currentUser._id)
                window.localStorage.setItem("username", this.currentUser.username)
                window.localStorage.setItem("password", this.currentUser.password)
            }
            if(!this.isLogin) {
                this.alert = true
            }
        },
    },
}
</script>
