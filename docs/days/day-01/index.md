---
title: 第 1 天：环境、项目和学习节奏
---

# 第 1 天：环境、项目和学习节奏

::: tip 阶段
**阶段：** JS / CSS / 项目环境

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 打开项目目录。
- 打开你之前的 40 天计划文件。
- 写今天目标：能启动项目，知道目录结构，完成第一次自己的笔记。

09:00-12:00：

- 看 Vite 开始：https://cn.vitejs.dev/guide/
- 看 Vue 快速上手：https://cn.vuejs.org/guide/quick-start.html
- 看 Vue 单文件组件说明：https://cn.vuejs.org/guide/scaling-up/sfc.html
- 暂时不要深学 TypeScript，只知道 `.ts` 是带类型的 JavaScript，`.vue` 是 Vue 单文件组件。

12:00-14:00：

- 打开 README：`work/frontend-summer-platform/README.md`
- 午休前写 5 行：这个项目已经有哪些页面、以后要做成什么。

14:00-18:00：

- 跑项目：`pnpm dev`
- 打开 `/login`、`/`、`/users`。
- 熟悉目录：`src/api`、`src/router`、`src/stores`、`src/views`、`src/styles`。
- 修改 Dashboard 上的文案，改成你自己的暑期项目目标。

19:30-21:00：

- 看代码随想录数组理论：https://programmercarl.com/数组理论基础.html
- 刷 LeetCode 1 两数之和：https://leetcode.cn/problems/two-sum/
- 刷 LeetCode 27 移除元素：https://leetcode.cn/problems/remove-element/

21:00-22:30：

- 写笔记：《我的前端暑期项目结构》。
- Git commit：`docs: update dashboard learning goal`
- 当天产出：项目能启动，你能说出每个目录大概放什么。

## 学习结果和验收

08:30-09:00 晨间复盘：

- 知道：今天不是正式学 TS，而是先把项目跑起来。
- 理解：项目目录是你之后 40 天所有产出的载体。
- 学会：找到项目目录 `frontend-summer-platform`。
- 验收：能说出今天的目标：启动项目、熟悉目录、写第一篇笔记。

09:00-12:00 上午学习：

- 知道：Vite 是前端开发服务器和构建工具，Vue 单文件组件通常是 `.vue` 文件。
- 理解：`pnpm dev` 是开发模式，`pnpm build` 是生产构建。
- 学会：看懂 `package.json` 里的 scripts。
- 验收：能解释 `dev`、`build`、`preview` 三个命令分别干什么。

12:00-14:00 中午轻复盘：

- 知道：项目现在已经有登录页、Dashboard、用户管理页。
- 理解：README 是别人了解项目的入口，也是以后简历项目的一部分。
- 学会：用 5 句话描述这个项目要做成什么。
- 验收：写下“这个项目是什么、技术栈是什么、最后要展示什么”。

14:00-18:00 下午项目：

- 知道：`src/views` 放页面，`src/router` 放路由，`src/stores` 放状态。
- 理解：Vue 项目不是所有代码都塞一个文件，而是按职责拆目录。
- 学会：启动项目并打开 `/login`。
- 验收：你能修改 Dashboard 文案，并在浏览器里看到变化。

19:30-21:00 晚上算法：

- 知道：数组题常用遍历、哈希表、双指针。
- 理解：算法不是背答案，而是训练边界条件和代码表达。
- 学会：写出两数之和、移除元素。
- 验收：两道题能 AC，且能说出时间复杂度。

21:00-22:30 夜间输出：

- 知道：每天都要有 Git commit。
- 理解：commit 是学习轨迹，不是只有大功能才提交。
- 学会：写当天总结。
- 验收：完成笔记《我的前端暑期项目结构》并提交一次 Git。

## 页面导航

- [上一天](/overview)
- [下一天](/days/day-02/)
- [返回总览](/overview)
