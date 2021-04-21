<template>
    <div>
        <button @click="addPost" >add post</button>
    </div>
</template>

<script>
const API_URL = 'http://localhost:1234/posts'


export default {
    data () {
        return {
            postInfo : {
                username : this.currentUser.username,
                imageURL : "https://lastfm.freetls.fastly.net/i/u/770x0/fbb55dcc63f0a4369e29605c4ab5ddc0.jpg",
                description : "hi everyone"
            },
            isPosted : false
        }
    },
    props : {
        currentUser : {

        }
    },
    methods : {
        addPost() {
            fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify(this.postInfo),
                headers: {
                  'content-type': 'application/json'
                }
            }).then(res => res.json())
                .then(() => {
                  this.isPosted = true;
                })
        }
    }
}
</script>

