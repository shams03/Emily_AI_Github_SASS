// /**
//  * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
//  * for Docker builds.
//  */
// import "./src/env.js";

// /** @type {import("next").NextConfig} */
// const config = {};

// export default config;
// ----------------------
// Import path for resolving the alias
import path from "path";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
import "./src/env.js";

// Use import.meta.url to get the directory path equivalent to __dirname
const __dirname = path.dirname(new URL(import.meta.url).pathname);

/** @type {import("next").NextConfig} */
const config = {
  webpack: (config) => {
    // Add custom alias for `@` to resolve to `src/`
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};

// Use ES Module export for the config
export default config;
