---
title: 第 15 天：TypeScript 最小基础：类型服务业务
---

# 第 15 天：TypeScript 最小基础：类型服务业务

::: tip 今天只认这个结果
**阶段：** Vue 工程能力<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 首页可正常打开，筛选和收藏仍工作。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 15
cd ../frontend-40-day-learning-lab/campus-growth-hub
npm install -D typescript vue-tsc vitest jsdom
npm pkg set scripts.type-check="vue-tsc --noEmit" scripts.test:run="vitest run"
git status
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/package.json`
- `campus-growth-hub/index.html`
- `campus-growth-hub/src/main.js 或 src/main.ts`
- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/src/data/activities.js`
- `campus-growth-hub/src/components/ActivityCard.vue`

### 3. 开始前必须确认

- [ ] 从 Day 14 的提交开始，首页筛选、收藏、空态和错误重试均可运行。
- [ ] 先确认当前项目：存在 src/main.js 表示 JS 项目；存在 src/main.ts 表示已是 TS 项目，两者只能有一个。
- [ ] 保存一次迁移前提交；禁止重新创建 Vite 项目或覆盖已有 src。

### 4. 第一件具体工作

打开 `campus-growth-hub/package.json`，开始执行“把现有 Vue 项目安全切入 TypeScript”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 把现有 Vue 项目安全切入 TypeScript | 90 分钟 |
| 2 | 建立活动与接口结果的最小类型 | 110 分钟 |
| 3 | 将 Activity 类型接入一条真实组件链路 | 120 分钟 |
| 4 | 算法与当日留痕 | 40 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：把现有 Vue 项目安全切入 TypeScript（90 分钟）

**修改或创建这些文件**

- `campus-growth-hub/package.json`
- `campus-growth-hub/index.html`
- `campus-growth-hub/tsconfig.json`
- `campus-growth-hub/src/main.ts`
- `campus-growth-hub/src/vite-env.d.ts`
- `campus-growth-hub/src/views/HomeView.vue`

**按顺序执行**

1. 若当前是 JS 项目，把 src/main.js 重命名为 src/main.ts，并把 index.html 的 /src/main.js 同步改为 /src/main.ts；若已是 TS 项目，只核对入口，不重复迁移。
2. 创建单一 tsconfig.json：compilerOptions 固定为 target ES2020、module ESNext、moduleResolution Bundler、lib ES2020/DOM/DOM.Iterable、strict true、skipLibCheck true、isolatedModules true、resolveJsonModule true、esModuleInterop true、jsx preserve、noEmit true；include 固定为 src/**/*.ts、src/**/*.tsx、src/**/*.vue。今天不创建 tsconfig.app.json 或项目引用。
3. 创建 src/vite-env.d.ts，内容只有 /// &lt;reference types="vite/client" /&gt;。
4. 把当天会改动的 Vue 组件 script 改为 &lt;script setup lang="ts"&gt;；其余组件暂不批量改造。
5. 运行 npm run type-check，逐条修复迁移本身造成的错误；不得使用 // @ts-ignore 或 as any 消音。
6. 运行 npm run dev，确认首页行为与 Day 14 相同。

**完成后应该看到**

- 首页可正常打开，筛选和收藏仍工作。
- npm run type-check 首次可执行，最终零错误。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run build
- [ ] 浏览器打开 /，执行一次筛选和收藏

### 必做 2：建立活动与接口结果的最小类型（110 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/types/activity.ts`
- `campus-growth-hub/src/types/api.ts`
- `campus-growth-hub/src/mocks/activities.ts`
- `campus-growth-hub/src/utils/activity.ts`
- `campus-growth-hub/src/utils/activity.test.ts`
- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/src/data/activities.js`

**按顺序执行**

1. 定义 Activity：id/title/type/startAt/capacity/enrolledCount；id、title、type、startAt 为 string，人数为 number。
2. 定义 ApiResult&lt;T&gt;：code 为 number、message 为 string、data 为 T。
3. 写入 fixture：a001 容量 30 已报名 12；a002 容量 20 已报名 20，后续用它验证已满。
4. 把 src/data/activities.js 的既有数据迁入 src/mocks/activities.ts，保留原 id 和页面内容；随后更新 HomeView.vue 导入并删除旧 JS 导入，禁止保留两份活动源。
5. 在 src/utils/activity.ts 写 getRemaining(activity): number 与 unwrap(result: unknown): T；unwrap 先做最小对象、code 和 data 检查。
6. 在 src/utils/activity.test.ts 用 Vitest 写 a001 剩余 18、a002 剩余 0、非法 ApiResult 抛错三个测试。
7. 依次制造并记录 5 个错误：capacity 写成字符串、漏 title、函数参数传 null、函数声明返回 string 却返回 number、直接读取 unknown.data；每次保存错误文本后修复。

**完成后应该看到**

- fixture 能被首页导入，画面内容不变。
- 5 个错误都有“错误位置—含义—修复”记录。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run test:run -- src/utils/activity.test.ts
- [ ] 把 a001.capacity 临时改为字符串时必须报错，恢复数字后通过

### 必做 3：将 Activity 类型接入一条真实组件链路（120 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/src/components/ActivityCard.vue`
- `campus-growth-hub/src/mocks/activities.ts`

**按顺序执行**

1. 只改 HomeView → ActivityCard 这一条真实链路：HomeView 活动列表标注为 Activity[]，卡片 prop 标注为 Activity。
2. 页面显示 title、type、剩余名额；剩余为 0 时显示“已满”。
3. 删除一次 getRemaining 实现，在不看旧代码的情况下重写。
4. 观察编辑器类型提示：输入 activity. 后能看到字段；输入 activity.foo 应立即报错。

**完成后应该看到**

- a001 显示剩余 18，a002 显示已满。
- 页面无红屏，Console 无错误。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run test:run
- [ ] npm run build
- [ ] 临时写 activity.foo 能触发类型错误，随后删除

### 必做 4：算法与当日留痕（40 分钟）

**修改或创建这些文件**

- `campus-growth-hub/notes/day-15.md`
- `campus-growth-hub/algorithms/day15-queue.ts`
- `campus-growth-hub/algorithms/day15-queue.test.ts`

**按顺序执行**

1. 完成 LeetCode 232；先画两个栈的状态，再写 push/pop/peek/empty。
2. 在 day15-queue.test.ts 写题目示例与空队列用例并运行指定 Vitest。
3. 记录复杂度、空队列边界与 AI 等级，提交 refactor: introduce core activity types。

**完成后应该看到**

- 能解释为什么元素只在必要时从输入栈搬到输出栈。

**立即测试，不要留到晚上**

- [ ] npm run test:run -- algorithms/day15-queue.test.ts
- [ ] 依次 push 1、push 2、peek 得 1、pop 得 1、empty 得 false


## 有余力再做

- 为 Activity.type 收窄成 'tech' | 'sports' | 'volunteer'，不扩展泛型工具类型。

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

/

**检查操作**

1. 启动项目并演示 a001/a002。
2. 运行 npm run type-check。
3. 把 a001 新增 capacity 字段的错误改成给 capacity 传字符串，要求学习者定位并修复。

**正确结果与判断依据**

- 页面与迁移前一致。
- 学习者能说明类型推断、unknown 与 any 的差异，并在 5 分钟内修复类型错误。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
