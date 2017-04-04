import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContentComponent } from './content/content.component';
import { FileComponent } from './file/file.component';
import { FolderComponent } from './folder/folder.component';
import { TreeComponent } from './tree/tree.component';
import {FileSystemService} from "./services/file-system.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ContentComponent,
    FileComponent,
    FolderComponent,
    TreeComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FileSystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
