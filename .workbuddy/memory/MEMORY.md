# 我的博客 · 长期记忆

## 写文章的标准流程（已与用户确认）
- 新建文章：在 `src/content/posts/` 下创建 `.md`，填好 frontmatter：
  `title` / `description` / `pubDate` / `category` / `tags` / `cover`。
- `category` 必须是 `src/consts.ts` 里 `CATEGORIES` 五栏之一：
  日常碎碎念 / 旅行足迹 / 读书观影 / 美食厨房 / 手作。
- `cover`：填图床/对象存储链接；留空（或省略）则按栏目色自动生成占位图。
- `draft: true` 可存草稿不发布；发布时改为 `false`。
- 首页与栏目页会自动收录，无需手动登记。
- 本地预览/开发：`npm run dev`（热更新，改完即时刷新）。
- 构建部署：`npm run build`（产物在 `dist/`）。
- 改站点信息（站名/简介）：编辑 `src/consts.ts` 的 `SITE_TITLE` / `SITE_DESCRIPTION`。

## 栏目与字段校验
- 文章 schema 见 `src/content/config.ts`，字段缺失会构建报错，写前先对照。

## 本地运行注意事项（沙箱环境）
- 沙箱有「安全删除」钩子（fail-closed）：凡涉及删除文件的操作（build 末尾清理临时 .mjs、dev 时 Vite 重优化删除 `.vite/deps`）都会**报错并让进程退出**，但**静态产物 `dist/` 实际已完整生成**，可直接 `npm run preview`。
- 预览：`npm run preview -- --host` 正常可用（静态服务，不触发删除），地址 http://localhost:4321/。
- 开发模式 `npm run dev` 当前**起不来**（Vite 重优化依赖时删除被拦导致崩溃）。需要热更新时，需用**免沙箱模式**启动 dev（请求用户放开沙箱）。
- 已验证：build 即便报 safe-delete 失败，dist 仍完整；preview 不受影响。

## 部署方案（2026-08-18 变更）
- **从「腾讯云 COS/CVM + 备案」改为「GitHub Pages」**：用户决定不放在腾讯云。
- 优点：**免 ICP 备案、免买服务器、免费**。代价：国内访问偶尔偏慢（可接受）。
- 配置：`astro.config.mjs` 的 `site` 改 GitHub Pages 地址；用户页方案 base 留空（默认 '/'），项目页需 `base:'/<repo>/'`。
- 自动部署：已加 `.github/workflows/deploy.yml`（push 到 main 自动 build+deploy）。仓库 Settings → Pages → Source 选 "GitHub Actions"。
- 图床与部署解耦：仍可单独选图床（GitHub 仓库 / 第三方 / COS 默认域名免备案），不影响部署。
- 指南文件：`GitHub-Pages部署指南.md`（根目录）；旧的 `腾讯云COS开通与备案指南.md` 已不再适用，可忽略。
