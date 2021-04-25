<template>
    <div class="h-64 w-1/2 bg-white border-2 border-black rounded absolute mr-8">
        <form class="w-full" @submit.prevent="addPost">
            <fieldset class="w-full p-2 space-y-2">
                <div class="w-full h-8 border-2 border-blue-500 flex space-x-2 rounded ">
                    <input v-model="postInfo.imageURL"  class=" w-full h-full "  type="text" placeholder="ImageURL" required>
                </div>

                <textarea v-model="postInfo.description"  class="w-full h-32  border-2 border-blue-500 space-x-2 rounded "  type="text" placeholder="Description" required> asd </textarea>
            </fieldset>
            <div class="w-full h-8 flex justify-center space-x-4">
                <button class="w-32 h-full border-b-2 border-fuchsia-600 rounded-lg bg-blue-500 " type="submit"> <p class="text-white">Post</p> </button>
                <button @click="close" class="w-32 h-full border-b-2 border-fuchsia-600 rounded-lg bg-gray-500 " > <p class="text-white">Close</p> </button>
            </div>
            <div class="text-green-700 flex justify-center" v-if="hasPosted" role="alert">
                <strong class="font-bold"> Başarılı !</strong>
            </div>
            <div class="text-red-700 flex justify-center" v-if="notPosted" role="alert">
                <strong class="font-bold"> Bir şeyler ters gitti !</strong>
            </div>
        </form>
    </div>
</template>

<script>
const API_URL = 'http://localhost:1234/posts'

import { mapState } from "vuex";


export default {
    data () {
        return {
            postInfo : {
                username : this.currentUser.username,
                imageURL : "",
                description : ""
            },
            hasPosted : false,
            notPosted : false
        }
    },
    computed : {
        ...mapState([
            'isPosting'
        ])
    },
    props : {
        currentUser : {

        },
    },
    methods : {
        addPost() {
            fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify(this.postInfo),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(() => {
                this.hasPosted = true
            })
            .catch((error) => {
                console.error('Error:', error);
            })
        },
        close() {
            this.$store.commit('updateIsPosting', false)
        }
    }
}
</script>

