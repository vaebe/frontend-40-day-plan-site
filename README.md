# 40 天前端冲刺计划站点

这是一个 VitePress 静态站，用网页形式展示“没学过 TypeScript 版本”的 40 天前端冲刺计划。

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
