---
title: 第 7 天：Promise、async/await、接口思维
---

# 第 7 天：Promise、async/await、接口思维

::: tip 阶段
**阶段：** JS / CSS / 项目环境

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：接口请求一定是异步。
- 理解：登录页不能假设请求立刻返回。
- 学会：找到 `mockLogin`。
- 验收：能指出登录成功后 store 和 router 分别做什么。
:::

### 具体安排

- 打开 `src/api/auth.ts`。
- 写今天目标：看懂模拟登录为什么是异步。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：Promise 有 pending、fulfilled、rejected 三种状态。
- 理解：async/await 是 Promise 的更同步风格写法。
- 学会：用 try/catch 捕获异步错误。
- 验收：能写一个 `async function` 并处理失败。
:::

### 具体安排

- 看 MDN Promise：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
  - 必看章节：描述、链式调用、错误处理、静态方法 `Promise.all/allSettled/race/resolve/reject`。
  - 读完要会：能解释 pending/fulfilled/rejected，以及为什么要 `catch`。
- 看 MDN async function：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function
  - 必看章节：语法、描述、示例、重写 Promise 链。
  - 读完要会：能用 `async/await + try/catch` 写一个请求函数。
- 看 JavaScript.info Promise：https://zh.javascript.info/promise-basics
  - 必看小节：Promise 构造、消费者 `then/catch/finally`、链式调用、错误处理。
  - 读完要会：能预测简单 Promise 输出顺序。
- 重点记：Promise 三种状态、then/catch、async/await、try/catch。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：await 后面的代码会等 Promise 完成。
- 理解：错误不 catch 会冒泡，影响页面体验。
- 学会：写 3 个 Promise 输出顺序例子。
- 验收：预测输出顺序并实际运行验证。
:::

### 具体安排

- 看 JavaScript.info async/await：https://zh.javascript.info/async-await
  - 必看小节：async 函数、await、错误处理、和 Promise.then 对比。
  - 读完要会：把一个 `.then()` 链改写成 `await` 写法。
- 写 3 个执行顺序例子。


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：登录要有 loading、成功、失败三种状态。
- 理解：真实项目里接口失败是常态，不能只处理成功。
- 学会：给 `mockLogin` 增加错误场景。
- 验收：密码错误时页面有提示，按钮 loading 会恢复。
:::

### 具体安排

- 修改 `mockLogin`。
- 增加错误场景：密码错误时抛错。
- 登录页显示错误提示。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：栈是后进先出，队列是先进先出。
- 理解：括号匹配天然适合栈。
- 学会：用栈解决有效括号。
- 验收：能解释为什么遇到右括号要弹栈。
:::

### 具体安排

- 看代码随想录栈与队列理论：https://programmercarl.com/栈与队列理论基础.html
  - 阅读顺序：先看理论基础，再看图解和模板，最后看对应例题。
  - 读完要会：能不用背答案说出这一类题常用的数据结构或指针含义。
- 刷 LeetCode 20 有效的括号：https://leetcode.cn/problems/valid-parentheses/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。
- 刷 LeetCode 232 用栈实现队列：https://leetcode.cn/problems/implement-queue-using-stacks/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：Promise 是前端必考基础。
- 理解：async/await 背后仍然是 Promise。
- 学会：写面试版异步解释。
- 验收：写完《Promise 和 async/await》。
:::

### 具体安排

- 写笔记：《Promise 和 async/await》。
- Git commit：`feat: handle login failure state`
- 当天产出：登录有成功和失败状态。


