# Simple-Whatsapp-API
Simple Whatsapp API - Just connect with QR and start sending messages instantly.


# 📌 Product Plan: Minimal WhatsApp Send API

## 1. **Vision**

Provide a **single-purpose API** that allows sending text messages and attachments (images, videos, documents) from a normal WhatsApp account with minimal setup.

---

## 2. **Core Features**

* **Send Text Message**

  * Endpoint: `POST /send-message`
  * Payload:

    ```json
    {
      "to": "+1234567890",
      "message": "Hello World"
    }
    ```

* **Send Attachment**

  * Endpoint: `POST /send-attachment`
  * Payload:

    ```json
    {
      "to": "+1234567890",
      "type": "image|video|document",
      "file": "base64_encoded_file_or_url",
      "caption": "Optional caption"
    }
    ```

---

## 3. **Technical Approach**

Since this is a **normal WhatsApp account**, the backend would use an unofficial library:

* **Recommended library:** `whatsapp-web.js` (Node.js)
* **How it works:**

  1. Scan QR code once to log in
  2. Maintain session locally (or in a database)
  3. Expose a REST API endpoint that calls the library’s send message/send media functions

**Example flow using `whatsapp-web.js`:**

1. User sends `POST /send-message` → backend calls `client.sendMessage(to, message)`
2. User sends `POST /send-attachment` → backend calls `client.sendMessage(to, mediaMessage)`

---

## 4. **MVP Architecture**

```
[REST API Server]
        |
        |----> [WhatsApp Client (whatsapp-web.js)]
                     |
                     |----> WhatsApp Web session (QR login)
```

* **Database (Optional):** store session file for persistent login
* **No webhooks** needed since we only send messages

---

## 5. **Limitations**

* Must maintain an active WhatsApp session (phone connected)
* Only supports sending; no receiving or automation
* Using unofficial libraries → risk of account ban if used aggressively

---



