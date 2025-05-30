import { type UUID } from 'node:crypto';
import { db } from '@/infrastructure/database';
import { linkedServiceTable } from '@/infrastructure/database/schema';
import { eq } from 'drizzle-orm';

const updateLinkedService = async (
	linkedServiceId: UUID,
	linkedService: Omit<Partial<typeof linkedServiceTable.$inferInsert>, 'id'>
) => {
	return (
		await db
			.update(linkedServiceTable)
			.set(linkedService)
			.where(eq(linkedServiceTable.id, linkedServiceId))
			.returning()
	).at(0);
};

export default updateLinkedService;
