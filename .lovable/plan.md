

# Trang Đếm Ngược Kỳ Thi THPT 2026

Xây dựng trang web đếm ngược kỳ thi tốt nghiệp THPT 2026 với thiết kế minimal, giao diện sáng sủa.

---

## Tính năng chính

### 1. Đếm ngược Realtime
- Bộ đếm ngược lớn, nổi bật ở trung tâm trang
- Hiển thị: **Ngày - Giờ - Phút - Giây** còn lại đến môn thi tiếp theo
- Cập nhật mỗi giây với animation mượt mà
- Hiển thị tên môn thi đang đếm ngược (ví dụ: "Thời gian còn lại đến môn Ngữ văn")

### 2. Danh sách các môn thi
- Hiển thị 4 môn thi với thông tin chi tiết:
  - **Ngữ văn**: 11/6/2026 - Sáng - 07:30 - 120 phút
  - **Toán**: 11/6/2026 - Chiều - 14:20 - 90 phút  
  - **Bài thi tự chọn 1**: 12/6/2026 - Sáng - 07:30 - 50 phút
  - **Bài thi tự chọn 2**: 12/6/2026 - Sáng - 08:35 - 50 phút
- Highlight môn thi đang được đếm ngược
- Click vào môn thi sẽ chuyển đếm ngược sang môn đó

---

## Thiết kế giao diện

- **Phong cách**: Minimal, sáng sủa, tập trung vào nội dung
- **Màu chủ đạo**: Xanh dương nhạt với nền trắng
- **Layout**: Đếm ngược ở giữa, danh sách môn thi bên dưới hoặc sidebar
- **Typography**: Font rõ ràng, dễ đọc, số đếm ngược lớn và nổi bật
- **Responsive**: Hiển thị tốt trên cả điện thoại và máy tính

---

## Cấu trúc trang

```
┌─────────────────────────────────────┐
│           HEADER                    │
│   "Đếm Ngược Kỳ Thi THPT 2026"     │
├─────────────────────────────────────┤
│                                     │
│     Môn thi tiếp theo: Ngữ văn      │
│         11/6/2026 - 07:30           │
│                                     │
│  ┌───┐  ┌───┐  ┌───┐  ┌───┐        │
│  │123│  │ 12│  │ 54│  │ 33│        │
│  │NGÀY│  │GIỜ│  │PHÚT│  │GIÂY│      │
│  └───┘  └───┘  └───┘  └───┘        │
│                                     │
├─────────────────────────────────────┤
│         DANH SÁCH MÔN THI           │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐   │
│  │Văn  │ │Toán │ │TC1  │ │TC2  │   │
│  │11/6 │ │11/6 │ │12/6 │ │12/6 │   │
│  └─────┘ └─────┘ └─────┘ └─────┘   │
└─────────────────────────────────────┘
```

