<template>
  <model-obj :backgroundAlpha="0" :src="filesrc"></model-obj>
</template>

<script>
import { ModelObj } from "vue-3d-model";

export default {
  components: {
    ModelObj
  },
  data: function() {
    return {
      filesrc: "/files/m1_garand.obj"
    };
  },
    mounted: function() {
    this.filesrc=this.$store.getters.getFile.path
  },
  watch: {
    "$store.state.file": function() {
      this.filesrc = this.$store.getters.getFile.path;
      console.log(this.$store.getters.getFile.path);
    }
  }
};
</script>
