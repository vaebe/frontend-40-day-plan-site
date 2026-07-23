---
title: 第 4 天：数组方法、纯函数与组合筛选
---

# 第 4 天：数组方法、纯函数与组合筛选

::: tip 今天只认这个结果
**阶段：** 基础重建<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 固定输出 [1,4,9,16]、[2,4]、3、10
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 04
cd ../frontend-40-day-learning-lab
git status
node --test campus-activity-board/tests/day-03.test.mjs
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-activity-board/src/data/activities.js`
- `campus-activity-board/src/utils/activity-utils.js`
- `campus-activity-board/tests/day-04.test.mjs`
- `notes/day-04.md`
- `algorithms/day-04-remove-element.js`

### 3. 开始前必须确认

- [ ] Day 3 的三个纯函数测试通过；今天直接扩展同一个 activity-utils.js。
- [ ] 开始时 Day 04 测试失败属于预期，Day 03 测试必须继续通过。
- [ ] 今天不操作 DOM，不在 app.js 中复制筛选逻辑。

### 4. 第一件具体工作

打开 `campus-activity-board/src/practice/day-04-array-methods.js`，开始执行“掌握四个会实际使用的数组方法”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 掌握四个会实际使用的数组方法 | 60 分钟 |
| 2 | 实现三种筛选和时间排序 | 160 分钟 |
| 3 | 建立组合筛选唯一入口 | 70 分钟 |
| 4 | 30 分钟移除元素 | 30 分钟 |
| 5 | 无 AI 组合函数复现和提交 | 40 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：掌握四个会实际使用的数组方法（60 分钟）

**修改或创建这些文件**

- `campus-activity-board/src/practice/day-04-array-methods.js`
- `notes/day-04.md`

**按顺序执行**

1. 固定 numbers=[1,2,3,4]，每行先写预期，再运行 map 平方、filter 偶数、find 第一个大于 2、reduce 求和。
2. 每个方法写清返回值，确认原 numbers 没变。
3. 换成 activities，分别得到标题数组、技术活动、id=4 活动和总容量。
4. 关闭资料重写 filter 和 reduce 两例；不继续学习 flatMap、reduceRight 等新方法。

**完成后应该看到**

- 固定输出 [1,4,9,16]、[2,4]、3、10
- 能用一句话区分 map/filter/find/reduce

**立即测试，不要留到晚上**

- [ ] 空数组 filter 返回 []
- [ ] reduce 带初始值 0 时空数组返回 0

### 必做 2：实现三种筛选和时间排序（160 分钟）

**修改或创建这些文件**

- `campus-activity-board/src/utils/activity-utils.js`
- `campus-activity-board/tests/day-04.test.mjs`

**按顺序执行**

1. 实现 filterByType(list,type)：type=all 返回新数组，否则按 type 精确匹配。
2. 实现 filterAvailable(list)：只保留 getRemaining(item)&gt;0。
3. 实现 filterByKeyword(list,keyword)：trim+toLowerCase，匹配 title；空关键词返回新数组。
4. 实现 sortByStartTime(list)：先 [...list] 再排序，禁止改变原数组。
5. 每写一个函数运行 Day 03+04 全部测试；发现回归先停，不继续下一个函数。

**完成后应该看到**

- 技术 id [1,5]
- 可报名 id [1,3,4,5,6]
- JavaScript 得 id=5
- 时间排序 [3,1,5,2,4,6]

**立即测试，不要留到晚上**

- [ ] type=all 返回 6 条且不是原数组引用
- [ ] 关键词前后空格和大小写不影响结果
- [ ] 排序后原 id 顺序仍为 [1,2,3,4,5,6]

### 必做 3：建立组合筛选唯一入口（70 分钟）

**修改或创建这些文件**

- `campus-activity-board/src/utils/activity-utils.js`
- `campus-activity-board/tests/day-04.test.mjs`
- `notes/day-04.md`

**按顺序执行**

1. 实现 applyFilters(list,{keyword,type,availableOnly})，内部依次复用已有三个函数，不重写条件。
2. 固定组合：keyword=JavaScript,type=技术,availableOnly=true 得 id=5。
3. 固定空态：keyword=JavaScript,type=文艺 得 0 条。
4. 画出 list → keyword → type → available → result 的数据流，并标出每步数组长度。

**完成后应该看到**

- 组合条件稳定且不修改原数组
- 筛选函数只有一套实现

**立即测试，不要留到晚上**

- [ ] 默认条件返回 6 条
- [ ] 文艺+availableOnly 返回 0 条
- [ ] 不存在结果返回 [] 而非 null

### 必做 4：30 分钟移除元素（30 分钟）

**修改或创建这些文件**

- `algorithms/day-04-remove-element.js`
- `notes/day-04.md`

**按顺序执行**

1. 算法严格计时 30 分钟：先写样例和思路，再编码；到点停止并记录 A-E 辅助等级，不挤占前端主线。
2. 固定 nums=[3,2,2,3],val=3；先写读指针和写指针分别做什么。
3. 只要求原地保留前 k 个有效元素。

**完成后应该看到**

- k=2，前两个元素 [2,2]
- 能解释为什么写指针只在保留元素时移动

**立即测试，不要留到晚上**

- [ ] 空数组 k=0
- [ ] [1,1],val=1 得 k=0

### 必做 5：无 AI 组合函数复现和提交（40 分钟）

**修改或创建这些文件**

- `campus-activity-board/src/rebuild/day-04-filter.js`
- `notes/day-04.md`

**按顺序执行**

1. 关闭主实现，用 25 分钟从空白写一个只组合已有函数的 applyFilters。
2. 运行两个固定组合，对照后只修具体遗漏。
3. 提交 feat: add composable activity filters。

**完成后应该看到**

- 没有把 DOM 写进纯函数
- Day 03+04 测试全部通过

**立即测试，不要留到晚上**

- [ ] 技术+有名额得到 [1,5]
- [ ] 重置条件得到 6 条


## 有余力再做

- 不新增筛选维度；有余力只补一个空关键词测试。

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

campus-activity-board/tests/day-04.test.mjs

**检查操作**

1. 运行全部函数测试
2. 现场组合两个筛选条件
3. 解释为何排序前复制数组
4. 检查 30 分钟算法记录

**正确结果与判断依据**

- Day 3 无回归
- 组合函数只复用已有函数
- 学习者能预测数组长度变化

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
