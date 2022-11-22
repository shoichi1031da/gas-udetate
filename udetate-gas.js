function doGet(e){	
    //連携しているスプレッドシート情報を取得			
    const  spreadsheet  =  SpreadsheetApp.getActiveSpreadsheet();	
    //連携しているスプレッドシートのシート情報を取得
    const  sheet  =  spreadsheet.getActiveSheet();
    
    //値のある最後の行数を取得
    const lastRow = sheet.getDataRange().getLastRow();
    
    //日時の取得と入力
        let now = Utilities.formatDate(new Date(), "JST", "yyyy/MM/dd \n hh:mm:ss");
        //日時を最後の行の一つ下のセルに入力
        sheet.getRange(lastRow + 1,1).setValue(now);
    
    //data（腕立て回数）の取得と入力
        let data = e.parameter.data;		
        //最後の行の一つ下のセルにパラメータの値を入力
        sheet.getRange(lastRow + 1,2).setValue(data);
    
    //チェック
        let check = "";
        let target = sheet.getRange(1,2).getValue();
        if(data >= target) check = "クリア!!";
        else check = "残念...";
        sheet.getRange(lastRow + 1, 3).setValue(check);
    }
