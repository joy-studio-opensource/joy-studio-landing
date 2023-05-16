/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  experimental: {
    appDir: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/styles')]
  },
  distDir: 'build'
}

module.exports = nextConfig
