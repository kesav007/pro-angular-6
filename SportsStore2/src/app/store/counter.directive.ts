import {
    Directive, ViewContainerRef, TemplateRef, Input, Attribute, SimpleChanges
} from "@angular/core";

const selecterName: string = 'kesavOf';

@Directive({
    selector: "[" + selecterName + "]"
})
export class CounterDirective {

    constructor(private container: ViewContainerRef, private template: TemplateRef<Object>) { }

    @Input(selecterName)
    counter: number;

    ngOnChanges(changes: SimpleChanges) {
        this.container.clear();
        console.log("changes", changes);
        for (let i = 0; i < this.counter; i++) {
            this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
        }
    }

}

class CounterDirectiveContext {
    constructor(public $implicit: any) { }
}