---
title: 第 22 天：RBAC 权限模型
---

# 第 22 天：RBAC 权限模型

::: tip 阶段
**阶段：** Vue3 + TypeScript 主项目

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 写今天目标：用户、角色、菜单、按钮权限能串起来。

09:00-12:00：

- 看 Vue Router 动态添加路由 API：https://router.vuejs.org/zh/api/interfaces/Router.html#addroute
- 看 Vue 条件渲染：https://cn.vuejs.org/guide/essentials/conditional.html
- 搜索理解关键词：RBAC 权限模型。

12:00-14:00：

- 画 RBAC 图：User -&gt; Role -&gt; Permissions -&gt; Menu/Button。

14:00-18:00：

- 定义菜单类型和权限类型。
- 根据用户权限控制侧边栏菜单。
- 根据权限码控制用户管理新增按钮是否显示。

19:30-21:00：

- 刷 LeetCode 100 相同的树：https://leetcode.cn/problems/same-tree/
- 刷 LeetCode 572 另一棵树的子树：https://leetcode.cn/problems/subtree-of-another-tree/

21:00-22:30：

- 写笔记：《前端权限和后端权限边界》。
- Git commit：`feat: add permission based menu visibility`
- 当天产出：权限雏形。

## 学习结果和验收

08:30-09:00：

- 知道：RBAC 是基于角色的访问控制。
- 理解：用户不直接拥有所有权限，而是通过角色获得权限。
- 学会：画 User -&gt; Role -&gt; Permission。
- 验收：能说出用户、角色、权限、菜单四者关系。

09:00-12:00：

- 知道：前端可控制菜单和按钮显示。
- 理解：真正安全必须后端鉴权，前端权限只是体验层。
- 学会：根据权限码判断是否显示按钮。
- 验收：能写 `hasPermission('user:create')`。

12:00-14:00：

- 知道：权限设计要先画模型。
- 理解：不画图容易把菜单权限和按钮权限混在一起。
- 学会：画 RBAC 图。
- 验收：图里包含 User、Role、Menu、Button Permission。

14:00-18:00：

- 知道：菜单可见性可以由权限控制。
- 理解：侧边栏不是写死的，而是根据权限过滤。
- 学会：根据权限过滤菜单。
- 验收：没有权限时用户管理新增按钮不显示。

19:30-21:00：

- 知道：树题常用递归判断结构。
- 理解：相同的树要同时比较值和左右子树。
- 学会：写树结构判断。
- 验收：能解释递归返回 false 的条件。

21:00-22:30：

- 知道：权限系统是简历亮点。
- 理解：要强调前后端权限边界。
- 学会：写权限设计总结。
- 验收：写完《前端权限和后端权限边界》。

## 页面导航

- [上一天](/days/day-21/)
- [下一天](/days/day-23/)
- [返回总览](/overview)
