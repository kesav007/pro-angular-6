import { Directive, Input, SimpleChanges, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: "[counterOf]"
})
export class CounterDirective {
    constructor(private container: ViewContainerRef,
        private template: TemplateRef<Object>) { }

    @Input("counterOf")
    counter: number;

    ngOnChanges(changes: SimpleChanges) {
        this.container.clear();
        for (let i = 0; i < this.counter; i++) {
            this.container.createEmbeddedView(this.template, new ContainerDirectiveContext(i + 1));
        }
    }
}

class ContainerDirectiveContext {
    constructor(public $implicit: any) { }
}