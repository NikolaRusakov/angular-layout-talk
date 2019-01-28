import {StyleDirective} from "@angular/flex-layout";
import {Directive} from "@angular/core";

const inputs = [
    'ngStyle',
    'ngStyle.xsc', 'ngStyle.smc', 'ngStyle.mdc', 'ngStyle.lgc', 'ngStyle.xlc',
    'ngStyle.lt-smc', 'ngStyle.lt-mdc', 'ngStyle.lt-lgc', 'ngStyle.lt-xlc',
    'ngStyle.gt-xsc', 'ngStyle.gt-smc', 'ngStyle.gt-mdc', 'ngStyle.gt-lgc'
];

const selector = `
  [ngStyle],
  [ngStyle.xsc], [ngStyle.smc], [ngStyle.mdc], [ngStyle.lgc], [ngStyle.xlc],
  [ngStyle.lt-smc], [ngStyle.lt-mdc], [ngStyle.lt-lgc], [ngStyle.lt-xlc],
  [ngStyle.gt-xsc], [ngStyle.gt-smc], [ngStyle.gt-mdc], [ngStyle.gt-lgc]
`;

@Directive({selector, inputs})
export class CustomStyleDirective extends StyleDirective {
    protected inputs = inputs;


}
