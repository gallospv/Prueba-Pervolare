import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RestCategoryService } from '@app/services/rest-category.service';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  public categoryData: any = [];
  public form: FormGroup | undefined;
  public loading: boolean = !1;

  constructor(private quoteService: QuoteService, private restcategory: RestCategoryService) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
    this.loadData();
  }

  public loadData() {
    this.restcategory.get('http://127.0.0.1:8000/api/categorias/').subscribe((resp) => {
      this.categoryData = resp;
      console.log(resp);
    });
  }
}
