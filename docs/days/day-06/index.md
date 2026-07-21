---
title: 第 6 天：数组、对象、防抖节流
---

# 第 6 天：数组、对象、防抖节流

::: tip 阶段
**阶段：** JS / CSS / 项目环境

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：数组方法是日常开发高频工具。
- 理解：先会用，再理解每个方法返回什么。
- 学会：区分会改变原数组和不会改变原数组的方法。
- 验收：列出 5 个不改变原数组的方法。
:::

### 具体安排

- 默写：map、filter、reduce 的用途。
- 写今天目标：写防抖节流，并知道使用场景。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：map 转换，filter 过滤，reduce 汇总，find 查一个。
- 理解：对象拷贝默认多是浅拷贝。
- 学会：用数组方法处理列表数据。
- 验收：能用 `filter + map` 处理用户列表。
:::

### 具体安排

- 看 MDN Array：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
  - 必看章节：常用实例方法 `map/filter/reduce/find/some/every/includes/slice/splice/sort`。
  - 读完要会：区分会改变原数组的方法和不会改变原数组的方法。
- 看 MDN Object：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object
  - 必看章节：`Object.keys`、`Object.values`、`Object.entries`、`Object.assign`、属性访问。
  - 读完要会：能把对象转成数组处理，也知道浅拷贝不是深拷贝。
- 看 JavaScript.info 数组方法：https://zh.javascript.info/array-methods
  - 必看小节：添加/删除元素、遍历、查找、转换数组、排序、reduce。
  - 练习方式：每个方法在控制台写 1 个例子，不要只看。
- 重点记：map、filter、reduce、find、some、every。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：数组方法要记场景，不要死背定义。
- 理解：开发里列表渲染、搜索、筛选都离不开数组方法。
- 学会：写数组方法速查表。
- 验收：整理 10 个数组方法，每个写一句用途。
:::

### 具体安排

- 整理 10 个最常用数组方法，每个写一句话。


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：防抖是停下来再执行，节流是固定间隔执行。
- 理解：搜索框常用防抖，滚动/resize 常用节流。
- 学会：写 `debounce` 并接到用户搜索。
- 验收：输入连续变化时，不会每敲一个字都触发搜索逻辑。
:::

### 具体安排

- 写 `debounce`、`throttle`。
- 用户管理页加一个搜索输入框。
- 用防抖处理搜索输入。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：字符串可以像数组一样用下标访问。
- 理解：双指针可用于反转字符串。
- 学会：处理字符串边界。
- 验收：能写出原地反转字符串。
:::

### 具体安排

- 看代码随想录字符串理论：https://programmercarl.com/字符串理论基础.html
  - 阅读顺序：先看理论基础，再看图解和模板，最后看对应例题。
  - 读完要会：能不用背答案说出这一类题常用的数据结构或指针含义。
- 刷 LeetCode 344 反转字符串：https://leetcode.cn/problems/reverse-string/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。
- 刷 LeetCode 541 反转字符串 II：https://leetcode.cn/problems/reverse-string-ii/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：防抖节流是手写题常客。
- 理解：它们本质都借助闭包保存定时器或状态。
- 学会：讲清使用场景。
- 验收：写完《防抖和节流区别》。
:::

### 具体安排

- 写笔记：《防抖和节流区别》。
- Git commit：`feat: add debounced user search`
- 当天产出：用户搜索输入框。


