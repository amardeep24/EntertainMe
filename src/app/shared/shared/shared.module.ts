import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { StorageService } from '../storage-service.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  declarations: []
})
export class SharedModule { 

/**
   * This is to prevent multiple imports in modules other than root module, the @SkipSelf
   * decorator tells to look for an instance in the parent injector. If every thing is in order
   * that is this module is only imported in root module then the there will be no parent of the root inject and
   * no instances will be injected as we have the @Optional decorator which tell if no instances are found inject null.
   * But if another module imports this the instance will be found in the root injector as it is  aprent of the child 
   * injector which is created and hence a instance of the service will be injected. The injected instance will staisfy the if clause
   * and an error will be thrown.
   * 
   * @param parentModule 
   */
  constructor(@Optional() @SkipSelf() parentModule: SharedModule){
    if (parentModule) {
      throw new Error(
        'SharedModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [StorageService]
    };
  }
}
