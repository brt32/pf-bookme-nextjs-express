module.exports = {
  env: {
    DB_URI:
      "mongodb+srv://admin:admin123@devme.gthb5.mongodb.net/bookme?retryWrites=true&w=majority",
    CLOUDINARY_CLOUD_NAME: "dmwslghlx",
    CLOUDINARY_API_KEY: "629549543853995",
    CLOUDINARY_API_SECRET: "ips8NfFsW9L5511GvV4oMi4pR44",

    SMTP_HOST: "smtp.mailtrap.io",
    SMTP_PORT: "2525",
    SMTP_USER: "29e1aa759bf20a",
    SMTP_PASSWORD: "9498a617618580",
    SMTP_FROM_NAME: "BookMe",
    SMTP_FROM_EMAIL: "noreply@bookme.com",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  reactStrictMode: true,
};
