---
title: 第 29 天：组织者活动管理与复杂表单
---

# 第 29 天：组织者活动管理与复杂表单

::: tip 今天只认这个结果
**阶段：** 综合项目实战<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 学习者能指出每个动作最终修改哪一份活动数据。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 29
cd ../frontend-40-day-learning-lab/campus-growth-hub
npm install
npm run test:run -- --passWithNoTests
```

命令报错时先停在当前步骤，不要继续执行后面的任务。

### 1.1 在第二个终端启动页面

保持上一个终端不动，在 `../frontend-40-day-learning-lab/campus-growth-hub` 另开终端运行：

```bash
npm run dev
```

开发服务器会持续运行，这是正常现象；后续命令仍在第一个终端执行。

### 2. 打开这些文件或页面

- `http://localhost:5173/organizer/activities`
- `campus-growth-hub/src/views/OrganizerActivitiesView.vue`
- `campus-growth-hub/src/api/activity.ts`
- `campus-growth-hub/src/mocks/handlers.ts`
- `campus-growth-hub/src/mocks/activities.ts`
- `campus-growth-hub/src/types/activity.ts`
- `campus-growth-hub/notes/day-29.md`

### 3. 开始前必须确认

- [ ] 使用 organizer@example.com / organizer123 登录后可进入 /organizer/activities；该路由已指向 src/views/OrganizerActivitiesView.vue。
- [ ] src/types/activity.ts 已有 id、title、type、startAt、capacity、enrolledCount；今天只补 endAt 和 status，不把 enrolledCount 改名为 enrolled。
- [ ] 唯一数据链路固定为页面 -&gt; src/api/activity.ts -&gt; fetch -&gt; src/mocks/handlers.ts；不得新建 src/services/activity.ts 或第二套 mock。
- [ ] Day 15-28 已建立 Vitest 与 test:run；learner:prepare 后 test:run 自检成功。
- [ ] 活动修改只要求当前开发会话内可见；浏览器刷新后允许由 MSW fixture 重置，页面和 README 必须明确这是 mock。

### 4. 第一件具体工作

打开 `campus-growth-hub/notes/day-29.md`，开始执行“确认表单规则和数据闭环”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 确认表单规则和数据闭环 | 45 分钟 |
| 2 | 完成组织者活动管理 MVP | 195 分钟 |
| 3 | 最小栈复现 | 45 分钟 |
| 4 | 回归、提交与记录 | 75 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：确认表单规则和数据闭环（45 分钟）

**修改或创建这些文件**

- `campus-growth-hub/notes/day-29.md`
- `campus-growth-hub/src/types/activity.ts`
- `campus-growth-hub/src/api/activity.ts`
- `campus-growth-hub/src/mocks/handlers.ts`

**按顺序执行**

1. 在 notes/day-29.md 画出列表读取、新增、编辑和状态变更的数据流。
2. 固定必填字段：标题、类型、开始时间、结束时间、人数上限；status 只能是 draft、published、offline。
3. 写明今天只做表格搜索、新增/编辑复用和上下架；删除确认放入选做。

**完成后应该看到**

- 学习者能指出每个动作最终修改哪一份活动数据。

**立即测试，不要留到晚上**

- [ ] 标题为三个空格时无效。
- [ ] capacity=0 时无效；capacity=1 时有效。
- [ ] startAt=2026-08-10 10:00、endAt=2026-08-10 09:00 时无效。

### 必做 2：完成组织者活动管理 MVP（195 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/views/OrganizerActivitiesView.vue`
- `campus-growth-hub/src/components/ActivityFormDrawer.vue`
- `campus-growth-hub/src/api/activity.ts`
- `campus-growth-hub/src/mocks/handlers.ts`
- `campus-growth-hub/src/mocks/activities.ts`
- `campus-growth-hub/src/types/activity.ts`

**按顺序执行**

1. 先显示标题、类型、时间、人数和状态五列，实现标题包含式搜索和 pageSize=6 的简单分页。
2. 再实现 ActivityFormDrawer；新增与编辑使用同一个组件，以 initialValue 是否存在区分模式。
3. 提交前执行跨字段校验；成功后关闭抽屉、显示成功提示并刷新表格。
4. 最后实现 published 与 offline 的切换；操作前显示确认框，确认后才调用 src/api/activity.ts。

**完成后应该看到**

- 搜索“前端”只显示标题中含“前端”的活动。
- 新增“Vue 组件工作坊”后表格第一行出现该活动。
- 编辑标题后列表立即更新且 id 不变。
- 下架后状态标签显示“已下架”；列表超过 6 条时可以切到第 2 页；刷新后若 fixture 重置，页面仍能重新读取且不报错。

**立即测试，不要留到晚上**

- [ ] 新增：title=Vue 组件工作坊、type=lecture、startAt=2026-08-10 10:00、endAt=2026-08-10 12:00、capacity=30，预期成功。
- [ ] 错误日期：开始 2026-08-10 10:00、结束 2026-08-10 09:00，预期提示“结束时间必须晚于开始时间”且不调用 service。
- [ ] 取消上下架确认，预期状态不变。

### 必做 3：最小栈复现（45 分钟）

**修改或创建这些文件**

- `algorithms/day-29-min-stack.ts`

**按顺序执行**

1. 先画数据栈和最小值栈，再实现 push、pop、top、getMin。

**完成后应该看到**

- 能解释为何 getMin 是 O(1)。

**立即测试，不要留到晚上**

- [ ] push(-2), push(0), push(-3), getMin()=-3, pop(), top()=0, getMin()=-2。

### 必做 4：回归、提交与记录（75 分钟）

**修改或创建这些文件**

- `campus-growth-hub/notes/day-29.md`

**按顺序执行**

1. npm run type-check
2. npm run test:run
3. npm run build
4. 执行 git diff 并提交 feat: add organizer activity management。

**完成后应该看到**

- 三条命令均通过；Console 无未解释错误；记录 AI 辅助等级。

**立即测试，不要留到晚上**

- [ ] 重新登录并完整演示搜索、新增、编辑、下架和分页；刷新后能恢复 fixture 且不出现未处理错误。


## 有余力再做

- 增加删除确认；只允许删除 draft 活动。
- 为表单增加 description 字数提示。

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

/organizer/activities

**检查操作**

1. 登录组织者账号。
2. 用固定数据新增活动。
3. 现场把结束时间改早，观察校验。
4. 取消一次下架，再确认一次下架。

**正确结果与判断依据**

- 新增数据在当前会话可见。
- 非法日期不会提交。
- 取消确认不改变状态，确认后状态变为 offline。
- 刷新后允许重置 fixture，但页面必须正常加载。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
