

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    //SELECT * FROM COURSES LIMIT 1
    //SELECT * FROM COURSES ORDER BY ID LIMIT 1
    const result = await prisma.courses.findFirst({
        take: -1
    })

    console.log(result);
}

main();