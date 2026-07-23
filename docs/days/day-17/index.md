---
title: 第 17 天：在 Vue 中落地 TypeScript 数据与组件契约
---

# 第 17 天：在 Vue 中落地 TypeScript 数据与组件契约

::: tip 今天只认这个结果
**阶段：** Vue 3 基础学习<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 数据源只有 src/data/activities.ts 一份。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 17
cd ../frontend-40-day-learning-lab/campus-growth-hub
npm install -D vitest jsdom
npm pkg set scripts.test:run="vitest run"
git status
npm run type-check
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/src/types/activity.ts`
- `campus-growth-hub/src/components/ActivityCard.vue`
- `campus-growth-hub/src/components/SearchBar.vue`
- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/src/services/activityApi.ts`

### 3. 开始前必须确认

- [ ] 项目从 Day 12 起已经使用 TypeScript，今天不做 JS→TS 迁移。
- [ ] 今天把 Day 10～11 学过的类型真正接入 Vue 组件、接口结果和页面状态。
- [ ] 不使用 @ts-ignore、as any 或重复数据源消除错误。

### 4. 第一件具体工作

打开 `campus-growth-hub/src/types/activity.ts`，开始执行“完善活动领域类型与固定数据”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 完善活动领域类型与固定数据 | 80 分钟 |
| 2 | 类型化 Props、Emits 与筛选契约 | 100 分钟 |
| 3 | 用判别联合统一页面请求状态 | 100 分钟 |
| 4 | 给核心函数补三个最小测试 | 50 分钟 |
| 5 | 30 分钟算法：环形链表 | 30 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：完善活动领域类型与固定数据（80 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/types/activity.ts`
- `campus-growth-hub/src/types/api.ts`
- `campus-growth-hub/src/data/activities.ts`

**按顺序执行**

1. 把 Activity 建模为 online/offline 判别联合；线上必须 meetingUrl，线下必须 location。
2. 定义 ActivityType、ActivityQuery、ApiResult&lt;T&gt; 和 PaginatedResult&lt;T&gt;。
3. 让现有 6 条数据满足类型；分别漏一次 location/meetingUrl，保存错误后恢复。

**完成后应该看到**

- 数据源只有 src/data/activities.ts 一份。
- 非法活动在运行前被发现。

**立即测试，不要留到晚上**

- [ ] npm run type-check

### 必做 2：类型化 Props、Emits 与筛选契约（100 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/components/ActivityCard.vue`
- `campus-growth-hub/src/components/SearchBar.vue`
- `campus-growth-hub/src/views/HomeView.vue`

**按顺序执行**

1. ActivityCard props 固定为 activity:Activity、bookmarked:boolean；toggle-bookmark 只传 string id。
2. SearchBar 接收 modelValue:ActivityQuery，发出 update:modelValue；父组件只保留一份查询状态。
3. 依次制造 keyword:number、漏 bookmarked、emit 完整对象三个错误，保存后修复。
4. 回归筛选、收藏和空状态。

**完成后应该看到**

- 父子边界能从类型签名读懂。
- 子组件不直接改 props。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] 点击收藏只改变对应卡片

### 必做 3：用判别联合统一页面请求状态（100 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/types/request.ts`
- `campus-growth-hub/src/services/activityFixture.ts`
- `campus-growth-hub/src/views/HomeView.vue`

**按顺序执行**

1. 定义 RequestState&lt;T&gt; 五态；HomeView 使用 ref&lt;RequestState&lt;Activity[]&gt;&gt;。
2. 实现 listActivityFixtures(query):Promise&lt;ApiResult&lt;PaginatedResult&lt;Activity&gt;&gt;&gt;，延迟 300ms 并只读取现有数据源。
3. HomeView 根据 state.status 渲染 loading/success/empty/error；error 分支不能读取 data。
4. 筛选变化重新加载，旧状态不会与新状态同时显示。

**完成后应该看到**

- 首次加载后显示活动。
- 无结果只显示 empty，错误只显示 error。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run build

### 必做 4：给核心函数补三个最小测试（50 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/utils/activity.ts`
- `campus-growth-hub/src/utils/activity.test.ts`

**按顺序执行**

1. 实现 getRemaining、filterActivities。
2. 测试 a001 剩余人数、关键词匹配、无结果空数组。
3. 先看一次失败，再只改实现让三项通过。

**完成后应该看到**

- 测试可重复运行。

**立即测试，不要留到晚上**

- [ ] npm run test:run -- src/utils/activity.test.ts

### 必做 5：30 分钟算法：环形链表（30 分钟）

**修改或创建这些文件**

- `campus-growth-hub/algorithms/day-17-cycle-list.ts`
- `campus-growth-hub/notes/day-17.md`

**按顺序执行**

1. 算法严格计时 30 分钟：先写样例与思路，20 分钟仍无进展只看一个提示；结束时保存代码、边界、复杂度和 AI 辅助等级。
2. 使用快慢指针，验证普通链表、无环单节点和单节点自环。

**完成后应该看到**

- 能解释相遇为何代表有环。

**立即测试，不要留到晚上**

- [ ] npm run type-check


## 有余力再做

- 为 ActivityType 文案建立 Record 映射；不做高级类型体操。

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

首页五态→筛选→收藏→类型文件→测试。

**检查操作**

1. 执行 type-check、定向测试和 build。
2. 查看线上/线下卡片。
3. 沿 HomeView→SearchBar/ActivityCard 解释类型边界。

**正确结果与判断依据**

- 命令全部通过。
- Day 10～11 的类型知识已经进入真实 Vue 数据流。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
