---
title: 第 11 天：TypeScript 进阶基础：接口、联合类型与泛型
---

# 第 11 天：TypeScript 进阶基础：接口、联合类型与泛型

::: tip 今天只认这个结果
**阶段：** TypeScript 基础学习<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** role=admin 会报错。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 11
cd ../frontend-40-day-learning-lab
npm --prefix typescript-foundations run type-check
git status
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `typescript-foundations/src/04-models.ts`
- `typescript-foundations/src/05-request-state.ts`
- `typescript-foundations/src/06-generics.ts`
- `typescript-foundations/notes/day-11.md`

### 3. 开始前必须确认

- [ ] Day 10 的 type-check 和固定测试已经通过。
- [ ] 今天仍只使用 typescript-foundations，不创建 Vue 项目。
- [ ] 先自己写类型和分支，再使用编辑器错误信息修正；不复制完整答案。

### 4. 第一件具体工作

打开 `typescript-foundations/src/04-models.ts`，开始执行“对象类型、interface 与可选字段”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 对象类型、interface 与可选字段 | 100 分钟 |
| 2 | 联合类型、判别字段与穷尽检查 | 120 分钟 |
| 3 | 只学习项目会用到的泛型 | 110 分钟 |
| 4 | 30 分钟算法：有效括号 TypeScript 版 | 30 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：对象类型、interface 与可选字段（100 分钟）

**修改或创建这些文件**

- `typescript-foundations/src/04-models.ts`
- `typescript-foundations/src/04-models.test.ts`

**按顺序执行**

1. 定义 User、ActivityBase；User.role 只允许 student 或 organizer。
2. 把活动建模为 online/offline 两种：online 必须有 meetingUrl，offline 必须有 location。
3. 分别创建一条线上和线下活动；再故意漏掉各自必填字段，保存错误后修复。
4. 实现 getActivityPlace：线上返回“线上”，线下返回 location；不得同时用可选 location 和 meetingUrl 糊成一个对象。

**完成后应该看到**

- role=admin 会报错。
- 线上和线下活动不能缺少各自字段。

**立即测试，不要留到晚上**

- [ ] npm --prefix typescript-foundations run test:models
- [ ] 临时删除 meetingUrl 时 type-check 失败

### 必做 2：联合类型、判别字段与穷尽检查（120 分钟）

**修改或创建这些文件**

- `typescript-foundations/src/05-request-state.ts`
- `typescript-foundations/src/05-request-state.test.ts`

**按顺序执行**

1. 定义 RequestState&lt;T&gt;：idle、loading、success、empty、error 五个分支，每个分支只保留自己需要的字段。
2. 实现 describeState(state)：使用 switch(state.status) 返回固定文案。
3. 在 error 分支故意读取 data，确认类型错误；在 success 分支读取 message，同样保存后修复。
4. 增加 assertNever；临时新增 cancelled 分支但不处理，确认穷尽检查失败，再补分支或撤回。

**完成后应该看到**

- 五态互斥，不存在既 success 又 error 的对象。
- 新增状态时遗漏分支会被发现。

**立即测试，不要留到晚上**

- [ ] npm --prefix typescript-foundations run test:state
- [ ] success 返回活动数量，error 返回错误文案

### 必做 3：只学习项目会用到的泛型（110 分钟）

**修改或创建这些文件**

- `typescript-foundations/src/06-generics.ts`
- `typescript-foundations/src/06-generics.test.ts`
- `typescript-foundations/notes/day-11.md`

**按顺序执行**

1. 定义 ApiResult&lt;T&gt; 与 PaginatedResult&lt;T&gt;，用 Activity[] 和 User 分别替换 T，观察结果类型。
2. 实现 unwrap&lt;T&gt;(result: ApiResult&lt;T&gt;): T 和 firstOrUndefined&lt;T&gt;(list:T[]):T|undefined。
3. 故意把 items 拼成 item、把 total 写成字符串，确认结构错误能被发现。
4. 在笔记写清 T 代表“由调用处决定的占位类型”；今天不学习条件类型、映射类型和类型体操。

**完成后应该看到**

- 能解释同一个 ApiResult 为什么可装不同 data。
- 分页字段拼错会被捕获。

**立即测试，不要留到晚上**

- [ ] npm --prefix typescript-foundations run test:generics
- [ ] 空数组 firstOrUndefined 返回 undefined

### 必做 4：30 分钟算法：有效括号 TypeScript 版（30 分钟）

**修改或创建这些文件**

- `typescript-foundations/algorithms/day-11-valid-parentheses.ts`
- `typescript-foundations/notes/day-11.md`

**按顺序执行**

1. 算法严格计时 30 分钟：先写样例与思路，20 分钟仍无进展只看一个提示；结束时保存代码、边界、复杂度和 AI 辅助等级。
2. 函数签名固定为 isValid(input:string):boolean；使用 string[] 模拟栈。
3. 验证 ()[]{} 为 true、([)] 为 false、空字符串为 true。

**完成后应该看到**

- 栈和映射都有明确类型。

**立即测试，不要留到晚上**

- [ ] npm --prefix typescript-foundations run type-check


## 有余力再做

- 只复写最薄弱的一段，不提前学习 Vue 类型写法。

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

models → request-state → generics → notes。

**检查操作**

1. 运行全部 TypeScript 测试。
2. 用线上/线下活动解释判别联合。
3. 现场新增一种状态并观察穷尽检查。

**正确结果与判断依据**

- 所有测试通过。
- 能说明 interface、联合类型和泛型各自解决什么问题。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
