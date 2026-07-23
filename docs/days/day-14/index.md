---
title: 第 14 天：组件拆分、Props、Emits 与插槽
---

# 第 14 天：组件拆分、Props、Emits 与插槽

::: tip 今天只认这个结果
**阶段：** Vue 3 基础学习<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 点击后由父组件增加 count。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 14
cd ../frontend-40-day-learning-lab/campus-growth-hub
git status
npm run type-check
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/src/components/MessageParent.vue`
- `campus-growth-hub/src/components/MessageChild.vue`
- `campus-growth-hub/src/components/SearchBar.vue`
- `campus-growth-hub/src/components/ActivityCard.vue`
- `campus-growth-hub/notes/day-14.md`

### 3. 开始前必须确认

- [ ] 每日准备命令已生成带 TypeScript 边界的组件 starter。
- [ ] 状态继续由 HomeView 持有；子组件只通过 props 接收、通过 emits 通知。

### 4. 第一件具体工作

打开 `campus-growth-hub/src/components/MessageParent.vue`，开始执行“用最小例理解 Props、Emits 与插槽”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 用最小例理解 Props、Emits 与插槽 | 90 分钟 |
| 2 | 按固定契约拆分真实首页 | 180 分钟 |
| 3 | 无 AI 复写一条父子数据流 | 60 分钟 |
| 4 | 30 分钟算法：有效括号 | 30 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：用最小例理解 Props、Emits 与插槽（90 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/components/MessageParent.vue`
- `campus-growth-hub/src/components/MessageChild.vue`
- `campus-growth-hub/src/components/BasePanel.vue`
- `campus-growth-hub/notes/day-14.md`

**按顺序执行**

1. Child 用 defineProps&lt;{message:string;count:number}&gt;，用类型化 emit 发 increment。
2. Parent 持有 count 并监听事件更新；画 Parent state ↓ props / ↑ emit。
3. 临时修改 props.count，观察只读错误后恢复。
4. BasePanel 只实现 title prop 和默认 slot，不学习作用域插槽。

**完成后应该看到**

- 点击后由父组件增加 count。
- 子组件不直接修改 props。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] 替换 slot 内容后正常显示

### 必做 2：按固定契约拆分真实首页（180 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/components/SearchBar.vue`
- `campus-growth-hub/src/components/ActivityCard.vue`
- `campus-growth-hub/src/components/EmptyState.vue`
- `campus-growth-hub/src/views/HomeView.vue`

**按顺序执行**

1. SearchBar 接收 keyword、selectedType、types；发出 update:keyword、update:selectedType、reset。
2. ActivityCard 接收 activity:Activity、bookmarked:boolean；发出 toggle-bookmark，payload 只传 string id。
3. EmptyState 无业务状态，只显示固定空文案。
4. HomeView 保留全部状态和 computed，通过 props 下发、事件更新。
5. 拆分前后分别执行 6→2→1→收藏→重置，确保行为一致。

**完成后应该看到**

- 子组件职责单一。
- 收藏只改变对应 id。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run build
- [ ] Console 无 prop mutation warning

### 必做 3：无 AI 复写一条父子数据流（60 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/components/ActivityCard.vue`
- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/notes/day-14.md`

**按顺序执行**

1. 关闭资料，删除并重写 ActivityCard 的 props 和 toggle-bookmark emit。
2. 从点击按钮开始，沿 emit→父事件→bookmarkedIds→props→按钮文案写完整链路。
3. 如果类型错误，只读错误文本定位父子约定，不改成 any。

**完成后应该看到**

- 收藏链路恢复。
- 笔记能指出每一步所在文件。

**立即测试，不要留到晚上**

- [ ] 点击同一卡片两次恢复未收藏

### 必做 4：30 分钟算法：有效括号（30 分钟）

**修改或创建这些文件**

- `campus-growth-hub/algorithms/day-14-valid-parentheses.ts`
- `campus-growth-hub/notes/day-14.md`

**按顺序执行**

1. 算法严格计时 30 分钟：先写样例与思路，20 分钟仍无进展只看一个提示；结束时保存代码、边界、复杂度和 AI 辅助等级。
2. 使用数组模拟栈，验证 ()[]{}、(]、{[]}。

**完成后应该看到**

- 三个样例正确。

**立即测试，不要留到晚上**

- [ ] 空字符串为 true


## 有余力再做

- BasePanel 增加一个具名插槽；不强行套到全部组件。

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

首页筛选→收藏→空状态→三组件源码。

**检查操作**

1. 演示固定路线。
2. 沿 props/emit 解释数据流。
3. 运行 type-check。

**正确结果与判断依据**

- 拆分前后行为一致。
- 没有 any 逃避类型。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
