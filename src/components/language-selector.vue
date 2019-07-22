<template>
  <div class="select is-small">
    <select @change="changeLanguage">
      <option
        v-for="lang in $store.state.languages.available"
        :key="lang.code"
        :value="lang.code"
        :selected="lang.code === $store.state.languages.active"
        >{{ lang.name }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  name: "language-selector",
  methods: {
    changeLanguage(e) {
      // Changing the route will cause the router to update the langauge
      this.$router.push(`/${e.target.value}/${this.$route.name}/`);
    }
  }
};
</script>
