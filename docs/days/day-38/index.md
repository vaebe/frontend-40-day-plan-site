---
title: 第 38 天：固定故障排查与项目表达
---

# 第 38 天：固定故障排查与项目表达

::: tip 今天只认这个结果
**阶段：** 面试准备与最终验收<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 3 分钟概览不超时；8 分钟深讲能打开至少三个真实文件。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 38
cd ../frontend-40-day-learning-lab/campus-growth-hub
npm install
npm run type-check
```

命令报错时先停在当前步骤，不要继续执行后面的任务。

### 1.1 在第二个终端启动页面

保持上一个终端不动，在 `../frontend-40-day-learning-lab/campus-growth-hub` 另开终端运行：

```bash
npm run dev
```

开发服务器会持续运行，这是正常现象；后续命令仍在第一个终端执行。

### 2. 打开这些文件或页面

- `campus-growth-hub/docs/project-walkthrough.md`
- `campus-growth-hub/practice/day-38/faults/README.md`
- `campus-growth-hub/practice/day-38/faults/router-guard.ts`
- `campus-growth-hub/practice/day-38/faults/router-guard.spec.ts`
- `campus-growth-hub/practice/day-38/faults/race-search.ts`
- `campus-growth-hub/practice/day-38/faults/race-search.spec.ts`
- `campus-growth-hub/practice/day-38/faults/bookmark-store.ts`
- `campus-growth-hub/notes/day-38.md`

### 3. 开始前必须确认

- [ ] learner:prepare 已生成 practice/day-38/faults 的故障 starter、README 与失败测试；学习者不得自己发明故障。
- [ ] 故障练习全部位于 practice/day-38/faults，不直接破坏 v0.1.0 演示版本。
- [ ] 必做故障为路由权限和请求竞态；store 不同步为选做。
- [ ] router-guard.ts 的故障行为：未登录访问 requiresAuth 页面仍返回 true。
- [ ] race-search.ts 的固定延迟：关键词 v=800ms、vue=100ms，旧结果会覆盖新结果。
- [ ] bookmark-store.ts 的故障行为：详情页改局部 ref，个人中心读取 Pinia，导致跨页不同步。

### 4. 第一件具体工作

打开 `campus-growth-hub/docs/project-walkthrough.md`，开始执行“准备可核对的项目表达”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 准备可核对的项目表达 | 75 分钟 |
| 2 | 修复两个固定故障 | 180 分钟 |
| 3 | 二叉树最大深度重做 | 45 分钟 |
| 4 | 回归与记录 | 60 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：准备可核对的项目表达（75 分钟）

**修改或创建这些文件**

- `campus-growth-hub/docs/project-walkthrough.md`

**按顺序执行**

1. 按背景、用户、本人完成、技术选型、数据流、一个难点、一个取舍、一个遗留问题写提纲。
2. 录制或计时完成 3 分钟概览和 8 分钟代码深讲。
3. 每个技术亮点附真实文件路径，不使用“提升了很多性能”等无证据表述。

**完成后应该看到**

- 3 分钟概览不超时；8 分钟深讲能打开至少三个真实文件。

**立即测试，不要留到晚上**

- [ ] 学习者录下自己回答“为何不用后端”，回答能说明 40 天范围和 mock 边界。

### 必做 2：修复两个固定故障（180 分钟）

**修改或创建这些文件**

- `campus-growth-hub/practice/day-38/faults/router-guard.ts`
- `campus-growth-hub/practice/day-38/faults/router-guard.spec.ts`
- `campus-growth-hub/practice/day-38/faults/race-search.ts`
- `campus-growth-hub/practice/day-38/faults/race-search.spec.ts`
- `campus-growth-hub/practice/day-38/faults/README.md`

**按顺序执行**

1. 每题严格按复现 -&gt; Console/日志证据 -&gt; 一个假设 -&gt; 单点修改 -&gt; 回归记录。
2. 路由题只允许查看 router-guard.ts；目标是未登录重定向 /login，已登录继续。
3. 竞态题只允许查看 race-search.ts；目标是只接收最新请求或取消旧请求。
4. 每次只运行对应 spec；修复后保留故障原因说明和最小测试，不把错误代码合入 src。
5. 两题结束后运行 npm run test:run -- practice/day-38/faults，必须全部通过。

**完成后应该看到**

- 未登录不再进入受限页。
- 快速请求 v 后请求 vue，最终结果始终是 vue。

**立即测试，不要留到晚上**

- [ ] token=""、requiresAuth=true -&gt; /login。
- [ ] token="demo"、requiresAuth=true -&gt; true。
- [ ] v(800ms) 后 50ms 发 vue(100ms)，最终 renderedKeyword="vue"。

### 必做 3：二叉树最大深度重做（45 分钟）

**修改或创建这些文件**

- `algorithms/day-38-max-depth.ts`

**按顺序执行**

1. 先画递归终止条件，再编码。

**完成后应该看到**

- 空树返回 0。

**立即测试，不要留到晚上**

- [ ] [3,9,20,null,null,15,7] -&gt; 3。

### 必做 4：回归与记录（60 分钟）

**修改或创建这些文件**

- `campus-growth-hub/docs/project-walkthrough.md`
- `campus-growth-hub/notes/day-38.md`

**按顺序执行**

1. npm run type-check
2. npm run test:run
3. npm run build
4. 提交 docs: add project walkthrough and fault evidence。

**完成后应该看到**

- 正式项目仍通过全部检查；两个练习故障都有证据链。

**立即测试，不要留到晚上**

- [ ] 演示 v0.1.0 生产路径未被故障练习影响。


## 有余力再做

- 完成 bookmark-store.ts：详情收藏后个人中心必须立即一致，并说明为何状态应进入 Pinia。

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

docs/project-walkthrough.md 与 practice/day-38/faults

**检查操作**

1. 做 3 分钟项目概览。
2. 检查者指定一个技术点并打开代码。
3. 随机复现路由或竞态故障并要求说明排查证据。

**正确结果与判断依据**

- 表达与代码一致。
- 能先复现再修改。
- 两个必做故障测试通过且正式项目无回归。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
