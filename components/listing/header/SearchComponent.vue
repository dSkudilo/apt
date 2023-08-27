<template>
  <div class="search">
    <InputComponent
      no-border
      placeholder="Поиск..."
      :modelValue="props.modelValue"
      @update:modelValue="searchHandler"
    />
  </div>
</template>
<script setup lang="ts">
import InputComponent from "~/components/ui/InputComponent";
import debounce from "~/utils/debounce";
interface IProps {
  modelValue: string,
}
const props = defineProps<IProps>()
const emit = defineEmits(['update:modelValue'])

let searchHandler = (val:string) => {
  emit('update:modelValue', val)
}
searchHandler = debounce(searchHandler, 500)

</script>
<style lang="scss" scoped>
.search {
  padding: 4px 3px;
  height: $listing-header-height;
  border: $border;
  flex-grow: 1;
}
</style>
