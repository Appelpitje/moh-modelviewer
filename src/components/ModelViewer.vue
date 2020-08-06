<template>
  <model-obj :backgroundAlpha="0" src="/files/mohdm1.obj"></model-obj>
</template>

<script>
import { ModelObj } from "vue-3d-model";

export default {
  components: {
    ModelObj
  },
  mounted() {
    console.log(this.$store.getters.getFile.name);
  }
};
</script>
