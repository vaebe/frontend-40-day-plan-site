---
title: 第 38 天：浏览器、网络、性能复盘
---

# 第 38 天：浏览器、网络、性能复盘

::: tip 阶段
**阶段：** 面试 / 简历 / 投递

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：浏览器网络性能是前端硬基础。
- 理解：这部分能区分“会写页面”和“懂前端”。
- 学会：列复盘主题。
- 验收：列出首屏、跨域、缓存、鉴权四大主题。
:::

### 具体安排

- 写今天目标：能讲首屏慢、跨域、缓存、鉴权。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：HTTP、CORS、缓存、Cookie。
- 理解：跨域和缓存要能结合 Network 面板讲。
- 学会：回答网络高频题。
- 验收：能讲清 CORS 预检请求是什么。
:::

### 具体安排

- 复看 MDN HTTP：https://developer.mozilla.org/zh-CN/docs/Web/HTTP
  - 这是总入口，不要求通读。只进入今天任务点相关的小节，别陷进参考文档海里。
  - 读完要会：能知道以后遇到 API、属性、语法细节时该回哪里查。
- 复看 CORS：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Guides/CORS
  - 必看章节：什么请求需要 CORS、预检请求、简单请求、凭据请求。
  - 读完要会：知道跨域是浏览器策略，不是 axios 自己的问题。
- 复看 HTTP 缓存：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Guides/Caching
  - 必看章节：缓存类型、Cache-Control、验证响应、强缓存和协商缓存。
  - 读完要会：能解释 `Cache-Control`、`ETag`、`Last-Modified`。
- 复看 Cookie：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Guides/Cookies
  - 必看章节：创建 Cookie、生命周期、限制访问、SameSite。
  - 读完要会：能解释 `HttpOnly`、`Secure`、`SameSite`。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：项目里的静态资源和接口都能在 Network 看到。
- 理解：真实排查要看请求状态和响应头。
- 学会：观察自己的项目请求。
- 验收：截图或记录 3 个请求信息。
:::

### 具体安排

- 打开项目 Network 面板，看登录和静态资源加载。


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：性能优化要先定位问题。
- 理解：首屏慢可能是资源大、请求慢、渲染慢、JS 执行慢。
- 学会：整理 25 个问答。
- 验收：能完整回答“首屏慢怎么排查”。
:::

### 具体安排

- 复看 web.dev 性能：https://web.dev/learn/performance
  - 必看章节：Why performance matters、HTML performance features、CSS performance features、JavaScript performance features、Images、Lazy loading。
  - 读完要会：能说出 LCP/INP/CLS 影响什么体验。
- 整理 25 个浏览器、网络、性能问答。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：限时模拟是投递前必要训练。
- 理解：时间压力下暴露的问题最真实。
- 学会：60 分钟算法模拟。
- 验收：记录结果和卡点。
:::

### 具体安排

- 算法模拟 60 分钟。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：网络性能回答要有排查路径。
- 理解：不要只背概念，要讲工具和步骤。
- 学会：写自答版。
- 验收：完成《浏览器 + 网络 + 性能面试自答版》。
:::

### 具体安排

- 写《浏览器 + 网络 + 性能面试自答版》。
- 当天产出：25 问 25 答。


