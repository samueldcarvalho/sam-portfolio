import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ptbr } from 'src/assets/i18n/ptbr';
import { en } from 'src/assets/i18n/en';

export class CustomTranslateLoader implements TranslateLoader {
  public getTranslation(lang: string): Observable<any> {
    return new Observable((observer: any) => {
      if (lang === 'ptbr') {
        observer.next(ptbr);
      } else {
        observer.next(en);
      }
      observer.complete();
    });
  }
}
