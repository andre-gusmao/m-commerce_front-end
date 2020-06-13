import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {

  mensagem: string;

  constructor() { }

  ngOnInit() {
  }

  facebookShare(){
    console.log("facebook: " + this.mensagem);
    //this.socialSharing.shareViaFacebook(this.mensagem, null, null);
   }
   
   whatsappShare(){
     console.log("whatsapp: " + this.mensagem);
     //this.socialSharing.shareViaWhatsApp(this.mensagem, null, null);
  }
  
  instagramShare(){
    console.log("instagram: " + this.mensagem);
    //this.socialSharing.shareViaInstagram(this.mensagem, null);
  }
  
  twitterShare(){
    console.log("twitter: " + this.mensagem);
    //this.socialSharing.shareViaTwitter(this.mensagem, null, null);
  }

}
