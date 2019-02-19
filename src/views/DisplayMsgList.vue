<template>
  <div class="display-message-list">
    <div class="coba-aja">
      <MessageList :messagesProp="message" />
    </div>
  </div>
</template>

<script>
  import MessageList from "../components/MessageList";

  export default {
    data() {
      return {
        message: ["Hey John", "Howdy Paco"]
      };
    },
    components: {
      MessageList
    }
  };
</script>

<style lang="scss" scoped>
  .display-message-list {
    background-color: lightblue;
  }
</style>