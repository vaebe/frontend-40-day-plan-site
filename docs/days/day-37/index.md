---
title: 第 37 天：JavaScript、Vue 与前端手写复现
---

# 第 37 天：JavaScript、Vue 与前端手写复现

::: tip 今天只认这个结果
**阶段：** 面试基础与终验<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 每个回答可在 90 秒内口述，不背长文。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 37
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

- `campus-growth-hub/practice/day-37/README.md`
- `campus-growth-hub/practice/day-37/debounce.ts`
- `campus-growth-hub/practice/day-37/promise-error.ts`
- `campus-growth-hub/practice/day-37/cases.spec.ts`
- `campus-growth-hub/docs/frontend-core-examples.md`
- `campus-growth-hub/notes/day-37.md`

### 3. 开始前必须确认

- [ ] learner:prepare 已生成 practice/day-37 starter 和可被项目 Vitest 扫描的 cases.spec.ts；不要手工发明测试框架。
- [ ] 今天必做理论只含闭包、事件循环、Vue 响应式和 Pinia 状态边界。
- [ ] 必做手写只含防抖与 Promise 错误处理；数组去重和 composable 放入选做。
- [ ] 项目中没有自然例子时写“未找到”，禁止为了闭包等术语强行改代码。

### 4. 第一件具体工作

打开 `campus-growth-hub/docs/frontend-core-examples.md`，开始执行“四个核心概念短答”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 四个核心概念短答 | 75 分钟 |
| 2 | 无 AI 手写防抖与 Promise 错误处理 | 150 分钟 |
| 3 | 项目证据走查 | 60 分钟 |
| 4 | 反转链表与提交 | 75 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：四个核心概念短答（75 分钟）

**修改或创建这些文件**

- `campus-growth-hub/docs/frontend-core-examples.md`

**按顺序执行**

1. 每个概念写定义、最小例子、项目证据或“未找到”、一个常见误区。

**完成后应该看到**

- 每个回答可在 90 秒内口述，不背长文。

**立即测试，不要留到晚上**

- [ ] 事件循环例子 Promise.then 先于 setTimeout。
- [ ] Pinia 与页面局部筛选状态边界解释正确。

### 必做 2：无 AI 手写防抖与 Promise 错误处理（150 分钟）

**修改或创建这些文件**

- `campus-growth-hub/practice/day-37/debounce.ts`
- `campus-growth-hub/practice/day-37/promise-error.ts`
- `campus-growth-hub/practice/day-37/cases.spec.ts`

**按顺序执行**

1. 实现 debounce(fn, wait)，保留调用时 this 与参数。
2. 实现 runTask(task)，返回成功数据；失败时返回可显示的错误；finally 中结束 loading。
3. 先写固定测试，再编码；最多请求一次提示。
4. 实现后运行 npm run test:run -- practice/day-37/cases.spec.ts。

**完成后应该看到**

- 快速三次调用只执行最后一次。
- Promise reject 后 loading=false 且错误可读取。

**立即测试，不要留到晚上**

- [ ] wait=100，0/30/60ms 调用参数 a/b/c，160ms 后只得到 c。
- [ ] task resolve("ok") -&gt; data="ok"。
- [ ] task reject(new Error("boom")) -&gt; error="boom", loading=false。

### 必做 3：项目证据走查（60 分钟）

**修改或创建这些文件**

- `campus-growth-hub/docs/frontend-core-examples.md`

**按顺序执行**

1. 固定查找异步、响应式和状态管理各一个例子，记录准确文件和函数名。
2. 闭包若无可信例子，只使用 debounce 练习例子。

**完成后应该看到**

- 每个说法都能打开实际代码核对。

**立即测试，不要留到晚上**

- [ ] 学习者随机选择一个证据，并说明输入、状态变化和 UI 结果。

### 必做 4：反转链表与提交（75 分钟）

**修改或创建这些文件**

- `algorithms/day-37-reverse-list.ts`
- `campus-growth-hub/notes/day-37.md`

**按顺序执行**

1. 用 30 分钟重做反转链表。
2. 运行 npm run test:run -- practice/day-37/cases.spec.ts 和 npm run type-check。
3. 提交 docs: add frontend core explanations。

**完成后应该看到**

- 四概念、两手写、一算法均有固定证据。

**立即测试，不要留到晚上**

- [ ] [1,2,3,4,5] -&gt; [5,4,3,2,1]。


## 有余力再做

- 手写数组去重并比较 Set 与循环。
- 从空文件重写 usePagination 的最小版本。

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

docs/frontend-core-examples.md 与 practice/day-37

**检查操作**

1. 随机口述两个概念。
2. 运行防抖固定测试。
3. 把 wait 从 100 改为 200 并调整断言。
4. 打开一个项目证据核对。

**正确结果与判断依据**

- 回答有代码依据。
- 防抖参数化后仍通过。
- 不会为了显得完整而虚构项目例子。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
