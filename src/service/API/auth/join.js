import axios from 'axios';

export const joinAPI = async (event,formData) => {
    event.preventDefault();
    try {
        const response = await axios.post('http://43.202.64.233:3000/api/user/join', formData, { timeout: 5000 });
        console.log(response.data); // 회원가입 성공 시 서버로부터 온 응답 데이터 처리
    } catch (error) {
        console.error(error); // 회원가입 실패 시 서버로부터 온 에러 데이터 처리
    }
}

export default joinAPI;