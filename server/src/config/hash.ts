export default {
    secretKey: process.env.SECRET_KEY || 'myUltraSecretKey',
    expiresInJWT : process.env.EXPIRE_JWT || '1h',
    saltRoundsBcrypt: parseInt(process.env.SALT_ROUNDS_BCRYPT || "10"),
    
}