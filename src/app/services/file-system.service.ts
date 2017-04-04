import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class FileSystemService {

  isOpenContextMenu: boolean;
  isOpenPrompt: boolean;//is that for change folder/file name or something?:
  isOpenContent : boolean;
  contentId: string;
  GET_TREE_URL: string;
  CREATE_ITEM_URL: string;
  UPDATE_ITEM_URL: string;
  DELETE_ITEM_URL: string;
  tree: any;
  //Boaz, check here type of EventEmitter
  emiter = new EventEmitter<any>();
  ME: string;
  targetId: string;
  callBack: Function;
  ErrorMessage: string;

  constructor(private http: Http) {
    this.isOpenContextMenu = false;
    this.isOpenPrompt = false;
    this.isOpenContent = false;
    this.contentId = '';
    this.ME ='Boaz';
    this.GET_TREE_URL = 'http://hosting.webis.co.il:8085/api/items/get/';
    this.CREATE_ITEM_URL = 'http://hosting.webis.co.il:8085/api/items/create';
    this.DELETE_ITEM_URL = 'http://hosting.webis.co.il:8085/api/items/delete/';
    this.UPDATE_ITEM_URL = 'http://hosting.webis.co.il:8085/api/items/update/';
    this.targetId = '';
    this.ErrorMessage = '';
    this.http = http;
    console.log(http);
  }

}
