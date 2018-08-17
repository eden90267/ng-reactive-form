import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {forbiddenNameValidator} from '../forbidden-name.directive';
import {identityRevealedValidator} from '../identity-revealed.directive';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = [
    'Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'
  ];
  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};
  heroForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i) // Here's how you pass in the custom validator.
      ]),
      'alterEgo': new FormControl(this.hero.alterEgo),
      'power': new FormControl(this.hero.power, Validators.required)
    }, {validators: identityRevealedValidator});
  }

  get name() {
    return this.heroForm.get('name');
  }

  get power() {
    return this.heroForm.get('power');
  }

}
