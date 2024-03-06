import supertest from "supertest";
import { web } from "../src/application/web.js";
import {
    createSuperAdminTestUser,
    removeTestUser,
    createTestUser,
    createTestLayanan,
    removeTestLayanan,
    createTestStandarLayanan,
    removeTestStandarLayanan,
    createTestLayananStandarLayanan,
    removeTestLayananStandarLayanan,
    removeSuperAdminTestUser,
    removeManyStandarLayanan
} from "./test.util.js";
import fs from "fs";
import { prismaClient } from "../src/application/database.js";

describe("POST /api/standar-layanan", function () {
    beforeEach(async () => {
        await createSuperAdminTestUser();
        await createTestUser();
    });
    afterEach(async () => {
        await removeSuperAdminTestUser();
        await removeTestUser();
        await removeManyStandarLayanan();
    });

    it('should can create new standar layanan', async () => {
        const result = await supertest(web)
            .post('/api/standar-layanan')
            .set('Authorization', 'superadmintesttoken')
            .send({
                'nama_layanan': 'standar layanan name test',
                'persyaratan': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'jangka_waktu_pelayanan': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'biaya_tarif': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'produk_layanan': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'penanganan_pengaduan_saran_masukan': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'dasar_hukum': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'sarana_prasarana_fasilitas': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'kopetensi_pelaksana': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'pengawasan_internal': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'jumlah_pelaksana': '10 karyawan, 5 staff, 3 manager, 2 supervisor, 1 direktur',
                'jaminan_pelayanan': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'jaminan_keamanan_keselamatan_pelayanan': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'evaluasi_kinerja_pelaksana': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'penyelenggara_layanan_id': 1,
            });

        expect(result.status).toBe(200);
        expect(result.body.data.nama_layanan).toBe('standar layanan name test');
        expect(result.body.data.id).toBeDefined();
    });

    it('should can create new standar layanan with image', async () => {
        const result = await supertest(web)
            .post('/api/standar-layanan')
            .set('Authorization', 'superadmintesttoken')
            .set('Content-Type', 'multipart/form-data')
            .field('nama_layanan', 'standar layanan name test')
            .field('persyaratan', 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet')
            .field('penyelenggara_layanan_id', 1)
            .attach('file_gambar', 'test/asset/test-image.png');

        expect(result.status).toBe(200);
        expect(result.body.data.nama_layanan).toBe('standar layanan name test');
        expect(result.body.data.id).toBeDefined();
        expect(result.body.data.gambar).toBeDefined();

        const file_gambar_path = 'uploads/images/' + result.body.data.gambar;
        const file_gambar_exist = fs.existsSync(file_gambar_path);
        expect(file_gambar_exist).toBe(true);
        if (file_gambar_exist) {
            fs.unlinkSync(file_gambar_path)
        };
    });

    it('should reject if request is invalid', async () => {
        const result = await supertest(web)
            .post('/api/standar-layanan')
            .set('Authorization', 'superadmintesttoken')
            .send({
                'nama_layanan': '',
                'persyaratan': '',
                'jangka_waktu_pelayanan': '',
                'biaya_tarif': '',
                'produk_layanan': '',
                'penanganan_pengaduan_saran_masukan': '',
                'dasar_hukum': '',
                'sarana_prasarana_fasilitas': '',
                'kopetensi_pelaksana': '',
                'pengawasan_internal': '',
                'jumlah_pelaksana': '',
                'jaminan_pelayanan': '',
                'jaminan_keamanan_keselamatan_pelayanan': '',
                'evaluasi_kinerja_pelaksana': '',
                'penyelenggara_layanan_id': 1,
            });

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });

    it('should reject if penyelenggara layanan not found', async () => {
        const result = await supertest(web)
            .post('/api/standar-layanan')
            .set('Authorization', 'superadmintesttoken')
            .send({
                'nama_layanan': 'standar layanan name test',
                'persyaratan': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'jangka_waktu_pelayanan': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'biaya_tarif': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'produk_layanan': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'penanganan_pengaduan_saran_masukan': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'dasar_hukum': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'sarana_prasarana_fasilitas': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'kopetensi_pelaksana': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'pengawasan_internal': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'jumlah_pelaksana': '10 karyawan, 5 staff, 3 manager, 2 supervisor, 1 direktur',
                'jaminan_pelayanan': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'jaminan_keamanan_keselamatan_pelayanan': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'evaluasi_kinerja_pelaksana': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'penyelenggara_layanan_id': 999,
            });

        expect(result.status).toBe(404);
        expect(result.body.errors).toBeDefined();
    });

    it('should reject if user is not authorized', async () => {
        const result = await supertest(web)
            .post('/api/standar-layanan')
            .set('Authorization', 'wrongtoken')
            .send({
                'nama_layanan': 'standar layanan name test',
                'persyaratan': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'jangka_waktu_pelayanan': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'biaya_tarif': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'produk_layanan': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'penanganan_pengaduan_saran_masukan': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'dasar_hukum': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'sarana_prasarana_fasilitas': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'kopetensi_pelaksana': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'pengawasan_internal': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'jumlah_pelaksana': '10 karyawan, 5 staff, 3 manager, 2 supervisor, 1 direktur',
                'jaminan_pelayanan': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'jaminan_keamanan_keselamatan_pelayanan': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'evaluasi_kinerja_pelaksana': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'penyelenggara_layanan_id': 1,
            });

        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    });

});