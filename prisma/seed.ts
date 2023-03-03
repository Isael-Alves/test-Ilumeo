import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const event = [ 
        await prisma.historic.create({
        data: {
            Date: "2023-02-20T08:30:00.000Z",
            startTime: "2023-02-20T08:30:00.000Z",
            finishTime: "2023-02-20T17:30:00.000Z",
            codeUser: "2xsso9"
        },
        }),
        await prisma.historic.create({
            data: {
                Date: "2023-02-19T08:30:00.000Z",
                startTime: "2023-02-19T08:30:00.000Z",
                finishTime: "2023-02-19T17:30:00.000Z",
                codeUser: "2xsso9"
            },
        }),
        await prisma.historic.create({
            data: {
                Date: "2023-02-18T08:30:00.000Z",
                startTime: "2023-02-18T08:30:00.000Z",
                finishTime: "2023-02-18T17:30:00.000Z",
                codeUser: "2xsso9"
            },
        })
    ]

    console.log({ event });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });