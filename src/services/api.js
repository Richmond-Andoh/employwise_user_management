import axios from "axios";

const BASE_URL = "https://reqres.in/api"; 

export const loginUser = async (email, password) => {
   try {
      const response = await axios.post(`${BASE_URL}/login`, {
         email: email,
         password: password
      });
      return response.data.token;
      
   } catch (error) {
    throw new Error(error.response?.data?.error || "Login failed");
   }
};

export const fetchUsers = async (page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}/users`, {
            params: {
                page: page
            }
        });

        return response.date;
    } catch (error) {
         throw new Error(error.response?.data?.error || "Failed to fetch users");
    }
}

export const updateUser = async (userId, userData) => {
    try {
        const response = await axios.put(`${BASE_URL}/users/${userId}`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || "Failed to update user");
    }
}

export const deleteUser = async (userId) => {
    try {
        await axios.delete(`${BASE_URL}/users/${userId}`);
        return true;
    }
    catch (error) {
        throw new Error(error.response?.data?.error || "Failed to delete user");
    };
};