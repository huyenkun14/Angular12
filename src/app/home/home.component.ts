import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public name = 'Huyền';
  public age = 20;
  public name2 = 'Khánh Huyền';

  public submit(): void {
    console.log('Bạn đã đăng kí thành công.')
  }
}
