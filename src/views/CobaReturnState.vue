<template>
  <div>
    <div class="coba-return-state">
      {{getValue}}
    </div>
    <div class="lala">
      <button @click="increment">click me</button>
      {{counter}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  computed: {
    getValue() {
      return this.$store.state.valueCoba;
    }
  },
  methods: {
    increment() {
      this.counter += 1;
    }
  }
};
</script>