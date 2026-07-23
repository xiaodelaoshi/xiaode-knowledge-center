# 小德老師知識中心 v1.0

以 Astro、Markdown／MDX、Pagefind 與 GitHub Pages 建立的個人知識中心。

## 本機使用

```sh
npm install
npm run dev
```

正式建置與 Pagefind 搜尋索引：

```sh
npm run build
npm run preview
```

## 新增文章

在 `src/content/articles/` 新增 `.md` 或 `.mdx`，依照現有範例填寫：

- `title`
- `description`
- `publishedAt`
- `category`
- `tags`
- `featured`

分類名稱需使用六大分類之一。

## 社群與品牌設定

集中修改 `src/data/site.ts`。目前 Facebook 已填入，Instagram 與 LINE 保留待補。

## 發布到 GitHub Pages

1. 在 GitHub 建立新儲存庫並上傳本專案。
2. 在儲存庫 Settings → Pages，Source 選擇 GitHub Actions。
3. 推送至 `main` 後，工作流程會自動建置與發布。
4. 若使用自訂網域，設定 `SITE_URL` 環境變數並依 GitHub Pages 指示完成 DNS。
