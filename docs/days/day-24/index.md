---
title: 第 24 天：活动列表：查询、分页与完整页面状态
---

# 第 24 天：活动列表：查询、分页与完整页面状态

::: tip 今天只认这个结果
**阶段：** 综合项目实战<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 默认共 3 页。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 24
cd ../frontend-40-day-learning-lab/campus-growth-hub
git status
npm run type-check
npm run test:run
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/src/views/ActivityListView.vue`
- `campus-growth-hub/src/components/SearchBar.vue`
- `campus-growth-hub/src/api/activity.ts`
- `campus-growth-hub/src/mocks/handlers.ts`
- `campus-growth-hub/src/mocks/activities.ts`

### 3. 开始前必须确认

- [ ] 沿用 Day 11/17 的筛选组件和 Day 20 的 fetch + MSW，不新建第二套。
- [ ] fixture 至少补到 15 条；pageSize 固定 6，确保能看到 3 页。

### 4. 第一件具体工作

打开 `campus-growth-hub/src/types/activity.ts`，开始执行“固定查询合同与足量 fixture”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 固定查询合同与足量 fixture | 80 分钟 |
| 2 | 实现 URL 驱动的筛选与分页 | 130 分钟 |
| 3 | 补全 loading、empty、error 与竞态 | 110 分钟 |
| 4 | 算法与提交 | 40 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：固定查询合同与足量 fixture（80 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/types/activity.ts`
- `campus-growth-hub/src/types/pagination.ts`
- `campus-growth-hub/src/mocks/activities.ts`
- `campus-growth-hub/src/mocks/activityFilter.ts`
- `campus-growth-hub/src/mocks/activityFilter.test.ts`
- `campus-growth-hub/src/mocks/handlers.ts`

**按顺序执行**

1. ActivityQuery 固定 keyword/type/mode/availableOnly/page/pageSize。
2. 保留 a001-a004，并按固定矩阵补 a005-a015：a005 前端工程化/tech/online/40/8，a006 篮球训练/sports/offline/20/20，a007 社区支教/volunteer/offline/30/12，a008 TypeScript 分享/tech/online/50/18，a009 羽毛球赛/sports/offline/16/10，a010 环保宣传/volunteer/offline/25/25，a011 Vue 工作坊/tech/offline/24/6，a012 跑步打卡/sports/online/100/31，a013 图书整理/volunteer/offline/15/4，a014 AI 项目夜谈/tech/online/60/22，a015 校运会志愿者/volunteer/offline/80/35。每条补唯一 startAt；online 补唯一 meetingUrl，offline 补 location。
3. 确认 a003 标题仍为 AI 学习分享，因此答案卡 /activities?q=AI&amp;type=tech 必有结果；a006、a010 为已满。
4. handler 先筛选再分页，返回 items/total/page/pageSize。
5. 非法 page&lt;1 归一为 1；page 超出总页数时返回最后有效页。
6. 把筛选与分页提取为纯函数 filterAndPaginateActivities，并在 activityFilter.test.ts 测默认 3 页、AI+tech、availableOnly 和非法页码。

**完成后应该看到**

- 默认共 3 页。
- 筛选和分页结果可预测。

**立即测试，不要留到晚上**

- [ ] npm run test:run -- src/mocks/activityFilter.test.ts
- [ ] GET /api/activities?page=1&amp;pageSize=6 返回6条
- [ ] availableOnly=true 不返回已满活动
- [ ] 所有 fixture id 唯一

### 必做 2：实现 URL 驱动的筛选与分页（130 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/composables/useActivityQuery.ts`
- `campus-growth-hub/src/utils/activityQuery.ts`
- `campus-growth-hub/src/utils/activityQuery.test.ts`
- `campus-growth-hub/src/components/SearchBar.vue`
- `campus-growth-hub/src/views/ActivityListView.vue`
- `campus-growth-hub/src/router/index.ts`

**按顺序执行**

1. 把 route.query 到 ActivityQuery 的解析提取为纯函数 parseActivityQuery(raw)，useActivityQuery 只负责调用它和 router.replace；在 activityQuery.test.ts 测正常 query、page=abc、未知 type。
2. 从 route.query 初始化筛选；变化后用 router.replace 写回 q/type/mode/available/page。
3. 映射表固定为 route.q↔ActivityQuery.keyword、route.available↔ActivityQuery.availableOnly，其余同名；禁止同时生成 keyword 与 q 两套 URL。
4. 关键词、类型或模式变化时 page 重置为 1；翻页只改变 page。
5. 刷新 /activities?q=AI&amp;type=tech&amp;page=2 后条件和页码保持。
6. 处理 page=abc、page=-2 和未知 type，归一后页面不白屏。

**完成后应该看到**

- URL 可复制并恢复相同列表。
- 筛选变化不会停留在空的旧页码。

**立即测试，不要留到晚上**

- [ ] npm run test:run -- src/utils/activityQuery.test.ts
- [ ] 刷新带 query 的 URL
- [ ] 浏览器前进后退恢复筛选
- [ ] page=abc 归一为1

### 必做 3：补全 loading、empty、error 与竞态（110 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/views/ActivityListView.vue`
- `campus-growth-hub/src/composables/useActivitySearch.ts`
- `campus-growth-hub/src/mocks/handlers.ts`

**按顺序执行**

1. 请求期间显示 skeleton 或明确加载文案；无结果显示清空筛选按钮；错误显示重试。
2. MSW 保留 q=slow/fast 与 mode=business-error；取消旧请求的逻辑继续有效。开发环境下把页面 query debug=business-error/timeout 映射为 API 的 mode 参数，生产环境忽略 debug；验收用 /activities?debug=business-error 稳定触发。
3. 每个页面状态只出现一个主区域，旧数据是否保留必须写入说明。

**完成后应该看到**

- 四态可稳定触发。
- slow→fast 不被旧结果覆盖。

**立即测试，不要留到晚上**

- [ ] q=不存在 显示空态
- [ ] mode=business-error 显示重试
- [ ] slow→fast 连续3次正确
- [ ] npm run build

### 必做 4：算法与提交（40 分钟）

**修改或创建这些文件**

- `campus-growth-hub/algorithms/day24-stock.ts`
- `campus-growth-hub/algorithms/day24-stock.test.ts`
- `campus-growth-hub/notes/day-24.md`

**按顺序执行**

1. 完成 LeetCode 121，先写 minPrice 与 maxProfit 的含义。
2. 用 Vitest 写波动数组与递减数组。
3. 提交 feat: build searchable activity catalog。

**完成后应该看到**

- 能解释为何只需一次遍历。

**立即测试，不要留到晚上**

- [ ] npm run test:run -- algorithms/day24-stock.test.ts
- [ ] [7,1,5,3,6,4] 返回5
- [ ] 递减数组返回0


## 有余力再做

- 增加日期筛选；只有 Must 全部通过后才做。

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

/activities?q=AI&amp;type=tech&amp;page=1

**检查操作**

1. 刷新并确认 AI+tech 至少出现 a003。
2. 新增“仅看可报名”，再次刷新。
3. 用 /activities?debug=business-error 触发错误态，再执行 slow→fast。

**正确结果与判断依据**

- URL、UI、请求参数三者一致。
- 错误与竞态均可解释。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
