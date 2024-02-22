# User API Spec

## Create Penyelenggara Layanan API

Endpoint : POST /api/penyelenggara-layanan

### Request Body :

```json
{
  "nama": "Unit Perpustakaan",
  "deskripsi": "Unit Perpustakaan merupakan pusat informasi dan sumber daya penting bagi mahasiswa, dosen, dan staf. Biasanya terdiri dari koleksi buku cetak, jurnal elektronik, dan sumber daya digital lainnya yang relevan dengan kurikulum dan penelitian. Unit ini menyediakan layanan seperti pinjaman buku, ruang studi, dan bantuan penelitian kepada pengguna.",
  "email": "perpus@stis.ac.id",
  "telp": "085123456789"
}
```

### Resposnse Body Success :

```json
{
  "data": {
    "id": 1,
    "nama": "Unit Perpustakaan",
    "deskripsi": "Unit Perpustakaan merupakan pusat informasi dan sumber daya penting bagi mahasiswa, dosen, dan staf. Biasanya terdiri dari koleksi buku cetak, jurnal elektronik, dan sumber daya digital lainnya yang relevan dengan kurikulum dan penelitian. Unit ini menyediakan layanan seperti pinjaman buku, ruang studi, dan bantuan penelitian kepada pengguna.",
    "email": "perpus@stis.ac.id",
    "telp": "085123456789"
  }
}
```

### Resposnse Body Error :

```json
{
  "errors": "Unit already created"
}
```

## Update Penyelenggara Layanan API

Endpoint : PATCH /api/penyelenggara-layanan/:id

Headers :

- Authorization: Bearer <access_token>
- Content-Type: application/json

### Request Body

```json
{
  "nama": "Unit Perpustakaan", //optional
  "deskripsi": "Unit Perpustakaan merupakan pusat informasi dan sumber daya penting bagi mahasiswa, dosen, dan staf. Biasanya terdiri dari koleksi buku cetak, jurnal elektronik, dan sumber daya digital lainnya yang relevan dengan kurikulum dan penelitian. Unit ini menyediakan layanan seperti pinjaman buku, ruang studi, dan bantuan penelitian kepada pengguna.", //optional
  "email": "perpus@stis.ac.id", //optional
  "telp": "085123456789" //optional
}
```

### Response Body Success

```json
{
  "data": {
    "id": 1,
    "nama": "Unit Perpustakaan",
    "deskripsi": "Unit Perpustakaan merupakan pusat informasi dan sumber daya penting bagi mahasiswa, dosen, dan staf. Biasanya terdiri dari koleksi buku cetak, jurnal elektronik, dan sumber daya digital lainnya yang relevan dengan kurikulum dan penelitian. Unit ini menyediakan layanan seperti pinjaman buku, ruang studi, dan bantuan penelitian kepada pengguna.",
    "email": "perpus@stis.ac.id",
    "telp": "085123456789"
  }
}
```

### Response Body Error

```json
{
  "error": "Penyelenggara Layanan not found"
}
```

## Get User API

Endpoint : GET /api/penyelenggara-layanan/:id

Headers :

- Authorization: Bearer <access_token>
- Content-Type: application/json

### Response Body Success

```json
{
  "data": {
    "id": 1,
    "nama": "Unit Perpustakaan",
    "deskripsi": "Unit Perpustakaan merupakan pusat informasi dan sumber daya penting bagi mahasiswa, dosen, dan staf. Biasanya terdiri dari koleksi buku cetak, jurnal elektronik, dan sumber daya digital lainnya yang relevan dengan kurikulum dan penelitian. Unit ini menyediakan layanan seperti pinjaman buku, ruang studi, dan bantuan penelitian kepada pengguna.",
    "email": "perpus@stis.ac.id",
    "telp": "085123456789"
  }
}
```

### Response Body Error

```json
{
  "error": "Penyelenggara Layanan not found"
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
- size : Size per page, default 5

### Response Body Success

```json
{
  "data": [
    {
      "id": 1,
      "nama": "Unit Perpustakaan",
      "deskripsi": "Unit Perpustakaan merupakan pusat informasi dan sumber daya penting bagi mahasiswa, dosen, dan staf. Biasanya terdiri dari koleksi buku cetak, jurnal elektronik, dan sumber daya digital lainnya yang relevan dengan kurikulum dan penelitian. Unit ini menyediakan layanan seperti pinjaman buku, ruang studi, dan bantuan penelitian kepada pengguna.",
      "email": "perpus@stis.ac.id",
      "telp": "085123456789"
    },
    {
      "id": 2,
      "nama": "Unit Perpustakaan",
      "deskripsi": "",
      "email": "komputasi@stis.ac.id",
      "telp": "085123456789"
    }
  ],
  "paging": {
    "page": 1,
    "total page": 1,
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

## Remove Penyelenggara Layanan API

Endpoint : DELETE /api/penyelenggara-layanan/:id

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
  "errors": "Penyelenggara Layanan is not found"
}
```
