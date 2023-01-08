import { defineStore } from "pinia";

export const useUserSearchStore = defineStore({
  id: "userId",
  state: () => ({
    userId: [],
  }),
  actions: {
      showUser(user) {
        if(this.userId.indexOf(user) === -1){
            this.userId.push(user)
        }

    },
  },
});