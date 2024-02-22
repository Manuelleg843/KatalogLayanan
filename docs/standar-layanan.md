# Standar Layanan Spec

## Create Standar Layanan API

Endpoint : POST /api/standar-layanan

Headers :

- Authorization : Bearer <access_token>
- Content-Type: application/json

### Request Body

```json
{
  "id_penyelenggara_layanan": 1,
  "nama_layanan": "Instalasi dan Login Aplikasi SIMPus Polstat Stis Pengguna Android",
  "persyaratan": "Mahasiswa berstatus mahasiswa aktif pada tahun akademik tersebut.",
  "sistem_mekanisme_dan_prosedur": "1. Instal Aplikasi SIMPus POLSTAT STIS pada playstore. \n2. Untuk mahasiswa dan dosen STIS bisa login dengan menggunakan akun sipadu masing-masing dengan menekan tombol Login with Sipadu. Lalu masukkan NIM dan Password. \n3. Pengguna Luar atau Pegawai BPS/STIS yang tidak punya akun sipadu bisa dengan melakukan Register terlebih dahulu atau login dengan username dan password. Register dengan memasukkan nama, username, email, no Hp, dan jenis kelamin. \n4. Apabila sudah register maka perlu melakukan aktivasi akun dengan memasukkan username. Lalu masukkan juga Instansi, Pekerjaan dan NIK. \n5. Lalu akan mendapatkan email berisi link untuk aktivasi dan juga password pertama akun. Tekan link aktivasi, lalu salin password untuk Login ke aplikasi simpus. \n6. Tampilan telah login akan seperti ini.",
  "jangka_waktu_pelayanan": "Pengguna layanan kurang lebih 10 menit sejak pengguna melakukan installasi aplikasi.",
  "biaya_tarif": "Tidak ada biaya/tarif.",
  "produk_pelayanan": "Jasa layanan installasi Aplikasi SIMPus Polstat STIS.",
  "penanganan_pengaduan_saran_masukan": "Telp. (021) 8191437, 8508812 \nFax. (021) 8197577 \nE-mail perpus@stis.ac.id",
  "dasar_hukum": "1. Undang-Undang Republik Indonesia Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional; \n2. Peraturan Pemerintah Republik Indonesia Nomor 60 Tahun 1999 tentang Pendidikan Tinggi; \n3. UU No. 47 tahun 2007 tentang Perpustakaan \n4. UU No. 5 Tahun 2009 tentang Pelayanan Publik \n5. Peraturan Kepala Badan Pusat Statistik Republik Indonesia Nomor 87 Tahun 2017 tentang Organisasi dan Tata Kerja Politeknik Statistika STIS; \n6. Peraturan Badan Pusat Statistik Republik Indonesia Nomor 87 Tahun 2018 tentang Statuta Politeknik Statistika STIS; \n7. Tata tertib peraturan Perpustakaan Polstat STIS",
  "sarana_prasarana_fasilitas": "1. Komputer. \n2. Meja. \n3. Kursi \n4. Jaringan Intranet/Internet.",
  "kopetensi_pelaksana": "Seseorang yang memiliki kompetensi yang diperoleh melalui pendidikan dan/atau pelatihan kepustakawanan serta mempunyai tugas dan tanggung jawab untuk melaksanakan pengelolaan dan pelayanan perpustakaan.",
  "pengawasan_internal": "Wakil Direktur III",
  "jumlah_pelaksana": "Jumlah pelaksana 4 (empat) orang (1 ketua unit + 3 pelaksana).",
  "jaminan_pelayanan": "Pelayanan dilaksanakan oleh petugas yang profesional sesuai dengan Standar Operasional Prosedur (SOP) yang telah ditetapkan.",
  "jaminan_keamanan_keselamatan_pelayanan": "Pelayanan dilaksanakan secara akuntabel dan transparan.",
  "evaluasi_kinerja_pelaksana": "Setiap selesai jam pelayanan para pelaksana melakukan diskusi/briefing.",
  "gambar": "file",
  "link": ""
}
```

### Response Body Success

```json
{
  "data": {
    "id": 1,
    "id_penyelenggara_layanan": 1,
    "nama_layanan": "Instalasi dan Login Aplikasi SIMPus Polstat Stis Pengguna Android",
    "persyaratan": "Mahasiswa berstatus mahasiswa aktif pada tahun akademik tersebut.",
    "sistem_mekanisme_dan_prosedur": "1. Instal Aplikasi SIMPus POLSTAT STIS pada playstore. \n2. Untuk mahasiswa dan dosen STIS bisa login dengan menggunakan akun sipadu masing-masing dengan menekan tombol Login with Sipadu. Lalu masukkan NIM dan Password. \n3. Pengguna Luar atau Pegawai BPS/STIS yang tidak punya akun sipadu bisa dengan melakukan Register terlebih dahulu atau login dengan username dan password. Register dengan memasukkan nama, username, email, no Hp, dan jenis kelamin. \n4. Apabila sudah register maka perlu melakukan aktivasi akun dengan memasukkan username. Lalu masukkan juga Instansi, Pekerjaan dan NIK. \n5. Lalu akan mendapatkan email berisi link untuk aktivasi dan juga password pertama akun. Tekan link aktivasi, lalu salin password untuk Login ke aplikasi simpus. \n6. Tampilan telah login akan seperti ini.",
    "jangka_waktu_pelayanan": "Pengguna layanan kurang lebih 10 menit sejak pengguna melakukan installasi aplikasi.",
    "biaya_tarif": "Tidak ada biaya/tarif.",
    "produk_pelayanan": "Jasa layanan installasi Aplikasi SIMPus Polstat STIS.",
    "penanganan_pengaduan_saran_masukan": "Telp. (021) 8191437, 8508812 \nFax. (021) 8197577 \nE-mail perpus@stis.ac.id",
    "dasar_hukum": "1. Undang-Undang Republik Indonesia Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional; \n2. Peraturan Pemerintah Republik Indonesia Nomor 60 Tahun 1999 tentang Pendidikan Tinggi; \n3. UU No. 47 tahun 2007 tentang Perpustakaan \n4. UU No. 5 Tahun 2009 tentang Pelayanan Publik \n5. Peraturan Kepala Badan Pusat Statistik Republik Indonesia Nomor 87 Tahun 2017 tentang Organisasi dan Tata Kerja Politeknik Statistika STIS; \n6. Peraturan Badan Pusat Statistik Republik Indonesia Nomor 87 Tahun 2018 tentang Statuta Politeknik Statistika STIS; \n7. Tata tertib peraturan Perpustakaan Polstat STIS",
    "sarana_prasarana_fasilitas": "1. Komputer. \n2. Meja. \n3. Kursi \n4. Jaringan Intranet/Internet.",
    "kopetensi_pelaksana": "Seseorang yang memiliki kompetensi yang diperoleh melalui pendidikan dan/atau pelatihan kepustakawanan serta mempunyai tugas dan tanggung jawab untuk melaksanakan pengelolaan dan pelayanan perpustakaan.",
    "pengawasan_internal": "Wakil Direktur III",
    "jumlah_pelaksana": "Jumlah pelaksana 4 (empat) orang (1 ketua unit + 3 pelaksana).",
    "jaminan_pelayanan": "Pelayanan dilaksanakan oleh petugas yang profesional sesuai dengan Standar Operasional Prosedur (SOP) yang telah ditetapkan.",
    "jaminan_keamanan_keselamatan_pelayanan": "Pelayanan dilaksanakan secara akuntabel dan transparan.",
    "evaluasi_kinerja_pelaksana": "Setiap selesai jam pelayanan para pelaksana melakukan diskusi/briefing.",
    "gambar": "file",
    "link": ""
  }
}
```

### Response Body Error

```json
{
  "error": "Unauthorized"
}
```

## Update Standar Layanan API

Endpoint : PATCH /api/standar-layanan/:id

Headers :

- Authorization : Bearer <access_token>
- Content-Type: application/json

### Request Body

```json
{
  "nama_layanan": "Instalasi dan Login Aplikasi SIMPus Polstat Stis Pengguna Android", //optional
  "persyaratan": "Mahasiswa berstatus mahasiswa aktif pada tahun akademik tersebut.", //optional
  "sistem_mekanisme_dan_prosedur": "1. Instal Aplikasi SIMPus POLSTAT STIS pada playstore. \n2. Untuk mahasiswa dan dosen STIS bisa login dengan menggunakan akun sipadu masing-masing dengan menekan tombol Login with Sipadu. Lalu masukkan NIM dan Password. \n3. Pengguna Luar atau Pegawai BPS/STIS yang tidak punya akun sipadu bisa dengan melakukan Register terlebih dahulu atau login dengan username dan password. Register dengan memasukkan nama, username, email, no Hp, dan jenis kelamin. \n4. Apabila sudah register maka perlu melakukan aktivasi akun dengan memasukkan username. Lalu masukkan juga Instansi, Pekerjaan dan NIK. \n5. Lalu akan mendapatkan email berisi link untuk aktivasi dan juga password pertama akun. Tekan link aktivasi, lalu salin password untuk Login ke aplikasi simpus. \n6. Tampilan telah login akan seperti ini.", //optional
  "jangka_waktu_pelayanan": "Pengguna layanan kurang lebih 10 menit sejak pengguna melakukan installasi aplikasi.", //optional
  "biaya_tarif": "Tidak ada biaya/tarif.", //optional
  "produk_pelayanan": "Jasa layanan installasi Aplikasi SIMPus Polstat STIS.", //optional
  "penanganan_pengaduan_saran_masukan": "Telp. (021) 8191437, 8508812 \nFax. (021) 8197577 \nE-mail perpus@stis.ac.id",
  "dasar_hukum": "1. Undang-Undang Republik Indonesia Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional; \n2. Peraturan Pemerintah Republik Indonesia Nomor 60 Tahun 1999 tentang Pendidikan Tinggi; \n3. UU No. 47 tahun 2007 tentang Perpustakaan \n4. UU No. 5 Tahun 2009 tentang Pelayanan Publik \n5. Peraturan Kepala Badan Pusat Statistik Republik Indonesia Nomor 87 Tahun 2017 tentang Organisasi dan Tata Kerja Politeknik Statistika STIS; \n6. Peraturan Badan Pusat Statistik Republik Indonesia Nomor 87 Tahun 2018 tentang Statuta Politeknik Statistika STIS; \n7. Tata tertib peraturan Perpustakaan Polstat STIS", //optional
  "sarana_prasarana_fasilitas": "1. Komputer. \n2. Meja. \n3. Kursi \n4. Jaringan Intranet/Internet.", //optional
  "kopetensi_pelaksana": "Seseorang yang memiliki kompetensi yang diperoleh melalui pendidikan dan/atau pelatihan kepustakawanan serta mempunyai tugas dan tanggung jawab untuk melaksanakan pengelolaan dan pelayanan perpustakaan.", //optional
  "pengawasan_internal": "Wakil Direktur III", //optional
  "jumlah_pelaksana": "Jumlah pelaksana 4 (empat) orang (1 ketua unit + 3 pelaksana).", //optional
  "jaminan_pelayanan": "Pelayanan dilaksanakan oleh petugas yang profesional sesuai dengan Standar Operasional Prosedur (SOP) yang telah ditetapkan.", //optional
  "jaminan_keamanan_keselamatan_pelayanan": "Pelayanan dilaksanakan secara akuntabel dan transparan.", //optional
  "evaluasi_kinerja_pelaksana": "Setiap selesai jam pelayanan para pelaksana melakukan diskusi/briefing.", //optional
  "gambar": "file", //optional
  "link": "" //optional
}
```

### Response Body Success

```json
{
  "data": {
    "id": 1,
    "id_penyelenggara_layanan": 1,
    "nama_layanan": "Instalasi dan Login Aplikasi SIMPus Polstat Stis Pengguna Android",
    "persyaratan": "Mahasiswa berstatus mahasiswa aktif pada tahun akademik tersebut.",
    "sistem_mekanisme_dan_prosedur": "1. Instal Aplikasi SIMPus POLSTAT STIS pada playstore. \n2. Untuk mahasiswa dan dosen STIS bisa login dengan menggunakan akun sipadu masing-masing dengan menekan tombol Login with Sipadu. Lalu masukkan NIM dan Password. \n3. Pengguna Luar atau Pegawai BPS/STIS yang tidak punya akun sipadu bisa dengan melakukan Register terlebih dahulu atau login dengan username dan password. Register dengan memasukkan nama, username, email, no Hp, dan jenis kelamin. \n4. Apabila sudah register maka perlu melakukan aktivasi akun dengan memasukkan username. Lalu masukkan juga Instansi, Pekerjaan dan NIK. \n5. Lalu akan mendapatkan email berisi link untuk aktivasi dan juga password pertama akun. Tekan link aktivasi, lalu salin password untuk Login ke aplikasi simpus. \n6. Tampilan telah login akan seperti ini.",
    "jangka_waktu_pelayanan": "Pengguna layanan kurang lebih 10 menit sejak pengguna melakukan installasi aplikasi.",
    "biaya_tarif": "Tidak ada biaya/tarif.",
    "produk_pelayanan": "Jasa layanan installasi Aplikasi SIMPus Polstat STIS.",
    "penanganan_pengaduan_saran_masukan": "Telp. (021) 8191437, 8508812 \nFax. (021) 8197577 \nE-mail perpus@stis.ac.id",
    "dasar_hukum": "1. Undang-Undang Republik Indonesia Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional; \n2. Peraturan Pemerintah Republik Indonesia Nomor 60 Tahun 1999 tentang Pendidikan Tinggi; \n3. UU No. 47 tahun 2007 tentang Perpustakaan \n4. UU No. 5 Tahun 2009 tentang Pelayanan Publik \n5. Peraturan Kepala Badan Pusat Statistik Republik Indonesia Nomor 87 Tahun 2017 tentang Organisasi dan Tata Kerja Politeknik Statistika STIS; \n6. Peraturan Badan Pusat Statistik Republik Indonesia Nomor 87 Tahun 2018 tentang Statuta Politeknik Statistika STIS; \n7. Tata tertib peraturan Perpustakaan Polstat STIS",
    "sarana_prasarana_fasilitas": "1. Komputer. \n2. Meja. \n3. Kursi \n4. Jaringan Intranet/Internet.",
    "kopetensi_pelaksana": "Seseorang yang memiliki kompetensi yang diperoleh melalui pendidikan dan/atau pelatihan kepustakawanan serta mempunyai tugas dan tanggung jawab untuk melaksanakan pengelolaan dan pelayanan perpustakaan.",
    "pengawasan_internal": "Wakil Direktur III",
    "jumlah_pelaksana": "Jumlah pelaksana 4 (empat) orang (1 ketua unit + 3 pelaksana).",
    "jaminan_pelayanan": "Pelayanan dilaksanakan oleh petugas yang profesional sesuai dengan Standar Operasional Prosedur (SOP) yang telah ditetapkan.",
    "jaminan_keamanan_keselamatan_pelayanan": "Pelayanan dilaksanakan secara akuntabel dan transparan.",
    "evaluasi_kinerja_pelaksana": "Setiap selesai jam pelayanan para pelaksana melakukan diskusi/briefing.",
    "gambar": "file",
    "link": ""
  }
}
```

### Response Body Error

```json
{
  "error": "Unauthorized"
}
```

## Get Standar Layanan API

Endpoint : POST /api/standar-layanan/:id

Headers :

- Authorization : Bearer <access_token>
- Content-Type: application/json

### Response Body Success

```json
{
  "data": {
    "id": 1,
    "id_penyelenggara_layanan": 1,
    "nama_layanan": "Instalasi dan Login Aplikasi SIMPus Polstat Stis Pengguna Android",
    "persyaratan": "Mahasiswa berstatus mahasiswa aktif pada tahun akademik tersebut.",
    "sistem_mekanisme_dan_prosedur": "1. Instal Aplikasi SIMPus POLSTAT STIS pada playstore. \n2. Untuk mahasiswa dan dosen STIS bisa login dengan menggunakan akun sipadu masing-masing dengan menekan tombol Login with Sipadu. Lalu masukkan NIM dan Password. \n3. Pengguna Luar atau Pegawai BPS/STIS yang tidak punya akun sipadu bisa dengan melakukan Register terlebih dahulu atau login dengan username dan password. Register dengan memasukkan nama, username, email, no Hp, dan jenis kelamin. \n4. Apabila sudah register maka perlu melakukan aktivasi akun dengan memasukkan username. Lalu masukkan juga Instansi, Pekerjaan dan NIK. \n5. Lalu akan mendapatkan email berisi link untuk aktivasi dan juga password pertama akun. Tekan link aktivasi, lalu salin password untuk Login ke aplikasi simpus. \n6. Tampilan telah login akan seperti ini.",
    "jangka_waktu_pelayanan": "Pengguna layanan kurang lebih 10 menit sejak pengguna melakukan installasi aplikasi.",
    "biaya_tarif": "Tidak ada biaya/tarif.",
    "produk_pelayanan": "Jasa layanan installasi Aplikasi SIMPus Polstat STIS.",
    "penanganan_pengaduan_saran_masukan": "Telp. (021) 8191437, 8508812 \nFax. (021) 8197577 \nE-mail perpus@stis.ac.id",
    "dasar_hukum": "1. Undang-Undang Republik Indonesia Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional; \n2. Peraturan Pemerintah Republik Indonesia Nomor 60 Tahun 1999 tentang Pendidikan Tinggi; \n3. UU No. 47 tahun 2007 tentang Perpustakaan \n4. UU No. 5 Tahun 2009 tentang Pelayanan Publik \n5. Peraturan Kepala Badan Pusat Statistik Republik Indonesia Nomor 87 Tahun 2017 tentang Organisasi dan Tata Kerja Politeknik Statistika STIS; \n6. Peraturan Badan Pusat Statistik Republik Indonesia Nomor 87 Tahun 2018 tentang Statuta Politeknik Statistika STIS; \n7. Tata tertib peraturan Perpustakaan Polstat STIS",
    "sarana_prasarana_fasilitas": "1. Komputer. \n2. Meja. \n3. Kursi \n4. Jaringan Intranet/Internet.",
    "kopetensi_pelaksana": "Seseorang yang memiliki kompetensi yang diperoleh melalui pendidikan dan/atau pelatihan kepustakawanan serta mempunyai tugas dan tanggung jawab untuk melaksanakan pengelolaan dan pelayanan perpustakaan.",
    "pengawasan_internal": "Wakil Direktur III",
    "jumlah_pelaksana": "Jumlah pelaksana 4 (empat) orang (1 ketua unit + 3 pelaksana).",
    "jaminan_pelayanan": "Pelayanan dilaksanakan oleh petugas yang profesional sesuai dengan Standar Operasional Prosedur (SOP) yang telah ditetapkan.",
    "jaminan_keamanan_keselamatan_pelayanan": "Pelayanan dilaksanakan secara akuntabel dan transparan.",
    "evaluasi_kinerja_pelaksana": "Setiap selesai jam pelayanan para pelaksana melakukan diskusi/briefing.",
    "gambar": "file",
    "link": ""
  }
}
```

### Response Body Error

```json
{
  "errors": "Standar Layanan is not found"
}
```

## Search Standar Layanan API

Endpoint : GET /api/standar-layanan

Headers :

- Authorization : Bearer <access_token>
- Content-Type: application/json

Query params :

- name : Search by nama layanan using like, optional
- page : Number of page, default 1
- size : Size per page, default 1

### Response Body Success

```json
{
  "data": [
    {
      "id": 1,
      "id_penyelenggara_layanan": 1,
      "nama_layanan": "Instalasi dan Login Aplikasi SIMPus Polstat Stis Pengguna Android",
      "persyaratan": "Mahasiswa berstatus mahasiswa aktif pada tahun akademik tersebut.",
      "sistem_mekanisme_dan_prosedur": "1. Instal Aplikasi SIMPus POLSTAT STIS pada playstore. \n2. Untuk mahasiswa dan dosen STIS bisa login dengan menggunakan akun sipadu masing-masing dengan menekan tombol Login with Sipadu. Lalu masukkan NIM dan Password. \n3. Pengguna Luar atau Pegawai BPS/STIS yang tidak punya akun sipadu bisa dengan melakukan Register terlebih dahulu atau login dengan username dan password. Register dengan memasukkan nama, username, email, no Hp, dan jenis kelamin. \n4. Apabila sudah register maka perlu melakukan aktivasi akun dengan memasukkan username. Lalu masukkan juga Instansi, Pekerjaan dan NIK. \n5. Lalu akan mendapatkan email berisi link untuk aktivasi dan juga password pertama akun. Tekan link aktivasi, lalu salin password untuk Login ke aplikasi simpus. \n6. Tampilan telah login akan seperti ini.",
      "jangka_waktu_pelayanan": "Pengguna layanan kurang lebih 10 menit sejak pengguna melakukan installasi aplikasi.",
      "biaya_tarif": "Tidak ada biaya/tarif.",
      "produk_pelayanan": "Jasa layanan installasi Aplikasi SIMPus Polstat STIS.",
      "penanganan_pengaduan_saran_masukan": "Telp. (021) 8191437, 8508812 \nFax. (021) 8197577 \nE-mail perpus@stis.ac.id",
      "dasar_hukum": "1. Undang-Undang Republik Indonesia Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional; \n2. Peraturan Pemerintah Republik Indonesia Nomor 60 Tahun 1999 tentang Pendidikan Tinggi; \n3. UU No. 47 tahun 2007 tentang Perpustakaan \n4. UU No. 5 Tahun 2009 tentang Pelayanan Publik \n5. Peraturan Kepala Badan Pusat Statistik Republik Indonesia Nomor 87 Tahun 2017 tentang Organisasi dan Tata Kerja Politeknik Statistika STIS; \n6. Peraturan Badan Pusat Statistik Republik Indonesia Nomor 87 Tahun 2018 tentang Statuta Politeknik Statistika STIS; \n7. Tata tertib peraturan Perpustakaan Polstat STIS",
      "sarana_prasarana_fasilitas": "1. Komputer. \n2. Meja. \n3. Kursi \n4. Jaringan Intranet/Internet.",
      "kopetensi_pelaksana": "Seseorang yang memiliki kompetensi yang diperoleh melalui pendidikan dan/atau pelatihan kepustakawanan serta mempunyai tugas dan tanggung jawab untuk melaksanakan pengelolaan dan pelayanan perpustakaan.",
      "pengawasan_internal": "Wakil Direktur III",
      "jumlah_pelaksana": "Jumlah pelaksana 4 (empat) orang (1 ketua unit + 3 pelaksana).",
      "jaminan_pelayanan": "Pelayanan dilaksanakan oleh petugas yang profesional sesuai dengan Standar Operasional Prosedur (SOP) yang telah ditetapkan.",
      "jaminan_keamanan_keselamatan_pelayanan": "Pelayanan dilaksanakan secara akuntabel dan transparan.",
      "evaluasi_kinerja_pelaksana": "Setiap selesai jam pelayanan para pelaksana melakukan diskusi/briefing.",
      "gambar": "file",
      "link": ""
    }
  ],
  "paging": {
    "page": 1,
    "total page": 2,
    "total item": 2
  }
}
```

### Response Body Error

```json
{
  "errors": "Standar Layanan is not found"
}
```

## Remove Standar Layanan API

Endpoint : DELETE /api/standar-layanan/:id

Headers :

- Authorization : : Bearer <access_token>
- Content-Type: application/json

### Response Body Success

```json
{
  "data": "OK"
}
```

### Response Body Error

```json
{
  "errors": "Standar Layanan is not found"
}
```
