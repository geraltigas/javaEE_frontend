<template>
  <div>this is artical</div>
</template>

<script>
export default {
  name: "HeadAndShort",
  props: {
    head: {
      type: String,
      required: true,
    },
    short: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
