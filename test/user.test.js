import supertest from 'supertest';
import { web } from '../src/application/web.js';
import { createSecondTestUser, createTestUser, getTestUser, getUpdateTestUser, removeSecondTestUser, removeTestUser } from './test.util.js';
import { prismaClient } from '../src/application/database.js';
import bcrypt from 'bcrypt';

describe('POST /api/users', function () {

    afterEach(async () => {
        await removeTestUser();
    });

    it('should can register new users', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                'email': 'test@stis.ac.id',
                'nama': 'name test',
                'no_telp': '085123456789',
                'password': 'passwordtest'
            });

        expect(result.status).toBe(200);
        expect(result.body.data.email).toBe("test@stis.ac.id");
        expect(result.body.data.nama).toBe("name test");
        expect(result.body.data.no_telp).toBe("085123456789");
        expect(result.body.data.password).toBeUndefined();
    });


    it('should reject if request is invalid', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                'email': '',
                'nama': '',
                'no_telp': '',
                'password': ''
            });

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });

    it('should reject if email request is already registered', async () => {
        let result = await supertest(web)
            .post('/api/users')
            .send({
                'email': 'test@stis.ac.id',
                'nama': 'test name',
                'no_telp': '085123456789',
                'password': 'passwordtest'
            });


        result = await supertest(web)
            .post('/api/users')
            .send({
                'email': 'test@stis.ac.id',
                'nama': 'test name',
                'no_telp': '085123456789',
                'password': 'passwordtest'
            });

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });
});

describe('POST /api/users/login', function () {
    beforeEach(async () => {
        await createTestUser();
    });

    afterEach(async () => {
        await removeTestUser();
    });

    it('should can login', async () => {
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                'email': 'test@stis.ac.id',
                'password': 'passwordtest'
            });

        expect(result.status).toBe(200);
        expect(result.body.data.token).toBeDefined();
        expect(result.body.data.token).not.toBe('testtoken');
    });

    it('should reject login if request is invalid', async () => {
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                'email': '',
                'password': 'wrongpassword'
            });

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });

    it('should reject login if password is wrong', async () => {
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                'email': 'test@stis.ac.id',
                'password': 'wrongpassword'
            });

        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    });

    it('should reject login if email is wrong', async () => {
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                'email': 'wrong@stis.ac.id',
                'password': 'wrongpassword'
            });

        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    });

});

describe('GET /api/users/current', function () {
    beforeEach(async () => {
        await createTestUser();
    });

    afterEach(async () => {
        await removeTestUser();
    });

    it('should can get current user', async () => {
        const result = await supertest(web)
            .get('/api/users/current')
            .set('Authorization', 'testtoken');

        expect(result.status).toBe(200);
        expect(result.body.data.email).toBe("test@stis.ac.id");
        expect(result.body.data.nama).toBe("test name");
        expect(result.body.data.Roles.role).toBe("User");
    });

    it('should reject if token is invalid', async () => {
        const result = await supertest(web)
            .get('/api/users/current')
            .set('Authorization', 'invalidtoken');

        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    });
});

describe('PATCH /api/users/current', function () {
    beforeEach(async () => {
        await createTestUser();
    });

    afterEach(async () => {
        await prismaClient.user.deleteMany({
            where: {
                email: 'update@stis.ac.id'
            }
        });
        await removeTestUser();
    });

    it('should be able to update all attributes of the current user', async () => {
        const result = await supertest(web)
            .patch('/api/users/current')
            .set('Authorization', 'testtoken')
            .send({
                'email': 'update@stis.ac.id',
                'nama': 'update name',
                'no_telp': '085123456789',
                'role_id': 1,
                'password': 'updatepassword',
                'penyelenggara_layanan_id': 1
            });

        expect(result.status).toBe(200);
        expect(result.body.data.email).toBe('update@stis.ac.id');
        expect(result.body.data.nama).toBe('update name');
        expect(result.body.data.no_telp).toBe('085123456789');
        expect(result.body.data.password).toBeUndefined();
        expect(result.body.data.Roles.role).toBe('Admin Penyelenggara Layanan');
        expect(result.body.data.penyelenggara_layanan.nama).toBe('Unit Perpustakaan');

        const user = await getUpdateTestUser();
        expect(await bcrypt.compare('updatepassword', user.password)).toBe(true);
    });

    it('should be able to update only some of the current user attributes', async () => {
        const result = await supertest(web)
            .patch('/api/users/current')
            .set('Authorization', 'testtoken')
            .send({
                'no_telp': '081139429429',
                'password': 'updatepassword',
            });

        expect(result.status).toBe(200);
        expect(result.body.data.no_telp).toBe('081139429429');
        expect(result.body.data.nama).toBe('test name');
        expect(result.body.data.Roles.id).toBe(0);
        expect(result.body.data.password).toBeUndefined();

        const user = await getTestUser();
        expect(await bcrypt.compare('updatepassword', user.password)).toBe(true);
    });

    it('should reject if request no request body is filled in', async () => {
        const result = await supertest(web)
            .patch('/api/users/current')
            .set('Authorization', 'testtoken')
            .send({
            });

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });

    it('should reject if token is invalid', async () => {
        const result = await supertest(web)
            .patch('/api/users/current')
            .set('Authorization', 'invalidtoken')
            .send({
                'email': 'update@stis.ac.id',
                'nama': 'update name',
                'no_telp': '085123456789',
                'password': 'updatepassword',
                'role_id': 1,
                'penyelenggara_layanan_id': 1
            });
        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    });

    it('should reject if email request is already registered', async () => {
        await createSecondTestUser();
        const result = await supertest(web)
            .patch('/api/users/current')
            .set('Authorization', 'testtoken')
            .send({
                'email': 'secontdtest@stis.ac.id',
                'nama': 'update name',
                'no_telp': '085123456789',
            });

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();

        await removeSecondTestUser();
    });
});

describe('DELETE /api/users/logout', function () {
    beforeEach(async () => {
        await createTestUser();
    });

    afterEach(async () => {
        await removeTestUser();
    });

    it('should be able to logout', async () => {
        const result = await supertest(web)
            .delete('/api/users/logout')
            .set('Authorization', 'testtoken');

        expect(result.status).toBe(200);
        expect(result.body.data).toBe('OK');

        const user = await getTestUser();
        expect(user.token).toBeNull();
    });

    it('should reject if token is invalid', async () => {
        const result = await supertest(web)
            .delete('/api/users/logout')
            .set('Authorization', 'invalidtoken');

        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    });

    it('should reject if token is not filled in', async () => {
        const result = await supertest(web)
            .delete('/api/users/logout');

        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    });
});