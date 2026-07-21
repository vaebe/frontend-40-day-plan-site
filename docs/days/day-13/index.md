---
title: 第 13 天：TS 工具类型和类型组织
---

# 第 13 天：TS 工具类型和类型组织

::: tip 阶段
**阶段：** TypeScript 从 0 到项目可用

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：工具类型是 TS 提供的类型加工工具。
- 理解：它们减少重复类型定义。
- 学会：认出 Partial、Pick、Omit、Record。
- 验收：能说出 Pick 和 Omit 的区别。
:::

### 具体安排

- 回忆 `ApiResponse&lt;T&gt;` 的 T 是什么。
- 写今天目标：认识常用工具类型。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：Partial 全部可选，Pick 选字段，Omit 排除字段，Record 映射键值。
- 理解：表单类型经常从业务类型派生。
- 学会：用工具类型生成新类型。
- 验收：Playground 写出 4 个工具类型例子。
:::

### 具体安排

- 看 Utility Types：https://www.typescriptlang.org/docs/handbook/utility-types.html
  - 必看章节：`Partial`、`Required`、`Readonly`、`Pick`、`Omit`、`Record`、`ReturnType`。
  - 读完要会：能从 `User` 派生 `UserForm`，不用复制一份重复类型。
- 重点只学：Partial、Pick、Omit、Record、Readonly。
- 看 keyof：https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
  - 必看章节：`keyof` operator、数字索引签名和字符串索引签名示例。
  - 读完要会：知道对象字段名也可以形成类型。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：`keyof` 能得到对象键名联合类型。
- 理解：配置化组件会经常用到字段名。
- 学会：写 `keyof User`。
- 验收：能解释为什么字段名也可以成为类型。
:::

### 具体安排

- Playground 写：
  - `Partial&lt;User&gt;`
  - `Pick&lt;User, 'id' | 'username'&gt;`
  - `Omit&lt;User, 'password'&gt;`
  - `Record&lt;string, boolean&gt;`


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：新增/编辑表单通常不需要完整 User。
- 理解：表单类型应该匹配表单字段。
- 学会：用 Pick/Omit 派生 `UserForm`。
- 验收：用户编辑弹窗使用 `UserForm` 类型。
:::

### 具体安排

- 给用户编辑表单定义 `UserForm`。
  - 必看章节：基础表单、行内表单、表单校验、自定义校验规则、重置表单。
  - 读完要会：能做新增/编辑弹窗表单。
- 可以用 `Pick` 或 `Omit` 从 User 类型里派生。
- 用户管理页新增一个编辑弹窗雏形。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：层序遍历用队列。
- 理解：一层一层处理节点。
- 学会：写基础 BFS。
- 验收：能解释队列长度如何代表当前层节点数。
:::

### 具体安排

- 刷 LeetCode 145 后序遍历：https://leetcode.cn/problems/binary-tree-postorder-traversal/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。
- 刷 LeetCode 102 层序遍历：https://leetcode.cn/problems/binary-tree-level-order-traversal/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：工具类型是业务 TS 的常用武器。
- 理解：不要为了炫技写复杂类型。
- 学会：总结常用工具类型。
- 验收：写完《Pick、Omit、Partial 怎么用在表单里》。
:::

### 具体安排

- 写笔记：《Pick、Omit、Partial 怎么用在表单里》。
- Git commit：`feat: derive user form types`
- 当天产出：用户表单类型。


