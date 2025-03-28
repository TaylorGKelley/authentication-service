import hashPassword from '@/app/utils/hashPassword';
import { db } from '..';
import {
	userTable,
	profileInfoTable,
	roleTable,
	userRoleTable,
	logTable,
} from '../schema';
import { profileInfoData, rolesData, userRolesData, usersData } from './data';

async function main() {
	try {
		await db.delete(userTable);
		await db.delete(profileInfoTable);
		await db.delete(roleTable);
		await db.delete(userRoleTable);
		await db.delete(logTable);

		await db.insert(userTable).values(
			await Promise.all(
				// Promise.all is done to allow passwords to be hashed
				usersData.map(async (user) => ({
					...user,
					password: await hashPassword(user.password!),
				}))
			)
		);
		await db.insert(profileInfoTable).values(profileInfoData);
		await db.insert(roleTable).values(rolesData);
		await db.insert(userRoleTable).values(userRolesData);

		console.log('Seed data inserted successfully');
		process.exit(0);
	} catch (error) {
		if (error instanceof Error) console.error(error.message);
		else console.error(error);
		process.exit(1);
	}
}

main();
