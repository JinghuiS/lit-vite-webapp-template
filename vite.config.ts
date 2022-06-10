import { fileURLToPath, URL } from "url";

import { ConfigEnv, defineConfig, UserConfig } from "vite";
import Unocss from "unocss/vite";
import { presetUno, presetAttributify } from "unocss";
import legacy from "@vitejs/plugin-legacy";
// https://vitejs.dev/config/
export default defineConfig(function (viteConfig: ConfigEnv) {
  var isBuild = viteConfig.command === "build";
  return {
    base: "/",
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@shared": fileURLToPath(new URL("./src/shared", import.meta.url)),
      },
    },
    plugins: [
      Unocss({
        include: [/\.ts$/],
        presets: [presetAttributify(), presetUno()],
        inspector: true,
      }),
      isBuild &&
        legacy({
          targets: ["ie >= 11"],
          additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
          modernPolyfills: true,
          renderLegacyChunks: false,
          polyfills: true,
        }),
    ],
    build: {
      rollupOptions: {
        input: "index.html",
      },
    },
  };
});
