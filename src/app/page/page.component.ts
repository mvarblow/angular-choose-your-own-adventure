import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../page.service';
import { Page } from '../page';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit{

  constructor (private pageService: PageService, private route: ActivatedRoute) {}

  currentPage: Page;
  pages: Page[];

  ngOnInit() {
    this.pages = this.pageService.getPages();
    this.currentPage = this.pages[0]; 
    this.route.paramMap.subscribe(params => {
      this.currentPage = this.pages[+params.get('index')];
    });
  }
}
