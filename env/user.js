/**
 * Created by bob on 16/11/3.
 */
db.createUser(
    {
        user: "lb-user",
        pwd: "lb-pass",
        roles: [
            { role: "read", db: "lb-mongo" }
        ]
    }
);