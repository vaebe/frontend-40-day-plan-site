---
title: 第 28 天：第四周轻量复盘与项目中期验收
---

# 第 28 天：第四周轻量复盘与项目中期验收

::: tip 今天只认这个结果
**阶段：** 综合项目实战<br>
**时间：** 轻量复盘日（2.5 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 复盘同时包含进步与风险。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 28
cd ../frontend-40-day-learning-lab/campus-growth-hub
git status
npm run type-check
npm run test:run
npm run build
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/docs/student-regression.md`
- `campus-growth-hub/docs/task-board.md`
- `campus-growth-hub/README.md`
- `campus-growth-hub/src/router/index.ts`
- `campus-growth-hub/src/stores/auth.ts`
- `campus-growth-hub/src/api/request.ts`
- `campus-growth-hub/src/composables/useActivityQuery.ts`

### 3. 开始前必须确认

- [ ] 轻量日总学习 150 分钟，不打开新课。
- [ ] 先独立完成页面内代码走查和全部自测，再开始页面底部的 30 分钟统一审查；学习者任务结束后不加时。

### 4. 第一件具体工作

打开 `campus-growth-hub/notes/day-28.md`，开始执行“回看证据并选一个无 AI 复现项”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 回看证据并选一个无 AI 复现项 | 40 分钟 |
| 2 | 从空白完成一个可验收的小改动 | 50 分钟 |
| 3 | 按固定脚本演示并冻结三个改进项 | 60 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**150 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：回看证据并选一个无 AI 复现项（40 分钟）

**修改或创建这些文件**

- `campus-growth-hub/notes/day-28.md`
- `campus-growth-hub/docs/student-regression.md`

**按顺序执行**

1. 按 Git 顺序写本周每个提交的一句话成果。
2. 统计 A-E 与通过状态，只选一个 D/E 项。
3. 写三条已掌握证据和一个最常见困难。

**完成后应该看到**

- 复盘同时包含进步与风险。

**立即测试，不要留到晚上**

- [ ] 每条证据能指向提交、页面或错误记录

### 必做 2：从空白完成一个可验收的小改动（50 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/types/activity.ts`
- `campus-growth-hub/src/mocks/activities.ts`
- `campus-growth-hub/src/utils/activityAvailability.ts`
- `campus-growth-hub/src/utils/activityAvailability.test.ts`
- `campus-growth-hub/src/views/ActivityDetailView.vue`
- `campus-growth-hub/src/components/ActivityCard.vue`

**按顺序执行**

1. 先在 Activity 增加必填 deadline:string。给全部 15 条 fixture 补 ISO 8601 +08:00 值：a004='2026-07-31T23:59:59+08:00'；a001、a002 及其余活动统一使用晚于 2026-08-01 的日期，禁止只给 a004 增字段。
2. 定义 getActivityAvailability(activity, now)，返回 open/full/expired；判断优先级固定为 deadline&lt;=now 得 expired，其次 enrolledCount&gt;=capacity 得 full，否则 open。
3. 在 activityAvailability.test.ts 使用固定 now=new Date('2026-08-01T00:00:00+08:00')，测试 a001/open、a002/full、a004/expired；不得在测试中直接使用 new Date() 当前时间。
4. 卡片显示已满或已截止，详情在 full/expired 时禁用报名；open 时可报名。
5. 先运行三个函数用例，再接 UI；不看旧业务判断代码。

**完成后应该看到**

- a001 可报名、a002 已满、a004 已截止。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run test:run -- src/utils/activityAvailability.test.ts
- [ ] 打开 a001、a002、a004 三个详情页检查按钮

### 必做 3：按固定脚本演示并冻结三个改进项（60 分钟）

**修改或创建这些文件**

- `campus-growth-hub/docs/task-board.md`
- `campus-growth-hub/notes/day-28.md`
- `campus-growth-hub/README.md`

**按顺序执行**

1. 演示：学生登录→筛选→刷新→详情→收藏→报名→个人中心→取消→退出→学生越权。
2. 自查 router/index.ts、stores/auth.ts、api/request.ts、useActivityQuery.ts：职责、重复状态、错误态、any/断言。
3. task-board 只保留 3 个下一阶段改进项，每项写优先级、文件、预计分钟、完成标准；其余移入 Backlog。
4. 随机重做一道旧题只口述或写伪代码，不再追求新题。

**完成后应该看到**

- 完整演示无阻塞。
- 三个改进项均可在半天内完成。

**立即测试，不要留到晚上**

- [ ] npm run build
- [ ] 完整演示清单全部通过
- [ ] task-board Doing 不超过1项


## 有余力再做

- 无；剩余时间用于休息。

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

1. 检查者按完整学生流程操作。
2. 随机抽 router、auth store、request、query composable 各一处让学习者说明。
3. 检查 a004 已截止规则。
4. 审核 task-board 三个改进项。

**正确结果与判断依据**

- 能独立演示和解释主要数据流。
- a001/open、a002/full、a004/expired 表现正确。
- 后续范围只保留三项，不因验收临时扩张。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
