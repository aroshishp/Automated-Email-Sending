function automaticEmailSender() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();

  const lstRow = sheet.getLastRow();

  for(let i = 1; i < lstRow; i++)
  {
    let message = "Hi " + data[i][1] + ",\n\n" +
    "This is a confirmation email for your purchase of " + data[i][3] + " (" + data[i][4] + (data[i][4] > 1 ? " quantities" : " quantity") + ") on the date " + data[i][2] + ".\n" +
    "Kindly note that your Transaction Number is: " + data[i][5] + ".\n\n";

    if (data[i][6])
    {
      message += "Additional Notes: " + data[i][6] + "\n\n";
    }

    message += "\n" + "Warm Regards\n";
    MailApp.sendEmail(
      {
        to: data[i][0],
        subject: "Transaction Confirmation",
        body: message
      }
    );
  }
}
