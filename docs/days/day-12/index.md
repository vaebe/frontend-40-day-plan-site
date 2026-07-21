---
title: 第 12 天：TS 泛型入门
---

# 第 12 天：TS 泛型入门

::: tip 阶段
**阶段：** TypeScript 从 0 到项目可用

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：泛型是“把类型也当参数传进去”。
- 理解：泛型让函数保持复用，同时不丢类型。
- 学会：读懂 `Array&lt;string&gt;`。
- 验收：能解释 `T` 不是固定名字，只是类型参数。
:::

### 具体安排

- 想清楚：数组 `Array&lt;string&gt;` 为什么能装不同类型。
- 写今天目标：理解泛型是“类型参数”。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：`identity&lt;T&gt;`、`getFirst&lt;T&gt;`、泛型约束。
- 理解：不用泛型会丢失输入输出之间的类型关系。
- 学会：写简单泛型函数。
- 验收：Playground 写出 3 个泛型函数。
:::

### 具体安排

- 看 Generics：https://www.typescriptlang.org/docs/handbook/generics.html
  - 必看章节：Hello World of Generics、Working with Generic Type Variables、Generic Types、Generic Constraints、Using Type Parameters in Generic Constraints。
  - 读完要会：能写 `ApiResponse&lt;T&gt;`、`PageResult&lt;T&gt;`、`getFirst&lt;T&gt;()`。
- 重点只看：Hello World、Generic Types、Generic Constraints。
- 不要贪多，不要看高级类型体操。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：泛型最常见于接口返回、列表、组件 props。
- 理解：分页接口 `PageResult&lt;User&gt;` 比 `PageResult&lt;any&gt;` 清晰。
- 学会：写 `wrapResponse&lt;T&gt;`。
- 验收：能说出 `ApiResponse&lt;T&gt;` 的 T 代表什么。
:::

### 具体安排

- Playground 写：
  - `identity&lt;T&gt;(value: T): T`
  - `getFirst&lt;T&gt;(list: T[]): T | undefined`
  - `wrapResponse&lt;T&gt;(data: T)`


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：`ApiResponse&lt;T&gt;`、`PageResult&lt;T&gt;` 是项目核心类型。
- 理解：接口返回什么数据，页面就能得到什么类型提示。
- 学会：写 `mockPage&lt;T&gt;()`。
- 验收：传入 User 列表时返回 `PageResult&lt;User&gt;`。
:::

### 具体安排

- 看 `src/types/api.ts`。
- 理解 `ApiResponse&lt;T&gt;` 和 `PageResult&lt;T&gt;`。
- 写一个 `mockPage&lt;T&gt;()`，用来返回分页数据。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：树遍历有前序、中序、后序、层序。
- 理解：递归和栈都能遍历树。
- 学会：写基础树遍历。
- 验收：能说出前序遍历顺序：根左右。
:::

### 具体安排

- 看代码随想录二叉树理论：https://programmercarl.com/二叉树理论基础.html
  - 阅读顺序：先看理论基础，再看图解和模板，最后看对应例题。
  - 读完要会：能不用背答案说出这一类题常用的数据结构或指针含义。
- 刷 LeetCode 144 前序遍历：https://leetcode.cn/problems/binary-tree-preorder-traversal/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。
- 刷 LeetCode 94 中序遍历：https://leetcode.cn/problems/binary-tree-inorder-traversal/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：泛型刚开始难是正常的。
- 理解：先掌握接口返回和工具函数场景就够。
- 学会：写泛型学习笔记。
- 验收：写完《泛型到底解决什么》。
:::

### 具体安排

- 写笔记：《泛型到底解决什么》。
- Git commit：`feat: add generic page mock helper`
- 当天产出：第一个泛型工具函数。


