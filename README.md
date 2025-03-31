# Next.js Enterprise Boilerplate (NEB)

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black?logo=next.js)](https://nextjs.org)
[![Bun](https://img.shields.io/badge/Bun-1.0.0-black?logo=bun)](https://bun.sh)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

一个现代化的企业级 Next.js 14 项目模板，集成了最佳实践和常用功能。

[English](./README.md) | 简体中文

</div>

## ✨ 特性

- 🚀 基于 Next.js 14 和 Bun 运行时
- 🌍 内置国际化支持 (LinguiJS)
- 🎨 现代化的 UI 组件 (Flowbite React)
- 📱 响应式设计
- 🔍 SEO 优化
- ⚡ 性能优化
- 🔒 类型安全 (TypeScript)
- 📦 完整的开发工具链
- 🧪 测试支持
- 📝 代码规范 (ESLint + Prettier)

## 🚀 快速开始

## 技术栈

- **框架**: [Next.js 14](https://nextjs.org) - React 框架
- **运行时**: [Bun](https://bun.sh) - 高性能 JavaScript 运行时
- **UI 组件**: [Flowbite React](https://flowbite-react.com) - 基于 Tailwind CSS 的组件库
- **样式**: [Tailwind CSS](https://tailwindcss.com) - 实用优先的 CSS 框架
- **状态管理**: [Zustand](https://github.com/pmndrs/zustand) - 轻量级状态管理
- **数据获取**: [SWR](https://swr.vercel.app) - React Hooks 数据获取库
- **国际化**: [LinguiJS](https://lingui.dev) - 国际化解决方案
- **动画**: [Framer Motion](https://www.framer.com/motion) - 动画库
- **工具库**: 
  - [ahooks](https://ahooks.js.org) - React Hooks 库
  - [moment](https://momentjs.com) - 日期处理
  - [clsx](https://github.com/lukeed/clsx) - 类名管理
  - [ky](https://github.com/sindresorhus/ky) - HTTP 客户端

## 开发环境设置

1. 安装 Bun（如果尚未安装）：

```bash
npm install -g bun
# 或
curl -fsSL https://bun.sh/install | bash
```

2. 安装依赖项：

```bash
bun install
```

3. 运行开发服务器：

```bash
bun dev
```

## 构建和优化

### 环境构建

```bash
# 测试环境构建
bun run build:test

# 生产环境构建
bun run build:prod
```

### 构建优化策略

1. **代码分割**
   - 使用动态导入（`dynamic import`）实现组件懒加载
   - 路由级别的代码分割
   - 大型依赖的按需加载

2. **图片优化**
   - 使用 Next.js 的 Image 组件
   - 自动的图片格式转换（WebP）
   - 响应式图片加载
   - 图片懒加载

3. **字体优化**
   - 使用 `next/font` 进行字体优化
   - 字体子集化
   - 字体预加载

4. **缓存策略**
   - 使用 SWR 进行数据缓存
   - 静态页面生成（SSG）
   - 增量静态再生成（ISR）
   - 浏览器缓存优化

5. **性能监控**
   - 使用 `@next/bundle-analyzer` 分析打包大小
   - Core Web Vitals 监控
   - 性能指标追踪

### 构建配置

```typescript
// next.config.mjs
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  // 生产环境优化
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  
  // 图片优化
  images: {
    domains: ['your-domain.com'],
    formats: ['image/avif', 'image/webp'],
  },
  
  // 国际化配置
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
  },
  
  // 实验性功能
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
}

export default withBundleAnalyzer(nextConfig)
```

### 性能优化命令

```bash
# 分析打包大小
ANALYZE=true bun run build

# 生产环境构建并压缩
bun run build:prod

# 测试环境构建
bun run build:test
```

### 优化检查清单

- [ ] 使用 `next/image` 优化图片
- [ ] 实现组件懒加载
- [ ] 配置适当的缓存策略
- [ ] 优化字体加载
- [ ] 实现代码分割
- [ ] 配置适当的预加载策略
- [ ] 优化第三方库的引入
- [ ] 实现适当的错误边界
- [ ] 配置性能监控
- [ ] 优化构建输出

## 项目结构

```
src/
├── app/                    # Next.js 14 App Router
│   ├── [lang]/            # 国际化路由
│   │   └── (frame)/       # 布局组件
│   ├── components/        # 共享组件
│   └── hooks/            # 自定义 Hooks
├── styles/               # 全局样式
└── utils/               # 工具函数
```

## 开发规范

- 使用 TypeScript 进行开发
- 使用 ESLint 和 Prettier 进行代码规范
- 使用 Husky 和 lint-staged 进行提交前检查
- 遵循 Next.js 14 的最佳实践

## 国际化

项目使用 LinguiJS 进行国际化管理：

```bash
# 提取翻译文本
bun run extract

# 测试提取
bun run extract-test
```

## 部署

项目可以部署到任何支持 Next.js 的平台，推荐使用 [Vercel](https://vercel.com) 进行部署。

### 部署优化建议

1. **CDN 配置**
   - 配置适当的 CDN 缓存策略
   - 使用 CDN 进行静态资源分发

2. **服务器配置**
   - 启用 Gzip/Brotli 压缩
   - 配置适当的缓存头
   - 启用 HTTP/2

3. **监控和日志**
   - 配置错误监控
   - 设置性能监控
   - 配置访问日志

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 许可证

[MIT](LICENSE)
