/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["randomuser.me", "i.pinimg.com", "media.licdn.com"] },

  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    }
  }
};



export default nextConfig;
