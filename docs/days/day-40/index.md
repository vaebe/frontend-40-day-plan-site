---
title: 第 40 天：最终对照验收与下一阶段交接
---

# 第 40 天：最终对照验收与下一阶段交接

::: tip 今天只认这个结果
**阶段：** 面试基础与终验<br>
**时间：** 最终验收日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 起始文件只含固定数据、空组件和失败测试。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 40
cd ../frontend-40-day-learning-lab/campus-growth-hub
npm install
npm run type-check
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/practice/day-40/baseline-day-01.md`
- `campus-growth-hub/practice/day-40/final-assessment/README.md`
- `campus-growth-hub/practice/day-40/final-assessment/activities.ts`
- `campus-growth-hub/practice/day-40/final-assessment/ActivityPanel.vue`
- `campus-growth-hub/practice/day-40/final-assessment/assessment.spec.ts`
- `campus-growth-hub/docs/final-assessment.md`

### 3. 开始前必须确认

- [ ] learner:prepare 已把 Day 1 基线复制为 practice/day-40/baseline-day-01.md，并生成固定数据、空组件、预设错误与失败测试。
- [ ] 最终题使用项目内的 practice/day-40/final-assessment，不在完整主项目中找现成功能。
- [ ] 90 分钟内禁止 AI、旧项目代码和教程；允许查看 Vue API 官方文档，但要记录查阅项。
- [ ] 使用与 Day 1 相同维度：正确性、独立性、提示次数、耗时、解释与排错。
- [ ] 固定数据为五条活动：a1 Vue 入门/lecture/20/18，a2 篮球赛/contest/10/10，a3 志愿服务/volunteer/30/12，a4 前端沙龙/lecture/25/5，a5 算法训练/contest/40/39。字段依次为 id/title/type/capacity/enrolledCount。

### 4. 第一件具体工作

打开 `campus-growth-hub/practice/day-40/final-assessment/README.md`，开始执行“确认规则并保存起始证据”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 确认规则并保存起始证据 | 30 分钟 |
| 2 | 90 分钟无 AI 综合对照题 | 90 分钟 |
| 3 | 最终项目发布检查与证据归档 | 90 分钟 |
| 4 | 固定两道算法终验 | 60 分钟 |
| 5 | 对照 Day 1 并形成下一阶段交接 | 60 分钟 |
| 6 | 最终提交 | 30 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：确认规则并保存起始证据（30 分钟）

**修改或创建这些文件**

- `campus-growth-hub/practice/day-40/final-assessment/README.md`
- `campus-growth-hub/practice/day-40/final-assessment/assessment.spec.ts`
- `campus-growth-hub/docs/final-assessment.md`

**按顺序执行**

1. 记录开始时间、允许工具和 git diff。
2. 只读需求与测试，不预先查看主项目相似实现。

**完成后应该看到**

- 起始文件只含固定数据、空组件和失败测试。

**立即测试，不要留到晚上**

- [ ] 开始前运行最终题测试，应因功能未实现而失败。

### 必做 2：90 分钟无 AI 综合对照题（90 分钟）

**修改或创建这些文件**

- `campus-growth-hub/practice/day-40/final-assessment/activities.ts`
- `campus-growth-hub/practice/day-40/final-assessment/ActivityPanel.vue`
- `campus-growth-hub/practice/day-40/final-assessment/assessment.spec.ts`

**按顺序执行**

1. 实现按 type 筛选、按标题关键词搜索、剩余名额 capacity-enrolledCount、根据 id 查找活动。
2. 在 Vue 组件中接入关键词输入、类型下拉、重置按钮、结果数量和空状态。
3. 点击活动切换收藏；收藏数实时显示。
4. 修复预设错误：模板使用 remainCount，但脚本导出名为 remainingCount。
5. 完成后运行 npm run test:run -- practice/day-40/final-assessment/assessment.spec.ts。
6. 到 90 分钟立即停止，保留未完成代码。

**完成后应该看到**

- lecture 筛选得到 a1、a4。
- 关键词“前端”得到 a4。
- contest 且仅看有名额得到 a5。
- 无结果显示“没有符合条件的活动”。
- 点击 a1 两次后收藏数回到 0。

**立即测试，不要留到晚上**

- [ ] remaining(a1)=2；remaining(a2)=0。
- [ ] findById("missing")=undefined。
- [ ] keyword="vue" 大小写不敏感匹配 a1。
- [ ] 重置后关键词为空、类型为 all、结果数为 5。

### 必做 3：最终项目发布检查与证据归档（90 分钟）

**修改或创建这些文件**

- `campus-growth-hub/docs/architecture.md`
- `campus-growth-hub/docs/project-evidence.md`
- `campus-growth-hub/docs/screenshots/`
- `campus-growth-hub/README.md`

**按顺序执行**

1. 按 Day 35 固定脚本演示学生端与组织者端。
2. npm run type-check
3. npm run test:run
4. npm run build
5. 核对生产 URL、v0.1.0 标签、架构图、截图、known issues。

**完成后应该看到**

- 最终项目可构建、可测试、可部署、可按脚本演示。

**立即测试，不要留到晚上**

- [ ] 学生闭环和组织者闭环均通过；生产深链接刷新正常。

### 必做 4：固定两道算法终验（60 分钟）

**修改或创建这些文件**

- `algorithms/day-40-two-sum.ts`
- `algorithms/day-40-valid-parentheses.ts`

**按顺序执行**

1. 无 AI 完成 LeetCode 1 哈希解和 LeetCode 20 栈解，各最多 25 分钟。
2. 写复杂度和一个失败输入。

**完成后应该看到**

- 两数之和 O(n)，有效括号 O(n)。

**立即测试，不要留到晚上**

- [ ] [2,7,11,15],9 -&gt; [0,1]。
- [ ] "{[]}" -&gt; true；"([)]" -&gt; false。

### 必做 5：对照 Day 1 并形成下一阶段交接（60 分钟）

**修改或创建这些文件**

- `campus-growth-hub/practice/day-40/baseline-day-01.md`
- `campus-growth-hub/docs/final-assessment.md`
- `campus-growth-hub/docs/next-14-days.md`

**按顺序执行**

1. 逐项比较 Day 1 与 Day 40 的独立完成比例、提示次数和耗时。
2. 保留未完成项，不把部分通过写成掌握。
3. 下一阶段只列三个最高优先级：投递材料、面试弱项、项目遗留问题。

**完成后应该看到**

- 结论由数据支持，不使用“进步很大”替代证据。

**立即测试，不要留到晚上**

- [ ] 每个能力结论都引用 Day 1 和 Day 40 的具体记录。

### 必做 6：最终提交（30 分钟）

**修改或创建这些文件**

- `campus-growth-hub/docs/final-assessment.md`
- `campus-growth-hub/docs/next-14-days.md`

**按顺序执行**

1. 执行 git diff，提交 chore: complete forty-day final assessment。
2. 执行 git status 确认无遗漏。

**完成后应该看到**

- 最终提交聚焦且所有证据可追溯。

**立即测试，不要留到晚上**

- [ ] 重新运行测试、类型检查和构建，结果全部成功。


## 有余力再做

- 无。终验日不临时美化页面、不增加新功能。

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

practice/day-40/final-assessment 与生产 URL或本地 preview URL

**检查操作**

1. 核对 90 分钟结束时间、工具记录和已经保存的测试/构建结果。
2. 现场把筛选增加 availableOnly 条件并只运行最终题定向测试。
3. 抽查一条项目演示路径。
4. 对照 Day 1 的一项评分证据。

**正确结果与判断依据**

- 固定测试全部通过或如实保留未完成。
- 现场修改能贯通数据与页面。
- Day 1/Day 40 对照可量化。
- 不在 30 分钟验收中重复执行完整构建。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
