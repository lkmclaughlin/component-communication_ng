import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent {
  @Input()
  menu: any;

// *How to do an injectable service
//  studentService:StudentService;
//  constructor(private studentervice: StudentService) {}

  ngOnInit(): void {
    console.log("Executed within ngOnInit")
  }

}

