import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import days01to14 from './specs/days-01-14.mjs'
import revisedDays01to07 from './specs/days-01-07-revised.mjs'
import reorderedDays10to17 from './specs/days-10-17-reordered.mjs'
import days15to28 from './specs/days-15-28.mjs'
import days29to40 from './specs/days-29-40.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const specs = { ...days01to14, ...revisedDays01to07, ...days15to28, ...days29to40, ...reorderedDays10to17 }

const metaRows = `
1~低压力基线、Git 与第一次排错~前端基础学习~诊断日
2~HTML 与 CSS：完成响应式活动页~前端基础学习~正常日
3~JavaScript 数据、对象与基础函数~前端基础学习~正常日
4~数组方法、纯函数与组合筛选~前端基础学习~正常日
5~DOM、事件与完整页面交互~前端基础学习~正常日
6~第一周巩固：无 AI 重做与固定故障~前端基础学习~巩固日
7~第一周轻量复盘与证据验收~前端基础学习~轻量日
8~异步、Promise 与接口状态~前端基础学习~正常日
9~事件循环、模块化与 DevTools~前端基础学习~正常日
10~TypeScript 基础：类型、函数与 unknown~TypeScript 基础学习~正常日
11~TypeScript 进阶基础：接口、联合类型与泛型~TypeScript 基础学习~正常日
12~Vue 3 + TypeScript：启动、模板与响应式状态~Vue 3 基础学习~正常日
13~computed、watch 与组合筛选~Vue 3 基础学习~正常日
14~组件拆分、Props、Emits 与插槽~Vue 3 基础学习~正常日
15~Vue 小应用、异步状态与独立整合~Vue 3 基础学习~巩固日
16~Vue 基础轻量复盘与无 AI 验收~Vue 3 基础学习~轻量日
17~在 Vue 中落地 TypeScript 数据与组件契约~Vue 3 基础学习~正常日
18~Vue Router：先完成页面导航骨架~Vue 生态与工程化~正常日
19~Pinia、会话状态与路由守卫~Vue 生态与工程化~正常日
20~fetch、MSW 与请求错误整合~Vue 生态与工程化~巩固日
21~第三周轻量复盘与工程验收~Vue 生态与工程化~轻量日
22~现有原型审计与后续范围冻结~综合项目实战~正常日
23~登录闭环、角色路由与权限边界~综合项目实战~正常日
24~活动列表：查询、分页与完整页面状态~综合项目实战~正常日
25~详情、收藏与报名表单~综合项目实战~正常日
26~个人中心、状态派生与跨页一致性~综合项目实战~正常日
27~第四周巩固：学生端无 AI 复现~综合项目实战~巩固日
28~第四周轻量复盘与项目中期验收~综合项目实战~轻量日
29~组织者活动管理与复杂表单~综合项目实战~正常日
30~固定提取 usePagination~综合项目实战~正常日
31~ECharts 数据看板与统计口径~综合项目实战~正常日
32~路由懒加载、搜索防抖与键盘回归~综合项目实战~正常日
33~Vitest：给关键逻辑建立安全网~综合项目实战~正常日
34~Vercel 部署与生产故障演练~综合项目实战~巩固日
35~第五周轻量复盘与项目终验~综合项目实战~轻量日
36~HTTP、缓存、浏览器与安全边界~面试准备与最终验收~正常日
37~JavaScript、Vue 与前端手写复现~面试准备与最终验收~正常日
38~固定故障排查与项目表达~面试准备与最终验收~正常日
39~固定题目的模拟技术面~面试准备与最终验收~正常日
40~最终对照验收与下一阶段交接~面试准备与最终验收~终验日
`.trim().split('\n').map((line) => {
  const [day, title, phase, type] = line.split('~')
  return { day: Number(day), title, phase, type }
})

if (metaRows.length !== 40 || Object.keys(specs).length !== 40) {
  throw new Error(`Expected 40 metadata rows and specs, got ${metaRows.length}/${Object.keys(specs).length}`)
}

const escapeText = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const inlineCode = (value) => `\`${String(value).replaceAll('`', '\\`')}\``

function renderList(items, ordered = false) {
  return items.map((item, index) => {
    const marker = ordered ? `${index + 1}.` : '-'
    const lines = escapeText(item).split('\n')
    return `${marker} ${lines[0]}${lines.length > 1 ? `<br>${lines.slice(1).join('<br>')}` : ''}`
  }).join('\n')
}

function renderCodeList(items) {
  return items.map((item) => `- ${inlineCode(item)}`).join('\n')
}

function displayDir(day, dir) {
  if (day <= 11) return '../frontend-40-day-learning-lab'
  return '../frontend-40-day-learning-lab/campus-growth-hub'
}

function displayFile(day, value) {
  const path = String(value)
  if (/^(https?:\/\/|\/)/.test(path)) return path
  const explicitlyWorkspaceRelative = path.startsWith('learning-lab/')
  const clean = explicitlyWorkspaceRelative ? path.slice('learning-lab/'.length) : path
  if (day < 12 || explicitlyWorkspaceRelative || clean.startsWith('campus-growth-hub/')) return clean
  return `campus-growth-hub/${clean}`
}

function enterCommands(day, spec) {
  const dir = displayDir(day, spec.start.dir)
  const dayArg = String(day).padStart(2, '0')
  const commands = spec.start.commands.filter((command) => {
    return !command.startsWith('mkdir ') &&
      !command.startsWith('touch ') &&
      !command.startsWith('cd learning-lab') &&
      !command.includes('learner:prepare') &&
      !/(^| )(npm|pnpm) run (dev|preview)( |$)/.test(command)
  })
  const initializeLab = day === 1 ? ['git init'] : []
  return [`pnpm learner:prepare ${dayArg}`, `cd ${dir}`, ...initializeLab, ...commands].join('\n')
}

function devCommands(spec) {
  return spec.start.commands.filter((command) => /(^| )(npm|pnpm) run (dev|preview)( |$)/.test(command))
}

function kindLabel(type, minutes) {
  const hours = minutes / 60
  if (type === '轻量日') return `轻量复盘日（${hours} 小时净学习 + 30 分钟验收）`
  if (type === '诊断日') return `低压力诊断日（${hours} 小时净学习 + 30 分钟验收）`
  if (type === '终验日') return `最终验收日（${hours} 小时净学习 + 30 分钟验收）`
  if (type === '巩固日') return `巩固实践日（${hours} 小时净学习 + 30 分钟验收）`
  return `正常学习日（${hours} 小时净学习 + 30 分钟验收）`
}

function renderTask(task, index, day) {
  return `### 必做 ${index + 1}：${escapeText(task.title)}（${task.duration} 分钟）

**修改或创建这些文件**

${renderCodeList(task.files.map((file) => displayFile(day, file)))}

**按顺序执行**

${renderList(task.steps, true)}

**完成后应该看到**

${renderList(task.expected)}

**立即测试，不要留到晚上**

${task.tests.map((test) => `- [ ] ${escapeText(test)}`).join('\n')}
`
}

function renderDay(meta) {
  const spec = specs[meta.day]
  const taskMinutes = spec.tasks.reduce((sum, task) => sum + Number(task.duration), 0)
  const allowed = meta.type === '轻量日' ? [120, 150, 180] : [360]
  if (!allowed.includes(taskMinutes)) {
    throw new Error(`Day ${meta.day}: invalid task time ${taskMinutes}; expected ${allowed.join('/')}`)
  }
  for (const [index, task] of spec.tasks.entries()) {
    for (const field of ['title', 'duration', 'files', 'steps', 'expected', 'tests']) {
      if (!(field in task)) throw new Error(`Day ${meta.day} task ${index + 1} missing ${field}`)
    }
  }

  const firstTask = spec.tasks[0]
  const commands = enterCommands(meta.day, spec)
  const servers = devCommands(spec)
  const taskBlocks = spec.tasks.map((task, index) => renderTask(task, index, meta.day)).join('\n')
  const optional = spec.optional?.length ? renderList(spec.optional) : '- 今天没有选做；必做完成后停止。'

  return `---
title: 第 ${meta.day} 天：${meta.title}
---

# 第 ${meta.day} 天：${meta.title}

::: tip 今天只认这个结果
**阶段：** ${meta.phase}<br>
**时间：** ${kindLabel(meta.type, taskMinutes)}<br>
**第一项成果：** ${escapeText(firstTask.expected[0])}
:::

> 正常日的 6 小时是净学习时间，最后统一审查的 30 分钟另计。当天的学习任务和自测全部由学习者独立完成，过程中不接受提示、故障注入或逐项检查。每学习 45～60 分钟离开屏幕休息 10～15 分钟；未完成内容不靠熬夜补。

## 开始今天的任务

### 1. 依次运行这些命令

\`\`\`bash
${commands}
\`\`\`

命令报错时先停在当前步骤，不要继续执行后面的任务。

${servers.length ? `### 1.1 在第二个终端启动页面\n\n保持上一个终端不动，在 \`${displayDir(meta.day, spec.start.dir)}\` 另开终端运行：\n\n\`\`\`bash\n${servers.join('\n')}\n\`\`\`\n\n开发服务器会持续运行，这是正常现象；后续命令仍在第一个终端执行。` : ''}

### 2. 打开这些文件或页面

${renderCodeList(spec.start.open.map((file) => displayFile(meta.day, file)))}

### 3. 开始前必须确认

${spec.start.before.map((item) => `- [ ] ${escapeText(item)}`).join('\n')}

### 4. 第一件具体工作

打开 ${inlineCode(displayFile(meta.day, firstTask.files[0]))}，开始执行“${escapeText(firstTask.title)}”的第 1 步。不要先浏览后面所有任务，也不要先让 AI 生成完整代码。

## 今日时间表

| 顺序 | 必做任务 | 净学习时间 |
| --- | --- | ---: |
${spec.tasks.map((task, index) => `| ${index + 1} | ${escapeText(task.title)} | ${task.duration} 分钟 |`).join('\n')}
| 统一审查 | 全部学习任务和自测结束后，执行页面底部答案卡 | 另计 30 分钟 |

学习任务合计：**${taskMinutes} 分钟**。只在全部必做通过后考虑选做。

## 今日必做

${taskBlocks}

## 有余力再做

${optional}

选做没有完成不进入欠账清单，也不影响当天通过。

## 卡住时只执行这四步

1. 复制完整错误信息，记录操作步骤、预期和实际结果。
2. 只检查当天列出的文件，不跨目录乱改；每次只验证一个猜测。
3. 独立排查 25 分钟仍无进展，再向 AI 提供错误、相关文件、已尝试方法和自己的猜测，只请求一个提示。
4. 单个问题累计 40 分钟仍未解决，保留失败代码和排查记录，先继续不依赖该问题的任务；等当天全部学习结束后，再把问题放入统一审查。

## 当天结束前固定检查

- [ ] 今天列出的固定测试全部执行，不用“页面看起来没问题”代替。
- [ ] Console 没有未解释的错误或警告；有意保留的错误已经写入记录。
- [ ] 执行 \`git diff\`，学习者可以解释每一处修改。
- [ ] 为每个必做任务标注：A 独立、B 提示后、C 参考局部示例、D 主要由 AI 生成、E 未完成。
- [ ] 只提交今天的文件，提交信息与当天成果一致。

## 当天全部学习结束后：资深前端统一审查（30 分钟）

::: warning 只有完成全部学习任务和自测后才能开始
检查者从这里才介入。学习过程中不提示、不提问、不注入故障，也不逐项验收。
:::

${escapeText(spec.review.route)}

**检查操作**

${renderList(spec.review.steps, true)}

**正确结果与判断依据**

${renderList(spec.review.expected)}

### 结果记录

- **通过：** 固定测试通过，学习者能指出代码位置并说明数据变化；现场修改只需少量提示。
- **部分通过：** 功能可运行，但固定边界失败或关键代码解释不清；只把具体失败项放入最近巩固日。
- **未通过：** 起始项目无法运行、主要实现不能解释或固定测试大面积失败；下一天先降低选做和新内容，不当晚加时。
`
}

for (const meta of metaRows) {
  const path = resolve(root, `docs/days/day-${String(meta.day).padStart(2, '0')}/index.md`)
  await mkdir(dirname(path), { recursive: true })
  await writeFile(path, renderDay(meta))
}

const preparation = `# 前期准备

这部分只在开始第 1 天之前完成一次，不计入 40 天学习时间。完成后，后续每天直接打开当天页面，从“第 1 步：运行当天命令”开始。

## 1. 认识四个固定位置

整个计划只涉及下面三个位置：

| 名称 | 实际位置 | 用途 |
| --- | --- | --- |
| 计划站点根目录 | \`frontend-40-day-plan-site\` | 查看计划、运行每日准备命令 |
| 学习工作区 | \`frontend-40-day-learning-lab\` | 承载全部学习成果和 Git 历史；第 1～9 天代码直接放在这里 |
| TypeScript 基础练习 | \`frontend-40-day-learning-lab/typescript-foundations\` | 第 10～11 天独立学习 TypeScript，不启动 Vue |
| Vue 正式项目 | \`frontend-40-day-learning-lab/campus-growth-hub\` | 第 12～40 天持续维护的唯一 Vue 3 + TypeScript 项目 |

学习工作区和计划站点是**同级文件夹**。\`frontend-40-day-learning-lab\` 不需要手动创建，第 1 天的准备命令会自动创建它。

这样安排是因为 TypeScript 练习和 Vue 正式项目都需要执行 \`npm install\`。它们各自拥有 package.json，不能在学习工作区根目录混装依赖，更不能放进计划站点内部。

::: warning 只保留一份工作区
不要在桌面、下载目录或其他位置再创建 \`frontend-40-day-learning-lab\`、\`typescript-foundations\` 或 \`campus-growth-hub\`。否则后面很容易修改错项目。
:::

## 2. 在正确位置打开终端

1. 在文件管理器或编辑器中找到 \`frontend-40-day-plan-site\` 文件夹。
2. 对这个文件夹使用“在终端中打开”，或者在 VS Code 中打开该文件夹后选择“终端 → 新建终端”。
3. 查看当前文件列表，确认能看到下面三个项目：

\`\`\`text
package.json
docs
scripts
\`\`\`

看不到它们就说明终端位置不对。不要运行后续命令，重新在 \`frontend-40-day-plan-site\` 文件夹打开终端。

## 3. 安装计划站点依赖

只在 \`frontend-40-day-plan-site\` 根目录运行：

\`\`\`bash
pnpm install
\`\`\`

完成标准：命令正常结束，没有红色的失败信息。警告先记录，不要自行删除文件或更换包管理器。

如果终端提示找不到 \`pnpm\`，先记录完整错误并暂停，不要改用 \`npm install\` 混装本站依赖；由项目维护者确认 Node.js 和 pnpm 环境后再继续。

## 4. 确认计划网站可以运行

在当前终端运行：

\`\`\`bash
pnpm dev
\`\`\`

终端会显示一个本地地址，通常类似 \`http://localhost:5173\`。按住 Command 点击地址，确认能看到“40 天前端成长计划”。

这个命令会持续运行，不会自动返回输入光标，这是正常现象。确认页面可打开后按 \`Control + C\` 停止。

## 5. 理解每日准备命令

每天页面都会给出类似命令：

\`\`\`bash
pnpm learner:prepare 01
\`\`\`

它的作用是：

- 自动创建当天需要的题目、故障代码、空白文件和参考材料；
- 把文件放入与计划站点同级的 \`frontend-40-day-learning-lab\`；
- 已经存在的文件一律保留，不覆盖学习者写过的内容；
- 某一天依赖前一天成果时，会明确报告缺少哪个文件。

每天都要回到 \`frontend-40-day-plan-site\` 根目录运行这条命令。不要在 \`frontend-40-day-learning-lab\` 或 \`campus-growth-hub\` 里面运行。

## 6. 学会读取页面中的文件路径

每日页面为了简洁，会省略开头的 \`frontend-40-day-learning-lab/\`。

| 页面写法 | 实际完整位置 |
| --- | --- |
| \`day-01/html/index.html\` | \`frontend-40-day-learning-lab/day-01/html/index.html\` |
| \`notes/day-05.md\` | \`frontend-40-day-learning-lab/notes/day-05.md\` |
| \`typescript-foundations/src/01-values.ts\` | \`frontend-40-day-learning-lab/typescript-foundations/src/01-values.ts\` |
| \`campus-growth-hub/src/App.vue\` | \`frontend-40-day-learning-lab/campus-growth-hub/src/App.vue\` |

第 10～11 天代码位于 \`typescript-foundations\`，从第 12 天开始绝大多数代码位于 \`campus-growth-hub\`；每日准备命令始终从计划站点根目录运行。

## 7. 理解“终端 A”和“终端 B”

开发服务器会持续占用一个终端，因此部分任务要求两个终端：

- **终端 A：** 只运行 \`npm run dev\` 或页面指定的开发服务器命令，保持运行。
- **终端 B：** 运行测试、构建、Git 和其他命令。

不要在终端 A 的服务器还在运行时继续输入其他命令。需要停止服务器时按 \`Control + C\`。

## 8. 第 1 天会建立独立 Git 仓库

第 1 天页面会执行：

\`\`\`bash
cd ../frontend-40-day-learning-lab
git init
\`\`\`

这会让学习代码拥有自己的 Git 记录，不和学习计划网站的代码混在一起。后续所有学习成果提交都属于 \`frontend-40-day-learning-lab\` 仓库。

## 9. 每天固定的开始顺序

完成本页后，每天只重复下面的流程：

1. 打开当天计划页面。
2. 在 \`frontend-40-day-plan-site\` 根目录新建终端。
3. 复制当天第 1 步的命令并按顺序运行。
4. 打开第 2 步列出的文件。
5. 确认第 3 步的前置条件。
6. 只做第 4 步指定的第一项工作。

## 10. 前期准备完成检查

- [ ] 知道 \`frontend-40-day-plan-site\` 是计划站点，不是学习代码目录。
- [ ] 知道学习成果只放在同级的 \`frontend-40-day-learning-lab\`。
- [ ] 根目录能看到 \`package.json\`、\`docs\`、\`scripts\`。
- [ ] \`pnpm install\` 已成功完成。
- [ ] \`pnpm dev\` 能打开计划网站，并已用 \`Control + C\` 停止。
- [ ] 能解释为什么每日准备命令必须在计划站点根目录运行。
- [ ] 能说出终端 A 和终端 B 的用途。

全部勾选后，再进入[第 1 天：低压力基线诊断](/days/day-01/)。
`

await writeFile(resolve(root, 'docs/preparation.md'), preparation)

const overviewRows = metaRows.map((meta) => {
  const minutes = specs[meta.day].tasks.reduce((sum, task) => sum + Number(task.duration), 0)
  return `| [第 ${meta.day} 天](/days/day-${String(meta.day).padStart(2, '0')}/) | ${meta.title} | ${meta.phase} | ${minutes} 分钟 + 验收 |`
}).join('\n')

const overview = `# 40 天总览

这份计划面向基础知识留存较少、Vue 缺乏完整实践、遇错容易依赖 AI 的学习者。每一页都给出真实工作目录、命令、文件、固定输入、预期结果和检查者答案卡。

## 使用方式

1. 开始第 1 天前先完成[前期准备](/preparation)，这部分只做一次。
2. 每天只打开当天页面，在本计划站点根目录新开终端，再执行当天命令。
3. 必做任务按顺序完成；固定测试通过后再进入下一项。
4. 正常日为 6 小时净学习，轻量日为 2～3 小时，资深前端验收 30 分钟另计。
5. 选做不形成欠账；未通过项进入最近巩固日，不靠熬夜补。

## 阶段安排

| 阶段 | 天数 | 核心结果 |
| --- | --- | --- |
| 前端基础学习 | 1～9 | HTML/CSS、JavaScript 数据处理、DOM、异步、模块化与排错 |
| TypeScript 基础学习 | 10～11 | 基础类型、函数、unknown、接口、判别联合与项目需要的泛型 |
| Vue 3 基础学习 | 12～17 | 从第一天使用 TypeScript，完成响应式、组件通信、异步状态和类型化数据流 |
| Vue 生态与工程化 | 18～21 | Router、Pinia、fetch+MSW 与工程验收 |
| 综合项目实战 | 22～35 | 冻结范围后完成学生端、组织者端、测试、性能和部署 |
| 面试准备与最终验收 | 36～40 | HTTP/安全、固定手写、故障排查、固定模拟面试和对照终验 |

## 接下来从哪里进入

- 第一次使用：先打开[前期准备](/preparation)。
- 查看每天安排：直接在左侧选择对应的学习阶段，再打开当天页面。
- 已经开始执行：直接回到对应的每日页面。

## 第 40 天后

第 40 天结束后再单独准备简历和投递。40 天内只保存演示地址、截图、架构图、测试结果、关键难点和 Git 记录，不占用专门的简历制作时间。
`

await writeFile(resolve(root, 'docs/overview.md'), overview)

const home = `---
layout: home

hero:
  name: 40 天前端成长计划
  text: 打开当天页面就知道第一步做什么
  tagline: 精确到工作目录、命令、文件、固定数据、页面结果与资深前端答案卡。
  actions:
    - theme: brand
      text: 先完成前期准备
      link: /preparation
    - theme: alt
      text: 开始第 1 天诊断
      link: /days/day-01/
    - theme: alt
      text: 查看 40 天总览
      link: /overview

features:
  - title: 不再猜从哪里开始
    details: 每天先列目录、命令、文件和开始前状态；缺少前置结果时先修复，不盲目继续。
  - title: 每个任务都有正确结果
    details: 固定测试输入、页面文案、状态变化和错误现象，完成不再依靠主观感觉。
  - title: 验收可以直接照着做
    details: 每页附资深前端答案卡，写清操作路线和判断依据；失败项进入巩固日，不熬夜补。
---
`

await writeFile(resolve(root, 'docs/index.md'), home)

const sidebarGroups = [
  { text: '前端基础学习', from: 1, to: 9 },
  { text: 'TypeScript 基础学习', from: 10, to: 11 },
  { text: 'Vue 3 基础学习', from: 12, to: 17 },
  { text: 'Vue 生态与工程化', from: 18, to: 21 },
  { text: '综合项目实战', from: 22, to: 35 },
  { text: '面试准备与最终验收', from: 36, to: 40 },
]

const sidebar = sidebarGroups.map((group) => {
  const items = metaRows
    .filter((meta) => meta.day >= group.from && meta.day <= group.to)
    .map((meta) => `          { text: ${JSON.stringify(`第 ${meta.day} 天：${meta.title}`)}, link: "/days/day-${String(meta.day).padStart(2, '0')}/" },`)
    .join('\n')
  return `      { text: ${JSON.stringify(group.text)}, collapsed: false, items: [\n${items}\n      ]},`
}).join('\n')
const config = `import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '40 天前端成长计划',
  description: '可直接执行的前端实习准备与 Vue 3 项目计划',
  base: process.env.BASE_PATH || '/',
  lang: 'zh-CN',
  cleanUrls: true,
  ignoreDeadLinks: [/^http:\\/\\/localhost:/, /^http:\\/\\/127\\.0\\.0\\.1:/],
  themeConfig: {
    logo: '/logo.svg',
    nav: [],
    sidebar: [
      { text: '总览', link: '/overview' },
      { text: '前期准备', link: '/preparation' },
${sidebar}
    ],
    outline: { level: [2, 3], label: '本页目录' },
    search: { provider: 'local' },
    lastUpdated: { text: '最后更新' },
  },
})
`

await writeFile(resolve(root, 'docs/.vitepress/config.mts'), config)
console.log('Generated 40 executable day pages, overview, home and navigation.')
