---
title: 第 34 天：Vercel 部署与生产故障演练
---

# 第 34 天：Vercel 部署与生产故障演练

::: tip 今天只认这个结果
**阶段：** 综合项目<br>
**时间：** 巩固实践日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 不了解仓库的人只看 README 可以启动项目。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 34
cd ../frontend-40-day-learning-lab/campus-growth-hub
npm ci
npm run type-check
npm run test:run
npm run build
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/README.md`
- `campus-growth-hub/vercel.json`
- `campus-growth-hub/.env.example`
- `campus-growth-hub/dist/`
- `campus-growth-hub/notes/day-34.md`

### 3. 开始前必须确认

- [ ] package-lock.json 已提交，因此使用 npm ci 验证干净安装。
- [ ] 默认部署平台固定为 Vercel；项目使用 history 路由。开始前确认有可登录的 Vercel 账号和可用网络。
- [ ] 若账号或网络不可用，Day 34 与 Day 35 统一采用本地 npm run preview 作为降级验收，不把公网 URL 作为通过门槛。
- [ ] 所有业务数据均为 mock/localStorage，README 必须明确这不是后端鉴权和真实持久化。

### 4. 第一件具体工作

打开 `campus-growth-hub/README.md`，开始执行“验证可重复安装和本地生产版本”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 验证可重复安装和本地生产版本 | 60 分钟 |
| 2 | 部署到 Vercel | 120 分钟 |
| 3 | 生产回归与一次路径故障演练 | 105 分钟 |
| 4 | 旧算法与发布记录 | 75 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：验证可重复安装和本地生产版本（60 分钟）

**修改或创建这些文件**

- `campus-growth-hub/README.md`
- `campus-growth-hub/.env.example`
- `campus-growth-hub/package-lock.json`

**按顺序执行**

1. 按 npm ci、type-check、test:run、build 顺序执行并记录结果。
2. 在单独终端运行 npm run preview -- --host 127.0.0.1，记录地址；回归完成后按 Ctrl+C 停止，不占用后续部署终端。
3. README 写明 Node 版本、安装、开发、测试、构建、预览命令及两类演示账号。

**完成后应该看到**

- 不了解仓库的人只看 README 可以启动项目。

**立即测试，不要留到晚上**

- [ ] 缺少 .env.local 时仍能使用默认 mock；若不能，README 必须写明复制 .env.example 的步骤。

### 必做 2：部署到 Vercel（120 分钟）

**修改或创建这些文件**

- `campus-growth-hub/vercel.json`
- `campus-growth-hub/README.md`
- `campus-growth-hub/docs/screenshots/`

**按顺序执行**

1. 创建 vercel.json，使用 SPA fallback 把非静态文件路由重写到 /index.html。
2. 执行 npx vercel --prod，并把最终 https URL 写入 README。
3. 保存学生列表、报名成功、组织者管理、看板四张截图。

**完成后应该看到**

- 公网 URL 可访问；直接打开深链接不会 404。

**立即测试，不要留到晚上**

- [ ] 直接打开 /activities/a1。
- [ ] 刷新 /organizer/dashboard。
- [ ] 访问 /activities/not-found。

### 必做 3：生产回归与一次路径故障演练（105 分钟）

**修改或创建这些文件**

- `campus-growth-hub/vercel.json`
- `campus-growth-hub/notes/day-34.md`

**按顺序执行**

1. 按学生登录、搜索、详情、收藏、报名、个人中心完整回归。
2. 按组织者登录、新增、编辑、下架、看板完整回归。
3. 由 learner:prepare 创建 practice/day-34/deploy-fault/vercel.json 临时副本；只在该副本中移除 SPA rewrite 并记录差异，不直接破坏根目录 vercel.json。
4. 记录复现、证据、原因和修复，不在主分支保留错误配置。

**完成后应该看到**

- 生产版两条闭环通过；故障能够稳定复现并恢复。

**立即测试，不要留到晚上**

- [ ] Console 无未解释错误。
- [ ] 退出登录后受限路由回到登录页。

### 必做 4：旧算法与发布记录（75 分钟）

**修改或创建这些文件**

- `algorithms/day-34-review.ts`
- `campus-growth-hub/notes/day-34.md`

**按顺序执行**

1. 固定重做 LeetCode 155 和 739，各最多 25 分钟。
2. 提交 chore: prepare reproducible project release。

**完成后应该看到**

- 有部署 URL、命令日志、故障记录和两题复杂度。

**立即测试，不要留到晚上**

- [ ] 最小栈固定序列通过。
- [ ] 每日温度固定样例通过。


## 有余力再做

- 若 Vercel 因网络或账号不可用，保留成功的本地 preview 和完整部署日志，不临时切换多个平台；这仍可判定 Day 34 通过。

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

README 中的生产 URL；无账号/网络时使用本地 preview URL

**检查操作**

1. 从无登录状态打开已记录 URL。
2. 直接打开 /activities/a1 并刷新。
3. 演示两类账号。
4. 说明一次 404 的复现与修复。

**正确结果与判断依据**

- 使用 Vercel 时深链接不 404；使用本地 fallback 时说明尚未验证线上 rewrite。
- README 命令可复制执行。
- 清楚说明 mock 与真实后端的边界。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
