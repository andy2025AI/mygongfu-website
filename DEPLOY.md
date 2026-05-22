# 部署指南 - mygongfu.com

## 📋 部署概览
- 域名：mygongfu.com
- 托管：GitHub Pages
- 域名注册：阿里云

---

## 🚀 步骤一：推送代码到 GitHub

### 1. 创建 GitHub 仓库
1. 访问 https://github.com/new
2. 仓库名建议：`mygongfu-website` 或 `website`
3. 选择 Public 或 Private
4. **不要**初始化 README、.gitignore 或 LICENSE
5. 点击 "Create repository"

### 2. 推送代码

```bash
# 初始化 git（如果需要）
git init

# 添加远程仓库（替换为您的用户名）
git remote add origin https://github.com/您的用户名/仓库名.git

# 设置分支名称
git branch -M main

# 提交所有文件
git add .
git commit -m "Initial commit: 全新升级的网站"

# 推送到 GitHub
git push -u origin main
```

---

## ⚙️ 步骤二：配置 GitHub Pages

1. 进入您的 GitHub 仓库
2. 点击 **Settings**（设置）
3. 在左侧菜单找到 **Pages**（页面）
4. 在 **Build and deployment**（构建和部署）下：
   - **Source**（源）选择：**GitHub Actions**
   - **Branch**（分支）会自动配置

5. 等待 GitHub Actions 自动部署（通常 2-3 分钟）
6. 部署成功后，您会看到一个类似 `https://您的用户名.github.io/仓库名/` 的链接

---

## 🌐 步骤三：配置阿里云 DNS

### 1. 登录阿里云控制台
访问：https://dsw-console.aliyun.com/

### 2. 找到您的域名
1. 进入 **域名** 控制台
2. 找到 `mygongfu.com`
3. 点击 **解析**

### 3. 添加 DNS 记录

添加以下记录：

| 记录类型 | 主机记录 | 记录值 | TTL |
|---------|---------|--------|-----|
| CNAME | www | 您的GitHub用户名.github.io | 10分钟 |
| CNAME | @ | 您的GitHub用户名.github.io | 10分钟 |

或者使用 A 记录（推荐）：

首先获取 GitHub Pages 的 IP 地址（当前）：
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

添加 A 记录：
| 记录类型 | 主机记录 | 记录值 | TTL |
|---------|---------|--------|-----|
| A | @ | 185.199.108.153 | 10分钟 |
| A | @ | 185.199.109.153 | 10分钟 |
| A | @ | 185.199.110.153 | 10分钟 |
| A | @ | 185.199.111.153 | 10分钟 |
| CNAME | www | 您的GitHub用户名.github.io | 10分钟 |

---

## 🔐 步骤四：在 GitHub 配置自定义域名

1. 回到 GitHub 仓库的 **Settings** > **Pages**
2. 在 **Custom domain**（自定义域名）中输入：`mygongfu.com`
3. 点击 **Save**（保存）
4. 勾选 **Enforce HTTPS**（强制 HTTPS）- 这可能需要几分钟才能激活

---

## ✅ 验证部署

1. 等待 DNS 生效（可能需要几分钟到几小时）
2. 访问：https://mygongfu.com
3. 🎉 完成！

---

## 🔄 更新网站

每次您修改代码后：
```bash
git add .
git commit -m "描述您的更新"
git push
```
GitHub Actions 会自动重新部署！

---

## 📁 已配置的文件

- [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) - 自动部署工作流
- [`public/CNAME`](public/CNAME) - 域名配置
- [`package.json`](package.json) - 构建脚本
