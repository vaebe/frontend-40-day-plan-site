---
title: 第 13 天：TS 工具类型和类型组织
---

# 第 13 天：TS 工具类型和类型组织

::: tip 阶段
**阶段：** TypeScript 从 0 到项目可用

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 回忆 `ApiResponse&lt;T&gt;` 的 T 是什么。
- 写今天目标：认识常用工具类型。

09:00-12:00：

- 看 Utility Types：https://www.typescriptlang.org/docs/handbook/utility-types.html
- 重点只学：Partial、Pick、Omit、Record、Readonly。
- 看 keyof：https://www.typescriptlang.org/docs/handbook/2/keyof-types.html

12:00-14:00：

- Playground 写：
  - `Partial&lt;User&gt;`
  - `Pick&lt;User, 'id' | 'username'&gt;`
  - `Omit&lt;User, 'password'&gt;`
  - `Record&lt;string, boolean&gt;`

14:00-18:00：

- 给用户编辑表单定义 `UserForm`。
- 可以用 `Pick` 或 `Omit` 从 User 类型里派生。
- 用户管理页新增一个编辑弹窗雏形。

19:30-21:00：

- 刷 LeetCode 145 后序遍历：https://leetcode.cn/problems/binary-tree-postorder-traversal/
- 刷 LeetCode 102 层序遍历：https://leetcode.cn/problems/binary-tree-level-order-traversal/

21:00-22:30：

- 写笔记：《Pick、Omit、Partial 怎么用在表单里》。
- Git commit：`feat: derive user form types`
- 当天产出：用户表单类型。

## 学习结果和验收

08:30-09:00：

- 知道：工具类型是 TS 提供的类型加工工具。
- 理解：它们减少重复类型定义。
- 学会：认出 Partial、Pick、Omit、Record。
- 验收：能说出 Pick 和 Omit 的区别。

09:00-12:00：

- 知道：Partial 全部可选，Pick 选字段，Omit 排除字段，Record 映射键值。
- 理解：表单类型经常从业务类型派生。
- 学会：用工具类型生成新类型。
- 验收：Playground 写出 4 个工具类型例子。

12:00-14:00：

- 知道：`keyof` 能得到对象键名联合类型。
- 理解：配置化组件会经常用到字段名。
- 学会：写 `keyof User`。
- 验收：能解释为什么字段名也可以成为类型。

14:00-18:00：

- 知道：新增/编辑表单通常不需要完整 User。
- 理解：表单类型应该匹配表单字段。
- 学会：用 Pick/Omit 派生 `UserForm`。
- 验收：用户编辑弹窗使用 `UserForm` 类型。

19:30-21:00：

- 知道：层序遍历用队列。
- 理解：一层一层处理节点。
- 学会：写基础 BFS。
- 验收：能解释队列长度如何代表当前层节点数。

21:00-22:30：

- 知道：工具类型是业务 TS 的常用武器。
- 理解：不要为了炫技写复杂类型。
- 学会：总结常用工具类型。
- 验收：写完《Pick、Omit、Partial 怎么用在表单里》。

## 页面导航

- [上一天](/days/day-12/)
- [下一天](/days/day-14/)
- [返回总览](/overview)
