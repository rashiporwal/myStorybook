import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(basePath ? { basePath } : {}),
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../.."),
  },
};

export default nextConfig;
