/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Cairn Partners moved to its own domain (2026-08-17). The page and its
      // assets that used to live in public/cairnpartners/ are gone; the refund
      // and cancellation terms it carried now live at /legal#refunds.
      {
        source: "/cairnpartners",
        destination: "https://www.cairnpartners.llc/",
        permanent: true,
      },
      {
        source: "/cairnpartners/:path*",
        destination: "https://www.cairnpartners.llc/",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
