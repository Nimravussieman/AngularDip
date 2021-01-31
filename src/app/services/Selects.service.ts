import { Injectable, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { AddressType, CompanyType, Contact, ContactSource, ContactType, DetailsType, EmailType, MessangerUrlType, NotificationType, OperationType, PhoneType, UrlType } from '../Models/_models';

@Injectable()
export class SelectsService {

    private url = "/authorize/selects";
    selectsLib = null;
    observableLib: Observable<any>;
    public AddressType: AddressType[] = null;
    public CompanyType: CompanyType[] = null;
    public ContactType: ContactType[] = null;
    public DetailsType: DetailsType[] = null;
    public EmailType: EmailType[] = null;
    public NotificationType: NotificationType[] = null;
    public OperationType: OperationType[] = null;
    public PhoneType: PhoneType[] = null;
    public UrlType: UrlType[] = null;
    public MessangerUrlType: MessangerUrlType[] = null;
    public ContactSources: ContactSource[] = null;

    constructor(private http: HttpClient) { this.getSelects(); }

    getSelects() {
        if (this.selectsLib == null)
            this.observableLib = this.http.get(this.url);
        this.observableLib.subscribe(response => {
            //console.log(response);

            this.selectsLib = response;
            this.AddressType = response["addressType"];
            this.CompanyType = response["companyType"];
            this.ContactType = response["contactType"];
            this.DetailsType = response["detailsType"];
            this.EmailType = response["emailType"];
            this.NotificationType = response["notificationType"];
            this.OperationType = response["operationType"];
            this.PhoneType = response["phoneType"];
            this.UrlType = response["urlType"];
            this.MessangerUrlType = response["messangerUrlType"];
            this.ContactSources = response["contactSources"];
        });
    }
    public someObjectData: SomeObjectData;
    public contact: Contact;
    get Contact() {
        const contact = this.contact;
        this.contact = null;
        return contact;
    }
}

@Injectable()
export class SomeObjectData {
    previousRoute?: string;
    data?: any;
    description: string;
    typeData?: any;
    searchString: string;
    pageNumber: number;
    pageSize: number;

}































    // private url = "/authorize/";



























                // getAddressType() {
    //     if (this.AddressType == null) this.http.get(this.url + "AddressType").subscribe(response => this.AddressType = response["value"]);
    // }
    // getCompanyType() {
    //     if (this.CompanyType == null) this.http.get(this.url + "CompanyType").subscribe(response => this.CompanyType = response["value"]);
    // }
    // getContactType() {
    //     if (this.ContactType == null) this.http.get(this.url + "ContactType").subscribe(response => this.ContactType = response["value"]);
    // }
    // getDetailsType() {
    //     if (this.DetailsType == null) this.http.get(this.url + "DetailsType").subscribe(response => this.DetailsType = response["value"]);
    // }
    // getEmailType() {
    //     if (this.EmailType == null) this.http.get(this.url + "EmailType").subscribe(response => this.EmailType = response["value"]);
    // }
    // getNotificationType() {
    //     if (this.NotificationType == null) this.http.get(this.url + "NotificationType").subscribe(response => this.NotificationType = response["value"]);
    // }
    // getOperationType() {
    //     if (this.OperationType == null) this.http.get(this.url + "OperationType").subscribe(response => this.OperationType = response["value"]);
    // }
    // getPhoneType() {
    //     if (this.PhoneType == null) this.http.get(this.url + "PhoneType").subscribe(response => this.PhoneType = response["value"]);
    // }
    // getUrlType() {
    //     if (this.UrlType == null) this.http.get(this.url + "UrlType").subscribe(response => this.UrlType = response["value"]);
    // }
    // getMessangerUrlType() {
    //     if (this.MessangerUrlType == null) this.http.get(this.url + "MessangerUrlType").subscribe(response => this.MessangerUrlType = response["value"]);
    // }

