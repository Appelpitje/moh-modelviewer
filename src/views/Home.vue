<template>
  <b-container fluid>
    <b-row>
      <b-col cols="2" lg="2" md="4">
        <!-- <b-row><SearchBar /></b-row> -->
        <b-row><ModelList /></b-row>
      </b-col>
      <b-col cols="10" lg="10" md="8">
        <b-row><ModelViewer class="vh-100"/></b-row>
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
  }
};
</script>

<style scoped></style>
