/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: false,
  // experimental:{
  //   appDir:true,
  // },
  output:'standalone',
  trailingSlash: true,
  images: {
    domains: ["images.doc.ceo","https://www.yangdong.co:8443"]
  },
  sassOptions:{
    includePaths:[path.join(__dirname,'styles')]
  }
}

module.exports = nextConfig
