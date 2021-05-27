<template>
  <ul>
    <list-item
      v-for="item in list"
      v-bind:key="item.id"
      v-bind:listItem="item"
      v-on:changeComplete="changeComplete"
    ></list-item>
  </ul>
</template>

<script>
import ListItem from './ListItem.vue';
export default {
  components: {
    'list-item': ListItem
  },
  props: ['list'],
  methods: {
    changeComplete(item) {
      this.$emit('changeComplete', item);
    }
  }
};
</script>

<style></style>
