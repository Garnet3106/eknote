import NoteUi from "./noteui";

export default class Note {
    noteUi: NoteUi;
    id: String;
    title: String;
    content: String;

    constructor(id: String, title: String, content: String) {
        this.noteUi = new NoteUi();
        this.id = id;
        this.title = title;
        this.content = content;
    }

    create() {
    }
}
