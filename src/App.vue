<template>
  <div>
    <SideBar />
    <WebView />
    <ConfigModal />
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import WebView from "./components/WebView.vue";
import ConfigModal from "./components/ConfigModal.vue";

export default {
  name: "App",
  components: {
    WebView,
    SideBar,
    ConfigModal,
  },
};
</script>

<style lang="scss">
* {
  font-family: "Open Sans", sans-serif;
}
body,
html {
  margin: 0px;
  padding: 0px;
}
</style>
