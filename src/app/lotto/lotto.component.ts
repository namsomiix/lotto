import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.scss']
})
export class LottoComponent implements OnInit {
  title = 'Lotto';  
  disable = true;
  isRed = true;
  message = 'my message 555';
  names = ['Kae', 'Som-O','TOM'];
  money = 1000000000.121;
  toDay = new Date();

constructor() { }

  ngOnInit() {
  }

  getName(): string{
    return "Angular @w@";
  }

  showRed():boolean{
    return true;
  }
}
