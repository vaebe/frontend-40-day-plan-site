---
title: 第 10 天：TS 函数类型、对象类型、接口
---

# 第 10 天：TS 函数类型、对象类型、接口

::: tip 阶段
**阶段：** TypeScript 从 0 到项目可用

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 回忆：什么时候可以不写类型，让 TS 自动推断。
- 写今天目标：能给函数参数、返回值、对象加类型。

09:00-12:00：

- 看 Everyday Types 的 Functions 部分：https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions
- 看 Object Types：https://www.typescriptlang.org/docs/handbook/2/objects.html
- 看 Interfaces 相关内容：https://www.typescriptlang.org/docs/handbook/2/objects.html
- 重点记：函数参数、返回值、interface、可选属性。

12:00-14:00：

- Playground 写 User、Role、Menu 三个 interface。
- 每个 interface 写一个使用例子。

14:00-18:00：

- 完善 `src/types/user.ts`。
- 新建 `src/types/menu.ts`、`src/types/role.ts`。
- 用户管理页的数据改成引用类型。

19:30-21:00：

- 刷 LeetCode 34 在排序数组中查找元素的第一个和最后一个位置：https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/
- 刷 LeetCode 69 x 的平方根：https://leetcode.cn/problems/sqrtx/

21:00-22:30：

- 写笔记：《interface 怎么描述业务对象》。
- Git commit：`feat: add core business types`
- 当天产出：User、Role、Menu 类型。

## 学习结果和验收

08:30-09:00：

- 知道：今天开始描述业务对象。
- 理解：业务对象比零散变量更接近真实开发。
- 学会：说出 User 至少有哪些字段。
- 验收：能写出一个简单 User 对象。

09:00-12:00：

- 知道：函数类型包含参数类型和返回值类型。
- 理解：interface 用来描述对象结构。
- 学会：写可选属性、只读属性、函数返回类型。
- 验收：能写 `interface User` 并让函数返回 User。

12:00-14:00：

- 知道：Role、Menu 也是业务模型。
- 理解：类型文件是项目的数据约定。
- 学会：在 Playground 写 3 个 interface。
- 验收：User、Role、Menu 每个都有示例对象。

14:00-18:00：

- 知道：`src/types` 专门放类型。
- 理解：页面不应该到处临时定义重复类型。
- 学会：完善 `user.ts`、新增 `role.ts`、`menu.ts`。
- 验收：用户管理页数据使用你定义的类型。

19:30-21:00：

- 知道：二分题边界容易错。
- 理解：查找范围每次必须缩小。
- 学会：处理目标不存在。
- 验收：两道二分题 AC。

21:00-22:30：

- 知道：interface 是 TS 业务开发核心。
- 理解：它让前后端数据结构更清楚。
- 学会：写业务类型笔记。
- 验收：写完《interface 怎么描述业务对象》。

## 页面导航

- [上一天](/days/day-09/)
- [下一天](/days/day-11/)
- [返回总览](/overview)
