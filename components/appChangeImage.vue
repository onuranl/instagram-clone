<template>
    <div class="h-28 w-1/2 bg-white border-2 border-black rounded absolute mr-8 mt-28 ">
        <form class="w-full" @submit.prevent="changeImage">
            <fieldset class="w-full p-2 space-y-2">
                <div class="w-full h-8 border-2 border-blue-500 flex space-x-2 rounded ">
                    <input v-model="info.imageURL"  class=" w-full h-full "  type="text" placeholder="ImageURL" required>
                </div>
            </fieldset>
            <div class="w-full h-8 flex justify-center space-x-4">
                <button class="w-32 h-full border-b-2 border-fuchsia-600 rounded-lg bg-blue-500 " type="submit"> <p class="text-white">Change image</p> </button>
                <button @click="close" class="w-32 h-full border-b-2 border-fuchsia-600 rounded-lg bg-gray-500 " > <p class="text-white">Close</p> </button>
            </div>
            <div class="text-green-700 flex justify-center" v-if="haschanged" role="alert">
                <strong class="font-bold"> Başarılı !</strong>
            </div>
            <!-- <div class="text-red-700 flex justify-center" v-if="notPosted" role="alert">
                <strong class="font-bold"> Bir şeyler ters gitti !</strong>
            </div> -->
        </form>
    </div>
</template>

<script>
import { mapState } from "vuex";

const API_URL = 'http://localhost:1234/addimage'

export default {
    data() {
        return {
            info : {
                username : this.currentUser.username,
                imageURL : "",
            },
            haschanged : false
        }
    },
    props : {
        currentUser : {

        }
    },
    methods : {
        changeImage() {
            fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify(this.info),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(() => this.haschanged = true)
        },
        close() {
            this.$store.commit('uptadeIsChangingImage', false)
        }
    }
}
</script>