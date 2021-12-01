<template>
  <div>
      <div v-if="!edit">
        <h2>{{title}}</h2>
        <div>{{body}}</div>
        <button @click="Edit">Edit {{title}}</button>
      </div>
      <div v-if="edit">
        <input type="text" v-model="title"><br>
        <textarea v-model="body"></textarea><br>
        <button @click="Save">Save</button>
      </div>
      
  </div>
</template>

<script>
export default {
    props: ["bejegyzes"],
    data() {
        return {
            title: this.bejegyzes.title,
            body: this.bejegyzes.body,
            edit: false
        }
    },
    methods: {
        Edit() {
            this.edit = true
        },
        Save(){
            this.edit = false
            this.$emit("bejegyzes-edit", {
                old: this.bejegyzes,
                new: {
                    title: this.title,
                    body: this.body
                }
            })
        }
    }
}
</script>