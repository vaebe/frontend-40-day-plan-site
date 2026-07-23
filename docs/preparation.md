# 前期准备

这部分只在开始第 1 天之前完成一次，不计入 40 天学习时间。完成后，后续每天直接打开当天页面，从“第 1 步：运行当天命令”开始。

## 1. 认识四个固定位置

整个计划只涉及下面三个位置：

| 名称 | 实际位置 | 用途 |
| --- | --- | --- |
| 计划站点根目录 | `frontend-40-day-plan-site` | 查看计划、运行每日准备命令 |
| 学习工作区 | `frontend-40-day-learning-lab` | 承载全部学习成果和 Git 历史；第 1～9 天代码直接放在这里 |
| TypeScript 基础练习 | `frontend-40-day-learning-lab/typescript-foundations` | 第 10～11 天独立学习 TypeScript，不启动 Vue |
| Vue 正式项目 | `frontend-40-day-learning-lab/campus-growth-hub` | 第 12～40 天持续维护的唯一 Vue 3 + TypeScript 项目 |

学习工作区和计划站点是**同级文件夹**。`frontend-40-day-learning-lab` 不需要手动创建，第 1 天的准备命令会自动创建它。

这样安排是因为 TypeScript 练习和 Vue 正式项目都需要执行 `npm install`。它们各自拥有 package.json，不能在学习工作区根目录混装依赖，更不能放进计划站点内部。

::: warning 只保留一份工作区
不要在桌面、下载目录或其他位置再创建 `frontend-40-day-learning-lab`、`typescript-foundations` 或 `campus-growth-hub`。否则后面很容易修改错项目。
:::

## 2. 在正确位置打开终端

1. 在文件管理器或编辑器中找到 `frontend-40-day-plan-site` 文件夹。
2. 对这个文件夹使用“在终端中打开”，或者在 VS Code 中打开该文件夹后选择“终端 → 新建终端”。
3. 查看当前文件列表，确认能看到下面三个项目：

```text
package.json
docs
scripts
```

看不到它们就说明终端位置不对。不要运行后续命令，重新在 `frontend-40-day-plan-site` 文件夹打开终端。

## 3. 安装计划站点依赖

只在 `frontend-40-day-plan-site` 根目录运行：

```bash
pnpm install
```

完成标准：命令正常结束，没有红色的失败信息。警告先记录，不要自行删除文件或更换包管理器。

如果终端提示找不到 `pnpm`，先记录完整错误并暂停，不要改用 `npm install` 混装本站依赖；由项目维护者确认 Node.js 和 pnpm 环境后再继续。

## 4. 确认计划网站可以运行

在当前终端运行：

```bash
pnpm dev
```

终端会显示一个本地地址，通常类似 `http://localhost:5173`。按住 Command 点击地址，确认能看到“40 天前端成长计划”。

这个命令会持续运行，不会自动返回输入光标，这是正常现象。确认页面可打开后按 `Control + C` 停止。

## 5. 理解每日准备命令

每天页面都会给出类似命令：

```bash
pnpm learner:prepare 01
```

它的作用是：

- 自动创建当天需要的题目、故障代码、空白文件和参考材料；
- 把文件放入与计划站点同级的 `frontend-40-day-learning-lab`；
- 已经存在的文件一律保留，不覆盖学习者写过的内容；
- 某一天依赖前一天成果时，会明确报告缺少哪个文件。

每天都要回到 `frontend-40-day-plan-site` 根目录运行这条命令。不要在 `frontend-40-day-learning-lab` 或 `campus-growth-hub` 里面运行。

## 6. 学会读取页面中的文件路径

每日页面为了简洁，会省略开头的 `frontend-40-day-learning-lab/`。

| 页面写法 | 实际完整位置 |
| --- | --- |
| `day-01/html/index.html` | `frontend-40-day-learning-lab/day-01/html/index.html` |
| `notes/day-05.md` | `frontend-40-day-learning-lab/notes/day-05.md` |
| `typescript-foundations/src/01-values.ts` | `frontend-40-day-learning-lab/typescript-foundations/src/01-values.ts` |
| `campus-growth-hub/src/App.vue` | `frontend-40-day-learning-lab/campus-growth-hub/src/App.vue` |

第 10～11 天代码位于 `typescript-foundations`，从第 12 天开始绝大多数代码位于 `campus-growth-hub`；每日准备命令始终从计划站点根目录运行。

## 7. 理解“终端 A”和“终端 B”

开发服务器会持续占用一个终端，因此部分任务要求两个终端：

- **终端 A：** 只运行 `npm run dev` 或页面指定的开发服务器命令，保持运行。
- **终端 B：** 运行测试、构建、Git 和其他命令。

不要在终端 A 的服务器还在运行时继续输入其他命令。需要停止服务器时按 `Control + C`。

## 8. 第 1 天会建立独立 Git 仓库

第 1 天页面会执行：

```bash
cd ../frontend-40-day-learning-lab
git init
```

这会让学习代码拥有自己的 Git 记录，不和学习计划网站的代码混在一起。后续所有学习成果提交都属于 `frontend-40-day-learning-lab` 仓库。

## 9. 每天固定的开始顺序

完成本页后，每天只重复下面的流程：

1. 打开当天计划页面。
2. 在 `frontend-40-day-plan-site` 根目录新建终端。
3. 复制当天第 1 步的命令并按顺序运行。
4. 打开第 2 步列出的文件。
5. 确认第 3 步的前置条件。
6. 只做第 4 步指定的第一项工作。

## 10. 前期准备完成检查

- [ ] 知道 `frontend-40-day-plan-site` 是计划站点，不是学习代码目录。
- [ ] 知道学习成果只放在同级的 `frontend-40-day-learning-lab`。
- [ ] 根目录能看到 `package.json`、`docs`、`scripts`。
- [ ] `pnpm install` 已成功完成。
- [ ] `pnpm dev` 能打开计划网站，并已用 `Control + C` 停止。
- [ ] 能解释为什么每日准备命令必须在计划站点根目录运行。
- [ ] 能说出终端 A 和终端 B 的用途。

全部勾选后，再进入[第 1 天：低压力基线诊断](/days/day-01/)。
