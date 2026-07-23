---
title: 第 10 天：TypeScript 基础：类型、函数与 unknown
---

# 第 10 天：TypeScript 基础：类型、函数与 unknown

::: tip 今天只认这个结果
**阶段：** TypeScript 基础学习<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 能说出类型推断不是把变量变成 any。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 10
cd ../frontend-40-day-learning-lab
npm --prefix typescript-foundations install
npm --prefix typescript-foundations run type-check
git status
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `typescript-foundations/package.json`
- `typescript-foundations/tsconfig.json`
- `typescript-foundations/src/01-values.ts`
- `typescript-foundations/src/02-functions.ts`
- `typescript-foundations/notes/day-10.md`

### 3. 开始前必须确认

- [ ] 每日准备命令已生成独立的 typescript-foundations 练习目录；今天不创建 Vue 项目。
- [ ] 所有 npm 依赖只安装在 typescript-foundations 内，不在学习工作区根目录运行 npm install。
- [ ] 终端保持在 frontend-40-day-learning-lab；命令统一使用 npm --prefix typescript-foundations。

### 4. 第一件具体工作

打开 `typescript-foundations/src/01-values.ts`，开始执行“理解 TypeScript 的作用、推断与基础类型”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 理解 TypeScript 的作用、推断与基础类型 | 90 分钟 |
| 2 | 给函数、数组处理和返回值建立类型边界 | 120 分钟 |
| 3 | 区分 unknown、any 与运行时校验 | 120 分钟 |
| 4 | 30 分钟算法：用类型写两数之和 | 30 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：理解 TypeScript 的作用、推断与基础类型（90 分钟）

**修改或创建这些文件**

- `typescript-foundations/src/01-values.ts`
- `typescript-foundations/notes/day-10.md`

**按顺序执行**

1. 先运行 type-check，确认空白 starter 可以通过。
2. 依次声明 string、number、boolean、string[] 和包含 id/title/capacity 的对象；每项先让编辑器推断，再把鼠标悬停看到的类型写入笔记。
3. 制造三次错误：把 number 赋给 string、数组加入 boolean、访问不存在字段；逐条复制错误信息并用自己的话解释。
4. 删除错误代码后重跑 type-check；写出“类型错误发生在运行前，业务错误仍需要测试”这一区别。

**完成后应该看到**

- 能说出类型推断不是把变量变成 any。
- 三条错误都有原始信息、原因和修复。

**立即测试，不要留到晚上**

- [ ] npm --prefix typescript-foundations run type-check
- [ ] 临时把 capacity 改成字符串时必须失败，恢复后通过

### 必做 2：给函数、数组处理和返回值建立类型边界（120 分钟）

**修改或创建这些文件**

- `typescript-foundations/src/02-functions.ts`
- `typescript-foundations/src/fixtures.ts`
- `typescript-foundations/src/02-functions.test.ts`

**按顺序执行**

1. 定义 Activity 基础结构：id/title/type/capacity/enrolledCount；建立三条固定活动数据。
2. 实现 getRemaining(activity): number、findById(list,id): Activity | undefined、filterByType(list,type): Activity[]。
3. 先故意漏写返回分支，观察 undefined 相关错误；再用明确的联合类型修复，不使用 as any。
4. 运行固定测试：剩余人数、存在/不存在 id、all 返回全部、tech 返回两条；失败时只改当前函数。

**完成后应该看到**

- 三个函数输入和输出都能从签名读懂。
- id 不存在时明确得到 undefined。

**立即测试，不要留到晚上**

- [ ] npm --prefix typescript-foundations run test:day10
- [ ] findById(activities,'missing') 返回 undefined
- [ ] filterByType([],'all') 返回 []

### 必做 3：区分 unknown、any 与运行时校验（120 分钟）

**修改或创建这些文件**

- `typescript-foundations/src/03-unknown.ts`
- `typescript-foundations/src/03-unknown.test.ts`
- `typescript-foundations/notes/day-10.md`

**按顺序执行**

1. 把 JSON.parse 后的外部输入先视为 unknown；直接读取 input.data，保存类型错误。
2. 实现 isRecord(value) 与 parseActivity(value)：依次检查对象、id、title、capacity、enrolledCount，再返回 Activity。
3. 分别传入正确对象、null、缺 title、capacity 为字符串；错误输入固定抛出“活动数据格式错误”。
4. 写一段对比：any 会跳过检查，unknown 强迫先验证；本计划业务代码默认不用 any 逃避错误。

**完成后应该看到**

- 正确对象可以解析。
- 四类错误输入不会悄悄进入业务函数。

**立即测试，不要留到晚上**

- [ ] npm --prefix typescript-foundations run test:unknown
- [ ] 源码中没有 as any 或 @ts-ignore

### 必做 4：30 分钟算法：用类型写两数之和（30 分钟）

**修改或创建这些文件**

- `typescript-foundations/algorithms/day-10-two-sum.ts`
- `typescript-foundations/notes/day-10.md`

**按顺序执行**

1. 算法严格计时 30 分钟：先写样例与思路，20 分钟仍无进展只看一个提示；结束时保存代码、边界、复杂度和 AI 辅助等级。
2. 函数签名固定为 twoSum(nums: number[], target: number): number[]；先写暴力解法。
3. 验证 [2,7,11,15],9 得 [0,1]，无答案得到 []。

**完成后应该看到**

- 函数参数和返回值无 any。

**立即测试，不要留到晚上**

- [ ] npm --prefix typescript-foundations run type-check


## 有余力再做

- 有余力只整理当天错误表，不学习 enum、装饰器或高级泛型。

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

typescript-foundations/src → notes/day-10.md。

**检查操作**

1. 运行 type-check 和两组固定测试。
2. 抽一个基础类型错误让学习者解释。
3. 打开 unknown 校验函数说明每个分支。

**正确结果与判断依据**

- 命令全部通过。
- 能解释 unknown 与 any 的差别。
- 能从函数签名说出输入输出。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
