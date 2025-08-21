/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CONTACT_EMAIL_FROM: process.env.CONTACT_EMAIL_FROM,
    CONTACT_EMAIL_TO: process.env.CONTACT_EMAIL_TO,
  },
}

module.exports = nextConfig
