import {Injectable} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {Size} from 'ngx-spinner/lib/ngx-spinner.enum';

@Injectable({
    providedIn: 'root'
})
export class SpinnerService {

    showLoading = false;

    constructor(private spinner: NgxSpinnerService) {
    }

    show(name: string = undefined,
         type: string = 'ball-triangle-path',
         size: Size = 'medium',
         bdColor: string = 'rgba(0, 0, 0, 0.8)',
         color: string = '#fff',
         fullScreen: boolean = true
    ) {
        this.spinner.show(name,
            {
                type,
                size,
                bdColor,
                color,
                fullScreen
            });
    }

    hide() {
        this.spinner.hide();
    }

    set setShowLoading(param: boolean) {
        this.showLoading = param;
    }

    get getShowLoading() {
        return this.showLoading;
    }

}
