---
title: 第 9 天：TypeScript 第一天：它到底解决什么
---

# 第 9 天：TypeScript 第一天：它到底解决什么

::: tip 阶段
**阶段：** TypeScript 从 0 到项目可用

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：TS 是带类型检查的 JS。
- 理解：TS 帮你在运行前发现低级错误。
- 学会：接受“不会 TS 很正常，今天从 0 开始”。
- 验收：能说出 TS 和 JS 的关系。
:::

### 具体安排

- 心态调整：TS 不是新语言，是给 JS 加类型检查。
- 写今天目标：知道 TS 基础类型和类型推断。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：string、number、boolean、array、any、unknown、类型推断。
- 理解：不是所有变量都要手写类型，TS 会推断。
- 学会：给变量和函数参数加基础类型。
- 验收：Playground 里写 10 个基础类型例子。
:::

### 具体安排

- 看 TypeScript Handbook Intro：https://www.typescriptlang.org/docs/handbook/intro.html
  - 必看章节：The TypeScript Handbook、How is this Handbook Structured、Get Started。
  - 读完要会：知道 TS 是给 JS 加类型检查，不是另一门完全不同的语言。
- 看 Everyday Types：https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
  - 必看章节：The primitives、Arrays、any、Type Annotations on Variables、Functions、Object Types、Union Types、Type Aliases、Interfaces、Literal Types、null and undefined。
  - 读完要会：能给变量、数组、函数、对象补基础类型，尽量不写 `any`。
- 看 TS for JS Programmers：https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
  - 必看章节：Types by Inference、Defining Types、Composing Types、Structural Type System。
  - 读完要会：知道 TS 会自动推断类型，也能用 `interface` 描述对象。
- 重点记：string、number、boolean、array、any、类型推断。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：Playground 是练 TS 的小操场。
- 理解：初学 TS 必须动手看报错，不要只看文档。
- 学会：观察类型错误提示。
- 验收：制造 3 个类型错误并解释为什么错。
:::

### 具体安排

- 打开 TypeScript Playground：https://www.typescriptlang.org/play
  - 练习方式：把上午每个类型知识点都写成 1 个最小例子，故意写错一次看报错。
  - 读完要会：能根据报错定位是哪一个变量、参数或返回值类型不对。
- 试 10 个最基础类型例子。


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：工具函数最适合练基础类型。
- 理解：函数输入输出清楚，类型就容易写。
- 学会：写 `formatDate`、`formatMoney`、`isEmpty`。
- 验收：函数参数和返回值都有类型，不靠 `any`。
:::

### 具体安排

- 在项目中新建 `src/utils/format.ts`。
- 写 `formatDate`、`formatMoney`、`isEmpty`，全部加基础类型。
- 不要用复杂泛型。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：二分查找要求有序。
- 理解：二分核心是缩小搜索区间。
- 学会：写左右边界更新。
- 验收：能解释 `left &lt;= right` 和 `left &lt; right` 的差异。
:::

### 具体安排

- 刷 LeetCode 704 二分查找：https://leetcode.cn/problems/binary-search/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。
- 刷 LeetCode 35 搜索插入位置：https://leetcode.cn/problems/search-insert-position/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：TS 第一关是不要怕报错。
- 理解：类型报错是在帮你。
- 学会：总结 TS 入门体验。
- 验收：写完《TypeScript 是什么，为什么前端要学》。
:::

### 具体安排

- 写笔记：《TypeScript 是什么，为什么前端要学》。
- Git commit：`feat: add typed format utilities`
- 当天产出：你写出第一个 TS 工具文件。


