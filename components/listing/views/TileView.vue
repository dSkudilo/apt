<template>
  <div class="tile">
    <div
        class="tile__item"
        v-for="(item) in items"
        :key="item.id"
        :title="getObject(field, item)"
        @click="$emit('itemClick', item)"
    >
      {{getObject(field, item)}}
    </div>
  </div>
</template>
<script setup lang="ts">
import getObject from "@/utils/getObject";
interface IProps {
  items?: object[],
  field?:string,
}
const props = withDefaults(defineProps<IProps>(),{
  field: 'name',
})

</script>
<style lang="scss" scoped>
.tile {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 9px;
  padding: 9px 6px;
  &__item {
    flex: 0 0 calc(100% / 3 - 6px);
    box-shadow: $shadow;
    border: $border;
    background-color: #eaeaea;
    min-height: 100px;
    cursor: pointer;
    transform: scale(1);
    transition: transform $transition;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    &:hover {
      transform: scale(1.02);
    }
  }
}
</style>
