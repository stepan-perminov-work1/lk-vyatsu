import { client, connect } from '../../../lib/redis';
import RedisService from './RedisService';
/* 
class RedisUserService {
	expiresIn = 3600;
	prefix = 'User';

	async create(data: any) {
		await connect();

		data.id = parseInt(data.id);

		await client.execute([
			'JSON.SET',
			`${this.prefix}:${data.id}`,
			'$',
			JSON.stringify(data),
		]);
		await client.execute([
			'EXPIRE',
			`${this.prefix}:${data.id}`,
			this.expiresIn,
		]);

		return data.id;
	}

	async find(userId: number) {
		await connect();

		const res = (await client.execute([
			'JSON.GET',
			`${this.prefix}:${userId}`,
		])) as string;

		return JSON.parse(res);
	}
}
 */
// const redisUserService = new RedisUserService();

const redisUserService = new RedisService('User', 3600);

export default redisUserService;
