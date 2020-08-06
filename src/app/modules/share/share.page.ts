import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {

  mensagem: string = "Esse app do KioskWide é d+!!!";

  constructor() { }

  ngOnInit() {
  }

  public facebookShare(){
    console.log("facebook: " + this.mensagem);
    // this.socialSharing.shareViaFacebook(this.mensagem, null, null);
   }
   
  public whatsappShare(){
     console.log("whatsapp: " + this.mensagem);
    //  this.socialSharing.shareViaWhatsApp(this.mensagem, null, null);
  }
  
  public instagramShare(){
    console.log("instagram: " + this.mensagem);
    // this.socialSharing.shareViaInstagram(this.mensagem, null);
  }
  
  public twitterShare(){
    console.log("twitter: " + this.mensagem);
    // this.socialSharing.shareViaTwitter(this.mensagem, null, null);
  }

}
