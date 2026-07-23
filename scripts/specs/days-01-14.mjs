// Detailed executable specifications for days 01–14.
// This file is intentionally data-only so the plan generator can render it later.

const ACTIVITY_DATA_CODE = `export const activities = [
  { id: 1, title: '前端入门工作坊', type: '技术', capacity: 30, registered: 18, startTime: '2026-08-01T09:00:00', location: '教学楼 A101' },
  { id: 2, title: '校园歌手赛', type: '文艺', capacity: 100, registered: 100, startTime: '2026-08-03T19:00:00', location: '大学生活动中心' },
  { id: 3, title: '晨跑打卡', type: '体育', capacity: 50, registered: 22, startTime: '2026-07-30T07:00:00', location: '东操场' },
  { id: 4, title: '简历交流会', type: '就业', capacity: 40, registered: 35, startTime: '2026-08-05T14:00:00', location: '图书馆报告厅' },
  { id: 5, title: 'JavaScript 读书会', type: '技术', capacity: 20, registered: 8, startTime: '2026-08-02T15:00:00', location: '教学楼 B203' },
  { id: 6, title: '志愿服务说明会', type: '公益', capacity: 60, registered: 12, startTime: '2026-08-06T10:00:00', location: '综合楼 201' },
]`;

const ALGORITHM_SAVE_RULE = '在 algorithms/ 对应文件中保留：题意、两个样例、自己的第一版、最终代码、复杂度、AI 辅助等级；不要只保存 LeetCode 通过截图。';

export const daySpecs = {
  1: {
    start: {
      dir: '.',
      commands: ['git status'],
      open: ['day-01/baseline.md', 'day-01/html/index.html', 'day-01/javascript/tasks.js', 'day-01/dom/index.html', 'day-01/vue-reading/App.vue'],
      before: [
        '每日准备命令已生成 baseline、HTML/CSS 故障页、两张参考图、固定 JS/DOM starter、可运行 Vue 小项目和算法空白文件；若命令报告缺文件，停止并把完整输出交给检查者。',
        'baseline.md 建表：任务｜独立完成｜提示后完成｜未完成｜耗时｜主要困难。',
        '写下四条规则：不补课、不删除失败代码、每项到点停止、D/E 不等于失败。',
      ],
    },
    tasks: [
      {
        title: '固定页面 HTML/CSS 诊断', duration: 70,
        files: ['day-01/html/index.html', 'day-01/html/style.css', 'day-01/html/expected-desktop.svg', 'day-01/html/expected-mobile.svg'],
        steps: [
          'starter 的 index.html 固定包含 header、main、一个有 email/password 的 form、button 和 3 个 article；故意使用无语义 div、未关联 label、缺少 button type。',
          'style.css 已给颜色和字体，留下 TODO：统一 box-sizing、24px 卡片间距、桌面三列、375px 单列、可见 focus 样式。',
          '先在 1280px 对照 每日准备命令生成的 expected-desktop.svg，再用 DevTools 切到 375px 对照 expected-mobile.svg。',
          '只修改语义、关联、布局、溢出和焦点；不得重新设计页面。',
        ],
        expected: ['1280px 为三列且卡片等宽', '375px 为单列且无横向滚动', '点击 label 能聚焦对应输入框', 'Tab 到按钮时有清晰焦点框'],
        tests: ['浏览器宽度 1280px 截图', '浏览器宽度 375px 检查 document.documentElement.scrollWidth === document.documentElement.clientWidth', '仅用 Tab 依次经过邮箱、密码、提交按钮'],
      },
      {
        title: '固定数据、函数与 DOM 诊断', duration: 105,
        files: ['day-01/javascript/activities.js', 'day-01/javascript/tasks.js', 'day-01/javascript/verify.js', 'day-01/dom/index.html', 'day-01/dom/app.js'],
        steps: [
          `activities.js 写入固定数据：${ACTIVITY_DATA_CODE}`,
          'tasks.js 只提供精确 TODO：export function filterByType(list, type)；export function getTotalRemainingSeats(list)；export function findActivityById(list, id)。type 为 all 时返回全部；剩余名额逐项使用 capacity - registered。',
          'verify.js 固定调用并打印：filterByType(activities, 技术).map(item => item.id)、getTotalRemainingSeats(activities)、findActivityById(activities, 999)。',
          'dom/index.html 预置 #type-filter（all/技术/文艺/体育/就业/公益）、#apply-filter、#result-count；app.js TODO 为按钮点击后调用 filterByType 并把数量写成“共 N 个活动”。',
          '功能跑通后把 app.js 中 item.type 故意改成 item.typo，记录 Console/实际结果，再恢复。',
        ],
        expected: ['技术活动 id 为 [1, 5]', '总剩余名额为 105', '查找 id 999 返回 undefined', '选择技术并点击后页面显示“共 2 个活动”'],
        tests: ['空数组的剩余名额为 0', 'type=all 返回 6 条', '选择文艺后显示 1 条', '字段名改错后能指出筛选条件读到了 undefined'],
      },
      {
        title: '最小 Vue 组件阅读与预设故障', duration: 85,
        files: ['day-01/vue-reading/App.vue', 'day-01/vue-reading/README.md'],
        steps: [
          '打开 每日准备命令已生成的 vue-reading/README.md；在终端 A 运行其中唯一启动命令并保持运行，在终端 B 继续执行 git 和其他命令。',
          "App.vue starter 固定为：script 中 const count = ref(0) 与 function increment(){ count.value++ }；template 中按钮故意写 @click=\"increase\"，页面因此点击无效并出现警告。",
          '先用三种颜色标出 template、script setup、style，再画 count → template → click → increment → count 的箭头图。',
          '只根据 Console 修复 increase/increment 名称不一致；随后把标题改为“我的 Vue 诊断”，把每次 +1 改成 +2。',
        ],
        expected: ['修复前点击无变化且 Console 指向未定义处理函数', '修复后首次点击 0 变 1', '迁移后首次点击 0 变 2', '能指出 count 的定义和读取位置'],
        tests: ['刷新后为 0', '连续点击三次迁移版本得到 6', '不看旧代码口述数据流'],
      },
      {
        title: '两数之和基线与归档', duration: 100,
        files: ['day-01/algorithms/two-sum.js', 'day-01/baseline.md'],
        steps: [
          '打开 https://leetcode.cn/problems/two-sum/，先在文件中写 nums=[2,7,11,15], target=9 和 nums=[3,3], target=6 的预期下标。',
          '最多 25 分钟写双重循环；不会哈希不算未完成，只在看提示后写一句“哈希表保存见过的值和下标”。',
          '运行两个样例，写双重循环的 O(n²)/O(1)；若完成哈希版，再写 O(n)/O(n)。',
          `${ALGORITHM_SAVE_RULE} 最后把六项诊断标 A-E，并只列三个后续最高优先级问题。`,
        ],
        expected: ['两个样例分别返回 [0,1] 与 [0,1]', '保留失败代码和首次耗时', 'baseline 六项均有 A-E，不允许空白'],
        tests: ['输入 [3,2,4], target=6 返回 [1,2]', '口述为什么同一元素不能使用两次'],
      },
    ],
    optional: ['只在仍有精力时理解 Map 哈希解法；不要求当天独立复现。'],
    review: {
      route: '依次打开 html/index.html → dom/index.html → vue-reading/App.vue → baseline.md。',
      steps: ['演示宽窄屏布局', '选择技术筛选并显示 2', '解释并修复 Vue 处理函数名错误', '展示两数之和第一版和 A-E 记录'],
      expected: ['能诚实区分独立、提示和未完成', '按钮临时由 +1 改成 +2', '说出报错先看现象、Console、文件行号'],
    },
  },

  2: {
    start: {
      dir: '.',
      commands: ['git status'],
      open: ['notes/day-02.md', 'auth-prototype/wireframe.svg', 'auth-prototype/index.html', 'auth-prototype/styles.css', 'auth-prototype/app.js'],
      before: ['每日准备命令已生成 wireframe.svg、semantic-examples.html、表单骨架和 notes/day-02.md；wireframe 为桌面居中单卡片，顶部登录/注册切换，下面为表单。', 'notes/day-02.md 写三栏：已知道、不确定、完成标准。', '本日只做浏览器端校验，不连接真实接口。'],
    },
    tasks: [
      {
        title: '语义、label 与错误提示最小例', duration: 80,
        files: ['auth-prototype/semantic-examples.html', 'notes/day-02.md'],
        steps: ['直接阅读 MDN“HTML 文本基础”“HTML 表单指南”中的 label、button、required、aria-live 小节，停止于客户端表单验证结束。', 'semantic-examples.html 依次写 main/form、label for=email + input id=email、button type=submit、p id=email-error role=alert。', '先故意让 label 的 for 与 input id 不一致，点击 label 观察不能聚焦，再修复。', '在笔记写出 button 在 form 内默认 type 是 submit，并写为什么切换标签按钮必须用 type=button。'],
        expected: ['点击“邮箱”文字可聚焦输入框', '错误容器为空时不占用错误文案', '切换按钮不会提交表单'],
        tests: ['删除 type=button 时说明页面为何可能刷新', '只用键盘聚焦并触发两个按钮'],
      },
      {
        title: '登录/注册固定表单', duration: 155,
        files: ['auth-prototype/index.html', 'auth-prototype/styles.css', 'auth-prototype/app.js', 'auth-prototype/wireframe.svg'],
        steps: [
          'index.html 固定包含 #show-login、#show-register、#login-form、#register-form；登录字段为 email/password/remember，注册字段为 name/email/password/confirm-password/agreement。',
          'app.js 精确 TODO：两个 type=button 的切换按钮控制 hidden；submit 时 preventDefault；邮箱为空提示“请输入邮箱”；密码少于 8 位提示“密码至少 8 位”；确认密码不一致显示对应错误。',
          '错误 p 使用 role=alert；错误出现后为输入框设置 aria-invalid=true；修复输入后清除错误。',
          'styles.css 只完成 wireframe：卡片最大宽度 440px、字段纵向排列、焦点轮廓明显；不追求复杂视觉。',
        ],
        expected: ['初始只显示登录表单', '切到注册后登录表单隐藏且页面不刷新', '空邮箱和短密码分别出现固定错误', '正确登录数据提交时显示“校验通过（未连接接口）”'],
        tests: ['Tab 顺序：切换按钮→邮箱→密码→记住我→提交', '注册密码 abcdefgh 与确认 abcdefg 显示不一致', '点击错误字段 label 能聚焦字段'],
      },
      {
        title: '移除元素与无 AI 复现', duration: 125,
        files: ['algorithms/day-02-remove-element.js', 'notes/day-02.md'],
        steps: ['打开 https://leetcode.cn/problems/remove-element/；写 nums=[3,2,2,3], val=3 的预期 k=2，前两个元素为 [2,2]。', '先写“读指针扫描，写指针只接收不等于 val 的值”，再编码；最多 20 分钟后只看一次提示。', `${ALGORITHM_SAVE_RULE}`, '关闭资料，在 semantic-examples.html 从空白重写 label、input、错误 p、submit button 四个元素；最后 git diff 并提交 feat: build accessible auth page。'],
        expected: ['样例 k=2', '能解释读指针与写指针', '无 AI 重写的 label 仍能聚焦输入框'],
        tests: ['nums=[], val=1 得到 k=0', 'nums=[1,1], val=1 得到 k=0'],
      },
    ],
    optional: ['给注册成功提示增加 aria-live=polite；不做真实注册。'],
    review: { route: '打开 auth-prototype/index.html，从登录切到注册并制造两种错误。', steps: ['键盘完成一次登录校验', '口述 label、button type、role=alert 的作用', '现场新增“昵称不能为空”的错误提示'], expected: ['页面不刷新', '错误与字段关联清楚', '新增提示后能用键盘到达昵称字段'] },
  },

  3: {
    start: {
      dir: '.',
      commands: ['git status'],
      open: ['card-layout/expected-1280.svg', 'card-layout/expected-768.svg', 'card-layout/expected-375.svg', 'card-layout/index.html', 'card-layout/style.css', 'auth-prototype/styles.css'],
      before: ['每日准备命令已生成 layout-lab.html/css、三张固定参考图、卡片页骨架和 notes/day-03.md；卡片文字使用 Day 01 活动数据前三条。', '验收宽度固定为 1280、768、375，不凭感觉拖动。', '“空状态组件”本日指普通 HTML 区块，不是 Vue 组件。'],
    },
    tasks: [
      { title: 'Flex、Grid、定位最小实验', duration: 80, files: ['card-layout/layout-lab.html', 'card-layout/layout-lab.css'], steps: ['直接阅读 MDN“Flexbox”“Grid 布局”“定位”各自的基础示例，不读高级章节。', '写 .toolbar：display:flex、justify-content:space-between、align-items:center。', '写 .cards：display:grid、grid-template-columns:repeat(3,minmax(0,1fr))、gap:24px。', '写 .card{position:relative} 与右上角 .badge{position:absolute}；随后删除 relative，观察 badge 参照物变化，再恢复。'], expected: ['工具栏两端对齐', '三卡等宽且间距 24px', 'badge 位于各自卡片右上角'], tests: ['解释 absolute 相对最近的非 static 祖先定位', '临时将容器变窄并指出 minmax(0,1fr) 的作用'] },
      { title: '按固定截图还原卡片与空状态', duration: 160, files: ['card-layout/index.html', 'card-layout/style.css', 'card-layout/expected-1280.svg', 'card-layout/expected-768.svg', 'card-layout/expected-375.svg'], steps: ['index.html 固定写 header、筛选栏、#activity-list 和 #empty-state；三张 article 使用前端工作坊、校园歌手赛、晨跑打卡。', '1280px 使用三列；小于 900px 两列；小于 600px 单列；卡片内边距 20px，网格间距 24px。', '空状态固定文案“暂无符合条件的活动”，默认 hidden；不写 JS。', '设置全局 box-sizing:border-box；为链接和按钮补 :focus-visible。', '分别对照 每日准备命令生成的三张 SVG 参考图，只修布局、间距、字体层级和溢出。'], expected: ['1280 三列、768 两列、375 单列', '三个宽度都无横向滚动', '空状态取消 hidden 后居中显示固定文案'], tests: ['375px 检查 scrollWidth 等于 clientWidth', '200% 缩放后文字不被裁切', 'Tab 焦点可见'] },
      { title: 'auth 响应式、二分查找与记录', duration: 120, files: ['auth-prototype/styles.css', 'algorithms/day-03-binary-search.js', 'notes/day-03.md'], steps: ['auth 卡片在 >=768px 宽 440px 且居中；<480px 占满可用宽度并保留 16px 页面边距。', '打开 https://leetcode.cn/problems/binary-search/；固定使用左闭右闭区间，while 条件为 left <= right，并写 nums=[-1,0,3,5,9,12], target=9。', '写 target=2 与空数组边界，记录每轮 left/mid/right。', `${ALGORITHM_SAVE_RULE} 关闭资料重写三列/两列/一列三个媒体规则，提交 style: finish responsive auth layout。`], expected: ['auth 在 375px 不溢出', '二分样例返回 4，target=2 返回 -1', '能解释为什么 left <= right'], tests: ['nums=[5], target=5 返回 0', 'nums=[5], target=-5 返回 -1'] },
    ],
    optional: ['只在必做全部通过后微调阴影和过渡，不增加新布局。'],
    review: { route: '打开 card-layout/index.html，在 DevTools 依次切 1280/768/375，再打开 auth-prototype。', steps: ['解释 Flex 与 Grid 选择', '指出 badge 定位上下文', '现场把 1280 三列规则改成四列，再恢复'], expected: ['三个断点无溢出', '5 分钟内把 375px 维持单列', '能口述 box-sizing 的作用'] },
  },

  4: {
    start: { dir: '.', commands: ["git status"], open: ['data-utils/array-methods.js', 'data-utils/activities.js', 'data-utils/activity-utils.js', 'data-utils/verify.js', 'data-utils/index.html', 'notes/day-04.md'], before: ['每日准备命令已生成 array-methods.js、固定数据、精确 TODO、verify.js、index.html 和笔记；不得另建同名文件。', '在终端 A 从当前 frontend-40-day-learning-lab 运行 npx vite . --port 5174 并保持运行；终端 B 留在同一目录执行 git 或其他命令。', '浏览器统一打开 http://localhost:5174/data-utils/。'] },
    tasks: [
      { title: '数组方法最小例', duration: 80, files: ['data-utils/array-methods.js'], steps: ['直接阅读 MDN Array 的 map、filter、find、reduce 四个方法说明和首个例子。', '使用 numbers=[1,2,3,4]：map 得平方数组；filter 得偶数；find 找第一个 >2；reduce 求和。', '每个调用前先在注释写预期，再 Console 验证；随后解释是否修改原数组。', '关闭资料从空白重写 filter 与 reduce 两例。'], expected: ['输出 [1,4,9,16]、[2,4]、3、10', '原 numbers 保持 [1,2,3,4]'], tests: ['空数组 filter 返回 []', '空数组 reduce 使用初始值 0 返回 0'] },
      { title: '固定活动工具函数', duration: 165, files: ['data-utils/activities.js', 'data-utils/activity-utils.js', 'data-utils/verify.js', 'data-utils/index.html'], steps: [`activities.js 写入：${ACTIVITY_DATA_CODE}`, 'activity-utils.js 精确 TODO：filterByType(list,type)，type=all 返回副本；sortByStartTime(list) 不修改原数组；getTotalRemainingSeats(list)；findActivityById(list,id)；formatActivity(item) 返回“标题｜类型｜剩余 X 个名额”。', 'verify.js 分别打印技术活动 id、按时间排序 id、总余量、id=999、第一条格式化结果。', '先写预期输出再打开 index.html 看 Console；结果不同记录“预期/实际/猜测”。', '把工具函数 export、verify import；不要把数据挂到 window。'], expected: ['技术 id [1,5]', '排序 id [3,1,5,2,4,6]', '总余量 105', 'id=999 为 undefined', '第一条格式化为“前端入门工作坊｜技术｜剩余 12 个名额”'], tests: ['原 activities 顺序仍为 [1,2,3,4,5,6]', 'filterByType([], 技术) 返回 []', '满员活动格式化显示剩余 0'] },
      { title: '异位词算法、无 AI 复现与提交', duration: 115, files: ['algorithms/day-04-valid-anagram.js', 'notes/day-04.md'], steps: ['打开 https://leetcode.cn/problems/valid-anagram/；先写 s=anagram,t=nagaram 为 true，s=rat,t=car 为 false。', '先用排序思路，再在提示后用对象或 Map 计数；不同长度立即 false。', `${ALGORITHM_SAVE_RULE}`, '关闭资料重写 getTotalRemainingSeats 与 findActivityById；运行 verify；提交 feat: add activity data utilities。'], expected: ['两个样例正确', '能解释计数抵消', '无 AI 两个工具函数通过'], tests: ['s=a,t=ab 为 false', 's=ab,t=ba 为 true'] },
    ],
    optional: ['增加 filterAvailable(list)，只返回 capacity > registered 的活动。'],
    review: { route: '打开 data-utils/index.html 的 Console。', steps: ['按顺序解释五个固定输出', '口述 map/filter/reduce 差异', '现场新增 filterAvailable 并打印 id'], expected: ['可用活动 id 为 [1,3,4,5,6]', '不修改原 activities', '能说明函数输入和返回值'] },
  },

  5: {
    start: { dir: '.', commands: ["git status"], open: ['activity-filter/README.md', 'activity-filter/dom-lab.html', 'activity-filter/dom-lab.js', 'activity-filter/index.html', 'activity-filter/app.js', 'activity-filter/activities.js', 'data-utils/activity-utils.js', 'notes/day-05.md'], before: ['每日准备命令已生成 DOM 实验、活动筛选骨架、README、固定数据副本和 notes/day-05.md；Day 04 的纯函数仍作为参考，不复制页面答案。', '在终端 A 从当前 frontend-40-day-learning-lab 运行 npx vite . --port 5174 并保持运行；终端 B 留在同一目录执行 git。', '浏览器打开 http://localhost:5174/activity-filter/；不要双击 file URL。'] },
    tasks: [
      { title: 'DOM 与事件最小实验', duration: 75, files: ['activity-filter/dom-lab.html', 'activity-filter/dom-lab.js'], steps: ['直接阅读 MDN“事件介绍”中的 addEventListener、事件对象、冒泡、事件委托。', 'HTML 写 ul#demo-list，内有三个 button[data-id]；只在 ul 上绑定一个 click 监听器。', '使用 event.target.closest(button[data-id])，没有命中时 return，命中时打印 dataset.id。', '故意把选择器 #demo-list 写成 #demo-lsit，观察 null.addEventListener 错误并按文件行号恢复。'], expected: ['点击三个按钮分别输出 1/2/3', '点击列表空白不报错', '能指出事件对象由浏览器传给监听函数'], tests: ['动态 append 第四个按钮后仍可点击输出 4', '说出事件委托依赖冒泡'] },
      { title: '原生活动筛选完整页', duration: 190, files: ['activity-filter/index.html', 'activity-filter/styles.css', 'activity-filter/app.js', 'activity-filter/activities.js'], steps: ['index.html 固定建立 #keyword、#type-filter（all/技术/文艺/体育/就业/公益）、#available-only、#reset-filters、#result-count、#activity-list、#empty-state。', 'app.js 精确 TODO：renderActivities(list) 创建 article[data-id]；applyFilters() 依次按标题关键词、类型、是否有名额过滤；resetFilters() 恢复空关键词/all/未勾选。', '关键词使用 trim().toLowerCase()，只匹配 title；每次 input/change 立即筛选，重置按钮 type=button。', '结果数量固定显示“找到 N 个活动”；N=0 时列表清空并显示“暂无符合条件的活动”。', '在 #activity-list 上做事件委托，点击卡片输出 activity id。'], expected: ['初始 6 条', '输入 javascript 后 1 条且 id=5', '类型技术 2 条', '勾选有名额后文艺类型为 0', '重置恢复 6 条和默认控件'], tests: ['关键词前后带空格仍匹配', '动态卡片点击打印正确 id', '连续重置两次不报错', 'Console 无未处理错误'] },
      { title: '反转字符串、复现与提交', duration: 95, files: ['algorithms/day-05-reverse-string.js', 'notes/day-05.md'], steps: ['打开 https://leetcode.cn/problems/reverse-string/；在原数组内用 left/right 交换，不创建反转副本作为最终答案。', '测试 [h,e,l,l,o] 与空数组；写 O(n)/O(1)。', `${ALGORITHM_SAVE_RULE}`, '关闭旧代码，从空白重写 resetFilters 和列表事件委托；提交 feat: build vanilla activity filter。'], expected: ['hello 原地变 olleh', '空数组不报错', '重置后页面 6 条'], tests: ['数组 [a] 保持 [a]', '现场点击 id=4 卡片，Console 输出 4'] },
    ],
    optional: ['增加 Escape 键清空关键词；不得增加分页。'],
    review: { route: '打开 activity-filter/index.html，从初始状态依次搜索、按类型、勾选有名额、重置。', steps: ['演示四条固定路径', '打开 app.js 解释状态从控件到 render 的流程', '现场把结果数量文案改成“共 N 项”'], expected: ['每次结果数量正确', '空状态可恢复', '事件委托能输出卡片 id'] },
  },

  6: {
    start: { dir: '.', commands: ["git status"], open: ['notes/day-06.md', 'notes/day-02.md', 'notes/day-05.md', 'day-06/rebuild/rebuild.js', 'day-06/debug-01-form/index.html', 'day-06/debug-01-form/app.js', 'day-06/debug-02-filter/index.html', 'day-06/debug-02-filter/app.js', 'day-06/project-brief/product.md', 'day-06/project-brief/home-wireframe.svg'], before: ['每日准备命令已生成两个可复现故障、重做空白文件、产品说明、SVG 线框和笔记；答案只出现在页面底部检查者区域，不依赖外部文件。', '只汇总 Day 01-05；若 C/D/E 少于两项，固定重做 Day 04 filterByType 和 Day 05 resetFilters。', '在终端 A 从当前 frontend-40-day-learning-lab 运行 npx vite . --port 5174 并保持运行；终端 B 留在同一目录执行 git。'] },
    tasks: [
      { title: '无 AI 重做两个薄弱项', duration: 110, files: ['day-06/rebuild/rebuild.js', 'notes/day-06.md'], steps: ['从 Day 01-05 的 C/D/E 中选最高两项；每项先写输入、输出、完成标准和 35 分钟上限。', '第一项空白重做 35 分钟；仅对照旧实现 5 分钟后关闭，再修正。第二项同样执行。', '每项固定验证正常、空值、边界；重新标 A-E。'], expected: ['至少一项辅助等级比首次降低', '保留重做前的失败版本', '没有超过单项 40 分钟'], tests: ['若用兜底：filterByType 技术得 [1,5]', '若用兜底：resetFilters 恢复 6 条'] },
      { title: '两个预设故障题', duration: 100, files: ['day-06/debug-01-form/index.html', 'day-06/debug-01-form/app.js', 'day-06/debug-02-filter/index.html', 'day-06/debug-02-filter/app.js', 'notes/day-06.md'], steps: ['故障 1 固定现象：点击“切换注册”页面刷新；starter 中切换按钮缺 type=button 且 form submit 未 preventDefault。先复现，再一次只改一个猜测。', '故障 2 固定现象：动态渲染后点击卡片无输出；starter 在渲染前对不存在的卡片逐个绑定监听。改为在稳定父容器上做事件委托。', '每题记录复现步骤、预期、实际、相关文件/行号、单次猜测、验证结果。'], expected: ['切换注册不刷新', '动态卡片点击输出 data-id', '两题都有完整排错记录'], tests: ['刷新后故障 1 仍修复', '新增第 7 张动态卡片后故障 2 仍能点击'] },
      { title: '主项目定界与第一周算法复现', duration: 150, files: ['day-06/project-brief/product.md', 'day-06/project-brief/home-wireframe.svg', 'day-06/project-brief/file-tree.md', 'algorithms/day-06-review.js'], steps: ['product.md 固定项目名 Campus Growth Hub；用户为学生；第一阶段功能只含活动浏览、关键词/类型筛选、收藏、异步四态；明确暂不做后端、支付、聊天。', '照 每日准备命令生成的 home-wireframe.svg 标出页面区块：标题、搜索栏、类型筛选、结果数、卡片区、空状态。', 'file-tree.md 写 Day 10 目标目录：src/data、components、views、services、notes；每个目录用一句话说明职责。', '空白重做两数之和暴力版与二分查找；每题最多 25 分钟，先写样例和思路。', '更新 A-E 比例，提交 refactor: rebuild week-one core exercises。'], expected: ['能用 1 分钟说明项目用户、核心闭环和不做事项', '两数之和与二分至少一题无提示通过', '目录职责不是空白'], tests: ['检查者问“为什么不做后端”时能回答范围取舍', '二分单元素边界通过'] },
    ],
    optional: ['仅补一个未解决的 CSS 问题；不得新增主项目功能。'],
    review: { route: 'debug-01-form → debug-02-filter → project-brief/product.md → rebuild.js。', steps: ['按记录复现并解释两个故障', '口述主项目 MVP 和不做事项', '现场给 Day 05 加“清空全部筛选”'], expected: ['每次只修改一个猜测', '清空后 6 条活动', '能指出本周一项真正独立能力和一项仍眼熟'] },
  },

  7: {
    start: { dir: '.', commands: ["git log --oneline -7"], open: ['notes/week-01-review.md', 'activity-filter/index.html', 'activity-filter/app.js', 'algorithms/day-07-review.js'], before: ['每日准备命令只补齐复盘模板和算法空白文件，不覆盖 Day 05 代码；若 Day 05 关键文件不存在，命令必须报错并提示先完成 Day 05。', '在终端 A 从当前 frontend-40-day-learning-lab 运行 npx vite . --port 5174 并保持运行；终端 B 留在同一目录执行 git。', '今天总学习 120 分钟，加验收 30 分钟，共 150 分钟；不打开新课程。'] },
    tasks: [
      { title: '固定能力表与五问', duration: 35, files: ['notes/week-01-review.md'], steps: ['建立六行表：HTML 语义、CSS 响应式、数组处理、DOM 事件、排错、算法；每行只选 A独立/B提示/C示例/D主要代码/E未完成并给一个证据路径。', '不看资料回答：为什么需要 label；Flex 与 Grid 如何选择；map 与 filter 返回值差异；事件冒泡是什么；点击无响应先查哪三处。', '选一个真实错误写“现象→错误信息→猜测→验证→原因→修复”。'], expected: ['六项都有证据，不用“感觉会了”', '五问允许不会但不得空白', '只列下周一个最高风险'], tests: ['检查者随机追问其中两题', '打开证据文件确认不是口头自评'] },
      { title: '无 AI 固定迁移与旧算法', duration: 55, files: ['activity-filter/app.js', 'algorithms/day-07-review.js'], steps: ['无 AI 修改 Day 05 的关键词筛选：由“只匹配 title”改为“匹配 title 或 type”；沿用同一个 keyword，不增加新控件。', '30 分钟到点停止，只验证初始、关键词“技术”、关键词“JavaScript”和重置。', '算法选辅助等级最高的一题；若并列固定重做两数之和；只看自己的思路笔记，不看代码。'], expected: ['初始 6 条', '关键词“技术”显示 2 条', '关键词“JavaScript”显示 1 条', '重置恢复 6 条', '旧题有思路、代码或明确卡点记录'], tests: ['关键词“体育”显示晨跑打卡', '关键词前后空格仍匹配', '类型文艺与关键词技术组合为 0'] },
      { title: '演示脚本与阶段记录', duration: 30, files: ['notes/week-01-review.md'], steps: ['按固定路线演示：初始 6 条→搜索“技术”2 条→搜索 JavaScript 1 条→重置→类型文艺1条→勾选有名额0条→重置6条。', '每个最近提交只写一句“我完成了什么”，不得复述提交标题。', '写三条已掌握证据、一条下周调整，提交 docs: add week-one review。'], expected: ['演示不中途改代码', 'Console 无错误', '复盘同时包含成果与风险'], tests: ['检查者随机打开 app.js，学习者说明 applyFilters 输入来源与输出去向'] },
    ],
    optional: ['今天不安排选做；完成后停止学习并进行非屏幕活动。'],
    review: { route: 'activity-filter/index.html → app.js → notes/week-01-review.md。', steps: ['执行固定演示路线', '抽查五问中的两问', '现场把结果文案改为“共 N 项活动”'], expected: ['迁移 5 分钟内完成', '说出一项 AI 依赖最高任务', '明确下周只调整一项'] },
  },

  8: {
    start: { dir: '.', commands: ["git status"], open: ['async-activity-demo/promise-lab.js', 'async-activity-demo/mock-api.js', 'async-activity-demo/index.html', 'async-activity-demo/app.js', 'async-activity-demo/activities.js', 'notes/day-08.md'], before: ['每日准备命令已生成 promise-lab.js、固定活动数据、mock API TODO、带 #mode/#load/#status/#activity-list/#retry 的页面骨架和笔记。', '在终端 A 从当前 frontend-40-day-learning-lab 运行 npx vite . --port 5174 并保持运行；终端 B 留在同一目录执行 git。', '浏览器打开 http://localhost:5174/async-activity-demo/。'] },
    tasks: [
      { title: 'Promise 与 async/await 固定最小例', duration: 85, files: ['async-activity-demo/promise-lab.js'], steps: ['直接阅读 MDN Promise、async function、try...catch、finally 的首个示例。', '实现 delayResolve(value,ms) 与 delayReject(message,ms)；先用 then/catch/finally 调用，再用 async/await + try/catch/finally 调用。', '在每个回调打印顺序编号，确认 finally 在成功和失败都执行。', '关闭资料重写 async/await 版本。'], expected: ['成功打印 value 后执行 finally', '失败进入 catch 后执行 finally', '未出现未处理 Promise rejection'], tests: ['延迟改为 100ms 结果不变', '口述 await 等待的是 Promise 的落定结果'] },
      { title: '固定 mock API 与四态界面', duration: 180, files: ['async-activity-demo/mock-api.js', 'async-activity-demo/app.js', 'async-activity-demo/index.html', 'async-activity-demo/activities.js'], steps: [`activities.js 使用：${ACTIVITY_DATA_CODE}`, "mock-api.js 实现 fetchActivities(mode, delay=800)：mode=success resolve 前 3 条；empty resolve []；error reject(new Error('活动加载失败'))；其他 mode reject(new Error('未知模式'))。", 'app.js 固定状态变量 status=idle/loading/success/empty/error；loadActivities 在开始时禁用 #load 与 #retry，清空旧错误，在 finally 恢复按钮。', '选择 success/empty/error 后点击加载；status 区固定显示“正在加载…”、“暂无活动”、“活动加载失败”；error 时显示重试按钮。', '重试按钮把 mode 改为 success 后再次调用；render 只负责卡片，不在 render 中发请求。'], expected: ['success 800ms 后 3 张卡', 'empty 显示暂无活动且无卡片', 'error 显示固定错误和重试按钮', 'loading 期间两个按钮 disabled', '重试后恢复 3 张卡'], tests: ['把 delay 改 3000ms 连点加载只触发一次', '从 success 切 error 时旧卡片被清空', 'Console 无未处理错误'] },
      { title: '数组交集、复现与提交', duration: 95, files: ['algorithms/day-08-intersection.js', 'notes/day-08.md'], steps: ['打开 https://leetcode.cn/problems/intersection-of-two-arrays/；使用 Set 去重与查询。', '样例 [1,2,2,1] 与 [2,2] 得 [2]；结果顺序不作为验收重点。', `${ALGORITHM_SAVE_RULE}`, '关闭资料重写 loadActivities 中的 try/catch/finally；提交 feat: model async request states。'], expected: ['交集不重复', '失败被 catch', '按钮总能在 finally 恢复'], tests: ['两个数组无交集得到 []', '一个空数组得到 []'] },
    ],
    optional: ['增加 aria-live=polite 的状态区域；不接真实网络接口。'],
    review: { route: '打开 async-activity-demo/index.html，依次选择 success、empty、error、重试。', steps: ['演示四态', '解释 try/catch/finally 分工', '现场把延迟改为 3000ms 并连续点击'], expected: ['只发起一次逻辑请求', 'loading 时按钮禁用', '重试成功恢复页面'] },
  },

  9: {
    start: { dir: '.', commands: ["git status"], open: ['event-loop-lab/questions.js', 'event-loop-lab/predictions.md', 'debug-import/index.html', 'debug-import/main.js', 'debug-import/activity-api.js', 'debug-request/index.html', 'debug-request/app.js', 'debug-request/activities.json', 'notes/day-09.md'], before: ['每日准备命令已把四道题代码写入 questions.js，并生成可真实报错的导入路径故障、JSON 请求故障、固定 activities.json 与笔记；学习者先写 predictions.md，再运行代码。', '在终端 A 从当前 frontend-40-day-learning-lab 运行 npx vite . --port 5174 并保持运行；终端 B 留在同一目录执行 git。', 'debug-import 与 debug-request 都从 http://localhost:5174/ 下打开，使 Console 和 Network 出现真实证据。'] },
    tasks: [
      { title: '四道固定输出顺序题', duration: 90, files: ['event-loop-lab/questions.js', 'event-loop-lab/predictions.md'], steps: ['题1：console.log(A); console.log(B)。题2：setTimeout(()=>console.log(T),0); console.log(S)。题3：Promise.resolve().then(()=>console.log(P)); console.log(S)。题4：console.log(A); setTimeout(()=>console.log(T),0); Promise.resolve().then(()=>console.log(P)); console.log(B)。', '每题先写预测，再逐题运行；实际顺序分别为 AB、ST、SP、ABPT。', '为题4画调用栈清空→微任务 P→任务 T，不扩展浏览器内部细节。'], expected: ['四题均保存预测与实际', '题4实际 ABPT', '能说微任务在当前同步代码后、计时器任务前'], tests: ['将题4的 Promise 放到 setTimeout 回调内，重新预测并运行'] },
      { title: '模块与 DevTools 两个故障', duration: 180, files: ['debug-import/index.html', 'debug-import/main.js', 'debug-import/activity-api.js', 'debug-request/index.html', 'debug-request/app.js', 'debug-request/activities.json', 'notes/day-09.md'], steps: ["debug-import 固定错误：main.js 写 import { loadActivities } from './activityApi.js'，真实文件名为 activity-api.js；先看 Console/Network 404，再只改路径。", 'debug-request 固定错误：fetch(./activity.json) 但真实文件为 activities.json；Network 观察失败请求、状态码和 Initiator，再修正。', '修正后在 renderActivities 第一行设断点；刷新，查看 activities 的数组长度；Step over 到创建第一张卡片；记录变量变化。', '把 mock API、活动常量、render 和入口调用保持四个职责；本日“数据类型”只指字段结构说明，不引入 TypeScript。'], expected: ['模块路径修复后 Console 无导入错误', 'activities.json 请求 200 并渲染 6 条', '能在断点处指出 activities.length=6'], tests: ['再次故意改错路径，按 Console→Network→文件名顺序恢复', '刷新后断点仍命中'] },
      { title: '回文串、复现与提交', duration: 90, files: ['algorithms/day-09-valid-palindrome.js', 'notes/day-09.md'], steps: ['打开 https://leetcode.cn/problems/valid-palindrome/；双指针跳过非字母数字并忽略大小写。', '样例“A man, a plan, a canal: Panama”为 true，“race a car”为 false。', `${ALGORITHM_SAVE_RULE}`, '关闭资料重新写一个 export/import 对；提交 chore: split modules and add debug notes。'], expected: ['两个样例正确', '模块导入成功', '笔记含一次 404 的完整证据'], tests: ['空字符串为 true', '字符串“0P”为 false'] },
    ],
    optional: ['只在完成后用 Sources 的 Watch 面板观察第一张活动 title。'],
    review: { route: 'questions.js → debug-import 页面 → debug-request 页面与 DevTools。', steps: ['口述题4顺序', '现场制造并修复导入路径错误', '在 renderActivities 断点显示数组长度'], expected: ['顺序为 ABPT', '能依据文件名和 404 修复', '不会只凭猜测乱改多个文件'] },
  },

  10: {
    start: {
      dir: '.',
      commands: ['npm --prefix campus-growth-hub install', 'git status'],
      open: ['campus-growth-hub/src/App.vue', 'campus-growth-hub/src/main.js', 'campus-growth-hub/src/data/activities.js', 'campus-growth-hub/notes/day-10.md'],
      before: ['每日准备命令已生成 Vue + JavaScript 的 campus-growth-hub 工程、CounterPractice、活动数据、HomeView 骨架、notes/day-10.md 和算法空白文件；不会覆盖已存在的学习成果。', '在终端 A 从当前 frontend-40-day-learning-lab 运行 npm --prefix campus-growth-hub run dev 并保持运行；终端 B 留在同一目录，构建使用 npm --prefix campus-growth-hub run build。', '浏览器地址以终端 A 输出为准；campus-growth-hub 是唯一正式项目。'],
    },
    tasks: [
      { title: '创建、清理并理解最小 Vue 应用', duration: 95, files: ['campus-growth-hub/src/App.vue', 'campus-growth-hub/src/main.js', 'campus-growth-hub/src/components/CounterPractice.vue', 'campus-growth-hub/notes/day-10.md'], steps: ['确认浏览器显示 Vite/Vue 默认页后，记录启动命令与地址。', '删除 HelloWorld 引用和默认演示内容，但保留 main.js 的 createApp(App).mount(#app)。', 'CounterPractice.vue：script setup 导入 ref；const count=ref(0)；button @click 让 count.value++；template 显示 count。', '在 App.vue 引入 CounterPractice；点击三次看到 3；用箭头写 ref 定义→模板读取→事件修改→视图更新。'], expected: ['npm run dev 无报错', '页面显示计数器', '点击三次为 3', '能指出 main.js 的挂载点'], tests: ['刷新后计数归 0', '临时改 +2 后一次点击为 2'] },
      { title: '固定首页与响应式筛选', duration: 160, files: ['campus-growth-hub/src/data/activities.js', 'campus-growth-hub/src/views/HomeView.vue', 'campus-growth-hub/src/App.vue', 'campus-growth-hub/src/style.css'], steps: [`src/data/activities.js 写入：${ACTIVITY_DATA_CODE}`, '建立 views/HomeView.vue；script setup 中 import activities，定义 searchText=ref(\'\')、bookmarkedIds=ref([])，先用函数 filteredActivities() 返回标题匹配结果；Day 11 再改 computed。', 'template 固定包含 h1“Campus Growth Hub”、搜索 input、结果数量、活动 article 列表；每张卡显示标题/类型/地点/剩余名额。', '收藏按钮点击调用 toggleBookmark(id)：存在则移除，不存在则加入；按钮文字在“收藏/已收藏”之间切换。', 'App.vue 只渲染 HomeView；style.css 做桌面三列、375px 单列，不做复杂主题。'], expected: ['初始 6 张卡', '输入 JavaScript 后 1 张', '收藏 id=5 后按钮显示已收藏', '375px 单列无横向滚动'], tests: ['清空搜索恢复 6 张', '连续点击收藏两次恢复未收藏', 'Console 无 Vue warning'] },
      { title: '移动零、构建与无 AI 复现', duration: 105, files: ['campus-growth-hub/algorithms/day-10-move-zeroes.js', 'campus-growth-hub/notes/day-10.md'], steps: ['打开 https://leetcode.cn/problems/move-zeroes/；使用快慢指针原地把非零数前移，再补零。', '样例 [0,1,0,3,12] 得 [1,3,12,0,0]；写 O(n)/O(1)。', `${ALGORITHM_SAVE_RULE}`, '关闭资料在 CounterPractice.vue 空白重写 ref 与按钮；在终端 B 运行 npm --prefix campus-growth-hub run build；提交 feat: bootstrap vue activity app。'], expected: ['算法原地修改正确', 'npm --prefix campus-growth-hub run build 成功', '无 AI 计数器可运行'], tests: ['[0] 保持 [0]', '[1,2] 保持 [1,2]'] },
    ],
    optional: ['给收藏按钮增加 aria-pressed；不做持久化。'],
    review: { route: '保持终端 A 的 npm --prefix campus-growth-hub run dev 运行，打开首页；再打开 campus-growth-hub/src/views/HomeView.vue。', steps: ['搜索 JavaScript', '收藏唯一结果', '口述 ref 更新流程', '现场把收藏按钮文案改为“取消收藏”'], expected: ['筛选与收藏立即更新', '无 Console warning', '能解释 v-for key 使用 activity.id'] },
  },

  11: {
    start: { dir: '.', commands: ["git status"], open: ['src/views/HomeView.vue', 'src/data/activities.js', 'src/components/ComputedWatchLab.vue', 'notes/day-11.md'], before: ['每日准备命令已检查 Day 10 的 HomeView 与活动数据，并只补齐 ComputedWatchLab.vue、notes/day-11.md 和算法空白文件；缺少 Day 10 产物时必须报错，不静默重建。', '终端当前位于 campus-growth-hub；在终端 A 运行 npm run dev 并保持运行，终端 B 留在项目根目录执行 git 与 build。', '今天所有筛选逻辑先留在 HomeView.vue；watch 只做 localStorage 副作用。'] },
    tasks: [
      { title: 'computed 与 watch 对照实验', duration: 85, files: ['src/components/ComputedWatchLab.vue', 'notes/day-11.md'], steps: ['直接阅读 Vue 指南“计算属性”“侦听器”两节的基础用法。', '固定 names=[Alice,Bob,Carol] 和 keyword；computed filteredNames 负责过滤；watch(keyword) 把值写入 localStorage 的 demo-key。', '故意用普通变量保存过滤结果，观察 keyword 改变后不更新；再恢复 computed。', '写一句判断规则：从现有状态算出的值用 computed；需要写存储/发请求等外部动作才考虑 watch。'], expected: ['输入 bo 只显示 Bob', 'localStorage demo-key 为 bo', '不需要手动调用 computed'], tests: ['清空输入恢复三人', '删除 watch 后筛选仍工作但 localStorage 不更新'] },
      { title: '首页搜索、类型、结果数与重置', duration: 165, files: ['src/views/HomeView.vue', 'src/data/activities.js'], steps: ['把 Day 10 的 filteredActivities 函数改为 computed。', '新增 selectedType=ref(\'all\')；类型选项固定 all/技术/文艺/体育/就业/公益。', 'computed 规则：关键词 trim+lowercase，同时匹配 title；再匹配 selectedType；resultCount=computed(()=>filteredActivities.value.length)。', 'watch(searchText, value => localStorage.setItem(\'activity-search\', value))；这只是副作用，不参与过滤。', '新增重置按钮，把 searchText 设空、selectedType 设 all；无结果时显示“暂无符合条件的活动”。'], expected: ['初始显示找到 6 个活动', '技术显示 2', '技术+javascript 显示 1', '文艺+javascript 显示 0 与空状态', '重置恢复 6'], tests: ['关键词带首尾空格仍匹配', '重置后 localStorage 最终为空字符串', 'computed 中没有写 localStorage'] },
      { title: '合并有序数组、复现与构建', duration: 110, files: ['algorithms/day-11-merge-sorted-array.js', 'notes/day-11.md'], steps: ['打开 https://leetcode.cn/problems/merge-sorted-array/；从 nums1 尾部使用三个指针，避免覆盖尚未读取元素。', '固定 nums1=[1,2,3,0,0,0],m=3,nums2=[2,5,6],n=3，结果 [1,2,2,3,5,6]。', `${ALGORITHM_SAVE_RULE}`, '关闭资料重写 filteredActivities computed；在终端 B 运行 npm run build；提交 feat: add reactive activity filters。'], expected: ['算法样例正确', '筛选 computed 可解释', '构建通过'], tests: ['nums2=[] 时 nums1 不变', 'nums1=[0],m=0,nums2=[1],n=1 得 [1]'] },
    ],
    optional: ['从 localStorage 恢复初始搜索词；今天不做复杂表单校验。'],
    review: { route: '首页初始→类型技术→关键词 javascript→重置；打开 HomeView.vue。', steps: ['解释 computed 与 watch 的各自职责', '查看 localStorage activity-search', '现场新增“公益”筛选路径并重置'], expected: ['结果数依次 6、2、1、6', 'watch 内没有计算筛选数组', '重置恢复默认'] },
  },

  12: {
    start: { dir: '.', commands: ["git status"], open: ['src/views/HomeView.vue', 'src/components/MessageParent.vue', 'src/components/MessageChild.vue', 'src/components/BasePanel.vue', 'src/components/SearchBar.vue', 'src/components/ActivityCard.vue', 'src/components/EmptyState.vue', 'notes/day-12.md'], before: ['每日准备命令已检查 Day 11 首页并生成所有六个组件 starter、notes/day-12.md 和算法空白文件；不会覆盖 HomeView。', '终端当前位于 campus-growth-hub；在终端 A 运行 npm run dev 并保持运行，终端 B 留在项目根目录执行 git 与 build。', '状态继续由 HomeView 持有，子组件只收 props、发 emits；BasePanel 只演示默认插槽。'] },
    tasks: [
      { title: 'props、emit 与单向数据流最小例', duration: 85, files: ['src/components/MessageChild.vue', 'src/components/MessageParent.vue', 'notes/day-12.md'], steps: ['直接阅读 Vue 指南“Props”“组件事件”“插槽”基础小节。', 'Parent 持有 message 与 count；Child defineProps({message:String,count:Number})，defineEmits([increment])；按钮只 emit increment，不写 props.count++。', '父组件监听 @increment 修改 count；画 Parent state ↓ props / ↑ emit。', 'BasePanel.vue 只写 title prop 与默认 slot，不学习作用域插槽。'], expected: ['子组件显示父组件消息', '点击后由父组件把 count 加 1', '无“Attempting to mutate prop”警告'], tests: ['临时在子组件改 prop 观察警告后恢复', '替换 slot 内容能正常显示'] },
      { title: '按固定契约拆首页', duration: 170, files: ['src/components/SearchBar.vue', 'src/components/ActivityCard.vue', 'src/components/EmptyState.vue', 'src/views/HomeView.vue'], steps: ['SearchBar props：searchText、selectedType、types；emits：update:searchText、update:selectedType、reset；内部只读取控件并 emit。', 'ActivityCard props：activity、bookmarked；emit toggle-bookmark，payload 只传 activity.id；按钮显示收藏/已收藏。', 'EmptyState 无状态，只显示“暂无符合条件的活动”。', 'HomeView 保留 activities、searchText、selectedType、filteredActivities、bookmarkedIds、toggleBookmark；通过 props 下发，通过事件更新。', '拆分前先跑一遍 6→技术2→javascript1→收藏→重置；拆分后重复完全相同路径。'], expected: ['拆分前后功能一致', '子组件不直接修改 props', '收藏事件 payload 是 id', '空状态由 filteredActivities.length===0 控制'], tests: ['Vue Console 无 prop mutation warning', '点击 id=5 收藏只改变对应卡', '重置后收藏状态保留但筛选恢复'] },
      { title: '有效括号、复现与构建', duration: 105, files: ['algorithms/day-12-valid-parentheses.js', 'notes/day-12.md'], steps: ['打开 https://leetcode.cn/problems/valid-parentheses/；使用数组模拟栈与 close→open 映射。', '样例 ()[]{} 为 true，(] 为 false；遇到右括号时栈空立即 false。', `${ALGORITHM_SAVE_RULE}`, '关闭资料重写 ActivityCard 的 props 与 emit；在终端 B 运行 npm run build；提交 refactor: split activity components。'], expected: ['两个样例正确', '无 AI ActivityCard 可收藏', '构建通过'], tests: ['空字符串为 true', '([)] 为 false', '输入 {[]} 为 true'] },
    ],
    optional: ['BasePanel 增加名为 actions 的具名插槽；不把它强行应用到全部卡片。'],
    review: { route: '首页筛选→收藏→空状态；随后打开 HomeView、SearchBar、ActivityCard。', steps: ['沿 props/emit 画数据流', '现场让 ActivityCard 发 toggle-bookmark', '指出为什么不能直接修改 props'], expected: ['父组件更新 bookmarkedIds', '子组件职责可一句话说明', '拆分后功能无回归'] },
  },

  13: {
    start: { dir: '.', commands: ["git status"], open: ['src/App.vue', 'src/practice/course-favorites/CourseFavorites.vue', 'src/practice/course-favorites/courses.js', 'src/practice/async-state/AsyncActivityLab.vue', 'src/services/activityApi.js', 'src/views/HomeView.vue', 'notes/day-13.md'], before: ['每日准备命令已检查 Day 12 组件链，生成课程收藏 starter、可运行的 AsyncActivityLab 预设故障、activityApi、notes/day-13.md 和算法空白文件；不会覆盖 HomeView。', '终端当前位于 campus-growth-hub；在终端 A 运行 npm run dev 并保持运行，终端 B 留在项目根目录执行 git 与 build。', '课程收藏与异步故障都必须通过 App.vue 的练习切换按钮真正挂载显示；完成调试后再把正确四态迁移到 HomeView。'] },
    tasks: [
      { title: '无 AI 课程收藏夹', duration: 105, files: ['src/App.vue', 'src/practice/course-favorites/CourseFavorites.vue', 'src/practice/course-favorites/courses.js'], steps: ["courses.js 固定数据：[{id:1,title:'JavaScript 基础'},{id:2,title:'Vue 3 入门'},{id:3,title:'计算机网络'},{id:4,title:'数据结构'}]。", 'CourseFavorites.vue 精确 TODO：ref searchText、ref favoriteIds、computed filteredCourses；输入按 title 过滤；每行按钮切换收藏；复选框只看已收藏。', 'App.vue 保留 HomeView，并新增 currentDemo=ref(\'home\')；提供“主项目 / 课程收藏 / 异步故障”三个按钮，分别渲染 HomeView、CourseFavorites、AsyncActivityLab。', '先点击“课程收藏”确认组件已挂载，再测试搜索、收藏和只看收藏；空结果固定显示“没有匹配课程”。', '前 40 分钟无 AI；到点只看 Day 11/12 自己的思路笔记 10 分钟，再关闭并完成。'], expected: ['点击课程收藏后初始 4 门', '搜索 Vue 得 1 门', '收藏 Vue 后只看收藏得 1 门', '取消收藏后只看收藏显示空状态', '点击主项目可返回原首页'], tests: ['刷新后仍可通过按钮进入课程收藏', '搜索不存在课程显示空状态', '切回主项目后筛选和收藏仍可使用'] },
      { title: '主项目异步四态与预设故障', duration: 160, files: ['src/App.vue', 'src/practice/async-state/AsyncActivityLab.vue', 'src/services/activityApi.js', 'src/views/HomeView.vue', 'src/components/EmptyState.vue', 'notes/day-13.md'], steps: [`activityApi.js 已由 每日准备命令生成：把固定 activities 重命名导入为 seedActivities；fetchActivities(mode='success',delay=800) 在 success 返回副本、empty 返回 []、error 抛 Error('活动加载失败')。`, '先在 App 点击“异步故障”；AsyncActivityLab 已挂载且 finally 中故意写 loadedActivities.value=[]。选择 success 后复现“加载完成仍无卡片”，用断点观察成功赋值随后被 finally 清空，只删除标有 DAY13_INTENTIONAL_BUG 的一行。', '在 AsyncActivityLab 回归 success 6 张、empty 空状态、error 错误、retry 恢复 6 张；记录复现步骤、断点值、单行修改和回归结果。', '再把正确的 loadedActivities/status/errorMessage/mode/loadActivities 逻辑迁移到 HomeView；筛选 computed 改从 loadedActivities.value 读取。', 'HomeView 提供 success/empty/error 模式选择、加载按钮和重试按钮；loading 时禁用加载，重试把 mode 设 success 后调用；最后回到 App 的“主项目”完成四态回归。'], expected: ['异步故障 starter 在修复前稳定复现', '修复后 AsyncActivityLab 四态正确', '主项目 success 6 张、empty 空状态、error 错误+重试、重试恢复 6 张', 'finally 不再清空 loadedActivities'], tests: ['loading 期间加载按钮 disabled', '从 error 到 success 旧错误文案消失', '切换练习与主项目均无未处理 rejection'] },
      { title: '旧算法复现、回归与提交', duration: 95, files: ['algorithms/day-13-review.js', 'notes/day-13.md'], steps: ['空白重做有效括号 20 分钟与移动零 20 分钟；先说思路后写，不看完整旧代码。', '每题写一个边界和复杂度；不会时只看自己的思路笔记。', '回归首页：搜索、类型、收藏、success/empty/error/retry。', '在终端 B 运行 npm run build；更新 A-E；提交 refactor: consolidate vue fundamentals。'], expected: ['至少一题无提示通过', '首页全部路径通过', '构建成功'], tests: ['有效括号 {[]} 为 true', '移动零 [0,0,1] 为 [1,0,0]'] },
    ],
    optional: ['课程收藏夹添加“已收藏 N 门”统计；不持久化。'],
    review: { route: '课程收藏夹→主项目首页 success→empty→error→retry→HomeView.vue。', steps: ['演示固定路径', '解释异步四态', '现场新增重试按钮或修复其事件绑定'], expected: ['重试恢复 6 张', '能解释 finally 只做收尾', '说出本周 AI 辅助等级是否下降及证据'] },
  },

  14: {
    start: { dir: '.', commands: ["git log --oneline -7"], open: ['notes/week-02-review.md', 'notes/vue-data-flow.md', 'notes/async-state-flow.md', 'algorithms/day-14-review.js', 'src/views/HomeView.vue'], before: ['每日准备命令已验证 HomeView 存在 success/empty/error/retry 四态，只补齐三份复盘模板和算法空白文件；若 Day 13 未完成则命令必须报错并列出缺失标记。', '终端当前位于 campus-growth-hub；在终端 A 运行 npm run dev 并保持运行，终端 B 留在项目根目录执行 git 与 build。', '今天任务 120 分钟，加验收 30 分钟，共 150 分钟；不打开新课程。'] },
    tasks: [
      { title: '固定数据流图与异步状态图', duration: 35, files: ['notes/vue-data-flow.md', 'notes/async-state-flow.md', 'notes/week-02-review.md'], steps: ['vue-data-flow.md 按模板填：状态在哪里定义→通过哪个 prop 给哪个组件→用户操作 emit 什么→父组件改什么→哪个 computed 重新计算→页面哪里变化。必须用 bookmark 流程填写。', 'async-state-flow.md 画 idle→loading→success/empty/error，error→retry→loading；每条箭头标触发动作。', 'week-02-review.md 写三条掌握证据、一个最高风险、下周只调整一项。'], expected: ['收藏数据流包含 HomeView、ActivityCard、toggle-bookmark、bookmarkedIds', '异步图五态齐全', '成果证据均能指向文件或提交'], tests: ['学习者随机遮住一段，并口述缺失箭头'] },
      { title: '无 AI 固定迁移：标题或地点搜索', duration: 45, files: ['src/views/HomeView.vue', 'notes/week-02-review.md'], steps: ['关闭 AI 和教程，在 filteredActivities computed 中把关键词匹配从仅 title 改为 title 或 location。', '使用同一个 normalizedKeyword；不得再建第二套筛选状态。', '30 分钟到点停止；最后 15 分钟运行固定测试并记录遗漏，不复制旧答案。'], expected: ['输入“东操场”只显示晨跑打卡', '输入“教学楼”显示前端入门工作坊与 JavaScript 读书会', '输入“javascript”仍显示读书会', '清空恢复 6 张'], tests: ['关键词前后空格仍匹配', '类型技术+地点教学楼为 2', '重置恢复 all 与空关键词'] },
      { title: '旧题、演示脚本与阶段记录', duration: 40, files: ['algorithms/day-14-review.js', 'notes/week-02-review.md'], steps: ['算法选择辅助等级最高的一题；若并列固定移动零；从空白写思路、代码、边界、复杂度，不新增题。', '按固定演示脚本：标题搜索→地点搜索→类型筛选→收藏→mode error→重试→DevTools 断点查看 filteredActivities 长度。', '记录本周 A-E 比例和一个下周风险；在终端 B 运行 npm run build；提交 docs: add vue fundamentals review。'], expected: ['旧题有完整证据', '演示脚本全部走通', '构建成功', '只列一个下周最高风险'], tests: ['断点处能指出过滤后数组长度', 'Console 无 Vue warning'] },
    ],
    optional: ['今天不安排选做；完成后停止学习。'],
    review: { route: '首页：javascript→东操场→技术+教学楼→收藏→error→retry；随后打开三份 review 文档。', steps: ['执行完整用户路线', '口述 ref/computed/watch 区别', '沿数据流图解释父子通信', '展示如何从错误状态重试'], expected: ['地点搜索正确', '重试恢复 6 张', '数据流与代码一致', '总学习加验收不超过 150 分钟'] },
  },
};

export default daySpecs;
