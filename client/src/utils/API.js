import axios from "axios";

export default {
  // Gets all books
  getVolunteers: function() {
    return axios.get("/api/volunteers");
  },
  // Gets the book with the given id
  getVolunteer: function(id) {
    return axios.get("/api/volunteers/" + id);
  },
  // Deletes the book with the given id
  deleteVolunteer: function(id) {
    return axios.delete("/api/volunteers/" + id);
  },
  // Saves a book to the database
  saveVolunteer: function(volunteerData) {
    return axios.post("/api/volunteers", volunteerData);
  }
};
