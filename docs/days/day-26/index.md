---
title: 第 26 天：角色管理
---

# 第 26 天：角色管理

::: tip 阶段
**阶段：** Vue3 + TypeScript 主项目

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 写今天目标：角色可以绑定权限。

09:00-12:00：

- 看 Element Plus Tree：https://element-plus.org/zh-CN/component/tree.html
- 看 Element Plus TreeSelect：https://element-plus.org/zh-CN/component/tree-select.html
- 复看 Vue 列表渲染：https://cn.vuejs.org/guide/essentials/list.html

12:00-14:00：

- 画角色和权限关系。

14:00-18:00：

- 完成角色管理页面。
- 角色列表、添加、编辑、删除。
- 用 Tree 给角色分配菜单权限。

19:30-21:00：

- 刷 LeetCode 150 逆波兰表达式求值：https://leetcode.cn/problems/evaluate-reverse-polish-notation/
- 刷 LeetCode 239 滑动窗口最大值：https://leetcode.cn/problems/sliding-window-maximum/

21:00-22:30：

- 写笔记：《树形权限数据怎么处理》。
- Git commit：`feat: implement role management starter`
- 当天产出：角色管理页。

## 学习结果和验收

08:30-09:00：

- 知道：角色是权限的中间层。
- 理解：用户绑定角色，角色绑定权限。
- 学会：画角色权限关系。
- 验收：能解释为什么不直接给用户绑所有权限。

09:00-12:00：

- 知道：Tree 组件适合展示菜单权限。
- 理解：权限分配常涉及选中、半选、父子节点。
- 学会：使用 Tree 基础 API。
- 验收：能展示一个树形菜单。

12:00-14:00：

- 知道：权限树要考虑父子关系。
- 理解：选择父节点是否自动选子节点是业务规则。
- 学会：设计角色权限数据。
- 验收：写出角色对象和权限码数组。

14:00-18:00：

- 知道：角色管理页也是 CRUD + 权限树。
- 理解：分配权限是角色管理核心。
- 学会：做角色列表和权限分配。
- 验收：角色能增删改，并能保存权限选择。

19:30-21:00：

- 知道：栈也能处理表达式。
- 理解：逆波兰表达式遇到操作符就弹出两个数计算。
- 学会：写栈模拟。
- 验收：能解释弹出顺序。

21:00-22:30：

- 知道：树形权限是后台项目关键点。
- 理解：菜单权限和按钮权限要区分。
- 学会：写树形权限总结。
- 验收：写完《树形权限数据怎么处理》。

## 页面导航

- [上一天](/days/day-25/)
- [下一天](/days/day-27/)
- [返回总览](/overview)
