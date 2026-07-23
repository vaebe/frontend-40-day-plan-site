---
title: 第 5 天：DOM、事件与完整页面交互
---

# 第 5 天：DOM、事件与完整页面交互

::: tip 今天只认这个结果
**阶段：** 前端基础学习<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 刷新后仍显示 6 张卡
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 05
cd ../frontend-40-day-learning-lab
git status
node --test campus-activity-board/tests/day-03.test.mjs campus-activity-board/tests/day-04.test.mjs
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-activity-board/index.html`
- `campus-activity-board/src/app.js`
- `campus-activity-board/src/utils/activity-utils.js`
- `campus-activity-board/src/data/activities.js`
- `notes/day-05.md`
- `algorithms/day-05-valid-parentheses.js`

### 3. 开始前必须确认

- [ ] Day 4 的全部纯函数测试通过；今天必须直接导入并复用，禁止在事件回调里复制筛选条件。
- [ ] 终端 A 运行 node serve.mjs campus-activity-board；浏览器打开 http://127.0.0.1:4174。
- [ ] Day 1 的 app.js 已保留 Day 5 TODO；每日准备命令只补独立选择器故障题、算法文件和当天笔记，不覆盖主项目。

### 4. 第一件具体工作

打开 `campus-activity-board/index.html`，开始执行“建立 DOM 查询、渲染和事件最小闭环”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 建立 DOM 查询、渲染和事件最小闭环 | 75 分钟 |
| 2 | 接通组合筛选、重置和事件委托 | 150 分钟 |
| 3 | 用 DevTools 修复一个真实 DOM 故障 | 75 分钟 |
| 4 | 30 分钟理解栈和有效括号 | 30 分钟 |
| 5 | 完整页面回归和提交 | 30 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：建立 DOM 查询、渲染和事件最小闭环（75 分钟）

**修改或创建这些文件**

- `campus-activity-board/index.html`
- `campus-activity-board/src/app.js`
- `notes/day-05.md`

**按顺序执行**

1. 在 app.js 顶部集中查询 keyword、type、availableOnly、reset、resultCount、activityList、emptyState 七个元素。
2. 任一元素找不到就抛出明确错误，不在后续代码中到处使用可选链掩盖问题。
3. 先写 renderActivities(list)：清空容器，再用 map+join 或 createElement 渲染 article，禁止把 onclick 字符串写进 HTML。
4. 写 renderResultCount(count) 和 renderEmptyState(count)，固定文案“找到 N 个活动”和“暂无符合条件的活动”。
5. 首次只调用 renderActivities(activities)，确认 Day 2 的 6 张静态卡改由数据生成且布局不变。

**完成后应该看到**

- 刷新后仍显示 6 张卡
- 结果数为找到 6 个活动
- 静态卡片已从 index.html 删除

**立即测试，不要留到晚上**

- [ ] 传 [] 时卡片区为空且空状态可见
- [ ] 传一条数据时结果数为 1
- [ ] Console 无 null 访问错误

### 必做 2：接通组合筛选、重置和事件委托（150 分钟）

**修改或创建这些文件**

- `campus-activity-board/src/app.js`
- `campus-activity-board/src/utils/activity-utils.js`
- `campus-activity-board/index.html`

**按顺序执行**

1. 写 readFilters()，只返回 {keyword,type,availableOnly}，不在其中渲染页面。
2. 写 updateView()：读取筛选条件，调用 Day 4 的 applyFilters，再统一渲染卡片、结果数和空状态。
3. keyword 使用 input 事件，type 和 availableOnly 使用 change 事件；三个事件都只调用 updateView。
4. resetFilters() 把关键词清空、类型改 all、checkbox 设 false，再调用一次 updateView。
5. 在 #activity-list 上绑定一个 click，使用 closest([data-activity-id]) 事件委托，把点击的 id 写入 #selected-activity。

**完成后应该看到**

- 搜索 JavaScript 得 1 条
- 类型技术得 2 条
- 文艺+仅看有名额得 0 条和空状态
- 重置恢复 6 条

**立即测试，不要留到晚上**

- [ ] 关键词前后空格仍匹配
- [ ] 技术+有名额得到 2 条
- [ ] 点击 id=4 卡片显示“已选择活动 4”
- [ ] 动态重渲染后点击仍有效

### 必做 3：用 DevTools 修复一个真实 DOM 故障（75 分钟）

**修改或创建这些文件**

- `campus-activity-board/practice/day-05-selector-fault/index.html`
- `campus-activity-board/practice/day-05-selector-fault/app.js`
- `campus-activity-board/src/app.js`
- `notes/day-05.md`

**按顺序执行**

1. 先打开 practice/day-05-selector-fault：其中 HTML 是 #result-count，app.js 故意查询 #results-count；复现 null 错误。
2. 按 Console 行号 → 故障 HTML 真实 id → 故障 app.js 选择器顺序收集证据，只改选择器。
3. 回到主项目，在 updateView 的 result 产生后设断点，依次测试默认、技术、文艺+有名额，记录数组长度 6、2、0。
4. 回归主项目的重置与事件委托，证明故障练习没有污染主实现。

**完成后应该看到**

- 选择器修复后全部交互恢复
- 断点能看到三个固定长度
- 笔记包含一次完整证据链

**立即测试，不要留到晚上**

- [ ] 再次临时写错 keyword id，能按同样方法恢复
- [ ] Console 最终无红色错误

### 必做 4：30 分钟理解栈和有效括号（30 分钟）

**修改或创建这些文件**

- `algorithms/day-05-valid-parentheses.js`
- `notes/day-05.md`

**按顺序执行**

1. 算法严格计时 30 分钟：先写样例和思路，再编码；到点停止并记录 A-E 辅助等级，不挤占前端主线。
2. 先画输入 ()[]{} 时栈的 push/pop；只实现基础版本。
3. 若 30 分钟未完成，保留代码并写清卡在匹配映射还是栈空判断。

**完成后应该看到**

- ()[]{} 为 true
- (] 为 false
- 知道右括号到来时检查栈顶

**立即测试，不要留到晚上**

- [ ] ([)] 为 false
- [ ] {[]} 为 true

### 必做 5：完整页面回归和提交（30 分钟）

**修改或创建这些文件**

- `notes/day-05.md`

**按顺序执行**

1. 按固定路线执行：初始6→JavaScript1→技术2→文艺+有名额0→重置6→点击id4。
2. 运行 Day 03+04 测试，确认 DOM 接入未修改纯函数。
3. 提交 feat: connect activity filters to DOM。

**完成后应该看到**

- 固定路线全部通过
- 测试和 Console 都干净

**立即测试，不要留到晚上**

- [ ] 375px 下交互后仍无横向滚动
- [ ] 刷新后默认恢复 6 条


## 有余力再做

- 不做收藏、不做 localStorage；只在有余力时为结果数增加 aria-live。

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

http://127.0.0.1:4174 和 DevTools

**检查操作**

1. 执行固定用户路线
2. 沿 readFilters→applyFilters→updateView→DOM 解释数据流
3. 现场制造选择器错误并修复
4. 点击动态卡片

**正确结果与判断依据**

- 只有一套筛选逻辑
- 事件委托在重渲染后有效
- 能依据行号排错

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
