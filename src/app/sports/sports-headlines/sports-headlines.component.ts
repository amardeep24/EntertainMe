import { Component, OnInit, OnDestroy } from '@angular/core';
import { SportsService } from '../../sports.service';
import { Sports } from '../../sports';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-sports-headlines',
  templateUrl: './sports-headlines.component.html',
  styleUrls: ['./sports-headlines.component.css']
})
export class SportsHeadlinesComponent implements OnInit, OnDestroy {

  headlines: Sports[] = [];
  subscription: ISubscription;

  constructor(private sportsService:SportsService) { }

  ngOnInit() {
    this.subscription = this.sportsService.getSportsHeadlines().subscribe(
      data=>{
        this.headlines = data.articles.map(item=>{
            return new Sports(item.author, item.title, item.description, item.url, item.urlToImage);
          });
      },
      error=>{
          console.error("Please check api!");
      }
    )

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
