import axios from 'axios';

export const joinAPI = async (event,formData) => {
    var response = [];
    
    try {
        //axios 연결
        response = await axios.post('http://43.202.64.233:3000/api/user/join', formData, { timeout: 5000 });
    } catch (error) {
        console.error(error); // 회원가입 실패 시 서버로부터 온 에러 데이터 처리
    }

    // 로컬 스토리지에 저장
    localStorage.setItem('AccessToken',response.data.AccessToken);


}

export default joinAPI;