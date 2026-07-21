---
title: 第 29 天：composables 组合式函数重构
---

# 第 29 天：composables 组合式函数重构

::: tip 阶段
**阶段：** Vue3 + TypeScript 主项目

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：composable 是逻辑复用，不是 UI 复用。
- 理解：重复分页、弹窗、权限判断可以抽出去。
- 学会：找重复逻辑。
- 验收：列出 useTable、useModal、usePermission 各负责什么。
:::

### 具体安排

- 找重复逻辑：分页、弹窗、权限、请求。
- 写今天目标：抽 3 个 composable。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：组合式函数一般命名为 `useXxx`。
- 理解：它可以返回状态和方法。
- 学会：写一个简单 composable。
- 验收：能写 `useCounter` 或 `useToggle`。
:::

### 具体安排

- 看 Vue 组合式函数：https://cn.vuejs.org/guide/reusability/composables.html
  - 必看章节：什么是组合式函数、异步状态示例、约定和最佳实践。
  - 读完要会：把列表查询逻辑抽成 `useUsers()` 这类函数。
- 看 Vue 自定义指令：https://cn.vuejs.org/guide/reusability/custom-directives.html
  - 必看章节：介绍、指令钩子、钩子参数、函数简写。
  - 读完要会：能写一个简单 `v-permission` 或 `v-focus`。
- 看 VueUse 首页：https://vueuse.org/
  - 只看：Guide、核心函数分类、`useLocalStorage`、`useDebounceFn`、`useEventListener` 示例。
  - 读完要会：知道常见组合式函数可以查 VueUse，不必重复造轮子。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：成熟库如 VueUse 也用 composable 思路。
- 理解：API 命名要短且表达场景。
- 学会：观察命名风格。
- 验收：为你的 3 个 composable 写 API 草图。
:::

### 具体安排

- 只观察 VueUse 的命名方式，如 `useXxx`。


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：页面代码应该更薄。
- 理解：抽逻辑后页面关注 UI 和业务编排。
- 学会：封装 useTable/useModal/usePermission。
- 验收：用户管理页代码减少且功能保持。
:::

### 具体安排

- 封装 `useTable`。
- 封装 `useModal`。
- 封装 `usePermission`。
- 重构用户管理页。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：打家劫舍是 dp 经典题。
- 理解：每个房子有偷或不偷两种选择。
- 学会：写状态转移。
- 验收：能说出 `dp[i] = max(dp[i-1], dp[i-2] + nums[i])`。
:::

### 具体安排

- 刷 LeetCode 198 打家劫舍：https://leetcode.cn/problems/house-robber/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。
- 刷 LeetCode 213 打家劫舍 II：https://leetcode.cn/problems/house-robber-ii/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：composable 是 Vue3 项目亮点。
- 理解：要讲清它和组件、utils 的区别。
- 学会：写复用总结。
- 验收：写完《composable、utils、组件的区别》。
:::

### 具体安排

- 写笔记：《composable、utils、组件的区别》。
- Git commit：`refactor: extract common composables`
- 当天产出：页面代码变薄。


