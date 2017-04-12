
export class TransactionInfo {
    public MerchantName: string;
    public VendorName: string;
    public Account: string;
    public ChargeDate: Date;
    public Amount: number;
    public Description: string;
    public Type: string;
    public Category: string;
}


export const transactionData: TransactionInfo[] = [

	{ MerchantName: "Fedex Kinkos", Amount: 80.24, VendorName: "Kinkos", ChargeDate: new Date("4/9/2017"), Description: "Flyers", Account: "Wells Fargo Checking", Category: "Life", Type: "Bank"},
	{ MerchantName: "Fedex Kinkos", Amount: 81.24, VendorName: "Kinkos", ChargeDate: new Date("4/9/2017"), Description: "Flyers", Account: "Chase Saphire", Category: "Life", Type: "Credit Card"},
	{ MerchantName: "Fedex Kinkos", Amount: 82.24, VendorName: "Kinkos", ChargeDate: new Date("4/9/2017"), Description: "Flyers", Account: "paypal", Category: "Life", Type: "E-Payment"},
	{ MerchantName: "Fedex Kinkos", Amount: 83.24, VendorName: "Kinkos", ChargeDate: new Date("4/9/2017"), Description: "Flyers", Account: "e-Trade", Category: "Life", Type: "Investments"},
	{ MerchantName: "Fedex Kinkos", Amount: 84.24, VendorName: "Kinkos", ChargeDate: new Date("4/9/2017"), Description: "Flyers", Account: "Paypal", Category: "Life", Type: "Merchant Data"},
	{ MerchantName: "Fedex Kinkos", Amount: 85.24, VendorName: "Kinkos", ChargeDate: new Date("4/9/2017"), Description: "Flyers", Account: "Wells Fargo Checking", Category: "Life", Type: "Bank"},
	{ MerchantName: "Fedex Kinkos", Amount: 86.24, VendorName: "Kinkos", ChargeDate: new Date("4/9/2017"), Description: "Flyers", Account: "Wells Fargo Savings", Category: "Life", Type: "Bank"},
	{ MerchantName: "Fedex Kinkos", Amount: 87.24, VendorName: "Kinkos", ChargeDate: new Date("4/9/2017"), Description: "Flyers", Account: "Chase Saphire", Category: "Life", Type: "Credit Card"},
	];
