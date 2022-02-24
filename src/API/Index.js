import axios from "axios"


const instance = axios.create({
    baseURL: 'http://192.168.0.123:8000'
})

export const hakatonApi = {
    signIn(userData) {
        return instance.post('/auth/token/login/', userData).then(response => response.data)
    },
    signUp(userData) {
        return instance?.post('/api/v1/auth/users/', userData).then(response => response.data)
    },
} 