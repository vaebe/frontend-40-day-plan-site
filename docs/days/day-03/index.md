---
title: 第 3 天：CSS 盒模型、Flex 和响应式
---

# 第 3 天：CSS 盒模型、Flex 和响应式

::: tip 阶段
**阶段：** JS / CSS / 项目环境

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 打开 `src/styles/main.css`。
- 写今天目标：看懂项目主要布局 CSS。

09:00-12:00：

- 看 MDN 盒模型：https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Styling_basics/Box_model
- 看 MDN Flexbox：https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Flexbox
- 看 MDN 媒体查询：https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries
- 重点记：盒模型、主轴、交叉轴、响应式断点。

12:00-14:00：

- 看 CSS Tricks Flexbox 图解：https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- 只看图，午休。

14:00-18:00：

- 修改 Dashboard 布局。
- 调整 `.metric-grid`，让它在手机宽度下单列。
- 给用户管理页加统一页面标题和内容区。

19:30-21:00：

- 看代码随想录链表理论：https://programmercarl.com/链表理论基础.html
- 刷 LeetCode 203 移除链表元素：https://leetcode.cn/problems/remove-linked-list-elements/
- 刷 LeetCode 206 反转链表：https://leetcode.cn/problems/reverse-linked-list/

21:00-22:30：

- 写笔记：《盒模型、Flex、响应式》。
- Git commit：`style: refine responsive layout`
- 当天产出：项目在 PC 和窄屏下都不崩。

## 学习结果和验收

08:30-09:00：

- 知道：全局样式在 `src/styles/main.css`。
- 理解：项目的页面观感通常由全局变量、布局类、组件库共同决定。
- 学会：定位某个页面样式来自哪里。
- 验收：能找到 `.app-shell`、`.sidebar`、`.workspace`。

09:00-12:00：

- 知道：盒模型包含 content、padding、border、margin。
- 理解：Flex 解决一维布局，Grid 更适合二维布局。
- 学会：用 Flex 做顶部栏，用 Grid 做卡片布局。
- 验收：能手写一个左侧栏 + 右侧内容区布局。

12:00-14:00：

- 知道：`justify-content` 管主轴，`align-items` 管交叉轴。
- 理解：Flex 图解能帮你快速判断方向。
- 学会：看到布局错位时先判断主轴方向。
- 验收：写出 5 个常用 Flex 属性和作用。

14:00-18:00：

- 知道：响应式靠媒体查询、弹性布局、合理宽度约束。
- 理解：移动端不是简单缩小，而是布局重排。
- 学会：让卡片在 PC 三列、手机一列。
- 验收：缩小浏览器宽度，页面不横向溢出。

19:30-21:00：

- 知道：链表节点有值和 next 指针。
- 理解：反转链表本质是改变指针方向。
- 学会：写链表遍历和反转。
- 验收：能画出反转链表的三指针变化。

21:00-22:30：

- 知道：CSS 面试常问盒模型、Flex、响应式。
- 理解：布局能力是前端基本功。
- 学会：把布局问题总结成可复述答案。
- 验收：写完《盒模型、Flex、响应式》。

## 页面导航

- [上一天](/days/day-02/)
- [下一天](/days/day-04/)
- [返回总览](/overview)
