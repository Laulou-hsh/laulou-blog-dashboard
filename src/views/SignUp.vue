<template>
  <div class="bg-white">
    <div class="container top-0 position-sticky z-index-sticky">
      <div class="row">
        <div class="col-12">
          <navbar
            isBlur="blur my-3 py-2 mt-4 start-0 end-0 mx-4 shadow blur border-radius-lg"
            btnBackground="bg-gradient-success"
            v-bind:darkMode="true"
          />
        </div>
      </div>
    </div>
    <main class="mt-0 main-content">
      <section>
        <div class="page-header min-vh-100">
          <div class="container pt-8" style="height: 100vh; width: 100vw">
            <div class="row h-100 w-100">
              <div
                class="col-6 d-lg-flex d-none h-100 my-auto pe-0 ps-0 position-absolute top-0 start-0 text-center justify-content-center flex-column"
              >
                <div
                  class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
                  :style="{
                    backgroundImage: 'url(src/assets/img/illustrations/illustration-signin.jpg)',
                  }"
                ></div>
              </div>
              <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                <div class="card card-plain">
                  <div class="pb-0 card-header bg-transparent mb-4">
                    <h4 class="font-weight-bolder">注册</h4>
                    <p class="mb-0">输入昵称和邮箱注册</p>
                  </div>
                  <div class="card-body">
                    <form role="form">
                      <div class="mb-3">
                        <material-input id="name" type="text" label="昵称" name="name" size="lg" />
                      </div>
                      <div class="mb-3">
                        <material-input id="email" type="email" label="邮箱" name="email" size="lg" />
                      </div>
                      <div class="mb-3">
                        <material-input id="password" type="password" label="密码" name="password" size="lg" />
                      </div>
                      <material-checkbox id="flexCheckDefault" class="font-weight-light" checked>
                        我同意
                        <a href="#" class="text-dark font-weight-bolder">隐私政策</a>
                      </material-checkbox>
                      <div class="text-center">
                        <material-button class="mt-4" variant="gradient" color="success" fullWidth size="lg"
                          >注册</material-button
                        >
                      </div>
                    </form>
                  </div>
                  <div class="px-1 pt-0 text-center card-footer px-lg-2">
                    <p class="mx-auto mb-4 text-sm">
                      已经有账号？
                      <router-link :to="{name: 'SignIn'}" class="text-success text-gradient font-weight-bold"
                        >登录</router-link
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import {onBeforeMount, onBeforeUnmount} from 'vue'
import Navbar from '@/examples/PageLayout/Navbar.vue'
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialCheckbox from '@/components/MaterialCheckbox.vue'
import MaterialButton from '@/components/MaterialButton.vue'
import {useAppStore} from '@/store/index.js'

const body = document.getElementsByTagName('body')[0]
const store = useAppStore()
const {toggleEveryDisplay, toggleHideConfig} = store

onBeforeMount(() => {
  toggleEveryDisplay()
  toggleHideConfig()
  body.classList.remove('bg-gray-100')
})

onBeforeUnmount(() => {
  toggleEveryDisplay()
  toggleHideConfig()
  body.classList.add('bg-gray-100')
})
</script>
