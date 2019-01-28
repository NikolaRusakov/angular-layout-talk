import {Directive} from "@angular/core";
import {ShowHideDirective} from "@angular/flex-layout";

const inputs = [
    'fxShow',
    'fxShow.xsc', 'fxShow.smc', 'fxShow.mdc', 'fxShow.lgc', 'fxShow.xlc',
    'fxShow.lt-smc', 'fxShow.lt-mdc', 'fxShow.lt-lgc', 'fxShow.lt-xlc',
    'fxShow.gt-xsc', 'fxShow.gt-smc', 'fxShow.gt-mdc', 'fxShow.gt-lgc',
    'fxHide',
    'fxHide.xsc', 'fxHide.smc', 'fxHide.mdc', 'fxHide.lgc', 'fxHide.xlc',
    'fxHide.lt-smc', 'fxHide.lt-mdc', 'fxHide.lt-lgc', 'fxHide.lt-xlc',
    'fxHide.gt-xsc', 'fxHide.gt-smc', 'fxHide.gt-mdc', 'fxHide.gt-lgc'
];

const selector = `
  [fxShow], 
  [fxShow.xsc], [fxShow.smc], [fxShow.mdc], [fxShow.lgc], [fxShow.xlc],
  [fxShow.lt-smc], [fxShow.lt-mdc], [fxShow.lt-lgc], [fxShow.lt-xlc],
  [fxShow.gt-xsc], [fxShow.gt-smc], [fxShow.gt-mdc], [fxShow.gt-lgc],
  [fxHide], 
  [fxHide.xsc], [fxHide.smc], [fxHide.mdc], [fxHide.lgc], [fxHide.xlc],
  [fxHide.lt-smc], [fxHide.lt-mdc], [fxHide.lt-lgc], [fxHide.lt-xlc],
  [fxHide.gt-xsc], [fxHide.gt-smc], [fxHide.gt-mdc], [fxHide.gt-lgc]
`;

/**
 * 'show' Layout API directive
 */
@Directive({selector, inputs})
export class CustomShowHideDirective extends ShowHideDirective {
    protected inputs = inputs;
}
