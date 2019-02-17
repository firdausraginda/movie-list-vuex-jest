<template>
  <div class="message-list">
    <ul>
      <li
        v-for="message in messagesProp"
        :key="message"
        class="message-list-ul-li"
      >
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    messagesProp: {
      type: Array,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.message-list {
  .message-list-ul-li {
    color: #42b983;
  }
}
</style>