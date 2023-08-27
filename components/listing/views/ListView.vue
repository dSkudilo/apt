<template>
  <div class="list">
    <div
      v-for="(item) in items" :key="item.id"
      class="list__item"
      :title="getObject(field, item)"
      @click="$emit('itemClick', item)"
    >
      {{getObject(field, item)}}
    </div>
  </div>
</template>
<script setup lang="ts">
import getObject from "@/utils/getObject";
const emit = defineEmits(['itemClick'])
interface IProps {
  items?: object[],
  field?:string,
}
const props = withDefaults(defineProps<IProps>(),{
  field: 'name',
})

</script>
<style lang="scss" scoped>
.list{
  &__item {
    height: 36px;
    background-color: $white;
    transition: background-color $transition;
    cursor: pointer;
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    padding: 6px 4px;
    &:hover {
      background-color: rgba(0,0,0,0.1)
    }
    &:not(:first-child) {
      border-top: $border;
    }
  }
}
</style>
