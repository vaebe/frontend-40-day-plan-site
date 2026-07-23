const ALGORITHM_RULE = '算法严格计时 30 分钟：先写样例与思路，20 分钟仍无进展只看一个提示；结束时保存代码、边界、复杂度和 AI 辅助等级。'

export default {
  10: {
    start: {
      dir: '.',
      commands: ['npm --prefix typescript-foundations install', 'npm --prefix typescript-foundations run type-check', 'git status'],
      open: ['typescript-foundations/package.json', 'typescript-foundations/tsconfig.json', 'typescript-foundations/src/01-values.ts', 'typescript-foundations/src/02-functions.ts', 'typescript-foundations/notes/day-10.md'],
      before: ['每日准备命令已生成独立的 typescript-foundations 练习目录；今天不创建 Vue 项目。', '所有 npm 依赖只安装在 typescript-foundations 内，不在学习工作区根目录运行 npm install。', '终端保持在 frontend-40-day-learning-lab；命令统一使用 npm --prefix typescript-foundations。'],
    },
    tasks: [
      {
        title: '理解 TypeScript 的作用、推断与基础类型', duration: 90,
        files: ['typescript-foundations/src/01-values.ts', 'typescript-foundations/notes/day-10.md'],
        steps: ['先运行 type-check，确认空白 starter 可以通过。', '依次声明 string、number、boolean、string[] 和包含 id/title/capacity 的对象；每项先让编辑器推断，再把鼠标悬停看到的类型写入笔记。', '制造三次错误：把 number 赋给 string、数组加入 boolean、访问不存在字段；逐条复制错误信息并用自己的话解释。', '删除错误代码后重跑 type-check；写出“类型错误发生在运行前，业务错误仍需要测试”这一区别。'],
        expected: ['能说出类型推断不是把变量变成 any。', '三条错误都有原始信息、原因和修复。'],
        tests: ['npm --prefix typescript-foundations run type-check', '临时把 capacity 改成字符串时必须失败，恢复后通过'],
      },
      {
        title: '给函数、数组处理和返回值建立类型边界', duration: 120,
        files: ['typescript-foundations/src/02-functions.ts', 'typescript-foundations/src/fixtures.ts', 'typescript-foundations/src/02-functions.test.ts'],
        steps: ['定义 Activity 基础结构：id/title/type/capacity/enrolledCount；建立三条固定活动数据。', '实现 getRemaining(activity): number、findById(list,id): Activity | undefined、filterByType(list,type): Activity[]。', '先故意漏写返回分支，观察 undefined 相关错误；再用明确的联合类型修复，不使用 as any。', '运行固定测试：剩余人数、存在/不存在 id、all 返回全部、tech 返回两条；失败时只改当前函数。'],
        expected: ['三个函数输入和输出都能从签名读懂。', 'id 不存在时明确得到 undefined。'],
        tests: ['npm --prefix typescript-foundations run test:day10', 'findById(activities,\'missing\') 返回 undefined', 'filterByType([],\'all\') 返回 []'],
      },
      {
        title: '区分 unknown、any 与运行时校验', duration: 120,
        files: ['typescript-foundations/src/03-unknown.ts', 'typescript-foundations/src/03-unknown.test.ts', 'typescript-foundations/notes/day-10.md'],
        steps: ['把 JSON.parse 后的外部输入先视为 unknown；直接读取 input.data，保存类型错误。', '实现 isRecord(value) 与 parseActivity(value)：依次检查对象、id、title、capacity、enrolledCount，再返回 Activity。', '分别传入正确对象、null、缺 title、capacity 为字符串；错误输入固定抛出“活动数据格式错误”。', '写一段对比：any 会跳过检查，unknown 强迫先验证；本计划业务代码默认不用 any 逃避错误。'],
        expected: ['正确对象可以解析。', '四类错误输入不会悄悄进入业务函数。'],
        tests: ['npm --prefix typescript-foundations run test:unknown', '源码中没有 as any 或 @ts-ignore'],
      },
      {
        title: '30 分钟算法：用类型写两数之和', duration: 30,
        files: ['typescript-foundations/algorithms/day-10-two-sum.ts', 'typescript-foundations/notes/day-10.md'],
        steps: [ALGORITHM_RULE, '函数签名固定为 twoSum(nums: number[], target: number): number[]；先写暴力解法。', '验证 [2,7,11,15],9 得 [0,1]，无答案得到 []。'],
        expected: ['函数参数和返回值无 any。'],
        tests: ['npm --prefix typescript-foundations run type-check'],
      },
    ],
    optional: ['有余力只整理当天错误表，不学习 enum、装饰器或高级泛型。'],
    review: { route: 'typescript-foundations/src → notes/day-10.md。', steps: ['运行 type-check 和两组固定测试。', '抽一个基础类型错误让学习者解释。', '打开 unknown 校验函数说明每个分支。'], expected: ['命令全部通过。', '能解释 unknown 与 any 的差别。', '能从函数签名说出输入输出。'] },
  },

  11: {
    start: {
      dir: '.',
      commands: ['npm --prefix typescript-foundations run type-check', 'git status'],
      open: ['typescript-foundations/src/04-models.ts', 'typescript-foundations/src/05-request-state.ts', 'typescript-foundations/src/06-generics.ts', 'typescript-foundations/notes/day-11.md'],
      before: ['Day 10 的 type-check 和固定测试已经通过。', '今天仍只使用 typescript-foundations，不创建 Vue 项目。', '先自己写类型和分支，再使用编辑器错误信息修正；不复制完整答案。'],
    },
    tasks: [
      {
        title: '对象类型、interface 与可选字段', duration: 100,
        files: ['typescript-foundations/src/04-models.ts', 'typescript-foundations/src/04-models.test.ts'],
        steps: ['定义 User、ActivityBase；User.role 只允许 student 或 organizer。', '把活动建模为 online/offline 两种：online 必须有 meetingUrl，offline 必须有 location。', '分别创建一条线上和线下活动；再故意漏掉各自必填字段，保存错误后修复。', '实现 getActivityPlace：线上返回“线上”，线下返回 location；不得同时用可选 location 和 meetingUrl 糊成一个对象。'],
        expected: ['role=admin 会报错。', '线上和线下活动不能缺少各自字段。'],
        tests: ['npm --prefix typescript-foundations run test:models', '临时删除 meetingUrl 时 type-check 失败'],
      },
      {
        title: '联合类型、判别字段与穷尽检查', duration: 120,
        files: ['typescript-foundations/src/05-request-state.ts', 'typescript-foundations/src/05-request-state.test.ts'],
        steps: ['定义 RequestState<T>：idle、loading、success、empty、error 五个分支，每个分支只保留自己需要的字段。', '实现 describeState(state)：使用 switch(state.status) 返回固定文案。', '在 error 分支故意读取 data，确认类型错误；在 success 分支读取 message，同样保存后修复。', '增加 assertNever；临时新增 cancelled 分支但不处理，确认穷尽检查失败，再补分支或撤回。'],
        expected: ['五态互斥，不存在既 success 又 error 的对象。', '新增状态时遗漏分支会被发现。'],
        tests: ['npm --prefix typescript-foundations run test:state', 'success 返回活动数量，error 返回错误文案'],
      },
      {
        title: '只学习项目会用到的泛型', duration: 110,
        files: ['typescript-foundations/src/06-generics.ts', 'typescript-foundations/src/06-generics.test.ts', 'typescript-foundations/notes/day-11.md'],
        steps: ['定义 ApiResult<T> 与 PaginatedResult<T>，用 Activity[] 和 User 分别替换 T，观察结果类型。', '实现 unwrap<T>(result: ApiResult<T>): T 和 firstOrUndefined<T>(list:T[]):T|undefined。', '故意把 items 拼成 item、把 total 写成字符串，确认结构错误能被发现。', '在笔记写清 T 代表“由调用处决定的占位类型”；今天不学习条件类型、映射类型和类型体操。'],
        expected: ['能解释同一个 ApiResult 为什么可装不同 data。', '分页字段拼错会被捕获。'],
        tests: ['npm --prefix typescript-foundations run test:generics', '空数组 firstOrUndefined 返回 undefined'],
      },
      {
        title: '30 分钟算法：有效括号 TypeScript 版', duration: 30,
        files: ['typescript-foundations/algorithms/day-11-valid-parentheses.ts', 'typescript-foundations/notes/day-11.md'],
        steps: [ALGORITHM_RULE, '函数签名固定为 isValid(input:string):boolean；使用 string[] 模拟栈。', '验证 ()[]{} 为 true、([)] 为 false、空字符串为 true。'],
        expected: ['栈和映射都有明确类型。'],
        tests: ['npm --prefix typescript-foundations run type-check'],
      },
    ],
    optional: ['只复写最薄弱的一段，不提前学习 Vue 类型写法。'],
    review: { route: 'models → request-state → generics → notes。', steps: ['运行全部 TypeScript 测试。', '用线上/线下活动解释判别联合。', '现场新增一种状态并观察穷尽检查。'], expected: ['所有测试通过。', '能说明 interface、联合类型和泛型各自解决什么问题。'] },
  },

  12: {
    start: {
      dir: 'campus-growth-hub',
      commands: ['npm install', 'git status'],
      open: ['package.json', 'src/main.ts', 'src/App.vue', 'src/components/CounterPractice.vue', 'src/views/HomeView.vue', 'notes/day-12.md'],
      before: ['每日准备命令已生成 Vue 3 + TypeScript 的 campus-growth-hub；这是 Day 12～40 唯一正式项目。', '项目入口从第一天就是 src/main.ts，不创建 main.js，也不经历 JS 项目再迁移。', '终端 A 运行 npm run dev 并保持；终端 B 在同一项目根目录运行 type-check、build 和 Git。'],
    },
    tasks: [
      { title: '认识 Vue 项目入口、单文件组件和模板', duration: 95, files: ['src/main.ts', 'src/App.vue', 'src/components/CounterPractice.vue', 'notes/day-12.md'], steps: ['运行 npm run dev，记录地址；确认 main.ts 创建应用、App.vue 是根组件、#app 是挂载点。', 'CounterPractice 使用 <script setup lang="ts">、ref(0) 和按钮点击；点击三次显示 3。', '用箭头写 ref 定义→模板读取→事件修改→视图更新；临时把 count 赋成字符串观察类型错误后恢复。', '关闭资料，从空白重写一次计数器，只保留一个 ref 和一个按钮。'], expected: ['页面显示计数器，点击三次为 3。', '能指出 main.ts、App.vue 和组件的职责。'], tests: ['npm run type-check', '刷新后计数归 0', 'count.value=\'1\' 必须报错'], },
      { title: '完成固定活动首页和响应式列表', duration: 160, files: ['src/types/activity.ts', 'src/data/activities.ts', 'src/views/HomeView.vue', 'src/App.vue', 'src/style.css'], steps: ['阅读准备好的 Activity 类型和 6 条活动数据，先口述每个字段。', 'HomeView 定义 keyword=ref(\'\')，用一个普通函数返回标题匹配结果；Day 13 再改 computed。', '模板包含标题、搜索框、结果数量和活动列表；卡片显示标题、类型、地点和剩余名额。', 'App.vue 只渲染 HomeView；CSS 做桌面三列、375px 单列，不做主题系统。', '搜索 JavaScript 得 1 条，清空恢复 6 条；临时读取 activity.foo，确认类型提示后删除。'], expected: ['初始 6 张卡，搜索 JavaScript 后 1 张。', '375px 单列且无横向滚动。'], tests: ['npm run type-check', 'npm run build', 'Console 无 Vue warning'], },
      { title: '用 DevTools 看一次 Vue 状态更新', duration: 75, files: ['src/views/HomeView.vue', 'notes/day-12.md'], steps: ['在搜索函数第一行设断点，输入 JavaScript，观察 keyword.value 和活动数组长度。', 'Step over 到返回语句，记录过滤前后长度；移除断点后确认页面正常。', '记录一次错误或警告：现象、证据、原因、修复；没有错误就临时把导入路径改错并立即恢复。'], expected: ['笔记记录 6→1 的变量变化。', '恢复后 Console 无未解释错误。'], tests: ['刷新后断点仍能重新命中', 'git diff 中没有遗留的错误路径'], },
      { title: '30 分钟算法：移动零', duration: 30, files: ['algorithms/day-12-move-zeroes.ts', 'notes/day-12.md'], steps: [ALGORITHM_RULE, '使用快慢指针原地处理 [0,1,0,3,12]，得到 [1,3,12,0,0]。'], expected: ['写出 O(n) 时间、O(1) 额外空间。'], tests: ['[0] 保持 [0]', '[1,2] 保持 [1,2]'], },
    ], optional: ['给搜索框增加 label；不安装 Router 或 Pinia。'],
    review: { route: '首页 → main.ts → CounterPractice → HomeView。', steps: ['演示搜索和响应式布局。', '解释 ref 更新流程。', '运行 type-check 和 build。'], expected: ['6→1→6 路径正确。', '项目从创建起使用 TypeScript。'] },
  },

  13: {
    start: { dir: 'campus-growth-hub', commands: ['git status', 'npm run type-check'], open: ['src/views/HomeView.vue', 'src/components/ComputedWatchLab.vue', 'notes/day-13.md'], before: ['Day 12 项目可以运行并显示 6 条活动。', '今天 computed 负责派生值，watch 只处理存储等副作用。'] },
    tasks: [
      { title: '用最小实验区分 computed 与 watch', duration: 90, files: ['src/components/ComputedWatchLab.vue', 'notes/day-13.md'], steps: ['用 names=[Alice,Bob,Carol]、keyword 和 computed filteredNames 完成过滤。', 'watch(keyword) 只写 localStorage 的 demo-key；删除 watch 后过滤仍应工作。', '故意用普通常量保存过滤结果，观察输入后不更新，再恢复 computed。', '写判断规则：从状态计算值用 computed；产生外部副作用才考虑 watch。'], expected: ['输入 bo 只显示 Bob。', 'localStorage demo-key 为 bo。'], tests: ['清空恢复三人', '删除 watch 后筛选仍工作'], },
      { title: '首页完成关键词、类型、结果数和重置', duration: 170, files: ['src/views/HomeView.vue', 'src/data/activities.ts'], steps: ['把 Day 12 的普通过滤函数改为 computed。', '新增 selectedType，固定 all/技术/文艺/体育/就业/公益；关键词先 trim 和转小写。', 'resultCount 也使用 computed；无结果显示“暂无符合条件的活动”。', '重置按钮把 keyword 清空、selectedType 设为 all；watch 只把 keyword 写入 localStorage。', '按 6→技术2→技术+javascript1→文艺+javascript0→重置6 回归。'], expected: ['结果数量与列表同步。', '重置恢复 6 条。'], tests: ['关键词带首尾空格仍匹配', 'computed 中没有写 localStorage'], },
      { title: '无 AI 重写唯一过滤 computed', duration: 70, files: ['src/views/HomeView.vue', 'notes/day-13.md'], steps: ['关闭 AI 和课程，把 filteredActivities 暂存到笔记后从组件删除。', '只根据数据、keyword、selectedType 从空白重写；不得建立第二份过滤结果状态。', '完成固定 6→2→1→0→6 路线，失败就记录具体分支。'], expected: ['过滤只有一个入口。', '能说明 computed 的依赖。'], tests: ['npm run type-check', 'npm run build'], },
      { title: '30 分钟算法：合并有序数组', duration: 30, files: ['algorithms/day-13-merge-sorted-array.ts', 'notes/day-13.md'], steps: [ALGORITHM_RULE, '从尾部使用三个指针完成固定样例。'], expected: ['样例得到 [1,2,2,3,5,6]。'], tests: ['nums2=[] 时 nums1 不变'], },
    ], optional: ['从 localStorage 恢复初始关键词；不做复杂表单。'],
    review: { route: '首页固定筛选路线 → HomeView → localStorage。', steps: ['执行 6→2→1→0→6。', '说明 computed 与 watch 分工。', '运行 type-check。'], expected: ['筛选正确。', '没有重复过滤状态。'] },
  },

  14: {
    start: { dir: 'campus-growth-hub', commands: ['git status', 'npm run type-check'], open: ['src/views/HomeView.vue', 'src/components/MessageParent.vue', 'src/components/MessageChild.vue', 'src/components/SearchBar.vue', 'src/components/ActivityCard.vue', 'notes/day-14.md'], before: ['每日准备命令已生成带 TypeScript 边界的组件 starter。', '状态继续由 HomeView 持有；子组件只通过 props 接收、通过 emits 通知。'] },
    tasks: [
      { title: '用最小例理解 Props、Emits 与插槽', duration: 90, files: ['src/components/MessageParent.vue', 'src/components/MessageChild.vue', 'src/components/BasePanel.vue', 'notes/day-14.md'], steps: ['Child 用 defineProps<{message:string;count:number}>，用类型化 emit 发 increment。', 'Parent 持有 count 并监听事件更新；画 Parent state ↓ props / ↑ emit。', '临时修改 props.count，观察只读错误后恢复。', 'BasePanel 只实现 title prop 和默认 slot，不学习作用域插槽。'], expected: ['点击后由父组件增加 count。', '子组件不直接修改 props。'], tests: ['npm run type-check', '替换 slot 内容后正常显示'], },
      { title: '按固定契约拆分真实首页', duration: 180, files: ['src/components/SearchBar.vue', 'src/components/ActivityCard.vue', 'src/components/EmptyState.vue', 'src/views/HomeView.vue'], steps: ['SearchBar 接收 keyword、selectedType、types；发出 update:keyword、update:selectedType、reset。', 'ActivityCard 接收 activity:Activity、bookmarked:boolean；发出 toggle-bookmark，payload 只传 string id。', 'EmptyState 无业务状态，只显示固定空文案。', 'HomeView 保留全部状态和 computed，通过 props 下发、事件更新。', '拆分前后分别执行 6→2→1→收藏→重置，确保行为一致。'], expected: ['子组件职责单一。', '收藏只改变对应 id。'], tests: ['npm run type-check', 'npm run build', 'Console 无 prop mutation warning'], },
      { title: '无 AI 复写一条父子数据流', duration: 60, files: ['src/components/ActivityCard.vue', 'src/views/HomeView.vue', 'notes/day-14.md'], steps: ['关闭资料，删除并重写 ActivityCard 的 props 和 toggle-bookmark emit。', '从点击按钮开始，沿 emit→父事件→bookmarkedIds→props→按钮文案写完整链路。', '如果类型错误，只读错误文本定位父子约定，不改成 any。'], expected: ['收藏链路恢复。', '笔记能指出每一步所在文件。'], tests: ['点击同一卡片两次恢复未收藏'], },
      { title: '30 分钟算法：有效括号', duration: 30, files: ['algorithms/day-14-valid-parentheses.ts', 'notes/day-14.md'], steps: [ALGORITHM_RULE, '使用数组模拟栈，验证 ()[]{}、(]、{[]}。'], expected: ['三个样例正确。'], tests: ['空字符串为 true'], },
    ], optional: ['BasePanel 增加一个具名插槽；不强行套到全部组件。'],
    review: { route: '首页筛选→收藏→空状态→三组件源码。', steps: ['演示固定路线。', '沿 props/emit 解释数据流。', '运行 type-check。'], expected: ['拆分前后行为一致。', '没有 any 逃避类型。'] },
  },

  15: {
    start: { dir: 'campus-growth-hub', commands: ['git status', 'npm run type-check'], open: ['src/App.vue', 'src/practice/course-favorites/CourseFavorites.vue', 'src/practice/async-state/AsyncActivityLab.vue', 'src/services/activityApi.ts', 'src/views/HomeView.vue', 'notes/day-15.md'], before: ['组件拆分和收藏链路已经通过。', '今天只在现有项目内整合，不新建第二个 Vue 项目。'] },
    tasks: [
      { title: '无 AI 完成课程收藏小应用', duration: 100, files: ['src/App.vue', 'src/practice/course-favorites/CourseFavorites.vue', 'src/practice/course-favorites/courses.ts'], steps: ['固定四门课程；组件使用 ref 搜索词、收藏 id 和只看收藏，computed 生成可见列表。', 'App 增加“主项目/课程收藏/异步故障”切换，三个练习必须真正挂载。', '前 40 分钟不使用 AI；到点只看自己 Day 13/14 笔记，再关闭并完成。', '验证搜索 Vue、收藏、只看收藏、取消后空状态。'], expected: ['课程收藏初始 4 条。', '切回主项目后原筛选和收藏仍可用。'], tests: ['搜索不存在课程显示空状态', 'npm run type-check'], },
      { title: '实现并排查异步五态', duration: 170, files: ['src/practice/async-state/AsyncActivityLab.vue', 'src/services/activityApi.ts', 'src/views/HomeView.vue', 'notes/day-15.md'], steps: ['activityApi 支持 success/empty/error 和固定延迟，返回 Promise<Activity[]>。', '复现 starter 在 finally 清空数组的固定故障；用断点看到成功赋值后又被清空，只删除标记行。', '在练习组件验证 idle/loading/success/empty/error/retry；loading 期间按钮 disabled。', '把正确状态迁移到 HomeView，筛选 computed 从 loadedActivities 读取。', '回归 success 6 条、empty 空态、error 错误、retry 恢复 6 条。'], expected: ['固定故障有完整证据。', '重试后旧错误消失并恢复 6 条。'], tests: ['Console 无未处理 rejection', 'npm run type-check'], },
      { title: '无 AI 回归完整 Vue 基础链路', duration: 60, files: ['src/views/HomeView.vue', 'notes/day-15.md'], steps: ['关闭 AI，按搜索→类型→收藏→empty→error→retry 顺序演示。', '选择其中一个失败点，从输入状态沿 computed/事件/异步结果追到 UI。', '记录一项仍需要提示的能力，禁止写“都不会”。'], expected: ['演示中途不改代码。', '能说明一条完整数据流。'], tests: ['npm run build'], },
      { title: '30 分钟算法：复现本阶段最薄弱题', duration: 30, files: ['algorithms/day-15-review.ts', 'notes/day-15.md'], steps: [ALGORITHM_RULE, '从 Day 12～14 三题中选择辅助等级最高的一题，从空白重写。'], expected: ['保存选择理由和边界。'], tests: ['npm run type-check'], },
    ], optional: ['只补 aria-live 状态提示；不引入 Router、Pinia。'],
    review: { route: '课程收藏→主项目 success/empty/error/retry→源码。', steps: ['演示固定路径。', '说明 finally 为什么只做收尾。', '运行 build。'], expected: ['异步状态互斥。', '主项目无回归。'] },
  },

  16: {
    start: { dir: 'campus-growth-hub', commands: ['git log --oneline -7', 'npm run type-check'], open: ['notes/week-02-review.md', 'notes/vue-data-flow.md', 'notes/async-state-flow.md', 'src/views/HomeView.vue'], before: ['今天是 120 分钟轻量复盘，不打开新课程。', '先独立完成全部复盘和自测，再进入页面底部统一审查。'] },
    tasks: [
      { title: '固定 Vue 数据流和异步状态图', duration: 35, files: ['notes/vue-data-flow.md', 'notes/async-state-flow.md', 'notes/week-02-review.md'], steps: ['用收藏流程画：HomeView 状态→ActivityCard prop→点击 emit→父组件更新→按钮变化。', '画 idle→loading→success/empty/error，error→retry→loading。', '写三条证据、一个最高风险和下一周只调整的一项。'], expected: ['每条箭头能对应到代码。', '只列一个最高风险。'], tests: ['随机遮住一段后能口述缺失箭头'], },
      { title: '无 AI 固定修改：标题或地点搜索', duration: 45, files: ['src/views/HomeView.vue', 'notes/week-02-review.md'], steps: ['关闭 AI，把关键词匹配从仅 title 改为 title 或 location。', '复用同一个 normalizedKeyword，不增加第二份状态。', '验证东操场1条、教学楼2条、技术+教学楼2条、重置6条。'], expected: ['30 分钟内完成代码，剩余时间只测试和记录。'], tests: ['关键词前后空格仍匹配'], },
      { title: '旧算法、演示与阶段记录', duration: 40, files: ['algorithms/day-16-review.ts', 'notes/week-02-review.md'], steps: ['重写辅助等级最高的旧算法，不新增题。', '执行标题搜索→地点搜索→类型→收藏→error→retry。', '运行 type-check 和 build，提交阶段成果。'], expected: ['演示完整，构建通过。'], tests: ['Console 无 Vue warning'], },
    ], optional: ['今天不安排选做。'],
    review: { route: '固定演示路线→两张数据流图→week-02-review。', steps: ['执行完整路线。', '口述 ref/computed/watch。', '沿图解释父子通信和异步状态。'], expected: ['数据流与代码一致。', '总学习时间不超过 120 分钟。'] },
  },

  17: {
    start: { dir: 'campus-growth-hub', commands: ['npm install -D vitest jsdom', 'npm pkg set scripts.test:run="vitest run"', 'git status', 'npm run type-check'], open: ['src/types/activity.ts', 'src/components/ActivityCard.vue', 'src/components/SearchBar.vue', 'src/views/HomeView.vue', 'src/services/activityApi.ts'], before: ['项目从 Day 12 起已经使用 TypeScript，今天不做 JS→TS 迁移。', '今天把 Day 10～11 学过的类型真正接入 Vue 组件、接口结果和页面状态。', '不使用 @ts-ignore、as any 或重复数据源消除错误。'] },
    tasks: [
      { title: '完善活动领域类型与固定数据', duration: 80, files: ['src/types/activity.ts', 'src/types/api.ts', 'src/data/activities.ts'], steps: ['把 Activity 建模为 online/offline 判别联合；线上必须 meetingUrl，线下必须 location。', '定义 ActivityType、ActivityQuery、ApiResult<T> 和 PaginatedResult<T>。', '让现有 6 条数据满足类型；分别漏一次 location/meetingUrl，保存错误后恢复。'], expected: ['数据源只有 src/data/activities.ts 一份。', '非法活动在运行前被发现。'], tests: ['npm run type-check'], },
      { title: '类型化 Props、Emits 与筛选契约', duration: 100, files: ['src/components/ActivityCard.vue', 'src/components/SearchBar.vue', 'src/views/HomeView.vue'], steps: ['ActivityCard props 固定为 activity:Activity、bookmarked:boolean；toggle-bookmark 只传 string id。', 'SearchBar 接收 modelValue:ActivityQuery，发出 update:modelValue；父组件只保留一份查询状态。', '依次制造 keyword:number、漏 bookmarked、emit 完整对象三个错误，保存后修复。', '回归筛选、收藏和空状态。'], expected: ['父子边界能从类型签名读懂。', '子组件不直接改 props。'], tests: ['npm run type-check', '点击收藏只改变对应卡片'], },
      { title: '用判别联合统一页面请求状态', duration: 100, files: ['src/types/request.ts', 'src/services/activityFixture.ts', 'src/views/HomeView.vue'], steps: ['定义 RequestState<T> 五态；HomeView 使用 ref<RequestState<Activity[]>>。', '实现 listActivityFixtures(query):Promise<ApiResult<PaginatedResult<Activity>>>，延迟 300ms 并只读取现有数据源。', 'HomeView 根据 state.status 渲染 loading/success/empty/error；error 分支不能读取 data。', '筛选变化重新加载，旧状态不会与新状态同时显示。'], expected: ['首次加载后显示活动。', '无结果只显示 empty，错误只显示 error。'], tests: ['npm run type-check', 'npm run build'], },
      { title: '给核心函数补三个最小测试', duration: 50, files: ['src/utils/activity.ts', 'src/utils/activity.test.ts'], steps: ['实现 getRemaining、filterActivities。', '测试 a001 剩余人数、关键词匹配、无结果空数组。', '先看一次失败，再只改实现让三项通过。'], expected: ['测试可重复运行。'], tests: ['npm run test:run -- src/utils/activity.test.ts'], },
      { title: '30 分钟算法：环形链表', duration: 30, files: ['algorithms/day-17-cycle-list.ts', 'notes/day-17.md'], steps: [ALGORITHM_RULE, '使用快慢指针，验证普通链表、无环单节点和单节点自环。'], expected: ['能解释相遇为何代表有环。'], tests: ['npm run type-check'], },
    ], optional: ['为 ActivityType 文案建立 Record 映射；不做高级类型体操。'],
    review: { route: '首页五态→筛选→收藏→类型文件→测试。', steps: ['执行 type-check、定向测试和 build。', '查看线上/线下卡片。', '沿 HomeView→SearchBar/ActivityCard 解释类型边界。'], expected: ['命令全部通过。', 'Day 10～11 的类型知识已经进入真实 Vue 数据流。'] },
  },
}
