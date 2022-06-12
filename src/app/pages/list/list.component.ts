import { Component, OnInit } from '@angular/core';
import { RestCategoryService } from '@app/services/rest-category.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private restcategory: RestCategoryService) {}

  ngOnInit(): void {}
}
