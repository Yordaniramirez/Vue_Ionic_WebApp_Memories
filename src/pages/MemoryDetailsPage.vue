<template>
    <base-layout :page-title=" loadedMemory ?  loadedMemory.title : 'Loading...'" page-default-back-link="/memories">
     <h2 v-if="!loadedMemory">could not find a memory for the the given id</h2>
      <memory-overvieuw v-else 
      :title="loadedMemory.title" 
      :image="loadedMemory.image" 
      :description="loadedMemory.description">

      </memory-overvieuw>
    </base-layout>
</template>


<script>

import MemoryOvervieuw from '../components/memories/MemoryOvervieuw.vue';

export default {
   components : {
      MemoryOvervieuw
   },
     data(){
        return {
           memoryId: this.$route.params.id, 
        }
     } ,
     computed: {
        loadedMemory() {
            return this.$store.getters.memory(this.memoryId);
        }
     },
       
    //  watch: {
    //     '$route'(currentRoute){
    //         this.memoryid = currentRoute.params.id;
    //     },
    //  },
};



</script>