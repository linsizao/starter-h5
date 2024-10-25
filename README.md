# Vue 3 + Vite 移动端项目模板

这是一个使用 Vue 3 和 Vite 构建的项目模板,集成了多个实用插件,旨在帮助您快速开始开发。

## 特性

- ⚡️ [Vue 3](https://v3.vuejs.org/), [Vite](https://vitejs.dev/), [pnpm](https://pnpm.io/), [ESBuild](https://esbuild.github.io/) - 快速构建
- 📦 [组件自动化加载](https://github.com/antfu/unplugin-vue-components)
- 📑 [布局系统](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等,无需导入
- 🍍 [使用 Pinia 的状态管理](https://pinia.esm.dev/) - 直观简单的状态管理
- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎
- 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons)
- 🌍 [I18n 国际化开箱即用](https://github.com/intlify/vue-i18n-next)
- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)
- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等,无需导入
- 🦾 [TypeScript](https://www.typescriptlang.org/), 提供强大的类型检查和智能提示,增强代码的可靠性和开发效率

## 预配置

### UI 框架

- [UnoCSS](https://github.com/antfu/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

### Icons

- [Iconify](https://iconify.design) - 使用任意的图标集,浏览: [🔍Icônes](https://icones.netlify.app/)
- [UnoCSS 的纯 CSS 图标方案](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### 插件

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`unplugin-vue-router`](https://github.com/posva/unplugin-vue-router) - 以文件系统为基础的路由
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等,无需导入
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 自动加载组件
- [`unplugin-vue-macros`](https://github.com/sxzz/unplugin-vue-macros) - 探索并扩展更多的宏和语法糖到 Vue
- [VueUse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集
- [`vite-plugin-vue-devtools`](https://github.com/webfansplz/vite-plugin-vue-devtools) - 旨在增强Vue开发者体验的Vite插件

### 编码风格

- 使用 Composition API 地 [`<script setup>` SFC 语法](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) 配置为 [@antfu/eslint-config](https://github.com/antfu/eslint-config), 单引号, 无分号.

### 开发工具

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - 快, 节省磁盘空间的包管理器
- [VS Code 扩展](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - 自动启动 Vite 服务器
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE 支持
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - 图标内联显示和自动补全
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 项目脚本

### 安装依赖

```sh
pnpm install
```

### 编译和热重载开发

```sh
pnpm dev
```

### 编译打包

```sh
pnpm build
```

### eslint 校验 [ESLint](https://eslint.org/)

```sh
pnpm lint
```
