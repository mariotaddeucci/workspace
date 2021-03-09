<template>
  <div v-show="config">
    <div class="modal" @click="setConfig()"></div>
    <div class="card">
      <div class="card-header">
        <div
          @click="setConfig('installed')"
          :class="{ active: config == 'installed' }"
        >
          Instalados
        </div>
        <div
          @click="setConfig('available')"
          :class="{ active: config == 'available' }"
        >
          Disponíveis
        </div>
        <div
          @click="setConfig('config')"
          :class="{ active: config == 'config' }"
        >
          Configurações
        </div>
      </div>
      <div v-if="config == 'config'">config</div>
      <div v-else>
        <div v-for="app in apps" :key="app.name" class="app">
          <div>
            <img :src="app.logo" />
            <span>{{ app.name }}</span>
            <button v-if="config == 'installed'" @click="uninstall(app)">
              Remover
            </button>
            <button v-else-if="app.url" @click="install(app)">Adicionar</button>
            <button v-else>Configurar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-header {
  display: block;
  width: calc(100% + 11px);
  text-align: center;
  margin: -5px -5px 0px -5px;
}

.card-header div {
  width: calc(100% / 3);
  display: inline-block;
  line-height: 2.5em;
  background-color: #252525;
  font-weight: 600;
  font-size: 0.85em;
  color: #9e9e9e;
  border-bottom: 3px solid;
  border-color: #252525;

  &:hover,
  &.active {
    background-color: #1d1d1d;
    color: #d8d8d8;
    border-color: rgb(0, 163, 224);
    cursor: pointer;
  }
}

.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: rgb(60 60 60 / 75%);
}

.card {
  position: fixed;
  z-index: 9999;
  width: 400px;
  background: #444;
  top: 150px;
  left: calc(50% - 200px);
  padding: 5px;
}

.app {
  width: 30%;
  display: inline-block;
  text-align: center;
  padding: 0.3em 1.65%;

  & > div {
    background: #5f5f5f;
    padding: 10px 5px;
  }

  img {
    width: 45%;
    border-radius: 7px;
  }

  span {
    font-weight: bold;
    font-size: 14px;
    line-height: 2.5em;
  }

  & > img,
  span,
  button {
    display: block;
    margin: 0 auto;
    color: #fff;
  }

  button {
    border-radius: 7px;
    line-height: 2em;
    width: 85px;
    background-color: rgb(0, 163, 224);
    border: 0px;
  }
}
</style>

<script>
import { inject } from "vue";

export default {
  setup() {
    const { mapGetters, mapActions } = inject("store");
    return {
      ...mapGetters("installed", "available", "config"),
      ...mapActions("install", "setConfig", "uninstall"),
    };
  },
  computed: {
    apps() {
      return this.config == "installed" ? this.installed : this.available;
    },
  },
};
</script>
