---
title: 第 31 天：HTTP、缓存、跨域、鉴权
---

# 第 31 天：HTTP、缓存、跨域、鉴权

::: tip 阶段
**阶段：** 浏览器 / 网络 / 性能 / 测试 / 部署

**用法：** 先看“今日安排”，做完后用“学习结果和验收”检查自己是否真的学会。
:::

[[toc]]

## 今日安排

08:30-09:00：

- 写今天目标：能讲清 token、cookie、跨域。

09:00-12:00：

- 看 MDN HTTP 概述：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Guides/Overview
- 看 HTTP 缓存：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Guides/Caching
- 看 CORS：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Guides/CORS
- 看 Cookie：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Guides/Cookies

12:00-14:00：

- 看 Chrome DevTools Network：https://developer.chrome.com/docs/devtools/network
- 打开项目 Network 看请求。

14:00-18:00：

- 完善登录鉴权流程说明。
- 模拟 token 过期跳登录。
- README 增加鉴权流程图。

19:30-21:00：

- 算法错题复盘 2 题。

21:00-22:30：

- 写笔记：《Cookie、localStorage、sessionStorage、JWT 区别》。
- Git commit：`docs: document auth flow`
- 当天产出：网络和鉴权笔记。

## 学习结果和验收

08:30-09:00：

- 知道：前端面试一定问网络。
- 理解：登录鉴权离不开 HTTP 和存储。
- 学会：找到项目 token 存储位置。
- 验收：能说出 token 存在哪里。

09:00-12:00：

- 知道：HTTP 方法、状态码、缓存、CORS、Cookie。
- 理解：跨域是浏览器同源策略限制，不是后端接口坏了。
- 学会：解释强缓存和协商缓存。
- 验收：能说出 200、301、304、401、403、404、500。

12:00-14:00：

- 知道：Network 面板能看请求头、响应头、状态码。
- 理解：调接口不能只看页面，要看网络请求。
- 学会：查看请求详情。
- 验收：能找到某个资源的 status 和 response headers。

14:00-18:00：

- 知道：token 过期要跳登录。
- 理解：鉴权流程要有正常和异常分支。
- 学会：补充鉴权流程说明。
- 验收：README 有鉴权流程图或文字说明。

19:30-21:00：

- 知道：错题复盘比盲刷新题有效。
- 理解：重复错的题型才是短板。
- 学会：整理算法错因。
- 验收：2 道错题写出错因和正确思路。

21:00-22:30：

- 知道：存储方式各有边界。
- 理解：Cookie、localStorage、sessionStorage、JWT 不是同一类东西。
- 学会：写对比表。
- 验收：写完《Cookie、localStorage、sessionStorage、JWT 区别》。

## 页面导航

- [上一天](/days/day-30/)
- [下一天](/days/day-32/)
- [返回总览](/overview)
