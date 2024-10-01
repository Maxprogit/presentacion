<template>
  <div class="requirement-slide">
    
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'RequirementSlides',
  props: {
    title: String,
    description: String
  }
}
</script>

<style scoped>
  h2 {
    font-size: 38px;
  }
</style>
