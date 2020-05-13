<template>
  <div>
    <input
      :type="type"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :class="className"
      v-bind="$attrs"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
      @change="updateInput"
      @input="updateInput"
    />
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
.form-control:focus {
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
  border: 1px solid var(--fondo-yellow);
}

input:focus {
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
  border: 1px solid var(--fondo-yellow);
}
.form-control {
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
  border-radius: 20px !important;
}
input {
  display: block;
  border-radius: 3px;
  border: 1px solid rgb(221, 221, 221);
  width: 100%;
  padding: 10px;
  outline: none;
  transition: 0.3s;
}
</style>
