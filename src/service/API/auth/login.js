import axios from 'axios';

export const loginAPI = async (event, formData) => {
    event.preventDefault();
    console.log(formData);
    try {
        const res = await axios.post('http://43.202.64.233:3000/api/user/login', formData, { timeout: 5000 },
        );
        // 로그인 성공
        if (res.status === 200) {
            // 토큰 로컬에 저장 
            localStorage.setItem('Tokens', JSON.stringify({
                'accessToken': res.data.AccessToken,
                'refreshToken': res.data.RefreshToken
            }))
            alert('로그인 성공'); 
        }
    } catch (error) {
        // 로그인 실패
        if (error.response.status === 401) {
            alert('비밀번호가 일치하지 않습니다.');
        }
        else {
            alert('로그인 실패');
        }
        console.error('Error: ', error); 
    }
}

export default loginAPI;