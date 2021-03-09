<template>
  <div class="sidebar">
    <div
      class="app"
      v-for="app in installed"
      :key="app.url"
      :class="{ active: active == app }"
      @click="setActive(app)"
    >
      <img :src="app.logo" />
    </div>
    <button @click="setConfig('config')">Config</button>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  height: 100%;
  width: 70px;
  left: 0px;
  top: 0px;

  background: #444;

  .app {
    padding: 5px 15px 5px 10px;
    border-left: 5px transparent solid;

    &:first-child {
      margin-top: 40px;
    }

    &.active,
    &:hover {
      border-color: rgb(0, 163, 224);
      background: #313131;
      cursor: pointer;
    }

    img {
      width: 100%;
      border-radius: 7px;
      margin: 0px;
      margin-top: 5px;
    }
  }
}
</style>

<script>
import { inject } from "vue";

export default {
  setup() {
    const { mapGetters, mapActions } = inject("store");
    return {
      ...mapGetters("installed", "active"),
      ...mapActions("setActive", "setConfig"),
    };
  },
};
</script>
