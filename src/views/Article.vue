<template>
  <div class="container-fluid py-4">
    <div class="card">
      <mavon-editor ref="md" v-model="value" codeStyle="vs2015" style="min-height: 500px; width: 100%; z-index: 10">
      </mavon-editor>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const props = defineProps({
  value: {
    type: String,
    default: '',
  },
})

const value = ref(props.value)
</script>

<style scoped>
.card {
  border-radius: 0 !important;
}
</style>
