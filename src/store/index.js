import { createStore } from "vuex";

const store = createStore({
  state: {
    // define global variables
    admin: {},
    image: "cccAssets/assets/images/news/news-1.jpg",
    resume_image: "cccAssets/assets/images/avatar2.png",
    perkyrabbit_image: "cccAssets/assets/images/perkyrabbit.png",


    alt: "Image",
 
    cccMap: "cccAssets/assets/images/map.png",
    backendUrl: "http://localhost:8000/api/",
    // backendUrl: "http://server.fscd.xyz/",
    // backendUrl: "https://server.abulhossain.xyz/api/",

  },

  getters: {
    // get state variables value
    getAdmin: function (state) {
      return state.admin;
    },
  },

  actions: {
    //action to be performed
    setAdmin(context, payload) {
      context.commit("updateAdmin", payload);
    },

    removeAdmin(context) {
      context.commit("updateAdmin", null);
    },
  },

  mutations: {
    // update state variables value
    updateAdmin(state, admin) {
      state.admin = admin;
    },
  },
});

export default store;
