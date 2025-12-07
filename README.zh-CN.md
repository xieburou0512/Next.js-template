# Next.js 企业级脚手架

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?logo=typescript)](https://www.typescriptlang.org)
[![Bun](https://img.shields.io/badge/Bun-1.0+-black?logo=bun)](https://bun.sh)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.18-38bdf8?logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

🚀 一个现代化、生产级的 Next.js 16 企业级开发脚手架，内置 TypeScript、多语言、PWA 支持与最佳实践。

[English](./README.md) | [简体中文](./README.zh-CN.md)

[在线 Demo](https://your-demo-url.com) |
[文档](./docs) | 
[问题反馈](https://github.com/xieburou0512/Next.js-Enterprise-Boilerplate/issues) |
[功能请求](https://github.com/xieburou0512/Next.js-Enterprise-Boilerplate/issues)

</div>

## ✨ 特性

### 核心框架
- ⚡ **Next.js 16.0.7** — 最新 App Router + Turbopack  
- ⚛️ **React 18.3** — 并发渲染、现代特性  
- 🏃 **Bun 运行时** — 超高速 JS runtime 与包管理  
- 📘 **TypeScript 5.9** — 严格类型支持  

### UI & 样式
- 🎨 **Tailwind CSS 3.4** — 实用工具类 CSS  
- ✨ **Framer Motion** — 生产级动画库  
- 📱 **响应式设计** — 移动优先策略  

### 国际化
- 🌍 **LinguiJS** — 编译时优化的现代 i18n  
- 🗣️ **多语言** — 英文 + 简体中文内置  
- 🔄 **动态路由** — 基于语言的中间件路由  

### 状态管理 & 数据
- 🔄 **SWR** — 数据获取与缓存  
- 🗄️ **Zustand** — 极简状态管理  
- 🌐 **ky** — 轻量现代 HTTP 客户端  

### 性能 & PWA
- 📦 **Serwist** — 离线缓存 Service Worker  
- 🚀 **生产构建优化** — Bundle 分析  
- ⚡ **Turbopack** — 极速编译  

### 开发体验
- 🔧 **ESLint + Prettier** — 统一代码规范  
- 🪝 **Husky + lint-staged** — Git 钩子保证质量  
- 📝 **多环境变量** — dev/test/prod  
- 🎯 **TS 路径别名** — 更干净的 imports  

---

## 📋 目录

- [快速开始](#-快速开始)
- [技术栈](#-技术栈)
- [项目结构](#-项目结构)
- [开发指南](#-开发指南)
- [国际化](#-国际化)
- [部署](#-部署)
- [贡献指南](#-贡献指南)
- [许可证](#-许可证)

---

## 🚀 快速开始

### 环境要求
- **Node.js >= 18.17.0** 或 **Bun >= 1.0**
- **Git**

### 安装

1. **克隆仓库**
```bash
git clone https://github.com/xieburou0512/Next.js-Enterprise-Boilerplate.git
cd Next.js-Enterprise-Boilerplate
