/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "htsfarms.ng",
        port: "",
        pathname: "/wp-content/uploads/2024/07/Infrared-Thermometer.jpg",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**",
        // pathname: "/images?q=tbn:ANd9GcT1l9j9WlQleBmv2psIHGF1DnC11BF1rsDynA&s",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname:
          "/a/ACg8ocL4wB5DCd2rwnOSTYwSzl3kngQTcEJjPKbNSRAvd76YXv-8Fw=s96-c",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/images?q=tbn:ANd9GcQMDiFokl-_2J0JdWWrRB_BKyCV45vZzhMxiw&s",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/djatqa2lq/image/upload/**",
      },
    ],
    // unoptimized: true, //we need to set this before build so that Next Image API doent cos issues in static files.
  },
  // output: "export",
};

export default nextConfig;
