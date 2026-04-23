export const appEnvironment =
  process.env.NEXT_PUBLIC_APP_ENV?.trim().toLowerCase() || "production";

export const isBlogEnabled =
  process.env.NEXT_PUBLIC_ENABLE_BLOG?.trim().toLowerCase() === "true";

