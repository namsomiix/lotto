import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LottoService } from '../lotto.service';
import { Lotto } from '../lotto';

@Component({
  selector: 'app-lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.scss']
})

export class LottoComponent implements OnInit {
  title = 'Lotto';
  formGroup: FormGroup;

  result : Lotto[] = [];

  constructor(private formBuilder:FormBuilder,private lottoService:LottoService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      period:['',Validators.required],
      lottoNumber: ['',Validators.required]
    });
    
  }

  checkLotto(){
    if(this.formGroup.invalid){
      alert("Error !!!");
    }
    else
    {
      this.result = this.lottoService.getAll();
    }
  }
}
