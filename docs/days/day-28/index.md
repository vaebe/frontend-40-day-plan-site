---
title: 第 28 天：ECharts 数据看板
---

# 第 28 天：ECharts 数据看板

::: tip 阶段
**阶段：** Vue3 + TypeScript 主项目

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：Dashboard 要展示统计信息，不只是欢迎页。
- 理解：图表是数据管理平台的第一印象。
- 学会：画看板草图。
- 验收：草图包含卡片、折线图、柱状图、饼图。
:::

### 具体安排

- 画 Dashboard 看板草图。
- 写今天目标：首页有真实图表。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：ECharts 需要容器、实例、option。
- 理解：图表数据和展示配置分离。
- 学会：初始化基础图表。
- 验收：能写一个简单柱状图 option。
:::

### 具体安排

- 看 ECharts 快速上手：https://echarts.apache.org/handbook/zh/get-started/
  - 必看章节：获取 ECharts、绘制一个简单图表、完整代码。
  - 读完要会：知道 chart 初始化、option、setOption 三步。
- 看 柱状图：https://echarts.apache.org/handbook/zh/how-to/chart-types/bar/basic-bar/
  - 必看：基础柱状图配置，重点记 `xAxis/yAxis/series/type: bar`。
- 看 折线图：https://echarts.apache.org/handbook/zh/how-to/chart-types/line/basic-line/
  - 必看：基础折线图配置，重点记 `series/type: line`、平滑曲线、面积图先略读。
- 看 饼图：https://echarts.apache.org/handbook/zh/how-to/chart-types/pie/basic-pie/
  - 必看：基础饼图配置，重点记 `series/type: pie`、`radius`、`data`。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：图表要处理 resize 和 dispose。
- 理解：组件销毁不 dispose 可能有内存问题。
- 学会：记录图表生命周期。
- 验收：写出初始化、resize、销毁三个步骤。
:::

### 具体安排

- 看 图表容器大小：https://echarts.apache.org/handbook/zh/concepts/chart-size/
  - 必看：容器需要明确宽高、页面 resize 时调用 `chart.resize()`。
- 整理：resize 和 dispose。


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：首页图表可以封装成组件或 composable。
- 理解：重复初始化逻辑不该散落在多个图表里。
- 学会：写 Dashboard 图表。
- 验收：至少 3 种图表显示正常，窗口变化后不崩。
:::

### 具体安排

- Dashboard 增加统计卡片、折线图、柱状图、饼图。
  - 必看：基础柱状图配置，重点记 `xAxis/yAxis/series/type: bar`。
- 封装 `useECharts` 或 `ChartCard`。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：动态规划需要状态定义。
- 理解：爬楼梯是 dp 入门题。
- 学会：写一维 dp。
- 验收：能说出 `dp[i]` 代表什么。
:::

### 具体安排

- 刷 LeetCode 70 爬楼梯：https://leetcode.cn/problems/climbing-stairs/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。
- 刷 LeetCode 746 使用最小花费爬楼梯：https://leetcode.cn/problems/min-cost-climbing-stairs/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：ECharts 要能讲生命周期。
- 理解：图表不是只会复制 option。
- 学会：写图表总结。
- 验收：写完《ECharts 在 Vue 中初始化、resize、销毁》。
:::

### 具体安排

- 写笔记：《ECharts 在 Vue 中初始化、resize、销毁》。
- Git commit：`feat: add dashboard charts`
- 当天产出：数据看板。


