import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aes';

  plainText: string;
  encryptText: string;
  encPassword: string;
  decPassword: string;
  conversionEncryptOutput: string;
  conversionDecryptOutput: string;

  constructor() {}
  
  convertText(conversion: string) {
    if (conversion == 'encrypt') {
      this.conversionEncryptOutput = CryptoJS.AES.encrypt(
        this.plainText.trim(),
        this.encPassword.trim()
      ).toString();
    } else {
      this.conversionDecryptOutput = CryptoJS.AES.decrypt(
        this.encryptText.trim(),
        this.decPassword.trim()
      ).toString(CryptoJS.enc.Utf8);
    }
  }
}
