const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51IOFbSBUvu7x9D9QmD1ZTyosV4IdKIbHgw3Cojp0ruyvWSczOm9toacN5rhO0UPJoDdv0GNPpzMGCUNtrs5iORQ700zF6bTC5Y"
);



const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, 
    currency: "usd",
  });

  
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});





exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-612d9/us-central1/api