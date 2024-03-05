import supertest from 'supertest';
import { web } from '../src/application/web.js';
import {
    createTestUser,
    createSuperAdminTestUser,
    removeSuperAdminTestUser,
    removeTestUser,
    removePenyelenggaraLayanan,
    createPenyelenggaraLayanan,
    getPenyelenggaraLayanan,
    createManyPenyelenggaraLayanan,
    removeManyPenyelenggaraLayanan
} from './test.util.js';
import { prismaClient } from '../src/application/database.js';


describe('POST /api/penyelenggara-layanan', function () {
    beforeEach(async () => {
        await createTestUser();
        await createSuperAdminTestUser();
    });

    afterEach(async () => {
        await removeTestUser();
        await removeSuperAdminTestUser();
        await removePenyelenggaraLayanan();
    });

    it('should can create new penyelenggara layanan', async () => {
        const result = await supertest(web)
            .post('/api/penyelenggara-layanan')
            .set('Authorization', `superadmintesttoken`)
            .send({
                'nama': 'penyelenggara layanan name test',
                'deskripsi': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'email': 'unittest@stis.ac.id',
                'telp': '085123456789'
            });

        expect(result.status).toBe(200);
        expect(result.body.data.nama).toBe("penyelenggara layanan name test");
        expect(result.body.data.deskripsi).toBe("lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet");
        expect(result.body.data.email).toBe("unittest@stis.ac.id");
        expect(result.body.data.telp).toBe("085123456789");
    });

    it('should reject if request is invalid', async () => {
        const result = await supertest(web)
            .post('/api/penyelenggara-layanan')
            .set('Authorization', `superadmintesttoken`)
            .send({
                'nama': '',
                'deskripsi': '',
                'email': '',
                'telp': ''
            });

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });

    it('should reject if user is not have permission', async () => {
        const result = await supertest(web)
            .post('/api/penyelenggara-layanan')
            .set('Authorization', `testtoken`)
            .send({
                'nama': 'penyelenggara layanan name test',
                'deskripsi': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                'email': 'unittest@stis.ac.id',
                'telp': '085123456789'
            });

        expect(result.status).toBe(403);
        expect(result.body.errors).toBeDefined();
    });
});

describe('GET /api/penyelenggara-layanan/:Id', function () {
    beforeEach(async () => {
        await createTestUser();
        await createPenyelenggaraLayanan();
    });

    afterEach(async () => {
        await removeTestUser();
        await removePenyelenggaraLayanan();
    });

    it('should can get penyelenggara layanan', async () => {
        const testPenyelenggaraLayanan = await getPenyelenggaraLayanan();
        const result = await supertest(web)
            .get('/api/penyelenggara-layanan/' + testPenyelenggaraLayanan.id)
            .set('Authorization', `testtoken`);

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testPenyelenggaraLayanan.id);
        expect(result.body.data.nama).toBe("penyelenggara layanan name test");
        expect(result.body.data.deskripsi).toBe("lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet");
        expect(result.body.data.email).toBe("unittest@stis.ac.id");
        expect(result.body.data.telp).toBe("085123456789");
        console.log(result.body);
    });

    it('should reject if penyelenggara layanan not found', async () => {
        const result = await supertest(web)
            .get('/api/penyelenggara-layanan/999')
            .set('Authorization', `testtoken`);

        expect(result.status).toBe(404);
        expect(result.body.errors).toBeDefined();
    });
});

describe('PATCH /api/penyelenggara-layanan/:Id', function () {
    beforeEach(async () => {
        await createSuperAdminTestUser();
        await createTestUser();
        await createPenyelenggaraLayanan();
    });

    afterEach(async () => {
        await removeSuperAdminTestUser();
        await removeTestUser();
        await removePenyelenggaraLayanan();

        await prismaClient.PenyelenggaraLayanan.deleteMany({
            where: {
                nama: 'penyelenggara layanan name test updated'
            }
        });
    });

    it('should can update penyelenggara layanan', async () => {
        const testPenyelenggaraLayanan = await getPenyelenggaraLayanan();
        const result = await supertest(web)
            .patch('/api/penyelenggara-layanan/' + testPenyelenggaraLayanan.id)
            .set('Authorization', `superadmintesttoken`)
            .send({
                'nama': 'penyelenggara layanan name test updated',
                'deskripsi': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet updated',
                'email': 'updateUunittest@stis.ac.id',
                'telp': '085123456789'
            });

        expect(result.status).toBe(200);
        expect(result.body.data.nama).toBe("penyelenggara layanan name test updated");
    });

    it('should reject if request is invalid', async () => {
        const testPenyelenggaraLayanan = await getPenyelenggaraLayanan();
        const result = await supertest(web)
            .patch('/api/penyelenggara-layanan/' + testPenyelenggaraLayanan.id)
            .set('Authorization', `superadmintesttoken`)
            .send({
                'nama': '',
                'deskripsi': '',
                'email': '',
                'telp': ''
            });

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });

    it('should reject if penyelenggara layanan not found', async () => {
        const result = await supertest(web)
            .patch('/api/penyelenggara-layanan/999')
            .set('Authorization', `superadmintesttoken`)
            .send({
                'nama': 'penyelenggara layanan name test updated',
                'deskripsi': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet updated',
                'email': 'updateUunittest@stis.ac.id',
                'telp': '085123456789'
            });

        expect(result.status).toBe(404);
        expect(result.body.errors).toBeDefined();
    });

    it('should reject if user is not have permission', async () => {
        const testPenyelenggaraLayanan = await getPenyelenggaraLayanan();
        const result = await supertest(web)
            .patch('/api/penyelenggara-layanan/' + testPenyelenggaraLayanan.id)
            .set('Authorization', `testtoken`)
            .send({
                'nama': 'penyelenggara layanan name test updated',
                'deskripsi': 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet updated',
                'email': 'updateUunittest@stis.ac.id',
                'telp': '085123456789'
            });

        expect(result.status).toBe(403);
        expect(result.body.errors).toBeDefined();
    });
});

describe('DELETE /api/penyelenggara-layanan/:Id', function () {
    beforeEach(async () => {
        await createSuperAdminTestUser();
        await createTestUser();
        await createPenyelenggaraLayanan();
    });

    afterEach(async () => {
        await removeSuperAdminTestUser();
        await removeTestUser();
        await removePenyelenggaraLayanan();
    });

    it('should can delete penyelenggara layanan', async () => {
        let testPenyelenggaraLayanan = await getPenyelenggaraLayanan();
        const result = await supertest(web)
            .delete('/api/penyelenggara-layanan/' + testPenyelenggaraLayanan.id)
            .set('Authorization', `superadmintesttoken`);

        expect(result.status).toBe(200);
        expect(result.body.data).toBe('OK');

        testPenyelenggaraLayanan = await getPenyelenggaraLayanan();
        expect(testPenyelenggaraLayanan).toBeNull();
    });

    it('should reject if penyelenggara layanan not found', async () => {
        const result = await supertest(web)
            .delete('/api/penyelenggara-layanan/999')
            .set('Authorization', `superadmintesttoken`);

        expect(result.status).toBe(404);
        expect(result.body.errors).toBeDefined();
    });

    it('should reject if user is not have permission', async () => {
        const testPenyelenggaraLayanan = await getPenyelenggaraLayanan();
        const result = await supertest(web)
            .delete('/api/penyelenggara-layanan/' + testPenyelenggaraLayanan.id)
            .set('Authorization', `testtoken`);

        expect(result.status).toBe(403);
        expect(result.body.errors).toBeDefined();
    });
});

describe('GET /api/penyelenggara-layanan', function () {
    beforeEach(async () => {
        await createTestUser();
        await createManyPenyelenggaraLayanan();
    });

    afterEach(async () => {
        await removeTestUser();
        await removeManyPenyelenggaraLayanan();
    });

    it('should can search penyelenggara layanan', async () => {
        const result = await supertest(web)
            .get('/api/penyelenggara-layanan')
            .set('Authorization', `testtoken`);

        expect(result.status).toBe(200);
        expect(result.body.data.length).toBe(10);
        expect(result.body.paging.page).toBe(1);
        expect(result.body.paging.total_page).toBe(2);
        expect(result.body.paging.total_item).toBe(16);
    });

    it('should can search penyelenggara layanan to second page', async () => {
        const result = await supertest(web)
            .get('/api/penyelenggara-layanan?page=2')
            .set('Authorization', `testtoken`);

        expect(result.status).toBe(200);
        expect(result.body.data.length).toBe(6);
        expect(result.body.paging.page).toBe(2);
        expect(result.body.paging.total_page).toBe(2);
        expect(result.body.paging.total_item).toBe(16);
    });

    it('should can search penyelenggara layanan by name', async () => {
        const result = await supertest(web)
            .get('/api/penyelenggara-layanan')
            .query({
                nama: 'penyelenggara layanan name test 1'
            })
            .set('Authorization', `testtoken`);

        expect(result.status).toBe(200);
        expect(result.body.data.length).toBe(6);
        expect(result.body.paging.page).toBe(1);
        expect(result.body.paging.total_page).toBe(1);
        expect(result.body.paging.total_item).toBe(6);
    });
});