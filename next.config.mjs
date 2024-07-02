import plugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withNextIntl = plugin("./i18n.ts");

export default withNextIntl(nextConfig);
