---
title: 第 29 天：composables 组合式函数重构
---

# 第 29 天：composables 组合式函数重构

::: tip 阶段
**阶段：** Vue3 + TypeScript 主项目

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 找重复逻辑：分页、弹窗、权限、请求。
- 写今天目标：抽 3 个 composable。

09:00-12:00：

- 看 Vue 组合式函数：https://cn.vuejs.org/guide/reusability/composables.html
- 看 Vue 自定义指令：https://cn.vuejs.org/guide/reusability/custom-directives.html
- 看 VueUse 首页：https://vueuse.org/

12:00-14:00：

- 只观察 VueUse 的命名方式，如 `useXxx`。

14:00-18:00：

- 封装 `useTable`。
- 封装 `useModal`。
- 封装 `usePermission`。
- 重构用户管理页。

19:30-21:00：

- 刷 LeetCode 198 打家劫舍：https://leetcode.cn/problems/house-robber/
- 刷 LeetCode 213 打家劫舍 II：https://leetcode.cn/problems/house-robber-ii/

21:00-22:30：

- 写笔记：《composable、utils、组件的区别》。
- Git commit：`refactor: extract common composables`
- 当天产出：页面代码变薄。

## 学习结果和验收

08:30-09:00：

- 知道：composable 是逻辑复用，不是 UI 复用。
- 理解：重复分页、弹窗、权限判断可以抽出去。
- 学会：找重复逻辑。
- 验收：列出 useTable、useModal、usePermission 各负责什么。

09:00-12:00：

- 知道：组合式函数一般命名为 `useXxx`。
- 理解：它可以返回状态和方法。
- 学会：写一个简单 composable。
- 验收：能写 `useCounter` 或 `useToggle`。

12:00-14:00：

- 知道：成熟库如 VueUse 也用 composable 思路。
- 理解：API 命名要短且表达场景。
- 学会：观察命名风格。
- 验收：为你的 3 个 composable 写 API 草图。

14:00-18:00：

- 知道：页面代码应该更薄。
- 理解：抽逻辑后页面关注 UI 和业务编排。
- 学会：封装 useTable/useModal/usePermission。
- 验收：用户管理页代码减少且功能保持。

19:30-21:00：

- 知道：打家劫舍是 dp 经典题。
- 理解：每个房子有偷或不偷两种选择。
- 学会：写状态转移。
- 验收：能说出 `dp[i] = max(dp[i-1], dp[i-2] + nums[i])`。

21:00-22:30：

- 知道：composable 是 Vue3 项目亮点。
- 理解：要讲清它和组件、utils 的区别。
- 学会：写复用总结。
- 验收：写完《composable、utils、组件的区别》。

## 页面导航

- [上一天](/days/day-28/)
- [下一天](/days/day-30/)
- [返回总览](/overview)
