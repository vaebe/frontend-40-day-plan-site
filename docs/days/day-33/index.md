---
title: 第 33 天：Vitest 单元测试
---

# 第 33 天：Vitest 单元测试

::: tip 阶段
**阶段：** 浏览器 / 网络 / 性能 / 测试 / 部署

**用法：** 每个时间段都已经把“具体看哪些章节”和“学完怎么验收”放在一起。先看验收标准，再照着具体安排做。
:::

[[toc]]

## 08:30-09:00 晨间复盘

::: tip 这一段学完要达到
- 知道：不是所有代码都适合单测。
- 理解：纯函数、权限函数、树转换最适合先测。
- 学会：挑测试目标。
- 验收：列出至少 3 个要测的函数。
:::

### 具体安排

- 找最适合测试的函数：tree、permission、format。
- 写今天目标：至少 8 个单测。


## 09:00-12:00 上午学习

::: tip 这一段学完要达到
- 知道：describe、it、expect、mock。
- 理解：测试就是给输入，验证输出。
- 学会：写基础 Vitest 测试。
- 验收：写一个工具函数测试并通过。
:::

### 具体安排

- 看 Vitest 入门：https://cn.vitest.dev/guide/
  - 必看章节：安装、写第一个测试、配置、命令行。
  - 读完要会：能写一个工具函数测试并运行。
- 看 Vitest API：https://cn.vitest.dev/api/
  - 必看 API：`describe`、`it/test`、`expect`、`beforeEach`、`vi.fn`。
  - 读完要会：能写断言和 mock 函数。
- 看 Mocking：https://cn.vitest.dev/guide/mocking.html
  - 必看章节：Functions、Modules、Timers。
  - 读完要会：能 mock 一个 API 函数。


## 12:00-14:00 中午轻复盘

::: tip 这一段学完要达到
- 知道：组件测试和工具函数测试不同。
- 理解：初期先测纯函数性价比最高。
- 学会：知道 Vue Test Utils 是做什么的。
- 验收：能说出单测和组件测试区别。
:::

### 具体安排

- 看 Vue Test Utils：https://test-utils.vuejs.org/
  - 必看章节：Getting Started、A simple example、Testing User Input、Component events。
  - 读完要会：能挂载组件、触发点击、检查 emit。
- 只理解组件测试是什么。


## 14:00-18:00 下午项目

::: tip 这一段学完要达到
- 知道：测试要覆盖正常情况和边界情况。
- 理解：只测 happy path 不够。
- 学会：给 format、tree、permission 写测试。
- 验收：`pnpm test` 通过，至少 8 个测试用例。
:::

### 具体安排

- 给 format 工具写测试。
- 给 listToTree/treeToList 写测试。
- 给权限函数写测试。
- 跑 `pnpm test`。


## 19:30-21:00 晚上算法

::: tip 这一段学完要达到
- 知道：算法错题要复写。
- 理解：看懂答案不等于会写。
- 学会：重写错题。
- 验收：2 道错题不看答案写出来。
:::

### 具体安排

- 刷动态规划或树的错题 2 道。


## 21:00-22:30 夜间输出

::: tip 这一段学完要达到
- 知道：测试是简历加分项。
- 理解：要讲“测了什么，为什么测这些”。
- 学会：写测试总结。
- 验收：写完《单元测试适合测什么》。
:::

### 具体安排

- 写笔记：《单元测试适合测什么》。
- Git commit：`test: cover utilities and permissions`
- 当天产出：单测覆盖关键工具函数。


