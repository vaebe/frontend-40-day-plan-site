---
title: 第 4 天：JavaScript 变量、作用域、闭包
---

# 第 4 天：JavaScript 变量、作用域、闭包

::: tip 阶段
**阶段：** JS / CSS / 项目环境

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 复述：`let`、`const`、作用域是什么。
- 写今天目标：能解释闭包，并写一个小工具。

09:00-12:00：

- 看 MDN 语法和类型：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types
- 看 MDN 闭包：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Closures
- 看 JavaScript.info 闭包：https://zh.javascript.info/closure
- 重点记：词法作用域、作用域链、函数记住外部变量。

12:00-14:00：

- 用浏览器控制台写 3 个闭包例子。
- 午休前写一句话：闭包不是玄学，是函数保存了外部变量引用。

14:00-18:00：

- 新建或修改 `src/utils`。
- 写 `createCounter`、`once`。
- 在 Dashboard 临时调用一次，确认能跑。

19:30-21:00：

- 看代码随想录哈希表理论：https://programmercarl.com/哈希表理论基础.html
- 刷 LeetCode 242 有效的字母异位词：https://leetcode.cn/problems/valid-anagram/
- 刷 LeetCode 349 两个数组的交集：https://leetcode.cn/problems/intersection-of-two-arrays/

21:00-22:30：

- 写笔记：《闭包是什么，项目里哪里会遇到》。
- Git commit：`feat: add basic function utilities`
- 当天产出：2 个 JS 工具函数。

## 学习结果和验收

08:30-09:00：

- 知道：闭包是今天核心，不是语法冷知识。
- 理解：闭包会影响函数执行后变量是否还被引用。
- 学会：用一句话解释闭包。
- 验收：能说“函数可以记住它定义时所在作用域里的变量”。

09:00-12:00：

- 知道：`let/const` 是块级作用域，`var` 是函数作用域。
- 理解：词法作用域由代码写在哪里决定，不由调用位置决定。
- 学会：判断变量查找顺序。
- 验收：能做对 3 道作用域输出题。

12:00-14:00：

- 知道：闭包常见场景有缓存、私有变量、函数工厂。
- 理解：闭包不是坏东西，但可能导致变量长期不释放。
- 学会：写闭包计数器。
- 验收：控制台写出 `counter()` 每次递增。

14:00-18:00：

- 知道：utils 目录放可复用工具函数。
- 理解：工具函数应该独立、输入输出清楚。
- 学会：写 `createCounter`、`once`。
- 验收：函数能被页面调用，并且行为符合预期。

19:30-21:00：

- 知道：哈希表用空间换时间。
- 理解：查找是否出现过，优先想到 Set/Map。
- 学会：用 Map/Set 解题。
- 验收：能说明两数之和为什么用 Map。

21:00-22:30：

- 知道：闭包是 JS 高频题。
- 理解：要结合执行上下文和作用域链讲。
- 学会：把闭包讲成 1 分钟面试答案。
- 验收：写完《闭包是什么，项目里哪里会遇到》。

## 页面导航

- [上一天](/days/day-03/)
- [下一天](/days/day-05/)
- [返回总览](/overview)
