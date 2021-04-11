import express from 'express';
var router = express.Router();
import { CourierClient } from "@trycourier/courier";
import dotenv from "dotenv";
dotenv.config();

router.post("/", async (req, res) => {
    const courier = CourierClient({ authorizationToken: process.env.COURIER_AUTH_TOKEN });
    try {
        const { messageId } = await courier.send({
            eventId: process.env.COURIER_NOTIFICATION_ID,
            recipientId: req.body.name,
            profile: {
                email: req.body.email
            },
            data: {
                fname: req.body.fname,
                femail: req.body.femail,
                date: req.body.date,
                time: req.body.time,
                address: req.body.location
            },
        });
    } catch (err) {
        res.json({ msg: err });
    }
});

export default router;