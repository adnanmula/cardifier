function cardify() {
    var folderId = 'cards_folder';
    var docId = 'output_document_id';
    var cardWidth = 240;
    var cardHeight = 336;
    var margin = 15;

    var dataFolder = DriveApp.getFolderById(folderId);
    var subfolders = dataFolder.getFolders();

    var doc = DocumentApp.openById(docId);
    var docBody = doc.getBody()
        .setMarginTop(margin)
        .setMarginLeft(margin)
        .setMarginRight(margin)
        .setMarginBottom(margin);


    var imgContainer = getContainer(docBody, cardWidth, cardHeight, margin);

    while (subfolders.hasNext()) {
        var folder = subfolders.next();
        if (Number(folder.getName())) {
            var cards = folder.getFiles()
            while (cards.hasNext()) {
                appendToDoc(imgContainer, cards.next(), Number(folder.getName()), cardWidth, cardHeight);
            }
        }
    }

    doc.saveAndClose();
}

function appendToDoc(imgContainer, img, times, cardWidth, cardHeight) {
    for (var i = 0; i < times; i++) {
        imgContainer.asParagraph().appendInlineImage(img)
            .setHeight(cardHeight)
            .setWidth(cardWidth);
    }
}

function getContainer(docBody, cardWidth, cardHeight, margin) {
    var defaultImgFolder = DriveApp.getFolderById('default_card_folder');
    var defaultCard = defaultImgFolder.getFiles();

    var firstImg = docBody.appendImage(defaultCard.next())
        .setHeight(cardHeight)
        .setWidth(cardWidth);

    return firstImg.getParent();
}