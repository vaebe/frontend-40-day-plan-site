---
title: 第 17 天：Vue3 Composition API 系统补课
---

# 第 17 天：Vue3 Composition API 系统补课

::: tip 阶段
**阶段：** Vue3 + TypeScript 主项目

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：今天把 Vue 响应式补扎实。
- 理解：项目复杂后，状态组织比页面长相更重要。
- 学会：找用户管理页状态。
- 验收：能指出哪些是数据，哪些是计算结果。
:::

### 具体安排

- 写今天目标：把 Vue 响应式和组件逻辑再过一遍。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：ref、reactive、computed、watch、生命周期。
- 理解：computed 表示派生状态，watch 表示副作用。
- 学会：选择 computed 或 watch。
- 验收：能说出“搜索结果”更适合 computed 还是 watch。
:::

### 具体安排

- 看 Vue 响应式基础：https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html
  - 必看章节：声明响应式状态、`ref()`、深层响应性、DOM 更新时机、`reactive()`、额外的 ref 解包细节。
  - 读完要会：知道什么时候用 `ref`，什么时候用 `reactive`。
- 看 computed：https://cn.vuejs.org/guide/essentials/computed.html
  - 必看章节：基础示例、计算属性缓存、可写计算属性先略读。
  - 读完要会：把由状态计算出来的显示值放进 `computed`。
- 看 watchers：https://cn.vuejs.org/guide/essentials/watchers.html
  - 必看章节：基本示例、侦听数据源、深层侦听器、即时回调、`watchEffect`。
  - 读完要会：知道副作用逻辑用 watch，不要滥用 computed。
- 看生命周期：https://cn.vuejs.org/guide/essentials/lifecycle.html
  - 必看章节：注册周期钩子、生命周期图示。
  - 读完要会：知道请求初始数据一般放在 `onMounted` 或路由进入后的逻辑里。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：ref/reactive/computed/watch 各有场景。
- 理解：滥用 watch 会让逻辑变乱。
- 学会：写对比表。
- 验收：每个 API 写一个项目场景。
:::

### 具体安排

- 写 ref、reactive、computed、watch 对比表。
  - 必看章节：基础示例、计算属性缓存、可写计算属性先略读。
  - 读完要会：把由状态计算出来的显示值放进 `computed`。


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：用户筛选是组合式 API 的典型练习。
- 理解：搜索关键字变化，列表展示跟着变化。
- 学会：用 computed 做筛选结果。
- 验收：用户搜索可用，代码比之前更清晰。
:::

### 具体安排

- 把用户管理页查询逻辑拆清楚。
- 用 `computed` 做筛选结果。
  - 必看章节：基础示例、计算属性缓存、可写计算属性先略读。
  - 读完要会：把由状态计算出来的显示值放进 `computed`。
- 用 `watch` 观察搜索关键字变化。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：回溯要避免重复。
- 理解：组合总和需要控制 startIndex。
- 学会：写基础回溯模板。
- 验收：能说出递归参数里 startIndex 的作用。
:::

### 具体安排

- 刷 LeetCode 39 组合总和：https://leetcode.cn/problems/combination-sum/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。
- 刷 LeetCode 40 组合总和 II：https://leetcode.cn/problems/combination-sum-ii/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：Vue 高频题离不开响应式。
- 理解：要用项目例子解释 API。
- 学会：总结 Vue 响应式 API。
- 验收：写完《ref、reactive、computed、watch》。
:::

### 具体安排

- 写笔记：《ref、reactive、computed、watch》。
  - 必看章节：基础示例、计算属性缓存、可写计算属性先略读。
  - 读完要会：把由状态计算出来的显示值放进 `computed`。
- Git commit：`feat: refine user filtering with composition api`
- 当天产出：用户管理页响应式逻辑更清晰。


