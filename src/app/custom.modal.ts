import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class CustomModalContext extends BSModalContext {
  public title: string;
  public image: string;
  public content: string;
}

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
@Component({
  selector: 'modal-content',
  styles: [
    `
        .custom-modal-container {
            padding: 15px;
            background-color: rgba(17,17,17,0.659);
        }
        .custom-modal-header {
            font-size: 24px;
            font-family: "Roboto";
            color: rgb(253, 254, 254);
            text-transform: uppercase;
        }
    `,
  ],
  //TODO: [ngClass] here on purpose, no real use, just to show how to workaround ng2 issue #4330.
  // Remove when solved.
  /* tslint:disable */ template: `
        <div class="container-fluid custom-modal-container">
            <div class="row custom-modal-header">
                <div class="col-sm-12">
                    <h1>{{context.title}}</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <img style="max-width: 100%;" src="assets/{{context.image}}" />
                    <p style="margin-top:2%; font-size: 1.2em">{{context.content}}</p>
                </div>
            </div>
        </div>`,
})
export class CustomModal implements CloseGuard, ModalComponent<CustomModalContext> {
  context: CustomModalContext;

  constructor(public dialog: DialogRef<CustomModalContext>) {
    this.context = dialog.context;
  }

  beforeDismiss(): boolean {
    return true;
  }
}
