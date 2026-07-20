---
title: 第 18 天：组件通信和弹窗组件
---

# 第 18 天：组件通信和弹窗组件

::: tip 阶段
**阶段：** Vue3 + TypeScript 主项目

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 写今天目标：封装第一个通用组件。

09:00-12:00：

- 看 Vue 组件基础：https://cn.vuejs.org/guide/essentials/component-basics.html
- 看 Props：https://cn.vuejs.org/guide/components/props.html
- 看 Emits：https://cn.vuejs.org/guide/components/events.html
- 看 v-model：https://cn.vuejs.org/guide/components/v-model.html

12:00-14:00：

- 看 Vue 插槽：https://cn.vuejs.org/guide/components/slots.html
- 画 BaseDialog 的 props 和事件。

14:00-18:00：

- 封装 `BaseDialog.vue`。
- 支持 `modelValue`、`title`、确认、取消、默认插槽。
- 用户编辑弹窗使用 BaseDialog。

19:30-21:00：

- 刷 LeetCode 46 全排列：https://leetcode.cn/problems/permutations/
- 刷 LeetCode 47 全排列 II：https://leetcode.cn/problems/permutations-ii/

21:00-22:30：

- 写笔记：《Vue 组件通信方式》。
- Git commit：`feat: add base dialog component`
- 当天产出：第一个通用组件。

## 学习结果和验收

08:30-09:00：

- 知道：组件封装是项目亮点之一。
- 理解：封装不是为了少写代码，而是让重复交互一致。
- 学会：找弹窗重复场景。
- 验收：能列出 BaseDialog 需要哪些 props 和事件。

09:00-12:00：

- 知道：props 向下传，emit 向上传，v-model 做双向绑定。
- 理解：组件不要偷偷改父组件数据。
- 学会：写 `defineProps`、`defineEmits`。
- 验收：能写一个子组件向父组件发事件的例子。

12:00-14:00：

- 知道：插槽让组件内部留出自定义区域。
- 理解：弹窗内容不同，但外壳和按钮可以复用。
- 学会：设计 BaseDialog API。
- 验收：写出 props、events、slots 草图。

14:00-18:00：

- 知道：BaseDialog 是 UI 组件，不负责具体业务。
- 理解：确认、取消、展示状态应该由父组件控制。
- 学会：封装 `BaseDialog.vue`。
- 验收：用户编辑弹窗能使用 BaseDialog。

19:30-21:00：

- 知道：排列题和组合题区别是元素顺序是否重要。
- 理解：全排列需要 used 数组。
- 学会：写排列回溯。
- 验收：能讲出 used 的作用。

21:00-22:30：

- 知道：组件通信是 Vue 必考。
- 理解：props/emit/v-model/slot 各解决不同问题。
- 学会：写组件通信总结。
- 验收：写完《Vue 组件通信方式》。

## 页面导航

- [上一天](/days/day-17/)
- [下一天](/days/day-19/)
- [返回总览](/overview)
