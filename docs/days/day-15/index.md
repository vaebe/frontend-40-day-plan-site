---
title: 第 15 天：Vue 小应用、异步状态与独立整合
---

# 第 15 天：Vue 小应用、异步状态与独立整合

::: tip 今天只认这个结果
**阶段：** Vue 3 基础学习<br>
**时间：** 巩固实践日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 课程收藏初始 4 条。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 15
cd ../frontend-40-day-learning-lab/campus-growth-hub
git status
npm run type-check
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/src/App.vue`
- `campus-growth-hub/src/practice/course-favorites/CourseFavorites.vue`
- `campus-growth-hub/src/practice/async-state/AsyncActivityLab.vue`
- `campus-growth-hub/src/services/activityApi.ts`
- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/notes/day-15.md`

### 3. 开始前必须确认

- [ ] 组件拆分和收藏链路已经通过。
- [ ] 今天只在现有项目内整合，不新建第二个 Vue 项目。

### 4. 第一件具体工作

打开 `campus-growth-hub/src/App.vue`，开始执行“无 AI 完成课程收藏小应用”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 无 AI 完成课程收藏小应用 | 100 分钟 |
| 2 | 实现并排查异步五态 | 170 分钟 |
| 3 | 无 AI 回归完整 Vue 基础链路 | 60 分钟 |
| 4 | 30 分钟算法：复现本阶段最薄弱题 | 30 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：无 AI 完成课程收藏小应用（100 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/App.vue`
- `campus-growth-hub/src/practice/course-favorites/CourseFavorites.vue`
- `campus-growth-hub/src/practice/course-favorites/courses.ts`

**按顺序执行**

1. 固定四门课程；组件使用 ref 搜索词、收藏 id 和只看收藏，computed 生成可见列表。
2. App 增加“主项目/课程收藏/异步故障”切换，三个练习必须真正挂载。
3. 前 40 分钟不使用 AI；到点只看自己 Day 13/14 笔记，再关闭并完成。
4. 验证搜索 Vue、收藏、只看收藏、取消后空状态。

**完成后应该看到**

- 课程收藏初始 4 条。
- 切回主项目后原筛选和收藏仍可用。

**立即测试，不要留到晚上**

- [ ] 搜索不存在课程显示空状态
- [ ] npm run type-check

### 必做 2：实现并排查异步五态（170 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/practice/async-state/AsyncActivityLab.vue`
- `campus-growth-hub/src/services/activityApi.ts`
- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/notes/day-15.md`

**按顺序执行**

1. activityApi 支持 success/empty/error 和固定延迟，返回 Promise&lt;Activity[]&gt;。
2. 复现 starter 在 finally 清空数组的固定故障；用断点看到成功赋值后又被清空，只删除标记行。
3. 在练习组件验证 idle/loading/success/empty/error/retry；loading 期间按钮 disabled。
4. 把正确状态迁移到 HomeView，筛选 computed 从 loadedActivities 读取。
5. 回归 success 6 条、empty 空态、error 错误、retry 恢复 6 条。

**完成后应该看到**

- 固定故障有完整证据。
- 重试后旧错误消失并恢复 6 条。

**立即测试，不要留到晚上**

- [ ] Console 无未处理 rejection
- [ ] npm run type-check

### 必做 3：无 AI 回归完整 Vue 基础链路（60 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/notes/day-15.md`

**按顺序执行**

1. 关闭 AI，按搜索→类型→收藏→empty→error→retry 顺序演示。
2. 选择其中一个失败点，从输入状态沿 computed/事件/异步结果追到 UI。
3. 记录一项仍需要提示的能力，禁止写“都不会”。

**完成后应该看到**

- 演示中途不改代码。
- 能说明一条完整数据流。

**立即测试，不要留到晚上**

- [ ] npm run build

### 必做 4：30 分钟算法：复现本阶段最薄弱题（30 分钟）

**修改或创建这些文件**

- `campus-growth-hub/algorithms/day-15-review.ts`
- `campus-growth-hub/notes/day-15.md`

**按顺序执行**

1. 算法严格计时 30 分钟：先写样例与思路，20 分钟仍无进展只看一个提示；结束时保存代码、边界、复杂度和 AI 辅助等级。
2. 从 Day 12～14 三题中选择辅助等级最高的一题，从空白重写。

**完成后应该看到**

- 保存选择理由和边界。

**立即测试，不要留到晚上**

- [ ] npm run type-check


## 有余力再做

- 只补 aria-live 状态提示；不引入 Router、Pinia。

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

课程收藏→主项目 success/empty/error/retry→源码。

**检查操作**

1. 演示固定路径。
2. 说明 finally 为什么只做收尾。
3. 运行 build。

**正确结果与判断依据**

- 异步状态互斥。
- 主项目无回归。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
