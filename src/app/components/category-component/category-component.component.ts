import { Component, Input, OnInit, OnChanges, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import Category from 'src/app/models/category.model';
import { DataStorageService } from 'src/app/service/data-storage/data-storage.service';
import { NotifierService } from 'src/app/service/notifier.service';

@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.scss']
})
export class CategoryComponentComponent implements OnInit, OnChanges, OnDestroy {
  sum: number;
  count: number;
  avg: number;

  @Input() category!: Category;
  notifierSubscription: Subscription = this.notifierService.subjectNotifier.subscribe(notified => {
    this.ngOnChanges();
  });
  @Output() newItemEvent = new EventEmitter<any>();

  constructor(private dataStorageService: DataStorageService, private notifierService: NotifierService) { 
    this.sum = 0;
    this.count = 0;
    this.avg = 0;
  }

  ngOnInit(): void {
    this.dataStorageService.getCategoryStats(this.category.id, localStorage.startDate, localStorage.endDate).subscribe(
      (stats) => {
          this.sum = stats.sum;
          this.count = stats.count;
          this.avg = stats.avg;
          this.emitStats(this.sum, this.count, this.avg);
      }
      
    );
  }
  ngOnChanges() {
    this.dataStorageService.getCategoryStats(this.category.id, localStorage.startDate, localStorage.endDate).subscribe(
      (stats) => {
          this.sum = stats.sum;
          this.count = stats.count;
          this.avg = stats.avg;
          this.emitStats(this.sum, this.count, this.avg);
      }
    );
  }

  ngOnDestroy() {
    this.notifierSubscription.unsubscribe();
  }

  emitStats(sum: number, count: number, avg: number) {
    this.newItemEvent.emit({sum: sum, count: count, avg: avg});
  }
}
