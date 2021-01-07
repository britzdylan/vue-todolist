<template>
  <div>
    <form class="mt-8 space-y-6" @submit.prevent v-if="!showSuccess">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="text-2xl font-bold mb-8"
            >Please enter your email address</label
          >
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            required
            class="appearance-none mt-8 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            v-model="email"
          />
        </div>
      </div>

      <div>
        <button
          @click="resetPassword()"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Reset Password
        </button>
      </div>
    </form>
    <p v-else>Success! Check your email for a reset link.</p>
    <p v-if="errorMsg !== ''" class="text-red-500">{{ errorMsg }}</p>
    <p
      @click="$emit('forgotPasswordToggle')"
      class="text-sm text-green-500 text-center mt-8 cursor-pointer font-medium"
    >
      Back
    </p>
  </div>
</template>

<script>
import { auth } from "@/firebase";

export default {
  name: "ForgotPassword",
  data() {
    return {
      email: "",
      showSuccess: false,
      errorMsg: ""
    };
  },
  methods: {
    async resetPassword() {
      // reset logic
      this.errorMsg = "";

      try {
        await auth.sendPasswordResetEmail(this.email);
        this.showSuccess = true;
      } catch (err) {
        this.errorMsg = err.message;
      }
    }
  }
};
</script>
