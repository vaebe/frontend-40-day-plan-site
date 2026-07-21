---
title: 第 24 天：封装 SearchForm
---

# 第 24 天：封装 SearchForm

::: tip 阶段
**阶段：** Vue3 + TypeScript 主项目

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：搜索区域在多个页面会重复。
- 理解：重复逻辑适合抽组件，但别过度封装。
- 学会：识别重复点。
- 验收：列出 SearchForm 需要支持的字段类型。
:::

### 具体安排

- 找用户管理页重复的搜索逻辑。
- 写今天目标：搜索区域组件化。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：配置化组件需要 props 类型设计。
- 理解：字段配置决定渲染什么控件。
- 学会：设计 `SearchField` 类型。
- 验收：能写出 input/select/date 的配置对象。
:::

### 具体安排

- 复看 Vue Props：https://cn.vuejs.org/guide/components/props.html
  - 必看章节：Props 声明、传递 prop 的细节、单向数据流、Prop 校验。
  - 读完要会：知道子组件不要直接改父组件传下来的 prop。
- 复看 Vue Emits：https://cn.vuejs.org/guide/components/events.html
  - 必看章节：触发与监听事件、事件参数、声明触发的事件、事件校验。
  - 读完要会：子组件用 `emit` 通知父组件，不直接操作父组件数据。
- 看 Vue TS props：https://cn.vuejs.org/guide/typescript/composition-api.html#typing-component-props
- 看 Element Plus Input/Select/DatePicker 文档。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：SearchForm 的核心是配置和表单数据绑定。
- 理解：配置越多，复杂度越高。
- 学会：设计组件 API。
- 验收：API 草图包含 fields、modelValue、search、reset。
:::

### 具体安排

- 设计 SearchForm 配置：
  - 必看章节：基础表单、行内表单、表单校验、自定义校验规则、重置表单。
  - 读完要会：能做新增/编辑弹窗表单。
  - label
  - prop
  - type
  - options


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：组件应该暴露清晰事件。
- 理解：搜索和重置由父页面决定后续请求。
- 学会：封装 `SearchForm.vue`。
- 验收：用户管理页改用 SearchForm 且功能不退化。
:::

### 具体安排

- 封装 `SearchForm.vue`。
  - 必看章节：基础表单、行内表单、表单校验、自定义校验规则、重置表单。
  - 读完要会：能做新增/编辑弹窗表单。
- 支持 input、select、search、reset。
- 用户管理页改用 SearchForm。
  - 必看章节：基础表单、行内表单、表单校验、自定义校验规则、重置表单。
  - 读完要会：能做新增/编辑弹窗表单。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：滑动窗口适合连续子串/子数组问题。
- 理解：窗口扩大和收缩要有条件。
- 学会：写最长无重复子串。
- 验收：能说出 left 什么时候移动。
:::

### 具体安排

- 刷 LeetCode 3 无重复字符最长子串：https://leetcode.cn/problems/longest-substring-without-repeating-characters/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。
- 刷 LeetCode 438 找到字符串中所有字母异位词：https://leetcode.cn/problems/find-all-anagrams-in-a-string/
  - 做题步骤：先读题目描述、示例、约束；自己写 20-30 分钟；能 AC 后再看题解优化。
  - 提交后要补：时间复杂度、空间复杂度、一个容易错的边界条件。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：配置化组件是项目亮点也可能是坑。
- 理解：要讲权衡，不要说“封装越多越好”。
- 学会：总结封装利弊。
- 验收：写完《配置化组件的利弊》。
:::

### 具体安排

- 写笔记：《配置化组件的利弊》。
- Git commit：`feat: add reusable search form`
- 当天产出：SearchForm。
  - 必看章节：基础表单、行内表单、表单校验、自定义校验规则、重置表单。
  - 读完要会：能做新增/编辑弹窗表单。


