---
title: 第 14 天：第二周轻量复盘与无 AI 验收
---

# 第 14 天：第二周轻量复盘与无 AI 验收

::: tip 今天只认这个结果
**阶段：** JavaScript 与 Vue 入门<br>
**时间：** 轻量复盘日（2 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 收藏数据流包含 HomeView、ActivityCard、toggle-bookmark、bookmarkedIds
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 14
cd ../frontend-40-day-learning-lab/campus-growth-hub
git log --oneline -7
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/notes/week-02-review.md`
- `campus-growth-hub/notes/vue-data-flow.md`
- `campus-growth-hub/notes/async-state-flow.md`
- `campus-growth-hub/algorithms/day-14-review.js`
- `campus-growth-hub/src/views/HomeView.vue`

### 3. 开始前必须确认

- [ ] 每日准备命令已验证 HomeView 存在 success/empty/error/retry 四态，只补齐三份复盘模板和算法空白文件；若 Day 13 未完成则命令必须报错并列出缺失标记。
- [ ] 终端当前位于 campus-growth-hub；在终端 A 运行 npm run dev 并保持运行，终端 B 留在项目根目录执行 git 与 build。
- [ ] 今天任务 120 分钟，加验收 30 分钟，共 150 分钟；不打开新课程。

### 4. 第一件具体工作

打开 `campus-growth-hub/notes/vue-data-flow.md`，开始执行“固定数据流图与异步状态图”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 固定数据流图与异步状态图 | 35 分钟 |
| 2 | 无 AI 固定迁移：标题或地点搜索 | 45 分钟 |
| 3 | 旧题、演示脚本与阶段记录 | 40 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**120 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：固定数据流图与异步状态图（35 分钟）

**修改或创建这些文件**

- `campus-growth-hub/notes/vue-data-flow.md`
- `campus-growth-hub/notes/async-state-flow.md`
- `campus-growth-hub/notes/week-02-review.md`

**按顺序执行**

1. vue-data-flow.md 按模板填：状态在哪里定义→通过哪个 prop 给哪个组件→用户操作 emit 什么→父组件改什么→哪个 computed 重新计算→页面哪里变化。必须用 bookmark 流程填写。
2. async-state-flow.md 画 idle→loading→success/empty/error，error→retry→loading；每条箭头标触发动作。
3. week-02-review.md 写三条掌握证据、一个最高风险、下周只调整一项。

**完成后应该看到**

- 收藏数据流包含 HomeView、ActivityCard、toggle-bookmark、bookmarkedIds
- 异步图五态齐全
- 成果证据均能指向文件或提交

**立即测试，不要留到晚上**

- [ ] 学习者随机遮住一段，并口述缺失箭头

### 必做 2：无 AI 固定迁移：标题或地点搜索（45 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/notes/week-02-review.md`

**按顺序执行**

1. 关闭 AI 和教程，在 filteredActivities computed 中把关键词匹配从仅 title 改为 title 或 location。
2. 使用同一个 normalizedKeyword；不得再建第二套筛选状态。
3. 30 分钟到点停止；最后 15 分钟运行固定测试并记录遗漏，不复制旧答案。

**完成后应该看到**

- 输入“东操场”只显示晨跑打卡
- 输入“教学楼”显示前端入门工作坊与 JavaScript 读书会
- 输入“javascript”仍显示读书会
- 清空恢复 6 张

**立即测试，不要留到晚上**

- [ ] 关键词前后空格仍匹配
- [ ] 类型技术+地点教学楼为 2
- [ ] 重置恢复 all 与空关键词

### 必做 3：旧题、演示脚本与阶段记录（40 分钟）

**修改或创建这些文件**

- `campus-growth-hub/algorithms/day-14-review.js`
- `campus-growth-hub/notes/week-02-review.md`

**按顺序执行**

1. 算法选择辅助等级最高的一题；若并列固定移动零；从空白写思路、代码、边界、复杂度，不新增题。
2. 按固定演示脚本：标题搜索→地点搜索→类型筛选→收藏→mode error→重试→DevTools 断点查看 filteredActivities 长度。
3. 记录本周 A-E 比例和一个下周风险；在终端 B 运行 npm run build；提交 docs: add vue fundamentals review。

**完成后应该看到**

- 旧题有完整证据
- 演示脚本全部走通
- 构建成功
- 只列一个下周最高风险

**立即测试，不要留到晚上**

- [ ] 断点处能指出过滤后数组长度
- [ ] Console 无 Vue warning


## 有余力再做

- 今天不安排选做；完成后停止学习。

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

首页：javascript→东操场→技术+教学楼→收藏→error→retry；随后打开三份 review 文档。

**检查操作**

1. 执行完整用户路线
2. 口述 ref/computed/watch 区别
3. 沿数据流图解释父子通信
4. 展示如何从错误状态重试

**正确结果与判断依据**

- 地点搜索正确
- 重试恢复 6 张
- 数据流与代码一致
- 总学习加验收不超过 150 分钟

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
