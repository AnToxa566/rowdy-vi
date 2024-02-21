import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ru", "uk"],
  defaultLocale: "uk",
});

export const config = {
  matcher: ["/", "/(en|ru|uk)/:path*"],
};
