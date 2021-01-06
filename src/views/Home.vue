<template>
  <div id="home" class="container mx-auto">
    <TodoInput @addTodo="addTodo" v-model="todo" />
    <div v-if="todoList.length >= 1">
      <TodoItem
        @deleteItem="deleteItem"
        @toggleCompleted="toggleCompleted"
        v-for="(item, index) in todoList"
        :key="index"
        :todo="item"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoItem from "@/components/TodoItem";
import TodoInput from "@/components/TodoInput";

export default {
  name: "Home",
  components: {
    TodoItem,
    TodoInput
  },
  data() {
    return {
      todoList: JSON.parse(localStorage.getItem("TODO_LIST")) || [],
      todo: ""
    };
  },
  methods: {
    addTodo() {
      this.todoList.push({
        id: this.todoList.length + 1,
        item: this.todo,
        completed: false
      });
      localStorage.setItem("TODO_LIST", JSON.stringify(this.todoList));
      this.todo = "";
    },
    deleteItem(index) {
      this.todoList.splice(index, 1);
      localStorage.setItem("TODO_LIST", JSON.stringify(this.todoList));
    },
    toggleCompleted(index) {
      this.todoList[index].completed = !this.todoList[index].completed;
    }
  }
};
</script>
