export const state = () => ({
    userData: []
});

export const mutations = {
    updateUserData: (state, data) => {
        state.userData = data
    }
};

export const actions = {
    async getUserData({
        state, commit
    }) {
        try {
            await fetch('http://localhost:1234/register')
            .then(res => res.json())
            .then(data => {
                commit("updateUserData", data)
            })
        } catch (err) {
            console.log(err)
        }
    }
};