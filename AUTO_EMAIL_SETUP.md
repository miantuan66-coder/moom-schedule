# 自动邮件通知设置

这个方案会让网页把预约信息提交到你的 Google Apps Script，再由脚本自动发送邮件到：

```text
shunyoutou@gmail.com
```

预约者不需要登录 Gmail，也不需要自己发邮件。

## 1. 创建 Apps Script

1. 打开 Google Apps Script：`https://script.google.com/`
2. 点击 `新建项目`。
3. 删除编辑器里的默认代码。
4. 把本文件夹里的 `apps-script/Code.gs` 内容复制进去。
5. 点击保存。

## 2. 部署为 Web App

1. 点击右上角 `部署`。
2. 选择 `新建部署`。
3. 类型选择 `Web 应用`。
4. 执行身份选择：`我`。
5. 访问权限选择：`任何人`。
6. 点击部署。
7. 第一次会要求授权，按提示允许脚本发送邮件。
8. 复制生成的 `Web 应用网址`。

## 3. 填回网页

打开 `index.html`，找到：

```js
const BOOKING_API_URL = "";
```

把引号里改成你的 Web 应用网址，例如：

```js
const BOOKING_API_URL = "https://script.google.com/macros/s/你的部署ID/exec";
```

保存后重新发布到 GitHub Pages。

## 隐私说明

- 预约信息不会公开显示在网页上。
- 信息会发送到你的 Google Apps Script。
- Apps Script 会把预约内容发送到 `shunyoutou@gmail.com`。
- 如果想更严格地保护隐私，可以减少表单字段，例如不收集姓名，只收集联系方式和预约内容。
