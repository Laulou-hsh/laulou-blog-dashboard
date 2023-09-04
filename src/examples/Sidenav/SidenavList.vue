<template>
  <div class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item" v-for="item in data" :key="item.url">
        <sidenav-collapse :url="item.url" :collapse="false" :navText="ROUTE_TEXT_MAP[item.url]">
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">{{ item.icon }}</i>
          </template>
        </sidenav-collapse>
      </li>
    </ul>
  </div>
</template>

<script setup>
import SidenavCollapse from './SidenavCollapse.vue'
import {ROUTE_TEXT_MAP} from '@/config/route'
import {data} from './SidenavList.json'

defineProps({
  cardBg: String,
})
</script>
