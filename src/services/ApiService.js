import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const getWorkoutPlans = () => {
  return axios.get(`${API_URL}/workout-plans`);
};

export const createUserProfile = (userProfile) => {
  return axios.post(`${API_URL}/user-profiles`, userProfile);
};

export const getUserProfiles = () => {
  return axios.get(`${API_URL}/user-profiles`);
};

export const getWorkoutPlanById = (id) => {
  return axios.get(`${API_URL}/workout-plans/${id}`);
};

export const sendMessage = (messageData) => {
  return axios.post(`${API_URL}/contact`, messageData);
};
