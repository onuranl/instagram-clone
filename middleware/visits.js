export default function({ store }) {
    store.dispatch("getUserData");
    store.dispatch("getPostData");
    store.dispatch("getCurrentUser");
    // store.dispatch("getCurrentUserPosts");
  }