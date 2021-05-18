<template>
    <div>
        <main class="w-full h-screen flex justify-center">
            <div class="h-full w-4/5 flex justify-center items-center">
                <div class="h-5/6 w-full flex">
                    <div class="w-1/2 flex justify-end">
                        <img src="../assets/Screenshot_1.png" alt="" class="h-full">
                    </div>
                    <div class="bg-white w-1/2 p-2 ">
                        <!--loginform-->
                        <div class="w-3/5 h-96 border border-indigo-600 mb-2 ">
                            <div class="w-full h-20 flex items-start justify-center">
                                <div class="w-2/3 flex justify-center">
                                    <img class="h-20 w-64" src="../assets/Screenshot_2.png" alt="">
                                </div>
                            </div>
                            <div class="w-full">
                                <div class="h-6 w-full flex justify-center">
                                    <div >Arkadaşlarının fotoğraf ve </div>
                                </div>
                                <div class="w-full flex justify-center h-6">
                                    <div>videolarını görmek için kaydol.</div>
                                </div>
                            </div>
                            <!--formsection-->

                            <form class="w-full h-36 flex justify-center mt-3" @submit.prevent="register">
                                <fieldset class="w-9/12 p-2 space-y-2">

                                    <div class="bg-white w-full h-8 border-b-2 border-fuchsia-600 ">
                                        <input class="m-1 w-full" type="text" placeholder="Kullanıcı adı"
                                        v-model="logininfo.username">
                                    </div>
                                    <div class="bg-white w-full h-8 border-b-2 border-fuchsia-600">
                                        <input class="m-1 w-full" type="password" placeholder="Şifre"
                                        v-model="logininfo.password">
                                    </div>

                                    <div class="bg-white w-full h-8 rounded-lg bg-blue-500 border-b-2 border-fuchsia-600">
                                        <button  class="w-full h-full" type="submit"> <p class="text-white">Kaydol</p> </button>
                                    </div>
                                </fieldset>
                            </form>
                            <div class="bg-red-100 text-red-700 px-4 py-3 relative flex justify-center" role="alert"
                            v-if="isTaken">
                                <strong class="font-bold">Alınmış kullanıcı adı !</strong>
                            </div>
                            <div class="bg-green-100 text-green-700 px-4 py-3 relative flex justify-center" role="alert"
                            v-if="isRegisted">
                                <strong class="font-bold">Kayıt başarılı !</strong>
                            </div>
                        </div>
                        <!--other-->
                        <div class="w-3/5 h-16 border border-indigo-600 flex justify-center items-center">
                            <div> <p>Hesabın var mı ?</p> </div>
                            <a href="/"> <p class="text-blue-600 ml-2"> Giriş Yap </p>  </a>
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
import { mapState } from "vuex"

const API_URL = 'http://localhost:1234/register'

export default {
  data() {
    return {
      isTaken : false,
      isRegisted : false,
      logininfo : {
        username : "",
        password : "",
      }
    }
  },
  computed: {
        ...mapState([
            'userData'
        ]),
    },
  methods : {
    register() {
        for (var i = 0 ; i < this.userData.length ; i++) {
            if (this.userData[i].username === this.logininfo.username) {
                this.isTaken = true
                break;
            } else {
                this.isTaken = false
            }
        }

        if (this.isTaken === false) {
            fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify(this.logininfo),
                headers: {
                  'content-type': 'application/json'
                }
            }).then(res => res.json())
                .then(() => {
                    this.isRegisted = true;
                })
        }
    }
  },
}
</script>