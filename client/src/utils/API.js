import axios from "axios";

export default {
  // Gets all volunteers
  getVolunteers: function() {
    return axios.get("/api/volunteers");
  },
  // Gets the volunteer with the given id
  getVolunteer: function(id) {
    return axios.get("/api/volunteers/" + id);
  },
  // Deletes the volunteer with the given id
  deleteVolunteer: function(id) {
    return axios.delete("/api/volunteers/" + id);
  },
  // Saves a volunteer to the database
  saveVolunteer: function(volunteerData) {
    return axios.post("/api/volunteers", volunteerData);
  },

  signupVolunteer: function(volunteerData) {
    return axios.post("/api/signup", volunteerData);
  },

  loginVolunteer: function(credentials) {
    return axios.post("/api/login/", credentials);
  }
};
