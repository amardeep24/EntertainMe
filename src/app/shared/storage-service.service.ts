import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class StorageService{

  constructor(private db: AngularFireDatabase) { }

  getSavedItem(item: string){
    return this.db.list(item).valueChanges();
  }
}
