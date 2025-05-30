import { permissionSyncWorker } from '@/app/workers/PermissionSyncWorker';
import LinkedService from '@/domain/types/authorization/LinkedService';
import { db } from '@/infrastructure/database';
import { userRoleTable } from '@/infrastructure/database/schema';

const addUserToRole = async (
	linkedServiceId: LinkedService['id'],
	roleId: number,
	userId: number
) => {
	// ! Check if linked service id is valid

	const result = (
		await db
			.insert(userRoleTable)
			.values({ userId, roleId })
			.onConflictDoNothing()
			.returning()
	).at(0);

	if (result) {
		permissionSyncWorker.emit('user-role-updated', userId);
	}

	return result;
};

export default addUserToRole;
