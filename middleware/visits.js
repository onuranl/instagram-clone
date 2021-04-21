export default function({ store }) {
    store.dispatch("getUserData");
    store.dispatch("getCurrentUser")
  }