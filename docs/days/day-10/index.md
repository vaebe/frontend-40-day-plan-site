---
title: 第 10 天：Vue 3 启动、模板与响应式状态
---

# 第 10 天：Vue 3 启动、模板与响应式状态

::: tip 今天只认这个结果
**阶段：** JavaScript 与 Vue 入门<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** npm run dev 无报错
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 10
cd ../frontend-40-day-learning-lab
npm --prefix campus-growth-hub install
git status
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/src/App.vue`
- `campus-growth-hub/src/main.js`
- `campus-growth-hub/src/data/activities.js`
- `campus-growth-hub/notes/day-10.md`

### 3. 开始前必须确认

- [ ] 每日准备命令已生成 Vue + JavaScript 的 campus-growth-hub 工程、CounterPractice、活动数据、HomeView 骨架、notes/day-10.md 和算法空白文件；不会覆盖已存在的学习成果。
- [ ] 在终端 A 从当前 frontend-40-day-learning-lab 运行 npm --prefix campus-growth-hub run dev 并保持运行；终端 B 留在同一目录，构建使用 npm --prefix campus-growth-hub run build。
- [ ] 浏览器地址以终端 A 输出为准；campus-growth-hub 是唯一正式项目。

### 4. 第一件具体工作

打开 `campus-growth-hub/src/App.vue`，开始执行“创建、清理并理解最小 Vue 应用”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 创建、清理并理解最小 Vue 应用 | 95 分钟 |
| 2 | 固定首页与响应式筛选 | 160 分钟 |
| 3 | 移动零、构建与无 AI 复现 | 105 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：创建、清理并理解最小 Vue 应用（95 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/App.vue`
- `campus-growth-hub/src/main.js`
- `campus-growth-hub/src/components/CounterPractice.vue`
- `campus-growth-hub/notes/day-10.md`

**按顺序执行**

1. 确认浏览器显示 Vite/Vue 默认页后，记录启动命令与地址。
2. 删除 HelloWorld 引用和默认演示内容，但保留 main.js 的 createApp(App).mount(#app)。
3. CounterPractice.vue：script setup 导入 ref；const count=ref(0)；button @click 让 count.value++；template 显示 count。
4. 在 App.vue 引入 CounterPractice；点击三次看到 3；用箭头写 ref 定义→模板读取→事件修改→视图更新。

**完成后应该看到**

- npm run dev 无报错
- 页面显示计数器
- 点击三次为 3
- 能指出 main.js 的挂载点

**立即测试，不要留到晚上**

- [ ] 刷新后计数归 0
- [ ] 临时改 +2 后一次点击为 2

### 必做 2：固定首页与响应式筛选（160 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/data/activities.js`
- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/src/App.vue`
- `campus-growth-hub/src/style.css`

**按顺序执行**

1. src/data/activities.js 写入：export const activities = [<br>  { id: 1, title: '前端入门工作坊', type: '技术', capacity: 30, registered: 18, startTime: '2026-08-01T09:00:00', location: '教学楼 A101' },<br>  { id: 2, title: '校园歌手赛', type: '文艺', capacity: 100, registered: 100, startTime: '2026-08-03T19:00:00', location: '大学生活动中心' },<br>  { id: 3, title: '晨跑打卡', type: '体育', capacity: 50, registered: 22, startTime: '2026-07-30T07:00:00', location: '东操场' },<br>  { id: 4, title: '简历交流会', type: '就业', capacity: 40, registered: 35, startTime: '2026-08-05T14:00:00', location: '图书馆报告厅' },<br>  { id: 5, title: 'JavaScript 读书会', type: '技术', capacity: 20, registered: 8, startTime: '2026-08-02T15:00:00', location: '教学楼 B203' },<br>  { id: 6, title: '志愿服务说明会', type: '公益', capacity: 60, registered: 12, startTime: '2026-08-06T10:00:00', location: '综合楼 201' },<br>]
2. 建立 views/HomeView.vue；script setup 中 import activities，定义 searchText=ref('')、bookmarkedIds=ref([])，先用函数 filteredActivities() 返回标题匹配结果；Day 11 再改 computed。
3. template 固定包含 h1“Campus Growth Hub”、搜索 input、结果数量、活动 article 列表；每张卡显示标题/类型/地点/剩余名额。
4. 收藏按钮点击调用 toggleBookmark(id)：存在则移除，不存在则加入；按钮文字在“收藏/已收藏”之间切换。
5. App.vue 只渲染 HomeView；style.css 做桌面三列、375px 单列，不做复杂主题。

**完成后应该看到**

- 初始 6 张卡
- 输入 JavaScript 后 1 张
- 收藏 id=5 后按钮显示已收藏
- 375px 单列无横向滚动

**立即测试，不要留到晚上**

- [ ] 清空搜索恢复 6 张
- [ ] 连续点击收藏两次恢复未收藏
- [ ] Console 无 Vue warning

### 必做 3：移动零、构建与无 AI 复现（105 分钟）

**修改或创建这些文件**

- `campus-growth-hub/algorithms/day-10-move-zeroes.js`
- `campus-growth-hub/notes/day-10.md`

**按顺序执行**

1. 打开 https://leetcode.cn/problems/move-zeroes/；使用快慢指针原地把非零数前移，再补零。
2. 样例 [0,1,0,3,12] 得 [1,3,12,0,0]；写 O(n)/O(1)。
3. 在 algorithms/ 对应文件中保留：题意、两个样例、自己的第一版、最终代码、复杂度、AI 辅助等级；不要只保存 LeetCode 通过截图。
4. 关闭资料在 CounterPractice.vue 空白重写 ref 与按钮；在终端 B 运行 npm --prefix campus-growth-hub run build；提交 feat: bootstrap vue activity app。

**完成后应该看到**

- 算法原地修改正确
- npm --prefix campus-growth-hub run build 成功
- 无 AI 计数器可运行

**立即测试，不要留到晚上**

- [ ] [0] 保持 [0]
- [ ] [1,2] 保持 [1,2]


## 有余力再做

- 给收藏按钮增加 aria-pressed；不做持久化。

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

保持终端 A 的 npm --prefix campus-growth-hub run dev 运行，打开首页；再打开 campus-growth-hub/src/views/HomeView.vue。

**检查操作**

1. 搜索 JavaScript
2. 收藏唯一结果
3. 口述 ref 更新流程
4. 现场把收藏按钮文案改为“取消收藏”

**正确结果与判断依据**

- 筛选与收藏立即更新
- 无 Console warning
- 能解释 v-for key 使用 activity.id

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
