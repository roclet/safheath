import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payfast-donation',
  templateUrl: './payfast-donation.component.html',
  styleUrls: ['./payfast-donation.component.scss'],
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatButtonModule,MatDialogModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PayfastDonationComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  donationForm: FormGroup;
  showRecurringOptions = false;

  constructor(private fb: FormBuilder) {
    this.donationForm = this.fb.group({
      cmd: ['_paynow'],
      receiver: ['15166217', [Validators.required, Validators.pattern('[0-9]+')]],
      item_name: ['Safthealth', Validators.required],
      reference: ['SafthealthDonation', Validators.required],
      subscription_type: ['1', Validators.required],
      recurring_amount: ['100'],
      cycles: ['1', Validators.pattern('[0-9]+')],
      frequency: ['3', Validators.pattern('[0-9]+')],
      amount: ['100', [Validators.required, Validators.min(1)]],
      return_url: ['http://safertbl.com'],
      cancel_url: ['http://safertbl.com'],
    });

    this.donationForm.get('item_name')?.valueChanges.subscribe(value => {
      this.updateReference(value);
    });

    this.donationForm.get('subscription_type')?.valueChanges.subscribe(value => {
      this.showRecurringOptions = value === '1';
    });
  }

  updateReference(donationPurpose: string) {
    const reference = donationPurpose === 'Safthealth' ? 'SafthealthDonation' : 'SaferTblGifts';
    this.donationForm.patchValue({ reference });
  }

  submitForm() {
    if (this.donationForm.valid) {
      const formElement = document.createElement('form');
      formElement.action = 'https://payment.payfast.io/eng/process';
      formElement.method = 'post';

      Object.entries(this.donationForm.value).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value as string;
        formElement.appendChild(input);
      });

      document.body.appendChild(formElement);
      formElement.submit();
    }
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAnimationsExampleDialog {
}
