---
title: 第 32 天：路由懒加载、搜索防抖与键盘回归
---

# 第 32 天：路由懒加载、搜索防抖与键盘回归

::: tip 今天只认这个结果
**阶段：** 综合项目<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** notes/day-32.md 有优化前真实数据，不填写主观的“更快了”。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 32
cd ../frontend-40-day-learning-lab/campus-growth-hub
npm install
```

命令报错时先停在当前步骤，不要继续执行后面的任务。

### 1.1 在第二个终端启动页面

保持上一个终端不动，在 `../frontend-40-day-learning-lab/campus-growth-hub` 另开终端运行：

```bash
npm run dev
```

开发服务器会持续运行，这是正常现象；后续命令仍在第一个终端执行。

### 2. 打开这些文件或页面

- `campus-growth-hub/src/router/index.ts`
- `campus-growth-hub/src/views/ActivityListView.vue`
- `campus-growth-hub/src/components/ActivityFilters.vue`
- `campus-growth-hub/src/composables/useActivitySearch.ts`
- `campus-growth-hub/src/style.css`
- `campus-growth-hub/notes/day-32.md`

### 3. 开始前必须确认

- [ ] 学生列表搜索已可用，但每次输入都立即查询。
- [ ] 路由页面仍使用静态 import；Day 31 的 ECharts 页面会进入主包。
- [ ] 今天必做仅为路由懒加载与 300ms 搜索防抖；键盘焦点检查是短回归，不扩展新功能。

### 4. 第一件具体工作

打开 `campus-growth-hub/notes/day-32.md`，开始执行“记录优化前证据”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 记录优化前证据 | 60 分钟 |
| 2 | 完成两项可证明改进 | 180 分钟 |
| 3 | 移动零重做 | 45 分钟 |
| 4 | 回归、提交与记录 | 75 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：记录优化前证据（60 分钟）

**修改或创建这些文件**

- `campus-growth-hub/notes/day-32.md`
- `campus-growth-hub/src/router/index.ts`
- `campus-growth-hub/src/views/ActivityListView.vue`
- `campus-growth-hub/src/composables/useActivitySearch.ts`

**按顺序执行**

1. 运行 npm run build，记录 dist/assets 中最大的 JS 文件名和大小。
2. 在搜索请求入口临时计数，500ms 内输入 v、vu、vue，记录优化前调用次数。
3. 用 Tab 走登录页输入框到提交按钮，记录看不见焦点的位置。

**完成后应该看到**

- notes/day-32.md 有优化前真实数据，不填写主观的“更快了”。

**立即测试，不要留到晚上**

- [ ] 连续三次输入的调用次数有明确记录。

### 必做 2：完成两项可证明改进（180 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/router/index.ts`
- `campus-growth-hub/src/utils/debounce.ts`
- `campus-growth-hub/src/views/ActivityListView.vue`
- `campus-growth-hub/src/components/ActivityFilters.vue`
- `campus-growth-hub/src/composables/useActivitySearch.ts`
- `campus-growth-hub/src/style.css`

**按顺序执行**

1. 把页面组件静态 import 改为 () =&gt; import(...)；保留路由配置类型。
2. 实现 300ms 防抖，只延迟搜索请求，不延迟输入框文字更新。
3. 在 :focus-visible 中补充可见轮廓，确保登录与报名主流程可见焦点。
4. 再次构建并复测相同输入，将前后证据写入 notes/day-32.md。

**完成后应该看到**

- 构建产物出现独立路由 chunk。
- 输入 v、vu、vue 后只查询 vue 一次。
- 键盘焦点始终可见。

**立即测试，不要留到晚上**

- [ ] 输入间隔均小于 300ms，最终请求次数=1、关键词=vue。
- [ ] 输入 vue 后等待 400ms，再输入 react，预期共请求 2 次。

### 必做 3：移动零重做（45 分钟）

**修改或创建这些文件**

- `algorithms/day-32-move-zeroes.ts`

**按顺序执行**

1. 原地完成并说明左右指针含义。

**完成后应该看到**

- 不创建第二个同长度数组。

**立即测试，不要留到晚上**

- [ ] [0,1,0,3,12] -&gt; [1,3,12,0,0]。

### 必做 4：回归、提交与记录（75 分钟）

**修改或创建这些文件**

- `campus-growth-hub/notes/day-32.md`

**按顺序执行**

1. npm run type-check
2. npm run test:run
3. npm run build
4. 提交 perf: add route splitting and debounced search。

**完成后应该看到**

- 有前后证据；不能只写“性能提升”。

**立即测试，不要留到晚上**

- [ ] 刷新学生列表、快速搜索、键盘登录、键盘报名均无回归。


## 有余力再做

- 压缩一张明显过大的活动封面，并记录实际文件大小变化。

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

/activities

**检查操作**

1. 打开 Network 并清空记录。
2. 快速输入 v、vu、vue。
3. 检查最终查询与路由 chunk。
4. 只用 Tab 和 Enter 完成登录入口操作。

**正确结果与判断依据**

- 只发生一次最终搜索。
- 路由 chunk 按访问加载。
- 焦点轮廓可见。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
