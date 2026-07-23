---
title: 第 18 天：Vue Router：先完成页面导航骨架
---

# 第 18 天：Vue Router：先完成页面导航骨架

::: tip 今天只认这个结果
**阶段：** Vue 工程能力<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 五个路径能直接输入访问。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 18
cd ../frontend-40-day-learning-lab/campus-growth-hub
npm install vue-router
git status
npm run type-check
npm run test:run
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/src/main.ts`
- `campus-growth-hub/src/App.vue`
- `campus-growth-hub/src/components/ActivityCard.vue`

### 3. 开始前必须确认

- [ ] 今天只建路由骨架、参数和 404，不做登录守卫。
- [ ] 正式 authStore 与守卫统一在 Day 19 接入，避免先写临时认证再返工。

### 4. 第一件具体工作

打开 `campus-growth-hub/src/router/index.ts`，开始执行“创建页面与路由表”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 创建页面与路由表 | 130 分钟 |
| 2 | 接通卡片导航与业务无数据状态 | 100 分钟 |
| 3 | 无 AI 重写一条动态路由并验证导航 | 90 分钟 |
| 4 | 算法与提交 | 40 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：创建页面与路由表（130 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/router/index.ts`
- `campus-growth-hub/src/main.ts`
- `campus-growth-hub/src/App.vue`
- `campus-growth-hub/src/views/ActivityListView.vue`
- `campus-growth-hub/src/views/ActivityDetailView.vue`
- `campus-growth-hub/src/views/ProfileView.vue`
- `campus-growth-hub/src/views/LoginView.vue`
- `campus-growth-hub/src/views/NotFoundView.vue`

**按顺序执行**

1. 配置 /activities、/activities/:id、/profile、/login 和 /:pathMatch(.*)*；根路径重定向到 /activities。
2. 在 main.ts 注册 router，在 App.vue 只保留主导航与 RouterView。
3. 把 src/views/HomeView.vue 重命名为 src/views/ActivityListView.vue，并更新 import；禁止复制代码后同时保留两套列表状态。
4. ActivityDetailView 读取 route.params.id，并从 fixture 找活动。

**完成后应该看到**

- 五个路径能直接输入访问。
- 前进、后退和刷新均保持当前页面。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run build
- [ ] 依次打开 /activities、/activities/a001、/profile、/login、/not-exist

### 必做 2：接通卡片导航与业务无数据状态（100 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/components/ActivityCard.vue`
- `campus-growth-hub/src/views/ActivityListView.vue`
- `campus-growth-hub/src/views/ActivityDetailView.vue`
- `campus-growth-hub/src/views/NotFoundView.vue`

**按顺序执行**

1. 卡片标题使用 RouterLink 指向具名详情路由并传 id。
2. 详情 id=a001 显示活动；id=missing 显示“活动不存在”和返回列表按钮，但仍停留在详情路由。
3. 只有完全未知 URL 才进入全局 404，记录业务空态与路由 404 的区别。
4. 故意把详情参数名由 id 写成 activityId，复现 undefined 后通过 route 配置定位修复。

**完成后应该看到**

- 点击卡片进入正确详情。
- missing 是业务空态，/abc 是全局 404。

**立即测试，不要留到晚上**

- [ ] 打开 /activities/a001 显示 a001 标题
- [ ] 打开 /activities/missing 显示活动不存在
- [ ] 打开 /abc 显示 404

### 必做 3：无 AI 重写一条动态路由并验证导航（90 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/router/index.ts`
- `campus-growth-hub/notes/day-18.md`

**按顺序执行**

1. 关闭文档，删除详情路由后凭记忆重写。
2. 记录 route 是当前路由信息、router 是导航器；分别写一个使用位置。
3. 用浏览器刷新、后退、前进完成回归。

**完成后应该看到**

- 重写后具名路由和动态参数仍工作。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run build
- [ ] 浏览器历史前进后退无白屏

### 必做 4：算法与提交（40 分钟）

**修改或创建这些文件**

- `campus-growth-hub/algorithms/day18-merge-lists.ts`
- `campus-growth-hub/algorithms/day18-merge-lists.test.ts`
- `campus-growth-hub/notes/day-18.md`

**按顺序执行**

1. 完成 LeetCode 21，画 dummy/current 指针。
2. 用 Vitest 写两个空链表与两个非空有序链表用例。
3. 记录空链表边界，提交 feat: add typed application routes。

**完成后应该看到**

- 能解释 dummy 节点减少了哪个分支。

**立即测试，不要留到晚上**

- [ ] npm run test:run -- algorithms/day18-merge-lists.test.ts
- [ ] [] 与 [] 返回 []
- [ ] [1,2,4] 与 [1,3,4] 返回 [1,1,2,3,4,4]


## 有余力再做

- 给当前导航项增加 aria-current 样式，不增加新页面。

选做没有完成不进入欠账清单，也不影响当天通过。

## 卡住时只执行这四步

1. 复制完整错误信息，记录操作步骤、预期和实际结果。
2. 只检查当天列出的文件，不跨目录乱改；每次只验证一个猜测。
3. 独立排查 25 分钟仍无进展，再向 AI 提供错误、相关文件、已尝试方法和自己的猜测，只请求一个提示。
4. 单个问题累计 40 分钟仍未解决，保留失败代码和排查记录，先继续不依赖该问题的任务；等当天全部学习结束后，再把问题放入统一审查。

## 当天结束前固定检查

- [ ] 今天列出的固定测试全部执行，不用“页面看起来没问题”代替。
- [ ] Console 没有未解释的错误或警告；有意保留的错误已经写入记录。
- [ ] 执行 `git diff`，学习者可以解释每一处修改。
- [ ] 为每个必做任务标注：A 独立、B 提示后、C 参考局部示例、D 主要由 AI 生成、E 未完成。
- [ ] 只提交今天的文件，提交信息与当天成果一致。

## 当天全部学习结束后：资深前端统一审查（30 分钟）

::: warning 只有完成全部学习任务和自测后才能开始
检查者从这里才介入。学习过程中不提示、不提问、不注入故障，也不逐项验收。
:::

/activities

**检查操作**

1. 从列表点击 a001。
2. 直接刷新详情。
3. 分别打开 /activities/missing 与 /unknown。

**正确结果与判断依据**

- 动态参数正确。
- 业务空态与全局 404 可区分，所有路径无 Console 错误。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
