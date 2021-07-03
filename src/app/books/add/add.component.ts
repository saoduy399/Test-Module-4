import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ReadingServiceService} from "../../services/reading-service.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formAdd: FormGroup | undefined

  constructor(private route: Router,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private readingService: ReadingServiceService) { }

  ngOnInit(): void {
    this.formAdd = this.fb.group({
      id:[],
      name:[],
      read:[],
    });
  }

  submit(){
    // @ts-ignore
    const book = this.formAdd.value
    this.readingService.addBook(book);
    alert('them thanh cong!')
    this.route.navigate([''])
  }

}
