import {
    ComponentFactoryResolver,
    Injectable,
    Inject,
    ReflectiveInjector,
    Type,
    ViewContainerRef,
    ComponentRef
} from '@angular/core'
import { _Item } from '../Models/itemInterfacewithData';
import { TypicalInterfaceComponent } from '../Models/typicalInterfaceComponent';

@Injectable()
export class Service {
    isSetContainer: boolean = false;
    rootViewContainerRef: ViewContainerRef;
    componentsInserted: ComponentRef<any>[];
    constructor(private factoryResolver: ComponentFactoryResolver) { }

    public setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
        if (!this.isSetContainer) {
            this.componentsInserted = null;
            this.rootViewContainerRef = viewContainerRef;
            this.isSetContainer = true;
        } else
            console.log("RootViewContainer is Added");

    }
    public getRootViewContainerRef() {
        return this.rootViewContainerRef;
    }


    public addDynamicComponent(componentType: Type<any>, data: any): ComponentRef<any> {
        const componentFactory = this.factoryResolver.resolveComponentFactory(componentType);
        const componentRef = componentFactory.create(this.rootViewContainerRef.parentInjector);
        //const componentRef = this.rootViewContainerRef.createComponent<TypicalInterfaceComponent>(componentFactory);
        componentRef.instance.data = data;
        this.rootViewContainerRef.insert(componentRef.hostView);
        this.componentsInserted.push(componentRef);
        return componentRef;
    }
    public removeFromRoot(component: ComponentRef<any>) {
        const index = this.rootViewContainerRef.indexOf(component.hostView);

        if (index != -1) {
            this.rootViewContainerRef.remove(index);
            const index2 = this.componentsInserted.indexOf(component, 0);
            if (index2 > -1) {
                this.componentsInserted.splice(index2, 1);
            }

        }
    }
public getComponentInstance(componentType: Type<any>){

}
}
