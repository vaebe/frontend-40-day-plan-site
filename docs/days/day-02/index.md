---
title: 第 2 天：HTML 语义化和表单
---

# 第 2 天：HTML 语义化和表单

::: tip 阶段
**阶段：** JS / CSS / 项目环境

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 回忆项目入口：`main.ts`、`App.vue`、`router/index.ts`。
- 写今天目标：把登录页结构看懂，并补充表单细节。

09:00-12:00：

- 看 MDN HTML 基础：https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Structuring_content
- 看 MDN 表单：https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Extensions/Forms
- 看 MDN label：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/label
- 重点记：语义化、form、label、input、button。

12:00-14:00：

- 看 MDN 可访问性简介：https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Accessibility
- 轻整理：为什么表单不能只靠 placeholder。

14:00-18:00：

- 修改 `LoginView.vue`。
- 给登录页补充更明确的表单提示。
- 检查输入框、按钮、错误提示的结构。
- 不碰复杂 TS，主要改模板和样式。

19:30-21:00：

- 刷 LeetCode 977 有序数组的平方：https://leetcode.cn/problems/squares-of-a-sorted-array/
- 刷 LeetCode 209 长度最小的子数组：https://leetcode.cn/problems/minimum-size-subarray-sum/

21:00-22:30：

- 写笔记：《HTML 表单和语义化》。
- Git commit：`feat: improve login form structure`
- 当天产出：登录页结构更清晰。

## 学习结果和验收

08:30-09:00：

- 知道：`main.ts` 是应用入口，`App.vue` 是根组件，`router/index.ts` 管页面跳转。
- 理解：入口文件负责把 Vue、路由、状态管理挂到页面上。
- 学会：从入口追到登录页组件。
- 验收：能说出打开 `/login` 时大概经过哪些文件。

09:00-12:00：

- 知道：语义化标签、form、label、input、button 的作用。
- 理解：label 不只是显示文字，还能提高可访问性和点击体验。
- 学会：写结构清晰的登录表单。
- 验收：不用查文档能写出一个包含 label、input、button 的登录表单。

12:00-14:00：

- 知道：placeholder 不能替代 label。
- 理解：页面要给用户和辅助工具都提供清楚结构。
- 学会：判断一个表单是否“看起来能用但结构不专业”。
- 验收：写出 3 条表单可访问性检查项。

14:00-18:00：

- 知道：Vue 模板里可以写 HTML 结构和组件。
- 理解：先把页面结构写清楚，再谈样式和交互。
- 学会：改 `LoginView.vue` 的模板。
- 验收：登录页字段清晰，输入框和按钮功能正常。

19:30-21:00：

- 知道：双指针适合处理数组左右边界或原地修改。
- 理解：移除元素不一定真的删除，可以覆盖有效区域。
- 学会：写数组双指针题。
- 验收：能解释为什么 `slow` 指针代表有效数组长度。

21:00-22:30：

- 知道：HTML 面试会问语义化、表单、可访问性。
- 理解：语义化不是“标签更好看”，而是结构更准确。
- 学会：总结成面试可说的话。
- 验收：写完《HTML 表单和语义化》。

## 页面导航

- [上一天](/days/day-01/)
- [下一天](/days/day-03/)
- [返回总览](/overview)
