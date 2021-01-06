<template>
  <div id="home" class="container mx-auto">
    <TodoInput @addTodo="addTodo" />
    <div v-if="todoList.length >= 1">
      <TodoItem  v-for="item in todoList" :key="item.id" :todo="item" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoItem from '../components/TodoItem'
import TodoInput from '../components/TodoInput'

export default {
  name: "Home",
  components : {
    TodoItem,
    TodoInput
  },
  data() {
    return {
      todoList : [
        { id : 0, item : 'clean the kitchen'},
        { id : 1, item : 'Make the bed'},
        { id : 2, item : 'Feed the cats'},
        { id : 3, item : 'Iron the clothes'}
      ]
    }
  },
  // mounted() {
  //   if (localStorage.getItem('todos')) {
  //     this.todoList = JSON.parse(localStorage.getItem('todos'))
  //   } else {
  //     this.todoList = []
  //   }
  // },
  methods : {
    addTodo() {
      this.preventDefault
      this.todoList.push({ id : this.todoList.length + 1, item : 'todo item'})
    }
  },
  watch : {
    updateTodoList(oldList, newList) {
      if (oldList.length < newList.length) {
        localStorage.setItem('todos', newList)
      }
    }
  }
};
</script>
