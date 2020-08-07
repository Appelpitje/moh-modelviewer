<template>
  <div id="modelList">
    <ul v-for="file in modellist" :key="file.name" class="list-group" v-cloak>
      <li class="list-group-item" @click="changeFile(file)">{{ file.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "modelList",
  components: {},
  data() {
    return {
      modellist: []
    };
  },
  mounted: function() {
    this.getFileData();
  },
  methods: {
    getFileData() {
      fetch("http://localhost:8080/files.json")
        .then(response => response.json())
        .then(data => (this.modellist = data));
    },
    changeFile(file) {
      this.$store.commit("changeFile", file);
    }
  }
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}

#modelList {
  overflow-y: auto;
  height: 100vh;
}

.list-group {
  overflow-y: auto;
}
</style>
