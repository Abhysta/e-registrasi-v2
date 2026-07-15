import {PrismaClient} from "../../prisma/generated/prisma/client.ts";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
    host: "localhost",
    user: "root",
    database: "regis_2",
    password: "aysta123",
});

export const prismaClient = new PrismaClient({
    adapter,
    errorFormat : "pretty"
});