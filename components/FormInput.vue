<template>
  <div class="form-group">
    <label v-if="label" class="form-label">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      class="form-input"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
  type?: string
  placeholder?: string
  modelValue?: string
}>()
defineEmits(['update:modelValue'])
</script>
