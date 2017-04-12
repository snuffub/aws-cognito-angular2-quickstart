import {Component} from "@angular/core";
import {LoggedInCallback, UserLoginService, CognitoUtil, Callback} from "../../service/cognito.service";
import {Router} from "@angular/router";


export class Stuff {
    public accessToken: string;
    public idToken: string;
}

@Component({
    selector: 'awscognito-angular2-app',
    templateUrl: './feedshome.html'
})
export class FeedsHomeComponent implements LoggedInCallback {

    public stuff: Stuff = new Stuff();

    constructor(public router: Router, public userService: UserLoginService, public cognitoUtil: CognitoUtil) {
        this.userService.isAuthenticated(this);
        console.log("in FeedsHomeComponent");

    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (!isLoggedIn) {
            this.router.navigate(['/home/login']);
        } else {
            this.cognitoUtil.getAccessToken(new AccessTokenCallback(this));
            this.cognitoUtil.getIdToken(new IdTokenCallback(this));
        }
    }
}

export class AccessTokenCallback implements Callback {
    constructor(public feedshome: FeedsHomeComponent) {

    }

    callback() {

    }

    callbackWithParam(result) {
        this.feedshome.stuff.accessToken = result;
    }
}

export class IdTokenCallback implements Callback {
    constructor(public feedshome: FeedsHomeComponent) {

    }

    callback() {

    }

    callbackWithParam(result) {
        this.feedshome.stuff.idToken = result;
    }
}
