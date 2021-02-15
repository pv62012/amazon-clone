const functions = require("firebase-functions");

const express=require("express")
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IKg6DIig3ROA52K7RKZkTPMjsL8pitm8iZO8HNmfoEtpRelPEuRbnFu31RCf2Mkm0QlPHs6oe0wcLhAl0KoIlua00x2bdcj7o"
)


// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
    // desription:"this is fake payment that is use for practice",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/amzon-clone-pv62020ee1/us-central1/api



