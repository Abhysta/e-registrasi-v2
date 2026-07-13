import { PrismaClient } from "../generated/prisma/client.ts";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
    host: "localhost",
    user: "root",
    database: "regis_2",
});

const prisma = new PrismaClient({
    adapter,
    errorFormat: "pretty",
});

export {
    prisma,
}