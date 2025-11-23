/** @type {import('next').NextConfig} */
// Default to no basePath for local/dev to avoid 404; allow override for hosted builds.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath
};

export default nextConfig;
