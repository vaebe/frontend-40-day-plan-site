---
title: 第 27 天：第四周巩固：学生端无 AI 复现
---

# 第 27 天：第四周巩固：学生端无 AI 复现

::: tip 今天只认这个结果
**阶段：** 综合项目<br>
**时间：** 巩固实践日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 不复制旧文件也能写出核心解析和更新。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 27
cd ../frontend-40-day-learning-lab/campus-growth-hub
git status
npm run type-check
npm run test:run
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/src/utils/activityQuery.ts`
- `campus-growth-hub/src/composables/useActivitySearch.ts`
- `campus-growth-hub/src/stores/bookmarks.ts`
- `campus-growth-hub/src/views/ActivityDetailView.vue`
- `campus-growth-hub/docs/task-board.md`

### 3. 开始前必须确认

- [ ] 学习者保存当前 commit；按任务步骤逐个注入两个固定故障，每次只处理一题并记录证据。学习过程独立完成。
- [ ] 今天不新增功能，先修回归。

### 4. 第一件具体工作

打开 `campus-growth-hub/src/utils/activityQuery.rebuild.ts`，开始执行“无 AI 重写筛选 composable 的核心”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 无 AI 重写筛选 composable 的核心 | 110 分钟 |
| 2 | 定位竞态预设故障 | 80 分钟 |
| 3 | 定位跨页状态副本故障并完成回归 | 130 分钟 |
| 4 | 旧算法与提交 | 40 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：无 AI 重写筛选 composable 的核心（110 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/utils/activityQuery.rebuild.ts`
- `campus-growth-hub/src/utils/activityQuery.rebuild.test.ts`
- `campus-growth-hub/src/utils/activityQuery.ts`
- `campus-growth-hub/notes/day-27.md`

**按顺序执行**

1. 在 rebuild 文件从空白实现纯函数 parseActivityQuery(raw)：解析 q/type/mode/available/page，不依赖 route 或 router；筛选更新与 router.replace 不在本次重写范围。
2. 40 分钟后才对照原实现 10 分钟，再关掉原文件修正 rebuild。
3. 在 rebuild.test.ts 用 Vitest 写 3 个输入：正常 query、page=abc、未知 type。

**完成后应该看到**

- 不复制旧文件也能写出核心解析和更新。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run test:run -- src/utils/activityQuery.rebuild.test.ts
- [ ] 三个 query 用例输出确定
- [ ] 能解释每个类型收窄

### 必做 2：定位竞态预设故障（80 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/composables/useActivitySearch.ts`
- `campus-growth-hub/src/mocks/handlers.ts`
- `campus-growth-hub/notes/day-27.md`

**按顺序执行**

1. 学习者自行注入故障一：在 src/composables/useActivitySearch.ts 注释掉发起请求前的 activeController?.abort() 这一行，其余代码不动。
2. 学习者输入 slow 后立即输入 fast，记录最终错误显示 slow。
3. 只改一个假设，恢复该 activeController?.abort()；连续运行 3 次验证。

**完成后应该看到**

- 修复后三次最终结果均为 fast。

**立即测试，不要留到晚上**

- [ ] slow→fast 连续3次
- [ ] 取消请求不显示错误
- [ ] Network 可解释

### 必做 3：定位跨页状态副本故障并完成回归（130 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/views/ActivityDetailView.vue`
- `campus-growth-hub/src/stores/bookmarks.ts`
- `campus-growth-hub/docs/student-regression.md`
- `campus-growth-hub/notes/day-27.md`

**按顺序执行**

1. 确认故障一已修复且工作区干净后，学习者自行注入故障二：把 ActivityDetailView 中 const bookmarked=computed(() =&gt; bookmarkStore.isBookmarked(activityId)) 替换成 const bookmarked=ref(bookmarkStore.isBookmarked(activityId))，并补 ref 导入；其余代码不动。
2. 学习者在个人中心取消 a001 后返回详情，复现仍显示已收藏。
3. 移除本地副本，恢复直接读取 bookmarkStore/computed。
4. 按清单回归：登录、刷新、筛选、URL、详情、收藏、报名、个人中心取消、错误重试、退出、越权。

**完成后应该看到**

- 详情重新随 store 更新。
- 回归清单每项有通过证据。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run build
- [ ] 完整回归清单
- [ ] Console 无红色错误

### 必做 4：旧算法与提交（40 分钟）

**修改或创建这些文件**

- `campus-growth-hub/algorithms/day27-review.ts`
- `campus-growth-hub/algorithms/day27-review.test.ts`
- `campus-growth-hub/notes/day-27.md`

**按顺序执行**

1. 股票题与最大子数组二选一从空白重写，另一题只口述状态。
2. 把所选题的两个旧用例写入 Vitest。
3. 提交 fix: stabilize student journey。

**完成后应该看到**

- 能说出本次比首次少看了什么提示。

**立即测试，不要留到晚上**

- [ ] npm run test:run -- algorithms/day27-review.test.ts
- [ ] 重写题通过两个样例
- [ ] 记录时间和 AI 等级


## 有余力再做

- 无；若提前完成，只重复回归，不增加新功能。

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

/activities?q=fast

**检查操作**

1. 检查两个故障的复现记录。
2. 现场 slow→fast。
3. 个人中心取消收藏后返回详情。
4. 临时将 a001 的报名截止时间设为过去，要求定位应修改的类型、派生逻辑和 UI。

**正确结果与判断依据**

- 竞态与状态副本根因清楚。
- 能说出截止状态至少影响哪些文件，不要求 5 分钟内写完。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
