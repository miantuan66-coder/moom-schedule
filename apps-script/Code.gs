const NOTIFY_EMAIL = "shunyoutou@gmail.com";

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || "{}");
    const booking = {
      date: sanitize(payload.date),
      time: sanitize(payload.time),
      name: sanitize(payload.name),
      contact: sanitize(payload.contact),
      message: sanitize(payload.message || "未填写"),
      page: sanitize(payload.page || ""),
    };

    if (!booking.date || !booking.time || !booking.name || !booking.contact) {
      return jsonResponse({ ok: false, message: "missing required fields" });
    }

    const subject = `MooM预约申请：${booking.date} ${booking.time}`;
    const body = [
      "收到新的预约申请：",
      "",
      `日期：${booking.date}`,
      `时间：${booking.time}`,
      `预约人：${booking.name}`,
      `联系方式：${booking.contact}`,
      `预约内容：${booking.message}`,
      "",
      booking.page ? `来源页面：${booking.page}` : "",
      "",
      "请及时确认预约。",
    ].filter(Boolean).join("\n");

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject,
      body,
      name: "MooM预约通知",
    });

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, message: String(error) });
  }
}

function doGet() {
  return jsonResponse({ ok: true, message: "MooM booking mailer is running." });
}

function sanitize(value) {
  return String(value || "").replace(/[<>]/g, "").trim().slice(0, 1000);
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
