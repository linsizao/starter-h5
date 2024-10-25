// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/personal/starter-h5/node_modules/.pnpm/vite@5.3.4_@types+node@20.14.11_sass@1.77.8/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/personal/starter-h5/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.4_@types+node@20.14.11_sass@1.77.8__vue@3.4.33_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/personal/starter-h5/node_modules/.pnpm/unplugin-auto-import@0.18.3_@vueuse+core@11.1.0_vue@3.4.33_typescript@5.4.5___rollup@4.19.0/node_modules/unplugin-auto-import/dist/vite.js";
import VueRouter from "file:///D:/personal/starter-h5/node_modules/.pnpm/unplugin-vue-router@0.10.8_rollup@4.19.0_vue-router@4.4.5_vue@3.4.33_typescript@5.4.5___vue@3.4.33_typescript@5.4.5_/node_modules/unplugin-vue-router/dist/vite.js";
import { VueRouterAutoImports } from "file:///D:/personal/starter-h5/node_modules/.pnpm/unplugin-vue-router@0.10.8_rollup@4.19.0_vue-router@4.4.5_vue@3.4.33_typescript@5.4.5___vue@3.4.33_typescript@5.4.5_/node_modules/unplugin-vue-router/dist/index.js";
import Pages from "file:///D:/personal/starter-h5/node_modules/.pnpm/vite-plugin-pages@0.32.3_@vue+compiler-sfc@3.5.12_vite@5.3.4_@types+node@20.14.11_sass@1.77.8_nwcvxgj7xxonowfn5fds3rzkve/node_modules/vite-plugin-pages/dist/index.js";
import Layouts from "file:///D:/personal/starter-h5/node_modules/.pnpm/vite-plugin-vue-layouts@0.11.0_vite@5.3.4_@types+node@20.14.11_sass@1.77.8__vue-router@4.4.5__pr6apzgwgawjoubjawnnxxg5yq/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import UnoCSS from "file:///D:/personal/starter-h5/node_modules/.pnpm/unocss@0.63.6_postcss@8.4.47_rollup@4.19.0_typescript@5.4.5_vite@5.3.4_@types+node@20.14.11_sass@1.77.8_/node_modules/unocss/dist/vite.mjs";
import { presetUno, presetAttributify, presetIcons } from "file:///D:/personal/starter-h5/node_modules/.pnpm/unocss@0.63.6_postcss@8.4.47_rollup@4.19.0_typescript@5.4.5_vite@5.3.4_@types+node@20.14.11_sass@1.77.8_/node_modules/unocss/dist/index.mjs";
import VueDevTools from "file:///D:/personal/starter-h5/node_modules/.pnpm/vite-plugin-vue-devtools@7.5.3_rollup@4.19.0_vite@5.3.4_@types+node@20.14.11_sass@1.77.8__vue@3.4.33_typescript@5.4.5_/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/personal/starter-h5/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    VueRouter({
      extensions: [".vue"],
      dts: "src/typed-router.d.ts"
    }),
    Pages(),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "@vueuse/core",
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          "vue-router/auto": ["useLink"]
        }
      ],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/stores"],
      vueTemplate: true
    }),
    UnoCSS({
      presets: [presetUno(), presetAttributify(), presetIcons()]
    }),
    vue(),
    VueDevTools()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  server: {
    port: 9527,
    proxy: {
      "/api": {
        // 免费的在线REST API
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwZXJzb25hbFxcXFxzdGFydGVyLWg1XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxwZXJzb25hbFxcXFxzdGFydGVyLWg1XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9wZXJzb25hbC9zdGFydGVyLWg1L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXIvdml0ZSdcclxuaW1wb3J0IHsgVnVlUm91dGVyQXV0b0ltcG9ydHMgfSBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyJ1xyXG5pbXBvcnQgUGFnZXMgZnJvbSAndml0ZS1wbHVnaW4tcGFnZXMnXHJcbmltcG9ydCBMYXlvdXRzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzJ1xyXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xyXG5pbXBvcnQgeyBwcmVzZXRVbm8sIHByZXNldEF0dHJpYnV0aWZ5LCBwcmVzZXRJY29ucyB9IGZyb20gJ3Vub2NzcydcclxuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgVnVlUm91dGVyKHtcclxuICAgICAgZXh0ZW5zaW9uczogWycudnVlJ10sXHJcbiAgICAgIGR0czogJ3NyYy90eXBlZC1yb3V0ZXIuZC50cydcclxuICAgIH0pLFxyXG5cclxuICAgIFBhZ2VzKCksXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0pvaG5DYW1waW9uSnIvdml0ZS1wbHVnaW4tdnVlLWxheW91dHNcclxuICAgIExheW91dHMoKSxcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tYXV0by1pbXBvcnRcclxuICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgJ3Z1ZScsXHJcbiAgICAgICAgJ3Z1ZS1yb3V0ZXInLFxyXG4gICAgICAgICdAdnVldXNlL2NvcmUnLFxyXG4gICAgICAgIFZ1ZVJvdXRlckF1dG9JbXBvcnRzLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC8vIGFkZCBhbnkgb3RoZXIgaW1wb3J0cyB5b3Ugd2VyZSByZWx5aW5nIG9uXHJcbiAgICAgICAgICAndnVlLXJvdXRlci9hdXRvJzogWyd1c2VMaW5rJ11cclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGR0czogJ3NyYy9hdXRvLWltcG9ydHMuZC50cycsXHJcbiAgICAgIGRpcnM6IFsnc3JjL3N0b3JlcyddLFxyXG4gICAgICB2dWVUZW1wbGF0ZTogdHJ1ZVxyXG4gICAgfSksXHJcblxyXG4gICAgVW5vQ1NTKHtcclxuICAgICAgcHJlc2V0czogW3ByZXNldFVubygpLCBwcmVzZXRBdHRyaWJ1dGlmeSgpLCBwcmVzZXRJY29ucygpXVxyXG4gICAgfSksXHJcbiAgICB2dWUoKSxcclxuXHJcbiAgICBWdWVEZXZUb29scygpXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiA5NTI3LFxyXG4gICAgcHJveHk6IHtcclxuICAgICAgJy9hcGknOiB7XHJcbiAgICAgICAgLy8gXHU1MTREXHU4RDM5XHU3Njg0XHU1NzI4XHU3RUJGUkVTVCBBUElcclxuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbScsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUCxTQUFTLGVBQWUsV0FBVztBQUM3UixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxlQUFlO0FBQ3RCLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sV0FBVztBQUNsQixPQUFPLGFBQWE7QUFDcEIsT0FBTyxZQUFZO0FBQ25CLFNBQVMsV0FBVyxtQkFBbUIsbUJBQW1CO0FBQzFELE9BQU8saUJBQWlCO0FBVmlJLElBQU0sMkNBQTJDO0FBYTFNLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLFVBQVU7QUFBQSxNQUNSLFlBQVksQ0FBQyxNQUFNO0FBQUEsTUFDbkIsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBLElBRUQsTUFBTTtBQUFBO0FBQUEsSUFHTixRQUFRO0FBQUE7QUFBQSxJQUdSLFdBQVc7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBO0FBQUEsVUFFRSxtQkFBbUIsQ0FBQyxTQUFTO0FBQUEsUUFDL0I7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsTUFDTCxNQUFNLENBQUMsWUFBWTtBQUFBLE1BQ25CLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQSxJQUVELE9BQU87QUFBQSxNQUNMLFNBQVMsQ0FBQyxVQUFVLEdBQUcsa0JBQWtCLEdBQUcsWUFBWSxDQUFDO0FBQUEsSUFDM0QsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLElBRUosWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUE7QUFBQSxRQUVOLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxNQUM5QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
