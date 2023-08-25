import axios from 'axios';

<<<<<<< Updated upstream
//puppy_create axios 연결
export const createAPI = async (event, formData, birthDate, selectedOption) => {
    console.log('formData', formData);
    console.log('birthDate', birthDate);
    console.log('selectedOption', selectedOption);

    if(selectedOption === "딸"){
        selectedOption = 1
    }else if(selectedOption === "아들"){
        selectedOption = -1
    }else if(selectedOption === "중성화"){
        selectedOption = 0
    }

    

    

    formData.dog_birth = birthDate;
    formData.dog_family = birthDate;
    formData.dog_sex = selectedOption;

    const params = {
        "profile": formData.profile,
        "dog_name": formData.dog_name,
        "dog_birth": formData.dog_birth,
        "dog_family": formData.dog_family,
        "dog_breed": formData.dog_breed,
        "dog_sex": selectedOption,
        "dog_ability": formData.dog_ability,
        "dog_char": formData.dog_game,
        "dog_game": formData.dog_game,
        "dog_snack": formData.dog_snack,
        "dog_illness": formData.dog_illness,
    }

    //console.log("params", params);
    
    var response = [];

    try {

        const storedTokens = JSON.parse(localStorage.getItem('Tokens'));
        const accessToken = storedTokens.accessToken;
        console.log(accessToken);

        //axios 연결
        // axios 연결
        const response = await axios.post(
            'http://43.202.64.233:3000/api/my-puppy/create',
            params,
            {
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
                timeout: 30000
            }
        );

        // response 처리
        console.log(response.data);
=======
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
export const puppyCreateAPI = async (event, formData) => {
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
>>>>>>> Stashed changes

    } catch (error) {
        console.error(error); // 회원가입 실패 시 서버로부터 온 에러 데이터 처리
    }
}

<<<<<<< Updated upstream
export default createAPI;
=======
>>>>>>> Stashed changes
