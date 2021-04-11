import { CourierClient } from "@trycourier/courier";
import dotenv from "dotenv";

dotenv.config();

const courier = CourierClient({ authorizationToken: process.env.COURIER_AUTH_TOKEN });

const emailer { messageId } = await courier.send({
    eventId: process.env.COURIER_NOTIFICATION_ID,
    recipientId: "",
    profile: {
        email: ""
    },
    data: {
        name:
            favoriteAdjective: "awesomeness"
    },
});


