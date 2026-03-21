<template>
  <div class="header">
    <div class="header-icons">
      <svg class="header-icons-moon" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
      </svg>
      <Toggle :mode="mode" @toggle="$emit('toggle')"></Toggle>
      <svg @click="showModal = true" class="header-icons-burger" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke-width="0"/>
        <g stroke-linecap="round" stroke-linejoin="round"/>
        <g> <path d="M4 18L20 18" stroke-width="2" stroke-linecap="round"/> <path d="M4 12L20 12" stroke-width="2" stroke-linecap="round"/> <path d="M4 6L20 6" stroke-width="2" stroke-linecap="round"/> </g>
      </svg>
    </div>

    <Modal :visible="showModal" @close="showModal = false"></Modal>
  </div>
</template>

<script>
import Toggle from '../shared/Toggle'
import Modal from '../shared/Modal'


export default{
    name: 'Header',
    props: ['mode'],
    components: {
      Toggle,
      Modal
    },
    data() {
      return {
        showModal: false
      }
    }
}
</script>



<style src="../css/Header.scss" lang="scss" />