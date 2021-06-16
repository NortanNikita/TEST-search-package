<template>
  <div class="search">
    <input
      :value="searchString"
      :placeholder="placeholder"
      @input="changeValue($event)"
    />
  </div>
</template>
<script>
import { debounce } from "debounce";
export default {
  props: {
    searchString: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: 'Search package',
    },
  },
  methods: {
    changeValue: debounce(function (event) {
      this.$emit("change", event.target.value);
    }, 250),
  },
};
</script>
<style lang="scss" scoped>
.search {
  text-align: center;
  & > input {
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    height: 40px;
    width: 270px;
    border-radius: 5px;
    outline: none;
    color: var(--textColor);
    font-size: var(--fontSize);
    padding: 10px;
    &::placeholder {
      color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
