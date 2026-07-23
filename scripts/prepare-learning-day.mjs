import { access, mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const siteRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const labRoot = process.env.LEARNER_LAB_ROOT
  ? resolve(process.env.LEARNER_LAB_ROOT)
  : resolve(siteRoot, '../frontend-40-day-learning-lab')
const dayArgument = process.argv.slice(2).find((argument) => argument !== '--')
const day = Number(dayArgument)

if (!Number.isInteger(day) || day < 1 || day > 40) {
  console.error('用法：pnpm learner:prepare 01（01 到 40）')
  process.exit(1)
}

const created = []
const kept = []

async function put(path, content = '') {
  const target = resolve(labRoot, path)
  if (!target.startsWith(`${labRoot}/`)) throw new Error(`非法路径：${path}`)
  await mkdir(dirname(target), { recursive: true })
  try {
    await access(target)
    kept.push(path)
  } catch {
    await writeFile(target, content, 'utf8')
    created.push(path)
  }
}

async function requireFiles(paths) {
  const missing = []
  for (const path of paths) {
    try { await access(resolve(labRoot, path)) } catch { missing.push(path) }
  }
  if (missing.length) {
    throw new Error(`前序成果缺失，请先完成上一天：\n- ${missing.join('\n- ')}`)
  }
}

const note = (n) => `# Day ${String(n).padStart(2, '0')} 学习记录

## 开始前
- 已知道：
- 不确定：
- 完成标准：

## 排错记录
| 复现步骤 | 预期 | 实际 | 猜测 | 验证 |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## 结束复盘
- 独立完成：
- AI 只给了什么提示：
- 明天要复习：
`

await mkdir(labRoot, { recursive: true })
if (day === 2) await requireFiles(['campus-activity-board/README.md', 'campus-activity-board/index.html', 'campus-activity-board/styles.css', 'campus-activity-board/src/app.js', 'campus-activity-board/src/data/activities.js'])
if (day === 3) await requireFiles(['campus-activity-board/index.html', 'campus-activity-board/styles.css', 'campus-activity-board/src/app.js', 'campus-activity-board/src/data/activities.js'])
if (day === 4) await requireFiles(['campus-activity-board/src/data/activities.js', 'campus-activity-board/src/utils/activity-utils.js', 'campus-activity-board/tests/day-03.test.mjs'])
if (day === 5) await requireFiles(['campus-activity-board/index.html', 'campus-activity-board/styles.css', 'campus-activity-board/src/app.js', 'campus-activity-board/src/data/activities.js', 'campus-activity-board/src/utils/activity-utils.js', 'campus-activity-board/tests/day-03.test.mjs', 'campus-activity-board/tests/day-04.test.mjs'])
if (day === 6) await requireFiles(['campus-activity-board/index.html', 'campus-activity-board/src/app.js', 'campus-activity-board/src/data/activities.js', 'campus-activity-board/src/utils/activity-utils.js', 'campus-activity-board/tests/day-03.test.mjs', 'campus-activity-board/tests/day-04.test.mjs'])
if (day === 7) await requireFiles(['campus-activity-board/index.html', 'campus-activity-board/src/app.js', 'campus-activity-board/src/utils/activity-utils.js', 'campus-activity-board/src/rebuild/day-06-filter.js', 'campus-activity-board/src/rebuild/day-06-dom.js', 'notes/day-06.md'])
if (day === 11) await requireFiles(['typescript-foundations/package.json', 'typescript-foundations/tsconfig.json', 'typescript-foundations/src/01-values.ts', 'typescript-foundations/src/02-functions.ts'])
if (day === 13) await requireFiles(['campus-growth-hub/src/views/HomeView.vue', 'campus-growth-hub/src/data/activities.ts'])
if (day === 14) await requireFiles(['campus-growth-hub/src/views/HomeView.vue', 'campus-growth-hub/src/components/ComputedWatchLab.vue'])
if (day === 15) await requireFiles(['campus-growth-hub/src/views/HomeView.vue', 'campus-growth-hub/src/components/ActivityCard.vue', 'campus-growth-hub/src/components/SearchBar.vue'])
if (day === 16) await requireFiles(['campus-growth-hub/src/views/HomeView.vue', 'campus-growth-hub/src/services/activityApi.ts'])
if (day === 17) await requireFiles(['campus-growth-hub/src/views/HomeView.vue', 'campus-growth-hub/src/components/ActivityCard.vue', 'campus-growth-hub/src/data/activities.ts'])
await put(`notes/day-${String(day).padStart(2, '0')}.md`, note(day))

const activities = `export const activities = [
  { id: 1, title: '前端入门工作坊', type: '技术', capacity: 30, enrolledCount: 18, startTime: '2026-08-01T09:00:00', location: '教学楼 A101' },
  { id: 2, title: '校园歌手赛', type: '文艺', capacity: 100, enrolledCount: 100, startTime: '2026-08-03T19:00:00', location: '大学生活动中心' },
  { id: 3, title: '晨跑打卡', type: '体育', capacity: 50, enrolledCount: 22, startTime: '2026-07-30T07:00:00', location: '东操场' },
  { id: 4, title: '简历交流会', type: '就业', capacity: 40, enrolledCount: 35, startTime: '2026-08-05T14:00:00', location: '图书馆报告厅' },
  { id: 5, title: 'JavaScript 读书会', type: '技术', capacity: 20, enrolledCount: 8, startTime: '2026-08-02T15:00:00', location: '教学楼 B203' },
  { id: 6, title: '志愿服务说明会', type: '公益', capacity: 60, enrolledCount: 12, startTime: '2026-08-06T10:00:00', location: '综合楼 201' },
]
`

const svg = (width, columns, title) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="600"><rect width="100%" height="100%" fill="#f5f7fb"/><text x="24" y="42" font-family="sans-serif" font-size="26">${title}</text>${Array.from({ length: columns }, (_, i) => `<rect x="${24 + i * ((width - 48) / columns)}" y="90" width="${(width - 48) / columns - 18}" height="190" rx="12" fill="white" stroke="#ccd5e5"/><text x="${42 + i * ((width - 48) / columns)}" y="130" font-family="sans-serif">活动卡片 ${i + 1}</text>`).join('')}</svg>`

if (day <= 7) {
  const board = 'campus-activity-board'
  if (day === 1) {
    await put('serve.mjs', `import{createReadStream}from'node:fs';import{stat}from'node:fs/promises';import{createServer}from'node:http';import{extname,resolve}from'node:path';const root=resolve(process.argv[2]||'.'),types={'.html':'text/html;charset=utf-8','.js':'text/javascript;charset=utf-8','.css':'text/css;charset=utf-8'};createServer(async(req,res)=>{try{let file=resolve(root,'.'+new URL(req.url,'http://local').pathname);if((await stat(file)).isDirectory())file=resolve(file,'index.html');res.setHeader('Content-Type',types[extname(file)]||'text/plain');createReadStream(file).pipe(res)}catch{res.statusCode=404;res.end('Not found')}}).listen(4174,'127.0.0.1',()=>console.log('http://127.0.0.1:4174'))`)
    await put(`${board}/README.md`, '# 校园活动看板\n\n从学习工作区运行：\n\n```bash\nnode serve.mjs campus-activity-board\n```\n\n打开 http://127.0.0.1:4174。Day 1～7 只维护这一个项目。\n')
    await put(`${board}/index.html`, `<!doctype html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>校园活动看板</title><link rel="stylesheet" href="./styles.css"></head><body><header><h1>校园活动看板</h1></header><main><form id="filters"><label>关键词<input id="keyword"></label><label>类型<select id="type"><option value="all">全部</option><option>技术</option><option>文艺</option><option>体育</option><option>就业</option><option>公益</option></select></label><label><input id="available-only" type="checkbox">仅看有名额</label><button id="reset" type="button">重置</button></form><p id="result-count">找到 6 个活动</p><section id="activity-list"><article data-activity-id="1">前端入门工作坊</article><article data-activity-id="2">校园歌手赛</article><article data-activity-id="3">晨跑打卡</article><article data-activity-id="4">简历交流会</article><article data-activity-id="5">JavaScript 读书会</article><article data-activity-id="6">志愿服务说明会</article></section><p id="empty-state" hidden>暂无符合条件的活动</p><p id="selected-activity"></p></main><script type="module" src="./src/main.js"></script></body></html>`)
    await put(`${board}/styles.css`, `*{box-sizing:border-box}body{margin:0;font-family:system-ui;color:#17233d;background:#f5f7fb}header,main{max-width:1120px;margin:auto;padding:20px}#filters{display:flex;flex-wrap:wrap;gap:16px;align-items:end}label{display:grid;gap:6px}#activity-list{display:grid;gap:16px;margin-top:20px}article{padding:20px;background:white;border:1px solid #dbe2ef;border-radius:12px}:focus-visible{outline:3px solid #2563eb;outline-offset:2px}/* Day 2 TODO：三档响应式网格 */`)
    await put(`${board}/src/data/activities.js`, activities.replaceAll('enrolledCount', 'registered'))
    await put(`${board}/src/app.js`, `import { activities } from './data/activities.js'\nconsole.log('app ready', activities.length)\n// Day 5 TODO：集中查询 DOM、renderActivities、readFilters、updateView、resetFilters、bindEvents\n`)
    await put('algorithms/day-01-array-find.js', 'export function findIndex(numbers,target){/* TODO */}\n')
  }
  if (day === 2) {
    await put(`${board}/reference-1280.svg`, svg(1280,3,'校园活动看板 · 1280 三列'))
    await put(`${board}/reference-768.svg`, svg(768,2,'校园活动看板 · 768 两列'))
    await put(`${board}/reference-375.svg`, svg(375,1,'校园活动看板 · 375 单列'))
    await put('algorithms/day-02-two-sum.js', 'export function twoSum(numbers,target){/* TODO：双重循环 */}\n')
  }
  if (day === 3) {
    await put(`${board}/src/utils/activity-utils.js`, `export function getRemaining(activity){/* TODO */}\nexport function findActivityById(list,id){/* TODO */}\nexport function getTotalRemainingSeats(list){/* TODO */}\n`)
    await put(`${board}/tests/day-03.test.mjs`, `import test from'node:test';import assert from'node:assert/strict';import{activities}from'../src/data/activities.js';import{getRemaining,findActivityById,getTotalRemainingSeats}from'../src/utils/activity-utils.js';test('day03',()=>{assert.equal(getRemaining(activities[0]),12);assert.equal(getRemaining(activities[1]),0);assert.equal(findActivityById(activities,999),undefined);assert.equal(getTotalRemainingSeats(activities),105);assert.equal(getTotalRemainingSeats([]),0)})\n`)
    await put(`${board}/src/day-03-verify.js`, `import{activities}from'./data/activities.js';import{getRemaining,findActivityById,getTotalRemainingSeats}from'./utils/activity-utils.js';document.querySelector('#dev-output').textContent=JSON.stringify({total:getTotalRemainingSeats(activities),full:getRemaining(activities[1]),missing:findActivityById(activities,999)})\n`)
    await put(`${board}/src/rebuild/day-03-functions.js`, '// 无 AI 重写 getRemaining 和 findActivityById\n')
    await put('algorithms/day-03-two-sum.js', 'export function twoSum(numbers,target){/* TODO */}\n')
  }
  if (day === 4) {
    await put(`${board}/src/practice/day-04-array-methods.js`, '// TODO：map/filter/find/reduce 固定练习\n')
    await put(`${board}/tests/day-04.test.mjs`, `import test from'node:test';import assert from'node:assert/strict';import{activities}from'../src/data/activities.js';import{filterByType,filterAvailable,filterByKeyword,sortByStartTime,applyFilters}from'../src/utils/activity-utils.js';test('day04',()=>{assert.deepEqual(filterByType(activities,'技术').map(x=>x.id),[1,5]);assert.deepEqual(filterAvailable(activities).map(x=>x.id),[1,3,4,5,6]);assert.deepEqual(filterByKeyword(activities,' javascript ').map(x=>x.id),[5]);assert.deepEqual(sortByStartTime(activities).map(x=>x.id),[3,1,5,2,4,6]);assert.deepEqual(applyFilters(activities,{keyword:'JavaScript',type:'技术',availableOnly:true}).map(x=>x.id),[5]);assert.deepEqual(activities.map(x=>x.id),[1,2,3,4,5,6])})\n`)
    await put(`${board}/src/rebuild/day-04-filter.js`, '// 无 AI 重写 applyFilters\n')
    await put('algorithms/day-04-remove-element.js', 'export function removeElement(numbers,value){/* TODO */}\n')
  }
  if (day === 5) {
    await put(`${board}/practice/day-05-selector-fault/index.html`, '<!doctype html><html><body><p id="result-count"></p><script src="app.js"></script></body></html>')
    await put(`${board}/practice/day-05-selector-fault/app.js`, `const output=document.querySelector('#results-count');output.textContent='找到 6 个活动'\n`)
    await put('algorithms/day-05-valid-parentheses.js', 'export function isValid(input){/* TODO */}\n')
  }
  if (day === 6) {
    await put(`${board}/src/rebuild/day-06-filter.js`, '// 不看主实现：重写纯函数与 applyFilters\n')
    await put(`${board}/src/rebuild/day-06-dom.js`, '// 不看主实现：写 readFilters/updateView/resetFilters 数据流\n')
    await put(`${board}/practice/day-06-faults/README.md`, '# Day 6 固定故障\n\n分别打开 import-path 和 delegation；先复现，再只修一个原因。\n')
    await put(`${board}/practice/day-06-faults/import-path/index.html`, '<!doctype html><html><body><script src="app-main.js"></script></body></html>')
    await put(`${board}/practice/day-06-faults/import-path/app.js`, "console.log('import fixed')\n")
    await put(`${board}/practice/day-06-faults/delegation/index.html`, '<!doctype html><html><body><button id="render">新增第 4 张卡</button><section id="list"><button class="card" data-id="1">活动 1</button><button class="card" data-id="2">活动 2</button><button class="card" data-id="3">活动 3</button></section><script src="app.js"></script></body></html>')
    await put(`${board}/practice/day-06-faults/delegation/app.js`, `document.querySelectorAll('.card').forEach(card=>card.addEventListener('click',()=>console.log(card.dataset.id)));document.querySelector('#render').addEventListener('click',()=>{document.querySelector('#list').insertAdjacentHTML('beforeend','<button class="card" data-id="4">活动 4</button>'})\n`)
    await put('algorithms/day-06-review.js', '// 重做本周辅助等级最高的一题\n')
  }
  if (day === 7) {
    await put('notes/week-01-review.md', '# 第一周证据复盘\n\n| 能力 | A-E | 文件或提交证据 | 下周继续？ |\n| --- | --- | --- | --- |\n| HTML 语义 | | | |\n| CSS 响应式 | | | |\n| JS 纯函数 | | | |\n| DOM 事件 | | | |\n| DevTools | | | |\n| Git | | | |\n| 算法 | | | |\n\n## 唯一最高风险\n')
    await put('algorithms/day-07-review.js', '// 只重做旧题，不新增题型\n')
  }
  console.log(`Day ${String(day).padStart(2,'0')} 准备完成：新建 ${created.length} 个，保留已有 ${kept.length} 个。`)
  if (created.length) console.log(`新建：\n- ${created.join('\n- ')}`)
  if (kept.length) console.log('已存在的文件没有被覆盖。')
  process.exit(0)
}

if (day === 1) {
  await put('day-01/baseline.md', note(1) + '\n| 项目 | 0-3 分 | 证据 |\n| --- | ---: | --- |\n| HTML/CSS | | |\n| JavaScript | | |\n| DOM | | |\n| Vue 阅读 | | |\n| 算法表达 | | |\n')
  await put('day-01/shared/activities.js', activities)
  await put('day-01/html/index.html', `<!doctype html><html lang="zh-CN"><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="style.css"><body><div class="header">Campus Growth Hub</div><div class="main"><div class="form"><div>邮箱</div><input id="email"><div>密码</div><input id="password" type="password"><button>登录</button></div><div class="cards"><div>前端工作坊</div><div>校园歌手赛</div><div>晨跑打卡</div></div></div></body></html>`)
  await put('day-01/html/style.css', `*{box-sizing:border-box}body{margin:0;font-family:system-ui;background:#f5f7fb}.header{padding:24px;background:#17233d;color:white}.main{max-width:960px;margin:32px auto;padding:20px}.form{display:grid;gap:10px;padding:24px;background:white}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:28px}.cards>div{padding:28px;background:white}@media(max-width:600px){.cards{grid-template-columns:1fr}}`)
  await put('day-01/html/expected-desktop.svg', svg(1280, 3, 'Day 01 桌面参考'))
  await put('day-01/html/expected-mobile.svg', svg(375, 1, 'Day 01 移动参考'))
  await put('day-01/javascript/tasks.js', activities + `\nexport function getRemaining(activity) { /* TODO */ }\nexport function filterByType(list, type) { /* TODO */ }\n`)
  await put('day-01/dom/index.html', `<!doctype html><html lang="zh-CN"><meta charset="UTF-8"><body><select id="type-filter"><option>全部</option><option>技术</option><option>文艺</option><option>体育</option><option>就业</option><option>公益</option></select><button id="apply-filter">筛选</button><p id="result-count">共 6 个活动</p><script type="module" src="app.js"></script></body></html>`)
  await put('day-01/dom/app.js', `import { activities } from '../shared/activities.js'\n// TODO：按钮点击后筛选并更新数量\nconsole.log(activities.length)\n`)
  await put('day-01/vue-reading/App.vue', `<script setup>\nimport { ref } from 'vue'\nconst count=ref(0)\nfunction increment(){count.value++}\n</script>\n<template><button @click="increase">点击 {{count}}</button></template>\n`)
  await put('day-01/vue-reading/README.md', '# Vue 阅读题\n\n首次运行 `npm install`，然后运行 `npm run dev`，浏览器地址以终端输出为准。保持终端运行。\n\n找出定义名与模板调用名不一致的位置，只改一处。\n')
  await put('day-01/algorithms/two-sum.js', `export function twoSum(numbers,target){ /* TODO：暴力双循环 */ }\n`)
}

if (day === 2) {
  await put('auth-prototype/semantic-examples.html', `<!doctype html><html lang="zh-CN"><body><h1>语义对比</h1><div><div>邮箱</div><input><div onclick="alert('submit')">提交</div></div><hr><form><label for="email">邮箱</label><input id="email" type="email"><button type="submit">提交</button></form></body></html>`)
  await put('auth-prototype/wireframe.svg', svg(440, 1, '登录 / 注册'))
  await put('auth-prototype/index.html', `<!doctype html><html lang="zh-CN"><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="styles.css"><body><main><h1>登录</h1><!-- TODO：补表单 --></main><script src="app.js"></script></body></html>`)
  await put('auth-prototype/styles.css', `*{box-sizing:border-box}body{font-family:system-ui;background:#f5f7fb}main{max-width:440px;margin:8vh auto;padding:24px;background:white}`)
  await put('auth-prototype/app.js', '// TODO：浏览器端校验与登录/注册切换\n')
}

if (day === 3) {
  await put('card-layout/layout-lab.html', `<!doctype html><html><link rel="stylesheet" href="layout-lab.css"><body><main><div>A</div><div>B</div><div>C</div></main></body></html>`)
  await put('card-layout/layout-lab.css', `main>div{padding:20px;border:2px solid #667}/* TODO：Grid 三/二/一列 */`)
  await put('card-layout/index.html', `<!doctype html><html lang="zh-CN"><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="style.css"><body><header><h1>校园活动</h1></header><main><section id="filters">搜索 / 类型</section><section id="activity-list"></section><section id="empty-state" hidden>暂无符合条件的活动</section></main></body></html>`)
  await put('card-layout/style.css', `*{box-sizing:border-box}body{margin:0;font-family:system-ui}main{max-width:1200px;margin:auto;padding:24px}#activity-list{display:grid;gap:24px}/* TODO：三个断点 */`)
  await put('card-layout/expected-1280.svg', svg(1280, 3, '1280px 三列'))
  await put('card-layout/expected-768.svg', svg(768, 2, '768px 两列'))
  await put('card-layout/expected-375.svg', svg(375, 1, '375px 一列'))
}

if (day === 4) {
  await put('data-utils/activities.js', activities)
  await put('data-utils/array-methods.js', `import { activities } from './activities.js'\nconsole.log(activities.map(item=>item.title))\nconsole.log(activities.filter(item=>item.type==='技术'))\nconsole.log(activities.reduce((sum,item)=>sum+item.capacity-item.enrolledCount,0))\n`)
  await put('data-utils/utils.js', `export function getRemaining(activity){/* TODO */}\nexport function filterByType(list,type){/* TODO */}\nexport function summarize(list){/* TODO */}\n`)
  await put('data-utils/index.html', `<!doctype html><html><body><p>打开控制台。</p><script type="module" src="array-methods.js"></script></body></html>`)
}

if (day === 5) {
  await put('activity-filter/activities.js', activities)
  await put('activity-filter/dom-lab.html', `<!doctype html><html><body><button id="add">添加</button><ul id="list"></ul><script type="module" src="dom-lab.js"></script></body></html>`)
  await put('activity-filter/dom-lab.js', `const list=document.querySelector('#list')\ndocument.querySelector('#add').addEventListener('click',()=>list.insertAdjacentHTML('beforeend','<li><button data-id="new">动态项目</button></li>'))\n// TODO：在 #list 上做事件委托\n`)
  await put('activity-filter/index.html', `<!doctype html><html lang="zh-CN"><meta charset="UTF-8"><body><input id="keyword"><select id="type"><option>全部</option><option>技术</option><option>文艺</option></select><button id="reset" type="button">重置</button><p id="result-count"></p><section id="list"></section><p id="empty" hidden>暂无符合条件的活动</p><script type="module" src="app.js"></script></body></html>`)
  await put('activity-filter/app.js', `import {activities} from './activities.js'\n// TODO：render、组合筛选、重置、空状态\nconsole.log(activities)\n`)
  await put('activity-filter/README.md', '在 frontend-40-day-learning-lab 目录运行 `node serve.mjs activity-filter`，打开 http://127.0.0.1:4174。\n')
  await put('serve.mjs', `import{createReadStream}from'node:fs';import{stat}from'node:fs/promises';import{createServer}from'node:http';import{extname,resolve}from'node:path';const root=resolve(process.argv[2]||'.'),types={'.html':'text/html;charset=utf-8','.js':'text/javascript;charset=utf-8','.css':'text/css;charset=utf-8','.json':'application/json;charset=utf-8'};createServer(async(req,res)=>{try{let file=resolve(root,'.'+new URL(req.url,'http://local').pathname);if((await stat(file)).isDirectory())file=resolve(file,'index.html');res.setHeader('Content-Type',types[extname(file)]||'text/plain');createReadStream(file).pipe(res)}catch{res.statusCode=404;res.end('Not found')}}).listen(4174,'127.0.0.1',()=>console.log('http://127.0.0.1:4174'))`)
}

if (day === 6) {
  await put('day-06/rebuild/rebuild.js', '// 不看旧代码，重写 filterByType 和 resetFilters。\n')
  await put('day-06/debug-01-form/index.html', `<!doctype html><html><body><form><button id="switch">切换注册</button></form><script src="app.js"></script></body></html>`)
  await put('day-06/debug-01-form/app.js', `document.querySelector('#switch').addEventListener('click',()=>console.log('切换'))\n`)
  await put('day-06/debug-02-filter/index.html', `<!doctype html><html><body><button id="render">渲染卡片</button><section id="list"></section><script src="app.js"></script></body></html>`)
  await put('day-06/debug-02-filter/app.js', `document.querySelectorAll('.card').forEach(card=>card.addEventListener('click',()=>console.log(card.dataset.id)))\ndocument.querySelector('#render').addEventListener('click',()=>{document.querySelector('#list').innerHTML='<button class="card" data-id="a007">动态卡片</button>'})\n`)
  await put('day-06/project-brief/product.md', '# Campus Growth Hub\n\n用户：学生。\n\n第一阶段：活动浏览、关键词/类型筛选、收藏、异步四态。\n\n暂不做：后端、支付、聊天。\n')
  await put('day-06/project-brief/home-wireframe.svg', svg(1280, 3, 'Campus Growth Hub 首页'))
  await put('day-06/project-brief/file-tree.md', '- src/data：\n- src/components：\n- src/views：\n- src/services：\n- notes：\n')
  await put('algorithms/day-06-review.js', `export function twoSum(numbers,target){/* TODO */}\nexport function binarySearch(numbers,target){/* TODO */}\n`)
}

if (day === 8) {
  await put('async-activity-demo/activities.js', activities)
  await put('async-activity-demo/index.html', `<!doctype html><html lang="zh-CN"><body><select id="mode"><option>success</option><option>empty</option><option>error</option></select><button id="load">加载</button><button id="retry" hidden>重试</button><p id="status">idle</p><section id="activity-list"></section><script type="module" src="app.js"></script></body></html>`)
  await put('async-activity-demo/promise-lab.js', `const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms))\nconsole.log('A')\ndelay(0).then(()=>console.log('C'))\nconsole.log('B')\n`)
  await put('async-activity-demo/mock-api.js', `import{activities}from'./activities.js'\nexport async function fetchActivities(mode='success',delay=800){await new Promise(r=>setTimeout(r,delay));if(mode==='error')throw new Error('活动加载失败');return mode==='empty'?[]:[...activities]}\n`)
  await put('async-activity-demo/app.js', `import{fetchActivities}from'./mock-api.js'\n// TODO：实现 loading/success/empty/error 和重试\nvoid fetchActivities\n`)
}

if (day === 9) {
  await put('debug-import/activity-api.js', `export const getMessage=()=> 'import success'\n`)
  await put('debug-import/main.js', `import{getMessage}from'./activityApi.js'\nconsole.log(getMessage())\n`)
  await put('debug-import/index.html', `<!doctype html><html><body><script type="module" src="main.js"></script></body></html>`)
  await put('debug-request/activities.json', JSON.stringify([{ id: 1, title: '前端工作坊' }], null, 2))
  await put('debug-request/app.js', `async function load(){const response=await fetch('./activity.json');const data=await response.json();renderActivities(data)}\nfunction renderActivities(items){document.querySelector('#list').textContent=items.map(item=>item.title).join(',')}\nload()\n`)
  await put('debug-request/index.html', `<!doctype html><html><body><div id="list"></div><script src="app.js"></script></body></html>`)
}

if (day === 1) {
  await put('day-01/javascript/activities.js', activities.replaceAll('enrolledCount', 'registered'))
  await put('day-01/javascript/verify.js', `import{activities}from'./activities.js';import{filterByType,getTotalRemainingSeats,findActivityById}from'./tasks.js';console.log(filterByType(activities,'技术').map(x=>x.id));console.log(getTotalRemainingSeats(activities));console.log(findActivityById(activities,999))\n`)
  await put('day-01/vue-reading/package.json', JSON.stringify({ private: true, type: 'module', scripts: { dev: 'vite' }, dependencies: { '@vitejs/plugin-vue': '^6.0.0', vite: '^7.0.0', vue: '^3.5.0' }, devDependencies: {} }, null, 2))
  await put('day-01/vue-reading/index.html', '<!doctype html><html><body><div id="app"></div><script type="module" src="/src.js"></script></body></html>')
  await put('day-01/vue-reading/src.js', `import{createApp}from'vue';import App from'./App.vue';createApp(App).mount('#app')\n`)
  await put('day-01/vue-reading/vite.config.js', `import{defineConfig}from'vite';import vue from'@vitejs/plugin-vue';export default defineConfig({plugins:[vue()]})\n`)
}

if (day === 4) {
  await put('data-utils/activity-utils.js', `export function filterByType(list,type){/* TODO */}\nexport function getTotalRemainingSeats(list){/* TODO */}\nexport function findActivityById(list,id){/* TODO */}\n`)
  await put('data-utils/verify.js', `import{activities}from'./activities.js';import{filterByType,getTotalRemainingSeats,findActivityById}from'./activity-utils.js';console.log(filterByType(activities,'技术').map(x=>x.id),getTotalRemainingSeats(activities),findActivityById(activities,999))\n`)
}

if (day === 7) {
  await put('notes/week-01-review.md', note(7))
  await put('algorithms/day-07-review.js', '// 轻量复盘：重做本周最薄弱的一题。\n')
}

if (day === 9) {
  await put('event-loop-lab/questions.js', `console.log('1');Promise.resolve().then(()=>console.log('3'));console.log('2')\nsetTimeout(()=>console.log('timeout'),0);queueMicrotask(()=>console.log('microtask'))\n`)
  await put('event-loop-lab/predictions.md', '# 先写预测，再运行\n\n- 第一题顺序：\n- 第二题顺序：\n- 原因：\n')
}

if (day >= 12) {
  await put(`campus-growth-hub/notes/day-${String(day).padStart(2, '0')}.md`, note(day))
}

if (day === 10) {
  const root = 'typescript-foundations'
  await put(`${root}/package.json`, JSON.stringify({ private: true, type: 'module', scripts: { 'type-check': 'tsc --noEmit', 'test:day10': 'tsx --test src/02-functions.test.ts', 'test:unknown': 'tsx --test src/03-unknown.test.ts', 'test:models': 'tsx --test src/04-models.test.ts', 'test:state': 'tsx --test src/05-request-state.test.ts', 'test:generics': 'tsx --test src/06-generics.test.ts' }, devDependencies: { '@types/node': '^24.0.0', typescript: '^5.9.0', tsx: '^4.20.0' } }, null, 2))
  await put(`${root}/tsconfig.json`, JSON.stringify({ compilerOptions: { target: 'ES2020', module: 'ESNext', moduleResolution: 'Bundler', types: ['node'], strict: true, noEmit: true, skipLibCheck: true }, include: ['src/**/*.ts', 'algorithms/**/*.ts'] }, null, 2))
  await put(`${root}/src/01-values.ts`, `const title = '前端入门工作坊'\nconst capacity = 30\nconst active = true\nconst tags = ['前端', '校园']\nconst activity = { id: 'a001', title, capacity }\nconsole.log({ title, capacity, active, tags, activity })\n`)
  await put(`${root}/src/fixtures.ts`, `export interface Activity { id:string;title:string;type:string;capacity:number;enrolledCount:number }\nexport const activities:Activity[]=[{id:'a001',title:'前端入门工作坊',type:'tech',capacity:30,enrolledCount:18},{id:'a002',title:'校园歌手赛',type:'art',capacity:100,enrolledCount:100},{id:'a003',title:'JavaScript 读书会',type:'tech',capacity:20,enrolledCount:8}]\n`)
  await put(`${root}/src/02-functions.ts`, `import type{Activity}from'./fixtures'\nexport function getRemaining(activity:Activity):number{throw new Error('TODO')}\nexport function findById(list:Activity[],id:string):Activity|undefined{throw new Error('TODO')}\nexport function filterByType(list:Activity[],type:string):Activity[]{throw new Error('TODO')}\n`)
  await put(`${root}/src/02-functions.test.ts`, `import test from'node:test';import assert from'node:assert/strict';import{activities}from'./fixtures';import{filterByType,findById,getRemaining}from'./02-functions';test('day10 functions',()=>{assert.equal(getRemaining(activities[0]),12);assert.equal(findById(activities,'missing'),undefined);assert.equal(filterByType(activities,'tech').length,2);assert.equal(filterByType(activities,'all').length,3)})\n`)
  await put(`${root}/src/03-unknown.ts`, `import type{Activity}from'./fixtures'\nexport function isRecord(value:unknown):value is Record<string,unknown>{return typeof value==='object'&&value!==null}\nexport function parseActivity(value:unknown):Activity{throw new Error('TODO：活动数据格式错误')}\n`)
  await put(`${root}/src/03-unknown.test.ts`, `import test from'node:test';import assert from'node:assert/strict';import{parseActivity}from'./03-unknown';test('unknown parser',()=>{assert.equal(parseActivity({id:'a1',title:'活动',type:'tech',capacity:20,enrolledCount:3}).id,'a1');for(const value of[null,{id:'a1'},{id:'a1',title:'活动',type:'tech',capacity:'20',enrolledCount:3}])assert.throws(()=>parseActivity(value),/活动数据格式错误/)})\n`)
  await put(`${root}/algorithms/day-10-two-sum.ts`, `export function twoSum(nums:number[],target:number):number[]{/* TODO */return[]}\n`)
  await put(`${root}/notes/day-10.md`, note(10))
}

if (day === 11) {
  const root = 'typescript-foundations'
  await put(`${root}/src/04-models.ts`, `export type UserRole='student'|'organizer';export interface User{id:string;name:string;role:UserRole}\nexport interface ActivityBase{id:string;title:string}\nexport type Activity=(ActivityBase&{mode:'online';meetingUrl:string})|(ActivityBase&{mode:'offline';location:string})\nexport function getActivityPlace(activity:Activity):string{return activity.mode==='online'?'线上':activity.location}\n`)
  await put(`${root}/src/04-models.test.ts`, `import test from'node:test';import assert from'node:assert/strict';import{getActivityPlace,type Activity}from'./04-models';test('models',()=>{const online:Activity={id:'1',title:'分享',mode:'online',meetingUrl:'https://example.com'};const offline:Activity={id:'2',title:'跑步',mode:'offline',location:'东操场'};assert.equal(getActivityPlace(online),'线上');assert.equal(getActivityPlace(offline),'东操场')})\n`)
  await put(`${root}/src/05-request-state.ts`, `export type RequestState<T>={status:'idle'}|{status:'loading'}|{status:'success';data:T}|{status:'empty'}|{status:'error';message:string}\nexport function assertNever(value:never):never{throw new Error('未处理状态:'+String(value))}\nexport function describeState(state:RequestState<unknown[]>):string{/* TODO */return''}\n`)
  await put(`${root}/src/05-request-state.test.ts`, `import test from'node:test';import assert from'node:assert/strict';import{describeState}from'./05-request-state';test('states',()=>{assert.equal(describeState({status:'success',data:[1,2]}),'共 2 条');assert.equal(describeState({status:'error',message:'失败'}),'失败')})\n`)
  await put(`${root}/src/06-generics.ts`, `export interface ApiResult<T>{code:number;message:string;data:T}\nexport interface PaginatedResult<T>{items:T[];total:number;page:number;pageSize:number}\nexport function unwrap<T>(result:ApiResult<T>):T{return result.data}\nexport function firstOrUndefined<T>(list:T[]):T|undefined{return list[0]}\n`)
  await put(`${root}/src/06-generics.test.ts`, `import test from'node:test';import assert from'node:assert/strict';import{firstOrUndefined,unwrap}from'./06-generics';test('generics',()=>{assert.equal(unwrap({code:0,message:'ok',data:{id:'u1'}}).id,'u1');assert.equal(firstOrUndefined([]),undefined)})\n`)
  await put(`${root}/algorithms/day-11-valid-parentheses.ts`, `export function isValid(input:string):boolean{/* TODO */return false}\n`)
  await put(`${root}/notes/day-11.md`, note(11))
}

if (day === 12) {
  const root = 'campus-growth-hub'
  await put(`${root}/package.json`, JSON.stringify({ private: true, version: '0.0.0', type: 'module', scripts: { dev: 'vite', build: 'vue-tsc --noEmit && vite build', preview: 'vite preview', 'type-check': 'vue-tsc --noEmit' }, dependencies: { vue: '^3.5.0' }, devDependencies: { '@vitejs/plugin-vue': '^6.0.0', vite: '^7.0.0', typescript: '^5.9.0', 'vue-tsc': '^3.0.0' } }, null, 2))
  await put(`${root}/index.html`, '<!doctype html><html lang="zh-CN"><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><body><div id="app"></div><script type="module" src="/src/main.ts"></script></body></html>')
  await put(`${root}/vite.config.ts`, `import{defineConfig}from'vite';import vue from'@vitejs/plugin-vue';export default defineConfig({plugins:[vue()]})\n`)
  await put(`${root}/tsconfig.json`, JSON.stringify({ compilerOptions: { target: 'ES2020', module: 'ESNext', moduleResolution: 'Bundler', lib: ['ES2020', 'DOM', 'DOM.Iterable'], strict: true, skipLibCheck: true, isolatedModules: true, noEmit: true }, include: ['src/**/*.ts', 'src/**/*.vue', 'vite.config.ts'] }, null, 2))
  await put(`${root}/src/vite-env.d.ts`, '/// <reference types="vite/client" />\n')
  await put(`${root}/src/main.ts`, `import{createApp}from'vue';import App from'./App.vue';import'./style.css';createApp(App).mount('#app')\n`)
  await put(`${root}/src/App.vue`, `<script setup lang="ts">\nimport HomeView from'./views/HomeView.vue'\n</script>\n<template><HomeView/></template>\n`)
  await put(`${root}/src/components/CounterPractice.vue`, `<script setup lang="ts">\nimport{ref}from'vue';const count=ref(0)\n</script><template><button @click="count++">计数 {{count}}</button></template>\n`)
  await put(`${root}/src/types/activity.ts`, `export interface Activity{id:string;title:string;type:string;capacity:number;enrolledCount:number;startTime:string;location:string}\n`)
  await put(`${root}/src/data/activities.ts`, `import type{Activity}from'../types/activity'\nexport const activities:Activity[]=[{id:'1',title:'前端入门工作坊',type:'技术',capacity:30,enrolledCount:18,startTime:'2026-08-01T09:00:00',location:'教学楼 A101'},{id:'2',title:'校园歌手赛',type:'文艺',capacity:100,enrolledCount:100,startTime:'2026-08-03T19:00:00',location:'大学生活动中心'},{id:'3',title:'晨跑打卡',type:'体育',capacity:50,enrolledCount:22,startTime:'2026-07-30T07:00:00',location:'东操场'},{id:'4',title:'简历交流会',type:'就业',capacity:40,enrolledCount:35,startTime:'2026-08-05T14:00:00',location:'图书馆报告厅'},{id:'5',title:'JavaScript 读书会',type:'技术',capacity:20,enrolledCount:8,startTime:'2026-08-02T15:00:00',location:'教学楼 B203'},{id:'6',title:'志愿服务说明会',type:'公益',capacity:60,enrolledCount:12,startTime:'2026-08-06T10:00:00',location:'综合楼 201'}]\n`)
  await put(`${root}/src/views/HomeView.vue`, `<script setup lang="ts">\nimport{ref}from'vue';import{activities}from'../data/activities';const keyword=ref('');function filteredActivities(){return activities.filter(item=>item.title.toLowerCase().includes(keyword.value.trim().toLowerCase()))}\n</script><template><main><h1>Campus Growth Hub</h1><label>搜索活动<input v-model="keyword"></label><p>找到 {{filteredActivities().length}} 个活动</p><section><article v-for="item in filteredActivities()" :key="item.id"><h2>{{item.title}}</h2><p>{{item.type}} · {{item.location}} · 剩余 {{item.capacity-item.enrolledCount}}</p></article></section></main></template>\n`)
  await put(`${root}/src/style.css`, `*{box-sizing:border-box}body{margin:0;font-family:system-ui;background:#f5f7fb}main{max-width:1120px;margin:auto;padding:24px}section{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}article{padding:18px;background:white}@media(max-width:600px){section{grid-template-columns:1fr}}`)
  await put(`${root}/algorithms/day-12-move-zeroes.ts`, 'export function moveZeroes(nums:number[]):void{/* TODO */}\n')
}

if (day === 13) {
  await put('campus-growth-hub/src/components/ComputedWatchLab.vue', `<script setup lang="ts">\nimport{computed,ref,watch}from'vue';const names=['Alice','Bob','Carol'];const keyword=ref('');const filteredNames=computed(()=>names.filter(name=>name.toLowerCase().includes(keyword.value.toLowerCase())));watch(keyword,value=>localStorage.setItem('demo-key',value))\n</script><template><input v-model="keyword"><p v-for="name in filteredNames" :key="name">{{name}}</p></template>\n`)
  await put('campus-growth-hub/algorithms/day-13-merge-sorted-array.ts', '// TODO：合并有序数组\n')
}

if (day === 14) {
  const root = 'campus-growth-hub/src/components'
  await put(`${root}/MessageParent.vue`, `<script setup lang="ts">\nimport{ref}from'vue';import MessageChild from'./MessageChild.vue';const count=ref(0)\n</script><template><MessageChild message="来自父组件" :count="count" @increment="count++"/></template>\n`)
  await put(`${root}/MessageChild.vue`, `<script setup lang="ts">\ndefineProps<{message:string;count:number}>();defineEmits<{increment:[]}>()\n</script><template><button @click="$emit('increment')">{{message}} {{count}}</button></template>\n`)
  await put(`${root}/BasePanel.vue`, `<script setup lang="ts">defineProps<{title:string}>()</script><template><section><h2>{{title}}</h2><slot/></section></template>\n`)
  await put(`${root}/SearchBar.vue`, `<script setup lang="ts">\ndefineProps<{keyword:string;selectedType:string;types:string[]}>();const emit=defineEmits<{ 'update:keyword':[value:string];'update:selectedType':[value:string];reset:[]}>();function updateKeyword(event:Event){emit('update:keyword',(event.target as HTMLInputElement).value)}\n</script><template><input :value="keyword" @input="updateKeyword"></template>\n`)
  await put(`${root}/ActivityCard.vue`, `<script setup lang="ts">\nimport type{Activity}from'../types/activity';defineProps<{activity:Activity;bookmarked:boolean}>();defineEmits<{'toggle-bookmark':[id:string]}>()\n</script><template><article><h2>{{activity.title}}</h2><button @click="$emit('toggle-bookmark',activity.id)">{{bookmarked?'取消收藏':'收藏'}}</button></article></template>\n`)
  await put(`${root}/EmptyState.vue`, '<template><p role="status">暂无符合条件的活动</p></template>\n')
  await put('campus-growth-hub/algorithms/day-14-valid-parentheses.ts', '// TODO：有效括号\n')
}

if (day === 15) {
  await put('campus-growth-hub/src/practice/course-favorites/courses.ts', `export const courses=[{id:1,title:'Vue 3'},{id:2,title:'JavaScript'},{id:3,title:'CSS'},{id:4,title:'Git'}]\n`)
  await put('campus-growth-hub/src/practice/course-favorites/CourseFavorites.vue', `<script setup lang="ts">\nimport{computed,ref}from'vue';import{courses}from'./courses';const keyword=ref('');const favoriteIds=ref<number[]>([]);const onlyFavorites=ref(false);const visible=computed(()=>courses.filter(item=>item.title.toLowerCase().includes(keyword.value.toLowerCase())&&(!onlyFavorites.value||favoriteIds.value.includes(item.id))))\n</script><template><input v-model="keyword"><label><input v-model="onlyFavorites" type="checkbox">只看收藏</label><article v-for="item in visible" :key="item.id">{{item.title}}</article></template>\n`)
  await put('campus-growth-hub/src/services/activityApi.ts', `import{activities}from'../data/activities';import type{Activity}from'../types/activity';export type LoadMode='success'|'empty'|'error';export async function fetchActivities(mode:LoadMode='success',delay=800):Promise<Activity[]>{await new Promise(resolve=>setTimeout(resolve,delay));if(mode==='error')throw new Error('活动加载失败');return mode==='empty'?[]:[...activities]}\n`)
  await put('campus-growth-hub/src/practice/async-state/AsyncActivityLab.vue', `<script setup lang="ts">\nimport{ref}from'vue';import{fetchActivities,type LoadMode}from'../../services/activityApi';import type{Activity}from'../../types/activity';const mode=ref<LoadMode>('success'),status=ref('idle'),loadedActivities=ref<Activity[]>([]),errorMessage=ref('');async function load(){status.value='loading';try{loadedActivities.value=await fetchActivities(mode.value);status.value=loadedActivities.value.length?'success':'empty'}catch(error){status.value='error';errorMessage.value=error instanceof Error?error.message:'未知错误'}finally{loadedActivities.value=[]/* DAY15_INTENTIONAL_BUG */}}\n</script><template><select v-model="mode"><option>success</option><option>empty</option><option>error</option></select><button :disabled="status==='loading'" @click="load">加载</button><p>{{status}} {{errorMessage}}</p></template>\n`)
  await put('campus-growth-hub/algorithms/day-15-review.ts', '// TODO：重做最薄弱题\n')
}

if (day === 16) {
  await put('campus-growth-hub/notes/week-02-review.md', note(16))
  await put('campus-growth-hub/notes/vue-data-flow.md', '# Vue 数据流\n\nHomeView state → props → ActivityCard → emit → HomeView update\n')
  await put('campus-growth-hub/notes/async-state-flow.md', '# 异步五态\n\nidle → loading → success / empty / error → retry\n')
  await put('campus-growth-hub/algorithms/day-16-review.ts', '// TODO：无 AI 重做本阶段最薄弱题。\n')
}

if (day === 17) {
  await put('campus-growth-hub/algorithms/day-17-cycle-list.ts', '// TODO：环形链表\n')
}

if (day === 34) {
  await put('campus-growth-hub/practice/day-34/deploy-fault/README.md', '# 部署故障副本\n只修改本目录的 vercel.json，不要修改项目根目录。完成后可直接删除本目录。\n')
  await put('campus-growth-hub/practice/day-34/deploy-fault/vercel.json', JSON.stringify({ rewrites: [{ source: '/(.*)', destination: '/index.html' }] }, null, 2))
}

if (day === 37) {
  await put('campus-growth-hub/practice/day-37/README.md', '# Day 37 固定练习\n先运行定向测试看到失败，再完成两个 TODO。\n')
  await put('campus-growth-hub/practice/day-37/debounce.ts', `export function debounce<T extends (...args:any[])=>void>(fn:T,wait:number){/* TODO：保留 this 与参数 */}\n`)
  await put('campus-growth-hub/practice/day-37/promise-error.ts', `export async function saveAll(ids:string[],save:(id:string)=>Promise<void>){ids.forEach(async id=>{await save(id)});console.log('done')}\n`)
  await put('campus-growth-hub/practice/day-37/cases.spec.ts', `import{describe,expect,it,vi}from'vitest'\nimport{debounce}from'./debounce'\nimport{saveAll}from'./promise-error'\ndescribe('day37',()=>{it('debounce 只执行最后一次',()=>{vi.useFakeTimers();const fn=vi.fn();const run=debounce(fn,100);run('a');run('b');vi.advanceTimersByTime(100);expect(fn).toHaveBeenCalledOnce();expect(fn).toHaveBeenCalledWith('b')});it('等待全部保存',async()=>{const saved:string[]=[];await saveAll(['a','b'],async id=>{saved.push(id)});expect(saved).toEqual(['a','b'])})})\n`)
}

if (day === 38) {
  const root = 'campus-growth-hub/practice/day-38/faults'
  await put(`${root}/README.md`, '# 三个固定故障\n先运行本目录测试看到失败。每次只修一个原因，并记录证据。\n')
  await put(`${root}/router-guard.ts`, `export function guard(token:string,requiresAuth:boolean):true|'/login'{if(requiresAuth&&!token)return true;return true} // 固定故障：未登录仍放行\n`)
  await put(`${root}/router-guard.spec.ts`, `import{expect,it}from'vitest';import{guard}from'./router-guard';it('受限页未登录去登录',()=>expect(guard('',true)).toBe('/login'));it('已登录继续',()=>expect(guard('demo',true)).toBe(true))\n`)
  await put(`${root}/race-search.ts`, `const wait=(keyword:string,ms:number)=>new Promise<string>(r=>setTimeout(()=>r(keyword),ms));export async function runSearches(render:(keyword:string)=>void){wait('v',800).then(render);await new Promise(r=>setTimeout(r,50));wait('vue',100).then(render);await new Promise(r=>setTimeout(r,900))}\n`)
  await put(`${root}/race-search.spec.ts`, `import{expect,it}from'vitest';import{runSearches}from'./race-search';it('只渲染最新关键词',async()=>{let rendered='';await runSearches(value=>rendered=value);expect(rendered).toBe('vue')})\n`)
  await put(`${root}/bookmark-store.ts`, `export function toggle(ids:string[],id:string){ids.push(id);return ids} // 固定故障：重复收藏\n`)
}

if (day === 39) {
  const root = 'campus-growth-hub/practice/day-39'
  await put(`${root}/interview-pack.md`, '# 固定八问\n1. 闭包\n2. 事件循环\n3. ref/computed/watch\n4. props/emit\n5. Pinia 状态边界\n6. HTTP 缓存\n7. 项目数据流\n8. 一次真实排错\n')
  await put(`${root}/checker-answer-key.md`, '# 检查者答案要点\n模拟结束前不要给学习者打开。每题按“概念准确、项目例子、边界或取舍”各 1 分。\n')
  await put(`${root}/code-reading.ts`, `export async function run(save:(id:string)=>Promise<void>){['a','b'].forEach(async id=>await save(id));console.log('done')}\nexport function twoSum(nums:number[],target:number){/* TODO */}\nexport function isValid(input:string){/* TODO */}\n`)
  await put(`${root}/debounce.ts`, `export function debounce<T extends (...args:any[])=>void>(fn:T,wait:number){/* TODO */}\n`)
  await put(`${root}/day-39.spec.ts`, `import{describe,expect,it,vi}from'vitest';import{twoSum,isValid}from'./code-reading';import{debounce}from'./debounce';describe('day39',()=>{it('twoSum',()=>expect(twoSum([2,7,11,15],9)).toEqual([0,1]));it('括号',()=>expect(isValid('([)]')).toBe(false));it('debounce',()=>{vi.useFakeTimers();const fn=vi.fn();const run=debounce(fn,100);run(1);run(2);run(3);vi.advanceTimersByTime(100);expect(fn).toHaveBeenCalledOnce();expect(fn).toHaveBeenCalledWith(3)})})\n`)
}

if (day === 40) {
  const root = 'campus-growth-hub/practice/day-40/final-assessment'
  await put('campus-growth-hub/practice/day-40/baseline-day-01.md', '# Day 1 基线副本\n请将 frontend-40-day-learning-lab/day-01/baseline.md 的分数和证据抄到这里，再做最终对照。\n')
  await put(`${root}/README.md`, '# 最终测评\n不得复制主项目实现。先阅读测试，再完成 TODO；预设错误必须通过类型错误或失败测试定位。\n')
  await put(`${root}/activities.ts`, `export const activities=[{id:'a1',title:'Vue 入门',type:'lecture',capacity:20,enrolledCount:18},{id:'a2',title:'篮球赛',type:'contest',capacity:10,enrolledCount:10},{id:'a3',title:'志愿服务',type:'volunteer',capacity:30,enrolledCount:12},{id:'a4',title:'前端沙龙',type:'lecture',capacity:25,enrolledCount:5},{id:'a5',title:'算法训练',type:'contest',capacity:40,enrolledCount:39}]\nexport function remainingCount(item:typeof activities[number]){return item.capacity-item.enrolledCount}\nexport function findById(id:string){/* TODO */}\nexport function filterActivities(keyword:string,type:string,availableOnly=false){/* TODO */}\n`)
  await put(`${root}/ActivityPanel.vue`, `<script setup lang="ts">\nimport{computed,ref}from'vue'\nimport{activities}from'./activities'\nconst keyword=ref('')\n// 固定故障：remainCount 名称不存在\nconst visible=computed(()=>activities.filter(item=>item.title.includes(keyword.value)&&remainCount(item)>0))\n</script>\n<template><input v-model="keyword"><p>共 {{visible.length}} 项</p><article v-for="item in visible" :key="item.id">{{item.title}}</article></template>\n`)
  await put(`${root}/assessment.spec.ts`, `import{expect,it}from'vitest';import{activities,filterActivities,findById,remainingCount}from'./activities';it('剩余名额',()=>{expect(remainingCount(activities[0])).toBe(2);expect(remainingCount(activities[1])).toBe(0)});it('查找',()=>expect(findById('missing')).toBeUndefined());it('筛选',()=>{expect(filterActivities('', 'lecture').map(x=>x.id)).toEqual(['a1','a4']);expect(filterActivities('VUE','all').map(x=>x.id)).toEqual(['a1']);expect(filterActivities('', 'contest',true).map(x=>x.id)).toEqual(['a5'])})\n`)
}

// DAY_STARTERS

console.log(`Day ${String(day).padStart(2, '0')} 准备完成：新建 ${created.length} 个，保留已有 ${kept.length} 个。`)
if (created.length) console.log(`新建：\n- ${created.join('\n- ')}`)
if (kept.length) console.log('已存在的文件没有被覆盖。')
