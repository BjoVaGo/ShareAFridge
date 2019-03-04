import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
  constructor(private router: Router 
             , public alertController: AlertController
             , private nativeStorage: NativeStorage) { }
  
  ngOnInit() {
    var  GoogleUser: String;
    if (this.nativeStorage.getItem('google_user')) {
      this.nativeStorage.getItem('google_user').then(
        data => {
          GoogleUser = data.name + " " + data.email;
          
        });
      this.presentAlert(" Google User : " + GoogleUser);

      // logged in so return true
      return true;
    }
    else {
      this.nativeStorage.setItem('google_user', {
        name: "Bjorn",
        email: "Bjorn@bjorn.com",
        picture: ""
      })
    }
    this.router.navigate(['login']);
    return false; 
  } 

  async presentAlert(message) {
    const alert = await this.alertController.create({
       message: message,
       buttons: ['OK']
     }); 

    await alert.present();
  }

}
