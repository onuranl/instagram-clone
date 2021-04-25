export const state = () => ({
    userData: [],
    postData : [],
    currentUser : [
        {
            _id : "",
            username : "",
            password : ""
        }
    ],
    // currentUserPosts : [],
    isLogin : false,
    isPosting : false
});

export const mutations = {
    updateUserData: (state, data) => {
        state.userData = data
    },
    updatePostData: (state, data) => {
        state.postData = data
    },
    updateCurrentUser: (state, data) => {
        state.currentUser = data
    },
    // updateCurrentUserPosts: (state, data) => {
    //     state.currentUserPosts = data
    // },
    updateIsLogin: (state, data) => {
        state.isLogin = data
    },
    updateIsPosting: (state, data) => {
        state.isPosting = data
    }
};

export const actions = {
    async getUserData({
      state,
      commit
    }) {
      if (state.userData.length) return;

      try {
        await fetch('http://localhost:1234/register')
            .then(res => res.json())
            .then(data => {
                commit("updateUserData", data)
            });
      } catch (err) {
        console.log(err);
      }
    },
    async getPostData({
        state,
        commit
    }) {
        if (state.postData.length) return;

        try {
            await fetch('http://localhost:1234/posts')
                .then(res => res.json())
                .then(data => {
                    commit("updatePostData", data)
                });
        } catch (err) {
            console.log(err);
        }
    },
    getCurrentUser({
        commit
    }) {

        var currentUser = [
            {
                _id : "",
                username: "",
                password : ""
            }
        ]

        if(window.localStorage.getItem("_id") !== null) {
            currentUser[0]._id = window.localStorage.getItem("_id")
            currentUser[0].username = window.localStorage.getItem("username")
            currentUser[0].password = window.localStorage.getItem("password")

            commit("updateCurrentUser",currentUser[0])

            if(currentUser[0]._id) {
                commit("updateIsLogin", true)
            }
        }
    },
    // getCurrentUserPosts({
    //     state,
    //     commit
    // }) {
    //     var currentUserPosts = []

    //     for (let i = 0; i < state.postData.length; i++) {
    //         if (state.postData[i].username == state.currentUser.username) {
    //             currentUserPosts.push(state.postData[i])
    //         }
    //     }

    //     commit("updateCurrentUserPosts", currentUserPosts)
    // }
};

export default {
    state,
    mutations,
    actions,
  };