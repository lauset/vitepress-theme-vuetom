
<p align="center"><a href="https://gitee.com/lauset/vitepress-theme-vuetom" target="_blank" rel="noopener noreferrer"><img width="180" src="https://cdn.jsdelivr.net/gh/lauset/vitepress-theme-vuetom/packages/docs/public/logo/vuetom-logo.png" alt="logo"></a></p>

<p align="center">
  <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE"><img src="https://img.shields.io/github/license/xugaoyi/vuepress-theme-vdoing
" alt="License"></a>
  <a href="https://www.npmjs.com/package/vitepress-theme-vuetom"><img alt="npm" src="https://img.shields.io/npm/v/vitepress-theme-vuetom"></a>
</p>

<h2 align="center">vitepress-theme-vuetom</h2>

## 简要说明

1. 为 vitepress 1.x 提供的主题
2. 提供文档与博客两种风格的主题

[**更新日志**](CHANGELOG.md)

## 主题预览

* [**文档**风格 (*github.io*)](https://lauset.github.io/vitepress-theme-vuetom/)

* [**文档**风格 (*vercel.app*)](https://vitepress-theme-vuetom.vercel.app/vt/)

* [**博客**风格 (*开发中*)](https://vitepress-theme-vuetom-blog.vercel.app/myblog/)

## 快速上手

* 拉取项目

```bash
git clone https://github.com/lauset/vitepress-theme-vuetom.git

cd vitepress-theme-vuetom
```

* 安装依赖

```bash
pnpm install
```

* 启动文档示例

```bash
# 根目录运行
pnpm dev:docs

# 文档目录运行
cd packages/docs
pnpm dev
```

* 启动博客示例

```bash
# 根目录运行
pnpm dev:blog

# 博客目录运行
cd packages/blog
pnpm dev
```

* 根目录构建操作

```bash
# 清理已打包的文件
pnpm clean:all

# 构建主题
pnpm build:theme

# 构建文档
pnpm build:docs

# 构建博客
pnpm build:blog
```

* 根目录预览操作

```bash
# 预览文档
pnpm preview:docs

# 预览博客
pnpm preview:blog
```

* 发布主题包

```bash
cd packages/vuetom
pnpm pub
```

* 部署

github.io 部署需将 base 改为仓库名称

## 文档目录多语言

查看项目文件列表

```shell
crowdin:list
```

上传待翻译的源文件

```shell
crowdin:upload
```

查看预下载文件列表

```shell
crowdin:dryrun
```

下载en-US翻译文件

```shell
crowdin:us
```

下载zh-TW翻译文件

```shell
crowdin:tw
```

## 简单展示

![首页](/resources/pic01.png)

![暗黑主题](/resources/pic02.png)

![语法示例](/resources/pic03.png)

![其他](/resources/pic04.png)

## 博客示例

![home](/resources/blog-home-01.png)

![post](/resources/blog-post-01.png)

## 仓库地址

[github](https://github.com/lauset/vitepress-theme-vuetom)

[gitee](https://gitee.com/lauset/vitepress-theme-vuetom)

## 感谢

[Vue](https://vuejs.org/)

[Vite](https://cn.vitejs.dev/)

[Vitepress](https://vitepress.vuejs.org/)

[Vercel](https://vercel.com/docs)

[ElementPlus](https://element-plus.gitee.io/zh-CN/)

[Crowdin](https://crowdin.com/)
