import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [AppComponent ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp({ 
      apiKey: "AIzaSyBM6G_-zVJI-GrHrbbP-3xYmSnFPaK4io4",
      authDomain: "app-acessibilidade-educacional.firebaseapp.com",
      projectId: "app-acessibilidade-educacional",
      storageBucket: "app-acessibilidade-educacional.appspot.com",
      messagingSenderId: "201969222728",
      appId: "1:201969222728:web:e78f1326a7758ecac2047d"
     }),
     AngularFirestoreModule,
     AngularFireAuthModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}