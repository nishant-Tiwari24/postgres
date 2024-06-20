import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.update({
        where: {
            id: 1
        },
        data: {
            name:"Nishant@gmail.com"
        }
    })
}

main();