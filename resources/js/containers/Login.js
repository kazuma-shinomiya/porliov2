import React, { useState } from "react";
import axios from 'axios';
import LoginForm from "../components/LoginForm";

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    
    const getUser = async() => {
        await axios
                .get('/api/user')
                .then(response => {
                    console.log(response.data);
                    setUser(response.data);
                })
                .catch(error => {
                    console.log("ログイン情報取得ができません")
                })
    }
    
    const login = async(e) => {
        e.preventDefault();
        axios
            .get("/sanctum/csrf-cookie")
            .then(response => {
                axios
                    .post("/login", {
                        email: formData.email,
                        password: formData.password,
                    })
                    .then(response => {
                        console.log('ログイン成功');
                        setIsAuth(true);
                    })
                    .catch(error => {
                        console.log(error.response);
                        console.log('ログイン失敗');
                    })
            })
    }

    const inputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        formData[key] = value;
        let data = Object.assign({}, formData);
        setFormData(data);
    }
    
    return(
        <div>
            <LoginForm data={formData} inputChange={inputChange} login={login}/>
        </div>
    )
}
export default Login;