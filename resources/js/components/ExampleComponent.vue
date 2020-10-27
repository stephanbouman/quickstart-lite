<template>
  <div class="px-4 py-4 my-5 text-gray-100 bg-indigo-900 rounded-lg">
    <span class="font-semibold">{{ labelText}}</span>
    <span class="px-2 py-2 ml-2 text-green-300 border border-green-300 rounded"><slot></slot></span>
  </div>
</template>

<script>
export default {
  name: "ExampleComponent",
  data() {
    return {
      labelText: "Vue is "
    };
  }
};
</script>
