import { FormControl } from '@angular/forms';

export function  restrictedWords(words: string[]) {
    return (control: FormControl): { [key: string]: any } => {
      let invalidWords = [];
      if (words) {
        invalidWords = words.map(c => {
          return control.value.includes(c) ? c : null;
        }).filter(c => c != null);

        if (invalidWords && invalidWords.length > 0) {
          return { 'restrictedWord': invalidWords.join(',') };
        }
      } else {
        return null;
      }

      //   }).filter(c => c !== null);
      // }

      // if (invalidWords && invalidWords.length > 0) {
      //   return { 'restrictedWord': invalidWords };
      // } else {
      //   return null;
      // }
      // if (control.value.includes('foo')) {
      //   return { 'restrictedWord': 'foo' };
      // } else {
      //   return null;
      // }
    };
  }
