<template>
  <li
    :class="isSelected ? 'active-filter-item' : ''"
    @click="$emit('selected', theme.name)"
    :key="theme.name"
  >
    <p>{{ theme.localName }} ({{ count }})</p>
  </li>
</template>

<script>
export default {
  props: { theme: Object, count: Number, isSelected: Boolean },
  emits: ["selected"],
};
</script>
