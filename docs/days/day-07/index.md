---
title: 第 7 天：Promise、async/await、接口思维
---

# 第 7 天：Promise、async/await、接口思维

::: tip 阶段
**阶段：** JS / CSS / 项目环境

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 打开 `src/api/auth.ts`。
- 写今天目标：看懂模拟登录为什么是异步。

09:00-12:00：

- 看 MDN Promise：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
- 看 MDN async function：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function
- 看 JavaScript.info Promise：https://zh.javascript.info/promise-basics
- 重点记：Promise 三种状态、then/catch、async/await、try/catch。

12:00-14:00：

- 看 JavaScript.info async/await：https://zh.javascript.info/async-await
- 写 3 个执行顺序例子。

14:00-18:00：

- 修改 `mockLogin`。
- 增加错误场景：密码错误时抛错。
- 登录页显示错误提示。

19:30-21:00：

- 看代码随想录栈与队列理论：https://programmercarl.com/栈与队列理论基础.html
- 刷 LeetCode 20 有效的括号：https://leetcode.cn/problems/valid-parentheses/
- 刷 LeetCode 232 用栈实现队列：https://leetcode.cn/problems/implement-queue-using-stacks/

21:00-22:30：

- 写笔记：《Promise 和 async/await》。
- Git commit：`feat: handle login failure state`
- 当天产出：登录有成功和失败状态。

## 学习结果和验收

08:30-09:00：

- 知道：接口请求一定是异步。
- 理解：登录页不能假设请求立刻返回。
- 学会：找到 `mockLogin`。
- 验收：能指出登录成功后 store 和 router 分别做什么。

09:00-12:00：

- 知道：Promise 有 pending、fulfilled、rejected 三种状态。
- 理解：async/await 是 Promise 的更同步风格写法。
- 学会：用 try/catch 捕获异步错误。
- 验收：能写一个 `async function` 并处理失败。

12:00-14:00：

- 知道：await 后面的代码会等 Promise 完成。
- 理解：错误不 catch 会冒泡，影响页面体验。
- 学会：写 3 个 Promise 输出顺序例子。
- 验收：预测输出顺序并实际运行验证。

14:00-18:00：

- 知道：登录要有 loading、成功、失败三种状态。
- 理解：真实项目里接口失败是常态，不能只处理成功。
- 学会：给 `mockLogin` 增加错误场景。
- 验收：密码错误时页面有提示，按钮 loading 会恢复。

19:30-21:00：

- 知道：栈是后进先出，队列是先进先出。
- 理解：括号匹配天然适合栈。
- 学会：用栈解决有效括号。
- 验收：能解释为什么遇到右括号要弹栈。

21:00-22:30：

- 知道：Promise 是前端必考基础。
- 理解：async/await 背后仍然是 Promise。
- 学会：写面试版异步解释。
- 验收：写完《Promise 和 async/await》。

## 页面导航

- [上一天](/days/day-06/)
- [下一天](/days/day-08/)
- [返回总览](/overview)
