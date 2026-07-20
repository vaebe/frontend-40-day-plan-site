---
title: 第 25 天：封装 DataTable
---

# 第 25 天：封装 DataTable

::: tip 阶段
**阶段：** Vue3 + TypeScript 主项目

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 写今天目标：表格组件化，但保留插槽扩展能力。

09:00-12:00：

- 看 Vue 插槽：https://cn.vuejs.org/guide/components/slots.html
- 看 作用域插槽：https://cn.vuejs.org/guide/components/slots.html#scoped-slots
- 看 Element Plus Table 插槽示例。

12:00-14:00：

- 设计 DataTable 参数：
  - columns
  - data
  - loading
  - pagination
  - selection

14:00-18:00：

- 封装 `DataTable.vue`。
- 支持操作列插槽。
- 用户管理页改用 DataTable。

19:30-21:00：

- 刷 LeetCode 11 盛最多水的容器：https://leetcode.cn/problems/container-with-most-water/
- 刷 LeetCode 15 三数之和：https://leetcode.cn/problems/3sum/

21:00-22:30：

- 写笔记：《作用域插槽为什么适合表格封装》。
- Git commit：`feat: add reusable data table`
- 当天产出：DataTable。

## 学习结果和验收

08:30-09:00：

- 知道：表格是后台系统复用最高的组件之一。
- 理解：DataTable 必须保留自定义列能力。
- 学会：设计 columns。
- 验收：列出 columns、data、loading、pagination、selection。

09:00-12:00：

- 知道：作用域插槽能把行数据暴露给父组件。
- 理解：操作列按钮、状态标签都需要自定义渲染。
- 学会：写作用域插槽。
- 验收：能写 `&lt;slot :row="row"&gt;` 这类结构。

12:00-14:00：

- 知道：表格封装不能封死。
- 理解：可复用和灵活性要平衡。
- 学会：设计 DataTable API。
- 验收：API 草图包含自定义列渲染出口。

14:00-18:00：

- 知道：DataTable 负责通用表格能力。
- 理解：业务操作仍然留给页面处理。
- 学会：封装 DataTable。
- 验收：用户管理页改用 DataTable，操作列还能自定义。

19:30-21:00：

- 知道：三数之和要排序和去重。
- 理解：双指针降低复杂度。
- 学会：处理重复元素。
- 验收：能讲出去重逻辑为什么必要。

21:00-22:30：

- 知道：表格封装面试会问插槽和灵活性。
- 理解：组件封装要有边界。
- 学会：总结作用域插槽。
- 验收：写完《作用域插槽为什么适合表格封装》。

## 页面导航

- [上一天](/days/day-24/)
- [下一天](/days/day-26/)
- [返回总览](/overview)
