---
title: 第 21 天：Axios 请求封装和错误处理
---

# 第 21 天：Axios 请求封装和错误处理

::: tip 阶段
**阶段：** Vue3 + TypeScript 主项目

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 打开 `src/api/request.ts`。
- 写今天目标：统一请求入口。

09:00-12:00：

- 看 Axios 实例：https://axios-http.com/docs/instance
- 看 拦截器：https://axios-http.com/docs/interceptors
- 看 错误处理：https://axios-http.com/docs/handling_errors
- 看 取消请求：https://axios-http.com/docs/cancellation

12:00-14:00：

- 画请求流程：请求拦截器 -&gt; 后端 -&gt; 响应拦截器 -&gt; 页面。

14:00-18:00：

- 完善 `request.ts`。
- 请求头自动带 token。
- 响应错误统一提示。
- 模拟 401 时退出登录。

19:30-21:00：

- 刷 LeetCode 53 最大子数组和：https://leetcode.cn/problems/maximum-subarray/
- 刷 LeetCode 122 买卖股票最佳时机 II：https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/

21:00-22:30：

- 写笔记：《Axios 拦截器和错误处理》。
- Git commit：`feat: improve request error handling`
- 当天产出：请求层更像真实项目。

## 学习结果和验收

08:30-09:00：

- 知道：请求层是项目工程化核心。
- 理解：统一请求比页面各写各的更可维护。
- 学会：找到 `request.ts`。
- 验收：能说出请求拦截器和响应拦截器在哪里。

09:00-12:00：

- 知道：Axios 实例、interceptors、timeout、error。
- 理解：请求前加 token，响应后统一处理错误。
- 学会：读懂拦截器代码。
- 验收：能解释 token 是怎么加到 header 的。

12:00-14:00：

- 知道：请求流程要能画出来。
- 理解：面试问请求封装时，要讲层次和异常处理。
- 学会：画请求生命周期。
- 验收：流程图包含页面、api、request、后端、错误处理。

14:00-18:00：

- 知道：401 表示未授权或登录过期。
- 理解：token 过期后继续停留后台是不合理的。
- 学会：模拟 401 后退出登录。
- 验收：出现 401 时清空状态并跳登录。

19:30-21:00：

- 知道：最大子数组和是经典动态规划/贪心题。
- 理解：当前和为负时不如重新开始。
- 学会：写 Kadane 算法。
- 验收：能解释状态含义。

21:00-22:30：

- 知道：请求封装是项目面试必问。
- 理解：要讲 token、错误、loading、取消请求等点。
- 学会：写请求封装笔记。
- 验收：写完《Axios 拦截器和错误处理》。

## 页面导航

- [上一天](/days/day-20/)
- [下一天](/days/day-22/)
- [返回总览](/overview)
