module.exports = {
    
    secretKey: process.env.SECRET_KEY || 'myUltraSecretKey',
    expiresInJWT : process.env.EXPIRE_JWT || '1h',
    expiresInCookie: process.env.EXPIRE_COOKIE ||  24 * 60 * 60 * 1000, // 24 hours
    nameCookie :  process.env.NAME_COOKIE || 'token',
    cookieSecretKey: process.env.COOKIE_SECRET_KEY || 'cookieSecretKey',

}