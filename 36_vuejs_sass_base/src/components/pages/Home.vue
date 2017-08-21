<template lang="html">
  <div class="">
    <h1>{{ title }}</h1>

    <pipo :content="contentPipo"></pipo>
    <pipo :content="warning"></pipo>
    <pipo :content="success"></pipo>
  </div>
</template>

<script>
import { eventBus } from "../../main";
import Pipo from "../shared/Pipo.vue";
export default {
  data() {
    return {
      contentPipo : "mon texte",
      warning: "ceci est ma partie en warning",
      success: "ceci est ma partie sucess",
      title: "Home"
    }
  },
  components: {
    Pipo
  },
  created() {
    eventBus.$on("dataDispatched", (message) => {
      console.log(message);
    });
  }
}
</script>

<style lang="scss">
$colorText: silver;

p {
  color: $colorText;
}
</style>
