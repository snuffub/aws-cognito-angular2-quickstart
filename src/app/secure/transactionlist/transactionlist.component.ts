import {Component, Input} from "@angular/core";
import {LoggedInCallback, UserLoginService, CognitoUtil, Callback} from "../../service/cognito.service";
import {Router} from "@angular/router";
import {TransactionInfo, transactionData} from "../transactioninfo"



@Component({
    selector: 'transaction-list',
    templateUrl: './transactionlist.html'
})

export class TransactionListComponent implements LoggedInCallback {
    @Input() transactionInfo: TransactionInfo[];

    constructor(public router: Router, public userService: UserLoginService, public cognitoUtil: CognitoUtil) {
        this.userService.isAuthenticated(this);
        console.log("in TransactionListControlComponent");

    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (!isLoggedIn) {
            this.router.navigate(['/home/login']);
        } else {
	    this.transactionInfo = transactionData;
        }
    }
}
