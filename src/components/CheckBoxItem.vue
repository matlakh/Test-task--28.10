<template>
  <div class="form__checkbox">
    <input
      type="checkbox"
      class="custom-checkbox"
      :id="name"
      v-model="isCheck"
    />
    <label :for="name">{{ optionName }} ({{ count }})</label>
  </div>
</template>

<script>
export default {
  props: { count: Number, optionName: String, name: String, isCheck: Boolean }
};
</script>
