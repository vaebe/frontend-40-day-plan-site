---
title: 第 33 天：Vitest：给关键逻辑建立安全网
---

# 第 33 天：Vitest：给关键逻辑建立安全网

::: tip 今天只认这个结果
**阶段：** 综合项目实战<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 终端显示至少 1 个测试通过。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 33
cd ../frontend-40-day-learning-lab/campus-growth-hub
npm install
npm run test:run -- --passWithNoTests
```

命令报错时先停在当前步骤，不要继续执行后面的任务。



### 2. 打开这些文件或页面

- `campus-growth-hub/package.json`
- `campus-growth-hub/vite.config.ts`
- `campus-growth-hub/src/utils/filterActivities.ts`
- `campus-growth-hub/src/utils/validateEnrollment.ts`
- `campus-growth-hub/src/stores/bookmarks.ts`
- `campus-growth-hub/notes/day-33.md`

### 3. 开始前必须确认

- [ ] 筛选和报名校验已提取为纯函数；若仍在组件中，今天先做最小提取，不测试组件内部实现。
- [ ] bookmark store 已能收藏和取消收藏。
- [ ] Vitest、jsdom、@vue/test-utils、@pinia/testing 以及 test/test:run 脚本已在 Day 29 前建立；今天不重复安装。

### 4. 第一件具体工作

打开 `campus-growth-hub/package.json`，开始执行“核对 Vitest 配置并跑通第一个业务测试”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 核对 Vitest 配置并跑通第一个业务测试 | 90 分钟 |
| 2 | 覆盖筛选、报名校验和 store action | 180 分钟 |
| 3 | 有效括号重做 | 45 分钟 |
| 4 | 测试、构建与提交 | 45 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：核对 Vitest 配置并跑通第一个业务测试（90 分钟）

**修改或创建这些文件**

- `campus-growth-hub/package.json`
- `campus-growth-hub/vite.config.ts`
- `campus-growth-hub/src/utils/__tests__/filterActivities.spec.ts`

**按顺序执行**

1. 核对 package.json 已有 "test": "vitest" 和 "test:run": "vitest run"，不得新建第二套脚本名。
2. 核对 vite.config.ts 从 vitest/config 导入 defineConfig，并设置 test.environment="jsdom"、test.globals=true。
3. 先写一个 filterActivities 正常用例并执行 npm run test:run。

**完成后应该看到**

- 终端显示至少 1 个测试通过。

**立即测试，不要留到晚上**

- [ ] [{title:"Vue 入门",type:"lecture"}], keyword="vue" -&gt; 1 条。

### 必做 2：覆盖筛选、报名校验和 store action（180 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/utils/__tests__/filterActivities.spec.ts`
- `campus-growth-hub/src/utils/__tests__/validateEnrollment.spec.ts`
- `campus-growth-hub/src/stores/__tests__/bookmarks.spec.ts`

**按顺序执行**

1. 筛选测试覆盖大小写、空关键词和无结果。
2. 报名校验覆盖有效手机号、错误手机号和活动已满。
3. 每个 store 用例前 setActivePinia(createPinia())；覆盖收藏和再次点击取消收藏。
4. 修改一个断言确认测试会失败，再恢复实现或断言。

**完成后应该看到**

- 至少 7 个测试通过；失败测试确实能阻止错误规则。

**立即测试，不要留到晚上**

- [ ] keyword="VUE" 仍匹配“Vue 入门”；keyword="" 返回全部。
- [ ] phone=13800138000 且未满 -&gt; valid=true；phone=123 -&gt; valid=false。
- [ ] capacity=20,enrolledCount=20 -&gt; valid=false，错误含“名额已满”。
- [ ] toggleBookmark("a1") 两次后收藏列表为空。

### 必做 3：有效括号重做（45 分钟）

**修改或创建这些文件**

- `algorithms/day-33-valid-parentheses.ts`

**按顺序执行**

1. 从空文件完成并写出栈中保存的内容。

**完成后应该看到**

- 能处理奇数长度和错误闭合顺序。

**立即测试，不要留到晚上**

- [ ] "()[]{}" -&gt; true。
- [ ] "([)]" -&gt; false。

### 必做 4：测试、构建与提交（45 分钟）

**修改或创建这些文件**

- `campus-growth-hub/notes/day-33.md`

**按顺序执行**

1. npm run type-check
2. npm run test:run
3. npm run build
4. 提交 test: cover filters enrollment and bookmarks。

**完成后应该看到**

- 测试、类型检查、构建三项均成功退出。

**立即测试，不要留到晚上**

- [ ] 现场将手机号规则改为 11 位数字后，同步修改测试并再次通过。


## 有余力再做

- 为 usePagination 增加一个纯逻辑测试。

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

终端与 src/**/__tests__

**检查操作**

1. 运行 npm run test:run。
2. 随机打开一条测试解释 arrange、act、assert。
3. 把手机号有效样例改成 123，确认测试失败后恢复。

**正确结果与判断依据**

- 至少 7 个测试通过。
- 错误规则会造成红色失败而不是仍然全绿。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
