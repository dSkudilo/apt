<template>
  <div
      class="item"
      @click="$emit('click')"
      :class="[
        {'item_active': isActive}
      ]"
  >
    {{props.page}}
  </div>
</template>
<script setup lang="ts">
import {paginationItemType} from "~/components/listing/pagination/paginationItemType";

interface IProps {
  page: paginationItemType,
  isActive?: boolean
}
const props = withDefaults(defineProps<IProps>(),{
  isActive: false,
})
</script>
<style lang="scss" scoped>
.item {
  width: 25px;
  height: 25px;
  border: $border;
  background-color: $white;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  &:not(:first-child) {
    margin-left: 10px;
  }
  &:hover {
    border-color: $primary;
  }
  &_active {
    color: $white;
    background-color: $primary;
  }
}
</style>
