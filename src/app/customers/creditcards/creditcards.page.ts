import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationsService } from '../../services/authentications/authentications.service';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { RequestsService } from '../../services/requests/requests.service';

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.page.html',
  styleUrls: ['./creditcards.page.scss'],
})
export class CreditcardsPage implements OnInit {

  numero: string;
  nome_impresso: string;
  mes_validade: string;
  ano_validade: string;
  cvv: string;
  cd_bandeira: string;
  cd_cartao: string;

  constructor(
    private router: Router,
    public requestService: RequestsService,
    public toolsService: ToolsService,
    public authService: AuthenticationsService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    //this.authService.isLoggedIn('Cartoes');
    if (this.cd_cartao != undefined) {
      this.CarregarCartao(this.cd_cartao);
    }
  }

  async CadCartoes() {

    if (this.numero == undefined || this.numero == "") {
      this.toolsService.showToast('Preencha o numero');
      return;
    }

    if (this.nome_impresso == undefined || this.nome_impresso == "") {
      this.toolsService.showToast('Preencha o nome');
      return;
    }

    if (this.mes_validade == undefined || this.mes_validade == "") {
      this.toolsService.showToast('Preencha o mes');
      return;
    }

    if (this.ano_validade == undefined || this.ano_validade == "") {
      this.toolsService.showToast('Preencha o ano');
      return;
    }

    if (this.cvv == undefined || this.cvv == "") {
      this.toolsService.showToast('Preencha o cvv');
      return;
    }

    if (this.cd_bandeira == undefined || this.cd_bandeira == "") {
      this.toolsService.showToast('Selecione a bandeiras');
      return;
    }

    let dados = {
      requisicao: 'inserir',
      numero: this.numero,
      nome_impresso: this.nome_impresso,
      mes_validade: this.mes_validade,
      ano_validade: this.ano_validade,
      cvv: this.cvv,
      cd_bandeira: this.cd_bandeira,
      //cd_turista: this.authService.getCdPerfil(),
      cd_cartao: "",
    };

    if (this.cd_cartao != undefined && this.cd_cartao != "") {
      dados['requisicao'] = 'editar';
      dados['cd_cartao'] = this.cd_cartao;
    }
/*
    this.provider.Api(dados, 'cartoes.php').subscribe(async data => {

      var alert = data['msg'];

      if (data['success']) {

        this.numero = "";
        this.nome_impresso = "";
        this.mes_validade = "";
        this.ano_validade = "";
        this.cvv = "";
        this.cd_bandeira = "";
        this.authService.fecharLoading();
        this.toolsService.showToast(data['msg']);
        this.router.navigate(['/listacartao']);

      } else {

        this.authService.fecharLoading();
        this.toolsService.showToast(alert);

      }

    }, error => {
      this.authService.fecharLoading();
      this.authService.alerta();
    }

    );
*/
  }

  ListaCartao() {
    this.router.navigate(['/listacartao']);
  }

  CarregarCartao(cd_cartao) {

    this.toolsService.showToast("Aguarde ...");

    let dados = {
      requisicao: 'buscar',
      cd_cartao: cd_cartao,
    };
/*
    this.provider.Api(dados, 'cartoes.php').subscribe(async data => {

      var alert = data['msg'];

      if (data['success']) {

        this.numero = data['result']['numero'];
        this.nome_impresso = data['result']['nome_impresso'];
        this.mes_validade = data['result']['mes_validade'];
        this.ano_validade = data['result']['ano_validade'];
        this.cvv = data['result']['cvv'];
        this.cd_bandeira = data['result']['cd_bandeira'];

      } else {

        this.authService.fecharLoading();
        this.toolsService.showToast(alert);

      }

    }, error => {
      this.authService.fecharLoading();
      this.authService.alerta();
    }

    );
*/
  }

}
