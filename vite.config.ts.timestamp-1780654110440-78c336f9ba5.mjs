// vite.config.ts
import { defineConfig } from "file:///sessions/serene-busy-planck/mnt/Ripple/node_modules/vite/dist/node/index.js";
import react from "file:///sessions/serene-busy-planck/mnt/Ripple/node_modules/@vitejs/plugin-react/dist/index.js";
import dts from "file:///sessions/serene-busy-planck/mnt/Ripple/node_modules/vite-plugin-dts/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "/sessions/serene-busy-planck/mnt/Ripple";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({ include: ["src"] })
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "Ripple",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react/jsx-dev-runtime", "react-dom", "lucide-react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "lucide-react": "LucideReact"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvc2Vzc2lvbnMvc2VyZW5lLWJ1c3ktcGxhbmNrL21udC9SaXBwbGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9zZXNzaW9ucy9zZXJlbmUtYnVzeS1wbGFuY2svbW50L1JpcHBsZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vc2Vzc2lvbnMvc2VyZW5lLWJ1c3ktcGxhbmNrL21udC9SaXBwbGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgZHRzKHsgaW5jbHVkZTogWydzcmMnXSB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50cycpLFxuICAgICAgbmFtZTogJ1JpcHBsZScsXG4gICAgICBmb3JtYXRzOiBbJ2VzJywgJ2NqcyddLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBpbmRleC4ke2Zvcm1hdCA9PT0gJ2VzJyA/ICdqcycgOiAnY2pzJ31gLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QvanN4LXJ1bnRpbWUnLCAncmVhY3QvanN4LWRldi1ydW50aW1lJywgJ3JlYWN0LWRvbScsICdsdWNpZGUtcmVhY3QnXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgcmVhY3Q6ICdSZWFjdCcsXG4gICAgICAgICAgJ3JlYWN0LWRvbSc6ICdSZWFjdERPTScsXG4gICAgICAgICAgJ2x1Y2lkZS1yZWFjdCc6ICdMdWNpZGVSZWFjdCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1UyxTQUFTLG9CQUFvQjtBQUNwVSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUh4QixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQUEsRUFDMUI7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDeEMsTUFBTTtBQUFBLE1BQ04sU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLE1BQ3JCLFVBQVUsQ0FBQyxXQUFXLFNBQVMsV0FBVyxPQUFPLE9BQU8sS0FBSztBQUFBLElBQy9EO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxxQkFBcUIseUJBQXlCLGFBQWEsY0FBYztBQUFBLE1BQzdGLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxVQUNiLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
