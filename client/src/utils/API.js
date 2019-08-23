import axios from "axios";

export default {

   // Get all volunteers & volunteers by type
   getVolunteers: function(volType) {
     console.log(volType)
    return axios.get("/api/" + volType);
  },

  // Gets the volunteer with the given id
  getVolunteer: function(id) {
    return axios.get("/api/volunteers/" + id);
  },
  // Deletes the volunteer with the given id
  deleteVolunteer: function(id) {
    return axios.delete("/api/volunteers/" + id);
  },
  updateVolunteer: function(volunteerData) {
    return axios.put("/api/update", volunteerData);
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
