<template>
  <form class="mb-8" @submit.prevent="$emit('addTodo')">
    <input
      type="text"
      class="w-full px-2 py-4 border border-gray-200 rounded"
      placeholder="I need to..."
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
    <!-- <button>Add</button> -->
    <small class="text-gray-500">Hit Enter to add your todo</small>
  </form>
</template>

<script>
// @ is an alias to /src

export default {
  name: "TodoInput",
  props: ["value"]
};
</script>
