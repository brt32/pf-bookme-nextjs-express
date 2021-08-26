module.exports = {
  env: {
    DB_URI:
      "mongodb+srv://admin:admin123@devme.gthb5.mongodb.net/bookme?retryWrites=true&w=majority",

    STRIPE_API_KEY:
      "pk_test_51JSNtiCyzFJ33EANSqxlRumuCmuK8VAh4AinXg7UOUBsMr7LSr6M4i9atl4b0w1FW2hYmk0Ry5HJruBJbPmjIi2I00YJc2H58i",
    STRIPE_SECRET_KEY:
      "sk_test_51JSNtiCyzFJ33EANch3cbnQpoFLAm6ZexKlj2sN5rRSu44VrT6MUjBGyc3UmIWvFOzk7NDsHVCcxkEqhb4XNDv9000aIBwb5vB",

    STRIPE_WEBHOOK_SECRET: "whsec_OLnP4QHxl6FfAjmrhfyPFcrg57ytuays",

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

// stripe listen --events checkout.session.completed --forward-to localhost:3000/api/webhook
