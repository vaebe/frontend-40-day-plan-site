---
title: 第 18 天：组件通信和弹窗组件
---

# 第 18 天：组件通信和弹窗组件

::: tip 阶段
**阶段：** Vue3 + TypeScript 主项目

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：组件封装是项目亮点之一。
- 理解：封装不是为了少写代码，而是让重复交互一致。
- 学会：找弹窗重复场景。
- 验收：能列出 BaseDialog 需要哪些 props 和事件。
:::

### 具体安排

- 写今天目标：封装第一个通用组件。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：props 向下传，emit 向上传，v-model 做双向绑定。
- 理解：组件不要偷偷改父组件数据。
- 学会：写 `defineProps`、`defineEmits`。
- 验收：能写一个子组件向父组件发事件的例子。
:::

### 具体安排

- 看 Vue 组件基础：https://cn.vuejs.org/guide/essentials/component-basics.html
  - 必看章节：定义组件、使用组件、传递 props、监听事件、通过插槽分发内容、动态组件先略读。
  - 读完要会：能拆一个页面组件和一个复用子组件。
- 看 Props：https://cn.vuejs.org/guide/components/props.html
  - 必看章节：Props 声明、传递 prop 的细节、单向数据流、Prop 校验。
  - 读完要会：知道子组件不要直接改父组件传下来的 prop。
- 看 Emits：https://cn.vuejs.org/guide/components/events.html
  - 必看章节：触发与监听事件、事件参数、声明触发的事件、事件校验。
  - 读完要会：子组件用 `emit` 通知父组件，不直接操作父组件数据。
- 看 v-model：https://cn.vuejs.org/guide/components/v-model.html
  - 必看章节：组件上的 v-model、参数、多个 v-model、处理修饰符先略读。
  - 读完要会：能给弹窗或表单组件做双向绑定。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：插槽让组件内部留出自定义区域。
- 理解：弹窗内容不同，但外壳和按钮可以复用。
- 学会：设计 BaseDialog API。
- 验收：写出 props、events、slots 草图。
:::

### 具体安排

- 看 Vue 插槽：https://cn.vuejs.org/guide/components/slots.html
  - 必看章节：插槽内容与出口、默认内容、具名插槽、条件插槽、作用域插槽。
  - 读完要会：知道表格操作列、弹窗 footer 为什么常用插槽。
- 画 BaseDialog 的 props 和事件。
  - 必看章节：基础用法、自定义内容、嵌套 Dialog 只略读、居中内容。
  - 读完要会：能封装新增/编辑弹窗。


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：BaseDialog 是 UI 组件，不负责具体业务。
- 理解：确认、取消、展示状态应该由父组件控制。
- 学会：封装 `BaseDialog.vue`。
- 验收：用户编辑弹窗能使用 BaseDialog。
:::

### 具体安排

- 封装 `BaseDialog.vue`。
  - 必看章节：基础用法、自定义内容、嵌套 Dialog 只略读、居中内容。
  - 读完要会：能封装新增/编辑弹窗。
- 支持 `modelValue`、`title`、确认、取消、默认插槽。
- 用户编辑弹窗使用 BaseDialog。
  - 必看章节：基础用法、自定义内容、嵌套 Dialog 只略读、居中内容。
  - 读完要会：能封装新增/编辑弹窗。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：排列题和组合题区别是元素顺序是否重要。
- 理解：全排列需要 used 数组。
- 学会：写排列回溯。
- 验收：能讲出 used 的作用。
:::

### 具体安排

- 刷 LeetCode 46 全排列：https://leetcode.cn/problems/permutations/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。
- 刷 LeetCode 47 全排列 II：https://leetcode.cn/problems/permutations-ii/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：组件通信是 Vue 必考。
- 理解：props/emit/v-model/slot 各解决不同问题。
- 学会：写组件通信总结。
- 验收：写完《Vue 组件通信方式》。
:::

### 具体安排

- 写笔记：《Vue 组件通信方式》。
- Git commit：`feat: add base dialog component`
- 当天产出：第一个通用组件。


