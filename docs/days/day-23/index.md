---
title: 第 23 天：Element Plus 表格、分页、表单
---

# 第 23 天：Element Plus 表格、分页、表单

::: tip 阶段
**阶段：** Vue3 + TypeScript 主项目

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 写今天目标：用户管理页变成真正 CRUD 雏形。

09:00-12:00：

- 看 Element Plus Table：https://element-plus.org/zh-CN/component/table.html
- 看 Form：https://element-plus.org/zh-CN/component/form.html
- 看 Pagination：https://element-plus.org/zh-CN/component/pagination.html
- 看 Dialog：https://element-plus.org/zh-CN/component/dialog.html

12:00-14:00：

- 写用户管理交互清单：查、新增、编辑、删除、分页。

14:00-18:00：

- 用户管理页实现查询、分页、新增、编辑、删除。
- 数据可以先用 mock。
- 表单校验 username 必填。

19:30-21:00：

- 刷 LeetCode 49 字母异位词分组：https://leetcode.cn/problems/group-anagrams/
- 刷 LeetCode 128 最长连续序列：https://leetcode.cn/problems/longest-consecutive-sequence/

21:00-22:30：

- 写笔记：《表格、分页、表单状态如何组织》。
- Git commit：`feat: implement user crud starter`
- 当天产出：第一个完整业务页。

## 学习结果和验收

08:30-09:00：

- 知道：CRUD 是后台项目核心业务流。
- 理解：查、新增、编辑、删除、分页要形成闭环。
- 学会：列用户管理交互清单。
- 验收：清单包含筛选、分页、弹窗、校验、删除确认。

09:00-12:00：

- 知道：Table、Form、Pagination、Dialog 的基础用法。
- 理解：UI 库负责交互组件，业务状态仍要自己组织。
- 学会：使用 Element Plus 表格和表单。
- 验收：能写一个带校验的表单。

12:00-14:00：

- 知道：业务页开发前先列状态。
- 理解：状态包括数据、loading、分页、弹窗、表单。
- 学会：写页面状态清单。
- 验收：用户管理页状态不漏关键项。

14:00-18:00：

- 知道：完整业务页要处理增删改查。
- 理解：mock 数据也要模拟真实交互。
- 学会：完成用户 CRUD 雏形。
- 验收：用户能新增、编辑、删除、分页。

19:30-21:00：

- 知道：哈希表适合分组和去重。
- 理解：字母异位词可以排序或计数作为 key。
- 学会：写分组题。
- 验收：能解释 key 的设计。

21:00-22:30：

- 知道：表格表单页是面试最容易展开问的部分。
- 理解：要讲清状态组织，而不只是“用了组件库”。
- 学会：写 CRUD 页面总结。
- 验收：写完《表格、分页、表单状态如何组织》。

## 页面导航

- [上一天](/days/day-22/)
- [下一天](/days/day-24/)
- [返回总览](/overview)
