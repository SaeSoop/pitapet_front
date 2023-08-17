import axios from 'axios';

// 중복확인 axios 연결
export const isExist = async (event, formData, setFormData) => {
    var response = [];
    console.log(formData.email)
    try {
        response = await axios.post('http://43.202.64.233:3000/api/user/exist_check', {"email" : formData.email}, { timeout: 5000 });
        console.log(response);
    } catch (error) {
        console.error(error);
    }

    if (response.data.ok === false) {
        setFormData({ ...formData, "email_check": true });
        alert('사용 가능한 이메일입니다.');
    } else if (response.data.ok === true) {
        alert('이미 사용 중인 이메일입니다. 다른 이메일로 재시도하세요.');
    }
}

// 회원가입 axios 연결
export const joinAPI = async (event, formData) => {
    console.log(formData.email_check);
    if (!formData.email_check) {
        alert('이메일 중복확인을 해주세요.');
        return;
    }

    var response = [];

    try {
        //axios 연결
        response = await axios.post('http://43.202.64.233:3000/api/user/join', formData, { timeout: 5000 });

        if (response) {
            // 로컬 스토리지에 저장
            localStorage.setItem('AccessToken', response.data.AccessToken);
        }

    } catch (error) {
        console.error(error); // 회원가입 실패 시 서버로부터 온 에러 데이터 처리
    }




}

