import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as InformationAction from '../../store/actions';
import { Information } from 'src/app/shared/interfaces';
import { InformationSelectors } from 'src/app/store/services/information.selectors';
import { EntityState } from 'src/app/store/reducers';

@Component({
  selector: 'app-informations-edit',
  templateUrl: './informations-edit.component.html',
  styleUrls: ['./informations-edit.component.scss']
})
export class InformationsEditComponent implements OnInit, OnDestroy {

  informationForm = this.formBuilder.group({
    Id: [],
    Title: ['', Validators.required],
    Contents: ['', Validators.required]
  });

  information: Information;
  loading$: Observable<boolean>;
  sub: Subscription;

  constructor(
    private store: Store<EntityState>,
    private informationSelectors: InformationSelectors,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
    this.sub = this.informationSelectors.information$.subscribe(inf => {
      if (inf) {
        this.information = inf;
        this.informationForm.patchValue(this.information);
      }
    });
    this.loading$ = this.informationSelectors.loading$;
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('Id');
    this.store.dispatch(new InformationAction.GetInformation(id));
  }

  submit() {
    if (this.informationForm.valid) {
      const informationValue = { ...this.information, ...this.informationForm.value };
      this.store.dispatch(new InformationAction.UpdateInformation(informationValue));
      this.router.navigate(['/informations']);
    }
  }

  add(information: Information) {
    this.store.dispatch(new InformationAction.AddInformation(information));
  }

  delete(information: Information) {
    this.store.dispatch(new InformationAction.DeleteInformation(information));
  }

  update(information: Information) {
    this.store.dispatch(new InformationAction.UpdateInformation(information));
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
