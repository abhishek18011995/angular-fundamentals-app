import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appLocationValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidatorDirective, multi: true }]
})
export class LocationValidatorDirective implements Validator {

  constructor() { }

  validate(fg: FormGroup): { [key: string]: any } {
    // console.log(fg);
    console.log(fg.root);
    const onlineUrl = (<FormGroup>fg.root).controls.onlineUrl;
    if ((fg.controls.address && fg.controls.city && fg.controls.country &&
      fg.controls.address.value && fg.controls.city.value && fg.controls.country.value) || (onlineUrl && onlineUrl.value)) {
      return null;
    } else {
      return { 'validLocation': false };
    }
  }

}
