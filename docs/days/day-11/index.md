---
title: 第 11 天：computed、watch 与表单状态
---

# 第 11 天：computed、watch 与表单状态

::: tip 今天只认这个结果
**阶段：** JavaScript 与 Vue 入门<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 输入 bo 只显示 Bob
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 11
cd ../frontend-40-day-learning-lab/campus-growth-hub
git status
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/src/data/activities.js`
- `campus-growth-hub/src/components/ComputedWatchLab.vue`
- `campus-growth-hub/notes/day-11.md`

### 3. 开始前必须确认

- [ ] 每日准备命令已检查 Day 10 的 HomeView 与活动数据，并只补齐 ComputedWatchLab.vue、notes/day-11.md 和算法空白文件；缺少 Day 10 产物时必须报错，不静默重建。
- [ ] 终端当前位于 campus-growth-hub；在终端 A 运行 npm run dev 并保持运行，终端 B 留在项目根目录执行 git 与 build。
- [ ] 今天所有筛选逻辑先留在 HomeView.vue；watch 只做 localStorage 副作用。

### 4. 第一件具体工作

打开 `campus-growth-hub/src/components/ComputedWatchLab.vue`，开始执行“computed 与 watch 对照实验”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | computed 与 watch 对照实验 | 85 分钟 |
| 2 | 首页搜索、类型、结果数与重置 | 165 分钟 |
| 3 | 合并有序数组、复现与构建 | 110 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：computed 与 watch 对照实验（85 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/components/ComputedWatchLab.vue`
- `campus-growth-hub/notes/day-11.md`

**按顺序执行**

1. 直接阅读 Vue 指南“计算属性”“侦听器”两节的基础用法。
2. 固定 names=[Alice,Bob,Carol] 和 keyword；computed filteredNames 负责过滤；watch(keyword) 把值写入 localStorage 的 demo-key。
3. 故意用普通变量保存过滤结果，观察 keyword 改变后不更新；再恢复 computed。
4. 写一句判断规则：从现有状态算出的值用 computed；需要写存储/发请求等外部动作才考虑 watch。

**完成后应该看到**

- 输入 bo 只显示 Bob
- localStorage demo-key 为 bo
- 不需要手动调用 computed

**立即测试，不要留到晚上**

- [ ] 清空输入恢复三人
- [ ] 删除 watch 后筛选仍工作但 localStorage 不更新

### 必做 2：首页搜索、类型、结果数与重置（165 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/src/data/activities.js`

**按顺序执行**

1. 把 Day 10 的 filteredActivities 函数改为 computed。
2. 新增 selectedType=ref('all')；类型选项固定 all/技术/文艺/体育/就业/公益。
3. computed 规则：关键词 trim+lowercase，同时匹配 title；再匹配 selectedType；resultCount=computed(()=&gt;filteredActivities.value.length)。
4. watch(searchText, value =&gt; localStorage.setItem('activity-search', value))；这只是副作用，不参与过滤。
5. 新增重置按钮，把 searchText 设空、selectedType 设 all；无结果时显示“暂无符合条件的活动”。

**完成后应该看到**

- 初始显示找到 6 个活动
- 技术显示 2
- 技术+javascript 显示 1
- 文艺+javascript 显示 0 与空状态
- 重置恢复 6

**立即测试，不要留到晚上**

- [ ] 关键词带首尾空格仍匹配
- [ ] 重置后 localStorage 最终为空字符串
- [ ] computed 中没有写 localStorage

### 必做 3：合并有序数组、复现与构建（110 分钟）

**修改或创建这些文件**

- `campus-growth-hub/algorithms/day-11-merge-sorted-array.js`
- `campus-growth-hub/notes/day-11.md`

**按顺序执行**

1. 打开 https://leetcode.cn/problems/merge-sorted-array/；从 nums1 尾部使用三个指针，避免覆盖尚未读取元素。
2. 固定 nums1=[1,2,3,0,0,0],m=3,nums2=[2,5,6],n=3，结果 [1,2,2,3,5,6]。
3. 在 algorithms/ 对应文件中保留：题意、两个样例、自己的第一版、最终代码、复杂度、AI 辅助等级；不要只保存 LeetCode 通过截图。
4. 关闭资料重写 filteredActivities computed；在终端 B 运行 npm run build；提交 feat: add reactive activity filters。

**完成后应该看到**

- 算法样例正确
- 筛选 computed 可解释
- 构建通过

**立即测试，不要留到晚上**

- [ ] nums2=[] 时 nums1 不变
- [ ] nums1=[0],m=0,nums2=[1],n=1 得 [1]


## 有余力再做

- 从 localStorage 恢复初始搜索词；今天不做复杂表单校验。

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

首页初始→类型技术→关键词 javascript→重置；打开 HomeView.vue。

**检查操作**

1. 解释 computed 与 watch 的各自职责
2. 查看 localStorage activity-search
3. 现场新增“公益”筛选路径并重置

**正确结果与判断依据**

- 结果数依次 6、2、1、6
- watch 内没有计算筛选数组
- 重置恢复默认

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
