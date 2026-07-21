---
title: 第 5 天：this、原型链、class
---

# 第 5 天：this、原型链、class

::: tip 阶段
**阶段：** JS / CSS / 项目环境

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：今天补 JS 对象体系。
- 理解：很多框架源码和面试题都绕不开原型链。
- 学会：区分函数调用和方法调用里的 this。
- 验收：能说出 this 不是定义时固定，而是多数情况下调用时决定。
:::

### 具体安排

- 手写一遍闭包计数器。
- 写今天目标：能讲清 this 和原型链的基础。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：this 有默认绑定、隐式绑定、显式绑定、new 绑定、箭头函数继承外层。
- 理解：原型链是对象属性查找机制。
- 学会：判断 `obj.fn()`、`fn()`、`fn.call()` 的 this。
- 验收：能画出实例、构造函数、prototype 的关系。
:::

### 具体安排

- 看 MDN this：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this
  - 必看章节：函数上下文、类上下文、箭头函数、`call/apply/bind` 相关说明。
  - 读完要会：看到 `obj.fn()`、`fn()`、`fn.call(obj)` 能判断 `this`。
- 看 MDN 原型链：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
  - 必看章节：继承属性、原型链、构造函数、`Object.create()`、性能和实践建议。
  - 读完要会：能说出对象找属性会先找自己，再沿着原型链往上找。
- 看 MDN class：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes
  - 必看章节：类声明、构造函数、实例方法、静态方法、继承。
  - 读完要会：知道 `class` 是更清晰的写法，底层仍和原型机制有关。
- 重点记：this 绑定规则、prototype、class 只是更舒服的写法。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：class 本质上仍然基于原型。
- 理解：class 是更清晰的面向对象写法，不是完全新机制。
- 学会：把构造函数写法改成 class 写法。
- 验收：写一张原型链图。
:::

### 具体安排

- 看 JavaScript.info 原型继承：https://zh.javascript.info/prototype-inheritance
  - 必看小节：`[[Prototype]]`、读取属性、写入不走原型、`this` 的值。
  - 读完要会：能画出实例、构造函数、`prototype` 三者关系。
- 画一张原型链图。


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：业务对象要有稳定字段，比如用户的 id、name、role。
- 理解：后面学 TS 时，这些字段会变成 interface。
- 学会：给用户 mock 数据补字段。
- 验收：用户管理页能显示新增字段。
:::

### 具体安排

- 在 `src/types/user.ts` 看接口结构，但先不用深究 TS。
- 用 JS 思维理解 User：id、username、nickname、role。
- 用户管理页增加 mock 字段：email、createdAt。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：哈希题常用 Set 去重、Map 计数。
- 理解：快乐数用 Set 判断循环。
- 学会：用 Set 检测重复状态。
- 验收：能解释为什么会进入循环。
:::

### 具体安排

- 刷 LeetCode 202 快乐数：https://leetcode.cn/problems/happy-number/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。
- 刷 LeetCode 1 两数之和复刷：https://leetcode.cn/problems/two-sum/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：this 和原型链要能画图解释。
- 理解：背结论不如会判断调用场景。
- 学会：总结面试回答模板。
- 验收：写完《this 和原型链面试版解释》。
:::

### 具体安排

- 写笔记：《this 和原型链面试版解释》。
- Git commit：`feat: extend user mock data`
- 当天产出：用户数据字段更完整。


