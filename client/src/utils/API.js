import axios from "axios";

export default {

   // test
   getVolunteers: function(volType) {
     console.log(volType)
    return axios.get("/api/" + volType);
  },
//   getAllVolunteers: function(volType) {
//     console.log(volType)
//     return axios.get("/api/" + volType);
//  },

//   getVolunteersByType: function(volType) {
//     console.log(volType)
//    return axios.get("/api/volunteers/" + volType);
//  },

//------------------------------------------------

// Origionals

// getVolunteers: function() {
//   return axios.get("/api/volunteers");
// },
  
// getCoaches: function() {
//   return axios.get("/api/coaches");
// },

// getGameday: function() {
//  return axios.get("/api/gameday");
// },
// getFieldm: function() {
//  return axios.get("/api/fieldm");
// },
// getUmpires: function() {
//  return axios.get("/api/umpires");
// },
// getTeamp: function() {
//  return axios.get("/api/teamp");
// },
// getMentors: function() {
//  return axios.get("/api/mentors");
// },
// getBenefit: function() {
//  return axios.get("/api/benefit");
// },
// getStaff: function() {
//  return axios.get("/api/staff");
// },

//------------------------------------------------

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
