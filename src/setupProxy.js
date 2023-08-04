const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://43.202.64.233:3000/api/user/join', // 백엔드 서버 주소로 설정
            changeOrigin: true, // 요청 도메인을 변경하도록 설정 (필요시)
            // 다른 필요한 옵션들도 추가할 수 있습니다.
        })
    );
};