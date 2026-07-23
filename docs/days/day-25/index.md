---
title: 第 25 天：详情、收藏与报名表单
---

# 第 25 天：详情、收藏与报名表单

::: tip 今天只认这个结果
**阶段：** 综合项目<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 三个 id 产生三个确定页面结果。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 25
cd ../frontend-40-day-learning-lab/campus-growth-hub
git status
npm run type-check
npm run test:run
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/src/views/ActivityDetailView.vue`
- `campus-growth-hub/src/stores/bookmarks.ts`
- `campus-growth-hub/src/mocks/handlers.ts`
- `campus-growth-hub/src/types/activity.ts`

### 3. 开始前必须确认

- [ ] 收藏 store 来自 Day 19，今天只接入详情，不重写。
- [ ] 更新策略固定为保守更新；乐观更新只做口述，不实现第二套。

### 4. 第一件具体工作

打开 `campus-growth-hub/src/views/ActivityDetailView.vue`，开始执行“完成详情的正常、已满与不存在状态”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 完成详情的正常、已满与不存在状态 | 90 分钟 |
| 2 | 接通详情收藏与报名 API | 130 分钟 |
| 3 | 回归学生核心闭环 | 100 分钟 |
| 4 | 算法与提交 | 40 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：完成详情的正常、已满与不存在状态（90 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/views/ActivityDetailView.vue`
- `campus-growth-hub/src/api/activity.ts`
- `campus-growth-hub/src/mocks/handlers.ts`
- `campus-growth-hub/src/mocks/activities.ts`

**按顺序执行**

1. 固定 a001 可报名、a002 已满、missing 不存在。
2. 详情显示时间、模式、地点/链接、容量、已报名数；加载与错误独立呈现。
3. a002 报名按钮禁用并显示已满；missing 显示业务空态。

**完成后应该看到**

- 三个 id 产生三个确定页面结果。

**立即测试，不要留到晚上**

- [ ] /activities/a001 可报名
- [ ] /activities/a002 按钮禁用
- [ ] /activities/missing 显示活动不存在

### 必做 2：接通详情收藏与报名 API（130 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/components/enrollment/EnrollmentForm.vue`
- `campus-growth-hub/src/api/enrollment.ts`
- `campus-growth-hub/src/stores/enrollments.ts`
- `campus-growth-hub/src/mocks/enrollmentDb.ts`
- `campus-growth-hub/src/mocks/enrollmentDb.test.ts`
- `campus-growth-hub/src/mocks/handlers.ts`
- `campus-growth-hub/src/views/ActivityDetailView.vue`

**按顺序执行**

1. 报名表单只含手机号和备注；手机号使用中国大陆 11 位规则，备注最多 100 字。
2. 建立唯一 mock 报名数据源 enrollmentDb：localStorage key 固定 cgh.mock-enrollments.v1，值为 Enrollment[]；清除该 key 时恢复空数组。所有 MSW enrollment handler 都只通过 enrollmentDb 读写。
3. 增加 GET /api/enrollments?userId=s001 用于刷新恢复；POST /api/enrollments 接收 userId/activityId/phone/note，重复 userId+activityId 返回 409，a002 返回 400 已满。
4. enrollmentStore 提供 load(userId) 与 enroll(payload)：登录恢复或刷新后先 GET；成功 POST 后再更新 store。
5. 提交中禁用按钮；成功后数据库与 store 保存 Enrollment{id,activityId,userId,status:'confirmed'}，页面显示已报名。
6. 固定手机号 18800000000 触发 500 {code:50001,message:'报名服务暂不可用'}；失败时 enrollmentDb 与 store 均不写入，按钮恢复。
7. 在 enrollmentDb.test.ts 使用 localStorage mock 测试初始空数组、写入后重载仍存在、重复 userId+activityId 被识别。
8. 收藏按钮复用 bookmarkStore；详情页收藏状态固定写成 computed(() =&gt; bookmarkStore.isBookmarked(activityId))，禁止复制为本地 ref，刷新后状态保留。

**完成后应该看到**

- 成功只产生一条报名。
- 失败不会伪造成功状态。

**立即测试，不要留到晚上**

- [ ] npm run test:run -- src/mocks/enrollmentDb.test.ts
- [ ] 空手机号不发请求
- [ ] 连续双击只有一个POST
- [ ] 重复报名显示已报名
- [ ] 手机号18800000000失败后可再次提交

### 必做 3：回归学生核心闭环（100 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/views/ActivityListView.vue`
- `campus-growth-hub/src/views/ActivityDetailView.vue`
- `campus-growth-hub/src/stores/bookmarks.ts`
- `campus-growth-hub/src/stores/enrollments.ts`
- `campus-growth-hub/notes/day-25.md`

**按顺序执行**

1. 从列表进入 a001，收藏并报名，再刷新详情。
2. 从列表进入 a002，确认已满不可提交。
3. 记录保守更新的数据流及重复提交防护位置。

**完成后应该看到**

- 发现→详情→收藏/报名闭环可重复演示。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run build
- [ ] Console 无错误
- [ ] 刷新后收藏与报名状态仍在

### 必做 4：算法与提交（40 分钟）

**修改或创建这些文件**

- `campus-growth-hub/algorithms/day25-max-subarray.ts`
- `campus-growth-hub/algorithms/day25-max-subarray.test.ts`
- `campus-growth-hub/notes/day-25.md`

**按顺序执行**

1. 完成 LeetCode 53，写 current 与 best 的含义。
2. 用 Vitest 写题目示例与全负数。
3. 提交 feat: complete student enrollment flow。

**完成后应该看到**

- 能解释为何负贡献可舍弃。

**立即测试，不要留到晚上**

- [ ] npm run test:run -- algorithms/day25-max-subarray.test.ts
- [ ] [-2,1,-3,4,-1,2,1,-5,4] 返回6
- [ ] [-1] 返回-1


## 有余力再做

- 为手机号输入增加格式化显示；不增加更多报名字段。

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

/activities/a001

**检查操作**

1. 演示收藏、手机号校验、双击提交、成功刷新后由 GET /api/enrollments 恢复。
2. 打开 a002 和 missing。
3. 用手机号18800000000触发报名失败。

**正确结果与判断依据**

- 状态和按钮行为一致。
- 学习者能指出活动已满、重复提交和失败恢复分别在哪一层处理。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
