<template>
<b-container fluid class="vh-100">
    <b-row class="justify-content-md-center vh-100">
        <b-col class="vh-100">
            <b-row class="w-100"><SearchBar/></b-row>
            <b-row class="w-100"><ModelList/></b-row>
        </b-col>
        <b-col cols="10" class="vh-100">
            <b-row class="vh-100"><ModelViewer/></b-row>
        </b-col>
    </b-row>
</b-container>
      
</template>

<script>
// @ is an alias to /src

// import Search from "@/components/Search.vue";
import SearchBar from "@/components/SearchBar.vue";
import ModelList from "@/components/ModelList.vue";
import ModelViewer from "@/components/ModelViewer.vue";

export default {
  name: "home",
  components: {
    // Search,        
    ModelList,
    SearchBar,
    ModelViewer
  }
};
</script>

<style scoped>
.wrapper{
  display: flex;
    align-items: flex-start;
    height: 100%;
    width: 100%;
}
</style>
