import {Component} from "@angular/core";
import {LoggedInCallback, UserLoginService, CognitoUtil, Callback} from "../../service/cognito.service";
import {Router} from "@angular/router";
import {AccountInfo, FilterByAccountTypePipe, accountData} from "../accountinfo";
import {TransactionInfo, transactionData} from "../transactioninfo";





@Component({
    selector: 'transactionfeed-control',
    templateUrl: './transactionfeed.html'
})

export class TransactionFeedComponent implements LoggedInCallback {

    public transactions: TransactionInfo[];
    public accounts: AccountInfo[];

    constructor(public router: Router, public userService: UserLoginService, public cognitoUtil: CognitoUtil) {
        this.userService.isAuthenticated(this);
        console.log("in TransactionFeedComponent");

    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (!isLoggedIn) {
            this.router.navigate(['/home/login']);
        } else {
		this.accounts = accountData;
		this.transactions = transactionData;

        }
    }
}
