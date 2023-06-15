import axios from 'axios';

const url = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);
    } catch (error) {
        console.log("Error while calling adduser api", error.message)
    }
}

export const getUser = async () => {
    try {
        const response = await axios.get(`${url}/users`);
        //   console.log(response.data)
        return response.data
    } catch (error) {
        console.log("Error while calling getUser api", error.message)
    }
}

export const setConversation = async (data) => {
    try {
        let response = await axios.post(`${url}/conversation/add`, data);
        return response.data
        //   console.log(response.data)
    } catch (error) {
        console.log("Error while calling setConversation api", error.message)
    }
}

export const getConversation = async (data) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, data);
        return response.data
        //   console.log(response.data)
    } catch (error) {
        console.log("Error while calling getConversation api", error.message)
    }
}

export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/message/add`, data);
        //   console.log(response.data)
    } catch (error) {
        console.log("Error while calling new message api", error.message)
    }
}

export const getMessage = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data
    } catch (error) {
        console.log("Error while calling new message api", error.message)
    }
}

export const UploadFile = async (data) => {
    try {
       return await axios.post(`${url}/file/upload`, data);
    } catch (error) {
        console.log("Error while calling upload file api", error.message)
    }
}