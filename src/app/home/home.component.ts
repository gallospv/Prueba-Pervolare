import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestCategoryService } from '@app/services/rest-category.service';
import { finalize } from 'rxjs/operators';
import swal from 'sweetalert2';

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
  public category_form: FormGroup;
  public loading: boolean = !1;

  constructor(
    private quoteService: QuoteService,
    private restcategory: RestCategoryService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.category_form = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
      title: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]),
      idparentcategory: new FormControl('', [Validators.required]),
    });
  }

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
      this.category_form.reset();
      console.log(resp);
    });
  }

  public sendCategory() {
    this.restcategory
      .postCategory('http://127.0.0.1:8000/api/categorias/', {
        code: this.category_form.value.code,
        title: this.category_form.value.title,
        description: this.category_form.value.description,
        idparentcategory: this.category_form.value.idparentcategory,
      })
      .subscribe((respuesta) => {
        swal.fire({
          icon: 'success',
          title: 'Registro Exitoso',
          text: 'Se añadio correctamente la categoría',
          showConfirmButton: false,
          timer: 3000,
        });
        console.log('datos insertdos');
        this.loadData();
      });
  }
}
