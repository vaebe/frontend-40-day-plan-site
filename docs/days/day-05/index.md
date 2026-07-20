---
title: 第 5 天：this、原型链、class
---

# 第 5 天：this、原型链、class

::: tip 阶段
**阶段：** JS / CSS / 项目环境

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 手写一遍闭包计数器。
- 写今天目标：能讲清 this 和原型链的基础。

09:00-12:00：

- 看 MDN this：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this
- 看 MDN 原型链：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
- 看 MDN class：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes
- 重点记：this 绑定规则、prototype、class 只是更舒服的写法。

12:00-14:00：

- 看 JavaScript.info 原型继承：https://zh.javascript.info/prototype-inheritance
- 画一张原型链图。

14:00-18:00：

- 在 `src/types/user.ts` 看接口结构，但先不用深究 TS。
- 用 JS 思维理解 User：id、username、nickname、role。
- 用户管理页增加 mock 字段：email、createdAt。

19:30-21:00：

- 刷 LeetCode 202 快乐数：https://leetcode.cn/problems/happy-number/
- 刷 LeetCode 1 两数之和复刷：https://leetcode.cn/problems/two-sum/

21:00-22:30：

- 写笔记：《this 和原型链面试版解释》。
- Git commit：`feat: extend user mock data`
- 当天产出：用户数据字段更完整。

## 学习结果和验收

08:30-09:00：

- 知道：今天补 JS 对象体系。
- 理解：很多框架源码和面试题都绕不开原型链。
- 学会：区分函数调用和方法调用里的 this。
- 验收：能说出 this 不是定义时固定，而是多数情况下调用时决定。

09:00-12:00：

- 知道：this 有默认绑定、隐式绑定、显式绑定、new 绑定、箭头函数继承外层。
- 理解：原型链是对象属性查找机制。
- 学会：判断 `obj.fn()`、`fn()`、`fn.call()` 的 this。
- 验收：能画出实例、构造函数、prototype 的关系。

12:00-14:00：

- 知道：class 本质上仍然基于原型。
- 理解：class 是更清晰的面向对象写法，不是完全新机制。
- 学会：把构造函数写法改成 class 写法。
- 验收：写一张原型链图。

14:00-18:00：

- 知道：业务对象要有稳定字段，比如用户的 id、name、role。
- 理解：后面学 TS 时，这些字段会变成 interface。
- 学会：给用户 mock 数据补字段。
- 验收：用户管理页能显示新增字段。

19:30-21:00：

- 知道：哈希题常用 Set 去重、Map 计数。
- 理解：快乐数用 Set 判断循环。
- 学会：用 Set 检测重复状态。
- 验收：能解释为什么会进入循环。

21:00-22:30：

- 知道：this 和原型链要能画图解释。
- 理解：背结论不如会判断调用场景。
- 学会：总结面试回答模板。
- 验收：写完《this 和原型链面试版解释》。

## 页面导航

- [上一天](/days/day-04/)
- [下一天](/days/day-06/)
- [返回总览](/overview)
