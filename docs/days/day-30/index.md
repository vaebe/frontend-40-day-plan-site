---
title: 第 30 天：浏览器渲染和性能指标
---

# 第 30 天：浏览器渲染和性能指标

::: tip 阶段
**阶段：** 浏览器 / 网络 / 性能 / 测试 / 部署

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：今天开始补浏览器和性能。
- 理解：项目能跑不代表体验好。
- 学会：打开 DevTools。
- 验收：能打开 Performance 面板。
:::

### 具体安排

- 打开项目首页，记录加载感受。
- 写今天目标：知道首屏慢怎么查。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：LCP、INP、CLS 是核心体验指标。
- 理解：浏览器渲染经过 HTML/CSS/JS 解析、布局、绘制。
- 学会：说出首屏慢的可能原因。
- 验收：能解释 LCP 代表什么。
:::

### 具体安排

- 看 web.dev 性能学习：https://web.dev/learn/performance
  - 必看章节：Why performance matters、HTML performance features、CSS performance features、JavaScript performance features、Images、Lazy loading。
  - 读完要会：能说出 LCP/INP/CLS 影响什么体验。
- 看 Core Web Vitals：https://web.dev/articles/vitals
  - 必看指标：LCP、INP、CLS；看每个指标的含义和好/需改进/差的阈值。
  - 读完要会：用一句话解释每个指标。
- 看 MDN 性能：https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Extensions/Performance
  - 必看章节：Web performance 是什么、感知性能、测量性能、优化启动性能。
  - 读完要会：能列出图片、JS 包体积、缓存、懒加载几个优化方向。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：Performance 面板能录制页面加载。
- 理解：性能优化要先测量再优化。
- 学会：录制一次页面加载。
- 验收：能找到主要 JS/CSS 资源。
:::

### 具体安排

- 看 Chrome DevTools Performance：https://developer.chrome.com/docs/devtools/performance
  - 必看章节：录制性能、分析运行时性能、查看火焰图和主线程。
  - 读完要会：能录一次页面加载，找到耗时最长的任务。
- 只看录制流程。


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：路由懒加载可以减少首屏 JS。
- 理解：Element Plus 整包引入会让包偏大。
- 学会：记录一次构建 warning。
- 验收：README 有性能优化小节草稿。
:::

### 具体安排

- 用 Performance 面板录一次项目。
- 检查路由懒加载是否生效。
  - 必看章节：把组件改成动态导入、把组件按组打包先略读。
  - 读完要会：知道 `() =&gt; import(...)` 为什么能减少首屏包体积。
- README 写性能优化小节草稿。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：LIS 和零钱兑换是 dp 进阶题。
- 理解：dp 难点是状态和转移。
- 学会：至少写出基础解法。
- 验收：能说出每题 dp 数组含义。
:::

### 具体安排

- 刷 LeetCode 300 最长递增子序列：https://leetcode.cn/problems/longest-increasing-subsequence/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。
- 刷 LeetCode 322 零钱兑换：https://leetcode.cn/problems/coin-change/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：首屏慢排查要有路径。
- 理解：从 Network、Performance、Bundle 三个方向看。
- 学会：写排查清单。
- 验收：写完《首屏慢怎么排查》。
:::

### 具体安排

- 写笔记：《首屏慢怎么排查》。
- Git commit：`docs: add performance notes`
- 当天产出：性能排查笔记。


