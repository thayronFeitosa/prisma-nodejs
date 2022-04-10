

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    //SELECT * FROM COURSES LIMIT 1
    //SELECT * FROM COURSES ORDER BY ID LIMIT 1
    const result = await prisma.courses.update({
        where: {
            id: "554ca555-af77-4ddc-acb8-94e7bab44c0d"
        },
        data: {
            description: "curso de java"
        }
    })

    console.log(result);
}

main();