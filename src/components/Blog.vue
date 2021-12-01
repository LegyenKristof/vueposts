<template>
  <div>
      <Bejegyzes v-for="bejegyzes in bejegyzesek" :key="bejegyzes.title" :bejegyzes="bejegyzes"/>
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