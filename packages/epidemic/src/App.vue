<template>
  <div>
    <tab :list="tabList" @change-tab="changeTab"></tab>
    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Tab from './components/Tab.vue';
export default {
  name: 'app',
  data() {
    return {
      tabList: [
        {
          name: '疫苗实况',
          path: '/vaccine',
          active: true
        },
        {
          name: '国内疫情',
          path: '/domestic',
          active: false
        },
        {
          name: '全球疫情',
          path: '/world',
          active: false
        },
        {
          name: '渔歌医疗',
          path: '/yuge',
          active: false
        }
      ]
    };
  },
  components: {
    tab: Tab
  },
  methods: {
    changeTab(cur) {
      this.$router.push(cur);

      this.tabList = this.tabList.map((item) => {
        if (item.path === cur) {
          return {
            ...item,
            active: true
          };
        }

        return {
          ...item,
          active: false
        };
      });
    }
  }
};
</script>

<style>
.content {
  width: 100vw;
  height: calc(100vh - 46px);
  padding-top: 46px;
}
</style>
