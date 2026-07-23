---
title: 第 23 天：登录闭环、角色路由与权限边界
---

# 第 23 天：登录闭环、角色路由与权限边界

::: tip 今天只认这个结果
**阶段：** 综合项目实战<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** Network 可见 POST /api/login。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 23
cd ../frontend-40-day-learning-lab/campus-growth-hub
git status
npm run type-check
npm run test:run
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/src/stores/auth.ts`
- `campus-growth-hub/src/router/index.ts`
- `campus-growth-hub/src/views/LoginView.vue`
- `campus-growth-hub/src/mocks/handlers.ts`

### 3. 开始前必须确认

- [ ] Pinia 和基础 requiresAuth 守卫来自 Day 19。
- [ ] 今日演示账号固定，不接真实后端、不存真实密码。

### 4. 第一件具体工作

打开 `campus-growth-hub/src/mocks/users.ts`，开始执行“建立可重复的演示认证 fixture”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 建立可重复的演示认证 fixture | 90 分钟 |
| 2 | 完成登录表单、会话恢复与退出 | 110 分钟 |
| 3 | 增加角色路由、导航和 403 | 120 分钟 |
| 4 | 算法与记录 | 40 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：建立可重复的演示认证 fixture（90 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/mocks/users.ts`
- `campus-growth-hub/src/mocks/handlers.ts`
- `campus-growth-hub/src/api/auth.ts`
- `campus-growth-hub/src/types/user.ts`

**按顺序执行**

1. 固定学生 student@example.com/student123，组织者 organizer@example.com/organizer123。
2. POST /api/login：正确凭据返回 user 与 demo-session；错误凭据返回 401 和“账号或密码错误”；延迟 500ms。
3. auth API 通过统一 request 调用；不得在 LoginView 直接读取 users fixture。

**完成后应该看到**

- Network 可见 POST /api/login。
- 正确和错误账号结果稳定可复现。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] 错误密码返回业务错误
- [ ] 两类正确账号返回不同 role

### 必做 2：完成登录表单、会话恢复与退出（110 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/views/LoginView.vue`
- `campus-growth-hub/src/stores/auth.ts`
- `campus-growth-hub/src/services/storage.ts`
- `campus-growth-hub/src/App.vue`

**按顺序执行**

1. 表单含邮箱和密码；空值、邮箱格式、密码少于 6 位在前端提示。
2. 唯一登录链路固定为 LoginView → authStore.login(credentials) → authApi.login → request → MSW → authStore.persist；删除 Day 19 的 setDemoUser 对外按钮调用，LoginView 不直接调用 authApi。
3. authStore.login 内维护 isSubmitting 与同一个 pending promise，已有请求时直接返回该 promise；按钮同时绑定 disabled，连续点击只发一个请求；401 由 store 保留为可展示 message，显示在表单内。
4. 成功后按 redirect 返回；刷新恢复会话；退出清会话并回 /login。
5. 演示密码只写 README，不保存到 localStorage。

**完成后应该看到**

- 错误不会清空用户已输入邮箱。
- 刷新受保护页仍保持登录。

**立即测试，不要留到晚上**

- [ ] 空表单不发请求
- [ ] 连续双击仅一个 login 请求
- [ ] 登录→刷新→退出完整通过

### 必做 3：增加角色路由、导航和 403（120 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/router/index.ts`
- `campus-growth-hub/src/views/ForbiddenView.vue`
- `campus-growth-hub/src/views/OrganizerActivitiesView.vue`
- `campus-growth-hub/src/App.vue`
- `campus-growth-hub/src/router/route-meta.d.ts`

**按顺序执行**

1. 给 /organizer/activities 设置 requiresAuth=true、roles=['organizer']。
2. 守卫顺序：未登录→/login；已登录但角色不符→/403；允许则继续。
3. 导航只向 organizer 显示管理入口；student 不显示，但隐藏导航不能替代守卫。
4. 分别测试学生直输管理 URL、组织者访问、刷新管理页、损坏会话。

**完成后应该看到**

- 学生进入 /403。
- 组织者进入管理占位页；刷新不丢权限。

**立即测试，不要留到晚上**

- [ ] npm run type-check
- [ ] npm run build
- [ ] student→/organizer/activities 得 403
- [ ] organizer→/organizer/activities 成功

### 必做 4：算法与记录（40 分钟）

**修改或创建这些文件**

- `campus-growth-hub/algorithms/day23-climb.ts`
- `campus-growth-hub/algorithms/day23-climb.test.ts`
- `campus-growth-hub/notes/day-23.md`

**按顺序执行**

1. 完成 LeetCode 70，写 dp[i] 的含义再编码。
2. 用 Vitest 写 n=1、2、5 三个用例。
3. 记录前端守卫不能替代服务端鉴权，提交 feat: complete role-based auth flow。

**完成后应该看到**

- 能解释初始状态与转移方程。

**立即测试，不要留到晚上**

- [ ] npm run test:run -- algorithms/day23-climb.test.ts
- [ ] n=1 返回1
- [ ] n=2 返回2
- [ ] n=5 返回8


## 有余力再做

- 根据 redirect 在登录页显示“登录后将返回个人中心”，不做注册。

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

/login

**检查操作**

1. 验证空表单、错误密码、学生登录、组织者登录、刷新与退出。
2. 学生直达 /organizer/activities。

**正确结果与判断依据**

- 请求不会重复提交。
- 角色路由和导航一致，学生得到 403。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
