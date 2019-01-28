import {Directive} from '@angular/core';
import {LayoutDirective} from '@angular/flex-layout';

export const CUSTOM_BREAKPOINTS = [
    {
        alias: 'xsc',
        suffix: 'Xsc',
        mediaQuery: 'screen and (max-width: 600px)',//, screen and (max-width:900px) and (max-height:430px)
        overlapping: false
    },
    {
        alias: 'smc',
        suffix: 'Smc',
        mediaQuery: 'screen and (max-width: 920px)',//, screen and (max-width:900px) and (max-height:430px)
        overlapping: false
    },
    {
        alias: 'mdc',
        suffix: 'Mdc',
        mediaQuery: 'screen and (max-width: 1200px)',//, screen and (max-width:900px) and (max-height:430px)
        overlapping: false
    },
    {
        alias: 'lgc',
        suffix: 'Lgc',
        mediaQuery: 'screen and (max-width: 4000px)',//, screen and (max-width:900px) and (max-height:430px)
        overlapping: false
    },
    {
        alias: 'xsc.print',
        suffix: 'XscPrint',
        mediaQuery: 'print and (max-width: 600px)',//, screen and (max-width:900px) and (max-height:430px)
        overlapping: false
    },
    
];

const inputs = [
    'fxLayout.xsc', 'fxLayout.smc', 'fxLayout.mdc',
    'fxLayout.lgc', 'fxLayout.xlc', 'fxLayout.lt-smc', 'fxLayout.lt-mdc',
    'fxLayout.lt-lgc', 'fxLayout.lt-xlc', 'fxLayout.gt-xsc', 'fxLayout.gt-smc',
    'fxLayout.gt-mdc', 'fxLayout.gt-lgc'
];
const selector = `
  [fxLayout.xsc], [fxLayout.smc], [fxLayout.mdc],
  [fxLayout.lgc], [fxLayout.xlc], [fxLayout.lt-smc], [fxLayout.lt-mdc],
  [fxLayout.lt-lgc], [fxLayout.lt-xlc], [fxLayout.gt-xsc], [fxLayout.gt-smc],
  [fxLayout.gt-mdc], [fxLayout.gt-lgc]
`;

@Directive({selector, inputs})
export class CustomLayoutDirective extends LayoutDirective {
    protected inputs = inputs;
}