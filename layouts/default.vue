<template>
  <div id="app-layout">
    <slot/>
    <teleport to="body">
      <SnackBar/>
    </teleport>
  </div>
</template>
<script setup lang="ts">
import SnackBar from "@/components/ui/SnackBar";
import {useSnackStore} from "~/store/snack";
const store = useSnackStore()

</script>
