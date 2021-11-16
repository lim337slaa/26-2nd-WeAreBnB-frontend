export const REDIRECT_URI = 'http://localhost:3000/oauth';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
//REACT_APP_CLIENT_ID=4932ea337af1b130bd5791b022376646
