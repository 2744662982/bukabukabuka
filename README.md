# 飞行汽车技术基础 · 课程作业（Web 版）

分体式飞行汽车「小鹏汇天 陆地航母」的全方位调研分析 + 全方位安全分析。纯静态站点，无构建、无依赖、无 CDN，双击 `index.html` 即可离线阅读。

## 页面结构

| 文件 | 内容 |
| --- | --- |
| `index.html` | **作业一**：技术可行性、应用场景、市场可行性、竞品比较、工程化门槛 |
| `safety.html` | **作业二**：ConOps、危害识别与 HARA、功能安全与冗余、SOTIF、信息安全、被动安全、运行安全、GSN 安全论证 |
| `assets/style.css` | 全站样式（含打印样式、窄屏适配） |
| `assets/app.js` | 阅读进度条与目录高亮（约 2 KB，无依赖） |
| `assets/fig-*.svg` | 系统架构图、安全工程流程图、GSN 论证骨架（纯 SVG，可缩放、可改色） |

## 本地查看

直接双击 `index.html`。

## 部署到 GitHub Pages

作业要求：**Public 仓库 + 根目录 `index.html`**。两条路，选一条。

### 路线 A：网页上传（本机没装 git，推荐这条）

1. GitHub → New repository → 名字随意（如 `flying-car-report`）→ **Public** → Create。
2. 仓库页点 **uploading an existing file**。
3. 把 `flying-car` 文件夹里的**全部内容**（`index.html`、`safety.html`、`assets/`、`README.md`）拖进去 → Commit changes。
   - 注意：拖的是**文件夹里面的东西**，不是 `flying-car` 这一层，否则根目录就没有 `index.html` 了。
4. Settings → Pages → Source 选 `Deploy from a branch` → Branch `main` / Folder `/ (root)` → Save。
5. 等 1 分钟，访问 `https://<你的用户名>.github.io/<仓库名>/`。

### 路线 B：命令行（需先装 git：`winget install --id Git.Git`）

```bash
cd flying-car
git init
git add .
git commit -m "飞车作业：调研分析 + 安全分析"
git branch -M main
git remote add origin https://github.com/<用户名>/flying-car-report.git
git push -u origin main
```

之后同路线 A 的第 4、5 步。

## 需要你替换的地方

1. **作者信息**：`index.html` 与 `safety.html` 的 `.meta` 区块里各有一处
   `〈姓名 / 学号 / 专业〉`，改成自己的信息（两页都要改）。
2. **证据截止日期**：正文写的是 2026-11-25；若之后补充了新材料，记得同步修改。
3. （可选）把 `assets/` 里三张 SVG 换成企业的官方实拍图/渲染图，注意版权与来源标注。

## 内容说明（避免误读）

- 全文对每个关键数字标注了证据等级：`官方披露` / `外部证据` / `本文估算` / `待核实`。
- 性能区间（续航 15–25 min、任务半径 30–50 km）是**基于公开构型的量级估算**，不是企业数据；正文给出了估算公式与假设，可复核。
- 安全分析中的危害编号（H1–H12）、S/E/C 评分、安全需求编号（SR-01…）均为**教学推演**，不代表企业实际设计或局方审定结论。
- 页面不引用任何未公开资料；所有引用均为公开可查来源。

## 许可与引用

课程作业用途。文中引用的图片/标准/报告版权归原作者；SVG 图为本作业原创绘制，可自由修改。
