---
title: 第 39 天：固定题目的模拟技术面
---

# 第 39 天：固定题目的模拟技术面

::: tip 今天只认这个结果
**阶段：** 面试准备与最终验收<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 固定题包无需任何人临时出题即可开始。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 39
cd ../frontend-40-day-learning-lab/campus-growth-hub
npm install
npm run type-check
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/practice/day-39/interview-pack.md`
- `campus-growth-hub/practice/day-39/code-reading.ts`
- `campus-growth-hub/practice/day-39/debounce.ts`
- `campus-growth-hub/practice/day-39/day-39.spec.ts`
- `campus-growth-hub/practice/day-39/checker-answer-key.md`
- `campus-growth-hub/notes/day-39-interview-score.md`

### 3. 开始前必须确认

- [ ] learner:prepare 已生成完整代码阅读 starter、失败测试、固定题包和 checker-answer-key.md；学习过程中不得打开答案卡，只在当天全部任务结束后的统一审查中使用。
- [ ] 今天不随机选题；固定算法为 LeetCode 1 两数之和与 LeetCode 20 有效括号。
- [ ] 固定手写为 debounce(fn, wait)。
- [ ] 固定代码阅读文件包含异步循环陷阱：forEach(async item =&gt; await save(item)) 后立即打印 done。
- [ ] 模拟期间关闭 AI 和项目笔记；可询问澄清但不能获得提示。

### 4. 第一件具体工作

打开 `campus-growth-hub/practice/day-39/interview-pack.md`，开始执行“准备题包与评分规则”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 准备题包与评分规则 | 60 分钟 |
| 2 | 完成固定 75 分钟模拟技术面 | 75 分钟 |
| 3 | 只修最高优先级漏洞 | 120 分钟 |
| 4 | 项目问答复现与最终记录 | 105 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：准备题包与评分规则（60 分钟）

**修改或创建这些文件**

- `campus-growth-hub/practice/day-39/interview-pack.md`
- `campus-growth-hub/practice/day-39/checker-answer-key.md`
- `campus-growth-hub/notes/day-39-interview-score.md`

**按顺序执行**

1. 检查 learner:prepare 生成的题包固定八问：闭包；事件循环；ref/computed/watch；props/emit；Pinia 状态边界；HTTP 缓存；项目数据流；一次真实排错。
2. 检查答案卡已有参考要点，评分维度固定为理解、表达、正确性、边界、提示次数，各 0-2 分。
3. 确认 75 分钟模拟分配：算法 25、代码阅读 10、手写 15、基础问答 15、项目追问 10；学习者不改题。

**完成后应该看到**

- 固定题包无需任何人临时出题即可开始。

**立即测试，不要留到晚上**

- [ ] 题目和评分表完整，答案区只在当天结束统一审查时打开。

### 必做 2：完成固定 75 分钟模拟技术面（75 分钟）

**修改或创建这些文件**

- `campus-growth-hub/practice/day-39/code-reading.ts`
- `campus-growth-hub/practice/day-39/debounce.ts`
- `campus-growth-hub/practice/day-39/day-39.spec.ts`
- `campus-growth-hub/notes/day-39-interview-score.md`

**按顺序执行**

1. 两数之和只要求哈希方案；有效括号使用栈。
2. 代码阅读题解释为何 done 先打印，并给出 for...of 顺序等待或 Promise.all 并发方案。
3. 手写 debounce 并用固定三次调用验证。
4. 按题包中标记的固定四问作答，再完成一个项目数据流追问；全程录音或逐字记录，不在中途查看答案卡。
5. 模拟结束后运行 npm run test:run -- practice/day-39/day-39.spec.ts；测试结果计入原始分，不在模拟计时中偷偷修正。

**完成后应该看到**

- 全程记录卡住位置、澄清次数和实际得分。

**立即测试，不要留到晚上**

- [ ] twoSum([2,7,11,15],9) -&gt; [0,1]。
- [ ] isValid("([)]") -&gt; false。
- [ ] 0/30/60ms 调用 debounce，wait=100，最终只执行第三次。

### 必做 3：只修最高优先级漏洞（120 分钟）

**修改或创建这些文件**

- `campus-growth-hub/notes/day-39-interview-score.md`

**按顺序执行**

1. 按影响排序，只选择得分最低且大厂前端高频的一项。
2. 先重做原题，再做一个同类变式；不得同时补四个主题。
3. 记录第一次错误、修正依据和第二次是否独立。

**完成后应该看到**

- 只有一个漏洞进入补强，且有前后对照。

**立即测试，不要留到晚上**

- [ ] 若补算法，必须换一组输入；若补问答，必须用项目例子重新回答。

### 必做 4：项目问答复现与最终记录（105 分钟）

**修改或创建这些文件**

- `campus-growth-hub/docs/project-walkthrough.md`
- `campus-growth-hub/notes/day-39-interview-score.md`

**按顺序执行**

1. 重做模拟中未通过的项目追问。
2. 运行 npm run type-check、npm run test:run、npm run build。
3. 提交 docs: record fixed mock interview results。

**完成后应该看到**

- 评分表包含原始分、补强后分、下一阶段问题，不修改原始成绩。

**立即测试，不要留到晚上**

- [ ] 评分表能复现题目、学习者回答和给分理由。


## 有余力再做

- 无。不要用额外题量掩盖模拟中暴露的问题。

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

notes/day-39-interview-score.md

**检查操作**

1. 核对 75 分钟原始记录。
2. 重问最低分问题。
3. 将一道算法输入改为 [3,3], target=6 或将括号输入改为 "(("。

**正确结果与判断依据**

- 学习者能说明卡住时如何沟通。
- 复杂度与边界判断正确。
- 原始成绩保留，没有事后美化。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
