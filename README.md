# API Manajemen Inventori Barang (RESTful API dengan Docker & CI/CD)

Proyek ini adalah demonstrasi pembuatan RESTful API sederhana menggunakan Node.js (Express), yang dikontainerisasi menggunakan Docker, dan diuji otomatis menggunakan GitHub Actions (CI/CD/CS).

---

## 1. Deskripsi Project
Aplikasi ini adalah **API Manajemen Inventori Barang**. Menyediakan endpoint CRUD sederhana untuk menambah, melihat, dan menghapus inventori barang di dalam sistem.

---

## 2. Dokumentasi API

### Endpoint List:
* `GET /api/items` - Mendapatkan semua daftar barang.
* `POST /api/items` - Menambahkan barang baru.
* `DELETE /api/items/:id` - Menghapus barang berdasarkan ID.
* `GET /health` - Health check untuk kebutuhan CI/CD.

### Format Response JSON:

##### ✅ Success Response (`GET /api/items`)
```json
{
  "success": true,
  "data": [
    { "id": 1, "name": "Barang A", "qty": 10 },
    { "id": 2, "name": "Barang B", "qty": 5 }
  ]
}
```

##### ❌ Error Response (POST /api/items tanpa body qty/name)
```json
{
  "success": false,
  "message": "Name and Qty are required"
}
```
---
## 3. Instalasi Docker
Pastikan Anda sudah menginstall Docker dan Docker Compose di mesin lokal Anda.
Langkah-langkah menjalankan aplikasi:
1. Clone repository ini.
2. Jalankan perintah berikut di root direktori proyek:

```Bash
docker-compose up --build
```
Informasi Port:
- Host Port: 8080 (Akses di browser/Postman: http://localhost:8080)
- Container Port: 3000 (Aplikasi berjalan internal container pada port ini)
---
## 4. Alur Kerja Git
###### Branch yang Digunakan:
- main: Branch stabil yang kodenya siap rilis/production.
- develop: Branch integrasi untuk mengumpulkan fitur sebelum masuk ke main.
- feature/*: Branch pengerjaan fitur spesifik (contoh: feature/api-crud, feature/cicd).

###### Bukti Conventional Commits:
Riwayat commit mengikuti standar format konvensional:
- feat: implement crud api, dockerfile, and health check test
- feat: add github actions workflow for CI and security scan
- fix: add express to dependencies for github actions test
---
## 5. Status Automasi (Github Actions)
Workflow diletakkan pada berkas .github/workflows/ci-cd.yml. Workflow ini terpicu otomatis setiap kali ada Push atau Pull Request ke branch develop dan main.

###### Tahapan Workflow:
- Unit Testing (CI): Menggunakan framework Jest untuk menguji keandalan endpoint REST API.
- Security Scan (CS): Menggunakan Aqua Security Trivy untuk memindai kode sumber dari kerentanan keamanan (vulnerability).
---
![Node.js CI/CD/CS Status](https://github.com/shofyaliyadata/simple-api-project/actions/workflows/ci-cd.yml/badge.svg)