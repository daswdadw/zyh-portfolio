# Git 命令版部署教程

这份教程适合你想用本地 Git 命令把网站推送到 GitHub。

下面假设：

- 你的 GitHub 用户名是：`你的用户名`
- 你的仓库名是：`zhouyunhui-portfolio`

如果仓库名不同，把下面命令里的仓库名改掉就行。

## 第 1 步：在 GitHub 创建仓库

先去 GitHub 新建一个空仓库：

- 仓库名建议：`zhouyunhui-portfolio`
- 设为 `Public`
- 不要初始化 README

## 第 2 步：打开终端

在 Windows 里你可以打开：

- PowerShell
- Git Bash
- Windows Terminal

## 第 3 步：进入网站文件夹

```powershell
cd "C:\Users\周允徽\Documents\Codex\2026-07-02\zh\outputs\github-upload-package"
```

## 第 4 步：初始化 Git 仓库

```powershell
git init
```

## 第 5 步：添加所有文件

```powershell
git add .
```

## 第 6 步：创建第一次提交

```powershell
git commit -m "Initial portfolio site"
```

## 第 7 步：绑定远程 GitHub 仓库

把下面的 `你的用户名` 换成你自己的 GitHub 用户名：

```powershell
git remote add origin https://github.com/你的用户名/zhouyunhui-portfolio.git
```

## 第 8 步：切换主分支名称

```powershell
git branch -M main
```

## 第 9 步：推送到 GitHub

```powershell
git push -u origin main
```

如果第一次推送时 GitHub 要求登录，就按提示完成登录。

## 第 10 步：开启 GitHub Pages

推送成功后：

1. 打开你的 GitHub 仓库
2. 进入 `Settings`
3. 点击 `Pages`
4. `Source` 选择 `Deploy from a branch`
5. 选择 `main` 分支
6. 文件夹选择 `/root`
7. 点击 `Save`

## 最终访问地址

你的网站地址通常会是：

```text
https://你的用户名.github.io/zhouyunhui-portfolio/
```

## 后续更新命令

以后你修改完网站，只要重复下面 3 条命令：

```powershell
git add .
git commit -m "update portfolio"
git push
```

## 常见问题

### 1. 如果提示 git 不是内部命令

说明你电脑还没有安装 Git。

去这里下载并安装：
[https://git-scm.com/download/win](https://git-scm.com/download/win)

### 2. 如果推送时报认证错误

通常是 GitHub 登录或权限问题。现在 GitHub 一般使用浏览器登录或 Token，而不是密码。

### 3. 如果网页打开后样式丢失

一般是因为：

- `styles.css` 没上传
- `script.js` 没上传
- 文件不在和 `index.html` 同一层目录
