const project = 'campus-activity-board'
const browser = 'http://127.0.0.1:4174'
const algorithmRule = '算法严格计时 30 分钟：先写样例和思路，再编码；到点停止并记录 A-E 辅助等级，不挤占前端主线。'

export default {
  1: {
    start: {
      dir: '.',
      commands: ['git status'],
      open: [`${project}/README.md`, `${project}/index.html`, `${project}/styles.css`, `${project}/src/app.js`, 'notes/day-01.md', 'algorithms/day-01-array-find.js'],
      before: [
        `每日准备命令已创建唯一项目 ${project}、本地服务器、基线模板和算法空白文件。`,
        `本周 Day 1～7 只维护 ${project}，不得另建登录页、CSS 小项目或第二个活动筛选项目。`,
        `在终端 A 从 frontend-40-day-learning-lab 运行 node serve.mjs ${project} 并保持运行；终端 B 留在学习工作区执行 Git。浏览器打开 ${browser}。`,
      ],
    },
    tasks: [
      {
        title: '建立学习规则和真实基线', duration: 60,
        files: ['notes/day-01.md', `${project}/README.md`],
        steps: [
          '在 notes/day-01.md 写四条固定规则：不删除失败代码；单点排查；25 分钟后才向 AI 请求一个提示；当天不靠熬夜补任务。',
          '建立基线表：HTML/CSS、JavaScript、DOM、DevTools、Git、算法；每项只填“能独立 / 需要提示 / 暂时不会”和一条证据，不凭印象打分。',
          `阅读 ${project}/README.md，只圈出今天要使用的启动命令、浏览器地址和项目文件，不提前阅读后六天任务。`,
          '在笔记写下固定求助格式：操作步骤、预期、实际、完整报错、相关文件、已尝试方法、自己的猜测。',
        ],
        expected: ['六项基线均有真实证据', '能复述遇错时先记录再修改', '没有用“学过”代替会做'],
        tests: ['学习者从基线表随机选一项，并打开对应证据', '说出向 AI 求助前必须提供的六项信息'],
      },
      {
        title: '启动唯一项目并认识文件职责', duration: 100,
        files: [`${project}/index.html`, `${project}/styles.css`, `${project}/src/data/activities.js`, `${project}/src/app.js`, 'notes/day-01.md'],
        steps: [
          `在终端 A 运行 README 中唯一启动命令，打开 ${browser}，确认页面显示“校园活动看板”和 6 条静态活动。`,
          '在 index.html 找到 header、main、筛选区、结果区和卡片区，用注释标出五个区域；不重写页面。',
          '在 styles.css 找到页面、工具栏、卡片网格和断点规则，每块只写一句职责。',
          '打开 activities.js，数出 6 个对象和 7 个固定字段；今天只读数据，不写筛选函数。',
          '打开 app.js，写出“数据 → JavaScript 入口 → DOM → 浏览器”的箭头图。',
        ],
        expected: ['页面能稳定刷新', '能说出四个文件各自职责', '知道本周所有功能都继续修改这个项目'],
        tests: ['把 h1 临时改成“我的活动看板”，刷新可见后恢复', '在 activities.js 指出 id=2 的 title 和 capacity'],
      },
      {
        title: '完成第一次固定 DevTools 排错', duration: 80,
        files: [`${project}/index.html`, `${project}/src/app.js`, 'notes/day-01.md'],
        steps: [
          'starter 在 index.html 中故意把脚本路径写成 ./src/main.js，但真实文件是 ./src/app.js；刷新先观察页面静态内容仍存在。',
          '依次查看 Console 报错、Network 中失败的 main.js、index.html 的 script 行；把三条证据写入笔记。',
          '只修改 script src 为 ./src/app.js，刷新确认 Network 200 且 Console 出现“app ready”。',
          '在 app.js 第一行设置断点，刷新并确认命中；只记录当前文件名和一项可见变量，然后继续执行。',
          '按“现象 → 证据 → 猜测 → 单点修改 → 回归”写完整排错记录。',
        ],
        expected: ['能依据 404 找到错误路径', '修复后 Console 显示 app ready', '排错记录不是一句“路径错了”'],
        tests: ['学习者自行把 app.js 临时改成 appx.js，按相同步骤复现并恢复，随后立即确认 git diff', '修复后刷新三次仍无红色错误'],
      },
      {
        title: '30 分钟数组查找基线', duration: 30,
        files: ['algorithms/day-01-array-find.js', 'notes/day-01.md'],
        steps: [algorithmRule, '固定题目：返回数组中第一个等于 target 的下标；找不到返回 -1。', '只允许 for 循环或 findIndex；今天不做 LeetCode，不学习新数据结构。'],
        expected: ['[4,2,7], target=2 返回 1', 'target=9 返回 -1', '保留第一次不会或写错的证据'],
        tests: ['空数组返回 -1', '[3], target=3 返回 0'],
      },
      {
        title: 'Git 首次提交和 Day 1 结论', duration: 90,
        files: ['notes/day-01.md', `${project}/README.md`],
        steps: [
          '运行 git status，只解释新增和修改，不把计划站点文件加入学习仓库。',
          '运行 git diff，逐个文件说明为什么变化；无法解释的改动先保留并写入疑问清单，等当天全部学习结束后放入统一审查。',
          '在 notes/day-01.md 记录今天三个最高风险，只允许从实际任务中选择。',
          '用不看笔记的方式复述项目启动、文件职责和 404 排错流程。',
          '提交 chore: establish learning baseline and workspace。',
        ],
        expected: ['Git 提交只包含学习工作区文件', '三个风险都有证据', '可以独立重新启动页面'],
        tests: ['关闭服务器后按 README 重新启动', 'git status 无遗漏的当天文件'],
      },
    ],
    optional: ['今天没有选做；完成后停止，不提前写筛选功能。'],
    review: {
      route: `${browser}、DevTools 和 notes/day-01.md`,
      steps: ['重新启动页面', '说明四个核心文件职责', '现场制造一次脚本 404 并修复', '展示基线与 Git 提交'],
      expected: ['能先找证据再改代码', '没有同时改多个猜测', '基线诚实且可追溯'],
    },
  },

  2: {
    start: {
      dir: '.', commands: ['git status'],
      open: [`${project}/reference-1280.svg`, `${project}/reference-768.svg`, `${project}/reference-375.svg`, `${project}/index.html`, `${project}/styles.css`, 'notes/day-02.md', 'algorithms/day-02-two-sum.js'],
      before: [
        'Day 1 的唯一项目能启动，脚本路径故障已经修复并提交。',
        '每日准备命令只补三张 SVG 参考图和当天笔记，不覆盖 index.html、styles.css 或 app.js。',
        `终端 A 运行 node serve.mjs ${project}；浏览器打开 ${browser}。今天只完成 HTML/CSS，不写筛选 JavaScript。`,
      ],
    },
    tasks: [
      {
        title: '把页面改成语义清楚的固定结构', duration: 90,
        files: [`${project}/index.html`, `${project}/src/data/activities.js`, 'notes/day-02.md'],
        steps: [
          '保留唯一页面，按 header、main、section、form、article 重组，不创建第二个 HTML 文件。',
          '筛选区固定包含：label+关键词 input、label+类型 select、label+仅看有名额 checkbox、type=button 的重置按钮。',
          '结果区固定包含 #result-count、#activity-list 和默认 hidden 的 #empty-state；空状态文案为“暂无符合条件的活动”。',
          '把 6 条活动暂时写成 6 个 article，每张显示 title、type、location 和 capacity/registered；Day 3 再移除静态卡片。',
          '只用 Tab 检查控件顺序；点击每个 label 必须聚焦对应控件。',
        ],
        expected: ['页面完整显示 6 张卡', '全部控件有 label', '重置按钮不会提交或刷新页面'],
        tests: ['Tab 顺序为关键词→类型→有名额→重置', '临时显示空状态时文案可见', 'HTML 中只有一个 h1'],
      },
      {
        title: '完成三档响应式布局', duration: 150,
        files: [`${project}/styles.css`, `${project}/reference-1280.svg`, `${project}/reference-768.svg`, `${project}/reference-375.svg`],
        steps: [
          '先设置全局 box-sizing:border-box、body 基础字体与颜色、main 最大宽度和页面边距。',
          '筛选区使用 Flex 或 Grid；写一句选择理由，不同时叠加两套布局。',
          '活动列表使用 Grid：1280px 三列、768px 两列、375px 单列，gap 固定 24px。',
          '卡片 padding 20px；长标题允许换行；按钮和输入框必须有清晰 :focus-visible。',
          '依次对照三张 SVG，只修布局、间距、层级和溢出，不做渐变、动画和复杂主题。',
        ],
        expected: ['1280 三列、768 两列、375 单列', '三个宽度均无横向滚动', '200% 缩放文字不被裁切'],
        tests: ['375px 下 scrollWidth===clientWidth', 'Tab 焦点始终可见', '标题改成长文本后卡片不撑破网格'],
      },
      {
        title: '无 AI 重做一个静态活动卡', duration: 60,
        files: [`${project}/index.html`, `${project}/styles.css`, 'notes/day-02.md'],
        steps: ['关闭参考图和 AI，在页面末尾从空白写第 7 张练习卡。', '只看自己前六张卡检查语义、类名和层级，修正后删除练习卡。', '在笔记画出 article 的 DOM 层级，并说明 Grid 负责什么、卡片自身负责什么。'],
        expected: ['练习卡样式与原卡一致', '没有复制整段后只改文字', '能区分容器布局和卡片内部布局'],
        tests: ['暂时把列数改为 1，所有卡片仍正常', '删除练习卡后恢复固定 6 条'],
      },
      {
        title: '30 分钟两数之和暴力版', duration: 30,
        files: ['algorithms/day-02-two-sum.js', 'notes/day-02.md'],
        steps: [algorithmRule, '只要求双重循环，不要求 Map；固定样例 [2,7,11,15],9。', '写出为什么 j 从 i+1 开始，以及 O(n²)/O(1)。'],
        expected: ['样例返回 [0,1]', '[3,3],6 返回 [0,1]'],
        tests: ['[3,2,4],6 返回 [1,2]', '不能重复使用同一元素'],
      },
      {
        title: '固定回归和提交', duration: 30,
        files: ['notes/day-02.md'],
        steps: ['执行 1280/768/375、Tab、空状态四项回归并截图或记录结果。', '运行 git diff，只提交唯一项目和当天记录。', '提交 style: build responsive activity board。'],
        expected: ['四项回归都有结果', '没有新建第二个页面项目'],
        tests: ['刷新后仍为 6 张静态卡', 'Console 无未解释错误'],
      },
    ],
    optional: ['只在全部测试通过后微调阴影；不新增页面和功能。'],
    review: {
      route: `${browser} 的 1280/768/375 三档`,
      steps: ['键盘遍历控件', '检查语义结构', '现场把三列改两列再恢复', '查看两数之和第一版'],
      expected: ['无横向滚动', '页面仍是同一个项目', 'HTML/CSS 修改能解释'],
    },
  },

  3: {
    start: {
      dir: '.', commands: ['git status'],
      open: [`${project}/src/data/activities.js`, `${project}/src/utils/activity-utils.js`, `${project}/tests/day-03.test.mjs`, `${project}/src/day-03-verify.js`, 'notes/day-03.md', 'algorithms/day-03-two-sum.js'],
      before: [
        'Day 2 的 6 张静态卡和三个响应式断点必须仍然正常。',
        '每日准备命令只新增 utils、测试和验证入口，不覆盖 index.html 或 styles.css。',
        '今天只训练数据、函数和对象；正式 DOM 渲染留到 Day 5。开始时测试失败属于预期。',
      ],
    },
    tasks: [
      {
        title: '读懂统一活动数据和函数输入输出', duration: 60,
        files: [`${project}/src/data/activities.js`, `${project}/src/utils/activity-utils.js`, 'notes/day-03.md'],
        steps: [
          '逐条确认 6 个对象都有 id/title/type/capacity/registered/startTime/location，禁止改字段名。',
          '手算 id=1 和 id=2 的剩余名额，并写出 capacity、registered、remaining 三者关系。',
          '在笔记中为 getRemaining(activity)、findActivityById(list,id)、getTotalRemainingSeats(list) 分别写输入、返回值和两个样例。',
          '先阅读测试文件，不改测试；把每个断言翻译成中文完成标准。',
        ],
        expected: ['id=1 剩余 12，id=2 剩余 0', '总剩余名额预期 105', '能区分对象、数组和函数返回值'],
        tests: ['随机指一个字段能说出类型和用途', '空数组总余量预期为 0'],
      },
      {
        title: '实现三个最小纯函数', duration: 150,
        files: [`${project}/src/utils/activity-utils.js`, `${project}/tests/day-03.test.mjs`],
        steps: [
          '先实现 getRemaining(activity)：返回 Math.max(0, capacity-registered)，不读取 DOM。',
          '再实现 findActivityById(list,id)：找到返回对象，找不到返回 undefined；不在函数内打印。',
          '最后实现 getTotalRemainingSeats(list)：使用 for 循环或 reduce 累加 getRemaining 的结果。',
          `每完成一个函数就运行 node --test ${project}/tests/day-03.test.mjs，只处理当前第一个失败。`,
          '临时把 registered 拼成 registerd，观察失败信息，记录 expected/actual 和对应函数后恢复。',
        ],
        expected: ['三个函数测试全部通过', '原 activities 未被修改', '字段拼错时能从失败结果定位'],
        tests: ['getRemaining 满员为 0', 'find id=999 为 undefined', '总余量为 105', '空数组为 0'],
      },
      {
        title: '在浏览器验证模块和数据', duration: 60,
        files: [`${project}/index.html`, `${project}/src/day-03-verify.js`, `${project}/src/utils/activity-utils.js`],
        steps: [
          '在 index.html 临时增加 p#dev-output 和 type=module 的 day-03-verify.js，不能删除原 app.js。',
          'verify 导入 activities 和三个函数，把“总剩余名额 105、id=2 已满、id=999 未找到”写入 #dev-output。',
          '刷新浏览器确认页面布局不变，验证结果可见；Console 不应出现 import/export 错误。',
          '完成截图后移除临时 script，保留 verify 文件供当天结束时统一审查。',
        ],
        expected: ['浏览器显示三个固定结果', '静态 6 张卡仍存在', '模块路径全部 200'],
        tests: ['Network 中 activities.js 和 activity-utils.js 为 200', '刷新后结果稳定'],
      },
      {
        title: '30 分钟复现两数之和', duration: 30,
        files: ['algorithms/day-03-two-sum.js', 'notes/day-03.md'],
        steps: [algorithmRule, '先不看 Day 2，从空白重写双循环；完成后再尝试用 Map，Map 不是当天通过条件。', '比较两版复杂度和自己卡住的位置。'],
        expected: ['暴力版可独立运行', '能解释 Map 保存“见过的值→下标”'],
        tests: ['[2,7,11,15],9 返回 [0,1]', '[3,3],6 返回 [0,1]'],
      },
      {
        title: '无 AI 重写、记录和提交', duration: 60,
        files: [`${project}/src/rebuild/day-03-functions.js`, 'notes/day-03.md'],
        steps: ['关闭 activity-utils.js，在空白 rebuild 文件重写 getRemaining 和 findActivityById。', '运行固定输入，之后再对照主实现，只记录差异，不复制整个文件。', '更新 A-E，提交 feat: add activity data functions。'],
        expected: ['至少一个函数无提示重写成功', '差异记录包含具体条件或返回值'],
        tests: ['id=2 剩余 0', 'id=999 返回 undefined'],
      },
    ],
    optional: ['Map 版两数之和仅在必做全部完成后尝试。'],
    review: {
      route: `${project}/tests/day-03.test.mjs 和 ${browser}`,
      steps: ['运行测试', '口述三个函数输入输出', '现场把 id=2 改为超额报名并验证剩余仍为 0', '查看无 AI 重写'],
      expected: ['测试稳定通过', '纯函数不访问 DOM', '能根据失败信息定位字段'],
    },
  },

  4: {
    start: {
      dir: '.', commands: ['git status', `node --test ${project}/tests/day-03.test.mjs`],
      open: [`${project}/src/data/activities.js`, `${project}/src/utils/activity-utils.js`, `${project}/tests/day-04.test.mjs`, 'notes/day-04.md', 'algorithms/day-04-remove-element.js'],
      before: [
        'Day 3 的三个纯函数测试通过；今天直接扩展同一个 activity-utils.js。',
        '开始时 Day 04 测试失败属于预期，Day 03 测试必须继续通过。',
        '今天不操作 DOM，不在 app.js 中复制筛选逻辑。',
      ],
    },
    tasks: [
      {
        title: '掌握四个会实际使用的数组方法', duration: 60,
        files: [`${project}/src/practice/day-04-array-methods.js`, 'notes/day-04.md'],
        steps: [
          '固定 numbers=[1,2,3,4]，每行先写预期，再运行 map 平方、filter 偶数、find 第一个大于 2、reduce 求和。',
          '每个方法写清返回值，确认原 numbers 没变。',
          '换成 activities，分别得到标题数组、技术活动、id=4 活动和总容量。',
          '关闭资料重写 filter 和 reduce 两例；不继续学习 flatMap、reduceRight 等新方法。',
        ],
        expected: ['固定输出 [1,4,9,16]、[2,4]、3、10', '能用一句话区分 map/filter/find/reduce'],
        tests: ['空数组 filter 返回 []', 'reduce 带初始值 0 时空数组返回 0'],
      },
      {
        title: '实现三种筛选和时间排序', duration: 160,
        files: [`${project}/src/utils/activity-utils.js`, `${project}/tests/day-04.test.mjs`],
        steps: [
          '实现 filterByType(list,type)：type=all 返回新数组，否则按 type 精确匹配。',
          '实现 filterAvailable(list)：只保留 getRemaining(item)>0。',
          '实现 filterByKeyword(list,keyword)：trim+toLowerCase，匹配 title；空关键词返回新数组。',
          '实现 sortByStartTime(list)：先 [...list] 再排序，禁止改变原数组。',
          '每写一个函数运行 Day 03+04 全部测试；发现回归先停，不继续下一个函数。',
        ],
        expected: ['技术 id [1,5]', '可报名 id [1,3,4,5,6]', 'JavaScript 得 id=5', '时间排序 [3,1,5,2,4,6]'],
        tests: ['type=all 返回 6 条且不是原数组引用', '关键词前后空格和大小写不影响结果', '排序后原 id 顺序仍为 [1,2,3,4,5,6]'],
      },
      {
        title: '建立组合筛选唯一入口', duration: 70,
        files: [`${project}/src/utils/activity-utils.js`, `${project}/tests/day-04.test.mjs`, 'notes/day-04.md'],
        steps: [
          '实现 applyFilters(list,{keyword,type,availableOnly})，内部依次复用已有三个函数，不重写条件。',
          '固定组合：keyword=JavaScript,type=技术,availableOnly=true 得 id=5。',
          '固定空态：keyword=JavaScript,type=文艺 得 0 条。',
          '画出 list → keyword → type → available → result 的数据流，并标出每步数组长度。',
        ],
        expected: ['组合条件稳定且不修改原数组', '筛选函数只有一套实现'],
        tests: ['默认条件返回 6 条', '文艺+availableOnly 返回 0 条', '不存在结果返回 [] 而非 null'],
      },
      {
        title: '30 分钟移除元素', duration: 30,
        files: ['algorithms/day-04-remove-element.js', 'notes/day-04.md'],
        steps: [algorithmRule, '固定 nums=[3,2,2,3],val=3；先写读指针和写指针分别做什么。', '只要求原地保留前 k 个有效元素。'],
        expected: ['k=2，前两个元素 [2,2]', '能解释为什么写指针只在保留元素时移动'],
        tests: ['空数组 k=0', '[1,1],val=1 得 k=0'],
      },
      {
        title: '无 AI 组合函数复现和提交', duration: 40,
        files: [`${project}/src/rebuild/day-04-filter.js`, 'notes/day-04.md'],
        steps: ['关闭主实现，用 25 分钟从空白写一个只组合已有函数的 applyFilters。', '运行两个固定组合，对照后只修具体遗漏。', '提交 feat: add composable activity filters。'],
        expected: ['没有把 DOM 写进纯函数', 'Day 03+04 测试全部通过'],
        tests: ['技术+有名额得到 [1,5]', '重置条件得到 6 条'],
      },
    ],
    optional: ['不新增筛选维度；有余力只补一个空关键词测试。'],
    review: {
      route: `${project}/tests/day-04.test.mjs`,
      steps: ['运行全部函数测试', '现场组合两个筛选条件', '解释为何排序前复制数组', '检查 30 分钟算法记录'],
      expected: ['Day 3 无回归', '组合函数只复用已有函数', '学习者能预测数组长度变化'],
    },
  },

  5: {
    start: {
      dir: '.', commands: ['git status', `node --test ${project}/tests/day-03.test.mjs ${project}/tests/day-04.test.mjs`],
      open: [`${project}/index.html`, `${project}/src/app.js`, `${project}/src/utils/activity-utils.js`, `${project}/src/data/activities.js`, 'notes/day-05.md', 'algorithms/day-05-valid-parentheses.js'],
      before: [
        'Day 4 的全部纯函数测试通过；今天必须直接导入并复用，禁止在事件回调里复制筛选条件。',
        `终端 A 运行 node serve.mjs ${project}；浏览器打开 ${browser}。`,
        'Day 1 的 app.js 已保留 Day 5 TODO；每日准备命令只补独立选择器故障题、算法文件和当天笔记，不覆盖主项目。',
      ],
    },
    tasks: [
      {
        title: '建立 DOM 查询、渲染和事件最小闭环', duration: 75,
        files: [`${project}/index.html`, `${project}/src/app.js`, 'notes/day-05.md'],
        steps: [
          '在 app.js 顶部集中查询 keyword、type、availableOnly、reset、resultCount、activityList、emptyState 七个元素。',
          '任一元素找不到就抛出明确错误，不在后续代码中到处使用可选链掩盖问题。',
          '先写 renderActivities(list)：清空容器，再用 map+join 或 createElement 渲染 article，禁止把 onclick 字符串写进 HTML。',
          '写 renderResultCount(count) 和 renderEmptyState(count)，固定文案“找到 N 个活动”和“暂无符合条件的活动”。',
          '首次只调用 renderActivities(activities)，确认 Day 2 的 6 张静态卡改由数据生成且布局不变。',
        ],
        expected: ['刷新后仍显示 6 张卡', '结果数为找到 6 个活动', '静态卡片已从 index.html 删除'],
        tests: ['传 [] 时卡片区为空且空状态可见', '传一条数据时结果数为 1', 'Console 无 null 访问错误'],
      },
      {
        title: '接通组合筛选、重置和事件委托', duration: 150,
        files: [`${project}/src/app.js`, `${project}/src/utils/activity-utils.js`, `${project}/index.html`],
        steps: [
          '写 readFilters()，只返回 {keyword,type,availableOnly}，不在其中渲染页面。',
          '写 updateView()：读取筛选条件，调用 Day 4 的 applyFilters，再统一渲染卡片、结果数和空状态。',
          'keyword 使用 input 事件，type 和 availableOnly 使用 change 事件；三个事件都只调用 updateView。',
          'resetFilters() 把关键词清空、类型改 all、checkbox 设 false，再调用一次 updateView。',
          '在 #activity-list 上绑定一个 click，使用 closest([data-activity-id]) 事件委托，把点击的 id 写入 #selected-activity。',
        ],
        expected: ['搜索 JavaScript 得 1 条', '类型技术得 2 条', '文艺+仅看有名额得 0 条和空状态', '重置恢复 6 条'],
        tests: ['关键词前后空格仍匹配', '技术+有名额得到 2 条', '点击 id=4 卡片显示“已选择活动 4”', '动态重渲染后点击仍有效'],
      },
      {
        title: '用 DevTools 修复一个真实 DOM 故障', duration: 75,
        files: [`${project}/practice/day-05-selector-fault/index.html`, `${project}/practice/day-05-selector-fault/app.js`, `${project}/src/app.js`, 'notes/day-05.md'],
        steps: [
          '先打开 practice/day-05-selector-fault：其中 HTML 是 #result-count，app.js 故意查询 #results-count；复现 null 错误。',
          '按 Console 行号 → 故障 HTML 真实 id → 故障 app.js 选择器顺序收集证据，只改选择器。',
          '回到主项目，在 updateView 的 result 产生后设断点，依次测试默认、技术、文艺+有名额，记录数组长度 6、2、0。',
          '回归主项目的重置与事件委托，证明故障练习没有污染主实现。',
        ],
        expected: ['选择器修复后全部交互恢复', '断点能看到三个固定长度', '笔记包含一次完整证据链'],
        tests: ['再次临时写错 keyword id，能按同样方法恢复', 'Console 最终无红色错误'],
      },
      {
        title: '30 分钟理解栈和有效括号', duration: 30,
        files: ['algorithms/day-05-valid-parentheses.js', 'notes/day-05.md'],
        steps: [algorithmRule, '先画输入 ()[]{} 时栈的 push/pop；只实现基础版本。', '若 30 分钟未完成，保留代码并写清卡在匹配映射还是栈空判断。'],
        expected: ['()[]{} 为 true', '(] 为 false', '知道右括号到来时检查栈顶'],
        tests: ['([)] 为 false', '{[]} 为 true'],
      },
      {
        title: '完整页面回归和提交', duration: 30,
        files: ['notes/day-05.md'],
        steps: ['按固定路线执行：初始6→JavaScript1→技术2→文艺+有名额0→重置6→点击id4。', '运行 Day 03+04 测试，确认 DOM 接入未修改纯函数。', '提交 feat: connect activity filters to DOM。'],
        expected: ['固定路线全部通过', '测试和 Console 都干净'],
        tests: ['375px 下交互后仍无横向滚动', '刷新后默认恢复 6 条'],
      },
    ],
    optional: ['不做收藏、不做 localStorage；只在有余力时为结果数增加 aria-live。'],
    review: {
      route: `${browser} 和 DevTools`,
      steps: ['执行固定用户路线', '沿 readFilters→applyFilters→updateView→DOM 解释数据流', '现场制造选择器错误并修复', '点击动态卡片'],
      expected: ['只有一套筛选逻辑', '事件委托在重渲染后有效', '能依据行号排错'],
    },
  },

  6: {
    start: {
      dir: '.', commands: ['git status', `node --test ${project}/tests/day-03.test.mjs ${project}/tests/day-04.test.mjs`],
      open: [`${project}/src/app.js`, `${project}/src/utils/activity-utils.js`, `${project}/src/rebuild/day-06-filter.js`, `${project}/src/rebuild/day-06-dom.js`, `${project}/practice/day-06-faults/README.md`, 'notes/day-06.md', 'algorithms/day-06-review.js'],
      before: [
        '今天不增加新功能、不看新课程；只巩固 Day 1～5 的真实薄弱项。',
        '每日准备命令只生成两个空白重做文件和两个独立故障 starter，不覆盖主项目。',
        `终端 A 运行 node serve.mjs ${project}；主项目必须先通过 Day 5 固定路线。`,
      ],
    },
    tasks: [
      {
        title: '按证据选择两个重做目标', duration: 45,
        files: ['notes/day-01.md', 'notes/day-02.md', 'notes/day-03.md', 'notes/day-04.md', 'notes/day-05.md', 'notes/day-06.md'],
        steps: [
          '汇总 Day 1～5 每项 A-E、未通过测试、AI 生成过的关键代码和仍未解释的错误。',
          '选择一个阻塞项目运行的能力和一个 AI 依赖最高的能力；若没有明确结果，固定选择 applyFilters 与 updateView。',
          '为两个目标分别写输入、输出、完成测试和最长时间，防止变成“再看一遍代码”。',
        ],
        expected: ['两个目标都有证据和完成标准', '没有新增第三个目标'],
        tests: ['学习者逐条核对：每个选择理由都引用了旧笔记中的具体证据'],
      },
      {
        title: '无 AI 重做筛选函数和 DOM 更新', duration: 180,
        files: [`${project}/src/rebuild/day-06-filter.js`, `${project}/src/rebuild/day-06-dom.js`, 'notes/day-06.md'],
        steps: [
          '关闭主项目实现和 AI，先在 day-06-filter.js 从空白写 getRemaining、filterByKeyword、filterByType、filterAvailable、applyFilters。',
          '用固定数据执行默认6、技术2、文艺+有名额0、JavaScript1；最多 90 分钟，到点保留未完成。',
          '再在 day-06-dom.js 写伪 DOM 版本的 readFilters、updateView、resetFilters，允许用注释表示 render 函数，但数据流必须完整。',
          '完成后才打开主项目逐项对照，把遗漏记录为条件、返回值、事件或渲染职责，不复制粘贴覆盖重做文件。',
          '把重做结果标 A-E，并记录两处最具体差异。',
        ],
        expected: ['至少一个核心链路能从空白完成', '未完成部分被如实保留', '没有边看边抄'],
        tests: ['applyFilters 默认6、技术2、空态0', 'reset 后三个筛选值恢复默认', '纯函数未访问 document'],
      },
      {
        title: '修复两个固定故障题', duration: 75,
        files: [`${project}/practice/day-06-faults/import-path/index.html`, `${project}/practice/day-06-faults/import-path/app.js`, `${project}/practice/day-06-faults/delegation/index.html`, `${project}/practice/day-06-faults/delegation/app.js`, `${project}/practice/day-06-faults/README.md`, 'notes/day-06.md'],
        steps: [
          '故障一：script 请求 ./app-main.js，但真实文件为 app.js；只用 Console 和 Network 恢复。',
          '故障二：监听器在动态卡片渲染前绑定给空 NodeList；用稳定父容器事件委托修复。',
          '每题只写复现、证据、一个猜测、单点修改和回归；禁止把主项目正确代码整段复制进故障题。',
          '修复后刷新三次，并为故障二新增一张动态卡片验证。',
        ],
        expected: ['导入故障恢复且 Network 200', '动态卡片全部可点击', '两份排错记录完整'],
        tests: ['故意再次改错文件名能独立恢复', '新增第 4 张卡仍能点击'],
      },
      {
        title: '30 分钟重做本周旧算法', duration: 30,
        files: ['algorithms/day-06-review.js', 'notes/day-06.md'],
        steps: [algorithmRule, '从 Day 1～5 中选择辅助等级最高的一题；并列时固定两数之和。', '不看旧代码，结束后只比较思路、边界和复杂度。'],
        expected: ['没有新增题型', '保留第一次和重做结果对照'],
        tests: ['使用与第一次不同的一组输入'],
      },
      {
        title: '主项目全量回归和提交', duration: 30,
        files: ['notes/day-06.md'],
        steps: ['回归 1280/375、初始6、三种筛选、空态、重置、id4 点击。', '运行全部 node:test，确认两个故障题不影响主项目。', '提交 refactor: rebuild week-one core flow。'],
        expected: ['主项目无回归', '下周只列一个最高风险'],
        tests: ['Console 无红色错误', 'git diff 可逐项解释'],
      },
    ],
    optional: ['无选做；完成后停止。'],
    review: {
      route: `${browser}、两个 rebuild 文件和两个 fault 页面`,
      steps: ['检查目标选择证据', '抽一个重做函数现场改条件', '随机复现一题故障', '执行主项目固定路线'],
      expected: ['重做不是复制', '能先复现再修复', '主项目稳定'],
    },
  },

  7: {
    start: {
      dir: '.', commands: ['git status', 'git log --oneline -7'],
      open: [`${project}/index.html`, `${project}/src/app.js`, `${project}/src/utils/activity-utils.js`, 'notes/week-01-review.md', 'algorithms/day-07-review.js'],
      before: [
        '轻量日只做复盘、一个无 AI 小改动和旧题，不看新课程。',
        '每日准备命令检查唯一项目和 Day 6 重做文件存在，只补复盘模板和算法空白文件。',
        `终端 A 运行 node serve.mjs ${project}；学习任务 120 分钟，验收另计 30 分钟。`,
      ],
    },
    tasks: [
      {
        title: '完成固定项目演示', duration: 30,
        files: [`${project}/index.html`, `${project}/src/app.js`, 'notes/week-01-review.md'],
        steps: ['按顺序演示 1280/375、初始6、JavaScript1、技术2、有名额、空态、重置、点击id4。', '每一步只记录通过或具体失败，不在演示中临时大改代码。', 'Console 保持打开，记录是否出现未解释错误。'],
        expected: ['固定路线可在 8 分钟内完成', '失败项有准确步骤'],
        tests: ['刷新后恢复默认6', '375px 无横向滚动'],
      },
      {
        title: '无 AI 完成一个固定小改动', duration: 40,
        files: [`${project}/src/utils/activity-utils.js`, `${project}/tests/day-04.test.mjs`, 'notes/week-01-review.md'],
        steps: [
          '关闭 AI，把关键词搜索从“只匹配 title”改成“匹配 title 或 type”；只能修改 filterByKeyword 和对应测试。',
          '先增加测试：关键词技术得到 id [1,5]；再修改实现，不能在 DOM 层补第二个条件。',
          '运行 Day 03+04 全部测试并回归页面；30 分钟到点停止，最后 10 分钟记录。',
        ],
        expected: ['搜索技术显示2条', '搜索JavaScript显示1条', '文艺+关键词技术显示0条', '重置恢复6条'],
        tests: ['关键词前后空格仍有效', '原有标题搜索测试不回归'],
      },
      {
        title: '30 分钟旧算法复盘', duration: 30,
        files: ['algorithms/day-07-review.js', 'notes/week-01-review.md'],
        steps: [algorithmRule, '固定重做 Day 6 仍未独立的那一题；若 Day 6 已独立，则重做有效括号。', '不新增解法，只比较提示次数和耗时。'],
        expected: ['有 Day 6/Day 7 前后对照', '复杂度和一个边界完整'],
        tests: ['使用一个新边界输入'],
      },
      {
        title: '形成第一周证据结论', duration: 20,
        files: ['notes/week-01-review.md'],
        steps: ['为 HTML语义、CSS响应式、JS纯函数、DOM事件、DevTools、Git、算法各写 A-E 和一个文件/提交证据。', '只列一个下周最高风险；若核心筛选或排错仍为 D/E，写明 Day 8 先复现哪一项。', '提交 docs: complete week-one evidence review。'],
        expected: ['七项均有证据', '没有用“感觉掌握”作结论', '只留下一个最高风险'],
        tests: ['学习者从七项中随机抽两项，均能找到对应代码或提交'],
      },
    ],
    optional: ['无；120 分钟结束后停止学习。'],
    review: {
      route: `${browser}、测试和 notes/week-01-review.md`,
      steps: ['执行完整演示', '运行全部函数测试', '检查“搜索技术”现场改动', '随机问纯函数、事件委托和 DevTools 各一题'],
      expected: ['项目可重复演示', '现场改动只发生在数据层', '下一周风险由证据支持'],
    },
  },
}
