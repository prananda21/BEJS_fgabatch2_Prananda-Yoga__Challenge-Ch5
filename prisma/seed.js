import { prisma } from "../src/database/prisma.js"

const main = async () => {
    const homeAddressType = await prisma.address_type.upsert({
        where: { id: "AT-HOME" },
        update: {},
        create: {
            id: "AT-HOME",
            description: "Home Address",
            address_id: null,
        },
    })

    const officeAddressType = await prisma.address_type.upsert({
        where: { id: "AT-OFFICE" },
        update: {},
        create: {
            id: "AT-OFFICE",
            description: "Office Address",
            address_id: null,
        },
    })

    const checkAccType = await prisma.account_type.upsert({
        where: { id: "AcT-CHECK" },
        update: {},
        create: {
            id: "AcT-CHECK",
            description: "Checking Account",
            account_id: null,
        },
    })

    const savingAccType = await prisma.account_type.upsert({
        where: { id: "AcT-SAVING" },
        update: {},
        create: {
            id: "AcT-SAVING",
            description: "Saving Account",
            account_id: null,
        },
    })

    const moneyMarketAccType = await prisma.account_type.upsert({
        where: { id: "AcT-MMA" },
        update: {},
        create: {
            id: "AcT-MMA",
            description: "Money Market Account",
            account_id: null,
        },
    })

    const CFAAccType = await prisma.account_type.upsert({
        where: { id: "AcT-CDA" },
        update: {},
        create: {
            id: "AcT-CDA",
            description: "Certified of Deposit Account",
            account_id: null,
        },
    })

    const TTtransactionType = await prisma.transaction_type.upsert({
        where: { id: "TT" },
        update: {},
        create: {
            id: "TT",
            description: "Transfer Type",
            transaction_id: null,
        },
    })

    const TDtransactionType = await prisma.transaction_type.upsert({
        where: { id: "TD" },
        update: {},
        create: {
            id: "TD",
            description: "Deposit Type",
            transaction_id: null,
        },
    })

    const TWtransactionType = await prisma.transaction_type.upsert({
        where: { id: "TW" },
        update: {},
        create: {
            id: "TW",
            description: "Withdraw Type",
            transaction_id: null,
        },
    })

    const TFtransactionType = await prisma.transaction_type.upsert({
        where: { id: "TF" },
        update: {},
        create: {
            id: "TF",
            description: "Account Fee Type",
            transaction_id: null,
        },
    })

    const TItransactionType = await prisma.transaction_type.upsert({
        where: { id: "TI" },
        update: {},
        create: {
            id: "TI",
            description: "Interest Payment Type",
            transaction_id: null,
        },
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(-1)
    })
