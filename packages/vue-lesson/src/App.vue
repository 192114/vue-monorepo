<template>
  <div class="container">
    <todo-input v-on:addNewTodoItem="addTodoItem"></todo-input>

    <todo-list v-bind:list="todoList" v-on:changeComplete="changeComplete"></todo-list>
  </div>
</template>

<script>
import Input from './components/Input.vue';
import List from './components/List.vue';
export default {
  components: {
    'todo-input': Input,
    'todo-list': List
  },
  data() {
    return {
      todoList: []
    };
  },
  methods: {
    addTodoItem(item) {
      this.todoList.push({
        id: Date.now(),
        content: item,
        isComplete: false
      });
    },
    changeComplete(item) {
      const temp = this.todoList.find((cur) => cur.id === item.id);
      temp.isComplete = !item.isComplete;
      this.todoList = [...this.todoList];
    }
  }
};
</script>

<style scope>
.container {
  width: 80%;
  margin: 0 auto;
  padding: 6px;
}
</style>
