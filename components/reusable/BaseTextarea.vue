<template>
  <div>
    <textarea
      :name="name"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
      @change="updateInput"
      @input="updateInput"
    ></textarea>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      default: '',
      type: String
    },
    className: {
      default: '',
      type: String
    },
    placeholder: {
      default: '',
      type: String
    },
    name: {
      default: '',
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  mounted() {
    this.$el.value = this.value
  },
  methods: {
    updateInput(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
<style scoped>
textarea:focus {
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
  border: 1px solid var(--fondo-yellow);
}

textarea {
  display: block;
  border-radius: 3px;
  border: 1px solid rgb(221, 221, 221);
  width: 100%;
  padding: 10px;
  outline: none;
  transition: 0.3s;
  resize: none;
  height: 200px;
}
</style>
