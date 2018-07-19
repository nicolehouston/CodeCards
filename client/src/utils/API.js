import axios from "axios";

export default {
  getUsers: function () {
    return axios.get("/api/users")
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
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
  }
};