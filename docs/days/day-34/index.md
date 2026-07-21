---
title: 第 34 天：部署和 README
---

# 第 34 天：部署和 README

::: tip 阶段
**阶段：** 浏览器 / 网络 / 性能 / 测试 / 部署

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：能 build 是部署前提。
- 理解：开发能跑不代表生产能构建。
- 学会：跑 `pnpm build`。
- 验收：构建成功，知道是否有 warning。
:::

### 具体安排

- 跑 `pnpm build`。
- 写今天目标：项目能部署，README 像样。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：静态部署、GitHub Pages、Vercel、README。
- 理解：SPA history 模式刷新 404 需要服务器 fallback。
- 学会：看部署文档定位配置。
- 验收：能解释刷新 404 的原因。
:::

### 具体安排

- 看 Vite 静态部署：https://cn.vitejs.dev/guide/static-deploy.html
  - 必看章节：构建应用、公共基础路径、GitHub Pages、Vercel/Netlify 只了解。
  - 读完要会：知道 `base` 配错会导致 GitHub Pages 静态资源 404。
- 看 GitHub Pages：https://docs.github.com/zh/pages
  - 必看章节：关于 GitHub Pages、配置发布源、使用 GitHub Actions 发布。
  - 读完要会：知道 Pages 的部署来源可以选择 GitHub Actions。
- 看 Vercel 文档：https://vercel.com/docs
  - 只看：Project imports、Framework presets、Environment variables、Deployments。
  - 读完要会：知道 Vercel 怎么导入 GitHub 仓库并自动部署。
- 看 GitHub README：https://docs.github.com/zh/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes
  - 必看章节：README 的作用、可包含的信息、相对链接和图片。
  - 读完要会：写清项目介绍、技术栈、启动方式、功能截图、亮点。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：README 是项目门面。
- 理解：README 不只是启动命令，还要展示设计和亮点。
- 学会：整理 README 目录。
- 验收：README 目录包含介绍、技术栈、功能、截图、设计、测试。
:::

### 具体安排

- 整理 README 目录。


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：项目说明要像简历项目一样写。
- 理解：要突出你做了什么难点，不是堆功能列表。
- 学会：完善 README。
- 验收：别人看 README 能知道项目价值和启动方式。
:::

### 具体安排

- 完善 README：
  - 项目介绍
  - 技术栈
  - 功能列表
  - 截图
  - 权限设计
  - 性能优化
  - 测试
  - 本地启动


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：模拟限时能发现真实短板。
- 理解：笔试不是无限时间慢慢想。
- 学会：60 分钟完成 1 简单 + 1 中等。
- 验收：记录用时和卡点。
:::

### 具体安排

- LeetCode 模拟 60 分钟，1 简单 + 1 中等。
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：部署问题也是面试点。
- 理解：前端路由和服务器配置有关。
- 学会：写部署笔记。
- 验收：写完《前端部署刷新 404 怎么解决》。
:::

### 具体安排

- 写笔记：《前端部署刷新 404 怎么解决》。
- Git commit：`docs: complete project readme`
- 当天产出：README v1。


