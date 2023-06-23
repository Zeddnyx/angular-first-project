import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/service/data.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css'],
})
export class SingleComponent {
  params: any;
  getData: any;
  form: any;
  formData: any;
  id: any;

  constructor(
    private route: ActivatedRoute,
    private dataParams: DataService,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required]],
      userId: ['', [Validators.required, Validators.maxLength(1)]],
      id: [''],
    });
  }

  get Title() {
    return this.form.get('title');
  }
  get Desc() {
    return this.form.get('description');
  }
  get UserId() {
    return this.form.get('userId');
  }

  onDelete(id: number) {
    this.dataParams.deleteData(id).subscribe();
    setTimeout(() => {
      this.dataParams.getDataParams(this.params).subscribe((data: any) => {
        this.getData = data;
      });
    }, 1000);
  }

  onEdit(data: any) {
    this.id = data.id;
    this.form.patchValue({
      title: data.title,
      description: data.description,
      userId: data.userId,
      id: data.id,
    });
  }

  onSubmit(): void {
    if (this.form.value.id !== this.id) {
      this.dataParams.postData(this.form.value); // post data
      setTimeout(() => {
        this.dataParams.getDataParams(this.params).subscribe((data: any) => {
          this.getData = data;
        });
      }, 1000);
    } else { // submit edited data
      this.dataParams.editData(this.form.value, this.id).subscribe(() => {
        this.dataParams.getDataParams(this.params).subscribe((data: any) => {
          this.getData = data;
        });
      });
    }
  }

  // get params and fetch api using dynamic params
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id');
      this.params = id;
    }); // get params

    // fetch whit params
    this.dataParams.getDataParams(this.params).subscribe((data: any) => {
      this.getData = data;
    });

    console.log('ngoninit refresh');
  }
}
