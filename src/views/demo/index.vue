<template>
  <div class="completion-input-box">
    <span class="input-box-name">{{text}}</span>
    <input
      :placeholder="placeholder"
      type="text"
      ref="input"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @click="$emit('click')"
    >
  </div>
</template>
<script>
  export default {
    name: 'inputlsit',
    props: ['text', 'value', 'placeholder'],
  }
</script>
