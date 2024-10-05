import Chapa from "chapa";

export const CreatePayment = async (req, res) => {
  let myChapa = new Chapa(process.env.CHAPA_SECRET_KEY);

  const customerInfo = {
    amount: "25250",
    currency: "ETB",
    email: "dems@gmail.com",
    first_name: "Demessie new",
    last_name: " ",
    // tx_ref: 'tx-x12345', // if autoRef is set in the options we dont't need to provide reference, instead it will generate it for us
    callback_url: "https://chapa.co", // your callback URL
    customization: {
      title: "I love e-commerce",
      description: "It is time to pay",
    },
  };

  myChapa
    .initialize(customerInfo, { autoRef: true })
    .then((response) => {
      /*
      response:
        {
          message: 'Hosted Link',
          status: 'success' || 'failed',
          data: {
            checkout_url: 'https://checkout.chapa.co/checkout/payment/:token'
          },
          tx_ref: 'generated-token' // this will be the auto generated reference
        }
      */
      console.log(response, response.tx_ref);
      // saveReference(response.tx_ref)
    })
    .catch((e) => console.log(e)); // catch errors
  // async/await
  //   let response = await myChapa.initialize(customerInfo, { autoRef: true });
  //   myChapa
  //     .verify("ac43775b-758d-4f7f-abf2-bf7ffd4e5cea")
  //     .then((response) => {
  //       console.log(response); // if success
  //     })
  //     .catch((e) => console.log("not Verified")); // catch errors

  //   res.status(200).json({ data: "success" });

  // async/await
  // let responses = await myChapa.verify("txn-reference");
};
