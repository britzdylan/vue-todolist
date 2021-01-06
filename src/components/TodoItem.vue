<template>
  <div
    id="todo-item"
    class="flex flex-row justify-between items-center text-xl px-2 py-4 shadow-md rounded my-4 border border-gray-200 bg-gray-100 text-gray-800"
    v-bind:class="{ 'bg-green-500': todo.completed }"
  >
    <button @click="$emit('toggleCompleted', index)" type="submit">
      <font-awesome-icon
        :icon="['fas', 'check-circle']"
        class=" hover:text-green-500"
        v-bind:class="{
          'text-white': todo.completed,
          'text-gray-500': !todo.completed
        }"
      />
    </button>
    <p
      class=""
      v-bind:class="{
        'line-through': todo.completed,
        'text-white': todo.completed,
        'text-gray-500': !todo.completed
      }"
    >
      {{ todo.item }}
    </p>
    <button @click="$emit('deleteItem', index)" type="submit">
      <font-awesome-icon
        :icon="['fas', 'trash']"
        class="hover:text-red-500  "
        v-bind:class="{
          'text-white': todo.completed,
          'text-gray-500': !todo.completed
        }"
      />
    </button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
};
</script>
