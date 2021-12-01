<template>
  <div>
      <Bejegyzes v-for="bejegyzes in bejegyzesek" :key="bejegyzes.title" :bejegyzes="bejegyzes" @bejegyzes-edit="Edit"/>
  </div>
</template>

<script>
import Bejegyzes from "./Bejegyzes.vue"

export default {
    components: {
        Bejegyzes
    },
    props: ["bejegyzesek"],
    methods: {
        Edit(e){
            this.$emit("bejegyzes-edit", e)
        }
    }
}
</script>