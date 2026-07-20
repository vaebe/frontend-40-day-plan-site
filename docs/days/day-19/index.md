---
title: 第 19 天：Vue Router 和路由守卫
---

# 第 19 天：Vue Router 和路由守卫

::: tip 阶段
**阶段：** Vue3 + TypeScript 主项目

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 打开 `src/router/index.ts`。
- 写今天目标：看懂路由守卫。

09:00-12:00：

- 看 Vue Router 入门：https://router.vuejs.org/zh/guide/
- 看 导航守卫：https://router.vuejs.org/zh/guide/advanced/navigation-guards.html
- 看 路由 meta：https://router.vuejs.org/zh/guide/advanced/meta.html
- 看 路由懒加载：https://router.vuejs.org/zh/guide/advanced/lazy-loading.html

12:00-14:00：

- 画：访问 `/users` 时，路由守卫做了什么。

14:00-18:00：

- 增加角色管理页 `/roles` 和菜单管理页 `/menus` 的空页面。
- 给路由 meta 补 `title`、`requiresAuth`、`permission`。
- 页面标题跟随路由变化。

19:30-21:00：

- 刷 LeetCode 78 子集：https://leetcode.cn/problems/subsets/
- 刷 LeetCode 90 子集 II：https://leetcode.cn/problems/subsets-ii/

21:00-22:30：

- 写笔记：《前端路由和路由守卫》。
- Git commit：`feat: add role and menu routes`
- 当天产出：项目页面结构更完整。

## 学习结果和验收

08:30-09:00：

- 知道：路由决定 URL 对应哪个页面。
- 理解：后台系统大量依赖路由和权限。
- 学会：打开路由表。
- 验收：能说出 `/users` 对应哪个组件。

09:00-12:00：

- 知道：路由表、meta、导航守卫、懒加载。
- 理解：未登录不能进后台，靠路由守卫做体验控制。
- 学会：写 `beforeEach` 基础逻辑。
- 验收：能解释未登录访问 `/users` 为什么跳 `/login`。

12:00-14:00：

- 知道：路由 meta 可以放 title、requiresAuth、permission。
- 理解：meta 是路由的附加业务信息。
- 学会：画访问流程。
- 验收：画出访问 `/users` 的守卫流程图。

14:00-18:00：

- 知道：页面可以先建空壳，再逐步补业务。
- 理解：先搭路由结构能让项目骨架清楚。
- 学会：新增 `/roles`、`/menus`。
- 验收：两个新页面能正常访问。

19:30-21:00：

- 知道：子集题也是回溯。
- 理解：收集路径的时机和组合题不同。
- 学会：写子集题。
- 验收：能解释为什么子集每个节点都要收集。

21:00-22:30：

- 知道：前端路由是 SPA 核心。
- 理解：history 模式部署时可能遇到刷新 404。
- 学会：总结路由守卫。
- 验收：写完《前端路由和路由守卫》。

## 页面导航

- [上一天](/days/day-18/)
- [下一天](/days/day-20/)
- [返回总览](/overview)
