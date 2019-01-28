import {ClassDirective} from "@angular/flex-layout";
import {Directive} from "@angular/core";

const inputs = [
    'ngClass', 'ngClass.xsc', 'ngClass.smc', 'ngClass.mdc', 'ngClass.lgc', 'ngClass.xlc',
    'ngClass.lt-smc', 'ngClass.lt-mdc', 'ngClass.lt-lgc', 'ngClass.lt-xlc',
    'ngClass.gt-xsc', 'ngClass.gt-smc', 'ngClass.gt-mdc', 'ngClass.gt-lgc'
];

const selector = `
  [ngClass], [ngClass.xsc], [ngClass.smc], [ngClass.mdc], [ngClass.lgc], [ngClass.xlc],
  [ngClass.lt-smc], [ngClass.lt-mdc], [ngClass.lt-lgc], [ngClass.lt-xlc],
  [ngClass.gt-xsc], [ngClass.gt-smc], [ngClass.gt-mdc], [ngClass.gt-lgc]
`;
@Directive({selector, inputs})
export class CustomClassDirective extends ClassDirective {
    protected inputs = inputs;

}
