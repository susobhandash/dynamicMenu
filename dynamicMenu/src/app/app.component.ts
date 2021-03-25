import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamicMenu';
  gridData = [];
  loading = false;
  selectedRowId = 0;
  column = [
    {name: "Id", field: "id", width: 10},
    {name: "Name", field: "name", width: 10},
    {name: "Email", field: "email", width: 10},
    {name: "Body", field: "body", width: 10}
  ];

  ngOnInit() {
    this.loading = true;
    this.getGridData();
  }

  getGridData() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.gridData = json;
      this.loading = false;
    });
  }

  menuClicked(id) {
    let res = this.gridData.filter(el => {return el.id === id})[0];
    alert(res['id'] +': '+ res['body']);
  }
}
