---
title: 第 20 天：Pinia 状态管理
---

# 第 20 天：Pinia 状态管理

::: tip 阶段
**阶段：** Vue3 + TypeScript 主项目

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：store 放跨页面共享状态。
- 理解：不是所有变量都该放 store。
- 学会：判断 token、用户信息适合放 store。
- 验收：能列出 userStore 里有什么。
:::

### 具体安排

- 打开 `src/stores/user.ts`。
- 写今天目标：知道 token、用户信息、权限为什么放 store。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：state、getter、action 的作用。
- 理解：action 放修改状态和异步逻辑。
- 学会：定义一个 Pinia store。
- 验收：能写一个简单 counter store。
:::

### 具体安排

- 看 Pinia 介绍：https://pinia.vuejs.org/zh/introduction.html
  - 必看章节：为什么使用 Pinia、基础示例、Devtools 支持。
  - 读完要会：知道 Pinia 适合存登录用户、权限、跨页面共享状态。
- 看 定义 Store：https://pinia.vuejs.org/zh/core-concepts/
  - 必看章节：Option Store、Setup Store、Store 里的 state/getters/actions。
  - 读完要会：能定义一个 `useUserStore`。
- 看 State：https://pinia.vuejs.org/zh/core-concepts/state.html
  - 必看章节：访问 state、重置 state、修改 state、订阅 state。
  - 读完要会：知道 state 是 store 的数据源。
- 看 Actions：https://pinia.vuejs.org/zh/core-concepts/actions.html
  - 必看章节：基础 action、异步 action、访问其他 store。
  - 读完要会：把登录请求放到 action 里。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：getter 是基于 state 的派生数据。
- 理解：组件不应重复计算全局派生状态。
- 学会：写 state/getter/action 对比。
- 验收：每个概念写一个项目例子。
:::

### 具体安排

- 看 Getters：https://pinia.vuejs.org/zh/core-concepts/getters.html
  - 必看章节：基础 getter、访问其他 getter、给 getter 传参数。
  - 读完要会：把“是否已登录”“是否有权限”写成 getter。
- 写 state/getter/action 对比。


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：权限码和菜单也属于共享状态。
- 理解：多个页面都可能用权限判断。
- 学会：新增 `permissionStore`。
- 验收：Dashboard 能显示当前用户信息或权限信息。
:::

### 具体安排

- 新增 `permissionStore`。
- 保存菜单、权限码。
- Dashboard 显示当前用户信息。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：贪心每步选局部最优。
- 理解：不是所有题都能贪心，要能证明。
- 学会：写简单贪心。
- 验收：能解释分发饼干的排序思路。
:::

### 具体安排

- 刷 LeetCode 455 分发饼干：https://leetcode.cn/problems/assign-cookies/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。
- 刷 LeetCode 376 摆动序列：https://leetcode.cn/problems/wiggle-subsequence/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：Pinia 是 Vue3 常用状态管理。
- 理解：store 让跨组件共享状态更稳定。
- 学会：总结使用场景。
- 验收：写完《什么时候需要 Pinia》。
:::

### 具体安排

- 写笔记：《什么时候需要 Pinia》。
- Git commit：`feat: add permission store`
- 当天产出：状态管理分层更清楚。
  - 必看章节：Reacting to Input with State、Choosing the State Structure、Sharing State Between Components。
  - 读完要会：能对比 Vue props/emit 和 React props/state。


