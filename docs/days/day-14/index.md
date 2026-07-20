---
title: 第 14 天：Vue 中的 TS：ref、reactive、props
---

# 第 14 天：Vue 中的 TS：ref、reactive、props

::: tip 阶段
**阶段：** TypeScript 从 0 到项目可用

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 打开 Vue TypeScript 文档。
- 写今天目标：知道 Vue 里怎么写类型。

09:00-12:00：

- 看 Vue TS 总览：https://cn.vuejs.org/guide/typescript/overview.html
- 看 Vue TS with Composition API：https://cn.vuejs.org/guide/typescript/composition-api.html
- 看 ref TS 用法：https://cn.vuejs.org/guide/typescript/composition-api.html#typing-ref
- 重点记：`ref&lt;string&gt;()`、`reactive()`、`defineProps` 类型。

12:00-14:00：

- 看 Vue 响应式基础：https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html
- 用一句话区分 ref 和 reactive。

14:00-18:00：

- 改 `LoginView.vue`。
- 给登录表单定义 `LoginForm` 类型。
- 给 `loading`、表单对象、提交函数补清晰类型。

19:30-21:00：

- 刷 LeetCode 226 翻转二叉树：https://leetcode.cn/problems/invert-binary-tree/
- 刷 LeetCode 101 对称二叉树：https://leetcode.cn/problems/symmetric-tree/

21:00-22:30：

- 写笔记：《Vue 里怎么写 TypeScript》。
- Git commit：`refactor: type login form state`
- 当天产出：登录页 TS 写法更规范。

## 学习结果和验收

08:30-09:00：

- 知道：Vue + TS 主要难在 ref、props、emit、表单状态。
- 理解：不是每个地方都要显式写类型。
- 学会：找到 Vue TS 文档。
- 验收：能说出今天重点：给 Vue 状态补类型。

09:00-12:00：

- 知道：`ref&lt;string&gt;()`、`reactive()`、`defineProps&lt;T&gt;()`。
- 理解：ref 取值要 `.value`，模板里会自动解包。
- 学会：给 ref 和 props 写类型。
- 验收：写一个带 typed props 的小组件例子。

12:00-14:00：

- 知道：ref 适合基本值，reactive 适合对象。
- 理解：选择不是绝对的，要看可读性和场景。
- 学会：写 ref/reactive 对比。
- 验收：能说出登录表单为什么可以用 reactive。

14:00-18:00：

- 知道：登录表单是练 Vue TS 的好场景。
- 理解：表单字段、loading、提交函数都能被类型约束。
- 学会：给 `LoginView.vue` 补 `LoginForm` 类型。
- 验收：`pnpm type-check` 不报错。

19:30-21:00：

- 知道：树题要先想递归终止条件。
- 理解：翻转树是交换左右子树。
- 学会：写树递归。
- 验收：能解释递归三要素：参数、终止、返回。

21:00-22:30：

- 知道：Vue TS 初学目标是业务类型清楚，不是类型体操。
- 理解：类型服务开发体验。
- 学会：总结 Vue 里最常见 TS 写法。
- 验收：写完《Vue 里怎么写 TypeScript》。

## 页面导航

- [上一天](/days/day-13/)
- [下一天](/days/day-15/)
- [返回总览](/overview)
