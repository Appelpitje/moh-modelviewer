<template>
  <div id="modelList">
    <ul v-for="file in modellist" :key="file.name" class="list-group">
      <li :click="changeFile()" class="list-group-item">{{ file.name }}</li>
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
    changeFile() {
      this.$store.dispatch("changeFile", this.modellist[3]);
    }
  }
};
</script>
