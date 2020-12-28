function onOpen() {
  AddMenuToSheet
};

function AddMenuToSheet(name, functionName) {
  let sheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [
    {name : name, functionName : functionName}
  ];
  sheet.addMenu("AtCorder", entries);
}
