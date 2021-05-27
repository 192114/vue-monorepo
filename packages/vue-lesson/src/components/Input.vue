<template>
  <input type="text" v-model="textVal" className="input" v-on:keyup.enter="onEnter" />
</template>

<script>
export default {
  data() {
    return {
      textVal: ''
    };
  },
  methods: {
    onEnter() {
      if (!this.textVal) {
        return;
      }
      this.$emit('addNewTodoItem', this.textVal);
      this.textVal = '';
    }
  }
};
</script>

<style scope>
.input {
  width: 100%;
  height: 36px;
  border-radius: 6px;
  font-size: 20px;
}
</style>
