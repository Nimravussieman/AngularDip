import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/htttp.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  providers: [DataService]
})
export class DataComponent {
  public data: any;
  constructor(private dataService: DataService, activeRoute: ActivatedRoute) {
   // this.errorMessage = new Subject<string>();
  }
  ngOnInit() {
    this.dataService.getAll().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
    
  }
}
