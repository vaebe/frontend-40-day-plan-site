---
title: 第 16 天：对象类型、接口、联合类型与收窄
---

# 第 16 天：对象类型、接口、联合类型与收窄

::: tip 今天只认这个结果
**阶段：** Vue 工程能力<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 四个按钮分别显示待开始、加载中、数据、错误文案。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 16
cd ../frontend-40-day-learning-lab/campus-growth-hub
git status
npm run type-check
npm run test:run
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/src/types/activity.ts`
- `campus-growth-hub/src/types/api.ts`
- `campus-growth-hub/src/mocks/activities.ts`
- `campus-growth-hub/src/App.vue`

### 3. 开始前必须确认

- [ ] Day 15 类型迁移完成。
- [ ] a001 与 a002 均能显示，type-check 和 build 通过。

### 4. 第一件具体工作

打开 `campus-growth-hub/src/types/request.ts`，开始执行“用判别联合描述请求四态”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 用判别联合描述请求四态 | 100 分钟 |
| 2 | 建立活动、用户与分页的数据合同 | 110 分钟 |
| 3 | 在页面中使用收窄并清理显式 any | 110 分钟 |
| 4 | 算法与记录 | 40 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：用判别联合描述请求四态（100 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/types/request.ts`
- `campus-growth-hub/src/components/RequestStateDemo.vue`
- `campus-growth-hub/src/views/HomeView.vue`

**按顺序执行**

1. 定义 RequestState&lt;T&gt; 的 idle/loading/success/error 四个分支；success 只能有 data，error 只能有 message。
2. 写 RequestStateDemo，通过四个按钮切换状态，并使用 switch(state.status) 收窄。
3. 在 HomeView.vue 临时导入并渲染 RequestStateDemo，放在活动列表下方；Day 17 结束前再移除演示组件。
4. 故意在 error 分支读取 state.data，保存类型错误后修复。

**完成后应该看到**

- 四个按钮分别显示待开始、加载中、数据、错误文案。
- error 分支无法读取 data。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] 浏览器首页依次点击四个状态按钮，页面不白屏且每次只显示一个状态

### 必做 2：建立活动、用户与分页的数据合同（110 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/types/activity.ts`
- `campus-growth-hub/src/types/user.ts`
- `campus-growth-hub/src/types/pagination.ts`
- `campus-growth-hub/src/types/request.ts`

**按顺序执行**

1. 定义 User：id/name/role，role 仅为 student 或 organizer。
2. 定义 PaginationQuery：page/pageSize；PaginatedResult&lt;T&gt;：items/total/page/pageSize。
3. 把 Activity 改为 online/offline 判别联合：online 必须有 meetingUrl，offline 必须有 location。
4. 补完整 fixture：a003={id:'a003',title:'AI 学习分享',type:'tech',startAt:'2026-08-08T10:00:00+08:00',capacity:50,enrolledCount:10,mode:'online',meetingUrl:'https://example.com/meeting'}；a004={id:'a004',title:'校园志愿服务',type:'volunteer',startAt:'2026-08-09T09:00:00+08:00',capacity:20,enrolledCount:5,mode:'offline',location:'学生活动中心'}。
5. 分别故意漏掉 a003.meetingUrl 与 a004.location，确认类型报错后修复。

**完成后应该看到**

- 线上卡片显示“线上”，线下卡片显示 location。
- 不存在同时依赖 location 与 meetingUrl 的模糊分支。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] online fixture 漏 meetingUrl 必须失败
- [ ] offline fixture 漏 location 必须失败

### 必做 3：在页面中使用收窄并清理显式 any（110 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/views/HomeView.vue`
- `campus-growth-hub/src/components/ActivityCard.vue`
- `campus-growth-hub/src/mocks/activities.ts`

**按顺序执行**

1. 在 ActivityCard 中根据 activity.mode 显示会议链接或地点。
2. 搜索 src 下的显式 any；逐处换成真实类型或 unknown + 收窄，不修改第三方声明。
3. 制造非法 role='admin' 和 page='2' 两个错误，确认能被类型检查捕获。

**完成后应该看到**

- a003 只显示会议入口，a004 只显示地点。
- src 业务代码无为逃避错误而添加的 any。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run build
- [ ] rg -n '\bany\b' src 并逐条解释保留项

### 必做 4：算法与记录（40 分钟）

**修改或创建这些文件**

- `campus-growth-hub/algorithms/day16-reverse-list.ts`
- `campus-growth-hub/algorithms/day16-reverse-list.test.ts`
- `campus-growth-hub/notes/day-16.md`

**按顺序执行**

1. 完成 LeetCode 206，先画 prev/current/next 三指针变化。
2. 在测试文件写空链表、单节点和 1→2→3 三个用例。
3. 记录空链表和单节点边界，提交 refactor: model domain states with types。

**完成后应该看到**

- 能徒手演示 1→2→3 反转过程。

**立即测试，不要留到晚上**

- [ ] npm run test:run -- algorithms/day16-reverse-list.test.ts
- [ ] 空链表返回 null
- [ ] 1→2→3 返回 3→2→1


## 有余力再做

- 把 role 文案映射提取为 Record&lt;UserRole, string&gt;。

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

1. 切换请求四态。
2. 查看线上/线下两张卡片。
3. 临时新增线上活动但不提供 meetingUrl，让学习者修复。

**正确结果与判断依据**

- 四态互斥且显示正确。
- 学习者能解释判别字段如何帮助收窄。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
