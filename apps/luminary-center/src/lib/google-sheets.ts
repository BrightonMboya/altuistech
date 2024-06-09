import { google } from "googleapis";

export default async function AppendNewLeads(
  spreadsheetId: string,
  range: string,
  values: any,
) {
  try {
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      undefined,
      // we need to replace the escaped newline characters
      // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
      (process.env.GOOGLE_SHEET_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
      ["https://www.googleapis.com/auth/spreadsheets"],
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });

    const res = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [values],
      },
    });
    return res.data;
  } catch (cause) {
    console.log(cause);
  }
}
