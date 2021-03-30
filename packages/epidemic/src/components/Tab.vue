<template>
  <nav class="nav">
    <ul class="nav-container">
      <li class="nav-item" :class="{ active: item.active }" v-for="item in list" :key="item.path">
        <a href="##" @click.stop.prevent="onClick(item.path)">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['list'],
  emits: ['changeTab'],
  methods: {
    onClick(cur) {
      this.$emit('changeTab', cur);
    }
  }
};
</script>

<style scoped>
.nav {
  width: 100vw;
  height: 46px;
  background: #2345c3;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
}

.nav-container {
  display: flex;
  overflow: hidden;
}

.nav-item {
  flex: 1;
  position: relative;
  line-height: 46px;
  text-align: center;
}

.nav-item.active::after {
  content: '';
  display: block;
  background: #fff;
  height: 2px;
  position: absolute;
  bottom: 6px;
  left: 26px;
  right: 26px;
}

.nav-item > a {
  color: #fff;
}
</style>
