<template>
  <div class="webview">
    <webview
      v-for="app in installed"
      :key="app.url"
      :src="app.url"
      partition="persist:services"
      v-show="app == active"
    ></webview>
  </div>
</template>
<style lang="scss" scoped>
.webview {
  position: fixed;
  width: calc(100% - 70px);
  height: 100%;
  right: 0px;
  top: 0px;
}

.webview webview {
  width: 100%;
  height: 100%;
}
</style>

<script>
import { inject } from "vue";

export default {
  setup() {
    const { mapGetters } = inject("store");
    return {
      ...mapGetters("installed", "active"),
    };
  },
};
</script>