<template>
  <button :type="type">
    <slot>Button</slot>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.jom-transparent-btn {
  border: 2px solid var(--jom-orange);
  border-radius: var(--jom-button-radius);
  color: #333;
  padding: 7px 20px;
  transition: 0.3s;
  cursor: pointer;
  background: transparent;
}
.jom-transparent-btn:hover {
  background: var(--jom-orange);
  color: white;
}
</style>
