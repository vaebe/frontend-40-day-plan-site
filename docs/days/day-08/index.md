---
title: 第 8 天：异步、Promise 与接口状态
---

# 第 8 天：异步、Promise 与接口状态

::: tip 今天只认这个结果
**阶段：** 前端基础学习<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 成功打印 value 后执行 finally
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 08
cd ../frontend-40-day-learning-lab
git status
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `async-activity-demo/promise-lab.js`
- `async-activity-demo/mock-api.js`
- `async-activity-demo/index.html`
- `async-activity-demo/app.js`
- `async-activity-demo/activities.js`
- `notes/day-08.md`

### 3. 开始前必须确认

- [ ] 每日准备命令已生成 promise-lab.js、固定活动数据、mock API TODO、带 #mode/#load/#status/#activity-list/#retry 的页面骨架和笔记。
- [ ] 在终端 A 从当前 frontend-40-day-learning-lab 运行 npx vite . --port 5174 并保持运行；终端 B 留在同一目录执行 git。
- [ ] 浏览器打开 http://localhost:5174/async-activity-demo/。

### 4. 第一件具体工作

打开 `async-activity-demo/promise-lab.js`，开始执行“Promise 与 async/await 固定最小例”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | Promise 与 async/await 固定最小例 | 85 分钟 |
| 2 | 固定 mock API 与四态界面 | 180 分钟 |
| 3 | 数组交集、复现与提交 | 95 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：Promise 与 async/await 固定最小例（85 分钟）

**修改或创建这些文件**

- `async-activity-demo/promise-lab.js`

**按顺序执行**

1. 直接阅读 MDN Promise、async function、try...catch、finally 的首个示例。
2. 实现 delayResolve(value,ms) 与 delayReject(message,ms)；先用 then/catch/finally 调用，再用 async/await + try/catch/finally 调用。
3. 在每个回调打印顺序编号，确认 finally 在成功和失败都执行。
4. 关闭资料重写 async/await 版本。

**完成后应该看到**

- 成功打印 value 后执行 finally
- 失败进入 catch 后执行 finally
- 未出现未处理 Promise rejection

**立即测试，不要留到晚上**

- [ ] 延迟改为 100ms 结果不变
- [ ] 口述 await 等待的是 Promise 的落定结果

### 必做 2：固定 mock API 与四态界面（180 分钟）

**修改或创建这些文件**

- `async-activity-demo/mock-api.js`
- `async-activity-demo/app.js`
- `async-activity-demo/index.html`
- `async-activity-demo/activities.js`

**按顺序执行**

1. activities.js 使用：export const activities = [<br>  { id: 1, title: '前端入门工作坊', type: '技术', capacity: 30, registered: 18, startTime: '2026-08-01T09:00:00', location: '教学楼 A101' },<br>  { id: 2, title: '校园歌手赛', type: '文艺', capacity: 100, registered: 100, startTime: '2026-08-03T19:00:00', location: '大学生活动中心' },<br>  { id: 3, title: '晨跑打卡', type: '体育', capacity: 50, registered: 22, startTime: '2026-07-30T07:00:00', location: '东操场' },<br>  { id: 4, title: '简历交流会', type: '就业', capacity: 40, registered: 35, startTime: '2026-08-05T14:00:00', location: '图书馆报告厅' },<br>  { id: 5, title: 'JavaScript 读书会', type: '技术', capacity: 20, registered: 8, startTime: '2026-08-02T15:00:00', location: '教学楼 B203' },<br>  { id: 6, title: '志愿服务说明会', type: '公益', capacity: 60, registered: 12, startTime: '2026-08-06T10:00:00', location: '综合楼 201' },<br>]
2. mock-api.js 实现 fetchActivities(mode, delay=800)：mode=success resolve 前 3 条；empty resolve []；error reject(new Error('活动加载失败'))；其他 mode reject(new Error('未知模式'))。
3. app.js 固定状态变量 status=idle/loading/success/empty/error；loadActivities 在开始时禁用 #load 与 #retry，清空旧错误，在 finally 恢复按钮。
4. 选择 success/empty/error 后点击加载；status 区固定显示“正在加载…”、“暂无活动”、“活动加载失败”；error 时显示重试按钮。
5. 重试按钮把 mode 改为 success 后再次调用；render 只负责卡片，不在 render 中发请求。

**完成后应该看到**

- success 800ms 后 3 张卡
- empty 显示暂无活动且无卡片
- error 显示固定错误和重试按钮
- loading 期间两个按钮 disabled
- 重试后恢复 3 张卡

**立即测试，不要留到晚上**

- [ ] 把 delay 改 3000ms 连点加载只触发一次
- [ ] 从 success 切 error 时旧卡片被清空
- [ ] Console 无未处理错误

### 必做 3：数组交集、复现与提交（95 分钟）

**修改或创建这些文件**

- `algorithms/day-08-intersection.js`
- `notes/day-08.md`

**按顺序执行**

1. 打开 https://leetcode.cn/problems/intersection-of-two-arrays/；使用 Set 去重与查询。
2. 样例 [1,2,2,1] 与 [2,2] 得 [2]；结果顺序不作为验收重点。
3. 在 algorithms/ 对应文件中保留：题意、两个样例、自己的第一版、最终代码、复杂度、AI 辅助等级；不要只保存 LeetCode 通过截图。
4. 关闭资料重写 loadActivities 中的 try/catch/finally；提交 feat: model async request states。

**完成后应该看到**

- 交集不重复
- 失败被 catch
- 按钮总能在 finally 恢复

**立即测试，不要留到晚上**

- [ ] 两个数组无交集得到 []
- [ ] 一个空数组得到 []


## 有余力再做

- 增加 aria-live=polite 的状态区域；不接真实网络接口。

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

打开 async-activity-demo/index.html，依次选择 success、empty、error、重试。

**检查操作**

1. 演示四态
2. 解释 try/catch/finally 分工
3. 现场把延迟改为 3000ms 并连续点击

**正确结果与判断依据**

- 只发起一次逻辑请求
- loading 时按钮禁用
- 重试成功恢复页面

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
