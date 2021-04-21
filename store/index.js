export const state = () => ({
    userData: [],
    currentUser : [
        {
            _id : "",
            username : "",
            password : ""
        }
    ],
    isLogin : false,
});

export const mutations = {
    updateUserData: (state, data) => {
        state.userData = data
    },
    updateCurrentUser: (state, data) => {
        state.currentUser = data
    },
    updateIsLogin: (state, data) => {
        state.isLogin = data
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
    getCurrentUser({
        state,
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
    }
};

export default {
    state,
    mutations,
    actions,
  };