module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8631c6085f6aeb6ba62f4e4d1feabd33'),
  },
});
