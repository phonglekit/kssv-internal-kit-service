# Hướng dẫn Kích thước Hình ảnh cho microCMS

## ⚠️ QUAN TRỌNG - ĐỌC TRƯỚC

**Dành cho Team Marketing:**

- Các kích thước ghi trong document này là **yêu cầu tối thiểu** khi upload ảnh lên microCMS
- **NÊN upload ảnh có chất lượng cao hơn** (ví dụ: 1920px thay vì 1200px)
- Hệ thống web sẽ **TỰ ĐỘNG scale và optimize** ảnh cho phù hợp với:
  - Responsive breakpoints (mobile, tablet, desktop)
  - Retina displays (2x, 3x)
  - Loading performance
- **Không cần lo lắng về file size quá lớn** - hệ thống sẽ tự động nén và tối ưu
- **Tập trung vào chất lượng và tỷ lệ khung hình đúng**

---

## Tổng quan

Document này quy định kích thước và format chuẩn cho tất cả hình ảnh sử dụng trong hệ thống
microCMS.

## 1. Project Thumbnails (CHO TEAM MKT)

### Thumbnail chính (thumbnail) ⭐ BẮT BUỘC

- **Mục đích:** Hiển thị trên listing pages, cards
- **Tỷ lệ khung hình:** 16:9 (BẮT BUỘC)
- **Kích thước tối thiểu:** 1920 x 1080px
- **Kích thước khuyến nghị:** 1920 x 1080px hoặc cao hơn
- **Format:** JPG, PNG, hoặc WebP
- **Lưu ý:** Hệ thống sẽ tự động scale xuống cho mobile/tablet

### Thumbnail phụ (thumbnail2) - TÙY CHỌN

- **Mục đích:** Scroll effect, parallax, reveal animation
- **Tỷ lệ khung hình:** 16:9 (BẮT BUỘC)
- **Kích thước tối thiểu:** 1920 x 1080px
- **Format:** JPG, PNG, hoặc WebP
- **Lưu ý:**
  - Nên chọn góc nhìn hoặc detail shot khác với thumbnail chính
  - Hệ thống sẽ tự động tạo hiệu ứng transition

**Ví dụ sử dụng:**

```typescript
// Khi scroll xuống, thumbnail sẽ transition từ thumbnail -> thumbnail2
<div className="project-card">
  <img
    src={project.thumbnail.url}
    data-scroll-src={project.thumbnail2?.url}
    alt={project.thumbnail.alt}
  />
</div>
```

## 2. Project Assets (CHO TEAM MKT)

**⚠️ LƯU Ý QUAN TRỌNG:**

- Field `display_size` (full/half/third) chỉ ảnh hưởng đến **cách hiển thị trên web**, KHÔNG phải
  kích thước file upload
- **TẤT CẢ ảnh nên upload cùng kích thước:** 1920 x 1080px (16:9) để đảm bảo chất lượng
- Hệ thống sẽ tự động scale theo `display_size` khi render

### Images

- **Kích thước upload khuyến nghị:** 1920 x 1080px (16:9) cho TẤT CẢ
- **Format:** JPG, PNG, hoặc WebP
- **Display options:**
  - `full`: Hiển thị 100% width container
  - `half`: Hiển thị 50% width (2 columns grid)
  - `third`: Hiển thị 33.33% width (3 columns grid)

### Videos

- **Format:** MP4 (H.264 codec)
- **Resolution:** Tối đa 1080p (1920x1080)
- **File size:** < 50MB (nếu quá lớn, liên hệ team Dev)
- **Frame rate:** 30fps hoặc 60fps
- **Lưu ý:** Nén video trước khi upload để tối ưu tốc độ tải

## 3. Challenge & Solution Images (CHO TEAM MKT)

### Challenge Images

- **Tỷ lệ khung hình:** 16:9 (khuyến nghị) hoặc 3:2
- **Kích thước tối thiểu:** 1920 x 1080px
- **Format:** JPG, PNG, hoặc WebP
- **Mục đích:** Minh họa vấn đề/thách thức khách hàng gặp phải

### Solution Images

- **Tỷ lệ khung hình:** 16:9 (BẮT BUỘC)
- **Kích thước tối thiểu:** 1920 x 1080px
- **Format:** JPG, PNG, hoặc WebP (ưu tiên WebP cho screenshots)
- **Mục đích:** Screenshots sản phẩm, mockups, diagrams
- **Lưu ý:** Có thể upload nhiều ảnh, hệ thống sẽ hiển thị dạng gallery

## 4. Logos & Icons (CHO TEAM MKT)

### Partner Logos ⭐

- **Tỷ lệ khung hình:** 16:9 hoặc 1:1 (vuông)
- **Kích thước tối thiểu:**
  - 16:9: 800 x 450px
  - 1:1: 512 x 512px
- **Format:** PNG với nền trong suốt (BẮT BUỘC)
- **Lưu ý:** Đảm bảo có padding xung quanh logo

### Certificate Badges ⭐

- **Tỷ lệ khung hình:** 1:1 (vuông) - BẮT BUỘC
- **Kích thước tối thiểu:** 512 x 512px
- **Kích thước khuyến nghị:** 1024 x 1024px
- **Format:** PNG với nền trong suốt (BẮT BUỘC)
- **Lưu ý:** Giữ nguyên tỷ lệ official badge từ nhà cung cấp

### Featured In Logos

- **Kích thước tối thiểu:** 400 x 200px
- **Format:** PNG với nền trong suốt (BẮT BUỘC)
- **Mục đích:** Logo của media/publication nơi dự án được giới thiệu

### Technology Icons

- **Nguồn:** Sử dụng từ devicons CDN (https://devicons.github.io/devicon/)
- **Không cần upload:** Chỉ cần cung cấp link từ CDN
- **Ví dụ:** `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`

## 5. Tổng kết - Bảng Tham khảo Nhanh cho Team MKT

| Loại ảnh                 | Tỷ lệ khung hình | Kích thước tối thiểu | Format          | Ghi chú                     |
| ------------------------ | ---------------- | -------------------- | --------------- | --------------------------- |
| **Thumbnail** ⭐         | 16:9             | 1920x1080px          | JPG/PNG/WebP    | BẮT BUỘC                    |
| **Thumbnail 2**          | 16:9             | 1920x1080px          | JPG/PNG/WebP    | Tùy chọn, góc nhìn khác     |
| **Project Assets**       | 16:9             | 1920x1080px          | JPG/PNG/WebP    | Upload cùng size cho tất cả |
| **Challenge**            | 16:9 hoặc 3:2    | 1920x1080px          | JPG/PNG/WebP    | Minh họa vấn đề             |
| **Solution**             | 16:9             | 1920x1080px          | JPG/PNG/WebP    | Screenshots, mockups        |
| **Certificate Badge** ⭐ | 1:1 (vuông)      | 512x512px            | PNG transparent | Giữ nguyên tỷ lệ official   |
| **Partner Logo** ⭐      | 16:9 hoặc 1:1    | 800x450 / 512x512    | PNG transparent | Có padding                  |
| **Featured Logo**        | Tự do            | 400x200px            | PNG transparent | Logo media                  |
| **Video**                | 16:9             | 1080p                | MP4             | < 50MB                      |

### ⚠️ QUY TẮC VÀNG:

1. **NÊN upload ảnh lớn hơn yêu cầu tối thiểu** - Hệ thống sẽ scale xuống
2. **LUÔN giữ đúng tỷ lệ khung hình** - Đặc biệt quan trọng
3. **SỬ DỤNG PNG transparent cho logos** - Bắt buộc
4. **KHÔNG NÉN quá mức** - Hệ thống sẽ tự động optimize
5. **ĐẶT TÊN FILE có ý nghĩa** - Ví dụ: `project-ecommerce-thumbnail.jpg`

## 6. Câu hỏi Thường gặp (FAQ)

### Q1: Tại sao phải upload ảnh lớn hơn kích thước hiển thị trên web?

**A:** Để hỗ trợ:

- Màn hình Retina/4K (cần ảnh 2x-3x độ phân giải)
- Responsive design (desktop, tablet, mobile)
- Zoom/crop features
- Hệ thống sẽ tự động scale xuống cho từng thiết bị

### Q2: File size có giới hạn không?

**A:** Không có giới hạn cứng, nhưng:

- Ảnh < 5MB là tốt nhất
- Video < 50MB
- Hệ thống sẽ tự động nén và optimize khi serve

### Q3: Nếu ảnh không đúng tỷ lệ thì sao?

**A:** Hệ thống sẽ:

- Tự động crop để giữ tỷ lệ khung hình
- Có thể làm mất bớt nội dung ảnh
- **Khuyến nghị:** Luôn crop đúng tỷ lệ trước khi upload

### Q4: `display_size` (full/half/third) ảnh hưởng gì?

**A:** Chỉ ảnh hưởng đến **cách hiển thị trên web**:

- `full`: Ảnh chiếm full width container
- `half`: Ảnh nằm trong grid 2 cột
- `third`: Ảnh nằm trong grid 3 cột
- **KHÔNG ảnh hưởng** đến kích thước file upload

### Q5: Có cần tối ưu/nén ảnh trước khi upload không?

**A:** KHÔNG BẮT BUỘC:

- Upload ảnh chất lượng cao nhất có thể
- Hệ thống sẽ tự động optimize cho web
- Chỉ nén nếu file quá lớn (> 10MB)

### Q6: Format nào tốt nhất?

**A:**

- **JPG:** Cho photos, screenshots (best compatibility)
- **PNG:** Cho logos, graphics cần nền trong suốt (BẮT BUỘC cho logos)
- **WebP:** Tự động convert bởi hệ thống nếu browser hỗ trợ

### Q7: Làm thế nào để có ảnh đúng tỷ lệ?

**A:** Sử dụng tools:

- Photoshop: Image > Canvas Size hoặc Crop tool
- Online: https://www.iloveimg.com/crop-image (chọn aspect ratio)
- Figma/Sketch: Export với frame đúng size

---

## 7. Checklist Upload (Cho Team MKT) ✅

Trước khi upload ảnh lên microCMS:

- [ ] **Kiểm tra tỷ lệ khung hình đúng** (16:9, 1:1, etc.)
- [ ] **Kích thước tối thiểu đạt yêu cầu** (xem bảng trên)
- [ ] **Format đúng:**
  - JPG/PNG/WebP cho ảnh
  - PNG transparent cho logos
  - MP4 cho videos
- [ ] **Alt text mô tả rõ ràng** (quan trọng cho SEO & accessibility)
- [ ] **Tên file có ý nghĩa** (không dấu, không khoảng trắng)
  - ✅ `project-ecommerce-thumbnail.jpg`
  - ❌ `IMG_1234.jpg`
- [ ] **Nội dung ảnh rõ ràng, chất lượng tốt**
- [ ] **Đã review trước khi publish**

---

## 8. Liên hệ Support

Nếu gặp vấn đề hoặc cần hỗ trợ:

- **File quá lớn:** Liên hệ team Dev để tối ưu
- **Không chắc về tỷ lệ:** Hỏi team Design
- **Lỗi upload:** Liên hệ team Dev hoặc check microCMS docs

---

**Lưu ý cuối:** Document này được tạo để giúp team MKT chuẩn bị ảnh đúng cách. Hệ thống web đã được
thiết kế để tự động xử lý và optimize mọi thứ sau khi upload! 🎨✨

---

# PHẦN DÀNH CHO DEVELOPER (Team MKT không cần đọc)

## Technical Implementation

### 1. Responsive Images với srcset

```typescript
// Hệ thống sẽ tự động generate srcset
<img
  src={image.url}
  srcSet={`
    ${image.url}?w=640 640w,
    ${image.url}?w=960 960w,
    ${image.url}?w=1280 1280w,
    ${image.url}?w=1920 1920w
  `}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt={image.alt}
/>
```

### Lazy Loading

```typescript
// Native lazy loading
<img src={image.url} loading="lazy" alt={image.alt} />

// With Intersection Observer for advanced control
const [isLoaded, setIsLoaded] = useState(false);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsLoaded(true);
        observer.disconnect();
      }
    },
    { threshold: 0.1 }
  );
  observer.observe(imageRef.current);
}, []);
```

### 2. microCMS Image API (Auto Optimization)

```typescript
// Hệ thống tự động sử dụng Image API của microCMS
const optimizedUrl = `${image.url}?w=1200&fm=webp&q=85`;

// Responsive variants
const getResponsiveUrl = (url: string, width: number) => {
  return `${url}?w=${width}&fm=webp&q=85`;
};
```

### 3. Image Component with Auto Optimization

```typescript
interface ImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  priority?: boolean;
}

function OptimizedImage({ src, alt, aspectRatio, priority }: ImageProps) {
  return (
    <img
      src={`${src}?w=1920&fm=webp&q=85`}
      srcSet={`
        ${src}?w=640&fm=webp&q=85 640w,
        ${src}?w=960&fm=webp&q=85 960w,
        ${src}?w=1280&fm=webp&q=85 1280w,
        ${src}?w=1920&fm=webp&q=85 1920w
      `}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      style={{ aspectRatio }}
    />
  );
}
```

### 4. Performance Optimization

```typescript
// Preload critical images
<link
  rel="preload"
  as="image"
  href={`${project.thumbnail.url}?w=1200&fm=webp&q=85`}
  imageSrcSet={`
    ${project.thumbnail.url}?w=640&fm=webp 640w,
    ${project.thumbnail.url}?w=1200&fm=webp 1200w
  `}
/>

// Thumbnail2 scroll effect
const handleScroll = () => {
  if (scrollY > threshold && project.thumbnail2) {
    setActiveThumbnail(project.thumbnail2.url);
  }
};
```

---

**Developer Note:** Tất cả images từ microCMS đều được tự động optimize thông qua Image API. Team
MKT chỉ cần upload ảnh chất lượng cao, hệ thống sẽ handle the rest.
