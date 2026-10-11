import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db("bazardor-a7-data");

export const auth = betterAuth({

    account: {
        accountLinking: {
            enabled: true,
            // optional: specify trusted providers
            trustedProviders: ["google", "github"],
        },
    },

    database: mongodbAdapter(db, {
        client,
    }),

    emailAndPassword: {
        enabled: true,
    },

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        },

        github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        },
    },



});



// const client = new MongoClient(process.env.MONGODB_URL);
// const db = client.db("bazardor-a7-data");

// export const auth = betterAuth({
//   emailAndPassword: {
//     enabled: true,
//   },
// //   socialProviders: {
// //     google: {
// //         clientId: process.env.GOOGLE_CLIENT_ID,
// //         clientSecret: process.env.GOOGLE_CLIENT_SECRET
// //     },
// //     github: {
// //         clientId: process.env.GITHUB_CLIENT_ID,
// //         clientSecret: process.env.GITHUB_CLIENT_SECRET
// //     }

// //   },
//   database: mongodbAdapter(db, {
//     client,
//   }),
// });
