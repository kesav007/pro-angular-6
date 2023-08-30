export class Model {
    user;
    items;
    constructor() {
        this.user = "Kesav"
        this.items = [new TodoItem("Buy Flowers", false),
        new TodoItem("Get Shoes", false),
        new TodoItem("Collect Tickets", true),
        new TodoItem("Call Joe", false)
        ]
    }
}

export class TodoItem {
    action;
    done;
    constructor(action: any, done: any) {
        this.action = action;
        this.done = done;
    }
}