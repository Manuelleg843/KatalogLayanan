import supertest from 'supertest';
import { web } from '../src/application/web';
import { createTestUser, removeTestUser } from './test.util';

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

    it('should can register new users', async () => {
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