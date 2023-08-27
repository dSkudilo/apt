<template>
  <div class="icon" :style="{'color': props.isActive ? props.activeColor : props.defaultColor}" @click="$emit('click')">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
interface IProps {
  isActive?: boolean,
  activeColor?: string,
  defaultColor?: string,
}
const props = withDefaults(defineProps<IProps>(),{
  isActive: false,
  activeColor: '#416FC8',
  defaultColor: '#202124',
})

defineEmits(['click'])
</script>
<style lang="scss">
.icon {
  svg {
    transition: fill $transition;
    fill: currentColor;
  }
}
</style>
<style lang="scss" scoped>
.icon {
  height: inherit;
  width: inherit;
  cursor: pointer;
}
</style>
