import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: 'curso de java',
            duration: 500,
            description: 'curso de java 8',
            Teachers: {
                connectOrCreate: {
                    where: {
                        name: 'thayron matos'
                    },
                    create: {
                        name: 'thayron matos'
                    }
                }
            }

        }
    });
    console.log(result);
}

main();