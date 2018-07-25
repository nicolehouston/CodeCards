import axios from "axios";

export default {
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  getUserbyName: function(name) {
    return axios.get("/api/users/" + name);
  },
  saveCategory: function(req) {
    return axios.put("/api/users/" + req.username, req);
  },
  addInfoCard: function(cardData) {
    return axios.put("api/users/" + cardData.username + "/addCard", cardData);
  },
  // deleteCategory: function(req) {
  //   return axios.delete("api/users/" + req.username, req);
  // }
};