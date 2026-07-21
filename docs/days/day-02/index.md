---
title: 第 2 天：HTML 语义化和表单
---

# 第 2 天：HTML 语义化和表单

::: tip 阶段
**阶段：** JS / CSS / 项目环境

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：`main.ts` 是应用入口，`App.vue` 是根组件，`router/index.ts` 管页面跳转。
- 理解：入口文件负责把 Vue、路由、状态管理挂到页面上。
- 学会：从入口追到登录页组件。
- 验收：能说出打开 `/login` 时大概经过哪些文件。
:::

### 具体安排

- 回忆项目入口：`main.ts`、`App.vue`、`router/index.ts`。
- 写今天目标：把登录页结构看懂，并补充表单细节。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：语义化标签、form、label、input、button 的作用。
- 理解：label 不只是显示文字，还能提高可访问性和点击体验。
- 学会：写结构清晰的登录表单。
- 验收：不用查文档能写出一个包含 label、input、button 的登录表单。
:::

### 具体安排

- 看 MDN HTML 基础：https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Structuring_content
  - 必看章节：`HTML 基础语法`、`“头”里有什么--HTML 元信息`、`HTML 的标题和段落`、`强调与重要性`、`列表`、`构建文档`、`创建超链接`、`表单和按钮`、`HTML 调试`。
  - 选看章节：`文本格式进阶`、`HTML 表格基础`。今天先不用看图片、音视频、iframe、表格进阶。
  - 读完要会：能判断什么时候用 `header/main/nav/section/article/footer`，能写出有标题层级、有段落、有列表、有链接的页面结构。
- 看 MDN 表单：https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Extensions/Forms
  - 必看章节：`创建我的第一个表单`、`如何构建 HTML 表单`、`原生表单部件`、`HTML5 的输入类型`、`其他表单控件`。
  - 今天先略读：`样式化 Web 表单` 和 `表单数据校验`；高级自定义表单控件、旧浏览器兼容先跳过。
  - 读完要会：能写 `form/label/input/select/textarea/button`，知道 `label for` 要对应输入框 `id`。
- 看 MDN label：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/label
- 重点记：语义化、form、label、input、button。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：placeholder 不能替代 label。
- 理解：页面要给用户和辅助工具都提供清楚结构。
- 学会：判断一个表单是否“看起来能用但结构不专业”。
- 验收：写出 3 条表单可访问性检查项。
:::

### 具体安排

- 看 MDN 可访问性简介：https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Accessibility
  - 必看章节：`什么是无障碍？`、`无障碍工具`、`HTML：无障碍的良好基础`。
  - 略读章节：`CSS 和 JavaScript 无障碍最佳实践`。`WAI-ARIA 基础` 只需要知道 ARIA 是补充语义，不要乱加。
  - 读完要会：能说清楚为什么 `placeholder` 不能代替 `label`，为什么按钮必须有可理解的文本或可访问名称。
- 轻整理：为什么表单不能只靠 placeholder。


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：Vue 模板里可以写 HTML 结构和组件。
- 理解：先把页面结构写清楚，再谈样式和交互。
- 学会：改 `LoginView.vue` 的模板。
- 验收：登录页字段清晰，输入框和按钮功能正常。
:::

### 具体安排

- 修改 `LoginView.vue`。
- 给登录页补充更明确的表单提示。
- 检查输入框、按钮、错误提示的结构。
- 不碰复杂 TS，主要改模板和样式。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：双指针适合处理数组左右边界或原地修改。
- 理解：移除元素不一定真的删除，可以覆盖有效区域。
- 学会：写数组双指针题。
- 验收：能解释为什么 `slow` 指针代表有效数组长度。
:::

### 具体安排

- 刷 LeetCode 977 有序数组的平方：https://leetcode.cn/problems/squares-of-a-sorted-array/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。
- 刷 LeetCode 209 长度最小的子数组：https://leetcode.cn/problems/minimum-size-subarray-sum/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：HTML 面试会问语义化、表单、可访问性。
- 理解：语义化不是“标签更好看”，而是结构更准确。
- 学会：总结成面试可说的话。
- 验收：写完《HTML 表单和语义化》。
:::

### 具体安排

- 写笔记：《HTML 表单和语义化》。
- Git commit：`feat: improve login form structure`
- 当天产出：登录页结构更清晰。


