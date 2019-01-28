import {FlexDirective} from "@angular/flex-layout";
import {Directive} from "@angular/core";


const inputs = [
    'fxFlex', 'fxFlex.xsc', 'fxFlex.smc', 'fxFlex.mdc',
    'fxFlex.lgc', 'fxFlex.xlc', 'fxFlex.lt-smc', 'fxFlex.lt-mdc',
    'fxFlex.lt-lgc', 'fxFlex.lt-xlc', 'fxFlex.gt-xsc', 'fxFlex.gt-smc',
    'fxFlex.gt-mdc', 'fxFlex.gt-lgc','fxFlex.xsc.print'
];
const selector = `
  [fxFlex], [fxFlex.xsc], [fxFlex.smc], [fxFlex.mdc],
  [fxFlex.lgc], [fxFlex.xlc], [fxFlex.lt-smc], [fxFlex.lt-mdc],
  [fxFlex.lt-lgc], [fxFlex.lt-xlc], [fxFlex.gt-xsc], [fxFlex.gt-smc],
  [fxFlex.gt-mdc], [fxFlex.gt-lgc], [fxFlex.xsc.print]
`;

@Directive({inputs, selector})
export class CustomFlexDirective extends FlexDirective {
    protected inputs = inputs;
}