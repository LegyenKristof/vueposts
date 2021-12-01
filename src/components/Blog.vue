<template>
  <div>
      <Bejegyzes v-for="bejegyzes in bejegyzesek" :key="bejegyzes.title" />
  </div>
</template>

<script>
import Bejegyzes from "./Bejegyzes.vue"

export default {
    components: {
        Bejegyzes
    },
    props: ["bejegyzesek"]
}
</script>