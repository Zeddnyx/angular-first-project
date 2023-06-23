import { Component } from '@angular/core';
import { DataService } from '../../core/service/data.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-started',
  templateUrl: './started.component.html',
  styleUrls: ['./started.component.css'],
})
export class StartedComponent {
  data: any[] = [];
  isLoading: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.isLoading = true;
    this.dataService
      .getData()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((data) => {
        this.data = data;
      });
  }
}
