---
title: 第 9 天：事件循环、模块化与 DevTools
---

# 第 9 天：事件循环、模块化与 DevTools

::: tip 今天只认这个结果
**阶段：** JavaScript 与 Vue 入门<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 四题均保存预测与实际
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 09
cd ../frontend-40-day-learning-lab
git status
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `event-loop-lab/questions.js`
- `event-loop-lab/predictions.md`
- `debug-import/index.html`
- `debug-import/main.js`
- `debug-import/activity-api.js`
- `debug-request/index.html`
- `debug-request/app.js`
- `debug-request/activities.json`
- `notes/day-09.md`

### 3. 开始前必须确认

- [ ] 每日准备命令已把四道题代码写入 questions.js，并生成可真实报错的导入路径故障、JSON 请求故障、固定 activities.json 与笔记；学习者先写 predictions.md，再运行代码。
- [ ] 在终端 A 从当前 frontend-40-day-learning-lab 运行 npx vite . --port 5174 并保持运行；终端 B 留在同一目录执行 git。
- [ ] debug-import 与 debug-request 都从 http://localhost:5174/ 下打开，使 Console 和 Network 出现真实证据。

### 4. 第一件具体工作

打开 `event-loop-lab/questions.js`，开始执行“四道固定输出顺序题”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 四道固定输出顺序题 | 90 分钟 |
| 2 | 模块与 DevTools 两个故障 | 180 分钟 |
| 3 | 回文串、复现与提交 | 90 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：四道固定输出顺序题（90 分钟）

**修改或创建这些文件**

- `event-loop-lab/questions.js`
- `event-loop-lab/predictions.md`

**按顺序执行**

1. 题1：console.log(A); console.log(B)。题2：setTimeout(()=&gt;console.log(T),0); console.log(S)。题3：Promise.resolve().then(()=&gt;console.log(P)); console.log(S)。题4：console.log(A); setTimeout(()=&gt;console.log(T),0); Promise.resolve().then(()=&gt;console.log(P)); console.log(B)。
2. 每题先写预测，再逐题运行；实际顺序分别为 AB、ST、SP、ABPT。
3. 为题4画调用栈清空→微任务 P→任务 T，不扩展浏览器内部细节。

**完成后应该看到**

- 四题均保存预测与实际
- 题4实际 ABPT
- 能说微任务在当前同步代码后、计时器任务前

**立即测试，不要留到晚上**

- [ ] 将题4的 Promise 放到 setTimeout 回调内，重新预测并运行

### 必做 2：模块与 DevTools 两个故障（180 分钟）

**修改或创建这些文件**

- `debug-import/index.html`
- `debug-import/main.js`
- `debug-import/activity-api.js`
- `debug-request/index.html`
- `debug-request/app.js`
- `debug-request/activities.json`
- `notes/day-09.md`

**按顺序执行**

1. debug-import 固定错误：main.js 写 import { loadActivities } from './activityApi.js'，真实文件名为 activity-api.js；先看 Console/Network 404，再只改路径。
2. debug-request 固定错误：fetch(./activity.json) 但真实文件为 activities.json；Network 观察失败请求、状态码和 Initiator，再修正。
3. 修正后在 renderActivities 第一行设断点；刷新，查看 activities 的数组长度；Step over 到创建第一张卡片；记录变量变化。
4. 把 mock API、活动常量、render 和入口调用保持四个职责；本日“数据类型”只指字段结构说明，不引入 TypeScript。

**完成后应该看到**

- 模块路径修复后 Console 无导入错误
- activities.json 请求 200 并渲染 6 条
- 能在断点处指出 activities.length=6

**立即测试，不要留到晚上**

- [ ] 再次故意改错路径，按 Console→Network→文件名顺序恢复
- [ ] 刷新后断点仍命中

### 必做 3：回文串、复现与提交（90 分钟）

**修改或创建这些文件**

- `algorithms/day-09-valid-palindrome.js`
- `notes/day-09.md`

**按顺序执行**

1. 打开 https://leetcode.cn/problems/valid-palindrome/；双指针跳过非字母数字并忽略大小写。
2. 样例“A man, a plan, a canal: Panama”为 true，“race a car”为 false。
3. 在 algorithms/ 对应文件中保留：题意、两个样例、自己的第一版、最终代码、复杂度、AI 辅助等级；不要只保存 LeetCode 通过截图。
4. 关闭资料重新写一个 export/import 对；提交 chore: split modules and add debug notes。

**完成后应该看到**

- 两个样例正确
- 模块导入成功
- 笔记含一次 404 的完整证据

**立即测试，不要留到晚上**

- [ ] 空字符串为 true
- [ ] 字符串“0P”为 false


## 有余力再做

- 只在完成后用 Sources 的 Watch 面板观察第一张活动 title。

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

questions.js → debug-import 页面 → debug-request 页面与 DevTools。

**检查操作**

1. 口述题4顺序
2. 现场制造并修复导入路径错误
3. 在 renderActivities 断点显示数组长度

**正确结果与判断依据**

- 顺序为 ABPT
- 能依据文件名和 404 修复
- 不会只凭猜测乱改多个文件

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
