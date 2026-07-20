---
title: 第 30 天：浏览器渲染和性能指标
---

# 第 30 天：浏览器渲染和性能指标

::: tip 阶段
**阶段：** 浏览器 / 网络 / 性能 / 测试 / 部署

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 打开项目首页，记录加载感受。
- 写今天目标：知道首屏慢怎么查。

09:00-12:00：

- 看 web.dev 性能学习：https://web.dev/learn/performance
- 看 Core Web Vitals：https://web.dev/articles/vitals
- 看 MDN 性能：https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Extensions/Performance

12:00-14:00：

- 看 Chrome DevTools Performance：https://developer.chrome.com/docs/devtools/performance
- 只看录制流程。

14:00-18:00：

- 用 Performance 面板录一次项目。
- 检查路由懒加载是否生效。
- README 写性能优化小节草稿。

19:30-21:00：

- 刷 LeetCode 300 最长递增子序列：https://leetcode.cn/problems/longest-increasing-subsequence/
- 刷 LeetCode 322 零钱兑换：https://leetcode.cn/problems/coin-change/

21:00-22:30：

- 写笔记：《首屏慢怎么排查》。
- Git commit：`docs: add performance notes`
- 当天产出：性能排查笔记。

## 学习结果和验收

08:30-09:00：

- 知道：今天开始补浏览器和性能。
- 理解：项目能跑不代表体验好。
- 学会：打开 DevTools。
- 验收：能打开 Performance 面板。

09:00-12:00：

- 知道：LCP、INP、CLS 是核心体验指标。
- 理解：浏览器渲染经过 HTML/CSS/JS 解析、布局、绘制。
- 学会：说出首屏慢的可能原因。
- 验收：能解释 LCP 代表什么。

12:00-14:00：

- 知道：Performance 面板能录制页面加载。
- 理解：性能优化要先测量再优化。
- 学会：录制一次页面加载。
- 验收：能找到主要 JS/CSS 资源。

14:00-18:00：

- 知道：路由懒加载可以减少首屏 JS。
- 理解：Element Plus 整包引入会让包偏大。
- 学会：记录一次构建 warning。
- 验收：README 有性能优化小节草稿。

19:30-21:00：

- 知道：LIS 和零钱兑换是 dp 进阶题。
- 理解：dp 难点是状态和转移。
- 学会：至少写出基础解法。
- 验收：能说出每题 dp 数组含义。

21:00-22:30：

- 知道：首屏慢排查要有路径。
- 理解：从 Network、Performance、Bundle 三个方向看。
- 学会：写排查清单。
- 验收：写完《首屏慢怎么排查》。

## 页面导航

- [上一天](/days/day-29/)
- [下一天](/days/day-31/)
- [返回总览](/overview)
