import {Component, OnInit} from '@angular/core';
import { GetClinic } from '../../../product/services/get-clinic.service';
import { Clinic } from '../../../product/modals/clinic';
import * as applicationUtils from '../../../product/utils/application.utils';
import { Branch } from '../../../product/modals/branch';
import { GetBranches } from '../../../product/services/get-branches.service';
import { AuthenticateService } from '../../../product/services/authenticate.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/Auth.service';
import { AlertService } from '../../services/Alert.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    private clinics: Clinic[] = [];
    private selectedClinic: Clinic;
    private filteredClinics: Clinic[] = [];

    private branches: Branch[]=[];
    private selectedBranch: Branch;
    private filteredBranches: Branch[] = [];

    private userName: string;
    private password: string;

    constructor(
        private getClinic: GetClinic,
        private getBranches: GetBranches,
        private authenticateService: AuthenticateService,
        public router: Router,
        private authService: AuthService,
        private alertService: AlertService
    ) {
    }

    ngOnInit() {
        this.getClinic.get().subscribe((response) => {
            if(response) this.clinics = response.data;
            this.filteredClinics = [...this.clinics]
        })
    }

    onFilterClinic(event) {
        this.filteredClinics = [];
        for(let i = 0; i < this.clinics.length; i++) {
            let clinic = this.clinics[i];
            if(clinic.name.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredClinics.push(clinic);
            }
        }
    }

    onClinicSelection(value) {
        this.getBranchesByClinicId(this.selectedClinic.code)
    }

    getBranchesByClinicId(code) {
        this.getBranches.get(null, code)
        .subscribe((response) => {
            if(response) this.branches = response.data;
            this.filteredBranches = [...this.branches]
        })
    }

    onBranchSelection(value) {

    }
 
    onFilterBranch(event) {
        this.filteredBranches = [];
        for(let i = 0; i < this.branches.length; i++) {
            let branch = this.branches[i];
            if(branch.name.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredBranches.push(branch);
            }
        } 
    }

    login() {
        const requestBody = {username: this.userName, password: this.password, clinic: this.selectedClinic, branchs: [this.selectedBranch]};
        this.authenticateService.create(requestBody).
        subscribe((response) => {
           if(response && response.token) localStorage.setItem('token', response.token);
           this.alertService.success('Login Successfully', 'Login Successfully');
           this.router.navigate(['/calendar']);
        }, (error) => {
            this.alertService.error('Login Failed', JSON.parse(error.error).message);
        })
    }

}
