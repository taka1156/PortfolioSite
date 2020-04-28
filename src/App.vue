<template>
  <div id="app">
    <!--Splashページでは、ナビゲーションバーを出さない-->
    <NaviBar v-if="!isSplashRoute" @change-state="changeState" />
    <router-view :class="{ 'prevent-scroll': isOpenNavi }" />
  </div>
</template>

<script>
import NaviBar from '@/components/parts/Nav/NavBar';

export default {
  components: {
    NaviBar
  },
  data() {
    return {
      isOpenNavi: false
    };
  },
  computed: {
    isSplashRoute() {
      // スプラッシュページの時はナビゲーションバー非表示
      return this.$route.path === '/';
    }
  },
  methods: {
    changeState(state) {
      /* ナビゲーションバーが開いている時は
        表示を固定するクラスを一時的に付与してスクロールを無効化
       */
      this.isOpenNavi = state;
    }
  }
};
</script>

<style>
#app {
  text-decoration: none;
  text-align: center;
}

.prevent-scroll {
  position: fixed;
  right: 0;
  left: 0;
}
</style>
