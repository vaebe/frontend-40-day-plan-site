---
title: 第 13 天：computed、watch 与组合筛选
---

# 第 13 天：computed、watch 与组合筛选

::: tip 今天只认这个结果
**阶段：** Vue 3 基础学习<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 输入 bo 只显示 Bob。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 13
cd ../frontend-40-day-learning-lab/campus-growth-hub
git status
npm run type-check
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/src/components/ComputedWatchLab.vue`
- `campus-growth-hub/notes/day-13.md`

### 3. 开始前必须确认

- [ ] Day 12 项目可以运行并显示 6 条活动。
- [ ] 今天 computed 负责派生值，watch 只处理存储等副作用。

### 4. 第一件具体工作

打开 `campus-growth-hub/src/components/ComputedWatchLab.vue`，开始执行“用最小实验区分 computed 与 watch”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 用最小实验区分 computed 与 watch | 90 分钟 |
| 2 | 首页完成关键词、类型、结果数和重置 | 170 分钟 |
| 3 | 无 AI 重写唯一过滤 computed | 70 分钟 |
| 4 | 30 分钟算法：合并有序数组 | 30 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：用最小实验区分 computed 与 watch（90 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/components/ComputedWatchLab.vue`
- `campus-growth-hub/notes/day-13.md`

**按顺序执行**

1. 用 names=[Alice,Bob,Carol]、keyword 和 computed filteredNames 完成过滤。
2. watch(keyword) 只写 localStorage 的 demo-key；删除 watch 后过滤仍应工作。
3. 故意用普通常量保存过滤结果，观察输入后不更新，再恢复 computed。
4. 写判断规则：从状态计算值用 computed；产生外部副作用才考虑 watch。

**完成后应该看到**

- 输入 bo 只显示 Bob。
- localStorage demo-key 为 bo。

**立即测试，不要留到晚上**

- [ ] 清空恢复三人
- [ ] 删除 watch 后筛选仍工作

### 必做 2：首页完成关键词、类型、结果数和重置（170 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/src/data/activities.ts`

**按顺序执行**

1. 把 Day 12 的普通过滤函数改为 computed。
2. 新增 selectedType，固定 all/技术/文艺/体育/就业/公益；关键词先 trim 和转小写。
3. resultCount 也使用 computed；无结果显示“暂无符合条件的活动”。
4. 重置按钮把 keyword 清空、selectedType 设为 all；watch 只把 keyword 写入 localStorage。
5. 按 6→技术2→技术+javascript1→文艺+javascript0→重置6 回归。

**完成后应该看到**

- 结果数量与列表同步。
- 重置恢复 6 条。

**立即测试，不要留到晚上**

- [ ] 关键词带首尾空格仍匹配
- [ ] computed 中没有写 localStorage

### 必做 3：无 AI 重写唯一过滤 computed（70 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/notes/day-13.md`

**按顺序执行**

1. 关闭 AI 和课程，把 filteredActivities 暂存到笔记后从组件删除。
2. 只根据数据、keyword、selectedType 从空白重写；不得建立第二份过滤结果状态。
3. 完成固定 6→2→1→0→6 路线，失败就记录具体分支。

**完成后应该看到**

- 过滤只有一个入口。
- 能说明 computed 的依赖。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run build

### 必做 4：30 分钟算法：合并有序数组（30 分钟）

**修改或创建这些文件**

- `campus-growth-hub/algorithms/day-13-merge-sorted-array.ts`
- `campus-growth-hub/notes/day-13.md`

**按顺序执行**

1. 算法严格计时 30 分钟：先写样例与思路，20 分钟仍无进展只看一个提示；结束时保存代码、边界、复杂度和 AI 辅助等级。
2. 从尾部使用三个指针完成固定样例。

**完成后应该看到**

- 样例得到 [1,2,2,3,5,6]。

**立即测试，不要留到晚上**

- [ ] nums2=[] 时 nums1 不变


## 有余力再做

- 从 localStorage 恢复初始关键词；不做复杂表单。

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

首页固定筛选路线 → HomeView → localStorage。

**检查操作**

1. 执行 6→2→1→0→6。
2. 说明 computed 与 watch 分工。
3. 运行 type-check。

**正确结果与判断依据**

- 筛选正确。
- 没有重复过滤状态。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
