<template>
  <base-layout page-title="Add a Memory" page-default-back-link="/memories">
  
  <CreateMemoryForm @save-memory="saveMemory"></CreateMemoryForm>

  </base-layout>  
</template>


<script>
import CreateMemoryForm from '../components/memories/CreateMemoryForm.vue';
export default{
    components: {
        CreateMemoryForm,
    },
    methods: {
        saveMemory(memoryData){
          this.$store.dispatch('addMemory', memoryData );
          this.$router.replace('/memories'); 
        }
    }
 
};


</script>