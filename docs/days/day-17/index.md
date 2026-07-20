---
title: 第 17 天：Vue3 Composition API 系统补课
---

# 第 17 天：Vue3 Composition API 系统补课

::: tip 阶段
**阶段：** Vue3 + TypeScript 主项目

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 写今天目标：把 Vue 响应式和组件逻辑再过一遍。

09:00-12:00：

- 看 Vue 响应式基础：https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html
- 看 computed：https://cn.vuejs.org/guide/essentials/computed.html
- 看 watchers：https://cn.vuejs.org/guide/essentials/watchers.html
- 看生命周期：https://cn.vuejs.org/guide/essentials/lifecycle.html

12:00-14:00：

- 写 ref、reactive、computed、watch 对比表。

14:00-18:00：

- 把用户管理页查询逻辑拆清楚。
- 用 `computed` 做筛选结果。
- 用 `watch` 观察搜索关键字变化。

19:30-21:00：

- 刷 LeetCode 39 组合总和：https://leetcode.cn/problems/combination-sum/
- 刷 LeetCode 40 组合总和 II：https://leetcode.cn/problems/combination-sum-ii/

21:00-22:30：

- 写笔记：《ref、reactive、computed、watch》。
- Git commit：`feat: refine user filtering with composition api`
- 当天产出：用户管理页响应式逻辑更清晰。

## 学习结果和验收

08:30-09:00：

- 知道：今天把 Vue 响应式补扎实。
- 理解：项目复杂后，状态组织比页面长相更重要。
- 学会：找用户管理页状态。
- 验收：能指出哪些是数据，哪些是计算结果。

09:00-12:00：

- 知道：ref、reactive、computed、watch、生命周期。
- 理解：computed 表示派生状态，watch 表示副作用。
- 学会：选择 computed 或 watch。
- 验收：能说出“搜索结果”更适合 computed 还是 watch。

12:00-14:00：

- 知道：ref/reactive/computed/watch 各有场景。
- 理解：滥用 watch 会让逻辑变乱。
- 学会：写对比表。
- 验收：每个 API 写一个项目场景。

14:00-18:00：

- 知道：用户筛选是组合式 API 的典型练习。
- 理解：搜索关键字变化，列表展示跟着变化。
- 学会：用 computed 做筛选结果。
- 验收：用户搜索可用，代码比之前更清晰。

19:30-21:00：

- 知道：回溯要避免重复。
- 理解：组合总和需要控制 startIndex。
- 学会：写基础回溯模板。
- 验收：能说出递归参数里 startIndex 的作用。

21:00-22:30：

- 知道：Vue 高频题离不开响应式。
- 理解：要用项目例子解释 API。
- 学会：总结 Vue 响应式 API。
- 验收：写完《ref、reactive、computed、watch》。

## 页面导航

- [上一天](/days/day-16/)
- [下一天](/days/day-18/)
- [返回总览](/overview)
