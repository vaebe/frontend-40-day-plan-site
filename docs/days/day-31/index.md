---
title: 第 31 天：ECharts 数据看板与统计口径
---

# 第 31 天：ECharts 数据看板与统计口径

::: tip 今天只认这个结果
**阶段：** 综合项目<br>
**时间：** 正常学习日（6 小时净学习 + 30 分钟验收）<br>
**第一项成果：** 总报名=13、已确认=8、转化率=61.5%。
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

```bash
pnpm learner:prepare 31
cd ../frontend-40-day-learning-lab/campus-growth-hub
npm install
npm install echarts
```

命令报错时先停在当前步骤，不要继续执行后面的任务。

### 1.1 在第二个终端启动页面

保持上一个终端不动，在 `../frontend-40-day-learning-lab/campus-growth-hub` 另开终端运行：

```bash
npm run dev
```

开发服务器会持续运行，这是正常现象；后续命令仍在第一个终端执行。

### 2. 打开这些文件或页面

- `http://localhost:5173/organizer/dashboard`
- `campus-growth-hub/src/router/index.ts`
- `campus-growth-hub/src/views/OrganizerDashboardView.vue`
- `campus-growth-hub/src/components/charts/BaseChart.vue`
- `campus-growth-hub/src/utils/statistics.ts`
- `campus-growth-hub/src/mocks/analytics.ts`
- `campus-growth-hub/notes/day-31.md`

### 3. 开始前必须确认

- [ ] Day 23 只建立了组织者活动管理路由；/organizer/dashboard 尚不存在，今天必须创建页面、路由与角色元信息。
- [ ] Day 29 活动数据可读取；今天使用固定 analytics mock，不接真实后端。

### 4. 第一件具体工作

打开 `campus-growth-hub/src/mocks/analytics.ts`，开始执行“固定统计口径和数据答案”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
| 1 | 固定统计口径和数据答案 | 60 分钟 |
| 2 | 完成看板 MVP | 180 分钟 |
| 3 | 二分查找重做 | 45 分钟 |
| 4 | 回归、提交与记录 | 75 分钟 |
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**360 分钟**。只在全部必做通过后考虑选做。

## 今日必做

### 必做 1：固定统计口径和数据答案（60 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/mocks/analytics.ts`
- `campus-growth-hub/src/utils/statistics.ts`
- `campus-growth-hub/src/utils/__tests__/statistics.spec.ts`
- `campus-growth-hub/notes/day-31.md`

**按顺序执行**

1. 固定最近 7 天报名数为 [1,2,0,3,4,2,1]。
2. 固定活动类型为 lecture、lecture、contest、volunteer。
3. 固定总报名 13、已确认 8，转化率定义为 confirmed / total，保留 1 位小数。
4. 先在 statistics.spec.ts 写固定答案，再实现纯函数，最后连接图表。

**完成后应该看到**

- 总报名=13、已确认=8、转化率=61.5%。
- 类型分布为 lecture=2、contest=1、volunteer=1。

**立即测试，不要留到晚上**

- [ ] 空数组返回 0 和空分布，不出现 NaN。
- [ ] confirmed=0,total=0 时转化率显示 0%。

### 必做 2：完成看板 MVP（180 分钟）

**修改或创建这些文件**

- `campus-growth-hub/src/router/index.ts`
- `campus-growth-hub/src/views/OrganizerDashboardView.vue`
- `campus-growth-hub/src/components/charts/BaseChart.vue`
- `campus-growth-hub/src/utils/statistics.ts`

**按顺序执行**

1. 先创建 OrganizerDashboardView.vue，并在 src/router/index.ts 增加 /organizer/dashboard、requiresAuth=true、roles=["organizer"]。
2. 先显示三个统计卡：总报名、已确认、转化率。
3. 再实现最近 7 天报名折线图和活动类型饼图。
4. BaseChart 在 mounted 初始化，在 resize 时重绘，在 beforeUnmount dispose。
5. 无数据时不创建空图，显示“暂无统计数据”。

**完成后应该看到**

- 页面显示 13、8、61.5%。
- 折线图有 7 个点，饼图有 3 个分类。
- 切换路由再返回不出现重复实例警告。

**立即测试，不要留到晚上**

- [ ] 将 mock 切换为空数组，预期统计卡为 0 且显示空状态。
- [ ] 调整浏览器宽度，图表不溢出容器。

### 必做 3：二分查找重做（45 分钟）

**修改或创建这些文件**

- `algorithms/day-31-binary-search.ts`

**按顺序执行**

1. 从空文件限时完成，并写循环不变量。

**完成后应该看到**

- 时间复杂度 O(log n)。

**立即测试，不要留到晚上**

- [ ] [-1,0,3,5,9,12],9 -&gt; 4。
- [ ] [-1,0,3,5,9,12],2 -&gt; -1。

### 必做 4：回归、提交与记录（75 分钟）

**修改或创建这些文件**

- `campus-growth-hub/notes/day-31.md`

**按顺序执行**

1. npm run type-check
2. npm run test:run
3. npm run build
4. 提交 feat: add organizer analytics dashboard。

**完成后应该看到**

- 统计纯函数测试通过，构建无 ECharts 生命周期警告。

**立即测试，不要留到晚上**

- [ ] 刷新看板、缩放窗口、切换路由、空数据四条路径均通过。


## 有余力再做

- 把固定 7 天切换为 14 天；只改数据范围，不增加日期组件。

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

/organizer/dashboard

**检查操作**

1. 核对三个统计卡。
2. 核对折线图与饼图。
3. 切成空数据。
4. 调整窗口并切换路由。

**正确结果与判断依据**

- 固定数值与图表数据一致。
- 空数据不报错。
- 图表能 resize 且离开页面时销毁。

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
