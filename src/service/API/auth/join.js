import axios from 'axios';

// 중복확인 axios 연결
export const isExist = async (event, formData, setFormData) => {
    var response = [];
    console.log(formData.email)
    try {
        response = await axios.post('http://43.202.64.233:3000/api/user/exist_check', { "email": formData.email }, { timeout: 5000 });
        console.log(response);
    } catch (error) {
        console.error(error);
    }

    if (response.data.ok === false) {
        setFormData({ ...formData, "email_check": true });
        alert('사용 가능한 이메일입니다.');
    } else if (response.data.ok === true) {
        alert('이미 사용 중인 이메일입니다. 다른 이메일로 재시도하세요.');
        return;
    }
}

// 회원가입 axios 연결
export const joinAPI = async (event, formData) => {

    // 모두 입력 받았을 경우에만 회원가입 진행
    for (let key in formData) {
        if(formData[key] === ''){
            alert('유저 정보를 모두 입력하세요.');
            return;
        }   
    }
    
    // 약관 동의를 모두 할 경우에만 회원가입 진행
    if (!formData.agreeUse || !formData.agreePriv) {
        alert('약관 동의 해주세요.');
        return;
    }

    // 이메일 중복 확인을 한 경우에만 회원가입 진행
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

        alert('회원가입이 완료되었습니다.');

    } catch (error) {
        alert('회원가입 도중 오류가 발생했습니다.');
        console.error(error); // 회원가입 실패 시 서버로부터 온 에러 데이터 처리
    }




}

