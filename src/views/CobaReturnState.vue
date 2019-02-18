<template>
  <div class="coba-return-state">
      {{getValue}}
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    getValue() {
      return this.$store.state.valueCoba;
    }
  }
};
</script>
