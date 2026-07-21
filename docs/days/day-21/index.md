---
title: 第 21 天：Axios 请求封装和错误处理
---

# 第 21 天：Axios 请求封装和错误处理

::: tip 阶段
**阶段：** Vue3 + TypeScript 主项目

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：请求层是项目工程化核心。
- 理解：统一请求比页面各写各的更可维护。
- 学会：找到 `request.ts`。
- 验收：能说出请求拦截器和响应拦截器在哪里。
:::

### 具体安排

- 打开 `src/api/request.ts`。
- 写今天目标：统一请求入口。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：Axios 实例、interceptors、timeout、error。
- 理解：请求前加 token，响应后统一处理错误。
- 学会：读懂拦截器代码。
- 验收：能解释 token 是怎么加到 header 的。
:::

### 具体安排

- 看 Axios 实例：https://axios-http.com/docs/instance
  - 必看章节：Creating an instance、Instance methods、Config defaults。
  - 读完要会：用 `axios.create()` 统一 baseURL、timeout、headers。
- 看 拦截器：https://axios-http.com/docs/interceptors
  - 必看章节：请求拦截器、响应拦截器、移除拦截器。
  - 读完要会：在请求前加 token，在响应后统一处理错误。
- 看 错误处理：https://axios-http.com/docs/handling_errors
  - 必看章节：错误对象结构、`validateStatus`。
  - 读完要会：区分网络错误、HTTP 状态错误、业务错误。
- 看 取消请求：https://axios-http.com/docs/cancellation
  - 必看章节：AbortController 取消请求。
  - 读完要会：知道搜索框连续输入时可以取消旧请求。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：请求流程要能画出来。
- 理解：面试问请求封装时，要讲层次和异常处理。
- 学会：画请求生命周期。
- 验收：流程图包含页面、api、request、后端、错误处理。
:::

### 具体安排

- 画请求流程：请求拦截器 -&gt; 后端 -&gt; 响应拦截器 -&gt; 页面。
  - 必看章节：请求拦截器、响应拦截器、移除拦截器。
  - 读完要会：在请求前加 token，在响应后统一处理错误。


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：401 表示未授权或登录过期。
- 理解：token 过期后继续停留后台是不合理的。
- 学会：模拟 401 后退出登录。
- 验收：出现 401 时清空状态并跳登录。
:::

### 具体安排

- 完善 `request.ts`。
- 请求头自动带 token。
- 响应错误统一提示。
- 模拟 401 时退出登录。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：最大子数组和是经典动态规划/贪心题。
- 理解：当前和为负时不如重新开始。
- 学会：写 Kadane 算法。
- 验收：能解释状态含义。
:::

### 具体安排

- 刷 LeetCode 53 最大子数组和：https://leetcode.cn/problems/maximum-subarray/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。
- 刷 LeetCode 122 买卖股票最佳时机 II：https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：请求封装是项目面试必问。
- 理解：要讲 token、错误、loading、取消请求等点。
- 学会：写请求封装笔记。
- 验收：写完《Axios 拦截器和错误处理》。
:::

### 具体安排

- 写笔记：《Axios 拦截器和错误处理》。
  - 必看章节：请求拦截器、响应拦截器、移除拦截器。
  - 读完要会：在请求前加 token，在响应后统一处理错误。
- Git commit：`feat: improve request error handling`
- 当天产出：请求层更像真实项目。


