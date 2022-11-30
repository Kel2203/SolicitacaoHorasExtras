import {google} from  'googleapis'
 
async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, time, periodo, data, hora, justificativa, autorizado } = req.body;
    console.log(nome, time, periodo, data, hora, justificativa, autorizado);

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g,'\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: "15498g4gLUOISmaWeBoI9Tc_T5eDZzZwyQ5HR9ZvEbjI",
      range: 'horaextra!A2:H',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[nome, time, periodo, data, hora, justificativa, autorizado]],
      },
    });

    res.status(201).json({ message: 'It works!', response });
  }
  res.status(200).json({ message: 'Hey!' });
}

export default handler;