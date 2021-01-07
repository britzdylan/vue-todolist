import Vue from "vue";
import Vuex from "vuex";
import * as fb from "../firebase";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: {},
    isLoggedIn: false
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
    },
    setIsLoggedIn(state, val) {
      state.isLoggedIn = val;
    }
  },
  actions: {
    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await fb.auth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );

      // create user profile object in userCollections
      await fb.usersCollection.doc(user.uid).set({
        username: form.email
      });

      // fetch user profile and set in state
      dispatch("fetchUserProfile", user);
    },
    async login({ dispatch }, form) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(
        form.email,
        form.password
      );

      // fetch user profile and set in state
      dispatch("fetchUserProfile", user);
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get();

      // set user profile in state
      commit("setUserProfile", userProfile.data());
      commit("setIsLoggedIn", true);
      // change route to dashboard
      // change route to dashboard
      if (router.currentRoute.path === "/login") {
        router.push("/");
      }
    },
    async logout({ commit }) {
      await fb.auth.signOut();

      // clear userProfile and redirect to /login
      commit("setUserProfile", {});
      commit("setIsLoggedIn", false);
      router.push("/login");
    }
  },
  modules: {}
});
