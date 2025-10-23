import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
};

const plugins = [createNextIntlPlugin()];

export default plugins.reduce((acc, next) => next(acc), nextConfig);
