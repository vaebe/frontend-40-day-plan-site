---
title: 第 20 天：Pinia 状态管理
---

# 第 20 天：Pinia 状态管理

::: tip 阶段
**阶段：** Vue3 + TypeScript 主项目

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 打开 `src/stores/user.ts`。
- 写今天目标：知道 token、用户信息、权限为什么放 store。

09:00-12:00：

- 看 Pinia 介绍：https://pinia.vuejs.org/zh/introduction.html
- 看 定义 Store：https://pinia.vuejs.org/zh/core-concepts/
- 看 State：https://pinia.vuejs.org/zh/core-concepts/state.html
- 看 Actions：https://pinia.vuejs.org/zh/core-concepts/actions.html

12:00-14:00：

- 看 Getters：https://pinia.vuejs.org/zh/core-concepts/getters.html
- 写 state/getter/action 对比。

14:00-18:00：

- 新增 `permissionStore`。
- 保存菜单、权限码。
- Dashboard 显示当前用户信息。

19:30-21:00：

- 刷 LeetCode 455 分发饼干：https://leetcode.cn/problems/assign-cookies/
- 刷 LeetCode 376 摆动序列：https://leetcode.cn/problems/wiggle-subsequence/

21:00-22:30：

- 写笔记：《什么时候需要 Pinia》。
- Git commit：`feat: add permission store`
- 当天产出：状态管理分层更清楚。

## 学习结果和验收

08:30-09:00：

- 知道：store 放跨页面共享状态。
- 理解：不是所有变量都该放 store。
- 学会：判断 token、用户信息适合放 store。
- 验收：能列出 userStore 里有什么。

09:00-12:00：

- 知道：state、getter、action 的作用。
- 理解：action 放修改状态和异步逻辑。
- 学会：定义一个 Pinia store。
- 验收：能写一个简单 counter store。

12:00-14:00：

- 知道：getter 是基于 state 的派生数据。
- 理解：组件不应重复计算全局派生状态。
- 学会：写 state/getter/action 对比。
- 验收：每个概念写一个项目例子。

14:00-18:00：

- 知道：权限码和菜单也属于共享状态。
- 理解：多个页面都可能用权限判断。
- 学会：新增 `permissionStore`。
- 验收：Dashboard 能显示当前用户信息或权限信息。

19:30-21:00：

- 知道：贪心每步选局部最优。
- 理解：不是所有题都能贪心，要能证明。
- 学会：写简单贪心。
- 验收：能解释分发饼干的排序思路。

21:00-22:30：

- 知道：Pinia 是 Vue3 常用状态管理。
- 理解：store 让跨组件共享状态更稳定。
- 学会：总结使用场景。
- 验收：写完《什么时候需要 Pinia》。

## 页面导航

- [上一天](/days/day-19/)
- [下一天](/days/day-21/)
- [返回总览](/overview)
