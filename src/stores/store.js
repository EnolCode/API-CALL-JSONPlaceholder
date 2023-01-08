import { defineStore } from "pinia";

export const useUsersStore = defineStore({
  id: "users",
  state: () => ({
    users: [],
    userdId:[]
  }),
  actions: {
    async fetchUsers() {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          this.users = data;
        })
        .catch((err) => {
          console.log(err);
        })
    },
  },
});
