<template>
  <div class="card">
    <mavon-editor
      ref="md"
      v-model="value"
      codeStyle="vs2015"
      style="min-height: 500px; width: 100%; z-index: 10"
      @fullScreen="toggleSidebar"
    >
    </mavon-editor>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useAppStore} from '@/store/index.js'

const store = useAppStore()
const {toggleSidenav} = store

const props = defineProps({
  value: {
    type: String,
    default: '',
  },
})

const value = ref(props.value)

function toggleSidebar() {
  toggleSidenav()
}
</script>
