const dotenv = require("dotenv");
dotenv.config();

const nextConfig = {
  reactStrictMode: true, // enabled react-strict mode
  env: {
    REACT_APP_YOUR_SERVICE_ID: process.env.REACT_APP_YOUR_SERVICE_ID,
    REACT_APP_YOUR_TEMPLATE_ID: process.env.REACT_APP_YOUR_TEMPLATE_ID,
    REACT_APP_YOUR_PUBLIC_KEY: process.env.REACT_APP_YOUR_PUBLIC_KEY,
    CONTACT_FORM_ID: process.env.CONTACT_FORM_ID,
  },
  images: {
    domains: ["i.ibb.co"],
  },
};

module.exports = nextConfig;
