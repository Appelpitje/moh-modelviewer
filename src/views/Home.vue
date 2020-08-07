<template>
  <b-container fluid>
    <b-row>
      <b-col cols="2" lg="2" md="4">
        <!-- <b-row><SearchBar /></b-row> -->
        <b-row><ModelList /></b-row>
      </b-col>
      <b-col cols="10" lg="10" md="8" class="vh-100">
        <b-row class="vh-100">
          <ModelViewer />
          <div id="icons">
            <div id="icon-copy-code" v-clipboard="modelcode">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABHElEQVRoge3YQQrCMBCF4b/iFSriRd16xiKKp9GVNLWt0sxLMsg8KK46k89MAy1o8xRdd+AoXtumqCDNMe9FKGo0xSghQ/LbG2tmL0JRo2fEVN8ZJQQaYs5oIdAQczHev7SrKWb1mVEdlzc0/9baeP7EKM/+B3AqBPnEzMZMffZbMb/Ws4pRQu5LDTJrfcvimCkhR+yYnJEe0hstSWscgCv5Y5b7fMohYMdk9S4BgXqY4hCog6kCgfKYahAoi6kKgXKYIpAt183Yc9K7Y0R0xmI5sfSc9N4LCsH2BVknYJadumCrBMRbAuItAfGWgHhLQLwlIN4SEG8JiLeo3hCtMb8xxo6IY/4I8Tc7EhBvCYi3pKeW/OtfzfzNjrwAb3YJtHLIRU8AAAAASUVORK5CYII="
              />
            </div>
            <b-popover show target="icon-copy-code" class="popover-copy">
              Copy spawn code for MOHAA!
            </b-popover>
          </div>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import SearchBar from "@/components/SearchBar.vue";
import ModelList from "@/components/ModelList.vue";
import ModelViewer from "@/components/ModelViewer.vue";

export default {
  name: "home",
  components: {
    ModelList,
    // SearchBar,
    ModelViewer
  },
  data() {
    return {
      modelcode: 'local.crate = spawn script_model\n' +
        'local.crate model ' +
        (this.$store.getters.getFile.name).replace(".obj", ".tik") +
        '\n' +
        'local.crate.origin = ( 0 0 0 )\n'
    };
  },
  watch: {
    "$store.state.file": function() {
      this.modelcode =
        'local.crate = spawn script_model\n' +
        'local.crate model ' +
        (this.$store.getters.getFile.name).replace(".obj", ".tik") +
        '\n' +
        'local.crate.origin = ( 0 0 0 )\n';
    }
  }
};
</script>

<style scoped>
#icons {
  position: absolute;
  bottom: 25px;
  right: 25px;
  cursor: pointer;
}

.popover-copy {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
