export const configuration = () => ({
    env: process.env.NODE_ENV,
    port: parseInt(process.env.SERVER_PORT, 10) || 3001,
     jwt: {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRES_IN,
    },
    db:{
        type:process.env.DB_TYPE,
        host:process.env.DB_HOST,
        port:process.env.DB_PORT,
        name:process.env.DB_NAME,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD
    }
});