<template>
  <div class="header">
    <div class="header-icons">
      <Toggle :mode="mode" @toggle="$emit('toggle')"></Toggle>

      <button
        class="burger-btn"
        :class="{ open: showModal }"
        @click="showModal = !showModal"
        :aria-label="showModal ? 'Close menu' : 'Open menu'"
        :aria-expanded="showModal"
      >
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>
    </div>

    <Modal :visible="showModal" @close="showModal = false"></Modal>
  </div>
</template>

<script>
import Toggle from '../shared/Toggle'
import Modal from '../shared/Modal'

export default {
    name: 'Header',
    props: ['mode'],
    components: { Toggle, Modal },
    data() {
      return { showModal: false }
    }
}
</script>

<style src="../css/Header.scss" lang="scss" />
