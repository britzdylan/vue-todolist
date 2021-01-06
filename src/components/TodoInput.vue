<template>
    <form class="mb-8">
        <input type="text" class="w-full px-2 py-4 border border-gray-200 rounded" placeholder="I need to..." />
        <button @click="$emit('addTodo')">Add</button>
        <small class="text-gray-500">Hit Enter to add your todo</small>
    </form>
</template>

<script>
// @ is an alias to /src

export default {
  name: "TodoItem", 
  emits: ['addTodo'] 
};

</script>
