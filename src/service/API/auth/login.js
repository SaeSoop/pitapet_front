import axios from 'axios';

export const loginAPI = async (event, formData) => {
    event.preventDefault();
    console.log(formData);
    try {
        const res = await axios.post('http://43.202.64.233:3000/api/user/login', formData, { timeout: 5000 });
        console.log("res.data: ", res.data.AccessToken);
        if (res.ok) {
            console.log('Login successful');
        } else {
            console.log('Login failed');
        }
    } catch (error) {
        
        console.error('Error: ', error); 
    }
}

export default loginAPI;