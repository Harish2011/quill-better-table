// excelPastePlugin.js

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';

export default class ExcelPastePlugin extends Plugin {
    static get requires() {
        return [Clipboard];
    }

    init() {
        const editor = this.editor;

        editor.plugins.get('Clipboard').on('inputTransformation', (evt, data) => {
            // Check if the pasted content is from Excel
            if (data.source === 'excel') {
                // Parse Excel data and convert it into suitable format
                const parsedData = parseExcelData(data.data);

                // Insert parsed data into editor
                editor.model.change(writer => {
                    const insertPosition = editor.model.document.selection.getFirstPosition();
                    writer.insertText(parsedData, insertPosition);
                });

                // Cancel the default paste behavior
                evt.stop();
            }
        });
    }
}

function parseExcelData(data) {
    // Implement Excel data parsing logic here
    // Convert Excel data into HTML or plain text
    return parsedData;
}
