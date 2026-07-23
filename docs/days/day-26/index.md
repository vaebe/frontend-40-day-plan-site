---
title: 第 26 天：个人中心、状态派生与跨页一致性
---

# 第 26 天：个人中心、状态派生与跨页一致性

::: tip 今天只认这个结果
**阶段：** 综合项目<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 收藏和报名均来自派生，而非复制对象。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 26
cd ../frontend-40-day-learning-lab/campus-growth-hub
git status
npm run type-check
npm run test:run
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/src/stores/bookmarks.ts`
- `campus-growth-hub/src/stores/enrollments.ts`
- `campus-growth-hub/src/views/ProfileView.vue`
- `campus-growth-hub/src/api/activity.ts`

### 3. 开始前必须确认

- [ ] 数据源规则：活动来自 activity API；bookmarkStore 只存 id；enrollmentStore 只存报名记录。
- [ ] 禁止把完整 Activity 复制进两个 store。

### 4. 第一件具体工作

打开 `campus-growth-hub/src/views/ProfileView.vue`，开始执行“建立个人中心的派生数据”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 建立个人中心的派生数据 | 110 分钟 |
| 2 | 实现取消报名与失败恢复 | 100 分钟 |
| 3 | 验证列表、详情、个人中心跨页一致 | 110 分钟 |
| 4 | 算法与提交 | 40 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：建立个人中心的派生数据（110 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/views/ProfileView.vue`
- `campus-growth-hub/src/stores/bookmarks.ts`
- `campus-growth-hub/src/stores/enrollments.ts`
- `campus-growth-hub/src/composables/usePersonalActivities.ts`

**按顺序执行**

1. usePersonalActivities 获取活动源数据，再把 bookmark ids 和 enrollment records 映射成两个列表。
2. 给 GET /api/activities 增加 ids=a001,a008 查询：ids 存在时按 id 集合返回全部命中活动且不受默认 pageSize=6 限制；usePersonalActivities 合并收藏 id 与报名 activityId 后用一次 ids 请求获取源数据。
3. 个人中心使用“我的收藏/我的报名”两个区块或 tabs，明确空状态。
4. 当收藏 id=deleted 不存在于活动源时忽略并显示一条可清理提示，不让页面报错。

**完成后应该看到**

- 收藏和报名均来自派生，而非复制对象。
- 空列表和脏 id 均不白屏。

**立即测试，不要留到晚上**

- [ ] 无收藏时显示空态
- [ ] 手动加入 deleted id 后页面仍可用
- [ ] npm run type-check

### 必做 2：实现取消报名与失败恢复（100 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/api/enrollment.ts`
- `campus-growth-hub/src/mocks/handlers.ts`
- `campus-growth-hub/src/stores/enrollments.ts`
- `campus-growth-hub/src/views/ProfileView.vue`

**按顺序执行**

1. DELETE /api/enrollments/:id 成功后从 cgh.mock-enrollments.v1 删除并返回 204，store 随后移除；mode=cancel-error 返回 500 且 enrollmentDb 不变。
2. 开发环境下把 /profile?debug=cancel-error 映射为 DELETE 的 mode=cancel-error，生产环境忽略 debug；验收固定使用该 URL。
3. 取消中禁用该条按钮；失败保留报名记录并显示重试。
4. 取消成功后回详情应显示可报名；刷新后保持取消状态。

**完成后应该看到**

- 失败不会先消失后又跳回。
- 成功时个人中心和详情一致。

**立即测试，不要留到晚上**

- [ ] npm run test:run -- src/mocks/enrollmentDb.test.ts
- [ ] /profile?debug=cancel-error 后记录仍在
- [ ] 成功取消后详情可报名
- [ ] 刷新后 GET /api/enrollments 仍未报名

### 必做 3：验证列表、详情、个人中心跨页一致（110 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/views/ActivityListView.vue`
- `campus-growth-hub/src/views/ActivityDetailView.vue`
- `campus-growth-hub/src/views/ProfileView.vue`
- `campus-growth-hub/notes/day-26.md`

**按顺序执行**

1. 列表收藏 a001→详情显示已收藏→个人中心出现。
2. 个人中心取消收藏→返回详情显示未收藏→列表也未收藏。
3. 报名与取消执行同样路径；使用浏览器后退和刷新再次确认。
4. 画出活动源、收藏 id、报名记录和 computed 派生关系。

**完成后应该看到**

- 三个页面从同一状态源得到一致结果。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run build
- [ ] 两条跨页路径各执行两次
- [ ] Console 无错误

### 必做 4：算法与提交（40 分钟）

**修改或创建这些文件**

- `campus-growth-hub/algorithms/day26-longest-substring.ts`
- `campus-growth-hub/algorithms/day26-longest-substring.test.ts`
- `campus-growth-hub/notes/day-26.md`

**按顺序执行**

1. LeetCode 3 允许看一次提示，画窗口左右边界。
2. 用 Vitest 写 abcabcbb、bbbbb、空字符串。
3. 提交 feat: add personal activity center。

**完成后应该看到**

- 至少能讲清暴力法；完成滑动窗口则说明 map 保存什么。

**立即测试，不要留到晚上**

- [ ] npm run test:run -- algorithms/day26-longest-substring.test.ts
- [ ] abcabcbb 返回3
- [ ] bbbbb 返回1
- [ ] 空字符串返回0


## 有余力再做

- 给个人中心增加状态标签 confirmed/cancelled；不引入缓存库。

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

/profile

**检查操作**

1. 从个人中心取消 a001 收藏和报名。
2. 返回详情及列表检查，再刷新验证 GET 恢复。
3. 用 /profile?debug=cancel-error 触发取消失败。

**正确结果与判断依据**

- 三个页面一致。
- 学习者能指出唯一源数据和派生数据，失败时状态不丢。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
