<template>
  <div class="input">
    <input
        class="input__field"
        :type="props.type"
        :placeholder="props.placeholder"
        :class="{'input__field_without-border': noBorder}"
        @input="(event) => $emit('update:modelValue', event.target.value)"
    >
  </div>
</template>
<script setup lang="ts">
interface IProps {
  type?: string,
  placeholder?: string,
  noBorder?: boolean,
  modelValue: string,
}
const props = withDefaults(defineProps<IProps>(),{
  type: 'text',
  placeholder: '',
  noBorder: false,
})

const emit = defineEmits(['update:modelValue'])

</script>
<style lang="scss" scoped>
.input {
  width: 100%;
  height: 100%;
  &__field {
    width: 100%;
    height: 100%;
    &_without-border, &_without-border:active{
      outline: none;
      border: none;
    }
  }
}
</style>
