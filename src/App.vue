<template>
  <div id="app" class="mx-auto">
    <div
      id="nav"
      class="w-full py-4 border-b text-xl mb-8 flex flex-row items-center"
    >
      <img alt="Vue logo" src="./assets/logo.png" width="50px" class="" />
      <router-link
        class="mx-2 text-gray-700 hover:text-green-700 ml-auto"
        to="/"
        >Home</router-link
      >
      |
      <router-link
        class="mx-2 text-gray-700 hover:text-green-700 mr-auto"
        to="/about"
        >About</router-link
      >
      <p
        @click="logout()"
        v-if="$store.state.isLoggedIn"
        class="text-sm text-green-500 font-medium cursor-pointer"
      >
        Logout
      </p>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style scoped>
#app {
  max-width: 650px;
}
</style>
