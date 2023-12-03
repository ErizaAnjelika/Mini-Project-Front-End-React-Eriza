# Mini Proyek React: Login, Register, dan Halaman Pengguna

Proyek ini merupakan mini aplikasi React yang menyediakan fitur login, register, serta halaman pengguna dan detail pengguna. Data pengguna disimulasikan menggunakan API dari reqres.in.

## Fitur Utama

1. **Login:** Pengguna dapat masuk ke akun dengan menggunakan formulir login. Autentikasi diimplementasikan dengan menggunakan API reqres.in.

2. **Register:** Pengguna dapat mendaftar untuk membuat akun baru dengan mengisi formulir pendaftaran. Data pendaftaran dikirimkan ke API reqres.in.

3. **Halaman Pengguna:** Setelah berhasil login, pengguna akan diarahkan ke halaman pengguna yang menampilkan daftar pengguna dari API reqres.in.

4. **Detail Pengguna:** Pengguna dapat mengklik pada nama pengguna untuk melihat detail pengguna, termasuk informasi tambahan dan avatar.


## Daftar library yang digunakan dalam project

- [reqres.in](https://reqres.in/): API yang menyimulasikan project.
- npm create vite@latest -> membuat folder project react-vite baru 
- install node_modules (npm install) -> menginstall package module 
- install router dom (npm install react-router-dom) -> libary routing untuk menangani navigasi antar halaman
- install library axios (npm install axios) -> library yang digunakan untuk melakukan HTTP request ke server atau API 
- install bootstrap5 (npm install react-bootstrap bootstrap) -> library bootstrap untuk tampilan UI
- install sweetalert (npm install sweetalert2) -> library untuk modal atau alert

## Daftar fitur tambahan yang dibuat didalam project

1. Penggunaan Alert 
   - Menampilkan alert ketika berhasil & gagal login
   - Menampilkan alert ketika berhasil & gagal register
   - Menampilkan alert ketika ingin logout dari halaman
2. handle Password Visibility -> terdapat icon yang dapat digunakan untuk melihat dan menyembunyikan password
3. Penerapan Tombol Logout, dimana akan menghapus token yang tersimpan di localStorage

## Penggunaan

1. Clone repositori ini dengan perintah: `git clone https://github.com/ErizaAnjelika/Mini-Project-Front-End-React-Eriza.git`

2. Install dependensi dengan perintah: `npm install`

3. Jalankan aplikasi dengan perintah: `npm run dev`
4. Buka browser dan akses port yang tampil di terminal


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
