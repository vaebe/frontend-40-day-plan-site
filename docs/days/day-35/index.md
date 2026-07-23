---
title: 第 35 天：第五周轻量复盘与项目终验
---

# 第 35 天：第五周轻量复盘与项目终验

::: tip 今天只认这个结果
**阶段：** 综合项目实战<br>
**时间：** 轻量复盘日（2.5 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 今天只有一个允许修复的阻塞项。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 35
cd ../frontend-40-day-learning-lab/campus-growth-hub
npm install
npm run type-check
npm run test:run
npm run build
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/README.md`
- `campus-growth-hub/docs/architecture.md`
- `campus-growth-hub/docs/demo-script.md`
- `campus-growth-hub/docs/known-issues.md`
- `campus-growth-hub/docs/ai-usage.md`
- `campus-growth-hub/notes/day-35.md`

### 3. 开始前必须确认

- [ ] Day 34 已留下可访问的生产 URL；若因账号/网络降级，则留下本地 preview URL 和完整阻塞记录。测试、类型检查和构建均通过。
- [ ] 今天冻结功能，只修复阻塞固定演示脚本的问题。

### 4. 第一件具体工作

打开 `campus-growth-hub/notes/day-35.md`，开始执行“整理本周证据与阻塞项”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 整理本周证据与阻塞项 | 30 分钟 |
| 2 | 按固定脚本终验项目 | 60 分钟 |
| 3 | 无 AI 完成一个规则修改 | 30 分钟 |
| 4 | 冻结版本并打标签 | 30 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**150 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：整理本周证据与阻塞项（30 分钟）

**修改或创建这些文件**

- `campus-growth-hub/notes/day-35.md`
- `campus-growth-hub/docs/known-issues.md`
- `campus-growth-hub/docs/ai-usage.md`

**按顺序执行**

1. 只选一个最影响演示的 D/E 项；其余写入 known-issues。
2. 写出本周三个已掌握证据。

**完成后应该看到**

- 今天只有一个允许修复的阻塞项。

**立即测试，不要留到晚上**

- [ ] 阻塞项必须能用固定操作步骤复现。

### 必做 2：按固定脚本终验项目（60 分钟）

**修改或创建这些文件**

- `campus-growth-hub/docs/demo-script.md`
- `campus-growth-hub/docs/architecture.md`

**按顺序执行**

1. 依次演示：学生登录、搜索、详情、收藏、报名、个人中心。
2. 再演示：组织者登录、新增、编辑、下架、看板。
3. 在 architecture.md 画出页面 -&gt; store/service -&gt; mock/localStorage 数据流。

**完成后应该看到**

- 12 个步骤均从用户入口开始；架构图能对应到真实文件。

**立即测试，不要留到晚上**

- [ ] 每一步写明预期页面文字或状态；任何失败都登记而不是跳过。

### 必做 3：无 AI 完成一个规则修改（30 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/utils/validateEnrollment.ts`
- `campus-growth-hub/src/utils/__tests__/validateEnrollment.spec.ts`

**按顺序执行**

1. 把报名手机号规则改为必须是 11 位数字，并同步更新测试。

**完成后应该看到**

- 先看到旧测试失败，再更新规则与测试全部通过。

**立即测试，不要留到晚上**

- [ ] 13800138000 有效；123 和 1380013800 无效。

### 必做 4：冻结版本并打标签（30 分钟）

**修改或创建这些文件**

- `campus-growth-hub/README.md`
- `campus-growth-hub/docs/architecture.md`
- `campus-growth-hub/docs/demo-script.md`
- `campus-growth-hub/docs/known-issues.md`
- `campus-growth-hub/docs/ai-usage.md`

**按顺序执行**

1. 执行 git status，提交 docs: finalize project evidence。
2. 执行 git tag -a v0.1.0 -m "campus growth hub demo"。
3. 执行 git show v0.1.0 --stat 确认标签指向最终提交。

**完成后应该看到**

- 工作区干净；v0.1.0 存在；项目不再追加新功能。

**立即测试，不要留到晚上**

- [ ] npm run test:run、npm run type-check、npm run build 全部通过。


## 有余力再做

- 无。今天剩余时间用于休息，不补做非阻塞功能。

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

生产 URL或本地 preview URL 与 docs/demo-script.md

**检查操作**

1. 按固定 12 步抽查学生端和组织者端。
2. 随机打开一个关键文件画数据流。
3. 检查 v0.1.0 标签。

**正确结果与判断依据**

- 演示可重复。
- 能讲一个真实取舍和一次真实排错。
- 只修阻塞问题，没有临时扩展范围。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
