import {ImgSrcDirective} from "@angular/flex-layout";
import {Directive} from "@angular/core";

const inputs = [
    'src.xsc', 'src.smc', 'src.mdc', 'src.lgc', 'src.xlc',
    'src.lt-smc', 'src.lt-mdc', 'src.lt-lgc', 'src.lt-xlc',
    'src.gt-xsc', 'src.gt-smc', 'src.gt-mdc', 'src.gt-lgc'
];

const selector = `
  img[src.xsc],    img[src.smc],    img[src.mdc],    img[src.lgc],   img[src.xlc],
  img[src.lt-smc], img[src.lt-mdc], img[src.lt-lgc], img[src.lt-xlc],
  img[src.gt-xsc], img[src.gt-smc], img[src.gt-mdc], img[src.gt-lgc]
`;

@Directive({selector, inputs})
export class CustomImgSrcDirective extends ImgSrcDirective {
    protected inputs = inputs;
}