import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { MatToolbarModule , MatMenuModule , MatInputModule , MatTableModule ,MatButtonModule,MatCardModule,MatTableDataSource,MatPaginatorModule,MatSortModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/Forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ConnprofileComponent } from './connprofile/connprofile.component';
import { PostComponent } from './post/post.component';
import { SignupComponent } from './signup/signup.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SmsservicesService } from './smsservices.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    //FormsModule,
    LoginComponent,
    MyprofileComponent,
    ConnprofileComponent,
    PostComponent,
    SignupComponent,
    UserprofileComponent
    

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule , MatMenuModule , MatInputModule , MatTableModule ,MatButtonModule,MatCardModule,MatPaginatorModule,MatSortModule
  ],
  exports:[
    MatToolbarModule , MatMenuModule , MatInputModule , MatTableModule ,MatButtonModule,MatCardModule,MatPaginatorModule,MatSortModule
  ],
  providers: [SmsservicesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
