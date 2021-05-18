<template>
    <div class="w-full h-screen flex justify-center" >
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
                                    <input class="m-1 w-full" type="text" placeholder="Kullanıcı adı"
                                    v-model="username">
                                </div>
                                <div class="bg-white w-full h-8 border-b-2 border-fuchsia-600">
                                    <input class="m-1 w-full" type="password" placeholder="Şifre"
                                    v-model="password">
                                </div>
                                <div class="bg-white w-full h-8 rounded-lg bg-blue-500 border-b-2 border-fuchsia-600">
                                    <button class="w-full h-full" type="submit"> <p class="text-white">Giriş Yap</p> </button>
                                </div>
                            </fieldset>
                        </form>
                        <div class="bg-red-100 text-red-700 px-4 py-3 relative flex justify-center" role="alert"
                        v-if="alert">
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
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
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

