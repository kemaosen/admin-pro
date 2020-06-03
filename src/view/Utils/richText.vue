 <!-- 页面 -->
<template>
  <div>
    <quill-text id="one" v-model="text" ></quill-text>
    <p> {{ text }} </p>
  </div>
</template>
<script>
import QuillText from "@/components/RichText/QuillText.vue";
export default {
  mounted() {

  },
  data() {
    return {
      text: ""
    };
  },
  methods: {

  },
  components: {
    QuillText
  }
};
</script>
<style >

</style>
