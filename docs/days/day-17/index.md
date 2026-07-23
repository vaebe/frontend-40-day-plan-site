---
title: 第 17 天：Vue 中的 TypeScript：Props、Emits 与接口数据
---

# 第 17 天：Vue 中的 TypeScript：Props、Emits 与接口数据

::: tip 今天只认这个结果
**阶段：** Vue 工程能力<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 点击收藏时父组件收到活动 id。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 17
cd ../frontend-40-day-learning-lab/campus-growth-hub
git status
npm run type-check
npm run test:run
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/src/components/ActivityCard.vue`
- `campus-growth-hub/src/components/SearchBar.vue`
- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/src/types/activity.ts`
- `campus-growth-hub/src/mocks/activities.ts`

### 3. 开始前必须确认

- [ ] 本日不引入网络 mock；请求层统一在 Day 20 使用 fetch + MSW 建立。
- [ ] Day 16 的 online/offline 与 RequestState 类型已通过检查。

### 4. 第一件具体工作

打开 `campus-growth-hub/src/components/ActivityCard.vue`，开始执行“为组件 Props 与 Emits 建立明确边界”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 为组件 Props 与 Emits 建立明确边界 | 120 分钟 |
| 2 | 把本地 fixture 包装成类型明确的临时数据函数 | 80 分钟 |
| 3 | 把类型接入列表到卡片的数据流 | 120 分钟 |
| 4 | 算法与记录 | 40 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：为组件 Props 与 Emits 建立明确边界（120 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/components/ActivityCard.vue`
- `campus-growth-hub/src/components/SearchBar.vue`
- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/src/types/activity.ts`

**按顺序执行**

1. ActivityCard 使用 defineProps&lt;{ activity: Activity; bookmarked: boolean }&gt;()。
2. 沿用 Day 12 的事件名 toggle-bookmark：ActivityCard 使用 defineEmits&lt;{ 'toggle-bookmark': [activityId: string] }&gt;()，只携带 id，不改成第二个事件名。
3. 在 src/types/activity.ts 定义 ActivityQuery={keyword:string;type:ActivityType|'all';mode:ActivityMode|'all'}。沿用并改造 SearchBar.vue，不创建 ActivityFilters.vue；SearchBar 接收 modelValue:ActivityQuery 并发出 update:modelValue。
4. 同步更新真实父组件 HomeView.vue 的 SearchBar v-model 与 ActivityCard @toggle-bookmark；移除 Day 16 临时 RequestStateDemo。
5. 依次制造 emit 完整对象、keyword 传 number、bookmarked 漏传三个错误，保存错误信息后修复。

**完成后应该看到**

- 点击收藏时父组件收到活动 id。
- 筛选组件不直接修改 props。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] 点击 a001 收藏按钮，UI 状态切换且 Console 输出 a001

### 必做 2：把本地 fixture 包装成类型明确的临时数据函数（80 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/services/activityFixture.ts`
- `campus-growth-hub/src/services/activityFixture.test.ts`
- `campus-growth-hub/src/types/api.ts`
- `campus-growth-hub/src/types/pagination.ts`

**按顺序执行**

1. 创建 listActivityFixtures(query): Promise&lt;ApiResult&lt;PaginatedResult&lt;Activity&gt;&gt;&gt;，只读取本地 fixture，并延迟 300ms。
2. 这里不封装 request、不模拟 HTTP、不安装 Axios；它只用于练习接口响应类型，Day 20 将被 fetch/MSW 替换。
3. 返回 items、total、page、pageSize；把返回字段 items 临时拼错为 item，确认类型检查失败。
4. 在 activityFixture.test.ts 使用 Vitest 测试 page=1/pageSize=2 返回两项，以及无匹配关键词返回空 items。

**完成后应该看到**

- 函数 300ms 后返回分页结构。
- 拼错响应字段会立即报错。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run test:run -- src/services/activityFixture.test.ts
- [ ] page=1,pageSize=2 时 items 长度为 2

### 必做 3：把类型接入列表到卡片的数据流（120 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/src/components/SearchBar.vue`
- `campus-growth-hub/src/components/ActivityCard.vue`
- `campus-growth-hub/src/services/activityFixture.ts`

**按顺序执行**

1. HomeView 中使用 ref&lt;Activity[]&gt;([]) 与 ref&lt;RequestState&lt;Activity[]&gt;&gt;，调用临时数据函数。
2. 筛选变化后重新加载；loading、success、empty、error 分支都由 RequestState 渲染。
3. 关闭资料后把 bookmark emit 从完整 Activity 改为 id 的链路重写一次。

**完成后应该看到**

- 首次进入先显示加载中，再显示活动。
- 筛选无结果显示空态，收藏仍正常。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run build
- [ ] 输入不存在关键词时显示空态

### 必做 4：算法与记录（40 分钟）

**修改或创建这些文件**

- `campus-growth-hub/algorithms/day17-cycle-list.ts`
- `campus-growth-hub/algorithms/day17-cycle-list.test.ts`
- `campus-growth-hub/notes/day-17.md`

**按顺序执行**

1. 完成 LeetCode 141，画快慢指针相遇过程。
2. 在测试文件构造无环链表与单节点自环。
3. 记录无环、单节点自环，提交 refactor: type component boundaries。

**完成后应该看到**

- 能解释为什么快慢指针相遇表示有环。

**立即测试，不要留到晚上**

- [ ] npm run test:run -- algorithms/day17-cycle-list.test.ts
- [ ] [3,2,0,-4], pos=1 返回 true
- [ ] [1], pos=-1 返回 false


## 有余力再做

- 为 SearchBar 增加 type='all'，不得使用类型断言绕过。

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

1. 演示加载、空态和收藏。
2. 检查 toggle-bookmark emit 只携带 id；临时改成 Activity 后让学习者根据类型错误恢复父子组件约定。

**正确结果与判断依据**

- type-check 通过。
- 学习者能说明 props 保护输入、emit 约束输出。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
