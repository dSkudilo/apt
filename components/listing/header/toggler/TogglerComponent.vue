<template>
  <div class="toggler">
    <IconWrapper
      :is-active="currentView.name === view.name"
      color="#416FC8"
      v-for="view in props.list"
      :key="view.name"
      @click="selectHandler(view)"
    >
      <component :is="view.icon.component"/>
    </IconWrapper>
  </div>
</template>
<script setup lang="ts">
import IconWrapper from "~/components/ui/IconWrapper.vue";
import {ref} from "vue";
import {IViewsConfig} from "~/components/listing/header/IViewsConfig";
const emit = defineEmits(['update:modelValue'])
interface IProps {
  list: IViewsConfig[]
  modelValue: IViewsConfig,
}
const props = defineProps<IProps>()
const currentView = ref(props.modelValue)

const selectHandler = (item:IViewsConfig) => {
  currentView.value = item
  emit('update:modelValue', currentView.value)
}
</script>
<style lang="scss" scoped>
.toggler {
  display: flex;
  align-items: center;
  border-top: $border;
  border-right: $border;
  border-bottom: $border;
  height: $listing-header-height;
  svg {
    height: inherit;
  }
}
</style>
