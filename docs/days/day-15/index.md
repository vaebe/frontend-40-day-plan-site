---
title: 第 15 天：TS + Axios + 接口类型
---

# 第 15 天：TS + Axios + 接口类型

::: tip 阶段
**阶段：** TypeScript 从 0 到项目可用

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：接口返回类型是 TS 项目最重要的类型之一。
- 理解：页面用错字段时，TS 应该提前提醒你。
- 学会：打开 `request.ts` 和 `api.ts`。
- 验收：能指出 `ApiResponse&lt;T&gt;` 和 `PageResult&lt;T&gt;` 文件位置。
:::

### 具体安排

- 打开 `src/api/request.ts` 和 `src/types/api.ts`。
- 写今天目标：理解接口返回值为什么要有泛型。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：Axios 实例、请求拦截器、响应结构。
- 理解：泛型可以描述接口返回 data 的具体形状。
- 学会：读懂 `request.get&lt;ApiResponse&lt;T&gt;&gt;()`。
- 验收：能解释接口返回为什么不是直接 T，而是被响应结构包了一层。
:::

### 具体安排

- 看 Axios 入门：https://axios-http.com/docs/intro
  - 必看章节：Intro、Example、Installing。
  - 读完要会：知道 axios 发请求返回的是 Promise。
- 看 Axios 实例：https://axios-http.com/docs/instance
  - 必看章节：Creating an instance、Instance methods、Config defaults。
  - 读完要会：用 `axios.create()` 统一 baseURL、timeout、headers。
- 看 Axios 响应结构：https://axios-http.com/docs/res_schema
  - 必看字段：`data`、`status`、`statusText`、`headers`、`config`。
  - 读完要会：知道页面通常关心的是后端包在 `data` 里的业务数据。
- 复看 Generics：https://www.typescriptlang.org/docs/handbook/generics.html
  - 必看章节：Hello World of Generics、Working with Generic Type Variables、Generic Types、Generic Constraints、Using Type Parameters in Generic Constraints。
  - 读完要会：能写 `ApiResponse&lt;T&gt;`、`PageResult&lt;T&gt;`、`getFirst&lt;T&gt;()`。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：页面不应该直接到处写 axios。
- 理解：统一请求层方便加 token、错误提示、超时处理。
- 学会：画请求流程。
- 验收：画出页面 -&gt; api 函数 -&gt; request -&gt; 响应 -&gt; 页面。
:::

### 具体安排

- 画接口流程：页面 -&gt; api 函数 -&gt; request -&gt; 后端返回 -&gt; 页面数据。


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：用户列表接口返回分页数据。
- 理解：`PageResult&lt;User&gt;` 表示列表里每项都是 User。
- 学会：写用户列表 mock API。
- 验收：用户管理页从 API 函数获取数据，不直接写死在组件里。
:::

### 具体安排

- 写用户列表 mock API。
- 返回类型用 `PageResult&lt;User&gt;`。
- 用户管理页从 mock API 获取数据，而不是直接写死数组。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：树深度可以 DFS/BFS。
- 理解：最大深度和最小深度边界不同。
- 学会：写树深度题。
- 验收：能解释最小深度遇到单边子树不能直接取 0。
:::

### 具体安排

- 刷 LeetCode 104 最大深度：https://leetcode.cn/problems/maximum-depth-of-binary-tree/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。
- 刷 LeetCode 111 最小深度：https://leetcode.cn/problems/minimum-depth-of-binary-tree/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：接口类型是简历项目可讲点。
- 理解：类型设计能体现工程能力。
- 学会：写接口类型笔记。
- 验收：写完《接口类型 ApiResponse&lt;T&gt; 和 PageResult&lt;T&gt;》。
:::

### 具体安排

- 写笔记：《接口类型 ApiResponse&lt;T&gt; 和 PageResult&lt;T&gt;》。
- Git commit：`feat: fetch typed user list`
- 当天产出：用户列表数据从接口函数来。


