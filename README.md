# 40 天前端成长计划站点

这是一个 VitePress 静态站，展示为特定学习者定制的 40 天前端实习准备计划。路线聚焦基础重建、Vue 3 + TypeScript 综合项目、算法入门、调试能力和每日成果验收。

计划采用“5 天正常学习 + 1 天巩固实践 + 1 天轻量复盘”的节奏。正常日为 6 小时净学习，轻量日为 2～3 小时，并由资深前端每天验收约 30 分钟。

## 本地运行

```bash
pnpm install
pnpm dev
```

## 构建

```bash
pnpm build
```

构建产物在：

```text
docs/.vitepress/dist
```

## 重新生成计划页面

40 天的逐日规格位于 `scripts/specs/`，页面模板位于 `scripts/generate-plan.mjs`。调整路线后运行：

```bash
node scripts/generate-plan.mjs
```

它会更新首页、总览、导航和 40 个每日页面。

## 学习者工作区

学习者每天先在本站根目录运行页面给出的准备命令，例如：

```bash
pnpm learner:prepare 01
```

命令会把当天 starter 写入与本站同级的 `frontend-40-day-learning-lab`，已存在的学习成果不会被覆盖。学习代码、Git 历史和 npm 依赖不会混入计划站点。

## 目录结构

```text
docs/
  index.md
  overview.md
  days/
    day-01/
      index.md
    day-02/
      index.md
    ...
    day-40/
      index.md
```

## GitHub Pages

仓库创建和 Pages 开关由你自己操作。项目里已经包含：

```text
.github/workflows/deploy.yml
```

推送到 GitHub 后，在仓库 Settings -> Pages 里选择 GitHub Actions 作为部署来源即可。
