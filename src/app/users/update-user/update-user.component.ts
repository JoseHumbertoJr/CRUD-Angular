import { RequestUpdate } from './../user.model';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {


  id: string;
  request: RequestUpdate;

  constructor(private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(res => {
      this.request = {
        name: `${res.data.first_name} ${res.data.last_name}`,
        job: ''
      }
    });
  }
  atualizar(){
    this.userService.updateUser(this.id,this.request).subscribe(res => {
      alert(`Atualizado: ${res.updatedAt}, Nome: ${res.name}, Job: ${res.job}`)
    })
  }

}
