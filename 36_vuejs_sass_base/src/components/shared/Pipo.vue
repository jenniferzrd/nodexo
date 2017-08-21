<template lang="html">
  <div class="pipo">
    <p v-if="content">
      {{ content }}
    </p>
    <p v-else>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  props: ["content", "img"],
  // props représente les propriétés que l'on peut injecter dans les balises pipo
  methods: {
    // cette fonction est exécutée au click
    sendDataToMainJs() {
      // on utilise eventBus pour envoyer un message vers main.js
      eventBus.dispatchData("hello world");
    }
  }
};

</script>

<style lang="scss">

.pipo {
  max-width: 540px;
  border: 1px solid black;
  margin: 0 auto;
}
</style>
