import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {UserRegistrationService, UserLoginService, UserParametersService, CognitoUtil} from "./service/cognito.service";
import {routing} from "./app.routes";
import {HomeComponent, AboutComponent, HomeLandingComponent} from "./public/home.component";
import {AwsUtil} from "./service/aws.service";
import {UseractivityComponent} from "./secure/useractivity/useractivity.component";
import {MyProfileComponent} from "./secure/profile/myprofile.component";
import {SecureHomeComponent} from "./secure/landing/securehome.component";
import {FeedsHomeComponent} from "./secure/feedshome/feedshome.component";
import {JwtComponent} from "./secure/jwttokens/jwt.component";
import {DynamoDBService} from "./service/ddb.service";
import {TransactionControlComponent} from "./secure/transactioncontrol/transactioncontrol.component";
import {LoginComponent} from "./public/auth/login/login.component";
import {TransactionFeedComponent} from "./secure/transactionfeed/transactionfeed.component";
import {TransactionListComponent} from "./secure/transactionlist/transactionlist.component";
import {RegisterComponent} from "./public/auth/register/registration.component";
import {ForgotPasswordStep1Component, ForgotPassword2Component} from "./public/auth/forgot/forgotPassword.component";
import {LogoutComponent, RegistrationConfirmationComponent} from "./public/auth/confirm/confirmRegistration.component";
import {ResendCodeComponent} from "./public/auth/resend/resendCode.component";
import {FilterByAccountTypePipe} from "./secure/accountinfo";

@NgModule({
    declarations: [
        LoginComponent,
        LogoutComponent,
        RegistrationConfirmationComponent,
        ResendCodeComponent,
        ForgotPasswordStep1Component,
        ForgotPassword2Component,
        RegisterComponent,
        AboutComponent,
        HomeLandingComponent,
        HomeComponent,
        UseractivityComponent,
        MyProfileComponent,
        SecureHomeComponent,
        FeedsHomeComponent,
        TransactionFeedComponent,
	TransactionListComponent,
	AppComponent,
        TransactionControlComponent,
        JwtComponent,
	FilterByAccountTypePipe,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [
        CognitoUtil,
        AwsUtil,
        DynamoDBService,
        UserRegistrationService,
        UserLoginService,
        UserParametersService,
	FilterByAccountTypePipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}
