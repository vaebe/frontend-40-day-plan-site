---
title: 第 30 天：固定提取 usePagination
---

# 第 30 天：固定提取 usePagination

::: tip 今天只认这个结果
**阶段：** 综合项目<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** notes/day-30.md 中有重构前重复位置和 API 输入输出表。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 30
cd ../frontend-40-day-learning-lab/campus-growth-hub
npm install
```

命令报错时先停在当前步骤，不要继续执行后面的任务。

### 1.1 在第二个终端启动页面

保持上一个终端不动，在 `../frontend-40-day-learning-lab/campus-growth-hub` 另开终端运行：

```bash
npm run dev
```

开发服务器会持续运行，这是正常现象；后续命令仍在第一个终端执行。

### 2. 打开这些文件或页面

- `campus-growth-hub/src/views/ActivityListView.vue`
- `campus-growth-hub/src/views/OrganizerActivitiesView.vue`
- `campus-growth-hub/src/composables/usePagination.ts`
- `campus-growth-hub/notes/day-30.md`

### 3. 开始前必须确认

- [ ] 学生列表与组织者列表都已能分页，但各自重复维护 page、pageSize、pageCount 和越界修正。
- [ ] Day 29 的组织者管理闭环通过回归；今天重构前先提交或保存干净工作区。

### 4. 第一件具体工作

打开 `campus-growth-hub/notes/day-30.md`，开始执行“识别真实重复并设计 usePagination API”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 识别真实重复并设计 usePagination API | 60 分钟 |
| 2 | 提取并接入 usePagination | 180 分钟 |
| 3 | 每日温度挑战 | 45 分钟 |
| 4 | 回归、提交与记录 | 75 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：识别真实重复并设计 usePagination API（60 分钟）

**修改或创建这些文件**

- `campus-growth-hub/notes/day-30.md`
- `campus-growth-hub/src/views/ActivityListView.vue`
- `campus-growth-hub/src/views/OrganizerActivitiesView.vue`

**按顺序执行**

1. 逐行标出两个页面重复的分页状态与越界逻辑。
2. 固定 API：输入 total 和可选 pageSize；输出 page、pageSize、pageCount、setPage、resetPage。
3. 不提取请求逻辑，不创建 useAsyncTask 或 StatusView。

**完成后应该看到**

- notes/day-30.md 中有重构前重复位置和 API 输入输出表。

**立即测试，不要留到晚上**

- [ ] total=21,pageSize=10 时 pageCount=3。
- [ ] total=0 时 pageCount=0，page 保持 1。

### 必做 2：提取并接入 usePagination（180 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/composables/usePagination.ts`
- `campus-growth-hub/src/views/ActivityListView.vue`
- `campus-growth-hub/src/views/OrganizerActivitiesView.vue`
- `campus-growth-hub/src/composables/__tests__/usePagination.spec.ts`

**按顺序执行**

1. 先写纯分页计算和越界测试，再实现 composable。
2. 先接入学生列表并完成回归，再接入组织者列表。
3. 筛选条件变化时由页面显式调用 resetPage，不把业务筛选塞入 composable。

**完成后应该看到**

- 两个页面外观与重构前一致。
- 两个页面改 pageSize 后均使用同一套分页逻辑。

**立即测试，不要留到晚上**

- [ ] total 从 21 改为 5 且当前 page=3，预期 page 自动回到 1。
- [ ] setPage(0) 结果为 1；setPage(99) 不超过 pageCount。
- [ ] 在学生页筛选后回到第 1 页，组织者页同样成立。

### 必做 3：每日温度挑战（45 分钟）

**修改或创建这些文件**

- `algorithms/day-30-daily-temperatures.ts`

**按顺序执行**

1. 先写暴力解，再在提示后尝试单调栈；不要求完全独立发现。

**完成后应该看到**

- 能说明栈中保存下标而不是温度的原因。

**立即测试，不要留到晚上**

- [ ] [73,74,75,71,69,72,76,73] -&gt; [1,1,4,2,1,1,0,0]。

### 必做 4：回归、提交与记录（75 分钟）

**修改或创建这些文件**

- `campus-growth-hub/notes/day-30.md`

**按顺序执行**

1. npm run type-check
2. npm run test:run
3. npm run build
4. 提交 refactor: extract shared pagination composable。

**完成后应该看到**

- 所有测试通过，两个页面行为无回归。

**立即测试，不要留到晚上**

- [ ] 现场将 pageSize 从 10 改为 20，两个页面页数同步按各自总数重算。


## 有余力再做

- 为 usePagination 增加 previous 和 next。
- 记录为何今天不抽象请求状态。

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

1. 演示学生列表分页。
2. 打开组织者列表演示同一行为。
3. 现场把一个页面 pageSize 改为 20。

**正确结果与判断依据**

- 两个页面调用同一 composable。
- 总数减少时不会停留在不存在的页。
- 学习者能解释 composable 与纯工具函数的区别。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
