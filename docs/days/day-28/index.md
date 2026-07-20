---
title: 第 28 天：ECharts 数据看板
---

# 第 28 天：ECharts 数据看板

::: tip 阶段
**阶段：** Vue3 + TypeScript 主项目

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 画 Dashboard 看板草图。
- 写今天目标：首页有真实图表。

09:00-12:00：

- 看 ECharts 快速上手：https://echarts.apache.org/handbook/zh/get-started/
- 看 柱状图：https://echarts.apache.org/handbook/zh/how-to/chart-types/bar/basic-bar/
- 看 折线图：https://echarts.apache.org/handbook/zh/how-to/chart-types/line/basic-line/
- 看 饼图：https://echarts.apache.org/handbook/zh/how-to/chart-types/pie/basic-pie/

12:00-14:00：

- 看 图表容器大小：https://echarts.apache.org/handbook/zh/concepts/chart-size/
- 整理：resize 和 dispose。

14:00-18:00：

- Dashboard 增加统计卡片、折线图、柱状图、饼图。
- 封装 `useECharts` 或 `ChartCard`。

19:30-21:00：

- 刷 LeetCode 70 爬楼梯：https://leetcode.cn/problems/climbing-stairs/
- 刷 LeetCode 746 使用最小花费爬楼梯：https://leetcode.cn/problems/min-cost-climbing-stairs/

21:00-22:30：

- 写笔记：《ECharts 在 Vue 中初始化、resize、销毁》。
- Git commit：`feat: add dashboard charts`
- 当天产出：数据看板。

## 学习结果和验收

08:30-09:00：

- 知道：Dashboard 要展示统计信息，不只是欢迎页。
- 理解：图表是数据管理平台的第一印象。
- 学会：画看板草图。
- 验收：草图包含卡片、折线图、柱状图、饼图。

09:00-12:00：

- 知道：ECharts 需要容器、实例、option。
- 理解：图表数据和展示配置分离。
- 学会：初始化基础图表。
- 验收：能写一个简单柱状图 option。

12:00-14:00：

- 知道：图表要处理 resize 和 dispose。
- 理解：组件销毁不 dispose 可能有内存问题。
- 学会：记录图表生命周期。
- 验收：写出初始化、resize、销毁三个步骤。

14:00-18:00：

- 知道：首页图表可以封装成组件或 composable。
- 理解：重复初始化逻辑不该散落在多个图表里。
- 学会：写 Dashboard 图表。
- 验收：至少 3 种图表显示正常，窗口变化后不崩。

19:30-21:00：

- 知道：动态规划需要状态定义。
- 理解：爬楼梯是 dp 入门题。
- 学会：写一维 dp。
- 验收：能说出 `dp[i]` 代表什么。

21:00-22:30：

- 知道：ECharts 要能讲生命周期。
- 理解：图表不是只会复制 option。
- 学会：写图表总结。
- 验收：写完《ECharts 在 Vue 中初始化、resize、销毁》。

## 页面导航

- [上一天](/days/day-27/)
- [下一天](/days/day-29/)
- [返回总览](/overview)
