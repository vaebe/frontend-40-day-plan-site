---
title: 第 8 天：事件循环、模块化、第一次阶段复盘
---

# 第 8 天：事件循环、模块化、第一次阶段复盘

::: tip 阶段
**阶段：** JS / CSS / 项目环境

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 写一个 Promise + setTimeout 输出顺序题。
- 写今天目标：理解事件循环，不背答案。

09:00-12:00：

- 看 MDN 事件循环：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Event_loop
- 看 JavaScript.info 事件循环：https://zh.javascript.info/event-loop
- 看 MDN 模块：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules
- 重点记：调用栈、宏任务、微任务、import/export。

12:00-14:00：

- 复盘前 7 天笔记。
- 列出还不懂的 5 个点。

14:00-18:00：

- 整理项目 imports。
- 看 `@/` 别名怎么使用。
- 给 Dashboard 增加“今日任务”列表组件，可以先写在页面内。

19:30-21:00：

- 刷 LeetCode 225 用队列实现栈：https://leetcode.cn/problems/implement-stack-using-queues/
- 刷 LeetCode 1047 删除字符串中的所有相邻重复项：https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/

21:00-22:30：

- 写笔记：《事件循环 5 道输出题》。
- Git commit：`feat: add dashboard task list`
- 当天产出：JS 基础第一阶段复盘完成。

## 学习结果和验收

08:30-09:00：

- 知道：今天要把 JS 第一阶段收口。
- 理解：事件循环解释了异步代码为什么这样执行。
- 学会：写一个输出顺序题。
- 验收：能区分同步代码、微任务、宏任务。

09:00-12:00：

- 知道：Promise.then 是微任务，setTimeout 是宏任务。
- 理解：同步代码先执行，微任务通常先于下一个宏任务。
- 学会：判断常见输出题顺序。
- 验收：5 道输出题至少做对 4 道。

12:00-14:00：

- 知道：前 7 天的漏洞要记下来。
- 理解：复盘比继续冲新知识更重要。
- 学会：列出不懂点。
- 验收：写出 5 个待补问题。

14:00-18:00：

- 知道：`import/export` 是模块化基础。
- 理解：`@/` 别名让导入路径更清晰。
- 学会：整理页面中的导入。
- 验收：Dashboard 有今日任务列表，且项目能正常运行。

19:30-21:00：

- 知道：栈/队列能互相模拟。
- 理解：用两个栈可以实现队列。
- 学会：写栈队列转换题。
- 验收：能讲出入队栈和出队栈的分工。

21:00-22:30：

- 知道：事件循环必须能用自己的话讲。
- 理解：背“宏任务微任务”不够，要结合例子。
- 学会：整理输出题。
- 验收：写完《事件循环 5 道输出题》。

## 页面导航

- [上一天](/days/day-07/)
- [下一天](/days/day-09/)
- [返回总览](/overview)
