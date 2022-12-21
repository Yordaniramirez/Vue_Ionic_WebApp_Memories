import {createStore} from 'vuex';
const store = createStore ({
    state(){
      return {
          memories: [
             {id: 'm1',
             image: "https://images.unsplash.com/photo-1646823976134-fa2a084d894a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
              title: 'Vakantie in Griekeland',
              description: 'Het was echt een leuke vakantie!', 
            },

             {id: 'm2',
              image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              title: 'Uiteten in Amsterdam', 
              description: 'De Sushi was echt lekker!', 
            },

             {id: 'm3',
              image: "https://images.unsplash.com/photo-1590006825608-a031aec3f37d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
              title: 'Ritje in Belgie', 
              description: 'We hebben daar een mooie goude ketting gekocht', 
            },
         ],

      };  
    },
    mutations: {
        addMemory(state, memoryData){
            const newMemory={
                id: new Date().toISOString(),
                title: memoryData.title,
                image: memoryData.imageUrl,
                description: memoryData.description
            };
            state.memories.unshift(newMemory);
        }
    },
    actions: {
        addMemory(context, memoryData){
          context.commit('addMemory', memoryData);

        }
    },
    getters: {
       memories(state) {
          return state.memories;
       } ,
       memory(state) {
        return (memoryId)=> {
            return state.memories.find(memory => memory.id === memoryId);
        };
       }
    }
})
;

export default store;