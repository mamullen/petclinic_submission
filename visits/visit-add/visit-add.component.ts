/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */

/**
 * @author Vitaliy Fedoriv
 */

import {Component, OnInit} from '@angular/core';
import {Visit} from '../visit';
import {VisitService} from '../visit.service';
import {Router, ActivatedRoute} from '@angular/router';
import {PetService} from '../../pets/pet.service';
import {Pet} from '../../pets/pet';
import {PetType} from '../../pettypes/pettype';
import {Owner} from '../../owners/owner';
import {Vet} from '../../vets/vet';
import {VetService} from '../../vets/vet.service';

import * as moment from 'moment';

@Component({
  selector: 'app-visit-add',
  templateUrl: './visit-add.component.html',
  styleUrls: ['./visit-add.component.css']
})
export class VisitAddComponent implements OnInit {

  visit: Visit;
  time_sched:string[];
  current_pet: Pet;
  current_vet:Vet;
  current_owner: Owner;
  current_pet_type: PetType;
  added_success: boolean = false;
  vets: Vet[];
  errorMessage: string;

  constructor(private visitService: VisitService, private vetService: VetService, private petService: PetService, private router: Router, private route: ActivatedRoute) {
    this.visit = <Visit>{};
    this.vets = [];
    this.time_sched=["9:00am", "10:00am", "11:00am"];
    this.current_vet=<Vet>{};
    // this.current_vet.schedule={};
    this.current_pet = <Pet>{};
    this.current_owner = <Owner>{};
    this.current_pet_type = <PetType>{};
   

  }

  ngOnInit() {
    console.log(this.route.parent);
    const petId = this.route.snapshot.params['id'];
    this.petService.getPetById(petId).subscribe(
      response => {
        this.current_pet = response;
        this.visit.pet = this.current_pet;
        this.current_pet_type = this.current_pet.type;
        this.current_owner = this.current_pet.owner;
      },
      error => this.errorMessage = <any> error);

      this.vetService.getVets().subscribe(
      vets => this.vets = vets,
      error => this.errorMessage = <any> error);
  }

  onSubmit(visit: Visit) {
    visit.id = null;
    var that = this;

    // format output from datepicker to short string yyyy/mm/dd format
    visit.date = moment(visit.date).format('YYYY/MM/DD');

    if(this.editSchedule(visit.vet, visit.date, visit.time, this.current_pet.id)){
      this.visitService.addVisit(visit).subscribe(
        new_visit => {
          this.visit = new_visit;
          this.added_success = true;
          that.gotoOwnerDetail();
        },
        error => this.errorMessage = <any>error
      );
    }else{
      alert("That Doctor is not available on " + visit.date + " at " + visit.time);
    }
  }
  gotoOwnerDetail() {
    this.router.navigate(['/owners', this.current_owner.id]);
  }


  editSchedule(vet:Vet, day:string, time:string, pet:number): boolean {
  //TODO: connect schedule to vet and vet backend
    var sched:{[id:string]:number;} = {};
    sched[day+"10:00am"]=pet;

    if(!((day+time) in sched)){
      sched[day+time]=pet;
      return true;
    }
    return false;
   }
}
