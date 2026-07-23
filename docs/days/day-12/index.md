---
title: 第 12 天：Vue 3 + TypeScript：启动、模板与响应式状态
---

# 第 12 天：Vue 3 + TypeScript：启动、模板与响应式状态

::: tip 今天只认这个结果
**阶段：** Vue 3 基础学习<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 页面显示计数器，点击三次为 3。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 12
cd ../frontend-40-day-learning-lab/campus-growth-hub
npm install
git status
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/package.json`
- `campus-growth-hub/src/main.ts`
- `campus-growth-hub/src/App.vue`
- `campus-growth-hub/src/components/CounterPractice.vue`
- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/notes/day-12.md`

### 3. 开始前必须确认

- [ ] 每日准备命令已生成 Vue 3 + TypeScript 的 campus-growth-hub；这是 Day 12～40 唯一正式项目。
- [ ] 项目入口从第一天就是 src/main.ts，不创建 main.js，也不经历 JS 项目再迁移。
- [ ] 终端 A 运行 npm run dev 并保持；终端 B 在同一项目根目录运行 type-check、build 和 Git。

### 4. 第一件具体工作

打开 `campus-growth-hub/src/main.ts`，开始执行“认识 Vue 项目入口、单文件组件和模板”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 认识 Vue 项目入口、单文件组件和模板 | 95 分钟 |
| 2 | 完成固定活动首页和响应式列表 | 160 分钟 |
| 3 | 用 DevTools 看一次 Vue 状态更新 | 75 分钟 |
| 4 | 30 分钟算法：移动零 | 30 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：认识 Vue 项目入口、单文件组件和模板（95 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/main.ts`
- `campus-growth-hub/src/App.vue`
- `campus-growth-hub/src/components/CounterPractice.vue`
- `campus-growth-hub/notes/day-12.md`

**按顺序执行**

1. 运行 npm run dev，记录地址；确认 main.ts 创建应用、App.vue 是根组件、#app 是挂载点。
2. CounterPractice 使用 &lt;script setup lang="ts"&gt;、ref(0) 和按钮点击；点击三次显示 3。
3. 用箭头写 ref 定义→模板读取→事件修改→视图更新；临时把 count 赋成字符串观察类型错误后恢复。
4. 关闭资料，从空白重写一次计数器，只保留一个 ref 和一个按钮。

**完成后应该看到**

- 页面显示计数器，点击三次为 3。
- 能指出 main.ts、App.vue 和组件的职责。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] 刷新后计数归 0
- [ ] count.value='1' 必须报错

### 必做 2：完成固定活动首页和响应式列表（160 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/types/activity.ts`
- `campus-growth-hub/src/data/activities.ts`
- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/src/App.vue`
- `campus-growth-hub/src/style.css`

**按顺序执行**

1. 阅读准备好的 Activity 类型和 6 条活动数据，先口述每个字段。
2. HomeView 定义 keyword=ref('')，用一个普通函数返回标题匹配结果；Day 13 再改 computed。
3. 模板包含标题、搜索框、结果数量和活动列表；卡片显示标题、类型、地点和剩余名额。
4. App.vue 只渲染 HomeView；CSS 做桌面三列、375px 单列，不做主题系统。
5. 搜索 JavaScript 得 1 条，清空恢复 6 条；临时读取 activity.foo，确认类型提示后删除。

**完成后应该看到**

- 初始 6 张卡，搜索 JavaScript 后 1 张。
- 375px 单列且无横向滚动。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run build
- [ ] Console 无 Vue warning

### 必做 3：用 DevTools 看一次 Vue 状态更新（75 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/notes/day-12.md`

**按顺序执行**

1. 在搜索函数第一行设断点，输入 JavaScript，观察 keyword.value 和活动数组长度。
2. Step over 到返回语句，记录过滤前后长度；移除断点后确认页面正常。
3. 记录一次错误或警告：现象、证据、原因、修复；没有错误就临时把导入路径改错并立即恢复。

**完成后应该看到**

- 笔记记录 6→1 的变量变化。
- 恢复后 Console 无未解释错误。

**立即测试，不要留到晚上**

- [ ] 刷新后断点仍能重新命中
- [ ] git diff 中没有遗留的错误路径

### 必做 4：30 分钟算法：移动零（30 分钟）

**修改或创建这些文件**

- `campus-growth-hub/algorithms/day-12-move-zeroes.ts`
- `campus-growth-hub/notes/day-12.md`

**按顺序执行**

1. 算法严格计时 30 分钟：先写样例与思路，20 分钟仍无进展只看一个提示；结束时保存代码、边界、复杂度和 AI 辅助等级。
2. 使用快慢指针原地处理 [0,1,0,3,12]，得到 [1,3,12,0,0]。

**完成后应该看到**

- 写出 O(n) 时间、O(1) 额外空间。

**立即测试，不要留到晚上**

- [ ] [0] 保持 [0]
- [ ] [1,2] 保持 [1,2]


## 有余力再做

- 给搜索框增加 label；不安装 Router 或 Pinia。

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

首页 → main.ts → CounterPractice → HomeView。

**检查操作**

1. 演示搜索和响应式布局。
2. 解释 ref 更新流程。
3. 运行 type-check 和 build。

**正确结果与判断依据**

- 6→1→6 路径正确。
- 项目从创建起使用 TypeScript。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
