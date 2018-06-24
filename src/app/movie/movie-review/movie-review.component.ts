import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Review } from '../../review';

@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.css']
})
export class MovieReviewComponent implements OnInit {

  reviewForm: FormGroup;
  title: FormControl;
  summary: FormControl;
  rating: FormControl;
  ratings: number[] = [1, 2, 3, 4, 5];

  constructor() {
    console.log('initialized');
   }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls(){
    this.title = new FormControl('', Validators.required);
    this.summary = new FormControl('', Validators.required);
    this.rating = new FormControl(5 , Validators.required);
  }
  createForm(){
    this.reviewForm = new FormGroup({
      title: this.title,
      summary: this.summary,
      rating: this.rating
    });
  }
  submitReview(){
    const review = new Review(this.title.value, this.summary.value, this.rating.value);
    console.log(review);
    this.reviewForm.reset();
    this.rating.setValue(5);
  }



}
