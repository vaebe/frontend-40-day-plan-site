---
title: 第 11 天：TS 联合类型和类型收窄
---

# 第 11 天：TS 联合类型和类型收窄

::: tip 阶段
**阶段：** TypeScript 从 0 到项目可用

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 想一个例子：用户状态可能是 active 或 disabled。
- 写今天目标：会用联合类型，不乱写 string。

09:00-12:00：

- 看 Narrowing：https://www.typescriptlang.org/docs/handbook/2/narrowing.html
- 看 Literal Types：https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
- 看 Union Types：https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
- 重点记：`'active' | 'disabled'`、typeof、Array.isArray、判空。

12:00-14:00：

- Playground 写 5 个类型收窄例子。
- 尤其练 `string | number`、`User | null`。

14:00-18:00：

- 给用户状态定义联合类型：`UserStatus = 'active' | 'disabled'`。
- 用户管理页根据状态显示不同标签。
- 处理 `profile` 可能为 null 的情况。

19:30-21:00：

- 刷 LeetCode 367 有效的完全平方数：https://leetcode.cn/problems/valid-perfect-square/
- 刷 LeetCode 33 搜索旋转排序数组：https://leetcode.cn/problems/search-in-rotated-sorted-array/

21:00-22:30：

- 写笔记：《联合类型和类型收窄》。
- Git commit：`feat: type user status with union`
- 当天产出：项目里开始用联合类型。

## 学习结果和验收

08:30-09:00：

- 知道：状态不应该随便写 string。
- 理解：联合类型可以限制值的范围。
- 学会：写 `'active' | 'disabled'`。
- 验收：能解释为什么比普通 string 更安全。

09:00-12:00：

- 知道：联合类型、字面量类型、typeof、判空、类型收窄。
- 理解：TS 需要你通过判断证明某个值是什么类型。
- 学会：处理 `User | null`。
- 验收：能写 5 个类型收窄例子。

12:00-14:00：

- 知道：`null` 和 `undefined` 是常见坑。
- 理解：用户信息未登录时可能不存在。
- 学会：写安全访问。
- 验收：能解释为什么 `profile.nickname` 可能报错。

14:00-18:00：

- 知道：用户状态适合联合类型。
- 理解：UI 展示可以根据状态分支。
- 学会：用状态类型渲染不同标签。
- 验收：active/disabled 显示不同样式，且类型不允许乱写状态。

19:30-21:00：

- 知道：旋转数组还是二分变形。
- 理解：要判断哪半边有序。
- 学会：写较复杂边界判断。
- 验收：能讲出旋转数组查找思路。

21:00-22:30：

- 知道：类型收窄是 TS 日常高频。
- 理解：判断逻辑既服务运行时，也服务类型系统。
- 学会：总结联合类型用法。
- 验收：写完《联合类型和类型收窄》。

## 页面导航

- [上一天](/days/day-10/)
- [下一天](/days/day-12/)
- [返回总览](/overview)
