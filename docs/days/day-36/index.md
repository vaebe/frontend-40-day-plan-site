---
title: 第 36 天：HTTP、缓存、浏览器与安全边界
---

# 第 36 天：HTTP、缓存、浏览器与安全边界

::: tip 今天只认这个结果
**阶段：** 面试基础与终验<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** Network 中可见 GET /mock/http-demo.json 且 status=200。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 36
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

- `campus-growth-hub/public/mock/http-demo.json`
- `campus-growth-hub/src/api/request.ts`
- `campus-growth-hub/src/mocks/handlers.ts`
- `campus-growth-hub/src/stores/auth.ts`
- `campus-growth-hub/docs/web-fundamentals.md`
- `campus-growth-hub/notes/day-36.md`

### 3. 开始前必须确认

- [ ] 主项目唯一请求方案是 fetch + MSW；不得新建 src/services/request.ts 或第二套 mock。
- [ ] 今天用 fetch("/mock/http-demo.json") 观察静态真实 GET，同时用 MSW handler 的 scenario 参数演练业务错误。
- [ ] 前端角色守卫不等于后端鉴权，文档必须明确。

### 4. 第一件具体工作

打开 `campus-growth-hub/public/mock/http-demo.json`，开始执行“建立 HTTP 与浏览器主线”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 建立 HTTP 与浏览器主线 | 105 分钟 |
| 2 | 完成安全边界说明与一个可验证修正 | 135 分钟 |
| 3 | 环形链表重做 | 45 分钟 |
| 4 | 回归、提交与记录 | 75 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：建立 HTTP 与浏览器主线（105 分钟）

**修改或创建这些文件**

- `campus-growth-hub/public/mock/http-demo.json`
- `campus-growth-hub/docs/web-fundamentals.md`

**按顺序执行**

1. 创建固定 JSON：{"message":"network-ok","version":1}，在页面或 Console 使用 fetch 读取。
2. 在 Network 记录 URL、method、status、request headers、response headers、initiator 和 timing。
3. 回答六题：URL 到页面主线；GET/POST；200/401/404/500；强缓存/协商缓存；CORS；Cookie 与 token。

**完成后应该看到**

- Network 中可见 GET /mock/http-demo.json 且 status=200。
- 六题每题 3-5 句并绑定一个项目例子。

**立即测试，不要留到晚上**

- [ ] 访问不存在的 /mock/missing.json，预期 404。
- [ ] 重复请求并说明 DevTools 中实际缓存现象，不编造响应头。

### 必做 2：完成安全边界说明与一个可验证修正（135 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/stores/auth.ts`
- `campus-growth-hub/src/api/request.ts`
- `campus-growth-hub/src/mocks/handlers.ts`
- `campus-growth-hub/docs/web-fundamentals.md`

**按顺序执行**

1. 检查 localStorage 内容；确认不保存密码，只保存演示所需最小会话字段。
2. 退出登录时清除 token、role 和 user，并跳转登录页。
3. 在 src/mocks/handlers.ts 为仅开发使用的 scenario=401 和 scenario=500 返回固定状态；src/api/request.ts 只负责把状态转成统一错误。
4. 文档回答 XSS 与 CSRF 的攻击目标、常见前提和基本防护，不声称当前 mock 项目已实现后端安全。

**完成后应该看到**

- 退出后 localStorage 无会话字段。
- scenario=401 时页面显示登录失效并回登录页；scenario=500 时显示可重试错误。

**立即测试，不要留到晚上**

- [ ] 密码字段从未写入 localStorage。
- [ ] 401 与 500 的 UI 行为不同。

### 必做 3：环形链表重做（45 分钟）

**修改或创建这些文件**

- `algorithms/day-36-linked-list-cycle.ts`

**按顺序执行**

1. 画快慢指针相遇过程后编码。

**完成后应该看到**

- 时间 O(n)、空间 O(1)。

**立即测试，不要留到晚上**

- [ ] [3,2,0,-4], pos=1 -&gt; true。
- [ ] [1], pos=-1 -&gt; false。

### 必做 4：回归、提交与记录（75 分钟）

**修改或创建这些文件**

- `campus-growth-hub/docs/web-fundamentals.md`
- `campus-growth-hub/notes/day-36.md`

**按顺序执行**

1. npm run type-check
2. npm run test:run
3. npm run build
4. 提交 docs: connect web fundamentals to project。

**完成后应该看到**

- 文档能区分真实 Network 证据、mock 行为和真实后端职责。

**立即测试，不要留到晚上**

- [ ] 现场切换 200、401、500，准确解释页面应有行为。


## 有余力再做

- 补充 SameSite、HttpOnly、Secure 的用途，但不改造为真实 Cookie 登录。

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

/activities 与 DevTools Network

**检查操作**

1. 观察固定 JSON 请求。
2. 访问 404 资源。
3. 切换 mock 401 与 500。
4. 退出登录后检查 localStorage。

**正确结果与判断依据**

- 能从 Network 找到状态码和响应。
- 401、500、退出登录行为符合规格。
- 能说明 CORS 在浏览器侧触发但由服务端响应头决定是否放行。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
