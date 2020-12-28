function AddMenuToSheet(MenuName, MenuList){
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  sheet.addMenu(MenuName, MenuList);
}