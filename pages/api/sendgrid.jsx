import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

  


async function sendEmail(req, res) {
  try {
  
    await sendgrid.send({
      to: `${req.body.email}`, // Your email where you'll receive emails
      from: "raquelsb2001@gmail.com", // your website email address here
      subject: 'Solicitação de Hora Extras',
      templateId: "d-e4b77db0d69e4bde840f1d7f0fc6a3e9",
      dynamicTemplateData:{
        "nome": `${req.body.nome}`,
        "hora": `${req.body.hora}`,
        "data": `${req.body.data}`,
        "time":`${req.body.time}`,
        "justificativa":`${req.body.justificativa}`
      }
      
    });
 
  } catch (error) {
 
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;


