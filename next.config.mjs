/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/djatqa2lq/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "uesanqirfewyoexziswy.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
    // unoptimized: true, //we need to set this before build so that Next Image API doent cos issues in static files.
  },
  // output: "export",
};

export default nextConfig;
