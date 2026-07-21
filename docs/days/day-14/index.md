---
title: 第 14 天：Vue 中的 TS：ref、reactive、props
---

# 第 14 天：Vue 中的 TS：ref、reactive、props

::: tip 阶段
**阶段：** TypeScript 从 0 到项目可用

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：Vue + TS 主要难在 ref、props、emit、表单状态。
- 理解：不是每个地方都要显式写类型。
- 学会：找到 Vue TS 文档。
- 验收：能说出今天重点：给 Vue 状态补类型。
:::

### 具体安排

- 打开 Vue TypeScript 文档。
- 写今天目标：知道 Vue 里怎么写类型。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：`ref&lt;string&gt;()`、`reactive()`、`defineProps&lt;T&gt;()`。
- 理解：ref 取值要 `.value`，模板里会自动解包。
- 学会：给 ref 和 props 写类型。
- 验收：写一个带 typed props 的小组件例子。
:::

### 具体安排

- 看 Vue TS 总览：https://cn.vuejs.org/guide/typescript/overview.html
  - 必看章节：项目配置、IDE 支持、`defineComponent` 与 `&lt;script setup&gt;` 的关系。
  - 读完要会：知道 Vue + TS 主要给 props、emit、ref、reactive、接口数据加类型。
- 看 Vue TS with Composition API：https://cn.vuejs.org/guide/typescript/composition-api.html
  - 必看章节：Typing Component Props、Typing Component Emits、Typing ref、Typing reactive、Typing computed。
  - 读完要会：能写 `defineProps&lt;T&gt;()`、`defineEmits&lt;T&gt;()`、`ref&lt;string&gt;()`。
- 看 ref TS 用法：https://cn.vuejs.org/guide/typescript/composition-api.html#typing-ref
  - 只看该页面的 `Typing ref` 小节，顺手看 `Typing computed`。
  - 读完要会：知道脚本里访问 ref 要 `.value`，模板里会自动解包。
- 重点记：`ref&lt;string&gt;()`、`reactive()`、`defineProps` 类型。
  - 必看章节：Props 声明、传递 prop 的细节、单向数据流、Prop 校验。
  - 读完要会：知道子组件不要直接改父组件传下来的 prop。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：ref 适合基本值，reactive 适合对象。
- 理解：选择不是绝对的，要看可读性和场景。
- 学会：写 ref/reactive 对比。
- 验收：能说出登录表单为什么可以用 reactive。
:::

### 具体安排

- 看 Vue 响应式基础：https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html
  - 必看章节：声明响应式状态、`ref()`、深层响应性、DOM 更新时机、`reactive()`、额外的 ref 解包细节。
  - 读完要会：知道什么时候用 `ref`，什么时候用 `reactive`。
- 用一句话区分 ref 和 reactive。


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：登录表单是练 Vue TS 的好场景。
- 理解：表单字段、loading、提交函数都能被类型约束。
- 学会：给 `LoginView.vue` 补 `LoginForm` 类型。
- 验收：`pnpm type-check` 不报错。
:::

### 具体安排

- 改 `LoginView.vue`。
- 给登录表单定义 `LoginForm` 类型。
  - 必看章节：基础表单、行内表单、表单校验、自定义校验规则、重置表单。
  - 读完要会：能做新增/编辑弹窗表单。
- 给 `loading`、表单对象、提交函数补清晰类型。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：树题要先想递归终止条件。
- 理解：翻转树是交换左右子树。
- 学会：写树递归。
- 验收：能解释递归三要素：参数、终止、返回。
:::

### 具体安排

- 刷 LeetCode 226 翻转二叉树：https://leetcode.cn/problems/invert-binary-tree/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。
- 刷 LeetCode 101 对称二叉树：https://leetcode.cn/problems/symmetric-tree/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：Vue TS 初学目标是业务类型清楚，不是类型体操。
- 理解：类型服务开发体验。
- 学会：总结 Vue 里最常见 TS 写法。
- 验收：写完《Vue 里怎么写 TypeScript》。
:::

### 具体安排

- 写笔记：《Vue 里怎么写 TypeScript》。
- Git commit：`refactor: type login form state`
- 当天产出：登录页 TS 写法更规范。


