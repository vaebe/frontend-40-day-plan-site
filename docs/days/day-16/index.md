---
title: 第 16 天：TS 阶段复盘和小重构
---

# 第 16 天：TS 阶段复盘和小重构

::: tip 阶段
**阶段：** TypeScript 从 0 到项目可用

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：TS 第一阶段要收口。
- 理解：现在不需要精通，但要能写业务类型。
- 学会：列出已学 TS 知识。
- 验收：写出基础类型、interface、联合类型、泛型、工具类型各一句解释。
:::

### 具体安排

- 列出你目前会的 TS：基础类型、interface、联合类型、泛型、工具类型。
- 写今天目标：把项目里明显不舒服的类型补干净。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：复习比继续上难度更重要。
- 理解：TS 报错要读，不要盲改。
- 学会：复看文档定位知识缺口。
- 验收：整理 10 个 TS 易错点。
:::

### 具体安排

- 复看 Everyday Types：https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
  - 必看章节：The primitives、Arrays、any、Type Annotations on Variables、Functions、Object Types、Union Types、Type Aliases、Interfaces、Literal Types、null and undefined。
  - 读完要会：能给变量、数组、函数、对象补基础类型，尽量不写 `any`。
- 复看 Narrowing：https://www.typescriptlang.org/docs/handbook/2/narrowing.html
  - 必看章节：`typeof`、Truthiness narrowing、Equality narrowing、`in` operator、Control flow analysis、Discriminated unions。
  - 读完要会：处理 `User | null` 前先判断，处理联合类型时先收窄。
- 复看 Vue TS：https://cn.vuejs.org/guide/typescript/composition-api.html


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：错题本适合 TS。
- 理解：很多 TS 问题会反复遇到。
- 学会：记录错误信息和原因。
- 验收：每个错点都有“错误写法/正确写法/原因”。
:::

### 具体安排

- 整理《TS 入门错题本》。
- 记录 10 个你最容易写错的点。


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：`type-check` 是 TS 项目必跑命令。
- 理解：类型检查通过才说明类型层面暂时干净。
- 学会：跑 `pnpm type-check` 和 `pnpm lint`。
- 验收：修完报错并提交。
:::

### 具体安排

- 跑 `pnpm type-check`。
- 修复类型报错。
- 跑 `pnpm lint`。
- 清理多余变量和不必要 any。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：回溯适合枚举组合、排列、子集。
- 理解：回溯就是选择、递归、撤销选择。
- 学会：写组合题。
- 验收：能画出组合题递归树。
:::

### 具体安排

- 刷 LeetCode 77 组合：https://leetcode.cn/problems/combinations/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。
- 刷 LeetCode 216 组合总和 III：https://leetcode.cn/problems/combination-sum-iii/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：第 17 天开始进入 Vue3 + TS 项目主线。
- 理解：前 16 天是在给项目打地基。
- 学会：写阶段复盘。
- 验收：写完《TypeScript 入门 16 天复盘》。
:::

### 具体安排

- 写笔记：《TypeScript 入门 16 天复盘》。
- Git commit：`refactor: clean up starter types`
- 当天产出：TS 第一阶段结束，可以进入项目主线。


