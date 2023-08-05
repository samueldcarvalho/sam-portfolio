import { Injectable } from "@angular/core"
import { ComponentType } from "@angular/cdk/portal";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { IDialogResult } from "../abstractions/modal-result";

@Injectable({ providedIn: "root" })
export class DialogService {
    /**
     *
     */
    constructor(private dialogService: MatDialog) {
    }

    openModal<TResult>(component: ComponentType<any>, data: any) : MatDialogRef<any, IDialogResult<TResult>> {
        return this.dialogService.open<any, any, IDialogResult<TResult>>(component, {
            panelClass: "custom-modal-box",
            data: data,
        })
    }
}