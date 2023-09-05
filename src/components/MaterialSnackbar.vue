<template>
  <div class="toast fade show p-2 mt-2" :class="getColor(color)">
    <div class="toast-header bg-transparent border-0">
      <i class="material-icons me-2" :class="getIcon(icon.color)">{{ icon.component }}</i>
      <span class="me-auto font-weight-bold" :class="getTextColor(icon.color)">
        {{ title }}
      </span>
      <small class="text-white">{{ date }}</small>
      <i class="fas fa-times text-md ms-3 cursor-pointer text-white" @click="closeHandler" />
    </div>
    <hr class="horizontal dark m-0 light" />
    <div class="toast-body text-white">{{ description }}</div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  icon: {
    type: Object,
    component: String,
    color: String,
    default: () => {},
  },
  color: {
    type: String,
    default: 'success',
  },
  closeHandler: {
    type: Function,
    default: () => {},
  },
})

const icon = ref(props.icon)

function getColor(color) {
  const colorValue = color === 'white' ? 'bg-white' : `bg-gradient-${color}`
  return colorValue
}

const getIcon = (color) => {
  const iconColor = color ? `text-${color}` : null
  return iconColor
}
const getTextColor = (color) => {
  const textColor = color === 'white' ? 'text-white' : 'text-dark'
  return textColor
}
</script>
