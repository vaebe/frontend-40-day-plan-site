---
title: 第 19 天：Vue Router 和路由守卫
---

# 第 19 天：Vue Router 和路由守卫

::: tip 阶段
**阶段：** Vue3 + TypeScript 主项目

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：路由决定 URL 对应哪个页面。
- 理解：后台系统大量依赖路由和权限。
- 学会：打开路由表。
- 验收：能说出 `/users` 对应哪个组件。
:::

### 具体安排

- 打开 `src/router/index.ts`。
- 写今天目标：看懂路由守卫。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：路由表、meta、导航守卫、懒加载。
- 理解：未登录不能进后台，靠路由守卫做体验控制。
- 学会：写 `beforeEach` 基础逻辑。
- 验收：能解释未登录访问 `/users` 为什么跳 `/login`。
:::

### 具体安排

- 看 Vue Router 入门：https://router.vuejs.org/zh/guide/
  - 必看章节：安装、创建 router 实例、注册插件、`RouterLink`、`RouterView`、动态路由匹配。
  - 读完要会：能从 URL 追到哪个页面组件被渲染。
- 看 导航守卫：https://router.vuejs.org/zh/guide/advanced/navigation-guards.html
  - 必看章节：全局前置守卫、可选的第三个参数、全局解析守卫先略读。
  - 读完要会：能写登录鉴权守卫。
- 看 路由 meta：https://router.vuejs.org/zh/guide/advanced/meta.html
  - 必看章节：路由元信息、TypeScript 扩展 RouteMeta。
  - 读完要会：能用 `meta.requiresAuth` 或 `meta.roles` 控制权限。
- 看 路由懒加载：https://router.vuejs.org/zh/guide/advanced/lazy-loading.html
  - 必看章节：把组件改成动态导入、把组件按组打包先略读。
  - 读完要会：知道 `() =&gt; import(...)` 为什么能减少首屏包体积。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：路由 meta 可以放 title、requiresAuth、permission。
- 理解：meta 是路由的附加业务信息。
- 学会：画访问流程。
- 验收：画出访问 `/users` 的守卫流程图。
:::

### 具体安排

- 画：访问 `/users` 时，路由守卫做了什么。


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：页面可以先建空壳，再逐步补业务。
- 理解：先搭路由结构能让项目骨架清楚。
- 学会：新增 `/roles`、`/menus`。
- 验收：两个新页面能正常访问。
:::

### 具体安排

- 增加角色管理页 `/roles` 和菜单管理页 `/menus` 的空页面。
- 给路由 meta 补 `title`、`requiresAuth`、`permission`。
  - 必看章节：路由元信息、TypeScript 扩展 RouteMeta。
  - 读完要会：能用 `meta.requiresAuth` 或 `meta.roles` 控制权限。
- 页面标题跟随路由变化。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：子集题也是回溯。
- 理解：收集路径的时机和组合题不同。
- 学会：写子集题。
- 验收：能解释为什么子集每个节点都要收集。
:::

### 具体安排

- 刷 LeetCode 78 子集：https://leetcode.cn/problems/subsets/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。
- 刷 LeetCode 90 子集 II：https://leetcode.cn/problems/subsets-ii/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：前端路由是 SPA 核心。
- 理解：history 模式部署时可能遇到刷新 404。
- 学会：总结路由守卫。
- 验收：写完《前端路由和路由守卫》。
:::

### 具体安排

- 写笔记：《前端路由和路由守卫》。
- Git commit：`feat: add role and menu routes`
- 当天产出：项目页面结构更完整。


