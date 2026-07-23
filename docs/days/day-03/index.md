---
title: 第 3 天：JavaScript 数据、对象与基础函数
---

# 第 3 天：JavaScript 数据、对象与基础函数

::: tip 今天只认这个结果
**阶段：** 基础重建<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** id=1 剩余 12，id=2 剩余 0
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 03
cd ../frontend-40-day-learning-lab
git status
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-activity-board/src/data/activities.js`
- `campus-activity-board/src/utils/activity-utils.js`
- `campus-activity-board/tests/day-03.test.mjs`
- `campus-activity-board/src/day-03-verify.js`
- `notes/day-03.md`
- `algorithms/day-03-two-sum.js`

### 3. 开始前必须确认

- [ ] Day 2 的 6 张静态卡和三个响应式断点必须仍然正常。
- [ ] 每日准备命令只新增 utils、测试和验证入口，不覆盖 index.html 或 styles.css。
- [ ] 今天只训练数据、函数和对象；正式 DOM 渲染留到 Day 5。开始时测试失败属于预期。

### 4. 第一件具体工作

打开 `campus-activity-board/src/data/activities.js`，开始执行“读懂统一活动数据和函数输入输出”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 读懂统一活动数据和函数输入输出 | 60 分钟 |
| 2 | 实现三个最小纯函数 | 150 分钟 |
| 3 | 在浏览器验证模块和数据 | 60 分钟 |
| 4 | 30 分钟复现两数之和 | 30 分钟 |
| 5 | 无 AI 重写、记录和提交 | 60 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：读懂统一活动数据和函数输入输出（60 分钟）

**修改或创建这些文件**

- `campus-activity-board/src/data/activities.js`
- `campus-activity-board/src/utils/activity-utils.js`
- `notes/day-03.md`

**按顺序执行**

1. 逐条确认 6 个对象都有 id/title/type/capacity/registered/startTime/location，禁止改字段名。
2. 手算 id=1 和 id=2 的剩余名额，并写出 capacity、registered、remaining 三者关系。
3. 在笔记中为 getRemaining(activity)、findActivityById(list,id)、getTotalRemainingSeats(list) 分别写输入、返回值和两个样例。
4. 先阅读测试文件，不改测试；把每个断言翻译成中文完成标准。

**完成后应该看到**

- id=1 剩余 12，id=2 剩余 0
- 总剩余名额预期 105
- 能区分对象、数组和函数返回值

**立即测试，不要留到晚上**

- [ ] 随机指一个字段能说出类型和用途
- [ ] 空数组总余量预期为 0

### 必做 2：实现三个最小纯函数（150 分钟）

**修改或创建这些文件**

- `campus-activity-board/src/utils/activity-utils.js`
- `campus-activity-board/tests/day-03.test.mjs`

**按顺序执行**

1. 先实现 getRemaining(activity)：返回 Math.max(0, capacity-registered)，不读取 DOM。
2. 再实现 findActivityById(list,id)：找到返回对象，找不到返回 undefined；不在函数内打印。
3. 最后实现 getTotalRemainingSeats(list)：使用 for 循环或 reduce 累加 getRemaining 的结果。
4. 每完成一个函数就运行 node --test campus-activity-board/tests/day-03.test.mjs，只处理当前第一个失败。
5. 临时把 registered 拼成 registerd，观察失败信息，记录 expected/actual 和对应函数后恢复。

**完成后应该看到**

- 三个函数测试全部通过
- 原 activities 未被修改
- 字段拼错时能从失败结果定位

**立即测试，不要留到晚上**

- [ ] getRemaining 满员为 0
- [ ] find id=999 为 undefined
- [ ] 总余量为 105
- [ ] 空数组为 0

### 必做 3：在浏览器验证模块和数据（60 分钟）

**修改或创建这些文件**

- `campus-activity-board/index.html`
- `campus-activity-board/src/day-03-verify.js`
- `campus-activity-board/src/utils/activity-utils.js`

**按顺序执行**

1. 在 index.html 临时增加 p#dev-output 和 type=module 的 day-03-verify.js，不能删除原 app.js。
2. verify 导入 activities 和三个函数，把“总剩余名额 105、id=2 已满、id=999 未找到”写入 #dev-output。
3. 刷新浏览器确认页面布局不变，验证结果可见；Console 不应出现 import/export 错误。
4. 完成截图后移除临时 script，保留 verify 文件供当天结束时统一审查。

**完成后应该看到**

- 浏览器显示三个固定结果
- 静态 6 张卡仍存在
- 模块路径全部 200

**立即测试，不要留到晚上**

- [ ] Network 中 activities.js 和 activity-utils.js 为 200
- [ ] 刷新后结果稳定

### 必做 4：30 分钟复现两数之和（30 分钟）

**修改或创建这些文件**

- `algorithms/day-03-two-sum.js`
- `notes/day-03.md`

**按顺序执行**

1. 算法严格计时 30 分钟：先写样例和思路，再编码；到点停止并记录 A-E 辅助等级，不挤占前端主线。
2. 先不看 Day 2，从空白重写双循环；完成后再尝试用 Map，Map 不是当天通过条件。
3. 比较两版复杂度和自己卡住的位置。

**完成后应该看到**

- 暴力版可独立运行
- 能解释 Map 保存“见过的值→下标”

**立即测试，不要留到晚上**

- [ ] [2,7,11,15],9 返回 [0,1]
- [ ] [3,3],6 返回 [0,1]

### 必做 5：无 AI 重写、记录和提交（60 分钟）

**修改或创建这些文件**

- `campus-activity-board/src/rebuild/day-03-functions.js`
- `notes/day-03.md`

**按顺序执行**

1. 关闭 activity-utils.js，在空白 rebuild 文件重写 getRemaining 和 findActivityById。
2. 运行固定输入，之后再对照主实现，只记录差异，不复制整个文件。
3. 更新 A-E，提交 feat: add activity data functions。

**完成后应该看到**

- 至少一个函数无提示重写成功
- 差异记录包含具体条件或返回值

**立即测试，不要留到晚上**

- [ ] id=2 剩余 0
- [ ] id=999 返回 undefined


## 有余力再做

- Map 版两数之和仅在必做全部完成后尝试。

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

campus-activity-board/tests/day-03.test.mjs 和 http://127.0.0.1:4174

**检查操作**

1. 运行测试
2. 口述三个函数输入输出
3. 现场把 id=2 改为超额报名并验证剩余仍为 0
4. 查看无 AI 重写

**正确结果与判断依据**

- 测试稳定通过
- 纯函数不访问 DOM
- 能根据失败信息定位字段

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
