<template>
  <div class="modal">
    <div class="modal-dialog modal-fullscreen-sm-down">

     <div class="modal-content">
       <header class="modal-header">
        <slot name="title">
          This is the default title!
        </slot>
        <button
          type="button"
          aria-label="Close"
          class="btn-close"
          @click="close"
        >
        </button>
      </header>

      <section class="modal-body">
        <slot name="body">
          This is the default body!
        </slot>
       </section>
     </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'ModalBox',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style>
  .modal {
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4);
    display: block;

  }
</style>