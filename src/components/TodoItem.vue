<template>
    <div id="todo-item" class="flex flex-row justify-between items-center text-xl px-2 py-4 shadow-md rounded my-4 border border-gray-200 bg-gray-100 text-gray-800">
      <button type="submit"><font-awesome-icon :icon="['fas', 'check-circle']" class="text-gray-500 hover:text-green-500" /></button>
      <p>{{ todo.item }}</p>
      <button type="submit"><font-awesome-icon :icon="['fas', 'trash']" class="hover:text-red-500 text-gray-500 " /></button>
    </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "TodoItem",
  props : {
    todo : {
      type : String,
      required : true
    }
  }
};

</script>
