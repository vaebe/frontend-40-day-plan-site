---
title: 第 6 天：第一周巩固：无 AI 重做与固定故障
---

# 第 6 天：第一周巩固：无 AI 重做与固定故障

::: tip 今天只认这个结果
**阶段：** 基础重建<br>
**时间：** 巩固实践日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 两个目标都有证据和完成标准
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 06
cd ../frontend-40-day-learning-lab
git status
node --test campus-activity-board/tests/day-03.test.mjs campus-activity-board/tests/day-04.test.mjs
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-activity-board/src/app.js`
- `campus-activity-board/src/utils/activity-utils.js`
- `campus-activity-board/src/rebuild/day-06-filter.js`
- `campus-activity-board/src/rebuild/day-06-dom.js`
- `campus-activity-board/practice/day-06-faults/README.md`
- `notes/day-06.md`
- `algorithms/day-06-review.js`

### 3. 开始前必须确认

- [ ] 今天不增加新功能、不看新课程；只巩固 Day 1～5 的真实薄弱项。
- [ ] 每日准备命令只生成两个空白重做文件和两个独立故障 starter，不覆盖主项目。
- [ ] 终端 A 运行 node serve.mjs campus-activity-board；主项目必须先通过 Day 5 固定路线。

### 4. 第一件具体工作

打开 `notes/day-01.md`，开始执行“按证据选择两个重做目标”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 按证据选择两个重做目标 | 45 分钟 |
| 2 | 无 AI 重做筛选函数和 DOM 更新 | 180 分钟 |
| 3 | 修复两个固定故障题 | 75 分钟 |
| 4 | 30 分钟重做本周旧算法 | 30 分钟 |
| 5 | 主项目全量回归和提交 | 30 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：按证据选择两个重做目标（45 分钟）

**修改或创建这些文件**

- `notes/day-01.md`
- `notes/day-02.md`
- `notes/day-03.md`
- `notes/day-04.md`
- `notes/day-05.md`
- `notes/day-06.md`

**按顺序执行**

1. 汇总 Day 1～5 每项 A-E、未通过测试、AI 生成过的关键代码和仍未解释的错误。
2. 选择一个阻塞项目运行的能力和一个 AI 依赖最高的能力；若没有明确结果，固定选择 applyFilters 与 updateView。
3. 为两个目标分别写输入、输出、完成测试和最长时间，防止变成“再看一遍代码”。

**完成后应该看到**

- 两个目标都有证据和完成标准
- 没有新增第三个目标

**立即测试，不要留到晚上**

- [ ] 学习者逐条核对：每个选择理由都引用了旧笔记中的具体证据

### 必做 2：无 AI 重做筛选函数和 DOM 更新（180 分钟）

**修改或创建这些文件**

- `campus-activity-board/src/rebuild/day-06-filter.js`
- `campus-activity-board/src/rebuild/day-06-dom.js`
- `notes/day-06.md`

**按顺序执行**

1. 关闭主项目实现和 AI，先在 day-06-filter.js 从空白写 getRemaining、filterByKeyword、filterByType、filterAvailable、applyFilters。
2. 用固定数据执行默认6、技术2、文艺+有名额0、JavaScript1；最多 90 分钟，到点保留未完成。
3. 再在 day-06-dom.js 写伪 DOM 版本的 readFilters、updateView、resetFilters，允许用注释表示 render 函数，但数据流必须完整。
4. 完成后才打开主项目逐项对照，把遗漏记录为条件、返回值、事件或渲染职责，不复制粘贴覆盖重做文件。
5. 把重做结果标 A-E，并记录两处最具体差异。

**完成后应该看到**

- 至少一个核心链路能从空白完成
- 未完成部分被如实保留
- 没有边看边抄

**立即测试，不要留到晚上**

- [ ] applyFilters 默认6、技术2、空态0
- [ ] reset 后三个筛选值恢复默认
- [ ] 纯函数未访问 document

### 必做 3：修复两个固定故障题（75 分钟）

**修改或创建这些文件**

- `campus-activity-board/practice/day-06-faults/import-path/index.html`
- `campus-activity-board/practice/day-06-faults/import-path/app.js`
- `campus-activity-board/practice/day-06-faults/delegation/index.html`
- `campus-activity-board/practice/day-06-faults/delegation/app.js`
- `campus-activity-board/practice/day-06-faults/README.md`
- `notes/day-06.md`

**按顺序执行**

1. 故障一：script 请求 ./app-main.js，但真实文件为 app.js；只用 Console 和 Network 恢复。
2. 故障二：监听器在动态卡片渲染前绑定给空 NodeList；用稳定父容器事件委托修复。
3. 每题只写复现、证据、一个猜测、单点修改和回归；禁止把主项目正确代码整段复制进故障题。
4. 修复后刷新三次，并为故障二新增一张动态卡片验证。

**完成后应该看到**

- 导入故障恢复且 Network 200
- 动态卡片全部可点击
- 两份排错记录完整

**立即测试，不要留到晚上**

- [ ] 故意再次改错文件名能独立恢复
- [ ] 新增第 4 张卡仍能点击

### 必做 4：30 分钟重做本周旧算法（30 分钟）

**修改或创建这些文件**

- `algorithms/day-06-review.js`
- `notes/day-06.md`

**按顺序执行**

1. 算法严格计时 30 分钟：先写样例和思路，再编码；到点停止并记录 A-E 辅助等级，不挤占前端主线。
2. 从 Day 1～5 中选择辅助等级最高的一题；并列时固定两数之和。
3. 不看旧代码，结束后只比较思路、边界和复杂度。

**完成后应该看到**

- 没有新增题型
- 保留第一次和重做结果对照

**立即测试，不要留到晚上**

- [ ] 使用与第一次不同的一组输入

### 必做 5：主项目全量回归和提交（30 分钟）

**修改或创建这些文件**

- `notes/day-06.md`

**按顺序执行**

1. 回归 1280/375、初始6、三种筛选、空态、重置、id4 点击。
2. 运行全部 node:test，确认两个故障题不影响主项目。
3. 提交 refactor: rebuild week-one core flow。

**完成后应该看到**

- 主项目无回归
- 下周只列一个最高风险

**立即测试，不要留到晚上**

- [ ] Console 无红色错误
- [ ] git diff 可逐项解释


## 有余力再做

- 无选做；完成后停止。

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

http://127.0.0.1:4174、两个 rebuild 文件和两个 fault 页面

**检查操作**

1. 检查目标选择证据
2. 抽一个重做函数现场改条件
3. 随机复现一题故障
4. 执行主项目固定路线

**正确结果与判断依据**

- 重做不是复制
- 能先复现再修复
- 主项目稳定

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
