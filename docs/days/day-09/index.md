---
title: 第 9 天：TypeScript 第一天：它到底解决什么
---

# 第 9 天：TypeScript 第一天：它到底解决什么

::: tip 阶段
**阶段：** TypeScript 从 0 到项目可用

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 心态调整：TS 不是新语言，是给 JS 加类型检查。
- 写今天目标：知道 TS 基础类型和类型推断。

09:00-12:00：

- 看 TypeScript Handbook Intro：https://www.typescriptlang.org/docs/handbook/intro.html
- 看 Everyday Types：https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
- 看 TS for JS Programmers：https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
- 重点记：string、number、boolean、array、any、类型推断。

12:00-14:00：

- 打开 TypeScript Playground：https://www.typescriptlang.org/play
- 试 10 个最基础类型例子。

14:00-18:00：

- 在项目中新建 `src/utils/format.ts`。
- 写 `formatDate`、`formatMoney`、`isEmpty`，全部加基础类型。
- 不要用复杂泛型。

19:30-21:00：

- 刷 LeetCode 704 二分查找：https://leetcode.cn/problems/binary-search/
- 刷 LeetCode 35 搜索插入位置：https://leetcode.cn/problems/search-insert-position/

21:00-22:30：

- 写笔记：《TypeScript 是什么，为什么前端要学》。
- Git commit：`feat: add typed format utilities`
- 当天产出：你写出第一个 TS 工具文件。

## 学习结果和验收

08:30-09:00：

- 知道：TS 是带类型检查的 JS。
- 理解：TS 帮你在运行前发现低级错误。
- 学会：接受“不会 TS 很正常，今天从 0 开始”。
- 验收：能说出 TS 和 JS 的关系。

09:00-12:00：

- 知道：string、number、boolean、array、any、unknown、类型推断。
- 理解：不是所有变量都要手写类型，TS 会推断。
- 学会：给变量和函数参数加基础类型。
- 验收：Playground 里写 10 个基础类型例子。

12:00-14:00：

- 知道：Playground 是练 TS 的小操场。
- 理解：初学 TS 必须动手看报错，不要只看文档。
- 学会：观察类型错误提示。
- 验收：制造 3 个类型错误并解释为什么错。

14:00-18:00：

- 知道：工具函数最适合练基础类型。
- 理解：函数输入输出清楚，类型就容易写。
- 学会：写 `formatDate`、`formatMoney`、`isEmpty`。
- 验收：函数参数和返回值都有类型，不靠 `any`。

19:30-21:00：

- 知道：二分查找要求有序。
- 理解：二分核心是缩小搜索区间。
- 学会：写左右边界更新。
- 验收：能解释 `left &lt;= right` 和 `left &lt; right` 的差异。

21:00-22:30：

- 知道：TS 第一关是不要怕报错。
- 理解：类型报错是在帮你。
- 学会：总结 TS 入门体验。
- 验收：写完《TypeScript 是什么，为什么前端要学》。

## 页面导航

- [上一天](/days/day-08/)
- [下一天](/days/day-10/)
- [返回总览](/overview)
