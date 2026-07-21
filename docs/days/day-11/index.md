---
title: 第 11 天：TS 联合类型和类型收窄
---

# 第 11 天：TS 联合类型和类型收窄

::: tip 阶段
**阶段：** TypeScript 从 0 到项目可用

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：状态不应该随便写 string。
- 理解：联合类型可以限制值的范围。
- 学会：写 `'active' | 'disabled'`。
- 验收：能解释为什么比普通 string 更安全。
:::

### 具体安排

- 想一个例子：用户状态可能是 active 或 disabled。
- 写今天目标：会用联合类型，不乱写 string。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：联合类型、字面量类型、typeof、判空、类型收窄。
- 理解：TS 需要你通过判断证明某个值是什么类型。
- 学会：处理 `User | null`。
- 验收：能写 5 个类型收窄例子。
:::

### 具体安排

- 看 Narrowing：https://www.typescriptlang.org/docs/handbook/2/narrowing.html
  - 必看章节：`typeof`、Truthiness narrowing、Equality narrowing、`in` operator、Control flow analysis、Discriminated unions。
  - 读完要会：处理 `User | null` 前先判断，处理联合类型时先收窄。
- 看 Literal Types：https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
  - 必看章节：Literal Types、Literal Inference。
  - 读完要会：能写状态类型 ``'active' | 'disabled'`。
- 看 Union Types：https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
  - 必看章节：Union Types、Working with Union Types。
  - 读完要会：知道联合类型代表“可能是这些类型之一”，不能随便当成其中一种用。
- 重点记：`'active' | 'disabled'`、typeof、Array.isArray、判空。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：`null` 和 `undefined` 是常见坑。
- 理解：用户信息未登录时可能不存在。
- 学会：写安全访问。
- 验收：能解释为什么 `profile.nickname` 可能报错。
:::

### 具体安排

- Playground 写 5 个类型收窄例子。
- 尤其练 `string | number`、`User | null`。


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：用户状态适合联合类型。
- 理解：UI 展示可以根据状态分支。
- 学会：用状态类型渲染不同标签。
- 验收：active/disabled 显示不同样式，且类型不允许乱写状态。
:::

### 具体安排

- 给用户状态定义联合类型：`UserStatus = 'active' | 'disabled'`。
- 用户管理页根据状态显示不同标签。
- 处理 `profile` 可能为 null 的情况。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：旋转数组还是二分变形。
- 理解：要判断哪半边有序。
- 学会：写较复杂边界判断。
- 验收：能讲出旋转数组查找思路。
:::

### 具体安排

- 刷 LeetCode 367 有效的完全平方数：https://leetcode.cn/problems/valid-perfect-square/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。
- 刷 LeetCode 33 搜索旋转排序数组：https://leetcode.cn/problems/search-in-rotated-sorted-array/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：类型收窄是 TS 日常高频。
- 理解：判断逻辑既服务运行时，也服务类型系统。
- 学会：总结联合类型用法。
- 验收：写完《联合类型和类型收窄》。
:::

### 具体安排

- 写笔记：《联合类型和类型收窄》。
- Git commit：`feat: type user status with union`
- 当天产出：项目里开始用联合类型。


