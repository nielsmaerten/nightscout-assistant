<template>
  <div class="mt-5 mx-10">
    <h1>{{$t("index.header.title")}}</h1>
    <h2 class="mb-1">
      {{$t("index.header.subtitle")}}
    </h2>
    <div class="has-text-right">
      <language-selector></language-selector>
    </div>
  </div>
</template>

<script>
import LanguageSelector from "./language-selector"
export default {
  name: "ns-header",
  components: {LanguageSelector}
};
</script>
