import { Component, OnInit } from '@angular/core';
import { PatientDetail } from '../../modals/patient';
import { Address } from '../../modals/address';
import { AppointmentDetails } from '../../modals/appointment';
import { ConsultantDetails } from '../../modals/consultant';
import { PatientData } from '../../modals/patientdata';
import { TriStateCheckbox } from 'primeng/primeng';
import { PatientService } from '../../services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { StatesService } from '../../services/states.service';
import { CitiesService } from '../../services/cities.service';
@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})

export class PatientDetailsComponent implements OnInit {

  private patient: PatientDetail = new PatientDetail(); 
  
  private address: Address = new Address();

  private appointmentDetails: AppointmentDetails = new AppointmentDetails();
  
  private consultant: ConsultantDetails = new ConsultantDetails();

  private patientData: PatientData = new PatientData();

  private consultantList: ConsultantDetails[] = [];

  private filteredConsultantList: ConsultantDetails[] = [];

  private filteredCountries: any[] = [];

  private countries: any [] = [];

  private states: any[] = [];

  private filteredStates: any[] = [];

  private cities: any[] = [];

  private filteredCities: any[] = [];

  private patientId: string;
  
  loading:boolean = false;


  genders = [
    { value: '', label: 'Gender' },
    { value: 'm', label: 'Male' },
    { value: 'f', label: 'Female' },
    { value: 'o', label: 'Others' }
  ];

  bloodGroups = [
    { value: '', label: 'Blood Group' },
    { value: 'ab+', label: 'AB+' },
    { value: 'ab-', label: 'AB-' },
    { value: 'b+', label: 'B+' },
    { value: 'b-', label: 'B-' },
    { value: 'a+', label: 'A+' },
    { value: 'a-', label: 'A-' },
    { value: 'o+', label: 'O+' },
    { value: 'o-', label: 'O-' },
  ];

  languages = [
    { value: '', label: 'Preferred Language' },
    { value: 'english', label: 'English' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'gujarati', label: 'Gujarati' },

  ];
  
  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private countriesService: CountriesService,
    private stateService: StatesService,
    private citiesService: CitiesService,
    public router: Router,
  ) { 

  }

  ngOnInit() { 
    this.route.paramMap.subscribe(params => {
      this.patientId = params.get('id');
      if (this.patientId) this.getPatientById();
    });

    this.getCountries();
    this.getStates();
  }

  private getCountries() {
    this.countriesService.get().subscribe((countries) => {
      this.countries = countries['data'];
      this.address.country = this.countries.filter(country => country.id === 105)[0];
    })
  }

  private getStates() {
    this.stateService.get({countryId: 105}, '/byCountryId').subscribe((states) => {
      this.states = states['data'];
      this.filteredStates =  states['data'];
    })
  }

  getCitiesByStateId(event) {
    this.citiesService.get({stateId: event.id}, '/byStateId').subscribe((cities) => {
      this.cities = cities['data'];
      this.filteredCities = cities['data'];
    })
  }

  private filterStates(event): any[] {
    this.filteredStates = [];
    return this.filteredStates = this.states.filter(state => state.name.indexOf(event.query) > -1 )
  }

  private filterCities(event): any[] {
    this.filteredCities = [];
    return this.filteredCities = this.cities.filter(city => city.name.indexOf(event.query) > -1 )
  }  

  getPatientById() {
    this.patientService.get({id: this.patientId}, '/byId').subscribe((patient) => {
      this.patient = patient.patientDetail;
      this.address = patient.addressDetail;
      this.appointmentDetails = patient.appointmentDetail;
    })
  }

  savePatientDetails() {
    this.patientData.patientDetail = this.patient;
    this.patientData.addressDetail = this.address && this.address.street? this.address: null;
    this.patientData.appointmentDetail = this.appointmentDetails;

    this.patientService.create(this.patientData, null,'/save').subscribe((response) => {
      if(response) this.router.navigate(['/patient']);
    })
  }
}
