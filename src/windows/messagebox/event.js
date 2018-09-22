const remote = require('electron').remote;
const dialog = remote.dialog;
//  显示简单的消息对话框
function onClick_MessageBox() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '信息';
    options.message = '这是一个消息提示框';
    label.innerText = dialog.showMessageBox(options);
}

function onClick_MessageBoxIcon() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '信息';
    options.message = '定制消息对话框的图标';
    options.icon = '../../../images/kt.png';
    label.innerText = dialog.showMessageBox(options);
}
/*
1.默认对话框：none
2. 信息对话框：info
3. 错误对话框：error
4. 询问对话框：question
5. 警告对话框：warning
 */
function onClick_MessageBoxType() {
    const label = document.getElementById('label');
    var options = {};
    options.title = '信息';
    options.message = '设置消息对话框的类型';
    options.type = 'error';
    options.icon = '../../../images/kt.png';
    label.innerText = dialog.showMessageBox(options);
}