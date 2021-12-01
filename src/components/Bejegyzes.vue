<template>
  <div>
      <h2>{{title}}</h2>
      <div>{{body}}</div>
  </div>
</template>

<script>
export default {
    props: ["bejegyzes"],
    data() {
        return {
            title : this.bejegyzes.title,
            body : this.bejegyzes.body
        }
    }
}
</script>