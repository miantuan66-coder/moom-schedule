# MooM的空闲时间表

这是一个独立的静态网页，和找工作的个人主页分开使用。

页面内容：

- 标题：`MooM的空闲时间表`
- 范围：从访问当天开始的三个月
- 状态：目前每天、每个时间段都显示 `空闲`
- 预约申请：点击空闲时间后填写表单，可自动邮件通知 MooM
- 文件：`index.html`、`style.css`

## 本地预览

在这个文件夹运行：

```bash
python3 -m http.server 8020
```

然后打开：

```text
http://localhost:8020
```

## 修改预约时间

预约时间在 `index.html` 里的 `timeSlots` 修改：

```js
const timeSlots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
```

## 预约通知邮箱

当前网页已经预留自动邮件通知接口：

- 收件人：`shunyoutou@gmail.com`
- 后端方案：Google Apps Script
- 设置说明：`AUTO_EMAIL_SETUP.md`

设置完成后，预约人提交表单，MooM 会自动收到邮件通知。预约者不需要自己发送邮件。

如果还没有设置 Google Apps Script，网页会显示备用方式：复制预约信息或打开 Gmail 手动发送。

## 发布

上传这个文件夹到 GitHub Pages、Netlify、Vercel 或 Cloudflare Pages 后，就能得到公网链接。拿到公网链接后，用那个链接生成二维码即可。
