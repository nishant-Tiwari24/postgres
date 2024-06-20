import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.post.create({
        data: {
            title: "Title 1",
            content:"Title is the protagonist of the story",
            published: true,
            authorId: 1
        }
    })
}

main();