---
title: 第 19 天：Pinia、会话状态与路由守卫
---

# 第 19 天：Pinia、会话状态与路由守卫

::: tip 今天只认这个结果
**阶段：** Vue 生态与工程化<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 登录前 user 为 null；演示登录后显示小林。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 19
cd ../frontend-40-day-learning-lab/campus-growth-hub
npm install pinia
git status
npm run type-check
npm run test:run
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/src/main.ts`
- `campus-growth-hub/src/router/index.ts`
- `campus-growth-hub/src/views/LoginView.vue`
- `campus-growth-hub/src/views/ActivityListView.vue`

### 3. 开始前必须确认

- [ ] Day 18 所有页面已存在，但 /profile 尚未受保护。
- [ ] 今天才建立 authStore 并把守卫接入 router。

### 4. 第一件具体工作

打开 `campus-growth-hub/src/main.ts`，开始执行“注册 Pinia 并建立两个最小 store”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 注册 Pinia 并建立两个最小 store | 120 分钟 |
| 2 | 实现有边界的本地持久化 | 100 分钟 |
| 3 | 接入路由守卫与退出闭环 | 100 分钟 |
| 4 | 算法与记录 | 40 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：注册 Pinia 并建立两个最小 store（120 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/main.ts`
- `campus-growth-hub/src/stores/auth.ts`
- `campus-growth-hub/src/stores/bookmarks.ts`
- `campus-growth-hub/src/types/user.ts`

**按顺序执行**

1. 在 main.ts 创建并注册 Pinia，顺序为 app.use(pinia).use(router).mount('#app')。
2. authStore 定义 user、isAuthenticated、setDemoUser(user)、restoreSession、logout；演示用户固定为 s001/小林/student。Day 23 会新增唯一异步 action login(credentials)，不保留第二套登录链路。
3. bookmarkStore 只保存 activityId[]，提供 toggle(id) 与 isBookmarked(id)，禁止保存完整 Activity。
4. 列表页改为从 bookmarkStore 读取和切换收藏。

**完成后应该看到**

- 登录前 user 为 null；演示登录后显示小林。
- 同一 id 不会重复进入 bookmarks。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] 连续 toggle a001 两次，最终未收藏
- [ ] toggle a001 一次后数组只含一个 a001

### 必做 2：实现有边界的本地持久化（100 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/services/storage.ts`
- `campus-growth-hub/src/services/storage.test.ts`
- `campus-growth-hub/src/stores/auth.ts`
- `campus-growth-hub/src/stores/bookmarks.ts`

**按顺序执行**

1. 固定 key：cgh.session.v1 与 cgh.bookmarks.v1；只保存演示会话和 id 数组。
2. restore 时用 try/catch 校验 JSON 和最小字段，非法内容删除并回到安全空状态。
3. 登录、登出、收藏变化后同步保存；登出清会话，不强制清收藏。
4. 在 DevTools 手动把 cgh.session.v1 改成 '{bad'，刷新验证不白屏。
5. 在 storage.test.ts 使用 Vitest 和 localStorage mock 测试正常读取、非法 JSON 返回 null 并清理 key。

**完成后应该看到**

- 刷新后登录和收藏恢复。
- 损坏存储时回到未登录且 Console 无未捕获异常。

**立即测试，不要留到晚上**

- [ ] npm run test:run -- src/services/storage.test.ts
- [ ] 刷新后 a001 仍收藏
- [ ] localStorage 写入非法 JSON 后刷新进入未登录状态

### 必做 3：接入路由守卫与退出闭环（100 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/router/index.ts`
- `campus-growth-hub/src/views/LoginView.vue`
- `campus-growth-hub/src/views/ProfileView.vue`
- `campus-growth-hub/src/App.vue`

**按顺序执行**

1. 给 /profile 增加 meta.requiresAuth=true；beforeEach 读取 authStore，未登录跳 /login?redirect=原路径。
2. 登录页按钮调用 loginDemoStudent，成功后回 redirect 或 /activities。
3. 主导航增加退出按钮；退出后若当前页需登录则跳 /login。
4. 说明 store 必须在 Pinia 安装后由守卫使用，禁止在 router 模块顶层错误创建未激活 store。

**完成后应该看到**

- 未登录直达 /profile 被拦截。
- 登录后回到 /profile；刷新保持；退出回登录页。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run build
- [ ] 清空 storage 后打开 /profile → 登录 → 返回 /profile → 刷新 → 退出

### 必做 4：算法与记录（40 分钟）

**修改或创建这些文件**

- `campus-growth-hub/algorithms/day19-tree-depth.ts`
- `campus-growth-hub/algorithms/day19-tree-depth.test.ts`
- `campus-growth-hub/notes/day-19.md`

**按顺序执行**

1. 完成 LeetCode 104，先写递归终止条件。
2. 用 Vitest 写空树与三层树用例。
3. 记录空树边界和持久化风险，提交 feat: add auth and bookmark stores。

**完成后应该看到**

- 能解释为什么深度是左右子树最大值加一。

**立即测试，不要留到晚上**

- [ ] npm run test:run -- algorithms/day19-tree-depth.test.ts
- [ ] 空树返回 0
- [ ] [3,9,20,null,null,15,7] 返回 3


## 有余力再做

- 为 storage 数据增加 version 字段；不安装 Pinia 持久化插件。

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

1. 清空 storage 后直达 /profile。
2. 演示登录、收藏、刷新、退出。
3. 写入损坏 session 再刷新。

**正确结果与判断依据**

- 守卫顺序正确。
- 状态恢复且损坏数据不会白屏；学习者能解释为何筛选条件不进 Pinia。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
