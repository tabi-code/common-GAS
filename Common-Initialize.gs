/**
 * 独自メニューを追加する
 *
 * @param {string} メニュータブ名
 * @param {Object.<string, string>} <メニュー名, 関数名>
 */
function AddMenuToSheet(MenuName, MenuList){
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  sheet.addMenu(MenuName, MenuList);
}