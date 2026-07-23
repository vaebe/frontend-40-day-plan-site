---
title: 第 20 天：fetch、MSW 与请求错误整合
---

# 第 20 天：fetch、MSW 与请求错误整合

::: tip 今天只认这个结果
**阶段：** Vue 工程能力<br>
**时间：** 巩固实践日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** Network 中能看到 /api/activities 请求。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 20
cd ../frontend-40-day-learning-lab/campus-growth-hub
npm install -D msw
npx msw init public --save
git status
npm run type-check
npm run test:run
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/src/main.ts`
- `campus-growth-hub/src/services/activityFixture.ts`
- `campus-growth-hub/src/views/ActivityListView.vue`
- `campus-growth-hub/src/views/ActivityDetailView.vue`

### 3. 开始前必须确认

- [ ] 本计划唯一请求方案为原生 fetch + MSW；不安装 Axios、json-server 或第二套 mock。
- [ ] 保留 fixture 数据，但 Day 17 的临时 activityFixture 服务将在今天删除。

### 4. 第一件具体工作

打开 `campus-growth-hub/src/mocks/browser.ts`，开始执行“建立唯一的 MSW HTTP mock”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 建立唯一的 MSW HTTP mock | 110 分钟 |
| 2 | 封装 fetch、超时和错误分类 | 100 分钟 |
| 3 | 接通列表、详情与连续搜索取消 | 110 分钟 |
| 4 | 旧题复现与阶段记录 | 40 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：建立唯一的 MSW HTTP mock（110 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/mocks/browser.ts`
- `campus-growth-hub/src/mocks/handlers.ts`
- `campus-growth-hub/src/mocks/activities.ts`
- `campus-growth-hub/src/mocks/raceActivities.ts`
- `campus-growth-hub/src/main.ts`
- `campus-growth-hub/public/mockServiceWorker.js`
- `campus-growth-hub/.env`
- `campus-growth-hub/.env.example`

**按顺序执行**

1. browser.ts 使用 setupWorker；handlers.ts 提供 GET /api/activities 与 GET /api/activities/:id。
2. 列表 handler 支持 q/page/pageSize/mode；默认延迟 300ms。
3. 固定 .env 与 .env.example 均写 VITE_API_BASE_URL=/api；后续 request 只从 import.meta.env.VITE_API_BASE_URL 读取前缀。
4. 在 raceActivities.ts 固定 raceSlow={id:'race-slow',title:'旧请求结果 slow',...完整 Activity 字段} 与 raceFast={id:'race-fast',title:'最新请求结果 fast',...完整字段}；q=slow/fast 时 handler 直接返回对应单项，不再按普通标题筛选。
5. main.ts 固定启动形状：async function enableMocking(){ if(!import.meta.env.DEV) return; const { worker }=await import('./mocks/browser'); return worker.start({onUnhandledRequest:'bypass'}); }；先 await enableMocking()，再 createApp(App).use(pinia).use(router).mount('#app')。
6. 删除 Day 17 临时 activityFixture 服务的调用，所有活动读取改走 HTTP。

**完成后应该看到**

- Network 中能看到 /api/activities 请求。
- Service Worker 激活，页面仍显示 fixture。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run dev 后 Network 出现 /api/activities?page=1&amp;pageSize=6
- [ ] npm run build

### 必做 2：封装 fetch、超时和错误分类（100 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/api/request.ts`
- `campus-growth-hub/src/api/request.test.ts`
- `campus-growth-hub/src/api/activity.ts`
- `campus-growth-hub/src/types/api.ts`
- `campus-growth-hub/src/mocks/handlers.ts`

**按顺序执行**

1. 定义 ApiErrorResponse={code:number;message:string}，错误响应不再假装满足必须含 data 的 ApiResult&lt;T&gt;。
2. request&lt;T&gt;(path,{signal,timeoutMs=5000}) 内创建自己的 controller；外部 signal 已 aborted 时立即 abort，否则注册一次性 abort 监听；setTimeout 到期前先记录 timedOut=true 再 abort。finally 必须 clearTimeout 并移除监听。
3. fetch 使用 `${import.meta.env.VITE_API_BASE_URL}${path}`。response.ok=false 时先解析 ApiErrorResponse，再抛 kind='business'；AbortError 根据 timedOut 区分 timeout/aborted；其余 TypeError 归 network。aborted 由页面忽略，不进入 error UI。
4. MSW 固定故障：mode=business-error 返回 400 {code:40001,message:'活动查询失败'}；mode=timeout 延迟 3000ms；浏览器 Offline 制造 network。
5. request.test.ts 使用 msw/node 的 setupServer 建正常、400、3000ms 三个 handler，分别断言 success/business/timeout，并用外部 AbortController 断言 aborted。
6. activity API 只负责路径和查询参数，页面不得直接 fetch。

**完成后应该看到**

- 三种错误显示不同文案。
- 取消请求不闪现错误状态。

**立即测试，不要留到晚上**

- [ ] npm run test:run -- src/api/request.test.ts
- [ ] mode=business-error 显示活动查询失败
- [ ] timeoutMs=500 + mode=timeout 显示请求超时
- [ ] Offline 时显示网络不可用

### 必做 3：接通列表、详情与连续搜索取消（110 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/composables/useActivitySearch.ts`
- `campus-growth-hub/src/views/ActivityListView.vue`
- `campus-growth-hub/src/views/ActivityDetailView.vue`
- `campus-growth-hub/src/api/activity.ts`
- `campus-growth-hub/src/mocks/handlers.ts`

**按顺序执行**

1. useActivitySearch 固定声明 let activeController: AbortController | null=null；每次搜索先 activeController?.abort()，再把新 controller 赋给它；组件卸载时也调用 activeController?.abort()。
2. 为 q=slow 固定延迟 1200ms，为 q=fast 固定延迟 200ms；先输入 slow 再立即输入 fast。
3. 列表和详情统一显示 loading/empty/error，并提供重试按钮。
4. 画出 View → composable → activity API → request → MSW → View 数据流。

**完成后应该看到**

- slow 后输入 fast，最终只显示 fast 结果。
- 详情请求也经过统一 request。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run build
- [ ] slow→fast 竞态测试三次均只显示 fast
- [ ] 错误态点击重试可恢复

### 必做 4：旧题复现与阶段记录（40 分钟）

**修改或创建这些文件**

- `campus-growth-hub/algorithms/day20-review.ts`
- `campus-growth-hub/algorithms/day20-review.test.ts`
- `campus-growth-hub/notes/day-20.md`

**按顺序执行**

1. 从空白重做本周最薄弱的一道链表或树题，并把该题的两个旧用例写入 day20-review.test.ts。
2. 记录 MSW、request 和页面职责，提交 refactor: integrate typed application data flow。

**完成后应该看到**

- 能不看代码画出完整请求数据流。

**立即测试，不要留到晚上**

- [ ] npm run test:run -- algorithms/day20-review.test.ts
- [ ] 算法包含复杂度和一个边界
- [ ] git diff 无 Day 17 临时 service 的残留调用


## 有余力再做

- 在 MSW handler 中增加 401 fixture，但不做自动刷新 token。

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

1. 在 Network 查看正常请求。
2. 依次触发 business-error、timeout、Offline。
3. 快速输入 slow 后 fast。

**正确结果与判断依据**

- 错误分类正确且可重试。
- 最终只显示 fast；学习者能指出取消发生在哪一层。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
