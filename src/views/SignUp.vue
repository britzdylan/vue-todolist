<template>
  <div
    class="w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="@/assets/logo.png"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create an account
        </h2>
      </div>
      <Loginform
        @loginDetails="loginDetails"
        @submit="signup"
        :loginForm="loginForm"
      />
      <div class="text-sm text-center">
        <router-link
          class="font-medium text-green-600 hover:text-green-500"
          to="/Login"
          >Login</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Loginform from "@/components/Loginform.vue";

export default {
  name: "Login",
  components: {
    Loginform
  },
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    loginDetails(value, key) {
      this.loginForm[key] = value;
    },
    signup() {
      this.$store.dispatch("signup", {
        email: this.loginForm.email,
        password: this.loginForm.password
      });
    }
  }
};
</script>
