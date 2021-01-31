//module objects {
    export class Account {
        public id?: number;
        public name?: string;
        public currency?: Currency;
        public products?: Product[];
        public projects?: Project[];
        public jobs?: Job[];
        public companies?: Company[];
        public imageLogo?: image;
        public fieldOfActivities?: string[];
        public phones?: Phone[];
        public emails?: Email[];
        public sites?: Url[];
        public messangerUrls?: MessangerUrl[];
        public contacts?: Contact[];
        public addresses?: Address[];
        public employees?: Employe[];
        public details?: Details[];
        public bankDetails?: BankDetails[];
        public description?: string;
        public stringFields?: StringField[];
        public numericFields?: NumericField[];
        public dateTimeFields?: DateTimeField[];
        //public urlsFields?: Url[];
        public fileFields?: FileField[];
        public imageFields?: ImageField[];
        public booleanFields?: BooleanField[];
        public operations?: Operation[];
        public permissions?: AccountCompanyFieldsPermissions;
        constructor(
             id?: number,
             name?: string,
             currency?: Currency,
             products?: Product[],
             projects?: Project[],
             jobs?: Job[],
             companies?: Company[],
             imageLogo?: image,
             fieldOfActivities?: FieldOfActivity[],
             phones?: Phone[],
             emails?: Email[],
             sites?: Url[],
             messangerUrls?: MessangerUrl[],
             contacts?: Contact[],
             addresses?: Address[],
             employees?: Employe[],
             details?: Details[],
             bankDetails?: BankDetails[],
             description?: string,
             stringFields?: StringField[],
             numericFields?: NumericField[],
             dateTimeFields?: DateTimeField[],
             //urlsFields?: Url[],
             fileFields?: FileField[],
             imageFields?: ImageField[],
             booleanFields?: BooleanField[],
             operations?: Operation[],
             permissions?: AccountCompanyFieldsPermissions,
        ) { }
    }
    export class AccountCompanyFieldsPermissions {
        public id: number;
        public is: boolean;
        public currencyIsPublic: boolean;
        public currencyIsVisible: boolean;
        public productsIsPublic: boolean;
        public productssVisible: boolean;
        public projectsIsPublic: boolean;
        public projectssVisible: boolean;
        public jobsIsPublic: boolean;
        public jobssVisible: boolean;
        public companiesIsPublic: boolean;
        public companiessVisible: boolean;
        public imageLogoIsPublic: boolean;
        public imageLogosVisible: boolean;
        public fieldOfActivitiesIsPublic: boolean;
        public fieldOfActivitiessVisible: boolean;
        public phonesIsPublic: boolean;
        public phonessVisible: boolean;
        public emailsIsPublic: boolean;
        public emailssVisible: boolean;
        public sitesIsPublic: boolean;
        public sitessVisible: boolean;
        public messangerUrlsIsPublic: boolean;
        public messangerUrlssVisible: boolean;
        public contactsIsPublic: boolean;
        public contactssVisible: boolean;
        public addressesIsPublic: boolean;
        public addressessVisible: boolean;
        public employeesIsPublic: boolean;
        public employeessVisible: boolean;
        public detailsIsPublic: boolean;
        public detailssVisible: boolean;
        public bankDetailsIsPublic: boolean;
        public bankDetailssVisible: boolean;
        public descriptionIsPublic: boolean;
        public descriptionsVisible: boolean;
        public stringFieldsIsPublic: boolean;
        public stringFieldssVisible: boolean;
        public numericFieldsIsPublic: boolean;
        public numericFieldssVisible: boolean;
        public dateTimeFieldsIsPublic: boolean;
        public dateTimeFieldssVisible: boolean;
        public urlsFieldsIsPublic: boolean;
        public urlsFieldssVisible: boolean;
        public fileFieldsIsPublic: boolean;
        public fileFieldssVisible: boolean;
        public imageFieldsIsPublic: boolean;
        public imageFieldssVisible: boolean;
        public booleanFieldsIsPublic: boolean;
        public booleanFieldssVisible: boolean;
        public operationsIsPublic: boolean;
        public operationssVisible: boolean;
        public permissionsIsPublic: boolean;
        public permissionssVisible: boolean;
        constructor(
             id: number,
             is: boolean,
             currencyIs: boolean,
             currencyIsVisible: boolean,
             productsIs: boolean,
             productssVisible: boolean,
             projectsIs: boolean,
             projectssVisible: boolean,
             jobsIs: boolean,
             jobssVisible: boolean,
             companiesIs: boolean,
             companiessVisible: boolean,
             imageLogoIs: boolean,
             imageLogosVisible: boolean,
             fieldOfActivitiesIs: boolean,
             fieldOfActivitiessVisible: boolean,
             phonesIs: boolean,
             phonessVisible: boolean,
             emailsIs: boolean,
             emailssVisible: boolean,
             sitesIs: boolean,
             sitessVisible: boolean,
             messangerUrlsIs: boolean,
             messangerUrlssVisible: boolean,
             contactsIs: boolean,
             contactssVisible: boolean,
             addressesIs: boolean,
             addressessVisible: boolean,
             employeesIs: boolean,
             employeessVisible: boolean,
             detailsIs: boolean,
             detailssVisible: boolean,
             bankDetailsIs: boolean,
             bankDetailssVisible: boolean,
             descriptionIs: boolean,
             descriptionsVisible: boolean,
             stringFieldsIs: boolean,
             stringFieldssVisible: boolean,
             numericFieldsIs: boolean,
             numericFieldssVisible: boolean,
             dateTimeFieldsIs: boolean,
             dateTimeFieldssVisible: boolean,
             urlsFieldsIs: boolean,
             urlsFieldssVisible: boolean,
             fileFieldsIs: boolean,
             fileFieldssVisible: boolean,
             imageFieldsIs: boolean,
             imageFieldssVisible: boolean,
             booleanFieldsIs: boolean,
             booleanFieldssVisible: boolean,
             operationsIs: boolean,
             operationssVisible: boolean,
             permissionsIs: boolean,
             permissionssVisible: boolean,

        ) { }
    }
    export class Address {
        public id?: number;
        public value?: string;
        //public description?: string;
        public type?: string;
        constructor(
             id?: number,
             value?: string,
             //description?: string,
             addressType?: AddressType,
        ) { }
        // public constructor(init?:Partial<Address>) {
        //     Object.assign(this, init);
        // }
    }
    export class AddressType {
        public id?: number;
        public name?: string;
        constructor(
             id?: number,
             name?: string,
        ) { }
    }
    export class BankDetails {
        public id?: number;
        public name?: string;
        public nameOfTheBank?: string;//Найменування банку
        public mFO?: number;//МФО  // 6-значний код, який використовується для ідентифікації банківських установ в Україні.
        public currentAccount?: number; //Розрахунковий рахунок
        public iBAN?: string;//International Bank Account Number  
        public comment?: string;
        constructor(
             id?: number,
             name?: string,
             nameOfTheBank?: string,//Найменування банку
             mFO?: number, //МФО  // 6-значний код, який використовується для ідентифікації банківських установ в Україні.
             currentAccount?: number, //Розрахунковий рахунок
             iBAN?: string,//International Bank Account Number  
            //Формат коду IBAN?:
            //1-2 символ — код країни(за стандартом ISO 3166-1 alpha-2), де розташований банк, який обслуговує відповідний IBAN
            //3-4 символ — контрольне число, що розраховується за алгоритмом MOD 97-10 (відповідно до стандарту ISO 7064)
            //5-34 символ — внутрішньодержавний номер рахунку(англ.Basic Bank Account Number — BBAN), що містить як власне номер рахунку, так і ознаку банку, який його обслуговує.Детальний зміст цієї частини визначається кожною країною, яка розробляє свій національний формат коду.
            //Довжина IBAN не може перевищувати 34 знаки.
             comment?: string,
        ) { }
    }
    export class BooleanField {
        public id?: number;
        public name?: string;
        public value?: boolean;
        //public description?: string;
        constructor(
             id?: number,
             name?: string,
             value?: boolean,
             //description?: string,
        ) { }
    }
    export class Category {
        public id?: number;
        public name?: string;
        public description?: string;
        constructor(
             id?: number,
             name?: string,
             description?: string,
        ) { }
    }
    export class Company {
        public id?: number;
        public name?: string;
        public imageLogo?: image;
        public type?: string;
        public fieldOfActivities?: string[];
        public phones?: Phone[];
        public emails?: Email[];
        public sites?: Url[];
        public messangerUrls?: MessangerUrl[];
        public contacts?: Contact[];
        public addresses?: Address[];
        public employees?: Employe[];
        public details?: Details[];
        public bankDetails?: BankDetails[];
        public description?: string;
        public stringFields?: StringField[];
        public numericFields?: NumericField[];
        public dateTimeFields?: DateTimeField[];
        //public urlsFields?: Url[];
        public fileFields?: FileField[];
        public imageFields?: ImageField[];
        public booleanFields?: BooleanField[];
        public permissions?: CompanyFieldsPermissions;
        constructor(
             id?: number,
             name?: string,
             imageLogo?: image,
             type?: string,
             fieldOfActivities?: string[],
             phones?: Phone[],
             emails?: Email[],
             sites?: Url[],
             messangerUrls?: MessangerUrl[],
             contacts?: Contact[],
             addresses?: Address[],
             employees?: Employe[],
             details?: Details[],
             bankDetails?: BankDetails[],
             description?: string,
             stringFields?: StringField[],
             numericFields?: NumericField[],
             dateTimeFields?: DateTimeField[],
             //urlsFields?: Url[],
             fileFields?: FileField[],
             imageFields?: ImageField[],
             booleanFields?: BooleanField[],
             permissions?: CompanyFieldsPermissions,
        ) { }
    }
    export class CompanyFieldsPermissions {
        public id?: number;
        public isPublic?: boolean;
        public phonesIsPublic?: boolean;
        public emailsIsPublic?: boolean;
        public sitesIsPublic?: boolean;
        public messangerUrlsIsPublic?: boolean;
        public contactsIsPublic?: boolean;
        public addressesIsPublic?: boolean;
        public employeesIsPublic?: boolean;
        public detailsIsPublic?: boolean;
        public bankDetailsIsPublic?: boolean;
        public descriptionIsPublic?: boolean;
        public stringFieldsIsPublic?: boolean;
        public numericFieldsIsPublic?: boolean;
        public dateTimeFieldsIsPublic?: boolean;
        public urlsFieldsIsPublic?: boolean;
        public fileFieldsIsPublic?: boolean;
        public permissionsIsPublic?: boolean;
        public booleanFieldsIsPublic?: boolean;
        constructor(
             id?: number,
             is?: boolean,
             phonesIs?: boolean,
             emailsIs?: boolean,
             sitesIs?: boolean,
             messangerUrlsIs?: boolean,
             contactsIs?: boolean,
             addressesIs?: boolean,
             employeesIs?: boolean,
             detailsIs?: boolean,
             bankDetailsIs?: boolean,
             descriptionIs?: boolean,
             stringFieldsIs?: boolean,
             numericFieldsIs?: boolean,
             dateTimeFieldsIs?: boolean,
             urlsFieldsIs?: boolean,
             fileFieldsIs?: boolean,
             permissionsIs?: boolean,
             booleanFieldsIsPublic?: boolean,
        ) { }
    }
    export class CompanyType {
        public id?: number;
        public name?: string;
        constructor(
             id?: number,
             name?: string,
        ) { }
    }
    export class Contact {
        public id?: number;
        public name?: Username;
        public photo?: image;
        public dateOfBirth?: Date;
        public position?: string;
        public fieldOfActivities?: string[];
        public phones?: Phone[];
        public emails?: Email[];
        public sites?: Url[];
        public messangerUrls?: MessangerUrl[];
        public relatedCompanies?: Company[];
        public addresses?: Address[];
        public details?: Details[];
        public type?: string;
        public source?: string;
        public description?: string;
        public permissions?: ContactFieldsPermissions;
        constructor(
             id?: number,
             name?: Username,
             photo?: image,
             dateOfBirth?: Date,
             position?: string,
             phones?: Phone[],
             emails?: Email[],
             sites?: Url[],
             messangerUrls?: MessangerUrl[],
             relatedCompanies?: Company[],
             addresses?: Address[],
             details?: Details[],
             type?: string,
             source?: string,
             description?: string,
             contactFieldsPermissions?: ContactFieldsPermissions
        ) { }
    }
    export class ContactFieldsPermissions {
        public id?: number;
        public isPublic?: boolean;
        public photoIsPublic?: boolean;
        public dateOfBirthIsPublic?: boolean;
        public positionIsPublic?: boolean;
        public phonesIsPublic?: boolean;
        public emailsIsPublic?: boolean;
        public sitesIsPublic?: boolean;
        public messangerUrlsIsPublic?: boolean;
        public companiesIsPublic?: boolean;
        public addressesIsPublic?: boolean;
        public detailsIsPublic?: boolean;
        public contactTypeIsPublic?: boolean;
        public contactSourceIsPublic?: boolean;
        public descriptionIsPublic?: boolean;
        constructor(
             id?: number,
             is?: boolean,
             photoIs?: boolean,
             dateOfBirthIs?: boolean,
             positionIs?: boolean,
             phonesIs?: boolean,
             emailsIs?: boolean,
             sitesIs?: boolean,
             messangerUrlsIs?: boolean,
             companiesIs?: boolean,
             addressesIs?: boolean,
             detailsIs?: boolean,
             contactTypeIs?: boolean,
             contactSourceIs?: boolean,
             descriptionIsPublic?: boolean,
        ) { }
    }
    export class ContactSource {
        public id?: number;
        public name?: string;//Дзвінок  //Електронна пошта  //Веб-сайт  //Реклама   //Існуючий клієнт   //По рекомендації   //Виставка  //CRM-форма //Зворотний дзвінок //Генератор продажів    //Інтернет-магазин //Інше
        constructor(
             id?: number,
             name?: string,//Дзвінок  //Електронна пошта  //Веб-сайт  //Реклама   //Існуючий клієнт   //По рекомендації   //Виставка  //CRM-форма //Зворотний дзвінок //Генератор продажів    //Інтернет-магазин //Інше
        ) { }
    }
    export class ContactType {
        public id?: number;
        public name?: string;//Клієнти   //Постачальники     //Партнери      //Інше
        constructor(
             id?: number,
             name?: string,//Клієнти   //Постачальники     //Партнери      //Інше
        ) { }
    }
    export class Currency {
        public id?: number;
        public name?: string;
        public cost?: number;
        constructor(
             id?: number,
             name?: string,
             cost?: number,
        ) { }
    }
    export class DateTimeField {
        public id?: number;
        public name?: string;
        public value?: Date;
        //public description?: string;
        constructor(
             id?: number,
             name?: string,
             value?: Date,
             //description?: string,
        ) { }
    }
    export class Details {
        public id?: number;
        public type?: string;
        public abbreviatednameOfTheOrganization?: string;//Скорочене найменування організації
        public uSREOU?: number;//ЄДРПОУ
        public generalDirector?: string;
        public chiefAccountant?: string;
        public name?: string;
        public rNTRC?: string;//РНОКПП   //ДРФОПП    //Реєстраціний номер облікової картки платника податків    //десятизначний номер з Державного реєстру фізичних осіб
        public certificateNumber?: number; //Номер свідоцтва платника ПДВ
        public iPN?: number;//Індивідуальний податковий номер платника ПДВ / Individual tax number of the VAT payer
        public vATPayer?: boolean;//Платник ПДВ
        public addresses?: Address[];
        public bankDetails?: BankDetails[];
        constructor(
             id?: number,
             type?: string,
             abbreviatednameOfTheOrganization?: string,//Скорочене найменування організації
             uSREOU?: number,//ЄДРПОУ
             generalDirector?: string,
             chiefAccountant?: string,
             name?: string,
             rNTRC?: string,//РНОКПП   //ДРФОПП    //Реєстраціний номер облікової картки платника податків    //десятизначний номер з Державного реєстру фізичних осіб
             certificateNumber?: number, //Номер свідоцтва платника ПДВ
             iPN?: number,//Індивідуальний податковий номер платника ПДВ / Individual tax number of the VAT payer
             vATPayer?: boolean,//Платник ПДВ
             addresses?: Address[],
             bankDetails?: BankDetails[],
        ) { }
    }
    export class DetailsType {
        public id?: number;
        public name?: string;
        constructor(
             id?: number,
             name?: string,
        ) { }
    }
    //фізичну особу-підприємця       юридичну особуpublic  відокремлений підрозділ юридичної особи
    export class Email {
        public id?: number;
        public value?: string;
        public type?: string;
        constructor(
             id?: number,
             value?: string,
             type?: string,
        ) { }
    }
    export class EmailType {
        public id?: number;
        public name?: string;
        constructor(
             id?: number,
             name?: string,
        ) { }
    }
    export class Employe {
        public id?: number;
        public position?: string;
        public role?: string;
        public contact?: Contact;
        constructor(
             id?: number,
             position?: string,
             role?: string,
             contact?: Contact,
        ) { }
    }
    export class FieldOfActivity {
        public id?: number;
        public name?: string;
        constructor(
             id?: number,
             name?: string,
        ) { }
    }
    export class file {
        public id?: number;
        public name?: string;
        public fileData?: any;
        constructor(
             id?: number,
             name?: string,
             fileData?: any,
        ) { }
    }
    export class FileField {
        public id?: number;
        public file?: File;
        public description?: string;
        constructor(
            id?: number,
             file?: File,
             description?: string,
        ) { }
    }
    export class image {
        public id?: number;
        public name?: string;
        public imageData?: any;
        constructor(
             id?: number,
             name?: string,
             imageData?: any,
        ) { }
    }
    export class ImageField {
        public id?: number;
        public file?: image;
        public description?: string;
        constructor(
             id?: number,
             file?: image,
             description?: string,
        ) { }
    }

    export class Job {
        public id?: number;
        public name?: string;
        public description?: string;
        public dateCreated?: Date;
        public dateOfChange?: Date;
        public startActivityDate?: Date;
        public stopActivityDate?: Date;
        public priority?: number;
        public goals?: string;
        public isCompleted?: boolean;
        public isSuccessfully?: boolean;
        constructor(
             id?: number,
             name?: string,
             description?: string,
             dateCreated?: Date,
             dateOfChange?: Date,
             startActivityDate?: Date,
             stopActivityDate?: Date,
             priority?: number,
             goals?: string,
             isCompleted?: boolean,
             isSuccessfully?: boolean,
        ) { }
    }

    export class MeasurementUnit {
        public id?: number;
        public name?: string;
        constructor(
             id?: number,
             name?: string,
            //Метр  //Литр  //Грам  //Килограм  //Штука
        ) { }
    }
    export class MessangerUrl {
        public id?: number;
        public value?: Url;
        public type?: string;
        constructor(
             id?: number,
             value?: Url,
             type?: string,
        ) { }
    }

    export class MessangerUrlType {
        public id?: number;
        public name?: string;
        constructor(
             id?: number,
             name?: string,
        ) { }
    }

    export class MessangerUrlTypeOf {
        public id?: number;
        public typeOf?: string;
        constructor(
             id?: number,
             typeOf?: string,
        ) { }
    }
    export class Money {
        public id?: number;
        public amount?: number;
        public currency?: Currency;
        constructor(
             id?: number,
             amount?: number,
             currency?: Currency,
        ) { }
    }
    export class MoneyField {
        public id?: number;
        public name?: string;
        public value?: Money;
        //public description?: string;
        constructor(
             id?: number,
             name?: string,
             value?: Money,
             //description?: string,
        ) { }
    }
    export class notification {
        public id?: number;
        public name?: string;
        public text?: string;
        public type?: string;
        constructor(
             id?: number,
             name?: string,
             text?: string,
             type?: string,
        ) { }
    }
    export class NotificationType {
        public id?: number;
        public name?: string;
        constructor(
             id?: number,
             name?: string,
        ) { }
    }
    export class NumericField {
        public id?: number;
        public name?: string;
        public value?: number;
        //public description?: string;
        constructor(
             id?: number,
             name?: string,
             value?: number,
             //description?: string,
        ) { }
    }
    export class Operation {
        public id?: number;
        public name?: string;
        public amount?: Money;
        public createDate?: Date;
        public dateOfChange?: Date;
        public endDate?: Date;
        public phase?: string;
        public operationSource:string;
        public typeOfOperation?: string;
        public description?: string;
        public availableToEveryone?: boolean;
        public contacts?: Contact[];
        public contractors?: Company[];
        public permissions?: OperationFieldsPermissions;
        constructor(
             id?: number,
             name?: string,
             amount?: Money,
             createDate?: Date,
             dateOfChange?: Date,
             endDate?: Date,
             phase?: Phase,
             operationSource?:string,
             typeOfOperation?: OperationType,
             description?: string,
             availableToEveryone?: boolean,
             contacts?: Contact[],
             contractors?: Company[],
             permissions?: OperationFieldsPermissions,
        ) { }
    }
    export class OperationFieldsPermissions {
        public id?: number;
        public isPublic?: boolean;
        public amount?: boolean;
        public createDate?: boolean;
        public dateOfChange?: boolean;
        public endDate?: boolean;
        public phase?: boolean;
        public typeOfOperation?: boolean;
        public description?: boolean;
        public availableToEveryone?: boolean;
        public contacts?: boolean;
        public contractors?: boolean;
        public permissions?: boolean;
        constructor(
             id?: number,
             is?: boolean,
             amount?: boolean,
             createDate?: boolean,
             dateOfChange?: boolean,
             endDate?: boolean,
             phase?: boolean,
             typeOfOperation?: boolean,
             description?: boolean,
             availableToEveryone?: boolean,
             contacts?: boolean,
             contractors?: boolean,
             permissions?: boolean,
        ) { }
    }
    export class OperationSource {
        public id?: number;
        public name?: string;
        constructor(
             id?: number,
             name?: string,
        ) { }
    }
    export class OperationType {
        public id?: number;
        public name?: string;
        constructor(
             id?: number,
             name?: string,
        ) { }
    }
    export class Phase {
        public id?: number;
        public name?: string;
        constructor(
             id?: number,
             name?: string,
        ) { }
    }
    export class Phone {
        public id?: number;
        public value?: string;
        public type?: string;
        constructor(
             id?: number,
             value?: string,
             type?: string,
        ) { }
    }
    export class PhoneType {
        public id?: number;
        public name?: string;
        constructor(
             id?: number,
             name?: string,
        ) { }
    }
    export class Product {
        public id?: number;
        public name?: string;
        public description?: string;
        public images?: image[];
        public price?: Money;
        public quantity?: number;
        public measurementUnit?: MeasurementUnit;
        public dateCreated?: Date;
        public dateOfChange?: Date;
        public startActivityDate?: Date;
        public stopActivityDate?: Date;
        public sortIndex?: number;
        public stringFields?: StringField[];
        public numericFields?: NumericField[];
        public dateTimeFields?: DateTimeField[];
        //public urlsFields?: Url[];
        public fileFields?: FileField[];
        public permissions?: ProductFieldsPermissions;
        constructor(
             id?: number,
             name?: string,
             description?: string,
             images?: image[],
             price?: Money,
             quantity?: number,
             measurementUnit?: MeasurementUnit,
             dateCreated?: Date,
             dateOfChange?: Date,
             startActivityDate?: Date,
             stopActivityDate?: Date,
             sortIndex?: number,
             stringFields?: StringField[],
             numericFields?: NumericField[],
             dateTimeFields?: DateTimeField[],
             //urlsFields?: Url[],
             fileFields?: FileField[],
             permissions?: ProductFieldsPermissions,
        ) { }
    }
    export class ProductFieldsPermissions {
        public id?: number;
        public isActive?: boolean;
        public isPublic?: boolean;
        public nameIsPublic?: boolean;
        public descriptionIsPublic?: boolean;
        public imagesIsPublic?: boolean;
        public priceIsPublic?: boolean;
        public quantityIsPublic?: boolean;
        public measurementUnitIsPublic?: boolean;
        public createDateIsPublic?: boolean;
        public dateOfChangeIsPublic?: boolean;
        public startActivityDateIsPublic?: boolean;
        public stopActivityDateIsPublic?: boolean;
        public sortIndexIsPublic?: boolean;
        public stringFieldsIsPublic?: boolean;
        public numericFieldsIsPublic?: boolean;
        public dateTimeFieldsIsPublic?: boolean;
        public urlsFieldsIsPublic?: boolean;
        public fileFieldsIsPublic?: boolean;
        public permissionsIsPublic?: boolean;
        constructor(
             id?: number,
             isActive?: boolean,
             is?: boolean,
             nameIs?: boolean,
             descriptionIs?: boolean,
             imagesIs?: boolean,
             priceIs?: boolean,
             quantityIs?: boolean,
             measurementUnitIs?: boolean,
             createDateIs?: boolean,
             dateOfChangeIs?: boolean,
             startActivityDateIs?: boolean,
             stopActivityDateIs?: boolean,
             sortIndexIs?: boolean,
             stringFieldsIs?: boolean,
             numericFieldsIs?: boolean,
             dateTimeFieldsIs?: boolean,
             urlsFieldsIs?: boolean,
             fileFieldsIs?: boolean,
             permissionsIsPublic?: boolean,
        ) { }
    }
    export class Project {
        public id?: number;
        public name?: string;
        public description?: string;
        public jobs?: Job[];
        public dateCreated?: Date;
        public dateOfChange?: Date;
        public startActivityDate?: Date;
        public stopActivityDate?: Date;
        public priority?: number;
        public goals?: string;
        public isCompleted?: boolean;
        public isSuccessfully?: boolean;
        constructor(
             id?: number,
             name?: string,
             description?: string,
             jobs?: Job[],
             dateCreated?: Date,
             dateOfChange?: Date,
             startActivityDate?: Date,
             stopActivityDate?: Date,
             priority?: number,
             goals?: string,
             isCompleted?: boolean,
             isSuccessfully?: boolean,
        ) { }
    }
    export class PublicContact {
        public id?: number;
        public name?: string;
        constructor(
             id?: number,
             name?: string,
        ) { }
    }
    export class StringField {
        public id?: number;
        public name?: string;
        public value?: string;
        //public description?: string;
        constructor(
             id?: number,
             name?: string,
             value?: string,
             //description?: string,
        ) { }
    }
    export class Url {
        public id?: number;
        public value?: string;
        public type?: string;
        constructor(
             id?: number,
             value?: string,
             type?: string,
        ) { }
    }
    export class UrlType {
        public id?: number;
        public name?: string;
        constructor(
             id?: number,
             name?: string,
        ) { }
    }
    export class Username {
        // public id?: number;
        // public name?: string;
        public firstName?: string;
        public lastName?: string;
        public surName?: string;
        constructor(
            //  id?: number,
            //  name?: string,
            firstName?: string,
            lastName?: string,
            surName?: string,
        ) { }
    }
