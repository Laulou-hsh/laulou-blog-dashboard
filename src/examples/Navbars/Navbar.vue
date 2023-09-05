<template>
  <nav
    class="shadow-none navbar navbar-main navbar-expand-lg border-radius-xl"
    v-bind="$attrs"
    id="navbarBlur"
    data-scroll="true"
    :class="isAbsolute ? 'mt-4' : 'mt-0'"
  >
    <div class="px-3 py-1 container-fluid">
      <breadcrumbs :currentPage="currentRouteName" :color="color" />
      <div class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4" id="navbar">
        <div class="pe-md-3 d-flex align-items-center ms-md-auto">
          <material-input id="search" label="搜索" />
        </div>
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item d-flex align-items-center dropdown">
            <div
              class="px-0 nav-link font-weight-bold lh-1"
              :class="[color ? color : 'text-body', showMenu ? 'show' : '']"
              aria-expanded="false"
              @click="showMenu = !showMenu"
            >
              <i class="material-icons ms-sm-1"> account_circle </i>
            </div>
            <div class="px-2 dropdown-menu dropdown-menu-end me-sm-n4" :class="showMenu ? 'show' : ''">
              <div class="dropdown-item border-radius-md">
                <div class="d-flex mt-1">
                  <div class="my-auto me-2 l-h-1">
                    <i class="material-icons-round opacity-10 fs-5">logout</i>
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-1 text-sm font-weight-normal">
                      <span class="font-weight-bold">退出登录</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item d-xl-none d-flex align-items-center ms-2 me-n2">
            <a href="#" @click="toggleSidebar" class="p-0 nav-link text-body lh-1" id="iconNavbarSidenav">
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
              </div>
            </a>
          </li>
          <li class="px-3 nav-item d-flex align-items-center">
            <a class="p-0 nav-link lh-1" @click="toggleConfigurator" :class="color ? color : 'text-body'">
              <i class="material-icons fixed-plugin-button-nav cursor-pointer"> settings </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {onBeforeMount, ref, computed} from 'vue'
import {useRoute} from 'vue-router'
import {storeToRefs} from 'pinia'
import MaterialInput from '@/components/MaterialInput.vue'
import Breadcrumbs from '../Breadcrumbs.vue'
import {useAppStore} from '@/store/index.js'
import {ROUTE_NAME_MAP} from '@/config/route.js'

const props = defineProps(['minNav', 'color'])
const store = useAppStore()
const {isAbsolute} = storeToRefs(store)
const {toggleConfigurator, navbarMinimize} = store

const route = useRoute()
let showMenu = ref(null)

onBeforeMount(() => {
  props.minNav
})

function toggleSidebar() {
  navbarMinimize()
}

const currentRouteName = computed(() => {
  return ROUTE_NAME_MAP[route.name]
})
</script>
