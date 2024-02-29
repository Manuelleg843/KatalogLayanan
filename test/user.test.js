import supertest from 'supertest';
import { web } from '../src/application/web';
import { prismaClient } from '../src/application/database';

describe('POST /api/users', function () {

    afterEach(async () => {
        await prismaClient.user.deleteMany({
            where: {
                email: '221910843@stis.ac.id'
            }
        });
    });

    it('should can register new users', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                'email': '221910843@stis.ac.id',
                'nama': 'Emanuel Lega',
                'no_telp': '085123456789',
                'password': 'passwordrahasia'
            });

        expect(result.status).toBe(200);
        expect(result.body.data.email).toBe("221910843@stis.ac.id");
        expect(result.body.data.nama).toBe("Emanuel Lega");
        expect(result.body.data.no_telp).toBe("085123456789");
        expect(result.body.data.password).toBeUndefined();
    });

});