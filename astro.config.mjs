import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// === 部署目标：GitHub Pages（项目页方案）===
// 仓库名：myblog  →  最终访问网址：https://xxmayi.github.io/myblog
// site + base 已按本仓库填写好，无需再改。
// 推送到 GitHub 后，仓库 Settings → Pages → Source 选 "GitHub Actions" 即可自动部署。
export default defineConfig({
  site: 'https://xxmayi.github.io',
  base: '/myblog/',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
