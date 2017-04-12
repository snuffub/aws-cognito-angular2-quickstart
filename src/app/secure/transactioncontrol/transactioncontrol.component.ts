import {Component, Input} from "@angular/core";
import {LoggedInCallback, UserLoginService, CognitoUtil, Callback} from "../../service/cognito.service";
import {Router} from "@angular/router";
import {TransactionInfo} from "../transactioninfo"



@Component({
    selector: 'transaction-control',
    templateUrl: './transactioncontrol.html'
})

export class TransactionControlComponent implements LoggedInCallback {
    @Input() transactionInfo: TransactionInfo;

    constructor(public router: Router, public userService: UserLoginService, public cognitoUtil: CognitoUtil) {
        this.userService.isAuthenticated(this);
        console.log("in TransactionControlComponent");

    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (!isLoggedIn) {
            this.router.navigate(['/home/login']);
        } else {
		this.transactionInfo = new TransactionInfo();
            this.transactionInfo.MerchantName = "Amazon Merchant Svcs.";
 
	    this.transactionInfo.Amount = 45.34;
	    this.transactionInfo.VendorName = "Amazon";
	    this.transactionInfo.ChargeDate = new Date("4/10/2016");

	    this.transactionInfo.Description = "Car fresheners";
	    this.transactionInfo.Account = "Office Equipment";
        }
    }
}
