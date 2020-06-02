<template>
  <div>
    <select
      v-model="selected"
      :name="name"
      v-bind="$attrs"
      @change="updateInput"
      @input="updateInput"
    >
      <option v-for="(options, i) in data" :key="i" :value="options.id">{{
        options.name
      }}</option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      default: null,
      type: null
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
    },
    data: {
      type: Array,
      default: null
    }
  },
  computed: {
    selected() {
      return this.value
    }
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

select:focus {
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
  border: 1px solid var(--fondo-yellow);
}
.form-control {
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
  border-radius: 20px !important;
}
select {
  display: block;
  border-radius: 3px;
  border: 1px solid rgb(221, 221, 221);
  width: 100%;
  padding: 10px;
  outline: none;
  transition: 0.3s;
}
</style>
