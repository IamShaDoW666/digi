import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function storePhone(phoneNumber: string) {
    await prisma.user.create({ data: { phoneNumber } });
}

export default prisma;