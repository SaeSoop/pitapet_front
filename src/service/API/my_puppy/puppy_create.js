import axios from 'axios';

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

    formData.dog_birth = "birthDate";
    formData.dog_family = "birthDate";
    formData.dog_sex = selectedOption;

    //console.log("params", params);
    
    var response = [];

    

    try {

        const storedTokens = JSON.parse(localStorage.getItem('Tokens'));
        const accessToken = storedTokens.accessToken;
        const refreshToken = storedTokens.RefreshToken

        console.log(accessToken);
        
        const config = {
            headers: { 
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json',
            }
        };
        
        console.log(config);
        const bodyParameters = {
            profile: formData.profile,
            dog_name: formData.dog_name,
            dog_birth: formData.dog_birth,
            dog_family: formData.dog_family,
            dog_breed: formData.dog_breed,
            dog_sex: selectedOption,
            dog_ability: formData.dog_ability,
            dog_char: formData.dog_game,
            dog_game: formData.dog_game,
            dog_snack: formData.dog_snack,
            dog_illness: formData.dog_illness,
        };
        

        //axios 연결
        // axios 연결
        await axios.post(
            'http://43.202.64.233:3000/api/my-puppy/create',
            bodyParameters,
            config
        ).then(console.log).catch(console.log);

        // response 처리
        //console.log(response.data);

    } catch (error) {
        console.error(error); // 회원가입 실패 시 서버로부터 온 에러 데이터 처리
    }
}

export default createAPI;