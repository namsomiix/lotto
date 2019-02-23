import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LottoService } from '../lotto.service';
import { Lotto } from '../lotto';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.scss']
})

export class LottoComponent implements OnInit {
  title = 'Lotto';
  formGroup: FormGroup;
  result : Lotto[] = [];
  wasBigPrize: boolean = false;
  wasLastThreeDigitPrize:boolean = false;

  constructor(private formBuilder:FormBuilder,private lottoService:LottoService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      period:['',Validators.required],
      lottoNumber: ['',Validators.required]
    });
    
  }

  checkLotto(){

    this.wasBigPrize = false;
    this.wasLastThreeDigitPrize = false;

    if(this.formGroup.invalid){
      alert("Error !!!");
    }
    else
    {
      this.result = this.lottoService.getAll();

      const period = this.formGroup.get('period').value;
      const lottoNumber: string = this.formGroup.get('lottoNumber').value;

      const lotto = this.result.find((item:Lotto) => {
        return item.period === period;
      });

      if(lotto){
        if(lotto.bigPrize === lottoNumber){
          this.wasBigPrize = true;
        }
        if(lotto.lastThreeDigitPrize ===lottoNumber.substr(3))
        {
          this.wasLastThreeDigitPrize = true;
        }
      }

    }
  }
  onClear(){
    this.wasBigPrize = false;
    this.wasLastThreeDigitPrize = false;
    this.formGroup.reset();
    //this.formGroup.get('period').setValue('');
    //this.formGroup.get('lottoNumber').setValue('');
    //this.formGroup.controls.period.setValue('');
    //this.formGroup.controls.lottoNumber.setValue('');
    this.result = [];
  }
}
