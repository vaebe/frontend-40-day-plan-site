---
title: 第 13 天：Vue 小应用独立整合
---

# 第 13 天：Vue 小应用独立整合

::: tip 今天只认这个结果
**阶段：** JavaScript 与 Vue 入门<br>
**时间：** 巩固实践日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 点击课程收藏后初始 4 门
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 13
cd ../frontend-40-day-learning-lab/campus-growth-hub
git status
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/src/App.vue`
- `campus-growth-hub/src/practice/course-favorites/CourseFavorites.vue`
- `campus-growth-hub/src/practice/course-favorites/courses.js`
- `campus-growth-hub/src/practice/async-state/AsyncActivityLab.vue`
- `campus-growth-hub/src/services/activityApi.js`
- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/notes/day-13.md`

### 3. 开始前必须确认

- [ ] 每日准备命令已检查 Day 12 组件链，生成课程收藏 starter、可运行的 AsyncActivityLab 预设故障、activityApi、notes/day-13.md 和算法空白文件；不会覆盖 HomeView。
- [ ] 终端当前位于 campus-growth-hub；在终端 A 运行 npm run dev 并保持运行，终端 B 留在项目根目录执行 git 与 build。
- [ ] 课程收藏与异步故障都必须通过 App.vue 的练习切换按钮真正挂载显示；完成调试后再把正确四态迁移到 HomeView。

### 4. 第一件具体工作

打开 `campus-growth-hub/src/App.vue`，开始执行“无 AI 课程收藏夹”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 无 AI 课程收藏夹 | 105 分钟 |
| 2 | 主项目异步四态与预设故障 | 160 分钟 |
| 3 | 旧算法复现、回归与提交 | 95 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：无 AI 课程收藏夹（105 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/App.vue`
- `campus-growth-hub/src/practice/course-favorites/CourseFavorites.vue`
- `campus-growth-hub/src/practice/course-favorites/courses.js`

**按顺序执行**

1. courses.js 固定数据：[{id:1,title:'JavaScript 基础'},{id:2,title:'Vue 3 入门'},{id:3,title:'计算机网络'},{id:4,title:'数据结构'}]。
2. CourseFavorites.vue 精确 TODO：ref searchText、ref favoriteIds、computed filteredCourses；输入按 title 过滤；每行按钮切换收藏；复选框只看已收藏。
3. App.vue 保留 HomeView，并新增 currentDemo=ref('home')；提供“主项目 / 课程收藏 / 异步故障”三个按钮，分别渲染 HomeView、CourseFavorites、AsyncActivityLab。
4. 先点击“课程收藏”确认组件已挂载，再测试搜索、收藏和只看收藏；空结果固定显示“没有匹配课程”。
5. 前 40 分钟无 AI；到点只看 Day 11/12 自己的思路笔记 10 分钟，再关闭并完成。

**完成后应该看到**

- 点击课程收藏后初始 4 门
- 搜索 Vue 得 1 门
- 收藏 Vue 后只看收藏得 1 门
- 取消收藏后只看收藏显示空状态
- 点击主项目可返回原首页

**立即测试，不要留到晚上**

- [ ] 刷新后仍可通过按钮进入课程收藏
- [ ] 搜索不存在课程显示空状态
- [ ] 切回主项目后筛选和收藏仍可使用

### 必做 2：主项目异步四态与预设故障（160 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/App.vue`
- `campus-growth-hub/src/practice/async-state/AsyncActivityLab.vue`
- `campus-growth-hub/src/services/activityApi.js`
- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/src/components/EmptyState.vue`
- `campus-growth-hub/notes/day-13.md`

**按顺序执行**

1. activityApi.js 已由 每日准备命令生成：把固定 activities 重命名导入为 seedActivities；fetchActivities(mode='success',delay=800) 在 success 返回副本、empty 返回 []、error 抛 Error('活动加载失败')。
2. 先在 App 点击“异步故障”；AsyncActivityLab 已挂载且 finally 中故意写 loadedActivities.value=[]。选择 success 后复现“加载完成仍无卡片”，用断点观察成功赋值随后被 finally 清空，只删除标有 DAY13_INTENTIONAL_BUG 的一行。
3. 在 AsyncActivityLab 回归 success 6 张、empty 空状态、error 错误、retry 恢复 6 张；记录复现步骤、断点值、单行修改和回归结果。
4. 再把正确的 loadedActivities/status/errorMessage/mode/loadActivities 逻辑迁移到 HomeView；筛选 computed 改从 loadedActivities.value 读取。
5. HomeView 提供 success/empty/error 模式选择、加载按钮和重试按钮；loading 时禁用加载，重试把 mode 设 success 后调用；最后回到 App 的“主项目”完成四态回归。

**完成后应该看到**

- 异步故障 starter 在修复前稳定复现
- 修复后 AsyncActivityLab 四态正确
- 主项目 success 6 张、empty 空状态、error 错误+重试、重试恢复 6 张
- finally 不再清空 loadedActivities

**立即测试，不要留到晚上**

- [ ] loading 期间加载按钮 disabled
- [ ] 从 error 到 success 旧错误文案消失
- [ ] 切换练习与主项目均无未处理 rejection

### 必做 3：旧算法复现、回归与提交（95 分钟）

**修改或创建这些文件**

- `campus-growth-hub/algorithms/day-13-review.js`
- `campus-growth-hub/notes/day-13.md`

**按顺序执行**

1. 空白重做有效括号 20 分钟与移动零 20 分钟；先说思路后写，不看完整旧代码。
2. 每题写一个边界和复杂度；不会时只看自己的思路笔记。
3. 回归首页：搜索、类型、收藏、success/empty/error/retry。
4. 在终端 B 运行 npm run build；更新 A-E；提交 refactor: consolidate vue fundamentals。

**完成后应该看到**

- 至少一题无提示通过
- 首页全部路径通过
- 构建成功

**立即测试，不要留到晚上**

- [ ] 有效括号 {[]} 为 true
- [ ] 移动零 [0,0,1] 为 [1,0,0]


## 有余力再做

- 课程收藏夹添加“已收藏 N 门”统计；不持久化。

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

课程收藏夹→主项目首页 success→empty→error→retry→HomeView.vue。

**检查操作**

1. 演示固定路径
2. 解释异步四态
3. 现场新增重试按钮或修复其事件绑定

**正确结果与判断依据**

- 重试恢复 6 张
- 能解释 finally 只做收尾
- 说出本周 AI 辅助等级是否下降及证据

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
