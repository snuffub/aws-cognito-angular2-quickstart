import { Pipe, PipeTransform } from '@angular/core';
import {TransactionInfo} from "./transactioninfo";


@Pipe({name: 'FilterByAccountType'})

export class FilterByAccountTypePipe implements PipeTransform {
  transform(accounts: AccountInfo[], type: string) {
    return accounts.filter(account => account.AccountType === type);
  }
}

export class AccountInfo {
	public AccountName: string;
	public AccountType: string;
}

export const accountData: AccountInfo[] = [

	{AccountName: "Wells Fargo Savings", AccountType: "Bank"},
	{AccountName: "Wells Fargo Checking", AccountType: "Bank"},
	{AccountName: "Chase Shapire", AccountType: "Credit Card"},
	{AccountName: "Paypal", AccountType: "Merchant Data"},
	{AccountName: "e-Trade", AccountType: "Investments"},
	];
