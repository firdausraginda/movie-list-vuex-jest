<template>
  <div class="display-message-list">
    <MessageList :messagesProp="message" />
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
.display-message-list{
  background-color: lightblue;
}
</style>

