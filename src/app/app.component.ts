import { AfterViewInit, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Helpers } from './helpers/Helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {


  title = 'MyApplication';

  subscription: Subscription;

  authentication: boolean;

  constructor(private helpers: Helpers) {

  }

  ngAfterViewInit() {

    this.subscription = this.helpers.isAuthenticationChanged().pipe(

      startWith(this.helpers.isAuthenticated()),

      delay(0)).subscribe((value) =>

        this.authentication = value

      );

  }

  ngOnDestroy() {

    this.subscription.unsubscribe();

  }


}
