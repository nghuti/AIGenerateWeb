# 🧠 AI Image Generator - MERN Web App

Đây là một dự án Web App tạo ảnh bằng AI sử dụng mô hình như ClipDrop API hoặc các dịch vụ AI tương tự.  
Người dùng có thể đăng ký, đăng nhập, nhập mô tả hình ảnh và hệ thống sẽ tạo ảnh tương ứng.

## 🚀 Tính năng chính

- 🖼️ Tạo ảnh AI từ mô tả người dùng
- 🔐 Đăng ký / Đăng nhập bằng JWT Token
- 💾 Tải ảnh xuống
- 🎨 Giao diện đẹp mắt , responsive với TailwindCSS

---

## 🧰 Công nghệ sử dụng

- **MongoDB Atlas** – Cơ sở dữ liệu NoSQL
- **ExpressJS** – Server-side Framework
- **ReactJS (v18)** – Giao diện người dùng
- **NodeJS (v18)** – Môi trường backend
- **JWT** – Xác thực bảo mật
- **TailwindCSS** – Giao diện đơn giản, đẹp
- **ClipDrop API** - Dịch vụ AI tạo ảnh

---

## ⚙️ Hướng dẫn cài đặt và chạy dự án

### 1. Clone dự án
git clone [https://github.com/ten-cua-ban/ai-image-generator.git](https://github.com/nghuti/AIGenerateWeb.git)
cd ai-image-generator

### 2. Cài đặt phần backend (server)
cd server
npm install

### 🔐 Tạo file .env trong thư mục server:
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
CLIPDROP_API_KEY=your_api_key  


### Chạy backend:
npm run dev

### 3. Cài đặt frontend (client)
npm install
npm start

