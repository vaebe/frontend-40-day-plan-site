---
title: 第 27 天：菜单管理和树形数据
---

# 第 27 天：菜单管理和树形数据

::: tip 阶段
**阶段：** Vue3 + TypeScript 主项目

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：菜单天然是树形结构。
- 理解：后端常返回扁平数组，前端转树。
- 学会：写 listToTree 思路。
- 验收：能说出 parentId 的作用。
:::

### 具体安排

- 写今天目标：扁平菜单能转成树。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：递归适合处理树。
- 理解：递归要有终止条件和当前层处理。
- 学会：写扁平数组转树。
- 验收：手写 `listToTree` 伪代码。
:::

### 具体安排

- 看 JavaScript.info 递归：https://zh.javascript.info/recursion
- 复看 Vue 列表渲染：https://cn.vuejs.org/guide/essentials/list.html
- 复看 TypeScript Generics：https://www.typescriptlang.org/docs/handbook/generics.html
  - 必看章节：Hello World of Generics、Working with Generic Type Variables、Generic Types、Generic Constraints、Using Type Parameters in Generic Constraints。
  - 读完要会：能写 `ApiResponse&lt;T&gt;`、`PageResult&lt;T&gt;`、`getFirst&lt;T&gt;()`。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：树和数组之间会反复转换。
- 理解：页面展示和接口存储可能需要不同结构。
- 学会：设计 `treeToList`。
- 验收：写出转换过程。
:::

### 具体安排

- 手写 listToTree 的伪代码。


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：菜单管理会影响侧边栏和动态路由。
- 理解：菜单字段要包含 path、title、permission、sort。
- 学会：完成菜单管理页。
- 验收：能新增子菜单、编辑、删除。
:::

### 具体安排

- 完成菜单管理页面。
- 写 `listToTree`、`treeToList`。
- 菜单支持新增子菜单、编辑、删除。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：树的层序遍历用队列。
- 理解：右视图是每层最后一个节点。
- 学会：写层序变形题。
- 验收：能解释每层最后一个节点怎么取。
:::

### 具体安排

- 刷 LeetCode 199 二叉树右视图：https://leetcode.cn/problems/binary-tree-right-side-view/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。
- 刷 LeetCode 102 层序遍历复刷：https://leetcode.cn/problems/binary-tree-level-order-traversal/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：菜单管理是动态路由的基础。
- 理解：菜单数据和路由数据要有映射关系。
- 学会：写转换笔记。
- 验收：写完《扁平数组和树形数据转换》。
:::

### 具体安排

- 写笔记：《扁平数组和树形数据转换》。
- Git commit：`feat: implement menu tree management`
- 当天产出：菜单管理页。


