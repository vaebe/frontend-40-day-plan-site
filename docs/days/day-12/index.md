---
title: 第 12 天：组件拆分、Props、Emits 与插槽
---

# 第 12 天：组件拆分、Props、Emits 与插槽

::: tip 今天只认这个结果
**阶段：** JavaScript 与 Vue 入门<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 子组件显示父组件消息
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 12
cd ../frontend-40-day-learning-lab/campus-growth-hub
git status
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/src/components/MessageParent.vue`
- `campus-growth-hub/src/components/MessageChild.vue`
- `campus-growth-hub/src/components/BasePanel.vue`
- `campus-growth-hub/src/components/SearchBar.vue`
- `campus-growth-hub/src/components/ActivityCard.vue`
- `campus-growth-hub/src/components/EmptyState.vue`
- `campus-growth-hub/notes/day-12.md`

### 3. 开始前必须确认

- [ ] 每日准备命令已检查 Day 11 首页并生成所有六个组件 starter、notes/day-12.md 和算法空白文件；不会覆盖 HomeView。
- [ ] 终端当前位于 campus-growth-hub；在终端 A 运行 npm run dev 并保持运行，终端 B 留在项目根目录执行 git 与 build。
- [ ] 状态继续由 HomeView 持有，子组件只收 props、发 emits；BasePanel 只演示默认插槽。

### 4. 第一件具体工作

打开 `campus-growth-hub/src/components/MessageChild.vue`，开始执行“props、emit 与单向数据流最小例”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | props、emit 与单向数据流最小例 | 85 分钟 |
| 2 | 按固定契约拆首页 | 170 分钟 |
| 3 | 有效括号、复现与构建 | 105 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：props、emit 与单向数据流最小例（85 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/components/MessageChild.vue`
- `campus-growth-hub/src/components/MessageParent.vue`
- `campus-growth-hub/notes/day-12.md`

**按顺序执行**

1. 直接阅读 Vue 指南“Props”“组件事件”“插槽”基础小节。
2. Parent 持有 message 与 count；Child defineProps({message:String,count:Number})，defineEmits([increment])；按钮只 emit increment，不写 props.count++。
3. 父组件监听 @increment 修改 count；画 Parent state ↓ props / ↑ emit。
4. BasePanel.vue 只写 title prop 与默认 slot，不学习作用域插槽。

**完成后应该看到**

- 子组件显示父组件消息
- 点击后由父组件把 count 加 1
- 无“Attempting to mutate prop”警告

**立即测试，不要留到晚上**

- [ ] 临时在子组件改 prop 观察警告后恢复
- [ ] 替换 slot 内容能正常显示

### 必做 2：按固定契约拆首页（170 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/components/SearchBar.vue`
- `campus-growth-hub/src/components/ActivityCard.vue`
- `campus-growth-hub/src/components/EmptyState.vue`
- `campus-growth-hub/src/views/HomeView.vue`

**按顺序执行**

1. SearchBar props：searchText、selectedType、types；emits：update:searchText、update:selectedType、reset；内部只读取控件并 emit。
2. ActivityCard props：activity、bookmarked；emit toggle-bookmark，payload 只传 activity.id；按钮显示收藏/已收藏。
3. EmptyState 无状态，只显示“暂无符合条件的活动”。
4. HomeView 保留 activities、searchText、selectedType、filteredActivities、bookmarkedIds、toggleBookmark；通过 props 下发，通过事件更新。
5. 拆分前先跑一遍 6→技术2→javascript1→收藏→重置；拆分后重复完全相同路径。

**完成后应该看到**

- 拆分前后功能一致
- 子组件不直接修改 props
- 收藏事件 payload 是 id
- 空状态由 filteredActivities.length===0 控制

**立即测试，不要留到晚上**

- [ ] Vue Console 无 prop mutation warning
- [ ] 点击 id=5 收藏只改变对应卡
- [ ] 重置后收藏状态保留但筛选恢复

### 必做 3：有效括号、复现与构建（105 分钟）

**修改或创建这些文件**

- `campus-growth-hub/algorithms/day-12-valid-parentheses.js`
- `campus-growth-hub/notes/day-12.md`

**按顺序执行**

1. 打开 https://leetcode.cn/problems/valid-parentheses/；使用数组模拟栈与 close→open 映射。
2. 样例 ()[]{} 为 true，(] 为 false；遇到右括号时栈空立即 false。
3. 在 algorithms/ 对应文件中保留：题意、两个样例、自己的第一版、最终代码、复杂度、AI 辅助等级；不要只保存 LeetCode 通过截图。
4. 关闭资料重写 ActivityCard 的 props 与 emit；在终端 B 运行 npm run build；提交 refactor: split activity components。

**完成后应该看到**

- 两个样例正确
- 无 AI ActivityCard 可收藏
- 构建通过

**立即测试，不要留到晚上**

- [ ] 空字符串为 true
- [ ] ([)] 为 false
- [ ] 输入 {[]} 为 true


## 有余力再做

- BasePanel 增加名为 actions 的具名插槽；不把它强行应用到全部卡片。

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

首页筛选→收藏→空状态；随后打开 HomeView、SearchBar、ActivityCard。

**检查操作**

1. 沿 props/emit 画数据流
2. 现场让 ActivityCard 发 toggle-bookmark
3. 指出为什么不能直接修改 props

**正确结果与判断依据**

- 父组件更新 bookmarkedIds
- 子组件职责可一句话说明
- 拆分后功能无回归

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
