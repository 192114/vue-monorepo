<template>
  <li class="li-item" v-bind:class="{ line: listItem.isComplete }">
    <span>{{ listItem.content }}</span>
    <button v-on:click="onComplete">
      {{ buttonVal }}
    </button>
  </li>
</template>

<script>
export default {
  props: ['listItem'],
  methods: {
    onComplete() {
      this.$emit('changeComplete', this.listItem);
    }
  },
  computed: {
    buttonVal() {
      return this.listItem.isComplete ? '取消完成' : '完成';
    }
  }
};
</script>

<style scope>
.li-item {
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  border-bottom: 1px solid sandybrown;
}

.line {
  text-decoration: line-through;
}
</style>
