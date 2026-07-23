---
title: 第 22 天：现有原型审计与后续范围冻结
---

# 第 22 天：现有原型审计与后续范围冻结

::: tip 今天只认这个结果
**阶段：** 综合项目<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 清单能对应真实文件。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 22
cd ../frontend-40-day-learning-lab/campus-growth-hub
git status
npm run type-check
npm run test:run
npm run build
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/README.md`
- `campus-growth-hub/src/router/index.ts`
- `campus-growth-hub/src/views/ActivityListView.vue`
- `campus-growth-hub/src/views/ActivityDetailView.vue`
- `campus-growth-hub/src/views/ProfileView.vue`
- `campus-growth-hub/src/views/LoginView.vue`
- `campus-growth-hub/src/views/NotFoundView.vue`
- `campus-growth-hub/src/stores/auth.ts`
- `campus-growth-hub/src/stores/bookmarks.ts`
- `campus-growth-hub/src/api/request.ts`
- `campus-growth-hub/src/api/activity.ts`

### 3. 开始前必须确认

- [ ] 本日不是重新立项；Day 10–21 已完成的是原型。
- [ ] 今日名称与目标固定为“现有原型审计与后续范围冻结”，禁止重建项目。

### 4. 第一件具体工作

打开 `campus-growth-hub/docs/current-inventory.md`，开始执行“盘点现有原型而非从头设计”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 盘点现有原型而非从头设计 | 90 分钟 |
| 2 | 冻结 12 天可完成的范围 | 100 分钟 |
| 3 | 建立可执行看板与仓库说明 | 130 分钟 |
| 4 | 算法与提交 | 40 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：盘点现有原型而非从头设计（90 分钟）

**修改或创建这些文件**

- `campus-growth-hub/docs/current-inventory.md`
- `campus-growth-hub/src/router/index.ts`
- `campus-growth-hub/src/views`
- `campus-growth-hub/src/stores`
- `campus-growth-hub/src/api`

**按顺序执行**

1. 按页面、组件、store、API、mock 五类列出现有文件和已经能演示的功能。
2. 每项标记 works/partial/missing，并写一条可观察证据。
3. 把 Day 21 未通过项映射到具体文件，不写“继续完善”之类模糊任务。

**完成后应该看到**

- 清单能对应真实文件。
- 没有创建第二套列表、store 或 request。

**立即测试，不要留到晚上**

- [ ] 随机抽 5 条 inventory 均能打开对应文件或页面
- [ ] npm run type-check

### 必做 2：冻结 12 天可完成的范围（100 分钟）

**修改或创建这些文件**

- `campus-growth-hub/docs/scope.md`
- `campus-growth-hub/docs/user-stories.md`
- `campus-growth-hub/docs/data-model.md`

**按顺序执行**

1. 范围上限：student/organizer 两角色；活动列表、详情、个人中心、登录、组织者管理、数据看板六类页面。
2. Must 闭环：学生登录→筛选→详情→收藏/报名→个人中心；组织者登录→新增/编辑活动→查看报名统计。
3. 明确 Won't：完整后端、真实支付、聊天、复杂审批、文件上传、token 刷新。
4. 每个用户故事使用 Given/When/Then，并给失败或空状态一条验收。
5. 数据模型明确 User、Activity、Enrollment、ActivityQuery 的主键与关系。

**完成后应该看到**

- Must 不超过 8 条用户故事。
- 每条故事可在半天内验收。

**立即测试，不要留到晚上**

- [ ] 每个 Must 有 Given/When/Then
- [ ] 每个页面都能映射至少一条故事
- [ ] Won't 列表不少于 5 项

### 必做 3：建立可执行看板与仓库说明（130 分钟）

**修改或创建这些文件**

- `campus-growth-hub/README.md`
- `campus-growth-hub/docs/task-board.md`
- `campus-growth-hub/.env.example`
- `campus-growth-hub/docs/architecture.md`

**按顺序执行**

1. README 写项目问题、角色、当前功能、技术栈、启动命令、演示账号占位规则和 mock 说明。
2. task-board 使用 Todo/Doing/Done/Backlog，每项含文件范围、预计分钟数、完成标准；Doing 同时最多 1 项。
3. 核对 Day 20 已创建的 .env.example 只列 VITE_API_BASE_URL=/api，不写密钥；同时确认 request.ts 确实读取该变量，不再创建未使用的环境变量。
4. architecture 用 Mermaid 画 View→Store/API→request→MSW 数据流。
5. 运行项目回归，确认文档整理未改变功能。

**完成后应该看到**

- 新同学按 README 能启动。
- 下一日第一项任务可直接从看板取出。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run build
- [ ] 按 README 从零核对安装和启动命令

### 必做 4：算法与提交（40 分钟）

**修改或创建这些文件**

- `campus-growth-hub/algorithms/day22-inorder.ts`
- `campus-growth-hub/algorithms/day22-inorder.test.ts`
- `campus-growth-hub/notes/day-22.md`

**按顺序执行**

1. 完成 LeetCode 94，递归或迭代只选一种。
2. 用 Vitest 写空树与题目示例。
3. 提交 docs: audit prototype and freeze scope。

**完成后应该看到**

- 能说明中序遍历次序。

**立即测试，不要留到晚上**

- [ ] npm run test:run -- algorithms/day22-inorder.test.ts
- [ ] 空树返回 []
- [ ] [1,null,2,3] 返回 [1,3,2]


## 有余力再做

- 为 README 添加一张当前页面截图；不做视觉重设计。

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

1. 先演示现有原型。
2. 从 inventory 指向对应文件。
3. 从 scope 临时删除数据看板并说明为何不破坏学生主闭环。

**正确结果与判断依据**

- 能明确说出已完成、未完成和不做。
- 范围足以在 Day 23–34 内完成。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
