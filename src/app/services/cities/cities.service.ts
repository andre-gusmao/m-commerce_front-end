import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  stateList = [
    {
      abbreviation: 'AC',
      stateName: 'Acre'
    },
    {
      abbreviation: 'AL',
      stateName: 'Alagoas'
    },
    {
      abbreviation: 'AP',
      stateName: 'Amapa'
    },
    {
      abbreviation: 'AM',
      stateName: 'Amazonas'
    },
    {
      abbreviation: 'BA',
      stateName: 'Bahia'
    },
    {
      abbreviation: 'CE',
      stateName: 'Ceara'
    },
    {
      abbreviation: 'DF',
      stateName: 'Distrito Federal'
    },
    {
      abbreviation: 'ES',
      stateName: 'Espirito Santo'
    },
    {
      abbreviation: 'GO',
      stateName: 'Goias'
    },
    {
      abbreviation: 'MA',
      stateName: 'Maranhao'
    },
    {
      abbreviation: 'MT',
      stateName: 'Mato Grosso'
    },
    {
      abbreviation: 'MS',
      stateName: 'Mato Grosso do Sul'
    },
    {
      abbreviation: 'MG',
      stateName: 'Minas Gerais'
    },
    {
      abbreviation: 'PA',
      stateName: 'Para'
    },
    {
      abbreviation: 'PB',
      stateName: 'Paraiba'
    },
    {
      abbreviation: 'PR',
      stateName: 'Parana'
    },
    {
      abbreviation: 'PE',
      stateName: 'Pernambuco'
    },
    {
      abbreviation: 'PI',
      stateName: 'Piaui'
    },
    {
      abbreviation: 'RJ',
      stateName: 'Rio de Janeiro'
    },
    {
      abbreviation: 'RN',
      stateName: 'Rio Grande do Norte'
    },
    {
      abbreviation: 'RS',
      stateName: 'Rio Grande do Sul'
    },
    {
      abbreviation: 'RO',
      stateName: 'Rondonia'
    },
    {
      abbreviation: 'RR',
      stateName: 'Roraima'
    },
    {
      abbreviation: 'SC',
      stateName: 'Santa Catarina'
    },
    {
      abbreviation: 'SP',
      stateName: 'Sao Paulo'
    },
    {
      abbreviation: 'SE',
      stateName: 'Sergipe'
    },
    {
      abbreviation: 'TO',
      stateName: 'Tocantins'
    }
  ]

  citiesList = [
    {
      abbreviation: 'AC',
      cities: [
        {
          ibge: '1200013',
          cityName: 'Acrelandia'
        },
        {
          ibge: '1200054',
          cityName: 'Assis Brasil'
        },
        {
          ibge: '1200104',
          cityName: 'Brasileia'
        },
        {
          ibge: '1200138',
          cityName: 'Bujari'
        },
        {
          ibge: '1200179',
          cityName: 'Capixaba'
        },
        {
          ibge: '1200203',
          cityName: 'Cruzeiro do Sul'
        },
        {
          ibge: '1200252',
          cityName: 'Epitaciolandia'
        },
        {
          ibge: '1200302',
          cityName: 'Feijo'
        },
        {
          ibge: '1200328',
          cityName: 'Jordao'
        },
        {
          ibge: '1200336',
          cityName: 'Mancio Lima'
        },
        {
          ibge: '1200344',
          cityName: 'Manoel Urbano'
        },
        {
          ibge: '1200351',
          cityName: 'Marechal Thaumaturgo'
        },
        {
          ibge: '1200385',
          cityName: 'Placido de Castro'
        },
        {
          ibge: '1200807',
          cityName: 'Porto Acre'
        },
        {
          ibge: '1200393',
          cityName: 'Porto Walter'
        },
        {
          ibge: '1200401',
          cityName: 'Rio Branco'
        },
        {
          ibge: '1200427',
          cityName: 'Rodrigues Alves'
        },
        {
          ibge: '1200435',
          cityName: 'Santa Rosa do Purus'
        },
        {
          ibge: '1200500',
          cityName: 'Sena Madureira'
        },
        {
          ibge: '1200450',
          cityName: 'Senador Guiomard'
        },
        {
          ibge: '1200609',
          cityName: 'Tarauaca'
        },
        {
          ibge: '1200708',
          cityName: 'Xapuri'
        }
      ]
    },
    {
      abbreviation: 'AL',
      cities: [
        {
          ibge: '2700102',
          cityName: 'Agua Branca'
        },
        {
          ibge: '2700201',
          cityName: 'Anadia'
        },
        {
          ibge: '2700300',
          cityName: 'Arapiraca'
        },
        {
          ibge: '2700409',
          cityName: 'Atalaia'
        },
        {
          ibge: '2700508',
          cityName: 'Barra de Santo Antonio'
        },
        {
          ibge: '2700607',
          cityName: 'Barra de Sao Miguel'
        },
        {
          ibge: '2700706',
          cityName: 'Batalha'
        },
        {
          ibge: '2700805',
          cityName: 'Belem'
        },
        {
          ibge: '2700904',
          cityName: 'Belo Monte'
        },
        {
          ibge: '2701001',
          cityName: 'Boca da Mata'
        },
        {
          ibge: '2701100',
          cityName: 'Branquinha'
        },
        {
          ibge: '2701209',
          cityName: 'Cacimbinhas'
        },
        {
          ibge: '2701308',
          cityName: 'Cajueiro'
        },
        {
          ibge: '2701357',
          cityName: 'Campestre'
        },
        {
          ibge: '2701407',
          cityName: 'Campo Alegre'
        },
        {
          ibge: '2701506',
          cityName: 'Campo Grande'
        },
        {
          ibge: '2701605',
          cityName: 'Canapi'
        },
        {
          ibge: '2701704',
          cityName: 'Capela'
        },
        {
          ibge: '2701803',
          cityName: 'Carneiros'
        },
        {
          ibge: '2701902',
          cityName: 'Cha Preta'
        },
        {
          ibge: '2702009',
          cityName: 'Coite do Noia'
        },
        {
          ibge: '2702108',
          cityName: 'Colonia Leopoldina'
        },
        {
          ibge: '2702207',
          cityName: 'Coqueiro Seco'
        },
        {
          ibge: '2702306',
          cityName: 'Coruripe'
        },
        {
          ibge: '2702355',
          cityName: 'Crai­bas'
        },
        {
          ibge: '2702405',
          cityName: 'Delmiro Gouveia'
        },
        {
          ibge: '2702504',
          cityName: 'Dois Riachos'
        },
        {
          ibge: '2702553',
          cityName: 'Estrela de Alagoas'
        },
        {
          ibge: '2702603',
          cityName: 'Feira Grande'
        },
        {
          ibge: '2702702',
          cityName: 'Feliz Deserto'
        },
        {
          ibge: '2702801',
          cityName: 'Flexeiras'
        },
        {
          ibge: '2702900',
          cityName: 'Girau do Ponciano'
        },
        {
          ibge: '2703007',
          cityName: 'Ibateguara'
        },
        {
          ibge: '2703106',
          cityName: 'Igaci'
        },
        {
          ibge: '2703205',
          cityName: 'Igreja Nova'
        },
        {
          ibge: '2703304',
          cityName: 'Inhapi'
        },
        {
          ibge: '2703403',
          cityName: 'Jacare dos Homens'
        },
        {
          ibge: '2703502',
          cityName: 'Jacui­pe'
        },
        {
          ibge: '2703601',
          cityName: 'Japaratinga'
        },
        {
          ibge: '2703700',
          cityName: 'Jaramataia'
        },
        {
          ibge: '2703759',
          cityName: 'Jequia da Praia'
        },
        {
          ibge: '2703809',
          cityName: 'Joaquim Gomes'
        },
        {
          ibge: '2703908',
          cityName: 'Jundia'
        },
        {
          ibge: '2704005',
          cityName: 'Junqueiro'
        },
        {
          ibge: '2704104',
          cityName: 'Lagoa da Canoa'
        },
        {
          ibge: '2704203',
          cityName: 'Limoeiro de Anadia'
        },
        {
          ibge: '2704302',
          cityName: 'Maceio'
        },
        {
          ibge: '2704401',
          cityName: 'Major Isidoro'
        },
        {
          ibge: '2704906',
          cityName: 'Mar Vermelho'
        },
        {
          ibge: '2704500',
          cityName: 'Maragogi'
        },
        {
          ibge: '2704609',
          cityName: 'Maravilha'
        },
        {
          ibge: '2704708',
          cityName: 'Marechal Deodoro'
        },
        {
          ibge: '2704807',
          cityName: 'Maribondo'
        },
        {
          ibge: '2705002',
          cityName: 'Mata Grande'
        },
        {
          ibge: '2705101',
          cityName: 'Matriz de Camaragibe'
        },
        {
          ibge: '2705200',
          cityName: 'Messias'
        },
        {
          ibge: '2705309',
          cityName: 'Minador do Negrao'
        },
        {
          ibge: '2705408',
          cityName: 'Monteiropolis'
        },
        {
          ibge: '2705507',
          cityName: 'Murici'
        },
        {
          ibge: '2705606',
          cityName: 'Novo Lino'
        },
        {
          ibge: '2705705',
          cityName: 'Olho d\'Agua das Flores'
        },
        {
          ibge: '2705804',
          cityName: 'Olho d\'Agua do Casado'
        },
        {
          ibge: '2705903',
          cityName: 'Olho d\'Agua Grande'
        },
        {
          ibge: '2706000',
          cityName: 'Olivenca'
        },
        {
          ibge: '2706109',
          cityName: 'Ouro Branco'
        },
        {
          ibge: '2706208',
          cityName: 'Palestina'
        },
        {
          ibge: '2706307',
          cityName: 'Palmeira dos Andios'
        },
        {
          ibge: '2706406',
          cityName: 'Pao de Acucar'
        },
        {
          ibge: '2706422',
          cityName: 'Pariconha'
        },
        {
          ibge: '2706448',
          cityName: 'Paripueira'
        },
        {
          ibge: '2706505',
          cityName: 'Passo de Camaragibe'
        },
        {
          ibge: '2706604',
          cityName: 'Paulo Jacinto'
        },
        {
          ibge: '2706703',
          cityName: 'Penedo'
        },
        {
          ibge: '2706802',
          cityName: 'Piacabucu'
        },
        {
          ibge: '2706901',
          cityName: 'Pilar'
        },
        {
          ibge: '2707008',
          cityName: 'Pindoba'
        },
        {
          ibge: '2707107',
          cityName: 'Piranhas'
        },
        {
          ibge: '2707206',
          cityName: 'Poco das Trincheiras'
        },
        {
          ibge: '2707305',
          cityName: 'Porto Calvo'
        },
        {
          ibge: '2707404',
          cityName: 'Porto de Pedras'
        },
        {
          ibge: '2707503',
          cityName: 'Porto Real do Colegio'
        },
        {
          ibge: '2707602',
          cityName: 'Quebrangulo'
        },
        {
          ibge: '2707701',
          cityName: 'Rio Largo'
        },
        {
          ibge: '2707800',
          cityName: 'Roteiro'
        },
        {
          ibge: '2707909',
          cityName: 'Santa Luzia do Norte'
        },
        {
          ibge: '2708006',
          cityName: 'Santana do Ipanema'
        },
        {
          ibge: '2708105',
          cityName: 'Santana do Mundaiº'
        },
        {
          ibge: '2708204',
          cityName: 'Sao Bras'
        },
        {
          ibge: '2708303',
          cityName: 'Sao Jose da Laje'
        },
        {
          ibge: '2708402',
          cityName: 'Sao Jose da Tapera'
        },
        {
          ibge: '2708501',
          cityName: 'Sao Lui­s do Quitunde'
        },
        {
          ibge: '2708600',
          cityName: 'Sao Miguel dos Campos'
        },
        {
          ibge: '2708709',
          cityName: 'Sao Miguel dos Milagres'
        },
        {
          ibge: '2708808',
          cityName: 'Sao Sebastiao'
        },
        {
          ibge: '2708907',
          cityName: 'Satuba'
        },
        {
          ibge: '2708956',
          cityName: 'Senador Rui Palmeira'
        },
        {
          ibge: '2709004',
          cityName: 'Tanque d\'Arca'
        },
        {
          ibge: '2709103',
          cityName: 'Taquarana'
        },
        {
          ibge: '2709152',
          cityName: 'Teotonio Vilela'
        },
        {
          ibge: '2709202',
          cityName: 'Traipu'
        },
        {
          ibge: '2709301',
          cityName: 'Uniao dos Palmares'
        },
        {
          ibge: '2709400',
          cityName: 'Vicosa'
        }
      ]
    },
    {
      abbreviation: 'AM',
      cities: [
        {
          ibge: '1300029',
          cityName: 'Alvaraes'
        },
        {
          ibge: '1300060',
          cityName: 'Amatura'
        },
        {
          ibge: '1300086',
          cityName: 'Anama'
        },
        {
          ibge: '1300102',
          cityName: 'Anori'
        },
        {
          ibge: '1300144',
          cityName: 'Apui­'
        },
        {
          ibge: '1300201',
          cityName: 'Atalaia do Norte'
        },
        {
          ibge: '1300300',
          cityName: 'Autazes'
        },
        {
          ibge: '1300409',
          cityName: 'Barcelos'
        },
        {
          ibge: '1300508',
          cityName: 'Barreirinha'
        },
        {
          ibge: '1300607',
          cityName: 'Benjamin Constant'
        },
        {
          ibge: '1300631',
          cityName: 'Beruri'
        },
        {
          ibge: '1300680',
          cityName: 'Boa Vista do Ramos'
        },
        {
          ibge: '1300706',
          cityName: 'Boca do Acre'
        },
        {
          ibge: '1300805',
          cityName: 'Borba'
        },
        {
          ibge: '1300839',
          cityName: 'Caapiranga'
        },
        {
          ibge: '1300904',
          cityName: 'Canutama'
        },
        {
          ibge: '1301001',
          cityName: 'Carauari'
        },
        {
          ibge: '1301100',
          cityName: 'Careiro'
        },
        {
          ibge: '1301159',
          cityName: 'Careiro da Varzea'
        },
        {
          ibge: '1301209',
          cityName: 'Coari'
        },
        {
          ibge: '1301308',
          cityName: 'Codajas'
        },
        {
          ibge: '1301407',
          cityName: 'Eirunepe'
        },
        {
          ibge: '1301506',
          cityName: 'Envira'
        },
        {
          ibge: '1301605',
          cityName: 'Fonte Boa'
        },
        {
          ibge: '1301654',
          cityName: 'Guajara'
        },
        {
          ibge: '1301704',
          cityName: 'Humaita'
        },
        {
          ibge: '1301803',
          cityName: 'Ipixuna'
        },
        {
          ibge: '1301852',
          cityName: 'Iranduba'
        },
        {
          ibge: '1301902',
          cityName: 'Itacoatiara'
        },
        {
          ibge: '1301951',
          cityName: 'Itamarati'
        },
        {
          ibge: '1302009',
          cityName: 'Itapiranga'
        },
        {
          ibge: '1302108',
          cityName: 'Japura'
        },
        {
          ibge: '1302207',
          cityName: 'Jurua'
        },
        {
          ibge: '1302306',
          cityName: 'Jutai­'
        },
        {
          ibge: '1302405',
          cityName: 'Labrea'
        },
        {
          ibge: '1302504',
          cityName: 'Manacapuru'
        },
        {
          ibge: '1302553',
          cityName: 'Manaquiri'
        },
        {
          ibge: '1302603',
          cityName: 'Manaus'
        },
        {
          ibge: '1302702',
          cityName: 'Manicore'
        },
        {
          ibge: '1302801',
          cityName: 'Maraa'
        },
        {
          ibge: '1302900',
          cityName: 'Maues'
        },
        {
          ibge: '1303007',
          cityName: 'Nhamunda'
        },
        {
          ibge: '1303106',
          cityName: 'Nova Olinda do Norte'
        },
        {
          ibge: '1303205',
          cityName: 'Novo Airao'
        },
        {
          ibge: '1303304',
          cityName: 'Novo Aripuana'
        },
        {
          ibge: '1303403',
          cityName: 'Parintins'
        },
        {
          ibge: '1303502',
          cityName: 'Pauini'
        },
        {
          ibge: '1303536',
          cityName: 'Presidente Figueiredo'
        },
        {
          ibge: '1303569',
          cityName: 'Rio Preto da Eva'
        },
        {
          ibge: '1303601',
          cityName: 'Santa Isabel do Rio Negro'
        },
        {
          ibge: '1303700',
          cityName: 'Santo Antonio do Ica'
        },
        {
          ibge: '1303809',
          cityName: 'Sao Gabriel da Cachoeira'
        },
        {
          ibge: '1303908',
          cityName: 'Sao Paulo de Olivenca'
        },
        {
          ibge: '1303957',
          cityName: 'Sao Sebastiao do Uatuma'
        },
        {
          ibge: '1304005',
          cityName: 'Silves'
        },
        {
          ibge: '1304062',
          cityName: 'Tabatinga'
        },
        {
          ibge: '1304104',
          cityName: 'Tapaua'
        },
        {
          ibge: '1304203',
          cityName: 'Tefe'
        },
        {
          ibge: '1304237',
          cityName: 'Tonantins'
        },
        {
          ibge: '1304260',
          cityName: 'Uarini'
        },
        {
          ibge: '1304302',
          cityName: 'Urucara'
        },
        {
          ibge: '1304401',
          cityName: 'Urucurituba'
        }
      ]
    },
    {
      abbreviation: 'AP',
      cities: [
        {
          ibge: '1600105',
          cityName: 'Amapa'
        },
        {
          ibge: '1600204',
          cityName: 'Calcoene'
        },
        {
          ibge: '1600212',
          cityName: 'Cutias'
        },
        {
          ibge: '1600238',
          cityName: 'Ferreira Gomes'
        },
        {
          ibge: '1600253',
          cityName: 'Itaubal'
        },
        {
          ibge: '1600279',
          cityName: 'Laranjal do Jari'
        },
        {
          ibge: '1600303',
          cityName: 'Macapa'
        },
        {
          ibge: '1600402',
          cityName: 'Mazagao'
        },
        {
          ibge: '1600501',
          cityName: 'Oiapoque'
        },
        {
          ibge: '1600154',
          cityName: 'Pedra Branca do Amapari'
        },
        {
          ibge: '1600535',
          cityName: 'Porto Grande'
        },
        {
          ibge: '1600550',
          cityName: 'Pracuiºba'
        },
        {
          ibge: '1600600',
          cityName: 'Santana'
        },
        {
          ibge: '1600055',
          cityName: 'Serra do Navio'
        },
        {
          ibge: '1600709',
          cityName: 'Tartarugalzinho'
        },
        {
          ibge: '1600808',
          cityName: 'Vitoria do Jari'
        }
      ]
    },
    {
      abbreviation: 'BA',
      cities: [
        {
          ibge: '2900108',
          cityName: 'Abai­ra'
        },
        {
          ibge: '2900207',
          cityName: 'Abare'
        },
        {
          ibge: '2900306',
          cityName: 'Acajutiba'
        },
        {
          ibge: '2900355',
          cityName: 'Adustina'
        },
        {
          ibge: '2900405',
          cityName: 'Agua Fria'
        },
        {
          ibge: '2900603',
          cityName: 'Aiquara'
        },
        {
          ibge: '2900702',
          cityName: 'Alagoinhas'
        },
        {
          ibge: '2900801',
          cityName: 'Alcobaca'
        },
        {
          ibge: '2900900',
          cityName: 'Almadina'
        },
        {
          ibge: '2901007',
          cityName: 'Amargosa'
        },
        {
          ibge: '2901106',
          cityName: 'Amelia Rodrigues'
        },
        {
          ibge: '2901155',
          cityName: 'America Dourada'
        },
        {
          ibge: '2901205',
          cityName: 'Anage'
        },
        {
          ibge: '2901304',
          cityName: 'Andarai­'
        },
        {
          ibge: '2901353',
          cityName: 'Andorinha'
        },
        {
          ibge: '2901403',
          cityName: 'Angical'
        },
        {
          ibge: '2901502',
          cityName: 'Anguera'
        },
        {
          ibge: '2901601',
          cityName: 'Antas'
        },
        {
          ibge: '2901700',
          cityName: 'Antonio Cardoso'
        },
        {
          ibge: '2901809',
          cityName: 'Antonio Goncalves'
        },
        {
          ibge: '2901908',
          cityName: 'Apora'
        },
        {
          ibge: '2901957',
          cityName: 'Apuarema'
        },
        {
          ibge: '2902054',
          cityName: 'Aracas'
        },
        {
          ibge: '2902005',
          cityName: 'Aracatu'
        },
        {
          ibge: '2902104',
          cityName: 'Araci'
        },
        {
          ibge: '2902203',
          cityName: 'Aramari'
        },
        {
          ibge: '2902252',
          cityName: 'Arataca'
        },
        {
          ibge: '2902302',
          cityName: 'Aratui­pe'
        },
        {
          ibge: '2902401',
          cityName: 'Aurelino Leal'
        },
        {
          ibge: '2902500',
          cityName: 'Baianopolis'
        },
        {
          ibge: '2902609',
          cityName: 'Baixa Grande'
        },
        {
          ibge: '2902658',
          cityName: 'Banzaiª'
        },
        {
          ibge: '2902708',
          cityName: 'Barra'
        },
        {
          ibge: '2902807',
          cityName: 'Barra da Estiva'
        },
        {
          ibge: '2902906',
          cityName: 'Barra do Choca'
        },
        {
          ibge: '2903003',
          cityName: 'Barra do Mendes'
        },
        {
          ibge: '2903102',
          cityName: 'Barra do Rocha'
        },
        {
          ibge: '2903201',
          cityName: 'Barreiras'
        },
        {
          ibge: '2903235',
          cityName: 'Barro Alto'
        },
        {
          ibge: '2903300',
          cityName: 'Barro Preto'
        },
        {
          ibge: '2903276',
          cityName: 'Barrocas'
        },
        {
          ibge: '2903409',
          cityName: 'Belmonte'
        },
        {
          ibge: '2903508',
          cityName: 'Belo Campo'
        },
        {
          ibge: '2903607',
          cityName: 'Biritinga'
        },
        {
          ibge: '2903706',
          cityName: 'Boa Nova'
        },
        {
          ibge: '2903805',
          cityName: 'Boa Vista do Tupim'
        },
        {
          ibge: '2903904',
          cityName: 'Bom Jesus da Lapa'
        },
        {
          ibge: '2903953',
          cityName: 'Bom Jesus da Serra'
        },
        {
          ibge: '2904001',
          cityName: 'Boninal'
        },
        {
          ibge: '2904050',
          cityName: 'Bonito'
        },
        {
          ibge: '2904100',
          cityName: 'Boquira'
        },
        {
          ibge: '2904209',
          cityName: 'Botupora'
        },
        {
          ibge: '2904308',
          cityName: 'Brejiµes'
        },
        {
          ibge: '2904407',
          cityName: 'Brejolandia'
        },
        {
          ibge: '2904506',
          cityName: 'Brotas de Macaiºbas'
        },
        {
          ibge: '2904605',
          cityName: 'Brumado'
        },
        {
          ibge: '2904704',
          cityName: 'Buerarema'
        },
        {
          ibge: '2904753',
          cityName: 'Buritirama'
        },
        {
          ibge: '2904803',
          cityName: 'Caatiba'
        },
        {
          ibge: '2904852',
          cityName: 'Cabaceiras do Paraguacu'
        },
        {
          ibge: '2904902',
          cityName: 'Cachoeira'
        },
        {
          ibge: '2905008',
          cityName: 'Cacule'
        },
        {
          ibge: '2905107',
          cityName: 'Caem'
        },
        {
          ibge: '2905156',
          cityName: 'Caetanos'
        },
        {
          ibge: '2905206',
          cityName: 'Caetite'
        },
        {
          ibge: '2905305',
          cityName: 'Cafarnaum'
        },
        {
          ibge: '2905404',
          cityName: 'Cairu'
        },
        {
          ibge: '2905503',
          cityName: 'Caldeirao Grande'
        },
        {
          ibge: '2905602',
          cityName: 'Camacan'
        },
        {
          ibge: '2905701',
          cityName: 'Camacari'
        },
        {
          ibge: '2905800',
          cityName: 'Camamu'
        },
        {
          ibge: '2905909',
          cityName: 'Campo Alegre de Lourdes'
        },
        {
          ibge: '2906006',
          cityName: 'Campo Formoso'
        },
        {
          ibge: '2906105',
          cityName: 'Canapolis'
        },
        {
          ibge: '2906204',
          cityName: 'Canarana'
        },
        {
          ibge: '2906303',
          cityName: 'Canavieiras'
        },
        {
          ibge: '2906402',
          cityName: 'Candeal'
        },
        {
          ibge: '2906501',
          cityName: 'Candeias'
        },
        {
          ibge: '2906600',
          cityName: 'Candiba'
        },
        {
          ibge: '2906709',
          cityName: 'Candido Sales'
        },
        {
          ibge: '2906808',
          cityName: 'Cansancao'
        },
        {
          ibge: '2906824',
          cityName: 'Canudos'
        },
        {
          ibge: '2906857',
          cityName: 'Capela do Alto Alegre'
        },
        {
          ibge: '2906873',
          cityName: 'Capim Grosso'
        },
        {
          ibge: '2906899',
          cityName: 'Carai­bas'
        },
        {
          ibge: '2906907',
          cityName: 'Caravelas'
        },
        {
          ibge: '2907004',
          cityName: 'Cardeal da Silva'
        },
        {
          ibge: '2907103',
          cityName: 'Carinhanha'
        },
        {
          ibge: '2907202',
          cityName: 'Casa Nova'
        },
        {
          ibge: '2907301',
          cityName: 'Castro Alves'
        },
        {
          ibge: '2907400',
          cityName: 'Catolandia'
        },
        {
          ibge: '2907509',
          cityName: 'Catu'
        },
        {
          ibge: '2907558',
          cityName: 'Caturama'
        },
        {
          ibge: '2907608',
          cityName: 'Central'
        },
        {
          ibge: '2907707',
          cityName: 'Chorrocho'
        },
        {
          ibge: '2907806',
          cityName: 'Ci­cero Dantas'
        },
        {
          ibge: '2907905',
          cityName: 'Cipo'
        },
        {
          ibge: '2908002',
          cityName: 'Coaraci'
        },
        {
          ibge: '2908101',
          cityName: 'Cocos'
        },
        {
          ibge: '2908200',
          cityName: 'Conceicao da Feira'
        },
        {
          ibge: '2908309',
          cityName: 'Conceicao do Almeida'
        },
        {
          ibge: '2908408',
          cityName: 'Conceicao do Coite'
        },
        {
          ibge: '2908507',
          cityName: 'Conceicao do Jacui­pe'
        },
        {
          ibge: '2908606',
          cityName: 'Conde'
        },
        {
          ibge: '2908705',
          cityName: 'Condeiºba'
        },
        {
          ibge: '2908804',
          cityName: 'Contendas do Sincora'
        },
        {
          ibge: '2908903',
          cityName: 'Coracao de Maria'
        },
        {
          ibge: '2909000',
          cityName: 'Cordeiros'
        },
        {
          ibge: '2909109',
          cityName: 'Coribe'
        },
        {
          ibge: '2909208',
          cityName: 'Coronel Joao Sa'
        },
        {
          ibge: '2909307',
          cityName: 'Correntina'
        },
        {
          ibge: '2909406',
          cityName: 'Cotegipe'
        },
        {
          ibge: '2909505',
          cityName: 'Cravolandia'
        },
        {
          ibge: '2909604',
          cityName: 'Crisopolis'
        },
        {
          ibge: '2909703',
          cityName: 'Cristopolis'
        },
        {
          ibge: '2909802',
          cityName: 'Cruz das Almas'
        },
        {
          ibge: '2909901',
          cityName: 'Curaca'
        },
        {
          ibge: '2910008',
          cityName: 'Dario Meira'
        },
        {
          ibge: '2910057',
          cityName: 'Dias d\'Avila'
        },
        {
          ibge: '2910107',
          cityName: 'Dom Basi­lio'
        },
        {
          ibge: '2910206',
          cityName: 'Dom Macedo Costa'
        },
        {
          ibge: '2910305',
          cityName: 'Eli­sio Medrado'
        },
        {
          ibge: '2910404',
          cityName: 'Encruzilhada'
        },
        {
          ibge: '2910503',
          cityName: 'Entre Rios'
        },
        {
          ibge: '2900504',
          cityName: 'i‰rico Cardoso'
        },
        {
          ibge: '2910602',
          cityName: 'Esplanada'
        },
        {
          ibge: '2910701',
          cityName: 'Euclides da Cunha'
        },
        {
          ibge: '2910727',
          cityName: 'Eunapolis'
        },
        {
          ibge: '2910750',
          cityName: 'Fatima'
        },
        {
          ibge: '2910776',
          cityName: 'Feira da Mata'
        },
        {
          ibge: '2910800',
          cityName: 'Feira de Santana'
        },
        {
          ibge: '2910859',
          cityName: 'Filadelfia'
        },
        {
          ibge: '2910909',
          cityName: 'Firmino Alves'
        },
        {
          ibge: '2911006',
          cityName: 'Floresta Azul'
        },
        {
          ibge: '2911105',
          cityName: 'Formosa do Rio Preto'
        },
        {
          ibge: '2911204',
          cityName: 'Gandu'
        },
        {
          ibge: '2911253',
          cityName: 'Gaviao'
        },
        {
          ibge: '2911303',
          cityName: 'Gentio do Ouro'
        },
        {
          ibge: '2911402',
          cityName: 'Gloria'
        },
        {
          ibge: '2911501',
          cityName: 'Gongogi'
        },
        {
          ibge: '2911600',
          cityName: 'Governador Mangabeira'
        },
        {
          ibge: '2911659',
          cityName: 'Guajeru'
        },
        {
          ibge: '2911709',
          cityName: 'Guanambi'
        },
        {
          ibge: '2911808',
          cityName: 'Guaratinga'
        },
        {
          ibge: '2911857',
          cityName: 'Heliopolis'
        },
        {
          ibge: '2911907',
          cityName: 'Iacu'
        },
        {
          ibge: '2912004',
          cityName: 'Ibiassuciª'
        },
        {
          ibge: '2912103',
          cityName: 'Ibicarai­'
        },
        {
          ibge: '2912202',
          cityName: 'Ibicoara'
        },
        {
          ibge: '2912301',
          cityName: 'Ibicui­'
        },
        {
          ibge: '2912400',
          cityName: 'Ibipeba'
        },
        {
          ibge: '2912509',
          cityName: 'Ibipitanga'
        },
        {
          ibge: '2912608',
          cityName: 'Ibiquera'
        },
        {
          ibge: '2912707',
          cityName: 'Ibirapitanga'
        },
        {
          ibge: '2912806',
          cityName: 'Ibirapua'
        },
        {
          ibge: '2912905',
          cityName: 'Ibirataia'
        },
        {
          ibge: '2913002',
          cityName: 'Ibitiara'
        },
        {
          ibge: '2913101',
          cityName: 'Ibitita'
        },
        {
          ibge: '2913200',
          cityName: 'Ibotirama'
        },
        {
          ibge: '2913309',
          cityName: 'Ichu'
        },
        {
          ibge: '2913408',
          cityName: 'Igapora'
        },
        {
          ibge: '2913457',
          cityName: 'Igrapiiºna'
        },
        {
          ibge: '2913507',
          cityName: 'Iguai­'
        },
        {
          ibge: '2913606',
          cityName: 'Ilheus'
        },
        {
          ibge: '2913705',
          cityName: 'Inhambupe'
        },
        {
          ibge: '2913804',
          cityName: 'Ipecaeta'
        },
        {
          ibge: '2913903',
          cityName: 'Ipiaiº'
        },
        {
          ibge: '2914000',
          cityName: 'Ipira'
        },
        {
          ibge: '2914109',
          cityName: 'Ipupiara'
        },
        {
          ibge: '2914208',
          cityName: 'Irajuba'
        },
        {
          ibge: '2914307',
          cityName: 'Iramaia'
        },
        {
          ibge: '2914406',
          cityName: 'Iraquara'
        },
        {
          ibge: '2914505',
          cityName: 'Irara'
        },
        {
          ibge: '2914604',
          cityName: 'Ireciª'
        },
        {
          ibge: '2914653',
          cityName: 'Itabela'
        },
        {
          ibge: '2914703',
          cityName: 'Itaberaba'
        },
        {
          ibge: '2914802',
          cityName: 'Itabuna'
        },
        {
          ibge: '2914901',
          cityName: 'Itacare'
        },
        {
          ibge: '2915007',
          cityName: 'Itaete'
        },
        {
          ibge: '2915106',
          cityName: 'Itagi'
        },
        {
          ibge: '2915205',
          cityName: 'Itagiba'
        },
        {
          ibge: '2915304',
          cityName: 'Itagimirim'
        },
        {
          ibge: '2915353',
          cityName: 'Itaguacu da Bahia'
        },
        {
          ibge: '2915403',
          cityName: 'Itaju do Colonia'
        },
        {
          ibge: '2915502',
          cityName: 'Itajui­pe'
        },
        {
          ibge: '2915601',
          cityName: 'Itamaraju'
        },
        {
          ibge: '2915700',
          cityName: 'Itamari'
        },
        {
          ibge: '2915809',
          cityName: 'Itambe'
        },
        {
          ibge: '2915908',
          cityName: 'Itanagra'
        },
        {
          ibge: '2916005',
          cityName: 'Itanhem'
        },
        {
          ibge: '2916104',
          cityName: 'Itaparica'
        },
        {
          ibge: '2916203',
          cityName: 'Itape'
        },
        {
          ibge: '2916302',
          cityName: 'Itapebi'
        },
        {
          ibge: '2916401',
          cityName: 'Itapetinga'
        },
        {
          ibge: '2916500',
          cityName: 'Itapicuru'
        },
        {
          ibge: '2916609',
          cityName: 'Itapitanga'
        },
        {
          ibge: '2916708',
          cityName: 'Itaquara'
        },
        {
          ibge: '2916807',
          cityName: 'Itarantim'
        },
        {
          ibge: '2916856',
          cityName: 'Itatim'
        },
        {
          ibge: '2916906',
          cityName: 'Itirucu'
        },
        {
          ibge: '2917003',
          cityName: 'Itiiºba'
        },
        {
          ibge: '2917102',
          cityName: 'Itororo'
        },
        {
          ibge: '2917201',
          cityName: 'Ituacu'
        },
        {
          ibge: '2917300',
          cityName: 'Itubera'
        },
        {
          ibge: '2917334',
          cityName: 'Iuiiº'
        },
        {
          ibge: '2917359',
          cityName: 'Jaborandi'
        },
        {
          ibge: '2917409',
          cityName: 'Jacaraci'
        },
        {
          ibge: '2917508',
          cityName: 'Jacobina'
        },
        {
          ibge: '2917607',
          cityName: 'Jaguaquara'
        },
        {
          ibge: '2917706',
          cityName: 'Jaguarari'
        },
        {
          ibge: '2917805',
          cityName: 'Jaguaripe'
        },
        {
          ibge: '2917904',
          cityName: 'Jandai­ra'
        },
        {
          ibge: '2918001',
          cityName: 'Jequie'
        },
        {
          ibge: '2918100',
          cityName: 'Jeremoabo'
        },
        {
          ibge: '2918209',
          cityName: 'Jiquirica'
        },
        {
          ibge: '2918308',
          cityName: 'Jitaiºna'
        },
        {
          ibge: '2918357',
          cityName: 'Joao Dourado'
        },
        {
          ibge: '2918407',
          cityName: 'Juazeiro'
        },
        {
          ibge: '2918456',
          cityName: 'Jucurucu'
        },
        {
          ibge: '2918506',
          cityName: 'Jussara'
        },
        {
          ibge: '2918555',
          cityName: 'Jussari'
        },
        {
          ibge: '2918605',
          cityName: 'Jussiape'
        },
        {
          ibge: '2918704',
          cityName: 'Lafaiete Coutinho'
        },
        {
          ibge: '2918803',
          cityName: 'Lagoa Real'
        },
        {
          ibge: '2918902',
          cityName: 'Laje'
        },
        {
          ibge: '2919009',
          cityName: 'Lajedao'
        },
        {
          ibge: '2919058',
          cityName: 'Lajedinho'
        },
        {
          ibge: '2918753',
          cityName: 'Lajedo do Tabocal'
        },
        {
          ibge: '2919108',
          cityName: 'Lamarao'
        },
        {
          ibge: '2919157',
          cityName: 'Lapao'
        },
        {
          ibge: '2919207',
          cityName: 'Lauro de Freitas'
        },
        {
          ibge: '2919306',
          cityName: 'Lencois'
        },
        {
          ibge: '2919405',
          cityName: 'Lici­nio de Almeida'
        },
        {
          ibge: '2919504',
          cityName: 'Livramento de Nossa Senhora'
        },
        {
          ibge: '2919553',
          cityName: 'Lui­s Eduardo Magalhaes'
        },
        {
          ibge: '2919603',
          cityName: 'Macajuba'
        },
        {
          ibge: '2919702',
          cityName: 'Macarani'
        },
        {
          ibge: '2919801',
          cityName: 'Macaiºbas'
        },
        {
          ibge: '2919900',
          cityName: 'Macurure'
        },
        {
          ibge: '2919926',
          cityName: 'Madre de Deus'
        },
        {
          ibge: '2919959',
          cityName: 'Maetinga'
        },
        {
          ibge: '2920007',
          cityName: 'Maiquinique'
        },
        {
          ibge: '2920106',
          cityName: 'Mairi'
        },
        {
          ibge: '2920205',
          cityName: 'Malhada'
        },
        {
          ibge: '2920304',
          cityName: 'Malhada de Pedras'
        },
        {
          ibge: '2920403',
          cityName: 'Manoel Vitorino'
        },
        {
          ibge: '2920452',
          cityName: 'Mansidao'
        },
        {
          ibge: '2920502',
          cityName: 'Maracas'
        },
        {
          ibge: '2920601',
          cityName: 'Maragogipe'
        },
        {
          ibge: '2920700',
          cityName: 'Maraiº'
        },
        {
          ibge: '2920809',
          cityName: 'Marcioni­lio Souza'
        },
        {
          ibge: '2920908',
          cityName: 'Mascote'
        },
        {
          ibge: '2921005',
          cityName: 'Mata de Sao Joao'
        },
        {
          ibge: '2921054',
          cityName: 'Matina'
        },
        {
          ibge: '2921104',
          cityName: 'Medeiros Neto'
        },
        {
          ibge: '2921203',
          cityName: 'Miguel Calmon'
        },
        {
          ibge: '2921302',
          cityName: 'Milagres'
        },
        {
          ibge: '2921401',
          cityName: 'Mirangaba'
        },
        {
          ibge: '2921450',
          cityName: 'Mirante'
        },
        {
          ibge: '2921500',
          cityName: 'Monte Santo'
        },
        {
          ibge: '2921609',
          cityName: 'Morpara'
        },
        {
          ibge: '2921708',
          cityName: 'Morro do Chapeu'
        },
        {
          ibge: '2921807',
          cityName: 'Mortugaba'
        },
        {
          ibge: '2921906',
          cityName: 'Mucugiª'
        },
        {
          ibge: '2922003',
          cityName: 'Mucuri'
        },
        {
          ibge: '2922052',
          cityName: 'Mulungu do Morro'
        },
        {
          ibge: '2922102',
          cityName: 'Mundo Novo'
        },
        {
          ibge: '2922201',
          cityName: 'Muniz Ferreira'
        },
        {
          ibge: '2922250',
          cityName: 'Muquem de Sao Francisco'
        },
        {
          ibge: '2922300',
          cityName: 'Muritiba'
        },
        {
          ibge: '2922409',
          cityName: 'Mutui­pe'
        },
        {
          ibge: '2922508',
          cityName: 'Nazare'
        },
        {
          ibge: '2922607',
          cityName: 'Nilo Pecanha'
        },
        {
          ibge: '2922656',
          cityName: 'Nordestina'
        },
        {
          ibge: '2922706',
          cityName: 'Nova Canaa'
        },
        {
          ibge: '2922730',
          cityName: 'Nova Fatima'
        },
        {
          ibge: '2922755',
          cityName: 'Nova Ibia'
        },
        {
          ibge: '2922805',
          cityName: 'Nova Itarana'
        },
        {
          ibge: '2922854',
          cityName: 'Nova Redencao'
        },
        {
          ibge: '2922904',
          cityName: 'Nova Soure'
        },
        {
          ibge: '2923001',
          cityName: 'Nova Vicosa'
        },
        {
          ibge: '2923035',
          cityName: 'Novo Horizonte'
        },
        {
          ibge: '2923050',
          cityName: 'Novo Triunfo'
        },
        {
          ibge: '2923100',
          cityName: 'Olindina'
        },
        {
          ibge: '2923209',
          cityName: 'Oliveira dos Brejinhos'
        },
        {
          ibge: '2923308',
          cityName: 'Ouricangas'
        },
        {
          ibge: '2923357',
          cityName: 'Ourolandia'
        },
        {
          ibge: '2923407',
          cityName: 'Palmas de Monte Alto'
        },
        {
          ibge: '2923506',
          cityName: 'Palmeiras'
        },
        {
          ibge: '2923605',
          cityName: 'Paramirim'
        },
        {
          ibge: '2923704',
          cityName: 'Paratinga'
        },
        {
          ibge: '2923803',
          cityName: 'Paripiranga'
        },
        {
          ibge: '2923902',
          cityName: 'Pau Brasil'
        },
        {
          ibge: '2924009',
          cityName: 'Paulo Afonso'
        },
        {
          ibge: '2924058',
          cityName: 'Pe de Serra'
        },
        {
          ibge: '2924108',
          cityName: 'Pedrao'
        },
        {
          ibge: '2924207',
          cityName: 'Pedro Alexandre'
        },
        {
          ibge: '2924306',
          cityName: 'Piata'
        },
        {
          ibge: '2924405',
          cityName: 'Pilao Arcado'
        },
        {
          ibge: '2924504',
          cityName: 'Pindai­'
        },
        {
          ibge: '2924603',
          cityName: 'Pindobacu'
        },
        {
          ibge: '2924652',
          cityName: 'Pintadas'
        },
        {
          ibge: '2924678',
          cityName: 'Pirai­ do Norte'
        },
        {
          ibge: '2924702',
          cityName: 'Piripa'
        },
        {
          ibge: '2924801',
          cityName: 'Piritiba'
        },
        {
          ibge: '2924900',
          cityName: 'Planaltino'
        },
        {
          ibge: '2925006',
          cityName: 'Planalto'
        },
        {
          ibge: '2925105',
          cityName: 'Pociµes'
        },
        {
          ibge: '2925204',
          cityName: 'Pojuca'
        },
        {
          ibge: '2925253',
          cityName: 'Ponto Novo'
        },
        {
          ibge: '2925303',
          cityName: 'Porto Seguro'
        },
        {
          ibge: '2925402',
          cityName: 'Potiragua'
        },
        {
          ibge: '2925501',
          cityName: 'Prado'
        },
        {
          ibge: '2925600',
          cityName: 'Presidente Dutra'
        },
        {
          ibge: '2925709',
          cityName: 'Presidente Janio Quadros'
        },
        {
          ibge: '2925758',
          cityName: 'Presidente Tancredo Neves'
        },
        {
          ibge: '2925808',
          cityName: 'Queimadas'
        },
        {
          ibge: '2925907',
          cityName: 'Quijingue'
        },
        {
          ibge: '2925931',
          cityName: 'Quixabeira'
        },
        {
          ibge: '2925956',
          cityName: 'Rafael Jambeiro'
        },
        {
          ibge: '2926004',
          cityName: 'Remanso'
        },
        {
          ibge: '2926103',
          cityName: 'Retirolandia'
        },
        {
          ibge: '2926202',
          cityName: 'Riachao das Neves'
        },
        {
          ibge: '2926301',
          cityName: 'Riachao do Jacui­pe'
        },
        {
          ibge: '2926400',
          cityName: 'Riacho de Santana'
        },
        {
          ibge: '2926509',
          cityName: 'Ribeira do Amparo'
        },
        {
          ibge: '2926608',
          cityName: 'Ribeira do Pombal'
        },
        {
          ibge: '2926657',
          cityName: 'Ribeirao do Largo'
        },
        {
          ibge: '2926707',
          cityName: 'Rio de Contas'
        },
        {
          ibge: '2926806',
          cityName: 'Rio do Antonio'
        },
        {
          ibge: '2926905',
          cityName: 'Rio do Pires'
        },
        {
          ibge: '2927002',
          cityName: 'Rio Real'
        },
        {
          ibge: '2927101',
          cityName: 'Rodelas'
        },
        {
          ibge: '2927200',
          cityName: 'Ruy Barbosa'
        },
        {
          ibge: '2927309',
          cityName: 'Salinas da Margarida'
        },
        {
          ibge: '2927408',
          cityName: 'Salvador'
        },
        {
          ibge: '2927507',
          cityName: 'Santa Barbara'
        },
        {
          ibge: '2927606',
          cityName: 'Santa Bri­gida'
        },
        {
          ibge: '2927705',
          cityName: 'Santa Cruz Cabralia'
        },
        {
          ibge: '2927804',
          cityName: 'Santa Cruz da Vitoria'
        },
        {
          ibge: '2927903',
          cityName: 'Santa Iniªs'
        },
        {
          ibge: '2928059',
          cityName: 'Santa Luzia'
        },
        {
          ibge: '2928109',
          cityName: 'Santa Maria da Vitoria'
        },
        {
          ibge: '2928406',
          cityName: 'Santa Rita de Cassia'
        },
        {
          ibge: '2928505',
          cityName: 'Santa Teresinha'
        },
        {
          ibge: '2928000',
          cityName: 'Santaluz'
        },
        {
          ibge: '2928208',
          cityName: 'Santana'
        },
        {
          ibge: '2928307',
          cityName: 'Santanopolis'
        },
        {
          ibge: '2928604',
          cityName: 'Santo Amaro'
        },
        {
          ibge: '2928703',
          cityName: 'Santo Antonio de Jesus'
        },
        {
          ibge: '2928802',
          cityName: 'Santo Estiªvao'
        },
        {
          ibge: '2928901',
          cityName: 'Sao Desiderio'
        },
        {
          ibge: '2928950',
          cityName: 'Sao Domingos'
        },
        {
          ibge: '2929107',
          cityName: 'Sao Felipe'
        },
        {
          ibge: '2929008',
          cityName: 'Sao Felix'
        },
        {
          ibge: '2929057',
          cityName: 'Sao Felix do Coribe'
        },
        {
          ibge: '2929206',
          cityName: 'Sao Francisco do Conde'
        },
        {
          ibge: '2929255',
          cityName: 'Sao Gabriel'
        },
        {
          ibge: '2929305',
          cityName: 'Sao Goncalo dos Campos'
        },
        {
          ibge: '2929354',
          cityName: 'Sao Jose da Vitoria'
        },
        {
          ibge: '2929370',
          cityName: 'Sao Jose do Jacui­pe'
        },
        {
          ibge: '2929404',
          cityName: 'Sao Miguel das Matas'
        },
        {
          ibge: '2929503',
          cityName: 'Sao Sebastiao do Passe'
        },
        {
          ibge: '2929602',
          cityName: 'Sapeacu'
        },
        {
          ibge: '2929701',
          cityName: 'Satiro Dias'
        },
        {
          ibge: '2929750',
          cityName: 'Saubara'
        },
        {
          ibge: '2929800',
          cityName: 'Saiºde'
        },
        {
          ibge: '2929909',
          cityName: 'Seabra'
        },
        {
          ibge: '2930006',
          cityName: 'Sebastiao Laranjeiras'
        },
        {
          ibge: '2930105',
          cityName: 'Senhor do Bonfim'
        },
        {
          ibge: '2930204',
          cityName: 'Sento Se'
        },
        {
          ibge: '2930154',
          cityName: 'Serra do Ramalho'
        },
        {
          ibge: '2930303',
          cityName: 'Serra Dourada'
        },
        {
          ibge: '2930402',
          cityName: 'Serra Preta'
        },
        {
          ibge: '2930501',
          cityName: 'Serrinha'
        },
        {
          ibge: '2930600',
          cityName: 'Serrolandia'
        },
        {
          ibge: '2930709',
          cityName: 'Simiµes Filho'
        },
        {
          ibge: '2930758',
          cityName: 'Si­tio do Mato'
        },
        {
          ibge: '2930766',
          cityName: 'Si­tio do Quinto'
        },
        {
          ibge: '2930774',
          cityName: 'Sobradinho'
        },
        {
          ibge: '2930808',
          cityName: 'Souto Soares'
        },
        {
          ibge: '2930907',
          cityName: 'Tabocas do Brejo Velho'
        },
        {
          ibge: '2931004',
          cityName: 'Tanhacu'
        },
        {
          ibge: '2931053',
          cityName: 'Tanque Novo'
        },
        {
          ibge: '2931103',
          cityName: 'Tanquinho'
        },
        {
          ibge: '2931202',
          cityName: 'Taperoa'
        },
        {
          ibge: '2931301',
          cityName: 'Tapiramuta'
        },
        {
          ibge: '2931350',
          cityName: 'Teixeira de Freitas'
        },
        {
          ibge: '2931400',
          cityName: 'Teodoro Sampaio'
        },
        {
          ibge: '2931509',
          cityName: 'Teofilandia'
        },
        {
          ibge: '2931608',
          cityName: 'Teolandia'
        },
        {
          ibge: '2931707',
          cityName: 'Terra Nova'
        },
        {
          ibge: '2931806',
          cityName: 'Tremedal'
        },
        {
          ibge: '2931905',
          cityName: 'Tucano'
        },
        {
          ibge: '2932002',
          cityName: 'Uaua'
        },
        {
          ibge: '2932101',
          cityName: 'Ubai­ra'
        },
        {
          ibge: '2932200',
          cityName: 'Ubaitaba'
        },
        {
          ibge: '2932309',
          cityName: 'Ubata'
        },
        {
          ibge: '2932408',
          cityName: 'Uibai­'
        },
        {
          ibge: '2932457',
          cityName: 'Umburanas'
        },
        {
          ibge: '2932507',
          cityName: 'Una'
        },
        {
          ibge: '2932606',
          cityName: 'Urandi'
        },
        {
          ibge: '2932705',
          cityName: 'Urucuca'
        },
        {
          ibge: '2932804',
          cityName: 'Utinga'
        },
        {
          ibge: '2932903',
          cityName: 'Valenca'
        },
        {
          ibge: '2933000',
          cityName: 'Valente'
        },
        {
          ibge: '2933059',
          cityName: 'Varzea da Roca'
        },
        {
          ibge: '2933109',
          cityName: 'Varzea do Poco'
        },
        {
          ibge: '2933158',
          cityName: 'Varzea Nova'
        },
        {
          ibge: '2933174',
          cityName: 'Varzedo'
        },
        {
          ibge: '2933208',
          cityName: 'Vera Cruz'
        },
        {
          ibge: '2933257',
          cityName: 'Vereda'
        },
        {
          ibge: '2933307',
          cityName: 'Vitoria da Conquista'
        },
        {
          ibge: '2933406',
          cityName: 'Wagner'
        },
        {
          ibge: '2933455',
          cityName: 'Wanderley'
        },
        {
          ibge: '2933505',
          cityName: 'Wenceslau Guimaraes'
        },
        {
          ibge: '2933604',
          cityName: 'Xique-Xique'
        }
      ]
    },
    {
      abbreviation: 'CE',
      cities: [
        {
          ibge: '2300101',
          cityName: 'Abaiara'
        },
        {
          ibge: '2300150',
          cityName: 'Acarape'
        },
        {
          ibge: '2300200',
          cityName: 'Acaraiº'
        },
        {
          ibge: '2300309',
          cityName: 'Acopiara'
        },
        {
          ibge: '2300408',
          cityName: 'Aiuaba'
        },
        {
          ibge: '2300507',
          cityName: 'Alcantaras'
        },
        {
          ibge: '2300606',
          cityName: 'Altaneira'
        },
        {
          ibge: '2300705',
          cityName: 'Alto Santo'
        },
        {
          ibge: '2300754',
          cityName: 'Amontada'
        },
        {
          ibge: '2800100',
          cityName: 'Amparo de Sao Francisco'
        },
        {
          ibge: '2300804',
          cityName: 'Antonina do Norte'
        },
        {
          ibge: '2300903',
          cityName: 'Apuiares'
        },
        {
          ibge: '2800209',
          cityName: 'Aquidaba'
        },
        {
          ibge: '2301000',
          cityName: 'Aquiraz'
        },
        {
          ibge: '2800308',
          cityName: 'Aracaju'
        },
        {
          ibge: '2301109',
          cityName: 'Aracati'
        },
        {
          ibge: '2301208',
          cityName: 'Aracoiaba'
        },
        {
          ibge: '2301257',
          cityName: 'Ararenda'
        },
        {
          ibge: '2301307',
          cityName: 'Araripe'
        },
        {
          ibge: '2301406',
          cityName: 'Aratuba'
        },
        {
          ibge: '2800407',
          cityName: 'Araua'
        },
        {
          ibge: '2800506',
          cityName: 'Areia Branca'
        },
        {
          ibge: '2301505',
          cityName: 'Arneiroz'
        },
        {
          ibge: '2301604',
          cityName: 'Assare'
        },
        {
          ibge: '2301703',
          cityName: 'Aurora'
        },
        {
          ibge: '2301802',
          cityName: 'Baixio'
        },
        {
          ibge: '2301851',
          cityName: 'Banabuiiº'
        },
        {
          ibge: '2301901',
          cityName: 'Barbalha'
        },
        {
          ibge: '2800605',
          cityName: 'Barra dos Coqueiros'
        },
        {
          ibge: '2301950',
          cityName: 'Barreira'
        },
        {
          ibge: '2302008',
          cityName: 'Barro'
        },
        {
          ibge: '2302057',
          cityName: 'Barroquinha'
        },
        {
          ibge: '2302107',
          cityName: 'Baturite'
        },
        {
          ibge: '2302206',
          cityName: 'Beberibe'
        },
        {
          ibge: '2302305',
          cityName: 'Bela Cruz'
        },
        {
          ibge: '2302404',
          cityName: 'Boa Viagem'
        },
        {
          ibge: '2800670',
          cityName: 'Boquim'
        },
        {
          ibge: '2800704',
          cityName: 'Brejo Grande'
        },
        {
          ibge: '2302503',
          cityName: 'Brejo Santo'
        },
        {
          ibge: '2302602',
          cityName: 'Camocim'
        },
        {
          ibge: '2801009',
          cityName: 'Campo do Brito'
        },
        {
          ibge: '2302701',
          cityName: 'Campos Sales'
        },
        {
          ibge: '2801108',
          cityName: 'Canhoba'
        },
        {
          ibge: '2302800',
          cityName: 'Caninde'
        },
        {
          ibge: '2801207',
          cityName: 'Caninde de Sao Francisco'
        },
        {
          ibge: '2801306',
          cityName: 'Capela'
        },
        {
          ibge: '2302909',
          cityName: 'Capistrano'
        },
        {
          ibge: '2303006',
          cityName: 'Caridade'
        },
        {
          ibge: '2801405',
          cityName: 'Carira'
        },
        {
          ibge: '2303105',
          cityName: 'Carire'
        },
        {
          ibge: '2303204',
          cityName: 'Caririacu'
        },
        {
          ibge: '2303303',
          cityName: 'Cariiºs'
        },
        {
          ibge: '2801504',
          cityName: 'Carmopolis'
        },
        {
          ibge: '2303402',
          cityName: 'Carnaubal'
        },
        {
          ibge: '2303501',
          cityName: 'Cascavel'
        },
        {
          ibge: '2303600',
          cityName: 'Catarina'
        },
        {
          ibge: '2303659',
          cityName: 'Catunda'
        },
        {
          ibge: '2303709',
          cityName: 'Caucaia'
        },
        {
          ibge: '2303808',
          cityName: 'Cedro'
        },
        {
          ibge: '2801603',
          cityName: 'Cedro de Sao Joao'
        },
        {
          ibge: '2303907',
          cityName: 'Chaval'
        },
        {
          ibge: '2303931',
          cityName: 'Choro'
        },
        {
          ibge: '2303956',
          cityName: 'Chorozinho'
        },
        {
          ibge: '2304004',
          cityName: 'Coreaiº'
        },
        {
          ibge: '2304103',
          cityName: 'Crateiºs'
        },
        {
          ibge: '2304202',
          cityName: 'Crato'
        },
        {
          ibge: '2801702',
          cityName: 'Cristinapolis'
        },
        {
          ibge: '2304236',
          cityName: 'Croata'
        },
        {
          ibge: '2304251',
          cityName: 'Cruz'
        },
        {
          ibge: '2801900',
          cityName: 'Cumbe'
        },
        {
          ibge: '2304269',
          cityName: 'Deputado Irapuan Pinheiro'
        },
        {
          ibge: '2802007',
          cityName: 'Divina Pastora'
        },
        {
          ibge: '2304277',
          cityName: 'Ereriª'
        },
        {
          ibge: '2802106',
          cityName: 'Estancia'
        },
        {
          ibge: '2304285',
          cityName: 'Eusebio'
        },
        {
          ibge: '2304301',
          cityName: 'Farias Brito'
        },
        {
          ibge: '2802205',
          cityName: 'Feira Nova'
        },
        {
          ibge: '2304350',
          cityName: 'Forquilha'
        },
        {
          ibge: '2304400',
          cityName: 'Fortaleza'
        },
        {
          ibge: '2304459',
          cityName: 'Fortim'
        },
        {
          ibge: '2304509',
          cityName: 'Frecheirinha'
        },
        {
          ibge: '2802304',
          cityName: 'Frei Paulo'
        },
        {
          ibge: '2802403',
          cityName: 'Gararu'
        },
        {
          ibge: '2802502',
          cityName: 'General Maynard'
        },
        {
          ibge: '2304608',
          cityName: 'General Sampaio'
        },
        {
          ibge: '2304657',
          cityName: 'Graca'
        },
        {
          ibge: '2802601',
          cityName: 'Gracho Cardoso'
        },
        {
          ibge: '2304707',
          cityName: 'Granja'
        },
        {
          ibge: '2304806',
          cityName: 'Granjeiro'
        },
        {
          ibge: '2304905',
          cityName: 'Groai­ras'
        },
        {
          ibge: '2304954',
          cityName: 'Guaiiºba'
        },
        {
          ibge: '2305001',
          cityName: 'Guaraciaba do Norte'
        },
        {
          ibge: '2305100',
          cityName: 'Guaramiranga'
        },
        {
          ibge: '2305209',
          cityName: 'Hidrolandia'
        },
        {
          ibge: '2305233',
          cityName: 'Horizonte'
        },
        {
          ibge: '2305266',
          cityName: 'Ibaretama'
        },
        {
          ibge: '2305308',
          cityName: 'Ibiapina'
        },
        {
          ibge: '2305332',
          cityName: 'Ibicuitinga'
        },
        {
          ibge: '2305357',
          cityName: 'Icapui­'
        },
        {
          ibge: '2305407',
          cityName: 'Ico'
        },
        {
          ibge: '2305506',
          cityName: 'Iguatu'
        },
        {
          ibge: '2802700',
          cityName: 'Ilha das Flores'
        },
        {
          ibge: '2305605',
          cityName: 'Independiªncia'
        },
        {
          ibge: '2802809',
          cityName: 'Indiaroba'
        },
        {
          ibge: '2305654',
          cityName: 'Ipaporanga'
        },
        {
          ibge: '2305704',
          cityName: 'Ipaumirim'
        },
        {
          ibge: '2305803',
          cityName: 'Ipu'
        },
        {
          ibge: '2305902',
          cityName: 'Ipueiras'
        },
        {
          ibge: '2306009',
          cityName: 'Iracema'
        },
        {
          ibge: '2306108',
          cityName: 'Iraucuba'
        },
        {
          ibge: '2802908',
          cityName: 'Itabaiana'
        },
        {
          ibge: '2803005',
          cityName: 'Itabaianinha'
        },
        {
          ibge: '2803104',
          cityName: 'Itabi'
        },
        {
          ibge: '2306207',
          cityName: 'Itaicaba'
        },
        {
          ibge: '2306256',
          cityName: 'Itaitinga'
        },
        {
          ibge: '2306306',
          cityName: 'Itapaje'
        },
        {
          ibge: '2306405',
          cityName: 'Itapipoca'
        },
        {
          ibge: '2306504',
          cityName: 'Itapiiºna'
        },
        {
          ibge: '2803203',
          cityName: 'Itaporanga d\'Ajuda'
        },
        {
          ibge: '2306553',
          cityName: 'Itarema'
        },
        {
          ibge: '2306603',
          cityName: 'Itatira'
        },
        {
          ibge: '2306702',
          cityName: 'Jaguaretama'
        },
        {
          ibge: '2306801',
          cityName: 'Jaguaribara'
        },
        {
          ibge: '2306900',
          cityName: 'Jaguaribe'
        },
        {
          ibge: '2307007',
          cityName: 'Jaguaruana'
        },
        {
          ibge: '2803302',
          cityName: 'Japaratuba'
        },
        {
          ibge: '2803401',
          cityName: 'Japoata'
        },
        {
          ibge: '2307106',
          cityName: 'Jardim'
        },
        {
          ibge: '2307205',
          cityName: 'Jati'
        },
        {
          ibge: '2307254',
          cityName: 'Jijoca de Jericoacoara'
        },
        {
          ibge: '2307304',
          cityName: 'Juazeiro do Norte'
        },
        {
          ibge: '2307403',
          cityName: 'Jucas'
        },
        {
          ibge: '2803500',
          cityName: 'Lagarto'
        },
        {
          ibge: '2803609',
          cityName: 'Laranjeiras'
        },
        {
          ibge: '2307502',
          cityName: 'Lavras da Mangabeira'
        },
        {
          ibge: '2307601',
          cityName: 'Limoeiro do Norte'
        },
        {
          ibge: '2803708',
          cityName: 'Macambira'
        },
        {
          ibge: '2307635',
          cityName: 'Madalena'
        },
        {
          ibge: '2803807',
          cityName: 'Malhada dos Bois'
        },
        {
          ibge: '2803906',
          cityName: 'Malhador'
        },
        {
          ibge: '2307650',
          cityName: 'Maracanaiº'
        },
        {
          ibge: '2307700',
          cityName: 'Maranguape'
        },
        {
          ibge: '2307809',
          cityName: 'Marco'
        },
        {
          ibge: '2307908',
          cityName: 'Martinopole'
        },
        {
          ibge: '2804003',
          cityName: 'Maruim'
        },
        {
          ibge: '2308005',
          cityName: 'Massapiª'
        },
        {
          ibge: '2308104',
          cityName: 'Mauriti'
        },
        {
          ibge: '2308203',
          cityName: 'Meruoca'
        },
        {
          ibge: '2308302',
          cityName: 'Milagres'
        },
        {
          ibge: '2308351',
          cityName: 'Milha'
        },
        {
          ibge: '2308377',
          cityName: 'Mirai­ma'
        },
        {
          ibge: '2308401',
          cityName: 'Missao Velha'
        },
        {
          ibge: '2804102',
          cityName: 'Moita Bonita'
        },
        {
          ibge: '2308500',
          cityName: 'Mombaca'
        },
        {
          ibge: '2308609',
          cityName: 'Monsenhor Tabosa'
        },
        {
          ibge: '2804201',
          cityName: 'Monte Alegre de Sergipe'
        },
        {
          ibge: '2308708',
          cityName: 'Morada Nova'
        },
        {
          ibge: '2308807',
          cityName: 'Moraiºjo'
        },
        {
          ibge: '2308906',
          cityName: 'Morrinhos'
        },
        {
          ibge: '2309003',
          cityName: 'Mucambo'
        },
        {
          ibge: '2309102',
          cityName: 'Mulungu'
        },
        {
          ibge: '2804300',
          cityName: 'Muribeca'
        },
        {
          ibge: '2804409',
          cityName: 'Neopolis'
        },
        {
          ibge: '2804458',
          cityName: 'Nossa Senhora Aparecida'
        },
        {
          ibge: '2804508',
          cityName: 'Nossa Senhora da Gloria'
        },
        {
          ibge: '2804607',
          cityName: 'Nossa Senhora das Dores'
        },
        {
          ibge: '2804706',
          cityName: 'Nossa Senhora de Lourdes'
        },
        {
          ibge: '2804805',
          cityName: 'Nossa Senhora do Socorro'
        },
        {
          ibge: '2309201',
          cityName: 'Nova Olinda'
        },
        {
          ibge: '2309300',
          cityName: 'Nova Russas'
        },
        {
          ibge: '2309409',
          cityName: 'Novo Oriente'
        },
        {
          ibge: '2309458',
          cityName: 'Ocara'
        },
        {
          ibge: '2309508',
          cityName: 'Oros'
        },
        {
          ibge: '2309607',
          cityName: 'Pacajus'
        },
        {
          ibge: '2309706',
          cityName: 'Pacatuba'
        },
        {
          ibge: '2804904',
          cityName: 'Pacatuba'
        },
        {
          ibge: '2309805',
          cityName: 'Pacoti'
        },
        {
          ibge: '2309904',
          cityName: 'Pacuja'
        },
        {
          ibge: '2310001',
          cityName: 'Palhano'
        },
        {
          ibge: '2310100',
          cityName: 'Palmacia'
        },
        {
          ibge: '2310209',
          cityName: 'Paracuru'
        },
        {
          ibge: '2310258',
          cityName: 'Paraipaba'
        },
        {
          ibge: '2310308',
          cityName: 'Parambu'
        },
        {
          ibge: '2310407',
          cityName: 'Paramoti'
        },
        {
          ibge: '2310506',
          cityName: 'Pedra Branca'
        },
        {
          ibge: '2805000',
          cityName: 'Pedra Mole'
        },
        {
          ibge: '2805109',
          cityName: 'Pedrinhas'
        },
        {
          ibge: '2310605',
          cityName: 'Penaforte'
        },
        {
          ibge: '2310704',
          cityName: 'Pentecoste'
        },
        {
          ibge: '2310803',
          cityName: 'Pereiro'
        },
        {
          ibge: '2310852',
          cityName: 'Pindoretama'
        },
        {
          ibge: '2805208',
          cityName: 'Pinhao'
        },
        {
          ibge: '2310902',
          cityName: 'Piquet Carneiro'
        },
        {
          ibge: '2805307',
          cityName: 'Pirambu'
        },
        {
          ibge: '2310951',
          cityName: 'Pires Ferreira'
        },
        {
          ibge: '2805406',
          cityName: 'Poco Redondo'
        },
        {
          ibge: '2805505',
          cityName: 'Poco Verde'
        },
        {
          ibge: '2311009',
          cityName: 'Poranga'
        },
        {
          ibge: '2311108',
          cityName: 'Porteiras'
        },
        {
          ibge: '2805604',
          cityName: 'Porto da Folha'
        },
        {
          ibge: '2311207',
          cityName: 'Potengi'
        },
        {
          ibge: '2311231',
          cityName: 'Potiretama'
        },
        {
          ibge: '2805703',
          cityName: 'Propria'
        },
        {
          ibge: '2311264',
          cityName: 'Quiterianopolis'
        },
        {
          ibge: '2311306',
          cityName: 'Quixada'
        },
        {
          ibge: '2311355',
          cityName: 'Quixelo'
        },
        {
          ibge: '2311405',
          cityName: 'Quixeramobim'
        },
        {
          ibge: '2311504',
          cityName: 'Quixere'
        },
        {
          ibge: '2311603',
          cityName: 'Redencao'
        },
        {
          ibge: '2311702',
          cityName: 'Reriutaba'
        },
        {
          ibge: '2805802',
          cityName: 'Riachao do Dantas'
        },
        {
          ibge: '2805901',
          cityName: 'Riachuelo'
        },
        {
          ibge: '2806008',
          cityName: 'Ribeiropolis'
        },
        {
          ibge: '2806107',
          cityName: 'Rosario do Catete'
        },
        {
          ibge: '2311801',
          cityName: 'Russas'
        },
        {
          ibge: '2311900',
          cityName: 'Saboeiro'
        },
        {
          ibge: '2806206',
          cityName: 'Salgado'
        },
        {
          ibge: '2311959',
          cityName: 'Salitre'
        },
        {
          ibge: '2806305',
          cityName: 'Santa Luzia do Itanhy'
        },
        {
          ibge: '2312205',
          cityName: 'Santa Quiteria'
        },
        {
          ibge: '2806503',
          cityName: 'Santa Rosa de Lima'
        },
        {
          ibge: '2312007',
          cityName: 'Santana do Acaraiº'
        },
        {
          ibge: '2312106',
          cityName: 'Santana do Cariri'
        },
        {
          ibge: '2806404',
          cityName: 'Santana do Sao Francisco'
        },
        {
          ibge: '2806602',
          cityName: 'Santo Amaro das Brotas'
        },
        {
          ibge: '2312304',
          cityName: 'Sao Benedito'
        },
        {
          ibge: '2806701',
          cityName: 'Sao Cristovao'
        },
        {
          ibge: '2806800',
          cityName: 'Sao Domingos'
        },
        {
          ibge: '2806909',
          cityName: 'Sao Francisco'
        },
        {
          ibge: '2312403',
          cityName: 'Sao Goncalo do Amarante'
        },
        {
          ibge: '2312502',
          cityName: 'Sao Joao do Jaguaribe'
        },
        {
          ibge: '2312601',
          cityName: 'Sao Lui­s do Curu'
        },
        {
          ibge: '2807006',
          cityName: 'Sao Miguel do Aleixo'
        },
        {
          ibge: '2312700',
          cityName: 'Senador Pompeu'
        },
        {
          ibge: '2312809',
          cityName: 'Senador Sa'
        },
        {
          ibge: '2807105',
          cityName: 'Simao Dias'
        },
        {
          ibge: '2807204',
          cityName: 'Siriri'
        },
        {
          ibge: '2312908',
          cityName: 'Sobral'
        },
        {
          ibge: '2313005',
          cityName: 'Solonopole'
        },
        {
          ibge: '2313104',
          cityName: 'Tabuleiro do Norte'
        },
        {
          ibge: '2313203',
          cityName: 'Tamboril'
        },
        {
          ibge: '2313252',
          cityName: 'Tarrafas'
        },
        {
          ibge: '2313302',
          cityName: 'Taua'
        },
        {
          ibge: '2313351',
          cityName: 'Tejucuoca'
        },
        {
          ibge: '2807303',
          cityName: 'Telha'
        },
        {
          ibge: '2313401',
          cityName: 'Tiangua'
        },
        {
          ibge: '2807402',
          cityName: 'Tobias Barreto'
        },
        {
          ibge: '2807501',
          cityName: 'Tomar do Geru'
        },
        {
          ibge: '2313500',
          cityName: 'Trairi'
        },
        {
          ibge: '2313559',
          cityName: 'Tururu'
        },
        {
          ibge: '2313609',
          cityName: 'Ubajara'
        },
        {
          ibge: '2313708',
          cityName: 'Umari'
        },
        {
          ibge: '2807600',
          cityName: 'Umbaiºba'
        },
        {
          ibge: '2313757',
          cityName: 'Umirim'
        },
        {
          ibge: '2313807',
          cityName: 'Uruburetama'
        },
        {
          ibge: '2313906',
          cityName: 'Uruoca'
        },
        {
          ibge: '2313955',
          cityName: 'Varjota'
        },
        {
          ibge: '2314003',
          cityName: 'Varzea Alegre'
        },
        {
          ibge: '2314102',
          cityName: 'Vicosa do Ceara'
        }
      ]
    },
    {
      abbreviation: 'DF',
      cities: [
        {
          ibge: '5300108',
          cityName: 'Brasi­lia'
        }
      ]
    },
    {
      abbreviation: 'ES',
      cities: [
        {
          ibge: '3200102',
          cityName: 'Afonso Claudio'
        },
        {
          ibge: '3200169',
          cityName: 'Agua Doce do Norte'
        },
        {
          ibge: '3200136',
          cityName: 'Aguia Branca'
        },
        {
          ibge: '3200201',
          cityName: 'Alegre'
        },
        {
          ibge: '3200300',
          cityName: 'Alfredo Chaves'
        },
        {
          ibge: '3200359',
          cityName: 'Alto Rio Novo'
        },
        {
          ibge: '3200409',
          cityName: 'Anchieta'
        },
        {
          ibge: '3200508',
          cityName: 'Apiaca'
        },
        {
          ibge: '3200607',
          cityName: 'Aracruz'
        },
        {
          ibge: '3200706',
          cityName: 'Atilio Vivacqua'
        },
        {
          ibge: '3200805',
          cityName: 'Baixo Guandu'
        },
        {
          ibge: '3200904',
          cityName: 'Barra de Sao Francisco'
        },
        {
          ibge: '3201001',
          cityName: 'Boa Esperanca'
        },
        {
          ibge: '3201100',
          cityName: 'Bom Jesus do Norte'
        },
        {
          ibge: '3201159',
          cityName: 'Brejetuba'
        },
        {
          ibge: '3201209',
          cityName: 'Cachoeiro de Itapemirim'
        },
        {
          ibge: '3201308',
          cityName: 'Cariacica'
        },
        {
          ibge: '3201407',
          cityName: 'Castelo'
        },
        {
          ibge: '3201506',
          cityName: 'Colatina'
        },
        {
          ibge: '3201605',
          cityName: 'Conceicao da Barra'
        },
        {
          ibge: '3201704',
          cityName: 'Conceicao do Castelo'
        },
        {
          ibge: '3201803',
          cityName: 'Divino de Sao Lourenco'
        },
        {
          ibge: '3201902',
          cityName: 'Domingos Martins'
        },
        {
          ibge: '3202009',
          cityName: 'Dores do Rio Preto'
        },
        {
          ibge: '3202108',
          cityName: 'Ecoporanga'
        },
        {
          ibge: '3202207',
          cityName: 'Fundao'
        },
        {
          ibge: '3202256',
          cityName: 'Governador Lindenberg'
        },
        {
          ibge: '3202306',
          cityName: 'Guacui­'
        },
        {
          ibge: '3202405',
          cityName: 'Guarapari'
        },
        {
          ibge: '3202454',
          cityName: 'Ibatiba'
        },
        {
          ibge: '3202504',
          cityName: 'Ibiracu'
        },
        {
          ibge: '3202553',
          cityName: 'Ibitirama'
        },
        {
          ibge: '3202603',
          cityName: 'Iconha'
        },
        {
          ibge: '3202652',
          cityName: 'Irupi'
        },
        {
          ibge: '3202702',
          cityName: 'Itaguacu'
        },
        {
          ibge: '3202801',
          cityName: 'Itapemirim'
        },
        {
          ibge: '3202900',
          cityName: 'Itarana'
        },
        {
          ibge: '3203007',
          cityName: 'Iiºna'
        },
        {
          ibge: '3203056',
          cityName: 'Jaguare'
        },
        {
          ibge: '3203106',
          cityName: 'Jeronimo Monteiro'
        },
        {
          ibge: '3203130',
          cityName: 'Joao Neiva'
        },
        {
          ibge: '3203163',
          cityName: 'Laranja da Terra'
        },
        {
          ibge: '3203205',
          cityName: 'Linhares'
        },
        {
          ibge: '3203304',
          cityName: 'Mantenopolis'
        },
        {
          ibge: '3203320',
          cityName: 'Maratai­zes'
        },
        {
          ibge: '3203346',
          cityName: 'Marechal Floriano'
        },
        {
          ibge: '3203353',
          cityName: 'Marilandia'
        },
        {
          ibge: '3203403',
          cityName: 'Mimoso do Sul'
        },
        {
          ibge: '3203502',
          cityName: 'Montanha'
        },
        {
          ibge: '3203601',
          cityName: 'Mucurici'
        },
        {
          ibge: '3203700',
          cityName: 'Muniz Freire'
        },
        {
          ibge: '3203809',
          cityName: 'Muqui'
        },
        {
          ibge: '3203908',
          cityName: 'Nova Venecia'
        },
        {
          ibge: '3204005',
          cityName: 'Pancas'
        },
        {
          ibge: '3204054',
          cityName: 'Pedro Canario'
        },
        {
          ibge: '3204104',
          cityName: 'Pinheiros'
        },
        {
          ibge: '3204203',
          cityName: 'Piiºma'
        },
        {
          ibge: '3204252',
          cityName: 'Ponto Belo'
        },
        {
          ibge: '3204302',
          cityName: 'Presidente Kennedy'
        },
        {
          ibge: '3204351',
          cityName: 'Rio Bananal'
        },
        {
          ibge: '3204401',
          cityName: 'Rio Novo do Sul'
        },
        {
          ibge: '3204500',
          cityName: 'Santa Leopoldina'
        },
        {
          ibge: '3204559',
          cityName: 'Santa Maria de Jetiba'
        },
        {
          ibge: '3204609',
          cityName: 'Santa Teresa'
        },
        {
          ibge: '3204658',
          cityName: 'Sao Domingos do Norte'
        },
        {
          ibge: '3204708',
          cityName: 'Sao Gabriel da Palha'
        },
        {
          ibge: '3204807',
          cityName: 'Sao Jose do Calcado'
        },
        {
          ibge: '3204906',
          cityName: 'Sao Mateus'
        },
        {
          ibge: '3204955',
          cityName: 'Sao Roque do Canaa'
        },
        {
          ibge: '3205002',
          cityName: 'Serra'
        },
        {
          ibge: '3205010',
          cityName: 'Sooretama'
        },
        {
          ibge: '3205036',
          cityName: 'Vargem Alta'
        },
        {
          ibge: '3205069',
          cityName: 'Venda Nova do Imigrante'
        },
        {
          ibge: '3205101',
          cityName: 'Viana'
        },
        {
          ibge: '3205150',
          cityName: 'Vila Pavao'
        },
        {
          ibge: '3205176',
          cityName: 'Vila Valerio'
        },
        {
          ibge: '3205200',
          cityName: 'Vila Velha'
        },
        {
          ibge: '3205309',
          cityName: 'Vitoria'
        }
      ]
    },
    {
      abbreviation: 'GO',
      cities: [
        {
          ibge: '5200050',
          cityName: 'Abadia de Goias'
        },
        {
          ibge: '5200100',
          cityName: 'Abadiania'
        },
        {
          ibge: '5200134',
          cityName: 'Acreiºna'
        },
        {
          ibge: '5200159',
          cityName: 'Adelandia'
        },
        {
          ibge: '5200175',
          cityName: 'Agua Fria de Goias'
        },
        {
          ibge: '5200209',
          cityName: 'Agua Limpa'
        },
        {
          ibge: '5200258',
          cityName: 'Aguas Lindas de Goias'
        },
        {
          ibge: '5200308',
          cityName: 'Alexania'
        },
        {
          ibge: '5200506',
          cityName: 'Aloandia'
        },
        {
          ibge: '5200555',
          cityName: 'Alto Horizonte'
        },
        {
          ibge: '5200605',
          cityName: 'Alto Parai­so de Goias'
        },
        {
          ibge: '5200803',
          cityName: 'Alvorada do Norte'
        },
        {
          ibge: '5200829',
          cityName: 'Amaralina'
        },
        {
          ibge: '5200852',
          cityName: 'Americano do Brasil'
        },
        {
          ibge: '5200902',
          cityName: 'Amorinopolis'
        },
        {
          ibge: '5201108',
          cityName: 'Anapolis'
        },
        {
          ibge: '5201207',
          cityName: 'Anhanguera'
        },
        {
          ibge: '5201306',
          cityName: 'Anicuns'
        },
        {
          ibge: '5201405',
          cityName: 'Aparecida de Goiania'
        },
        {
          ibge: '5201454',
          cityName: 'Aparecida do Rio Doce'
        },
        {
          ibge: '5201504',
          cityName: 'Apore'
        },
        {
          ibge: '5201603',
          cityName: 'Aracu'
        },
        {
          ibge: '5201702',
          cityName: 'Aragarcas'
        },
        {
          ibge: '5201801',
          cityName: 'Aragoiania'
        },
        {
          ibge: '5202155',
          cityName: 'Araguapaz'
        },
        {
          ibge: '5202353',
          cityName: 'Arenopolis'
        },
        {
          ibge: '5202502',
          cityName: 'Aruana'
        },
        {
          ibge: '5202601',
          cityName: 'Aurilandia'
        },
        {
          ibge: '5202809',
          cityName: 'Avelinopolis'
        },
        {
          ibge: '5203104',
          cityName: 'Baliza'
        },
        {
          ibge: '5203203',
          cityName: 'Barro Alto'
        },
        {
          ibge: '5203302',
          cityName: 'Bela Vista de Goias'
        },
        {
          ibge: '5203401',
          cityName: 'Bom Jardim de Goias'
        },
        {
          ibge: '5203500',
          cityName: 'Bom Jesus de Goias'
        },
        {
          ibge: '5203559',
          cityName: 'Bonfinopolis'
        },
        {
          ibge: '5203575',
          cityName: 'Bonopolis'
        },
        {
          ibge: '5203609',
          cityName: 'Brazabrantes'
        },
        {
          ibge: '5203807',
          cityName: 'Britania'
        },
        {
          ibge: '5203906',
          cityName: 'Buriti Alegre'
        },
        {
          ibge: '5203939',
          cityName: 'Buriti de Goias'
        },
        {
          ibge: '5203962',
          cityName: 'Buritinopolis'
        },
        {
          ibge: '5204003',
          cityName: 'Cabeceiras'
        },
        {
          ibge: '5204102',
          cityName: 'Cachoeira Alta'
        },
        {
          ibge: '5204201',
          cityName: 'Cachoeira de Goias'
        },
        {
          ibge: '5204250',
          cityName: 'Cachoeira Dourada'
        },
        {
          ibge: '5204300',
          cityName: 'Cacu'
        },
        {
          ibge: '5204409',
          cityName: 'Caiaponia'
        },
        {
          ibge: '5204508',
          cityName: 'Caldas Novas'
        },
        {
          ibge: '5204557',
          cityName: 'Caldazinha'
        },
        {
          ibge: '5204607',
          cityName: 'Campestre de Goias'
        },
        {
          ibge: '5204656',
          cityName: 'Campinacu'
        },
        {
          ibge: '5204706',
          cityName: 'Campinorte'
        },
        {
          ibge: '5204805',
          cityName: 'Campo Alegre de Goias'
        },
        {
          ibge: '5204854',
          cityName: 'Campo Limpo de Goias'
        },
        {
          ibge: '5204904',
          cityName: 'Campos Belos'
        },
        {
          ibge: '5204953',
          cityName: 'Campos Verdes'
        },
        {
          ibge: '5205000',
          cityName: 'Carmo do Rio Verde'
        },
        {
          ibge: '5205059',
          cityName: 'Castelandia'
        },
        {
          ibge: '5205109',
          cityName: 'Catalao'
        },
        {
          ibge: '5205208',
          cityName: 'Caturai­'
        },
        {
          ibge: '5205307',
          cityName: 'Cavalcante'
        },
        {
          ibge: '5205406',
          cityName: 'Ceres'
        },
        {
          ibge: '5205455',
          cityName: 'Cezarina'
        },
        {
          ibge: '5205471',
          cityName: 'Chapadao do Ceu'
        },
        {
          ibge: '5205497',
          cityName: 'Cidade Ocidental'
        },
        {
          ibge: '5205513',
          cityName: 'Cocalzinho de Goias'
        },
        {
          ibge: '5205521',
          cityName: 'Colinas do Sul'
        },
        {
          ibge: '5205703',
          cityName: 'Corrego do Ouro'
        },
        {
          ibge: '5205802',
          cityName: 'Corumba de Goias'
        },
        {
          ibge: '5205901',
          cityName: 'Corumbai­ba'
        },
        {
          ibge: '5206206',
          cityName: 'Cristalina'
        },
        {
          ibge: '5206305',
          cityName: 'Cristianopolis'
        },
        {
          ibge: '5206404',
          cityName: 'Crixas'
        },
        {
          ibge: '5206503',
          cityName: 'Cromi­nia'
        },
        {
          ibge: '5206602',
          cityName: 'Cumari'
        },
        {
          ibge: '5206701',
          cityName: 'Damianopolis'
        },
        {
          ibge: '5206800',
          cityName: 'Damolandia'
        },
        {
          ibge: '5206909',
          cityName: 'Davinopolis'
        },
        {
          ibge: '5207105',
          cityName: 'Diorama'
        },
        {
          ibge: '5208301',
          cityName: 'Divinopolis de Goias'
        },
        {
          ibge: '5207253',
          cityName: 'Doverlandia'
        },
        {
          ibge: '5207352',
          cityName: 'Edealina'
        },
        {
          ibge: '5207402',
          cityName: 'Edeia'
        },
        {
          ibge: '5207501',
          cityName: 'Estrela do Norte'
        },
        {
          ibge: '5207535',
          cityName: 'Faina'
        },
        {
          ibge: '5207600',
          cityName: 'Fazenda Nova'
        },
        {
          ibge: '5207808',
          cityName: 'Firminopolis'
        },
        {
          ibge: '5207907',
          cityName: 'Flores de Goias'
        },
        {
          ibge: '5208004',
          cityName: 'Formosa'
        },
        {
          ibge: '5208103',
          cityName: 'Formoso'
        },
        {
          ibge: '5208152',
          cityName: 'Gameleira de Goias'
        },
        {
          ibge: '5208400',
          cityName: 'Goianapolis'
        },
        {
          ibge: '5208509',
          cityName: 'Goiandira'
        },
        {
          ibge: '5208608',
          cityName: 'Goianesia'
        },
        {
          ibge: '5208707',
          cityName: 'Goiania'
        },
        {
          ibge: '5208806',
          cityName: 'Goianira'
        },
        {
          ibge: '5208905',
          cityName: 'Goias'
        },
        {
          ibge: '5209101',
          cityName: 'Goiatuba'
        },
        {
          ibge: '5209150',
          cityName: 'Gouvelandia'
        },
        {
          ibge: '5209200',
          cityName: 'Guapo'
        },
        {
          ibge: '5209291',
          cityName: 'Guarai­ta'
        },
        {
          ibge: '5209408',
          cityName: 'Guarani de Goias'
        },
        {
          ibge: '5209457',
          cityName: 'Guarinos'
        },
        {
          ibge: '5209606',
          cityName: 'Heitorai­'
        },
        {
          ibge: '5209705',
          cityName: 'Hidrolandia'
        },
        {
          ibge: '5209804',
          cityName: 'Hidrolina'
        },
        {
          ibge: '5209903',
          cityName: 'Iaciara'
        },
        {
          ibge: '5209937',
          cityName: 'Inaciolandia'
        },
        {
          ibge: '5209952',
          cityName: 'Indiara'
        },
        {
          ibge: '5210000',
          cityName: 'Inhumas'
        },
        {
          ibge: '5210109',
          cityName: 'Ipameri'
        },
        {
          ibge: '5210158',
          cityName: 'Ipiranga de Goias'
        },
        {
          ibge: '5210208',
          cityName: 'Ipora'
        },
        {
          ibge: '5210307',
          cityName: 'Israelandia'
        },
        {
          ibge: '5210406',
          cityName: 'Itaberai­'
        },
        {
          ibge: '5210562',
          cityName: 'Itaguari'
        },
        {
          ibge: '5210604',
          cityName: 'Itaguaru'
        },
        {
          ibge: '5210802',
          cityName: 'Itaja'
        },
        {
          ibge: '5210901',
          cityName: 'Itapaci'
        },
        {
          ibge: '5211008',
          cityName: 'Itapirapua'
        },
        {
          ibge: '5211206',
          cityName: 'Itapuranga'
        },
        {
          ibge: '5211305',
          cityName: 'Itaruma'
        },
        {
          ibge: '5211404',
          cityName: 'Itaucu'
        },
        {
          ibge: '5211503',
          cityName: 'Itumbiara'
        },
        {
          ibge: '5211602',
          cityName: 'Ivolandia'
        },
        {
          ibge: '5211701',
          cityName: 'Jandaia'
        },
        {
          ibge: '5211800',
          cityName: 'Jaragua'
        },
        {
          ibge: '5211909',
          cityName: 'Jatai­'
        },
        {
          ibge: '5212006',
          cityName: 'Jaupaci'
        },
        {
          ibge: '5212055',
          cityName: 'Jesiºpolis'
        },
        {
          ibge: '5212105',
          cityName: 'Joviania'
        },
        {
          ibge: '5212204',
          cityName: 'Jussara'
        },
        {
          ibge: '5212253',
          cityName: 'Lagoa Santa'
        },
        {
          ibge: '5212303',
          cityName: 'Leopoldo de Bulhiµes'
        },
        {
          ibge: '5212501',
          cityName: 'Luziania'
        },
        {
          ibge: '5212600',
          cityName: 'Mairipotaba'
        },
        {
          ibge: '5212709',
          cityName: 'Mambai­'
        },
        {
          ibge: '5212808',
          cityName: 'Mara Rosa'
        },
        {
          ibge: '5212907',
          cityName: 'Marzagao'
        },
        {
          ibge: '5212956',
          cityName: 'Matrincha'
        },
        {
          ibge: '5213004',
          cityName: 'Maurilandia'
        },
        {
          ibge: '5213053',
          cityName: 'Mimoso de Goias'
        },
        {
          ibge: '5213087',
          cityName: 'Minacu'
        },
        {
          ibge: '5213103',
          cityName: 'Mineiros'
        },
        {
          ibge: '5213400',
          cityName: 'Moipora'
        },
        {
          ibge: '5213509',
          cityName: 'Monte Alegre de Goias'
        },
        {
          ibge: '5213707',
          cityName: 'Montes Claros de Goias'
        },
        {
          ibge: '5213756',
          cityName: 'Montividiu'
        },
        {
          ibge: '5213772',
          cityName: 'Montividiu do Norte'
        },
        {
          ibge: '5213806',
          cityName: 'Morrinhos'
        },
        {
          ibge: '5213855',
          cityName: 'Morro Agudo de Goias'
        },
        {
          ibge: '5213905',
          cityName: 'Mossamedes'
        },
        {
          ibge: '5214002',
          cityName: 'Mozarlandia'
        },
        {
          ibge: '5214051',
          cityName: 'Mundo Novo'
        },
        {
          ibge: '5214101',
          cityName: 'Mutunopolis'
        },
        {
          ibge: '5214408',
          cityName: 'Nazario'
        },
        {
          ibge: '5214507',
          cityName: 'Neropolis'
        },
        {
          ibge: '5214606',
          cityName: 'Niquelandia'
        },
        {
          ibge: '5214705',
          cityName: 'Nova America'
        },
        {
          ibge: '5214804',
          cityName: 'Nova Aurora'
        },
        {
          ibge: '5214838',
          cityName: 'Nova Crixas'
        },
        {
          ibge: '5214861',
          cityName: 'Nova Gloria'
        },
        {
          ibge: '5214879',
          cityName: 'Nova Iguacu de Goias'
        },
        {
          ibge: '5214903',
          cityName: 'Nova Roma'
        },
        {
          ibge: '5215009',
          cityName: 'Nova Veneza'
        },
        {
          ibge: '5215207',
          cityName: 'Novo Brasil'
        },
        {
          ibge: '5215231',
          cityName: 'Novo Gama'
        },
        {
          ibge: '5215256',
          cityName: 'Novo Planalto'
        },
        {
          ibge: '5215306',
          cityName: 'Orizona'
        },
        {
          ibge: '5215405',
          cityName: 'Ouro Verde de Goias'
        },
        {
          ibge: '5215504',
          cityName: 'Ouvidor'
        },
        {
          ibge: '5215603',
          cityName: 'Padre Bernardo'
        },
        {
          ibge: '5215652',
          cityName: 'Palestina de Goias'
        },
        {
          ibge: '5215702',
          cityName: 'Palmeiras de Goias'
        },
        {
          ibge: '5215801',
          cityName: 'Palmelo'
        },
        {
          ibge: '5215900',
          cityName: 'Palminopolis'
        },
        {
          ibge: '5216007',
          cityName: 'Panama'
        },
        {
          ibge: '5216304',
          cityName: 'Paranaiguara'
        },
        {
          ibge: '5216403',
          cityName: 'Paraiºna'
        },
        {
          ibge: '5216452',
          cityName: 'Perolandia'
        },
        {
          ibge: '5216809',
          cityName: 'Petrolina de Goias'
        },
        {
          ibge: '5216908',
          cityName: 'Pilar de Goias'
        },
        {
          ibge: '5217104',
          cityName: 'Piracanjuba'
        },
        {
          ibge: '5217203',
          cityName: 'Piranhas'
        },
        {
          ibge: '5217302',
          cityName: 'Pirenopolis'
        },
        {
          ibge: '5217401',
          cityName: 'Pires do Rio'
        },
        {
          ibge: '5217609',
          cityName: 'Planaltina'
        },
        {
          ibge: '5217708',
          cityName: 'Pontalina'
        },
        {
          ibge: '5218003',
          cityName: 'Porangatu'
        },
        {
          ibge: '5218052',
          cityName: 'Porteirao'
        },
        {
          ibge: '5218102',
          cityName: 'Portelandia'
        },
        {
          ibge: '5218300',
          cityName: 'Posse'
        },
        {
          ibge: '5218391',
          cityName: 'Professor Jamil'
        },
        {
          ibge: '5218508',
          cityName: 'Quirinopolis'
        },
        {
          ibge: '5218607',
          cityName: 'Rialma'
        },
        {
          ibge: '5218706',
          cityName: 'Rianapolis'
        },
        {
          ibge: '5218789',
          cityName: 'Rio Quente'
        },
        {
          ibge: '5218805',
          cityName: 'Rio Verde'
        },
        {
          ibge: '5218904',
          cityName: 'Rubiataba'
        },
        {
          ibge: '5219001',
          cityName: 'Sanclerlandia'
        },
        {
          ibge: '5219100',
          cityName: 'Santa Barbara de Goias'
        },
        {
          ibge: '5219209',
          cityName: 'Santa Cruz de Goias'
        },
        {
          ibge: '5219258',
          cityName: 'Santa Fe de Goias'
        },
        {
          ibge: '5219308',
          cityName: 'Santa Helena de Goias'
        },
        {
          ibge: '5219357',
          cityName: 'Santa Isabel'
        },
        {
          ibge: '5219407',
          cityName: 'Santa Rita do Araguaia'
        },
        {
          ibge: '5219456',
          cityName: 'Santa Rita do Novo Destino'
        },
        {
          ibge: '5219506',
          cityName: 'Santa Rosa de Goias'
        },
        {
          ibge: '5219605',
          cityName: 'Santa Tereza de Goias'
        },
        {
          ibge: '5219704',
          cityName: 'Santa Terezinha de Goias'
        },
        {
          ibge: '5219712',
          cityName: 'Santo Antonio da Barra'
        },
        {
          ibge: '5219738',
          cityName: 'Santo Antonio de Goias'
        },
        {
          ibge: '5219753',
          cityName: 'Santo Antonio do Descoberto'
        },
        {
          ibge: '5219803',
          cityName: 'Sao Domingos'
        },
        {
          ibge: '5219902',
          cityName: 'Sao Francisco de Goias'
        },
        {
          ibge: '5220009',
          cityName: 'Sao Joao d\'Alianca'
        },
        {
          ibge: '5220058',
          cityName: 'Sao Joao da Paraiºna'
        },
        {
          ibge: '5220108',
          cityName: 'Sao Lui­s de Montes Belos'
        },
        {
          ibge: '5220157',
          cityName: 'Sao Luiz do Norte'
        },
        {
          ibge: '5220207',
          cityName: 'Sao Miguel do Araguaia'
        },
        {
          ibge: '5220264',
          cityName: 'Sao Miguel do Passa Quatro'
        },
        {
          ibge: '5220280',
          cityName: 'Sao Patri­cio'
        },
        {
          ibge: '5220405',
          cityName: 'Sao Simao'
        },
        {
          ibge: '5220454',
          cityName: 'Senador Canedo'
        },
        {
          ibge: '5220504',
          cityName: 'Serranopolis'
        },
        {
          ibge: '5220603',
          cityName: 'Silvania'
        },
        {
          ibge: '5220686',
          cityName: 'Simolandia'
        },
        {
          ibge: '5220702',
          cityName: 'Si­tio d\'Abadia'
        },
        {
          ibge: '5221007',
          cityName: 'Taquaral de Goias'
        },
        {
          ibge: '5221080',
          cityName: 'Teresina de Goias'
        },
        {
          ibge: '5221197',
          cityName: 'Terezopolis de Goias'
        },
        {
          ibge: '5221304',
          cityName: 'Triªs Ranchos'
        },
        {
          ibge: '5221403',
          cityName: 'Trindade'
        },
        {
          ibge: '5221452',
          cityName: 'Trombas'
        },
        {
          ibge: '5221502',
          cityName: 'Turvania'
        },
        {
          ibge: '5221551',
          cityName: 'Turvelandia'
        },
        {
          ibge: '5221577',
          cityName: 'Uirapuru'
        },
        {
          ibge: '5221601',
          cityName: 'Uruacu'
        },
        {
          ibge: '5221700',
          cityName: 'Uruana'
        },
        {
          ibge: '5221809',
          cityName: 'Urutai­'
        },
        {
          ibge: '5221858',
          cityName: 'Valparai­so de Goias'
        },
        {
          ibge: '5221908',
          cityName: 'Varjao'
        },
        {
          ibge: '5222005',
          cityName: 'Vianopolis'
        },
        {
          ibge: '5222054',
          cityName: 'Vicentinopolis'
        },
        {
          ibge: '5222203',
          cityName: 'Vila Boa'
        },
        {
          ibge: '5222302',
          cityName: 'Vila Propi­cio'
        }
      ]
    },
    {
      abbreviation: 'MA',
      cities: [
        {
          ibge: '2100055',
          cityName: 'Acailandia'
        },
        {
          ibge: '2100105',
          cityName: 'Afonso Cunha'
        },
        {
          ibge: '2100154',
          cityName: 'Agua Doce do Maranhao'
        },
        {
          ibge: '2100204',
          cityName: 'Alcantara'
        },
        {
          ibge: '2100303',
          cityName: 'Aldeias Altas'
        },
        {
          ibge: '2100402',
          cityName: 'Altamira do Maranhao'
        },
        {
          ibge: '2100436',
          cityName: 'Alto Alegre do Maranhao'
        },
        {
          ibge: '2100477',
          cityName: 'Alto Alegre do Pindare'
        },
        {
          ibge: '2100501',
          cityName: 'Alto Parnai­ba'
        },
        {
          ibge: '2100550',
          cityName: 'Amapa do Maranhao'
        },
        {
          ibge: '2100600',
          cityName: 'Amarante do Maranhao'
        },
        {
          ibge: '2100709',
          cityName: 'Anajatuba'
        },
        {
          ibge: '2100808',
          cityName: 'Anapurus'
        },
        {
          ibge: '2100832',
          cityName: 'Apicum-Acu'
        },
        {
          ibge: '2100873',
          cityName: 'Araguana'
        },
        {
          ibge: '2100907',
          cityName: 'Araioses'
        },
        {
          ibge: '2100956',
          cityName: 'Arame'
        },
        {
          ibge: '2101004',
          cityName: 'Arari'
        },
        {
          ibge: '2101103',
          cityName: 'Axixa'
        },
        {
          ibge: '2101202',
          cityName: 'Bacabal'
        },
        {
          ibge: '2101251',
          cityName: 'Bacabeira'
        },
        {
          ibge: '2101301',
          cityName: 'Bacuri'
        },
        {
          ibge: '2101350',
          cityName: 'Bacurituba'
        },
        {
          ibge: '2101400',
          cityName: 'Balsas'
        },
        {
          ibge: '2101509',
          cityName: 'Barao de Grajaiº'
        },
        {
          ibge: '2101608',
          cityName: 'Barra do Corda'
        },
        {
          ibge: '2101707',
          cityName: 'Barreirinhas'
        },
        {
          ibge: '2101772',
          cityName: 'Bela Vista do Maranhao'
        },
        {
          ibge: '2101731',
          cityName: 'Belagua'
        },
        {
          ibge: '2101806',
          cityName: 'Benedito Leite'
        },
        {
          ibge: '2101905',
          cityName: 'Bequimao'
        },
        {
          ibge: '2101939',
          cityName: 'Bernardo do Mearim'
        },
        {
          ibge: '2101970',
          cityName: 'Boa Vista do Gurupi'
        },
        {
          ibge: '2102002',
          cityName: 'Bom Jardim'
        },
        {
          ibge: '2102036',
          cityName: 'Bom Jesus das Selvas'
        },
        {
          ibge: '2102077',
          cityName: 'Bom Lugar'
        },
        {
          ibge: '2102101',
          cityName: 'Brejo'
        },
        {
          ibge: '2102150',
          cityName: 'Brejo de Areia'
        },
        {
          ibge: '2102200',
          cityName: 'Buriti'
        },
        {
          ibge: '2102309',
          cityName: 'Buriti Bravo'
        },
        {
          ibge: '2102325',
          cityName: 'Buriticupu'
        },
        {
          ibge: '2102358',
          cityName: 'Buritirana'
        },
        {
          ibge: '2102374',
          cityName: 'Cachoeira Grande'
        },
        {
          ibge: '2102408',
          cityName: 'Cajapio'
        },
        {
          ibge: '2102507',
          cityName: 'Cajari'
        },
        {
          ibge: '2102556',
          cityName: 'Campestre do Maranhao'
        },
        {
          ibge: '2102606',
          cityName: 'Candido Mendes'
        },
        {
          ibge: '2102705',
          cityName: 'Cantanhede'
        },
        {
          ibge: '2102754',
          cityName: 'Capinzal do Norte'
        },
        {
          ibge: '2102804',
          cityName: 'Carolina'
        },
        {
          ibge: '2102903',
          cityName: 'Carutapera'
        },
        {
          ibge: '2103000',
          cityName: 'Caxias'
        },
        {
          ibge: '2103109',
          cityName: 'Cedral'
        },
        {
          ibge: '2103125',
          cityName: 'Central do Maranhao'
        },
        {
          ibge: '2103158',
          cityName: 'Centro do Guilherme'
        },
        {
          ibge: '2103174',
          cityName: 'Centro Novo do Maranhao'
        },
        {
          ibge: '2103208',
          cityName: 'Chapadinha'
        },
        {
          ibge: '2103257',
          cityName: 'Cidelandia'
        },
        {
          ibge: '2103307',
          cityName: 'Codo'
        },
        {
          ibge: '2103406',
          cityName: 'Coelho Neto'
        },
        {
          ibge: '2103505',
          cityName: 'Colinas'
        },
        {
          ibge: '2103554',
          cityName: 'Conceicao do Lago-Acu'
        },
        {
          ibge: '2103604',
          cityName: 'Coroata'
        },
        {
          ibge: '2103703',
          cityName: 'Cururupu'
        },
        {
          ibge: '2103752',
          cityName: 'Davinopolis'
        },
        {
          ibge: '2103802',
          cityName: 'Dom Pedro'
        },
        {
          ibge: '2103901',
          cityName: 'Duque Bacelar'
        },
        {
          ibge: '2104008',
          cityName: 'Esperantinopolis'
        },
        {
          ibge: '2104057',
          cityName: 'Estreito'
        },
        {
          ibge: '2104073',
          cityName: 'Feira Nova do Maranhao'
        },
        {
          ibge: '2104081',
          cityName: 'Fernando Falcao'
        },
        {
          ibge: '2104099',
          cityName: 'Formosa da Serra Negra'
        },
        {
          ibge: '2104107',
          cityName: 'Fortaleza dos Nogueiras'
        },
        {
          ibge: '2104206',
          cityName: 'Fortuna'
        },
        {
          ibge: '2104305',
          cityName: 'Godofredo Viana'
        },
        {
          ibge: '2104404',
          cityName: 'Goncalves Dias'
        },
        {
          ibge: '2104503',
          cityName: 'Governador Archer'
        },
        {
          ibge: '2104552',
          cityName: 'Governador Edison Lobao'
        },
        {
          ibge: '2104602',
          cityName: 'Governador Eugiªnio Barros'
        },
        {
          ibge: '2104628',
          cityName: 'Governador Luiz Rocha'
        },
        {
          ibge: '2104651',
          cityName: 'Governador Newton Bello'
        },
        {
          ibge: '2104677',
          cityName: 'Governador Nunes Freire'
        },
        {
          ibge: '2104701',
          cityName: 'Graca Aranha'
        },
        {
          ibge: '2104800',
          cityName: 'Grajaiº'
        },
        {
          ibge: '2104909',
          cityName: 'Guimaraes'
        },
        {
          ibge: '2105005',
          cityName: 'Humberto de Campos'
        },
        {
          ibge: '2105104',
          cityName: 'Icatu'
        },
        {
          ibge: '2105153',
          cityName: 'Igarape do Meio'
        },
        {
          ibge: '2105203',
          cityName: 'Igarape Grande'
        },
        {
          ibge: '2105302',
          cityName: 'Imperatriz'
        },
        {
          ibge: '2105351',
          cityName: 'Itaipava do Grajaiº'
        },
        {
          ibge: '2105401',
          cityName: 'Itapecuru Mirim'
        },
        {
          ibge: '2105427',
          cityName: 'Itinga do Maranhao'
        },
        {
          ibge: '2105450',
          cityName: 'Jatoba'
        },
        {
          ibge: '2105476',
          cityName: 'Jenipapo dos Vieiras'
        },
        {
          ibge: '2105500',
          cityName: 'Joao Lisboa'
        },
        {
          ibge: '2105609',
          cityName: 'Joselandia'
        },
        {
          ibge: '2105658',
          cityName: 'Junco do Maranhao'
        },
        {
          ibge: '2105708',
          cityName: 'Lago da Pedra'
        },
        {
          ibge: '2105807',
          cityName: 'Lago do Junco'
        },
        {
          ibge: '2105948',
          cityName: 'Lago dos Rodrigues'
        },
        {
          ibge: '2105906',
          cityName: 'Lago Verde'
        },
        {
          ibge: '2105922',
          cityName: 'Lagoa do Mato'
        },
        {
          ibge: '2105963',
          cityName: 'Lagoa Grande do Maranhao'
        },
        {
          ibge: '2105989',
          cityName: 'Lajeado Novo'
        },
        {
          ibge: '2106003',
          cityName: 'Lima Campos'
        },
        {
          ibge: '2106102',
          cityName: 'Loreto'
        },
        {
          ibge: '2106201',
          cityName: 'Lui­s Domingues'
        },
        {
          ibge: '2106300',
          cityName: 'Magalhaes de Almeida'
        },
        {
          ibge: '2106326',
          cityName: 'Maracacume'
        },
        {
          ibge: '2106359',
          cityName: 'Maraja do Sena'
        },
        {
          ibge: '2106375',
          cityName: 'Maranhaozinho'
        },
        {
          ibge: '2106409',
          cityName: 'Mata Roma'
        },
        {
          ibge: '2106508',
          cityName: 'Matinha'
        },
        {
          ibge: '2106607',
          cityName: 'Matiµes'
        },
        {
          ibge: '2106631',
          cityName: 'Matiµes do Norte'
        },
        {
          ibge: '2106672',
          cityName: 'Milagres do Maranhao'
        },
        {
          ibge: '2106706',
          cityName: 'Mirador'
        },
        {
          ibge: '2106755',
          cityName: 'Miranda do Norte'
        },
        {
          ibge: '2106805',
          cityName: 'Mirinzal'
        },
        {
          ibge: '2106904',
          cityName: 'Moncao'
        },
        {
          ibge: '2107001',
          cityName: 'Montes Altos'
        },
        {
          ibge: '2107100',
          cityName: 'Morros'
        },
        {
          ibge: '2107209',
          cityName: 'Nina Rodrigues'
        },
        {
          ibge: '2107258',
          cityName: 'Nova Colinas'
        },
        {
          ibge: '2107308',
          cityName: 'Nova Iorque'
        },
        {
          ibge: '2107357',
          cityName: 'Nova Olinda do Maranhao'
        },
        {
          ibge: '2107407',
          cityName: 'Olho d\'Agua das Cunhas'
        },
        {
          ibge: '2107456',
          cityName: 'Olinda Nova do Maranhao'
        },
        {
          ibge: '2107506',
          cityName: 'Paco do Lumiar'
        },
        {
          ibge: '2107605',
          cityName: 'Palmeirandia'
        },
        {
          ibge: '2107704',
          cityName: 'Paraibano'
        },
        {
          ibge: '2107803',
          cityName: 'Parnarama'
        },
        {
          ibge: '2107902',
          cityName: 'Passagem Franca'
        },
        {
          ibge: '2108009',
          cityName: 'Pastos Bons'
        },
        {
          ibge: '2108058',
          cityName: 'Paulino Neves'
        },
        {
          ibge: '2108108',
          cityName: 'Paulo Ramos'
        },
        {
          ibge: '2108207',
          cityName: 'Pedreiras'
        },
        {
          ibge: '2108256',
          cityName: 'Pedro do Rosario'
        },
        {
          ibge: '2108306',
          cityName: 'Penalva'
        },
        {
          ibge: '2108405',
          cityName: 'Peri Mirim'
        },
        {
          ibge: '2108454',
          cityName: 'Peritoro'
        },
        {
          ibge: '2108504',
          cityName: 'Pindare-Mirim'
        },
        {
          ibge: '2108603',
          cityName: 'Pinheiro'
        },
        {
          ibge: '2108702',
          cityName: 'Pio XII'
        },
        {
          ibge: '2108801',
          cityName: 'Pirapemas'
        },
        {
          ibge: '2108900',
          cityName: 'Pocao de Pedras'
        },
        {
          ibge: '2109007',
          cityName: 'Porto Franco'
        },
        {
          ibge: '2109056',
          cityName: 'Porto Rico do Maranhao'
        },
        {
          ibge: '2109106',
          cityName: 'Presidente Dutra'
        },
        {
          ibge: '2109205',
          cityName: 'Presidente Juscelino'
        },
        {
          ibge: '2109239',
          cityName: 'Presidente Medici'
        },
        {
          ibge: '2109270',
          cityName: 'Presidente Sarney'
        },
        {
          ibge: '2109304',
          cityName: 'Presidente Vargas'
        },
        {
          ibge: '2109403',
          cityName: 'Primeira Cruz'
        },
        {
          ibge: '2109452',
          cityName: 'Raposa'
        },
        {
          ibge: '2109502',
          cityName: 'Riachao'
        },
        {
          ibge: '2109551',
          cityName: 'Ribamar Fiquene'
        },
        {
          ibge: '2109601',
          cityName: 'Rosario'
        },
        {
          ibge: '2109700',
          cityName: 'Sambai­ba'
        },
        {
          ibge: '2109759',
          cityName: 'Santa Filomena do Maranhao'
        },
        {
          ibge: '2109809',
          cityName: 'Santa Helena'
        },
        {
          ibge: '2109908',
          cityName: 'Santa Iniªs'
        },
        {
          ibge: '2110005',
          cityName: 'Santa Luzia'
        },
        {
          ibge: '2110039',
          cityName: 'Santa Luzia do Parua'
        },
        {
          ibge: '2110104',
          cityName: 'Santa Quiteria do Maranhao'
        },
        {
          ibge: '2110203',
          cityName: 'Santa Rita'
        },
        {
          ibge: '2110237',
          cityName: 'Santana do Maranhao'
        },
        {
          ibge: '2110278',
          cityName: 'Santo Amaro do Maranhao'
        },
        {
          ibge: '2110302',
          cityName: 'Santo Antonio dos Lopes'
        },
        {
          ibge: '2110401',
          cityName: 'Sao Benedito do Rio Preto'
        },
        {
          ibge: '2110500',
          cityName: 'Sao Bento'
        },
        {
          ibge: '2110609',
          cityName: 'Sao Bernardo'
        },
        {
          ibge: '2110658',
          cityName: 'Sao Domingos do Azeitao'
        },
        {
          ibge: '2110708',
          cityName: 'Sao Domingos do Maranhao'
        },
        {
          ibge: '2110807',
          cityName: 'Sao Felix de Balsas'
        },
        {
          ibge: '2110856',
          cityName: 'Sao Francisco do Brejao'
        },
        {
          ibge: '2110906',
          cityName: 'Sao Francisco do Maranhao'
        },
        {
          ibge: '2111003',
          cityName: 'Sao Joao Batista'
        },
        {
          ibge: '2111029',
          cityName: 'Sao Joao do Cariº'
        },
        {
          ibge: '2111052',
          cityName: 'Sao Joao do Parai­so'
        },
        {
          ibge: '2111078',
          cityName: 'Sao Joao do Soter'
        },
        {
          ibge: '2111102',
          cityName: 'Sao Joao dos Patos'
        },
        {
          ibge: '2111201',
          cityName: 'Sao Jose de Ribamar'
        },
        {
          ibge: '2111250',
          cityName: 'Sao Jose dos Basi­lios'
        },
        {
          ibge: '2111300',
          cityName: 'Sao Lui­s'
        },
        {
          ibge: '2111409',
          cityName: 'Sao Lui­s Gonzaga do Maranhao'
        },
        {
          ibge: '2111508',
          cityName: 'Sao Mateus do Maranhao'
        },
        {
          ibge: '2111532',
          cityName: 'Sao Pedro da Agua Branca'
        },
        {
          ibge: '2111573',
          cityName: 'Sao Pedro dos Crentes'
        },
        {
          ibge: '2111607',
          cityName: 'Sao Raimundo das Mangabeiras'
        },
        {
          ibge: '2111631',
          cityName: 'Sao Raimundo do Doca Bezerra'
        },
        {
          ibge: '2111672',
          cityName: 'Sao Roberto'
        },
        {
          ibge: '2111706',
          cityName: 'Sao Vicente Ferrer'
        },
        {
          ibge: '2111722',
          cityName: 'Satubinha'
        },
        {
          ibge: '2111748',
          cityName: 'Senador Alexandre Costa'
        },
        {
          ibge: '2111763',
          cityName: 'Senador La Rocque'
        },
        {
          ibge: '2111789',
          cityName: 'Serrano do Maranhao'
        },
        {
          ibge: '2111805',
          cityName: 'Si­tio Novo'
        },
        {
          ibge: '2111904',
          cityName: 'Sucupira do Norte'
        },
        {
          ibge: '2111953',
          cityName: 'Sucupira do Riachao'
        },
        {
          ibge: '2112001',
          cityName: 'Tasso Fragoso'
        },
        {
          ibge: '2112100',
          cityName: 'Timbiras'
        },
        {
          ibge: '2112209',
          cityName: 'Timon'
        },
        {
          ibge: '2112233',
          cityName: 'Trizidela do Vale'
        },
        {
          ibge: '2112274',
          cityName: 'Tabbreviationilandia'
        },
        {
          ibge: '2112308',
          cityName: 'Tuntum'
        },
        {
          ibge: '2112407',
          cityName: 'Turiacu'
        },
        {
          ibge: '2112456',
          cityName: 'Turilandia'
        },
        {
          ibge: '2112506',
          cityName: 'Tutoia'
        },
        {
          ibge: '2112605',
          cityName: 'Urbano Santos'
        },
        {
          ibge: '2112704',
          cityName: 'Vargem Grande'
        },
        {
          ibge: '2112803',
          cityName: 'Viana'
        },
        {
          ibge: '2112852',
          cityName: 'Vila Nova dos Marti­rios'
        },
        {
          ibge: '2112902',
          cityName: 'Vitoria do Mearim'
        },
        {
          ibge: '2113009',
          cityName: 'Vitorino Freire'
        },
        {
          ibge: '2114007',
          cityName: 'Ze Doca'
        }
      ]
    },
    {
      abbreviation: 'MG',
      cities: [
        {
          ibge: '3100104',
          cityName: 'Abadia dos Dourados'
        },
        {
          ibge: '3100203',
          cityName: 'Abaete'
        },
        {
          ibge: '3100302',
          cityName: 'Abre Campo'
        },
        {
          ibge: '3100401',
          cityName: 'Acaiaca'
        },
        {
          ibge: '3100500',
          cityName: 'Acucena'
        },
        {
          ibge: '3100609',
          cityName: 'Agua Boa'
        },
        {
          ibge: '3100708',
          cityName: 'Agua Comprida'
        },
        {
          ibge: '3100807',
          cityName: 'Aguanil'
        },
        {
          ibge: '3100906',
          cityName: 'Aguas Formosas'
        },
        {
          ibge: '3101003',
          cityName: 'Aguas Vermelhas'
        },
        {
          ibge: '3101102',
          cityName: 'Aimores'
        },
        {
          ibge: '3101201',
          cityName: 'Aiuruoca'
        },
        {
          ibge: '3101300',
          cityName: 'Alagoa'
        },
        {
          ibge: '3101409',
          cityName: 'Albertina'
        },
        {
          ibge: '3101508',
          cityName: 'Alem Parai­ba'
        },
        {
          ibge: '3101607',
          cityName: 'Alfenas'
        },
        {
          ibge: '3101631',
          cityName: 'Alfredo Vasconcelos'
        },
        {
          ibge: '3101706',
          cityName: 'Almenara'
        },
        {
          ibge: '3101805',
          cityName: 'Alpercata'
        },
        {
          ibge: '3101904',
          cityName: 'Alpinopolis'
        },
        {
          ibge: '3102001',
          cityName: 'Alterosa'
        },
        {
          ibge: '3102050',
          cityName: 'Alto Caparao'
        },
        {
          ibge: '3153509',
          cityName: 'Alto Jequitiba'
        },
        {
          ibge: '3102100',
          cityName: 'Alto Rio Doce'
        },
        {
          ibge: '3102209',
          cityName: 'Alvarenga'
        },
        {
          ibge: '3102308',
          cityName: 'Alvinopolis'
        },
        {
          ibge: '3102407',
          cityName: 'Alvorada de Minas'
        },
        {
          ibge: '3102506',
          cityName: 'Amparo do Serra'
        },
        {
          ibge: '3102605',
          cityName: 'Andradas'
        },
        {
          ibge: '3102803',
          cityName: 'Andrelandia'
        },
        {
          ibge: '3102852',
          cityName: 'Angelandia'
        },
        {
          ibge: '3102902',
          cityName: 'Antonio Carlos'
        },
        {
          ibge: '3103009',
          cityName: 'Antonio Dias'
        },
        {
          ibge: '3103108',
          cityName: 'Antonio Prado de Minas'
        },
        {
          ibge: '3103207',
          cityName: 'Aracai­'
        },
        {
          ibge: '3103306',
          cityName: 'Aracitaba'
        },
        {
          ibge: '3103405',
          cityName: 'Aracuai­'
        },
        {
          ibge: '3103504',
          cityName: 'Araguari'
        },
        {
          ibge: '3103603',
          cityName: 'Arantina'
        },
        {
          ibge: '3103702',
          cityName: 'Araponga'
        },
        {
          ibge: '3103751',
          cityName: 'Arapora'
        },
        {
          ibge: '3103801',
          cityName: 'Arapua'
        },
        {
          ibge: '3103900',
          cityName: 'Araiºjos'
        },
        {
          ibge: '3104007',
          cityName: 'Araxa'
        },
        {
          ibge: '3104106',
          cityName: 'Arceburgo'
        },
        {
          ibge: '3104205',
          cityName: 'Arcos'
        },
        {
          ibge: '3104304',
          cityName: 'Areado'
        },
        {
          ibge: '3104403',
          cityName: 'Argirita'
        },
        {
          ibge: '3104452',
          cityName: 'Aricanduva'
        },
        {
          ibge: '3104502',
          cityName: 'Arinos'
        },
        {
          ibge: '3104601',
          cityName: 'Astolfo Dutra'
        },
        {
          ibge: '3104700',
          cityName: 'Ataleia'
        },
        {
          ibge: '3104809',
          cityName: 'Augusto de Lima'
        },
        {
          ibge: '3104908',
          cityName: 'Baependi'
        },
        {
          ibge: '3105004',
          cityName: 'Baldim'
        },
        {
          ibge: '3105103',
          cityName: 'Bambui­'
        },
        {
          ibge: '3105202',
          cityName: 'Bandeira'
        },
        {
          ibge: '3105301',
          cityName: 'Bandeira do Sul'
        },
        {
          ibge: '3105400',
          cityName: 'Barao de Cocais'
        },
        {
          ibge: '3105509',
          cityName: 'Barao de Monte Alto'
        },
        {
          ibge: '3105608',
          cityName: 'Barbacena'
        },
        {
          ibge: '3105707',
          cityName: 'Barra Longa'
        },
        {
          ibge: '3105905',
          cityName: 'Barroso'
        },
        {
          ibge: '3106002',
          cityName: 'Bela Vista de Minas'
        },
        {
          ibge: '3106101',
          cityName: 'Belmiro Braga'
        },
        {
          ibge: '3106200',
          cityName: 'Belo Horizonte'
        },
        {
          ibge: '3106309',
          cityName: 'Belo Oriente'
        },
        {
          ibge: '3106408',
          cityName: 'Belo Vale'
        },
        {
          ibge: '3106507',
          cityName: 'Berilo'
        },
        {
          ibge: '3106655',
          cityName: 'Berizal'
        },
        {
          ibge: '3106606',
          cityName: 'Bertopolis'
        },
        {
          ibge: '3106705',
          cityName: 'Betim'
        },
        {
          ibge: '3106804',
          cityName: 'Bias Fortes'
        },
        {
          ibge: '3106903',
          cityName: 'Bicas'
        },
        {
          ibge: '3107000',
          cityName: 'Biquinhas'
        },
        {
          ibge: '3107109',
          cityName: 'Boa Esperanca'
        },
        {
          ibge: '3107208',
          cityName: 'Bocaina de Minas'
        },
        {
          ibge: '3107307',
          cityName: 'Bocaiiºva'
        },
        {
          ibge: '3107406',
          cityName: 'Bom Despacho'
        },
        {
          ibge: '3107505',
          cityName: 'Bom Jardim de Minas'
        },
        {
          ibge: '3107604',
          cityName: 'Bom Jesus da Penha'
        },
        {
          ibge: '3107703',
          cityName: 'Bom Jesus do Amparo'
        },
        {
          ibge: '3107802',
          cityName: 'Bom Jesus do Galho'
        },
        {
          ibge: '3107901',
          cityName: 'Bom Repouso'
        },
        {
          ibge: '3108008',
          cityName: 'Bom Sucesso'
        },
        {
          ibge: '3108107',
          cityName: 'Bonfim'
        },
        {
          ibge: '3108206',
          cityName: 'Bonfinopolis de Minas'
        },
        {
          ibge: '3108255',
          cityName: 'Bonito de Minas'
        },
        {
          ibge: '3108305',
          cityName: 'Borda da Mata'
        },
        {
          ibge: '3108404',
          cityName: 'Botelhos'
        },
        {
          ibge: '3108503',
          cityName: 'Botumirim'
        },
        {
          ibge: '3108701',
          cityName: 'Bras Pires'
        },
        {
          ibge: '3108552',
          cityName: 'Brasilandia de Minas'
        },
        {
          ibge: '3108602',
          cityName: 'Brasi­lia de Minas'
        },
        {
          ibge: '3108800',
          cityName: 'Braiºnas'
        },
        {
          ibge: '3108909',
          cityName: 'Brazopolis'
        },
        {
          ibge: '3109006',
          cityName: 'Brumadinho'
        },
        {
          ibge: '3109105',
          cityName: 'Bueno Brandao'
        },
        {
          ibge: '3109204',
          cityName: 'Buenopolis'
        },
        {
          ibge: '3109253',
          cityName: 'Bugre'
        },
        {
          ibge: '3109303',
          cityName: 'Buritis'
        },
        {
          ibge: '3109402',
          cityName: 'Buritizeiro'
        },
        {
          ibge: '3109451',
          cityName: 'Cabeceira Grande'
        },
        {
          ibge: '3109501',
          cityName: 'Cabo Verde'
        },
        {
          ibge: '3109600',
          cityName: 'Cachoeira da Prata'
        },
        {
          ibge: '3109709',
          cityName: 'Cachoeira de Minas'
        },
        {
          ibge: '3102704',
          cityName: 'Cachoeira de Pajeiº'
        },
        {
          ibge: '3109808',
          cityName: 'Cachoeira Dourada'
        },
        {
          ibge: '3109907',
          cityName: 'Caetanopolis'
        },
        {
          ibge: '3110004',
          cityName: 'Caete'
        },
        {
          ibge: '3110103',
          cityName: 'Caiana'
        },
        {
          ibge: '3110202',
          cityName: 'Cajuri'
        },
        {
          ibge: '3110301',
          cityName: 'Caldas'
        },
        {
          ibge: '3110400',
          cityName: 'Camacho'
        },
        {
          ibge: '3110509',
          cityName: 'Camanducaia'
        },
        {
          ibge: '3110608',
          cityName: 'Cambui­'
        },
        {
          ibge: '3110707',
          cityName: 'Cambuquira'
        },
        {
          ibge: '3110806',
          cityName: 'Campanario'
        },
        {
          ibge: '3110905',
          cityName: 'Campanha'
        },
        {
          ibge: '3111002',
          cityName: 'Campestre'
        },
        {
          ibge: '3111101',
          cityName: 'Campina Verde'
        },
        {
          ibge: '3111150',
          cityName: 'Campo Azul'
        },
        {
          ibge: '3111200',
          cityName: 'Campo Belo'
        },
        {
          ibge: '3111309',
          cityName: 'Campo do Meio'
        },
        {
          ibge: '3111408',
          cityName: 'Campo Florido'
        },
        {
          ibge: '3111507',
          cityName: 'Campos Altos'
        },
        {
          ibge: '3111606',
          cityName: 'Campos Gerais'
        },
        {
          ibge: '3111903',
          cityName: 'Cana Verde'
        },
        {
          ibge: '3111705',
          cityName: 'Canaa'
        },
        {
          ibge: '3111804',
          cityName: 'Canapolis'
        },
        {
          ibge: '3112000',
          cityName: 'Candeias'
        },
        {
          ibge: '3112059',
          cityName: 'Cantagalo'
        },
        {
          ibge: '3112109',
          cityName: 'Caparao'
        },
        {
          ibge: '3112208',
          cityName: 'Capela Nova'
        },
        {
          ibge: '3112307',
          cityName: 'Capelinha'
        },
        {
          ibge: '3112406',
          cityName: 'Capetinga'
        },
        {
          ibge: '3112505',
          cityName: 'Capim Branco'
        },
        {
          ibge: '3112604',
          cityName: 'Capinopolis'
        },
        {
          ibge: '3112653',
          cityName: 'Capitao Andrade'
        },
        {
          ibge: '3112703',
          cityName: 'Capitao Eneas'
        },
        {
          ibge: '3112802',
          cityName: 'Capitolio'
        },
        {
          ibge: '3112901',
          cityName: 'Caputira'
        },
        {
          ibge: '3113008',
          cityName: 'Carai­'
        },
        {
          ibge: '3113107',
          cityName: 'Caranai­ba'
        },
        {
          ibge: '3113206',
          cityName: 'Carandai­'
        },
        {
          ibge: '3113305',
          cityName: 'Carangola'
        },
        {
          ibge: '3113404',
          cityName: 'Caratinga'
        },
        {
          ibge: '3113503',
          cityName: 'Carbonita'
        },
        {
          ibge: '3113602',
          cityName: 'Careacu'
        },
        {
          ibge: '3113701',
          cityName: 'Carlos Chagas'
        },
        {
          ibge: '3113800',
          cityName: 'Carmesia'
        },
        {
          ibge: '3113909',
          cityName: 'Carmo da Cachoeira'
        },
        {
          ibge: '3114006',
          cityName: 'Carmo da Mata'
        },
        {
          ibge: '3114105',
          cityName: 'Carmo de Minas'
        },
        {
          ibge: '3114204',
          cityName: 'Carmo do Cajuru'
        },
        {
          ibge: '3114303',
          cityName: 'Carmo do Paranai­ba'
        },
        {
          ibge: '3114402',
          cityName: 'Carmo do Rio Claro'
        },
        {
          ibge: '3114501',
          cityName: 'Carmopolis de Minas'
        },
        {
          ibge: '3114550',
          cityName: 'Carneirinho'
        },
        {
          ibge: '3114600',
          cityName: 'Carrancas'
        },
        {
          ibge: '3114709',
          cityName: 'Carvalhopolis'
        },
        {
          ibge: '3114808',
          cityName: 'Carvalhos'
        },
        {
          ibge: '3114907',
          cityName: 'Casa Grande'
        },
        {
          ibge: '3115003',
          cityName: 'Cascalho Rico'
        },
        {
          ibge: '3115102',
          cityName: 'Cassia'
        },
        {
          ibge: '3115300',
          cityName: 'Cataguases'
        },
        {
          ibge: '3115359',
          cityName: 'Catas Altas'
        },
        {
          ibge: '3115409',
          cityName: 'Catas Altas da Noruega'
        },
        {
          ibge: '3115458',
          cityName: 'Catuji'
        },
        {
          ibge: '3115474',
          cityName: 'Catuti'
        },
        {
          ibge: '3115508',
          cityName: 'Caxambu'
        },
        {
          ibge: '3115607',
          cityName: 'Cedro do Abaete'
        },
        {
          ibge: '3115706',
          cityName: 'Central de Minas'
        },
        {
          ibge: '3115805',
          cityName: 'Centralina'
        },
        {
          ibge: '3115904',
          cityName: 'Chacara'
        },
        {
          ibge: '3116001',
          cityName: 'Chale'
        },
        {
          ibge: '3116100',
          cityName: 'Chapada do Norte'
        },
        {
          ibge: '3116159',
          cityName: 'Chapada Gaiºcha'
        },
        {
          ibge: '3116209',
          cityName: 'Chiador'
        },
        {
          ibge: '3116308',
          cityName: 'Cipotanea'
        },
        {
          ibge: '3116407',
          cityName: 'Claraval'
        },
        {
          ibge: '3116506',
          cityName: 'Claro dos Pociµes'
        },
        {
          ibge: '3116605',
          cityName: 'Claudio'
        },
        {
          ibge: '3116704',
          cityName: 'Coimbra'
        },
        {
          ibge: '3116803',
          cityName: 'Coluna'
        },
        {
          ibge: '3116902',
          cityName: 'Comendador Gomes'
        },
        {
          ibge: '3117009',
          cityName: 'Comercinho'
        },
        {
          ibge: '3117108',
          cityName: 'Conceicao da Aparecida'
        },
        {
          ibge: '3115201',
          cityName: 'Conceicao da Barra de Minas'
        },
        {
          ibge: '3117306',
          cityName: 'Conceicao das Alagoas'
        },
        {
          ibge: '3117207',
          cityName: 'Conceicao das Pedras'
        },
        {
          ibge: '3117405',
          cityName: 'Conceicao de Ipanema'
        },
        {
          ibge: '3117504',
          cityName: 'Conceicao do Mato Dentro'
        },
        {
          ibge: '3117603',
          cityName: 'Conceicao do Para'
        },
        {
          ibge: '3117702',
          cityName: 'Conceicao do Rio Verde'
        },
        {
          ibge: '3117801',
          cityName: 'Conceicao dos Ouros'
        },
        {
          ibge: '3117836',
          cityName: 'Conego Marinho'
        },
        {
          ibge: '3117876',
          cityName: 'Confins'
        },
        {
          ibge: '3117900',
          cityName: 'Congonhal'
        },
        {
          ibge: '3118007',
          cityName: 'Congonhas'
        },
        {
          ibge: '3118106',
          cityName: 'Congonhas do Norte'
        },
        {
          ibge: '3118205',
          cityName: 'Conquista'
        },
        {
          ibge: '3118304',
          cityName: 'Conselheiro Lafaiete'
        },
        {
          ibge: '3118403',
          cityName: 'Conselheiro Pena'
        },
        {
          ibge: '3118502',
          cityName: 'Consolacao'
        },
        {
          ibge: '3118601',
          cityName: 'Contagem'
        },
        {
          ibge: '3118700',
          cityName: 'Coqueiral'
        },
        {
          ibge: '3118809',
          cityName: 'Coracao de Jesus'
        },
        {
          ibge: '3118908',
          cityName: 'Cordisburgo'
        },
        {
          ibge: '3119005',
          cityName: 'Cordislandia'
        },
        {
          ibge: '3119104',
          cityName: 'Corinto'
        },
        {
          ibge: '3119203',
          cityName: 'Coroaci'
        },
        {
          ibge: '3119302',
          cityName: 'Coromandel'
        },
        {
          ibge: '3119401',
          cityName: 'Coronel Fabriciano'
        },
        {
          ibge: '3119500',
          cityName: 'Coronel Murta'
        },
        {
          ibge: '3119609',
          cityName: 'Coronel Pacheco'
        },
        {
          ibge: '3119708',
          cityName: 'Coronel Xavier Chaves'
        },
        {
          ibge: '3119807',
          cityName: 'Corrego Danta'
        },
        {
          ibge: '3119906',
          cityName: 'Corrego do Bom Jesus'
        },
        {
          ibge: '3119955',
          cityName: 'Corrego Fundo'
        },
        {
          ibge: '3120003',
          cityName: 'Corrego Novo'
        },
        {
          ibge: '3120102',
          cityName: 'Couto de Magalhaes de Minas'
        },
        {
          ibge: '3120151',
          cityName: 'Crisolita'
        },
        {
          ibge: '3120201',
          cityName: 'Cristais'
        },
        {
          ibge: '3120300',
          cityName: 'Cristalia'
        },
        {
          ibge: '3120409',
          cityName: 'Cristiano Otoni'
        },
        {
          ibge: '3120508',
          cityName: 'Cristina'
        },
        {
          ibge: '3120607',
          cityName: 'Crucilandia'
        },
        {
          ibge: '3120706',
          cityName: 'Cruzeiro da Fortaleza'
        },
        {
          ibge: '3120805',
          cityName: 'Cruzi­lia'
        },
        {
          ibge: '3120839',
          cityName: 'Cuparaque'
        },
        {
          ibge: '3120870',
          cityName: 'Curral de Dentro'
        },
        {
          ibge: '3120904',
          cityName: 'Curvelo'
        },
        {
          ibge: '3121001',
          cityName: 'Datas'
        },
        {
          ibge: '3121100',
          cityName: 'Delfim Moreira'
        },
        {
          ibge: '3121209',
          cityName: 'Delfinopolis'
        },
        {
          ibge: '3121258',
          cityName: 'Delta'
        },
        {
          ibge: '3121308',
          cityName: 'Descoberto'
        },
        {
          ibge: '3121407',
          cityName: 'Desterro de Entre Rios'
        },
        {
          ibge: '3121506',
          cityName: 'Desterro do Melo'
        },
        {
          ibge: '3121605',
          cityName: 'Diamantina'
        },
        {
          ibge: '3121704',
          cityName: 'Diogo de Vasconcelos'
        },
        {
          ibge: '3121803',
          cityName: 'Dioni­sio'
        },
        {
          ibge: '3121902',
          cityName: 'Divinesia'
        },
        {
          ibge: '3122009',
          cityName: 'Divino'
        },
        {
          ibge: '3122108',
          cityName: 'Divino das Laranjeiras'
        },
        {
          ibge: '3122207',
          cityName: 'Divinolandia de Minas'
        },
        {
          ibge: '3122306',
          cityName: 'Divinopolis'
        },
        {
          ibge: '3122355',
          cityName: 'Divisa Alegre'
        },
        {
          ibge: '3122405',
          cityName: 'Divisa Nova'
        },
        {
          ibge: '3122454',
          cityName: 'Divisopolis'
        },
        {
          ibge: '3122470',
          cityName: 'Dom Bosco'
        },
        {
          ibge: '3122504',
          cityName: 'Dom Cavati'
        },
        {
          ibge: '3122603',
          cityName: 'Dom Joaquim'
        },
        {
          ibge: '3122702',
          cityName: 'Dom Silverio'
        },
        {
          ibge: '3122801',
          cityName: 'Dom Vicoso'
        },
        {
          ibge: '3122900',
          cityName: 'Dona Eusebia'
        },
        {
          ibge: '3123007',
          cityName: 'Dores de Campos'
        },
        {
          ibge: '3123106',
          cityName: 'Dores de Guanhaes'
        },
        {
          ibge: '3123205',
          cityName: 'Dores do Indaia'
        },
        {
          ibge: '3123304',
          cityName: 'Dores do Turvo'
        },
        {
          ibge: '3123403',
          cityName: 'Doresopolis'
        },
        {
          ibge: '3123502',
          cityName: 'Douradoquara'
        },
        {
          ibge: '3123528',
          cityName: 'Durande'
        },
        {
          ibge: '3123601',
          cityName: 'Eloi Mendes'
        },
        {
          ibge: '3123700',
          cityName: 'Engenheiro Caldas'
        },
        {
          ibge: '3123809',
          cityName: 'Engenheiro Navarro'
        },
        {
          ibge: '3123858',
          cityName: 'Entre Folhas'
        },
        {
          ibge: '3123908',
          cityName: 'Entre Rios de Minas'
        },
        {
          ibge: '3124005',
          cityName: 'Ervalia'
        },
        {
          ibge: '3124104',
          cityName: 'Esmeraldas'
        },
        {
          ibge: '3124203',
          cityName: 'Espera Feliz'
        },
        {
          ibge: '3124302',
          cityName: 'Espinosa'
        },
        {
          ibge: '3124401',
          cityName: 'Espi­rito Santo do Dourado'
        },
        {
          ibge: '3124500',
          cityName: 'Estiva'
        },
        {
          ibge: '3124609',
          cityName: 'Estrela Dalva'
        },
        {
          ibge: '3124708',
          cityName: 'Estrela do Indaia'
        },
        {
          ibge: '3124807',
          cityName: 'Estrela do Sul'
        },
        {
          ibge: '3124906',
          cityName: 'Eugenopolis'
        },
        {
          ibge: '3125002',
          cityName: 'Ewbank da Camara'
        },
        {
          ibge: '3125101',
          cityName: 'Extrema'
        },
        {
          ibge: '3125200',
          cityName: 'Fama'
        },
        {
          ibge: '3125309',
          cityName: 'Faria Lemos'
        },
        {
          ibge: '3125408',
          cityName: 'Feli­cio dos Santos'
        },
        {
          ibge: '3125606',
          cityName: 'Felisburgo'
        },
        {
          ibge: '3125705',
          cityName: 'Felixlandia'
        },
        {
          ibge: '3125804',
          cityName: 'Fernandes Tourinho'
        },
        {
          ibge: '3125903',
          cityName: 'Ferros'
        },
        {
          ibge: '3125952',
          cityName: 'Fervedouro'
        },
        {
          ibge: '3126000',
          cityName: 'Florestal'
        },
        {
          ibge: '3126109',
          cityName: 'Formiga'
        },
        {
          ibge: '3126208',
          cityName: 'Formoso'
        },
        {
          ibge: '3126307',
          cityName: 'Fortaleza de Minas'
        },
        {
          ibge: '3126406',
          cityName: 'Fortuna de Minas'
        },
        {
          ibge: '3126505',
          cityName: 'Francisco Badaro'
        },
        {
          ibge: '3126604',
          cityName: 'Francisco Dumont'
        },
        {
          ibge: '3126703',
          cityName: 'Francisco Sa'
        },
        {
          ibge: '3126752',
          cityName: 'Franciscopolis'
        },
        {
          ibge: '3126802',
          cityName: 'Frei Gaspar'
        },
        {
          ibge: '3126901',
          cityName: 'Frei Inociªncio'
        },
        {
          ibge: '3126950',
          cityName: 'Frei Lagonegro'
        },
        {
          ibge: '3127008',
          cityName: 'Fronteira'
        },
        {
          ibge: '3127057',
          cityName: 'Fronteira dos Vales'
        },
        {
          ibge: '3127073',
          cityName: 'Fruta de Leite'
        },
        {
          ibge: '3127107',
          cityName: 'Frutal'
        },
        {
          ibge: '3127206',
          cityName: 'Funilandia'
        },
        {
          ibge: '3127305',
          cityName: 'Galileia'
        },
        {
          ibge: '3127339',
          cityName: 'Gameleiras'
        },
        {
          ibge: '3127354',
          cityName: 'Glaucilandia'
        },
        {
          ibge: '3127370',
          cityName: 'Goiabeira'
        },
        {
          ibge: '3127388',
          cityName: 'Goiana'
        },
        {
          ibge: '3127404',
          cityName: 'Goncalves'
        },
        {
          ibge: '3127503',
          cityName: 'Gonzaga'
        },
        {
          ibge: '3127602',
          cityName: 'Gouveia'
        },
        {
          ibge: '3127701',
          cityName: 'Governador Valadares'
        },
        {
          ibge: '3127800',
          cityName: 'Grao Mogol'
        },
        {
          ibge: '3127909',
          cityName: 'Grupiara'
        },
        {
          ibge: '3128006',
          cityName: 'Guanhaes'
        },
        {
          ibge: '3128105',
          cityName: 'Guape'
        },
        {
          ibge: '3128204',
          cityName: 'Guaraciaba'
        },
        {
          ibge: '3128253',
          cityName: 'Guaraciama'
        },
        {
          ibge: '3128303',
          cityName: 'Guaranesia'
        },
        {
          ibge: '3128402',
          cityName: 'Guarani'
        },
        {
          ibge: '3128501',
          cityName: 'Guarara'
        },
        {
          ibge: '3128600',
          cityName: 'Guarda-Mor'
        },
        {
          ibge: '3128709',
          cityName: 'Guaxupe'
        },
        {
          ibge: '3128808',
          cityName: 'Guidoval'
        },
        {
          ibge: '3128907',
          cityName: 'Guimarania'
        },
        {
          ibge: '3129004',
          cityName: 'Guiricema'
        },
        {
          ibge: '3129103',
          cityName: 'Gurinhata'
        },
        {
          ibge: '3129202',
          cityName: 'Heliodora'
        },
        {
          ibge: '3129301',
          cityName: 'Iapu'
        },
        {
          ibge: '3129400',
          cityName: 'Ibertioga'
        },
        {
          ibge: '3129509',
          cityName: 'Ibia'
        },
        {
          ibge: '3129608',
          cityName: 'Ibiai­'
        },
        {
          ibge: '3129657',
          cityName: 'Ibiracatu'
        },
        {
          ibge: '3129707',
          cityName: 'Ibiraci'
        },
        {
          ibge: '3129806',
          cityName: 'Ibirite'
        },
        {
          ibge: '3129905',
          cityName: 'Ibitiiºra de Minas'
        },
        {
          ibge: '3130002',
          cityName: 'Ibituruna'
        },
        {
          ibge: '3130051',
          cityName: 'Icarai­ de Minas'
        },
        {
          ibge: '3130101',
          cityName: 'Igarape'
        },
        {
          ibge: '3130200',
          cityName: 'Igaratinga'
        },
        {
          ibge: '3130309',
          cityName: 'Iguatama'
        },
        {
          ibge: '3130408',
          cityName: 'Ijaci'
        },
        {
          ibge: '3130507',
          cityName: 'Ilici­nea'
        },
        {
          ibge: '3130556',
          cityName: 'Imbe de Minas'
        },
        {
          ibge: '3130606',
          cityName: 'Inconfidentes'
        },
        {
          ibge: '3130655',
          cityName: 'Indaiabira'
        },
        {
          ibge: '3130705',
          cityName: 'Indianopolis'
        },
        {
          ibge: '3130804',
          cityName: 'Ingai­'
        },
        {
          ibge: '3130903',
          cityName: 'Inhapim'
        },
        {
          ibge: '3131000',
          cityName: 'Inhaiºma'
        },
        {
          ibge: '3131109',
          cityName: 'Inimutaba'
        },
        {
          ibge: '3131158',
          cityName: 'Ipaba'
        },
        {
          ibge: '3131208',
          cityName: 'Ipanema'
        },
        {
          ibge: '3131307',
          cityName: 'Ipatinga'
        },
        {
          ibge: '3131406',
          cityName: 'Ipiacu'
        },
        {
          ibge: '3131505',
          cityName: 'Ipuiiºna'
        },
        {
          ibge: '3131604',
          cityName: 'Irai­ de Minas'
        },
        {
          ibge: '3131703',
          cityName: 'Itabira'
        },
        {
          ibge: '3131802',
          cityName: 'Itabirinha'
        },
        {
          ibge: '3131901',
          cityName: 'Itabirito'
        },
        {
          ibge: '3132008',
          cityName: 'Itacambira'
        },
        {
          ibge: '3132107',
          cityName: 'Itacarambi'
        },
        {
          ibge: '3132206',
          cityName: 'Itaguara'
        },
        {
          ibge: '3132305',
          cityName: 'Itaipe'
        },
        {
          ibge: '3132404',
          cityName: 'Itajuba'
        },
        {
          ibge: '3132503',
          cityName: 'Itamarandiba'
        },
        {
          ibge: '3132602',
          cityName: 'Itamarati de Minas'
        },
        {
          ibge: '3132701',
          cityName: 'Itambacuri'
        },
        {
          ibge: '3132800',
          cityName: 'Itambe do Mato Dentro'
        },
        {
          ibge: '3132909',
          cityName: 'Itamogi'
        },
        {
          ibge: '3133006',
          cityName: 'Itamonte'
        },
        {
          ibge: '3133105',
          cityName: 'Itanhandu'
        },
        {
          ibge: '3133204',
          cityName: 'Itanhomi'
        },
        {
          ibge: '3133303',
          cityName: 'Itaobim'
        },
        {
          ibge: '3133402',
          cityName: 'Itapagipe'
        },
        {
          ibge: '3133501',
          cityName: 'Itapecerica'
        },
        {
          ibge: '3133600',
          cityName: 'Itapeva'
        },
        {
          ibge: '3133709',
          cityName: 'Itatiaiucu'
        },
        {
          ibge: '3133758',
          cityName: 'Itaiº de Minas'
        },
        {
          ibge: '3133808',
          cityName: 'Itaiºna'
        },
        {
          ibge: '3133907',
          cityName: 'Itaverava'
        },
        {
          ibge: '3134004',
          cityName: 'Itinga'
        },
        {
          ibge: '3134103',
          cityName: 'Itueta'
        },
        {
          ibge: '3134202',
          cityName: 'Ituiutaba'
        },
        {
          ibge: '3134301',
          cityName: 'Itumirim'
        },
        {
          ibge: '3134400',
          cityName: 'Iturama'
        },
        {
          ibge: '3134509',
          cityName: 'Itutinga'
        },
        {
          ibge: '3134608',
          cityName: 'Jaboticatubas'
        },
        {
          ibge: '3134707',
          cityName: 'Jacinto'
        },
        {
          ibge: '3134806',
          cityName: 'Jacui­'
        },
        {
          ibge: '3134905',
          cityName: 'Jacutinga'
        },
        {
          ibge: '3135001',
          cityName: 'Jaguaracu'
        },
        {
          ibge: '3135050',
          cityName: 'Jai­ba'
        },
        {
          ibge: '3135076',
          cityName: 'Jampruca'
        },
        {
          ibge: '3135100',
          cityName: 'Janaiºba'
        },
        {
          ibge: '3135209',
          cityName: 'Januaria'
        },
        {
          ibge: '3135308',
          cityName: 'Japarai­ba'
        },
        {
          ibge: '3135357',
          cityName: 'Japonvar'
        },
        {
          ibge: '3135407',
          cityName: 'Jeceaba'
        },
        {
          ibge: '3135456',
          cityName: 'Jenipapo de Minas'
        },
        {
          ibge: '3135506',
          cityName: 'Jequeri'
        },
        {
          ibge: '3135605',
          cityName: 'Jequitai­'
        },
        {
          ibge: '3135704',
          cityName: 'Jequitiba'
        },
        {
          ibge: '3135803',
          cityName: 'Jequitinhonha'
        },
        {
          ibge: '3135902',
          cityName: 'Jesuania'
        },
        {
          ibge: '3136009',
          cityName: 'Joai­ma'
        },
        {
          ibge: '3136108',
          cityName: 'Joanesia'
        },
        {
          ibge: '3136207',
          cityName: 'Joao Monlevade'
        },
        {
          ibge: '3136306',
          cityName: 'Joao Pinheiro'
        },
        {
          ibge: '3136405',
          cityName: 'Joaquim Feli­cio'
        },
        {
          ibge: '3136504',
          cityName: 'Jordania'
        },
        {
          ibge: '3136520',
          cityName: 'Jose Goncalves de Minas'
        },
        {
          ibge: '3136553',
          cityName: 'Jose Raydan'
        },
        {
          ibge: '3136579',
          cityName: 'Josenopolis'
        },
        {
          ibge: '3136652',
          cityName: 'Juatuba'
        },
        {
          ibge: '3136702',
          cityName: 'Juiz de Fora'
        },
        {
          ibge: '3136801',
          cityName: 'Juramento'
        },
        {
          ibge: '3136900',
          cityName: 'Juruaia'
        },
        {
          ibge: '3136959',
          cityName: 'Juveni­lia'
        },
        {
          ibge: '3137007',
          cityName: 'Ladainha'
        },
        {
          ibge: '3137106',
          cityName: 'Lagamar'
        },
        {
          ibge: '3137205',
          cityName: 'Lagoa da Prata'
        },
        {
          ibge: '3137304',
          cityName: 'Lagoa dos Patos'
        },
        {
          ibge: '3137403',
          cityName: 'Lagoa Dourada'
        },
        {
          ibge: '3137502',
          cityName: 'Lagoa Formosa'
        },
        {
          ibge: '3137536',
          cityName: 'Lagoa Grande'
        },
        {
          ibge: '3137601',
          cityName: 'Lagoa Santa'
        },
        {
          ibge: '3137700',
          cityName: 'Lajinha'
        },
        {
          ibge: '3137809',
          cityName: 'Lambari'
        },
        {
          ibge: '3137908',
          cityName: 'Lamim'
        },
        {
          ibge: '3138005',
          cityName: 'Laranjal'
        },
        {
          ibge: '3138104',
          cityName: 'Lassance'
        },
        {
          ibge: '3138203',
          cityName: 'Lavras'
        },
        {
          ibge: '3138302',
          cityName: 'Leandro Ferreira'
        },
        {
          ibge: '3138351',
          cityName: 'Leme do Prado'
        },
        {
          ibge: '3138401',
          cityName: 'Leopoldina'
        },
        {
          ibge: '3138500',
          cityName: 'Liberdade'
        },
        {
          ibge: '3138609',
          cityName: 'Lima Duarte'
        },
        {
          ibge: '3138625',
          cityName: 'Limeira do Oeste'
        },
        {
          ibge: '3138658',
          cityName: 'Lontra'
        },
        {
          ibge: '3138674',
          cityName: 'Luisburgo'
        },
        {
          ibge: '3138682',
          cityName: 'Luislandia'
        },
        {
          ibge: '3138708',
          cityName: 'Luminarias'
        },
        {
          ibge: '3138807',
          cityName: 'Luz'
        },
        {
          ibge: '3138906',
          cityName: 'Machacalis'
        },
        {
          ibge: '3139003',
          cityName: 'Machado'
        },
        {
          ibge: '3139102',
          cityName: 'Madre de Deus de Minas'
        },
        {
          ibge: '3139201',
          cityName: 'Malacacheta'
        },
        {
          ibge: '3139250',
          cityName: 'Mamonas'
        },
        {
          ibge: '3139300',
          cityName: 'Manga'
        },
        {
          ibge: '3139409',
          cityName: 'Manhuacu'
        },
        {
          ibge: '3139508',
          cityName: 'Manhumirim'
        },
        {
          ibge: '3139607',
          cityName: 'Mantena'
        },
        {
          ibge: '3139805',
          cityName: 'Mar de Espanha'
        },
        {
          ibge: '3139706',
          cityName: 'Maravilhas'
        },
        {
          ibge: '3139904',
          cityName: 'Maria da Fe'
        },
        {
          ibge: '3140001',
          cityName: 'Mariana'
        },
        {
          ibge: '3140100',
          cityName: 'Marilac'
        },
        {
          ibge: '3140159',
          cityName: 'Mario Campos'
        },
        {
          ibge: '3140209',
          cityName: 'Maripa de Minas'
        },
        {
          ibge: '3140308',
          cityName: 'Marlieria'
        },
        {
          ibge: '3140407',
          cityName: 'Marmelopolis'
        },
        {
          ibge: '3140506',
          cityName: 'Martinho Campos'
        },
        {
          ibge: '3140530',
          cityName: 'Martins Soares'
        },
        {
          ibge: '3140555',
          cityName: 'Mata Verde'
        },
        {
          ibge: '3140605',
          cityName: 'Materlandia'
        },
        {
          ibge: '3140704',
          cityName: 'Mateus Leme'
        },
        {
          ibge: '3171501',
          cityName: 'Mathias Lobato'
        },
        {
          ibge: '3140803',
          cityName: 'Matias Barbosa'
        },
        {
          ibge: '3140852',
          cityName: 'Matias Cardoso'
        },
        {
          ibge: '3140902',
          cityName: 'Matipo'
        },
        {
          ibge: '3141009',
          cityName: 'Mato Verde'
        },
        {
          ibge: '3141108',
          cityName: 'Matozinhos'
        },
        {
          ibge: '3141207',
          cityName: 'Matutina'
        },
        {
          ibge: '3141306',
          cityName: 'Medeiros'
        },
        {
          ibge: '3141405',
          cityName: 'Medina'
        },
        {
          ibge: '3141504',
          cityName: 'Mendes Pimentel'
        },
        {
          ibge: '3141603',
          cityName: 'Merciªs'
        },
        {
          ibge: '3141702',
          cityName: 'Mesquita'
        },
        {
          ibge: '3141801',
          cityName: 'Minas Novas'
        },
        {
          ibge: '3141900',
          cityName: 'Minduri'
        },
        {
          ibge: '3142007',
          cityName: 'Mirabela'
        },
        {
          ibge: '3142106',
          cityName: 'Miradouro'
        },
        {
          ibge: '3142205',
          cityName: 'Mirai­'
        },
        {
          ibge: '3142254',
          cityName: 'Miravania'
        },
        {
          ibge: '3142304',
          cityName: 'Moeda'
        },
        {
          ibge: '3142403',
          cityName: 'Moema'
        },
        {
          ibge: '3142502',
          cityName: 'Monjolos'
        },
        {
          ibge: '3142601',
          cityName: 'Monsenhor Paulo'
        },
        {
          ibge: '3142700',
          cityName: 'Montalvania'
        },
        {
          ibge: '3142809',
          cityName: 'Monte Alegre de Minas'
        },
        {
          ibge: '3142908',
          cityName: 'Monte Azul'
        },
        {
          ibge: '3143005',
          cityName: 'Monte Belo'
        },
        {
          ibge: '3143104',
          cityName: 'Monte Carmelo'
        },
        {
          ibge: '3143153',
          cityName: 'Monte Formoso'
        },
        {
          ibge: '3143203',
          cityName: 'Monte Santo de Minas'
        },
        {
          ibge: '3143401',
          cityName: 'Monte Siao'
        },
        {
          ibge: '3143302',
          cityName: 'Montes Claros'
        },
        {
          ibge: '3143450',
          cityName: 'Montezuma'
        },
        {
          ibge: '3143500',
          cityName: 'Morada Nova de Minas'
        },
        {
          ibge: '3143609',
          cityName: 'Morro da Garca'
        },
        {
          ibge: '3143708',
          cityName: 'Morro do Pilar'
        },
        {
          ibge: '3143807',
          cityName: 'Munhoz'
        },
        {
          ibge: '3143906',
          cityName: 'Muriae'
        },
        {
          ibge: '3144003',
          cityName: 'Mutum'
        },
        {
          ibge: '3144102',
          cityName: 'Muzambinho'
        },
        {
          ibge: '3144201',
          cityName: 'Nacip Raydan'
        },
        {
          ibge: '3144300',
          cityName: 'Nanuque'
        },
        {
          ibge: '3144359',
          cityName: 'Naque'
        },
        {
          ibge: '3144375',
          cityName: 'Natalandia'
        },
        {
          ibge: '3144409',
          cityName: 'Natercia'
        },
        {
          ibge: '3144508',
          cityName: 'Nazareno'
        },
        {
          ibge: '3144607',
          cityName: 'Nepomuceno'
        },
        {
          ibge: '3144656',
          cityName: 'Ninheira'
        },
        {
          ibge: '3144672',
          cityName: 'Nova Belem'
        },
        {
          ibge: '3144706',
          cityName: 'Nova Era'
        },
        {
          ibge: '3144805',
          cityName: 'Nova Lima'
        },
        {
          ibge: '3144904',
          cityName: 'Nova Modica'
        },
        {
          ibge: '3145000',
          cityName: 'Nova Ponte'
        },
        {
          ibge: '3145059',
          cityName: 'Nova Porteirinha'
        },
        {
          ibge: '3145109',
          cityName: 'Nova Resende'
        },
        {
          ibge: '3145208',
          cityName: 'Nova Serrana'
        },
        {
          ibge: '3136603',
          cityName: 'Nova Uniao'
        },
        {
          ibge: '3145307',
          cityName: 'Novo Cruzeiro'
        },
        {
          ibge: '3145356',
          cityName: 'Novo Oriente de Minas'
        },
        {
          ibge: '3145372',
          cityName: 'Novorizonte'
        },
        {
          ibge: '3145406',
          cityName: 'Olaria'
        },
        {
          ibge: '3145455',
          cityName: 'Olhos d\'Agua'
        },
        {
          ibge: '3145505',
          cityName: 'Oli­mpio Noronha'
        },
        {
          ibge: '3145604',
          cityName: 'Oliveira'
        },
        {
          ibge: '3145703',
          cityName: 'Oliveira Fortes'
        },
        {
          ibge: '3145802',
          cityName: 'Onca de Pitangui'
        },
        {
          ibge: '3145851',
          cityName: 'Oratorios'
        },
        {
          ibge: '3145877',
          cityName: 'Orizania'
        },
        {
          ibge: '3145901',
          cityName: 'Ouro Branco'
        },
        {
          ibge: '3146008',
          cityName: 'Ouro Fino'
        },
        {
          ibge: '3146107',
          cityName: 'Ouro Preto'
        },
        {
          ibge: '3146206',
          cityName: 'Ouro Verde de Minas'
        },
        {
          ibge: '3146255',
          cityName: 'Padre Carvalho'
        },
        {
          ibge: '3146305',
          cityName: 'Padre Parai­so'
        },
        {
          ibge: '3146552',
          cityName: 'Pai Pedro'
        },
        {
          ibge: '3146404',
          cityName: 'Paineiras'
        },
        {
          ibge: '3146503',
          cityName: 'Pains'
        },
        {
          ibge: '3146602',
          cityName: 'Paiva'
        },
        {
          ibge: '3146701',
          cityName: 'Palma'
        },
        {
          ibge: '3146750',
          cityName: 'Palmopolis'
        },
        {
          ibge: '3146909',
          cityName: 'Papagaios'
        },
        {
          ibge: '3147105',
          cityName: 'Para de Minas'
        },
        {
          ibge: '3147006',
          cityName: 'Paracatu'
        },
        {
          ibge: '3147204',
          cityName: 'Paraguacu'
        },
        {
          ibge: '3147303',
          cityName: 'Paraisopolis'
        },
        {
          ibge: '3147402',
          cityName: 'Paraopeba'
        },
        {
          ibge: '3147600',
          cityName: 'Passa Quatro'
        },
        {
          ibge: '3147709',
          cityName: 'Passa Tempo'
        },
        {
          ibge: '3147808',
          cityName: 'Passa-Vinte'
        },
        {
          ibge: '3147501',
          cityName: 'Passabem'
        },
        {
          ibge: '3147907',
          cityName: 'Passos'
        },
        {
          ibge: '3147956',
          cityName: 'Patis'
        },
        {
          ibge: '3148004',
          cityName: 'Patos de Minas'
        },
        {
          ibge: '3148103',
          cityName: 'Patroci­nio'
        },
        {
          ibge: '3148202',
          cityName: 'Patroci­nio do Muriae'
        },
        {
          ibge: '3148301',
          cityName: 'Paula Candido'
        },
        {
          ibge: '3148400',
          cityName: 'Paulistas'
        },
        {
          ibge: '3148509',
          cityName: 'Pavao'
        },
        {
          ibge: '3148608',
          cityName: 'Pecanha'
        },
        {
          ibge: '3148707',
          cityName: 'Pedra Azul'
        },
        {
          ibge: '3148756',
          cityName: 'Pedra Bonita'
        },
        {
          ibge: '3148806',
          cityName: 'Pedra do Anta'
        },
        {
          ibge: '3148905',
          cityName: 'Pedra do Indaia'
        },
        {
          ibge: '3149002',
          cityName: 'Pedra Dourada'
        },
        {
          ibge: '3149101',
          cityName: 'Pedralva'
        },
        {
          ibge: '3149150',
          cityName: 'Pedras de Maria da Cruz'
        },
        {
          ibge: '3149200',
          cityName: 'Pedrinopolis'
        },
        {
          ibge: '3149309',
          cityName: 'Pedro Leopoldo'
        },
        {
          ibge: '3149408',
          cityName: 'Pedro Teixeira'
        },
        {
          ibge: '3149507',
          cityName: 'Pequeri'
        },
        {
          ibge: '3149606',
          cityName: 'Pequi'
        },
        {
          ibge: '3149705',
          cityName: 'Perdigao'
        },
        {
          ibge: '3149804',
          cityName: 'Perdizes'
        },
        {
          ibge: '3149903',
          cityName: 'Perdiµes'
        },
        {
          ibge: '3149952',
          cityName: 'Periquito'
        },
        {
          ibge: '3150000',
          cityName: 'Pescador'
        },
        {
          ibge: '3150109',
          cityName: 'Piau'
        },
        {
          ibge: '3150158',
          cityName: 'Piedade de Caratinga'
        },
        {
          ibge: '3150208',
          cityName: 'Piedade de Ponte Nova'
        },
        {
          ibge: '3150307',
          cityName: 'Piedade do Rio Grande'
        },
        {
          ibge: '3150406',
          cityName: 'Piedade dos Gerais'
        },
        {
          ibge: '3150505',
          cityName: 'Pimenta'
        },
        {
          ibge: '3150539',
          cityName: 'Pingo-d\'Agua'
        },
        {
          ibge: '3150570',
          cityName: 'Pintopolis'
        },
        {
          ibge: '3150604',
          cityName: 'Piracema'
        },
        {
          ibge: '3150703',
          cityName: 'Pirajuba'
        },
        {
          ibge: '3150802',
          cityName: 'Piranga'
        },
        {
          ibge: '3150901',
          cityName: 'Pirangucu'
        },
        {
          ibge: '3151008',
          cityName: 'Piranguinho'
        },
        {
          ibge: '3151107',
          cityName: 'Pirapetinga'
        },
        {
          ibge: '3151206',
          cityName: 'Pirapora'
        },
        {
          ibge: '3151305',
          cityName: 'Piraiºba'
        },
        {
          ibge: '3151404',
          cityName: 'Pitangui'
        },
        {
          ibge: '3151503',
          cityName: 'Piumhi'
        },
        {
          ibge: '3151602',
          cityName: 'Planura'
        },
        {
          ibge: '3151701',
          cityName: 'Poco Fundo'
        },
        {
          ibge: '3151800',
          cityName: 'Pocos de Caldas'
        },
        {
          ibge: '3151909',
          cityName: 'Pocrane'
        },
        {
          ibge: '3152006',
          cityName: 'Pompeu'
        },
        {
          ibge: '3152105',
          cityName: 'Ponte Nova'
        },
        {
          ibge: '3152131',
          cityName: 'Ponto Chique'
        },
        {
          ibge: '3152170',
          cityName: 'Ponto dos Volantes'
        },
        {
          ibge: '3152204',
          cityName: 'Porteirinha'
        },
        {
          ibge: '3152303',
          cityName: 'Porto Firme'
        },
        {
          ibge: '3152402',
          cityName: 'Pote'
        },
        {
          ibge: '3152501',
          cityName: 'Pouso Alegre'
        },
        {
          ibge: '3152600',
          cityName: 'Pouso Alto'
        },
        {
          ibge: '3152709',
          cityName: 'Prados'
        },
        {
          ibge: '3152808',
          cityName: 'Prata'
        },
        {
          ibge: '3152907',
          cityName: 'Pratapolis'
        },
        {
          ibge: '3153004',
          cityName: 'Pratinha'
        },
        {
          ibge: '3153103',
          cityName: 'Presidente Bernardes'
        },
        {
          ibge: '3153202',
          cityName: 'Presidente Juscelino'
        },
        {
          ibge: '3153301',
          cityName: 'Presidente Kubitschek'
        },
        {
          ibge: '3153400',
          cityName: 'Presidente Olegario'
        },
        {
          ibge: '3153608',
          cityName: 'Prudente de Morais'
        },
        {
          ibge: '3153707',
          cityName: 'Quartel Geral'
        },
        {
          ibge: '3153806',
          cityName: 'Queluzito'
        },
        {
          ibge: '3153905',
          cityName: 'Raposos'
        },
        {
          ibge: '3154002',
          cityName: 'Raul Soares'
        },
        {
          ibge: '3154101',
          cityName: 'Recreio'
        },
        {
          ibge: '3154150',
          cityName: 'Reduto'
        },
        {
          ibge: '3154200',
          cityName: 'Resende Costa'
        },
        {
          ibge: '3154309',
          cityName: 'Resplendor'
        },
        {
          ibge: '3154408',
          cityName: 'Ressaquinha'
        },
        {
          ibge: '3154457',
          cityName: 'Riachinho'
        },
        {
          ibge: '3154507',
          cityName: 'Riacho dos Machados'
        },
        {
          ibge: '3154606',
          cityName: 'Ribeirao das Neves'
        },
        {
          ibge: '3154705',
          cityName: 'Ribeirao Vermelho'
        },
        {
          ibge: '3154804',
          cityName: 'Rio Acima'
        },
        {
          ibge: '3154903',
          cityName: 'Rio Casca'
        },
        {
          ibge: '3155108',
          cityName: 'Rio do Prado'
        },
        {
          ibge: '3155009',
          cityName: 'Rio Doce'
        },
        {
          ibge: '3155207',
          cityName: 'Rio Espera'
        },
        {
          ibge: '3155306',
          cityName: 'Rio Manso'
        },
        {
          ibge: '3155405',
          cityName: 'Rio Novo'
        },
        {
          ibge: '3155504',
          cityName: 'Rio Paranai­ba'
        },
        {
          ibge: '3155603',
          cityName: 'Rio Pardo de Minas'
        },
        {
          ibge: '3155702',
          cityName: 'Rio Piracicaba'
        },
        {
          ibge: '3155801',
          cityName: 'Rio Pomba'
        },
        {
          ibge: '3155900',
          cityName: 'Rio Preto'
        },
        {
          ibge: '3156007',
          cityName: 'Rio Vermelho'
        },
        {
          ibge: '3156106',
          cityName: 'Ritapolis'
        },
        {
          ibge: '3156205',
          cityName: 'Rochedo de Minas'
        },
        {
          ibge: '3156304',
          cityName: 'Rodeiro'
        },
        {
          ibge: '3156403',
          cityName: 'Romaria'
        },
        {
          ibge: '3156452',
          cityName: 'Rosario da Limeira'
        },
        {
          ibge: '3156502',
          cityName: 'Rubelita'
        },
        {
          ibge: '3156601',
          cityName: 'Rubim'
        },
        {
          ibge: '3156700',
          cityName: 'Sabara'
        },
        {
          ibge: '3156809',
          cityName: 'Sabinopolis'
        },
        {
          ibge: '3156908',
          cityName: 'Sacramento'
        },
        {
          ibge: '3157005',
          cityName: 'Salinas'
        },
        {
          ibge: '3157104',
          cityName: 'Salto da Divisa'
        },
        {
          ibge: '3157203',
          cityName: 'Santa Barbara'
        },
        {
          ibge: '3157252',
          cityName: 'Santa Barbara do Leste'
        },
        {
          ibge: '3157278',
          cityName: 'Santa Barbara do Monte Verde'
        },
        {
          ibge: '3157302',
          cityName: 'Santa Barbara do Tugiºrio'
        },
        {
          ibge: '3157336',
          cityName: 'Santa Cruz de Minas'
        },
        {
          ibge: '3157377',
          cityName: 'Santa Cruz de Salinas'
        },
        {
          ibge: '3157401',
          cityName: 'Santa Cruz do Escalvado'
        },
        {
          ibge: '3157500',
          cityName: 'Santa Efigiªnia de Minas'
        },
        {
          ibge: '3157609',
          cityName: 'Santa Fe de Minas'
        },
        {
          ibge: '3157658',
          cityName: 'Santa Helena de Minas'
        },
        {
          ibge: '3157708',
          cityName: 'Santa Juliana'
        },
        {
          ibge: '3157807',
          cityName: 'Santa Luzia'
        },
        {
          ibge: '3157906',
          cityName: 'Santa Margarida'
        },
        {
          ibge: '3158003',
          cityName: 'Santa Maria de Itabira'
        },
        {
          ibge: '3158102',
          cityName: 'Santa Maria do Salto'
        },
        {
          ibge: '3158201',
          cityName: 'Santa Maria do Suacui­'
        },
        {
          ibge: '3159209',
          cityName: 'Santa Rita de Caldas'
        },
        {
          ibge: '3159407',
          cityName: 'Santa Rita de Ibitipoca'
        },
        {
          ibge: '3159308',
          cityName: 'Santa Rita de Jacutinga'
        },
        {
          ibge: '3159357',
          cityName: 'Santa Rita de Minas'
        },
        {
          ibge: '3159506',
          cityName: 'Santa Rita do Itueto'
        },
        {
          ibge: '3159605',
          cityName: 'Santa Rita do Sapucai­'
        },
        {
          ibge: '3159704',
          cityName: 'Santa Rosa da Serra'
        },
        {
          ibge: '3159803',
          cityName: 'Santa Vitoria'
        },
        {
          ibge: '3158300',
          cityName: 'Santana da Vargem'
        },
        {
          ibge: '3158409',
          cityName: 'Santana de Cataguases'
        },
        {
          ibge: '3158508',
          cityName: 'Santana de Pirapama'
        },
        {
          ibge: '3158607',
          cityName: 'Santana do Deserto'
        },
        {
          ibge: '3158706',
          cityName: 'Santana do Garambeu'
        },
        {
          ibge: '3158805',
          cityName: 'Santana do Jacare'
        },
        {
          ibge: '3158904',
          cityName: 'Santana do Manhuacu'
        },
        {
          ibge: '3158953',
          cityName: 'Santana do Parai­so'
        },
        {
          ibge: '3159001',
          cityName: 'Santana do Riacho'
        },
        {
          ibge: '3159100',
          cityName: 'Santana dos Montes'
        },
        {
          ibge: '3159902',
          cityName: 'Santo Antonio do Amparo'
        },
        {
          ibge: '3160009',
          cityName: 'Santo Antonio do Aventureiro'
        },
        {
          ibge: '3160108',
          cityName: 'Santo Antonio do Grama'
        },
        {
          ibge: '3160207',
          cityName: 'Santo Antonio do Itambe'
        },
        {
          ibge: '3160306',
          cityName: 'Santo Antonio do Jacinto'
        },
        {
          ibge: '3160405',
          cityName: 'Santo Antonio do Monte'
        },
        {
          ibge: '3160454',
          cityName: 'Santo Antonio do Retiro'
        },
        {
          ibge: '3160504',
          cityName: 'Santo Antonio do Rio Abaixo'
        },
        {
          ibge: '3160603',
          cityName: 'Santo Hipolito'
        },
        {
          ibge: '3160702',
          cityName: 'Santos Dumont'
        },
        {
          ibge: '3160801',
          cityName: 'Sao Bento Abade'
        },
        {
          ibge: '3160900',
          cityName: 'Sao Bras do Suacui­'
        },
        {
          ibge: '3160959',
          cityName: 'Sao Domingos das Dores'
        },
        {
          ibge: '3161007',
          cityName: 'Sao Domingos do Prata'
        },
        {
          ibge: '3161056',
          cityName: 'Sao Felix de Minas'
        },
        {
          ibge: '3161106',
          cityName: 'Sao Francisco'
        },
        {
          ibge: '3161205',
          cityName: 'Sao Francisco de Paula'
        },
        {
          ibge: '3161304',
          cityName: 'Sao Francisco de Sales'
        },
        {
          ibge: '3161403',
          cityName: 'Sao Francisco do Gloria'
        },
        {
          ibge: '3161502',
          cityName: 'Sao Geraldo'
        },
        {
          ibge: '3161601',
          cityName: 'Sao Geraldo da Piedade'
        },
        {
          ibge: '3161650',
          cityName: 'Sao Geraldo do Baixio'
        },
        {
          ibge: '3161700',
          cityName: 'Sao Goncalo do Abaete'
        },
        {
          ibge: '3161809',
          cityName: 'Sao Goncalo do Para'
        },
        {
          ibge: '3161908',
          cityName: 'Sao Goncalo do Rio Abaixo'
        },
        {
          ibge: '3125507',
          cityName: 'Sao Goncalo do Rio Preto'
        },
        {
          ibge: '3162005',
          cityName: 'Sao Goncalo do Sapucai­'
        },
        {
          ibge: '3162104',
          cityName: 'Sao Gotardo'
        },
        {
          ibge: '3162203',
          cityName: 'Sao Joao Batista do Gloria'
        },
        {
          ibge: '3162252',
          cityName: 'Sao Joao da Lagoa'
        },
        {
          ibge: '3162302',
          cityName: 'Sao Joao da Mata'
        },
        {
          ibge: '3162401',
          cityName: 'Sao Joao da Ponte'
        },
        {
          ibge: '3162450',
          cityName: 'Sao Joao das Missiµes'
        },
        {
          ibge: '3162500',
          cityName: 'Sao Joao del Rei'
        },
        {
          ibge: '3162559',
          cityName: 'Sao Joao do Manhuacu'
        },
        {
          ibge: '3162575',
          cityName: 'Sao Joao do Manteninha'
        },
        {
          ibge: '3162609',
          cityName: 'Sao Joao do Oriente'
        },
        {
          ibge: '3162658',
          cityName: 'Sao Joao do Pacui­'
        },
        {
          ibge: '3162708',
          cityName: 'Sao Joao do Parai­so'
        },
        {
          ibge: '3162807',
          cityName: 'Sao Joao Evangelista'
        },
        {
          ibge: '3162906',
          cityName: 'Sao Joao Nepomuceno'
        },
        {
          ibge: '3162922',
          cityName: 'Sao Joaquim de Bicas'
        },
        {
          ibge: '3162948',
          cityName: 'Sao Jose da Barra'
        },
        {
          ibge: '3162955',
          cityName: 'Sao Jose da Lapa'
        },
        {
          ibge: '3163003',
          cityName: 'Sao Jose da Safira'
        },
        {
          ibge: '3163102',
          cityName: 'Sao Jose da Varginha'
        },
        {
          ibge: '3163201',
          cityName: 'Sao Jose do Alegre'
        },
        {
          ibge: '3163300',
          cityName: 'Sao Jose do Divino'
        },
        {
          ibge: '3163409',
          cityName: 'Sao Jose do Goiabal'
        },
        {
          ibge: '3163508',
          cityName: 'Sao Jose do Jacuri'
        },
        {
          ibge: '3163607',
          cityName: 'Sao Jose do Mantimento'
        },
        {
          ibge: '3163706',
          cityName: 'Sao Lourenco'
        },
        {
          ibge: '3163805',
          cityName: 'Sao Miguel do Anta'
        },
        {
          ibge: '3163904',
          cityName: 'Sao Pedro da Uniao'
        },
        {
          ibge: '3164100',
          cityName: 'Sao Pedro do Suacui­'
        },
        {
          ibge: '3164001',
          cityName: 'Sao Pedro dos Ferros'
        },
        {
          ibge: '3164209',
          cityName: 'Sao Romao'
        },
        {
          ibge: '3164308',
          cityName: 'Sao Roque de Minas'
        },
        {
          ibge: '3164407',
          cityName: 'Sao Sebastiao da Bela Vista'
        },
        {
          ibge: '3164431',
          cityName: 'Sao Sebastiao da Vargem Alegre'
        },
        {
          ibge: '3164472',
          cityName: 'Sao Sebastiao do Anta'
        },
        {
          ibge: '3164506',
          cityName: 'Sao Sebastiao do Maranhao'
        },
        {
          ibge: '3164605',
          cityName: 'Sao Sebastiao do Oeste'
        },
        {
          ibge: '3164704',
          cityName: 'Sao Sebastiao do Parai­so'
        },
        {
          ibge: '3164803',
          cityName: 'Sao Sebastiao do Rio Preto'
        },
        {
          ibge: '3164902',
          cityName: 'Sao Sebastiao do Rio Verde'
        },
        {
          ibge: '3165206',
          cityName: 'Sao Thome das Letras'
        },
        {
          ibge: '3165008',
          cityName: 'Sao Tiago'
        },
        {
          ibge: '3165107',
          cityName: 'Sao Tomas de Aquino'
        },
        {
          ibge: '3165305',
          cityName: 'Sao Vicente de Minas'
        },
        {
          ibge: '3165404',
          cityName: 'Sapucai­-Mirim'
        },
        {
          ibge: '3165503',
          cityName: 'Sardoa'
        },
        {
          ibge: '3165537',
          cityName: 'Sarzedo'
        },
        {
          ibge: '3165560',
          cityName: 'Sem-Peixe'
        },
        {
          ibge: '3165578',
          cityName: 'Senador Amaral'
        },
        {
          ibge: '3165602',
          cityName: 'Senador Cortes'
        },
        {
          ibge: '3165701',
          cityName: 'Senador Firmino'
        },
        {
          ibge: '3165800',
          cityName: 'Senador Jose Bento'
        },
        {
          ibge: '3165909',
          cityName: 'Senador Modestino Goncalves'
        },
        {
          ibge: '3166006',
          cityName: 'Senhora de Oliveira'
        },
        {
          ibge: '3166105',
          cityName: 'Senhora do Porto'
        },
        {
          ibge: '3166204',
          cityName: 'Senhora dos Remedios'
        },
        {
          ibge: '3166303',
          cityName: 'Sericita'
        },
        {
          ibge: '3166402',
          cityName: 'Seritinga'
        },
        {
          ibge: '3166501',
          cityName: 'Serra Azul de Minas'
        },
        {
          ibge: '3166600',
          cityName: 'Serra da Saudade'
        },
        {
          ibge: '3166808',
          cityName: 'Serra do Salitre'
        },
        {
          ibge: '3166709',
          cityName: 'Serra dos Aimores'
        },
        {
          ibge: '3166907',
          cityName: 'Serrania'
        },
        {
          ibge: '3166956',
          cityName: 'Serranopolis de Minas'
        },
        {
          ibge: '3167004',
          cityName: 'Serranos'
        },
        {
          ibge: '3167103',
          cityName: 'Serro'
        },
        {
          ibge: '3167202',
          cityName: 'Sete Lagoas'
        },
        {
          ibge: '3165552',
          cityName: 'Setubinha'
        },
        {
          ibge: '3167301',
          cityName: 'Silveirania'
        },
        {
          ibge: '3167400',
          cityName: 'Silvianopolis'
        },
        {
          ibge: '3167509',
          cityName: 'Simao Pereira'
        },
        {
          ibge: '3167608',
          cityName: 'Simonesia'
        },
        {
          ibge: '3167707',
          cityName: 'Sobralia'
        },
        {
          ibge: '3167806',
          cityName: 'Soledade de Minas'
        },
        {
          ibge: '3167905',
          cityName: 'Tabuleiro'
        },
        {
          ibge: '3168002',
          cityName: 'Taiobeiras'
        },
        {
          ibge: '3168051',
          cityName: 'Taparuba'
        },
        {
          ibge: '3168101',
          cityName: 'Tapira'
        },
        {
          ibge: '3168200',
          cityName: 'Tapirai­'
        },
        {
          ibge: '3168309',
          cityName: 'Taquaracu de Minas'
        },
        {
          ibge: '3168408',
          cityName: 'Tarumirim'
        },
        {
          ibge: '3168507',
          cityName: 'Teixeiras'
        },
        {
          ibge: '3168606',
          cityName: 'Teofilo Otoni'
        },
        {
          ibge: '3168705',
          cityName: 'Timoteo'
        },
        {
          ibge: '3168804',
          cityName: 'Tiradentes'
        },
        {
          ibge: '3168903',
          cityName: 'Tiros'
        },
        {
          ibge: '3169000',
          cityName: 'Tocantins'
        },
        {
          ibge: '3169059',
          cityName: 'Tocos do Moji'
        },
        {
          ibge: '3169109',
          cityName: 'Toledo'
        },
        {
          ibge: '3169208',
          cityName: 'Tombos'
        },
        {
          ibge: '3169307',
          cityName: 'Triªs Coraciµes'
        },
        {
          ibge: '3169356',
          cityName: 'Triªs Marias'
        },
        {
          ibge: '3169406',
          cityName: 'Triªs Pontas'
        },
        {
          ibge: '3169505',
          cityName: 'Tumiritinga'
        },
        {
          ibge: '3169604',
          cityName: 'Tupaciguara'
        },
        {
          ibge: '3169703',
          cityName: 'Turmalina'
        },
        {
          ibge: '3169802',
          cityName: 'Turvolandia'
        },
        {
          ibge: '3169901',
          cityName: 'Uba'
        },
        {
          ibge: '3170008',
          cityName: 'Ubai­'
        },
        {
          ibge: '3170057',
          cityName: 'Ubaporanga'
        },
        {
          ibge: '3170107',
          cityName: 'Uberaba'
        },
        {
          ibge: '3170206',
          cityName: 'Uberlandia'
        },
        {
          ibge: '3170305',
          cityName: 'Umburatiba'
        },
        {
          ibge: '3170404',
          cityName: 'Unai­'
        },
        {
          ibge: '3170438',
          cityName: 'Uniao de Minas'
        },
        {
          ibge: '3170479',
          cityName: 'Uruana de Minas'
        },
        {
          ibge: '3170503',
          cityName: 'Urucania'
        },
        {
          ibge: '3170529',
          cityName: 'Urucuia'
        },
        {
          ibge: '3170578',
          cityName: 'Vargem Alegre'
        },
        {
          ibge: '3170602',
          cityName: 'Vargem Bonita'
        },
        {
          ibge: '3170651',
          cityName: 'Vargem Grande do Rio Pardo'
        },
        {
          ibge: '3170701',
          cityName: 'Varginha'
        },
        {
          ibge: '3170750',
          cityName: 'Varjao de Minas'
        },
        {
          ibge: '3170800',
          cityName: 'Varzea da Palma'
        },
        {
          ibge: '3170909',
          cityName: 'Varzelandia'
        },
        {
          ibge: '3171006',
          cityName: 'Vazante'
        },
        {
          ibge: '3171030',
          cityName: 'Verdelandia'
        },
        {
          ibge: '3171071',
          cityName: 'Veredinha'
        },
        {
          ibge: '3171105',
          cityName: 'Veri­ssimo'
        },
        {
          ibge: '3171154',
          cityName: 'Vermelho Novo'
        },
        {
          ibge: '3171204',
          cityName: 'Vespasiano'
        },
        {
          ibge: '3171303',
          cityName: 'Vicosa'
        },
        {
          ibge: '3171402',
          cityName: 'Vieiras'
        },
        {
          ibge: '3171600',
          cityName: 'Virgem da Lapa'
        },
        {
          ibge: '3171709',
          cityName: 'Virgi­nia'
        },
        {
          ibge: '3171808',
          cityName: 'Virginopolis'
        },
        {
          ibge: '3171907',
          cityName: 'Virgolandia'
        },
        {
          ibge: '3172004',
          cityName: 'Visconde do Rio Branco'
        },
        {
          ibge: '3172103',
          cityName: 'Volta Grande'
        },
        {
          ibge: '3172202',
          cityName: 'Wenceslau Braz'
        }
      ]
    },
    {
      abbreviation: 'MS',
      cities: [
        {
          ibge: '5000203',
          cityName: 'Agua Clara'
        },
        {
          ibge: '5000252',
          cityName: 'Alcinopolis'
        },
        {
          ibge: '5000609',
          cityName: 'Amambai'
        },
        {
          ibge: '5000708',
          cityName: 'Anastacio'
        },
        {
          ibge: '5000807',
          cityName: 'Anaurilandia'
        },
        {
          ibge: '5000856',
          cityName: 'Angelica'
        },
        {
          ibge: '5000906',
          cityName: 'Antonio Joao'
        },
        {
          ibge: '5001003',
          cityName: 'Aparecida do Taboado'
        },
        {
          ibge: '5001102',
          cityName: 'Aquidauana'
        },
        {
          ibge: '5001243',
          cityName: 'Aral Moreira'
        },
        {
          ibge: '5001508',
          cityName: 'Bandeirantes'
        },
        {
          ibge: '5001904',
          cityName: 'Bataguassu'
        },
        {
          ibge: '5002001',
          cityName: 'Bataypora'
        },
        {
          ibge: '5002100',
          cityName: 'Bela Vista'
        },
        {
          ibge: '5002159',
          cityName: 'Bodoquena'
        },
        {
          ibge: '5002209',
          cityName: 'Bonito'
        },
        {
          ibge: '5002308',
          cityName: 'Brasilandia'
        },
        {
          ibge: '5002407',
          cityName: 'Caarapo'
        },
        {
          ibge: '5002605',
          cityName: 'Camapua'
        },
        {
          ibge: '5002704',
          cityName: 'Campo Grande'
        },
        {
          ibge: '5002803',
          cityName: 'Caracol'
        },
        {
          ibge: '5002902',
          cityName: 'Cassilandia'
        },
        {
          ibge: '5002951',
          cityName: 'Chapadao do Sul'
        },
        {
          ibge: '5003108',
          cityName: 'Corguinho'
        },
        {
          ibge: '5003157',
          cityName: 'Coronel Sapucaia'
        },
        {
          ibge: '5003207',
          cityName: 'Corumba'
        },
        {
          ibge: '5003256',
          cityName: 'Costa Rica'
        },
        {
          ibge: '5003306',
          cityName: 'Coxim'
        },
        {
          ibge: '5003454',
          cityName: 'Deodapolis'
        },
        {
          ibge: '5003488',
          cityName: 'Dois Irmaos do Buriti'
        },
        {
          ibge: '5003504',
          cityName: 'Douradina'
        },
        {
          ibge: '5003702',
          cityName: 'Dourados'
        },
        {
          ibge: '5003751',
          cityName: 'Eldorado'
        },
        {
          ibge: '5003801',
          cityName: 'Fatima do Sul'
        },
        {
          ibge: '5003900',
          cityName: 'Figueirao'
        },
        {
          ibge: '5004007',
          cityName: 'Gloria de Dourados'
        },
        {
          ibge: '5004106',
          cityName: 'Guia Lopes da Laguna'
        },
        {
          ibge: '5004304',
          cityName: 'Iguatemi'
        },
        {
          ibge: '5004403',
          cityName: 'Inociªncia'
        },
        {
          ibge: '5004502',
          cityName: 'Itapora'
        },
        {
          ibge: '5004601',
          cityName: 'Itaquirai­'
        },
        {
          ibge: '5004700',
          cityName: 'Ivinhema'
        },
        {
          ibge: '5004809',
          cityName: 'Japora'
        },
        {
          ibge: '5004908',
          cityName: 'Jaraguari'
        },
        {
          ibge: '5005004',
          cityName: 'Jardim'
        },
        {
          ibge: '5005103',
          cityName: 'Jatei­'
        },
        {
          ibge: '5005152',
          cityName: 'Juti'
        },
        {
          ibge: '5005202',
          cityName: 'Ladario'
        },
        {
          ibge: '5005251',
          cityName: 'Laguna Carapa'
        },
        {
          ibge: '5005400',
          cityName: 'Maracaju'
        },
        {
          ibge: '5005608',
          cityName: 'Miranda'
        },
        {
          ibge: '5005681',
          cityName: 'Mundo Novo'
        },
        {
          ibge: '5005707',
          cityName: 'Navirai­'
        },
        {
          ibge: '5005806',
          cityName: 'Nioaque'
        },
        {
          ibge: '5006002',
          cityName: 'Nova Alvorada do Sul'
        },
        {
          ibge: '5006200',
          cityName: 'Nova Andradina'
        },
        {
          ibge: '5006259',
          cityName: 'Novo Horizonte do Sul'
        },
        {
          ibge: '5006275',
          cityName: 'Parai­so das Aguas'
        },
        {
          ibge: '5006309',
          cityName: 'Paranai­ba'
        },
        {
          ibge: '5006358',
          cityName: 'Paranhos'
        },
        {
          ibge: '5006408',
          cityName: 'Pedro Gomes'
        },
        {
          ibge: '5006606',
          cityName: 'Ponta Pora'
        },
        {
          ibge: '5006903',
          cityName: 'Porto Murtinho'
        },
        {
          ibge: '5007109',
          cityName: 'Ribas do Rio Pardo'
        },
        {
          ibge: '5007208',
          cityName: 'Rio Brilhante'
        },
        {
          ibge: '5007307',
          cityName: 'Rio Negro'
        },
        {
          ibge: '5007406',
          cityName: 'Rio Verde de Mato Grosso'
        },
        {
          ibge: '5007505',
          cityName: 'Rochedo'
        },
        {
          ibge: '5007554',
          cityName: 'Santa Rita do Pardo'
        },
        {
          ibge: '5007695',
          cityName: 'Sao Gabriel do Oeste'
        },
        {
          ibge: '5007802',
          cityName: 'Selvi­ria'
        },
        {
          ibge: '5007703',
          cityName: 'Sete Quedas'
        },
        {
          ibge: '5007901',
          cityName: 'Sidrolandia'
        },
        {
          ibge: '5007935',
          cityName: 'Sonora'
        },
        {
          ibge: '5007950',
          cityName: 'Tacuru'
        },
        {
          ibge: '5007976',
          cityName: 'Taquarussu'
        },
        {
          ibge: '5008008',
          cityName: 'Terenos'
        },
        {
          ibge: '5008305',
          cityName: 'Triªs Lagoas'
        },
        {
          ibge: '5008404',
          cityName: 'Vicentina'
        }
      ]
    },
    {
      abbreviation: 'MT',
      cities: [
        {
          ibge: '5100102',
          cityName: 'Acorizal'
        },
        {
          ibge: '5100201',
          cityName: 'Agua Boa'
        },
        {
          ibge: '5100250',
          cityName: 'Alta Floresta'
        },
        {
          ibge: '5100300',
          cityName: 'Alto Araguaia'
        },
        {
          ibge: '5100359',
          cityName: 'Alto Boa Vista'
        },
        {
          ibge: '5100409',
          cityName: 'Alto Garcas'
        },
        {
          ibge: '5100508',
          cityName: 'Alto Paraguai'
        },
        {
          ibge: '5100607',
          cityName: 'Alto Taquari'
        },
        {
          ibge: '5100805',
          cityName: 'Apiacas'
        },
        {
          ibge: '5101001',
          cityName: 'Araguaiana'
        },
        {
          ibge: '5101209',
          cityName: 'Araguainha'
        },
        {
          ibge: '5101258',
          cityName: 'Araputanga'
        },
        {
          ibge: '5101308',
          cityName: 'Arenapolis'
        },
        {
          ibge: '5101407',
          cityName: 'Aripuana'
        },
        {
          ibge: '5101605',
          cityName: 'Barao de Melgaco'
        },
        {
          ibge: '5101704',
          cityName: 'Barra do Bugres'
        },
        {
          ibge: '5101803',
          cityName: 'Barra do Garcas'
        },
        {
          ibge: '5101852',
          cityName: 'Bom Jesus do Araguaia'
        },
        {
          ibge: '5101902',
          cityName: 'Brasnorte'
        },
        {
          ibge: '5102504',
          cityName: 'Caceres'
        },
        {
          ibge: '5102603',
          cityName: 'Campinapolis'
        },
        {
          ibge: '5102637',
          cityName: 'Campo Novo do Parecis'
        },
        {
          ibge: '5102678',
          cityName: 'Campo Verde'
        },
        {
          ibge: '5102686',
          cityName: 'Campos de Jiºlio'
        },
        {
          ibge: '5102694',
          cityName: 'Canabrava do Norte'
        },
        {
          ibge: '5102702',
          cityName: 'Canarana'
        },
        {
          ibge: '5102793',
          cityName: 'Carlinda'
        },
        {
          ibge: '5102850',
          cityName: 'Castanheira'
        },
        {
          ibge: '5103007',
          cityName: 'Chapada dos Guimaraes'
        },
        {
          ibge: '5103056',
          cityName: 'Claudia'
        },
        {
          ibge: '5103106',
          cityName: 'Cocalinho'
        },
        {
          ibge: '5103205',
          cityName: 'Coli­der'
        },
        {
          ibge: '5103254',
          cityName: 'Colniza'
        },
        {
          ibge: '5103304',
          cityName: 'Comodoro'
        },
        {
          ibge: '5103353',
          cityName: 'Confresa'
        },
        {
          ibge: '5103361',
          cityName: 'Conquista D\'Oeste'
        },
        {
          ibge: '5103379',
          cityName: 'Cotriguacu'
        },
        {
          ibge: '5103403',
          cityName: 'Cuiaba'
        },
        {
          ibge: '5103437',
          cityName: 'Curvelandia'
        },
        {
          ibge: '5103452',
          cityName: 'Denise'
        },
        {
          ibge: '5103502',
          cityName: 'Diamantino'
        },
        {
          ibge: '5103601',
          cityName: 'Dom Aquino'
        },
        {
          ibge: '5103700',
          cityName: 'Feliz Natal'
        },
        {
          ibge: '5103809',
          cityName: 'Figueiropolis D\'Oeste'
        },
        {
          ibge: '5103858',
          cityName: 'Gaiºcha do Norte'
        },
        {
          ibge: '5103908',
          cityName: 'General Carneiro'
        },
        {
          ibge: '5103957',
          cityName: 'Gloria D\'Oeste'
        },
        {
          ibge: '5104104',
          cityName: 'Guaranta do Norte'
        },
        {
          ibge: '5104203',
          cityName: 'Guiratinga'
        },
        {
          ibge: '5104500',
          cityName: 'Indiavai­'
        },
        {
          ibge: '5104526',
          cityName: 'Ipiranga do Norte'
        },
        {
          ibge: '5104542',
          cityName: 'Itanhanga'
        },
        {
          ibge: '5104559',
          cityName: 'Itaiºba'
        },
        {
          ibge: '5104609',
          cityName: 'Itiquira'
        },
        {
          ibge: '5104807',
          cityName: 'Jaciara'
        },
        {
          ibge: '5104906',
          cityName: 'Jangada'
        },
        {
          ibge: '5105002',
          cityName: 'Jauru'
        },
        {
          ibge: '5105101',
          cityName: 'Juara'
        },
        {
          ibge: '5105150',
          cityName: 'Jui­na'
        },
        {
          ibge: '5105176',
          cityName: 'Juruena'
        },
        {
          ibge: '5105200',
          cityName: 'Juscimeira'
        },
        {
          ibge: '5105234',
          cityName: 'Lambari D\'Oeste'
        },
        {
          ibge: '5105259',
          cityName: 'Lucas do Rio Verde'
        },
        {
          ibge: '5105309',
          cityName: 'Luciara'
        },
        {
          ibge: '5105580',
          cityName: 'Marcelandia'
        },
        {
          ibge: '5105606',
          cityName: 'Matupa'
        },
        {
          ibge: '5105622',
          cityName: 'Mirassol d\'Oeste'
        },
        {
          ibge: '5105903',
          cityName: 'Nobres'
        },
        {
          ibge: '5106000',
          cityName: 'Nortelandia'
        },
        {
          ibge: '5106109',
          cityName: 'Nossa Senhora do Livramento'
        },
        {
          ibge: '5106158',
          cityName: 'Nova Bandeirantes'
        },
        {
          ibge: '5106208',
          cityName: 'Nova Brasilandia'
        },
        {
          ibge: '5106216',
          cityName: 'Nova Canaa do Norte'
        },
        {
          ibge: '5108808',
          cityName: 'Nova Guarita'
        },
        {
          ibge: '5106182',
          cityName: 'Nova Lacerda'
        },
        {
          ibge: '5108857',
          cityName: 'Nova Marilandia'
        },
        {
          ibge: '5108907',
          cityName: 'Nova Maringa'
        },
        {
          ibge: '5108956',
          cityName: 'Nova Monte Verde'
        },
        {
          ibge: '5106224',
          cityName: 'Nova Mutum'
        },
        {
          ibge: '5106174',
          cityName: 'Nova Nazare'
        },
        {
          ibge: '5106232',
          cityName: 'Nova Oli­mpia'
        },
        {
          ibge: '5106190',
          cityName: 'Nova Santa Helena'
        },
        {
          ibge: '5106240',
          cityName: 'Nova Ubirata'
        },
        {
          ibge: '5106257',
          cityName: 'Nova Xavantina'
        },
        {
          ibge: '5106273',
          cityName: 'Novo Horizonte do Norte'
        },
        {
          ibge: '5106265',
          cityName: 'Novo Mundo'
        },
        {
          ibge: '5106315',
          cityName: 'Novo Santo Antonio'
        },
        {
          ibge: '5106281',
          cityName: 'Novo Sao Joaquim'
        },
        {
          ibge: '5106299',
          cityName: 'Paranai­ta'
        },
        {
          ibge: '5106307',
          cityName: 'Paranatinga'
        },
        {
          ibge: '5106372',
          cityName: 'Pedra Preta'
        },
        {
          ibge: '5106422',
          cityName: 'Peixoto de Azevedo'
        },
        {
          ibge: '5106455',
          cityName: 'Planalto da Serra'
        },
        {
          ibge: '5106505',
          cityName: 'Pocone'
        },
        {
          ibge: '5106653',
          cityName: 'Pontal do Araguaia'
        },
        {
          ibge: '5106703',
          cityName: 'Ponte Branca'
        },
        {
          ibge: '5106752',
          cityName: 'Pontes e Lacerda'
        },
        {
          ibge: '5106778',
          cityName: 'Porto Alegre do Norte'
        },
        {
          ibge: '5106802',
          cityName: 'Porto dos Gaiºchos'
        },
        {
          ibge: '5106828',
          cityName: 'Porto Esperidiao'
        },
        {
          ibge: '5106851',
          cityName: 'Porto Estrela'
        },
        {
          ibge: '5107008',
          cityName: 'Poxoreu'
        },
        {
          ibge: '5107040',
          cityName: 'Primavera do Leste'
        },
        {
          ibge: '5107065',
          cityName: 'Queriªncia'
        },
        {
          ibge: '5107156',
          cityName: 'Reserva do Cabacal'
        },
        {
          ibge: '5107180',
          cityName: 'Ribeirao Cascalheira'
        },
        {
          ibge: '5107198',
          cityName: 'Ribeiraozinho'
        },
        {
          ibge: '5107206',
          cityName: 'Rio Branco'
        },
        {
          ibge: '5107578',
          cityName: 'Rondolandia'
        },
        {
          ibge: '5107602',
          cityName: 'Rondonopolis'
        },
        {
          ibge: '5107701',
          cityName: 'Rosario Oeste'
        },
        {
          ibge: '5107750',
          cityName: 'Salto do Ceu'
        },
        {
          ibge: '5107248',
          cityName: 'Santa Carmem'
        },
        {
          ibge: '5107743',
          cityName: 'Santa Cruz do Xingu'
        },
        {
          ibge: '5107768',
          cityName: 'Santa Rita do Trivelato'
        },
        {
          ibge: '5107776',
          cityName: 'Santa Terezinha'
        },
        {
          ibge: '5107263',
          cityName: 'Santo Afonso'
        },
        {
          ibge: '5107792',
          cityName: 'Santo Antonio do Leste'
        },
        {
          ibge: '5107800',
          cityName: 'Santo Antonio do Leverger'
        },
        {
          ibge: '5107859',
          cityName: 'Sao Felix do Araguaia'
        },
        {
          ibge: '5107297',
          cityName: 'Sao Jose do Povo'
        },
        {
          ibge: '5107305',
          cityName: 'Sao Jose do Rio Claro'
        },
        {
          ibge: '5107354',
          cityName: 'Sao Jose do Xingu'
        },
        {
          ibge: '5107107',
          cityName: 'Sao Jose dos Quatro Marcos'
        },
        {
          ibge: '5107404',
          cityName: 'Sao Pedro da Cipa'
        },
        {
          ibge: '5107875',
          cityName: 'Sapezal'
        },
        {
          ibge: '5107883',
          cityName: 'Serra Nova Dourada'
        },
        {
          ibge: '5107909',
          cityName: 'Sinop'
        },
        {
          ibge: '5107925',
          cityName: 'Sorriso'
        },
        {
          ibge: '5107941',
          cityName: 'Tabapora'
        },
        {
          ibge: '5107958',
          cityName: 'Tangara da Serra'
        },
        {
          ibge: '5108006',
          cityName: 'Tapurah'
        },
        {
          ibge: '5108055',
          cityName: 'Terra Nova do Norte'
        },
        {
          ibge: '5108105',
          cityName: 'Tesouro'
        },
        {
          ibge: '5108204',
          cityName: 'Torixoreu'
        },
        {
          ibge: '5108303',
          cityName: 'Uniao do Sul'
        },
        {
          ibge: '5108352',
          cityName: 'Vale de Sao Domingos'
        },
        {
          ibge: '5108402',
          cityName: 'Varzea Grande'
        },
        {
          ibge: '5108501',
          cityName: 'Vera'
        },
        {
          ibge: '5105507',
          cityName: 'Vila Bela da Santi­ssima Trindade'
        },
        {
          ibge: '5108600',
          cityName: 'Vila Rica'
        }
      ]
    },
    {
      abbreviation: 'PA',
      cities: [
        {
          ibge: '1500107',
          cityName: 'Abaetetuba'
        },
        {
          ibge: '1500131',
          cityName: 'Abel Figueiredo'
        },
        {
          ibge: '1500206',
          cityName: 'Acara'
        },
        {
          ibge: '1500305',
          cityName: 'Afua'
        },
        {
          ibge: '1500347',
          cityName: 'Agua Azul do Norte'
        },
        {
          ibge: '1500404',
          cityName: 'Alenquer'
        },
        {
          ibge: '1500503',
          cityName: 'Almeirim'
        },
        {
          ibge: '1500602',
          cityName: 'Altamira'
        },
        {
          ibge: '1500701',
          cityName: 'Anajas'
        },
        {
          ibge: '1500800',
          cityName: 'Ananindeua'
        },
        {
          ibge: '1500859',
          cityName: 'Anapu'
        },
        {
          ibge: '1500909',
          cityName: 'Augusto Corriªa'
        },
        {
          ibge: '1500958',
          cityName: 'Aurora do Para'
        },
        {
          ibge: '1501006',
          cityName: 'Aveiro'
        },
        {
          ibge: '1501105',
          cityName: 'Bagre'
        },
        {
          ibge: '1501204',
          cityName: 'Baiao'
        },
        {
          ibge: '1501253',
          cityName: 'Bannach'
        },
        {
          ibge: '1501303',
          cityName: 'Barcarena'
        },
        {
          ibge: '1501402',
          cityName: 'Belem'
        },
        {
          ibge: '1501451',
          cityName: 'Belterra'
        },
        {
          ibge: '1501501',
          cityName: 'Benevides'
        },
        {
          ibge: '1501576',
          cityName: 'Bom Jesus do Tocantins'
        },
        {
          ibge: '1501600',
          cityName: 'Bonito'
        },
        {
          ibge: '1501709',
          cityName: 'Braganca'
        },
        {
          ibge: '1501725',
          cityName: 'Brasil Novo'
        },
        {
          ibge: '1501758',
          cityName: 'Brejo Grande do Araguaia'
        },
        {
          ibge: '1501782',
          cityName: 'Breu Branco'
        },
        {
          ibge: '1501808',
          cityName: 'Breves'
        },
        {
          ibge: '1501907',
          cityName: 'Bujaru'
        },
        {
          ibge: '1502004',
          cityName: 'Cachoeira do Arari'
        },
        {
          ibge: '1501956',
          cityName: 'Cachoeira do Piria'
        },
        {
          ibge: '1502103',
          cityName: 'Cameta'
        },
        {
          ibge: '1502152',
          cityName: 'Canaa dos Carajas'
        },
        {
          ibge: '1502202',
          cityName: 'Capanema'
        },
        {
          ibge: '1502301',
          cityName: 'Capitao Poco'
        },
        {
          ibge: '1502400',
          cityName: 'Castanhal'
        },
        {
          ibge: '1502509',
          cityName: 'Chaves'
        },
        {
          ibge: '1502608',
          cityName: 'Colares'
        },
        {
          ibge: '1502707',
          cityName: 'Conceicao do Araguaia'
        },
        {
          ibge: '1502756',
          cityName: 'Concordia do Para'
        },
        {
          ibge: '1502764',
          cityName: 'Cumaru do Norte'
        },
        {
          ibge: '1502772',
          cityName: 'Curionopolis'
        },
        {
          ibge: '1502806',
          cityName: 'Curralinho'
        },
        {
          ibge: '1502855',
          cityName: 'Curua'
        },
        {
          ibge: '1502905',
          cityName: 'Curuca'
        },
        {
          ibge: '1502939',
          cityName: 'Dom Eliseu'
        },
        {
          ibge: '1502954',
          cityName: 'Eldorado do Carajas'
        },
        {
          ibge: '1503002',
          cityName: 'Faro'
        },
        {
          ibge: '1503044',
          cityName: 'Floresta do Araguaia'
        },
        {
          ibge: '1503077',
          cityName: 'Garrafao do Norte'
        },
        {
          ibge: '1503093',
          cityName: 'Goianesia do Para'
        },
        {
          ibge: '1503101',
          cityName: 'Gurupa'
        },
        {
          ibge: '1503200',
          cityName: 'Igarape-Acu'
        },
        {
          ibge: '1503309',
          cityName: 'Igarape-Miri'
        },
        {
          ibge: '1503408',
          cityName: 'Inhangapi'
        },
        {
          ibge: '1503457',
          cityName: 'Ipixuna do Para'
        },
        {
          ibge: '1503507',
          cityName: 'Irituia'
        },
        {
          ibge: '1503606',
          cityName: 'Itaituba'
        },
        {
          ibge: '1503705',
          cityName: 'Itupiranga'
        },
        {
          ibge: '1503754',
          cityName: 'Jacareacanga'
        },
        {
          ibge: '1503804',
          cityName: 'Jacunda'
        },
        {
          ibge: '1503903',
          cityName: 'Juruti'
        },
        {
          ibge: '1504000',
          cityName: 'Limoeiro do Ajuru'
        },
        {
          ibge: '1504059',
          cityName: 'Mae do Rio'
        },
        {
          ibge: '1504109',
          cityName: 'Magalhaes Barata'
        },
        {
          ibge: '1504208',
          cityName: 'Maraba'
        },
        {
          ibge: '1504307',
          cityName: 'Maracana'
        },
        {
          ibge: '1504406',
          cityName: 'Marapanim'
        },
        {
          ibge: '1504422',
          cityName: 'Marituba'
        },
        {
          ibge: '1504455',
          cityName: 'Medicilandia'
        },
        {
          ibge: '1504505',
          cityName: 'Melgaco'
        },
        {
          ibge: '1504604',
          cityName: 'Mocajuba'
        },
        {
          ibge: '1504703',
          cityName: 'Moju'
        },
        {
          ibge: '1504752',
          cityName: 'Mojui­ dos Campos'
        },
        {
          ibge: '1504802',
          cityName: 'Monte Alegre'
        },
        {
          ibge: '1504901',
          cityName: 'Muana'
        },
        {
          ibge: '1504950',
          cityName: 'Nova Esperanca do Piria'
        },
        {
          ibge: '1504976',
          cityName: 'Nova Ipixuna'
        },
        {
          ibge: '1505007',
          cityName: 'Nova Timboteua'
        },
        {
          ibge: '1505031',
          cityName: 'Novo Progresso'
        },
        {
          ibge: '1505064',
          cityName: 'Novo Repartimento'
        },
        {
          ibge: '1505106',
          cityName: 'i“bidos'
        },
        {
          ibge: '1505205',
          cityName: 'Oeiras do Para'
        },
        {
          ibge: '1505304',
          cityName: 'Oriximina'
        },
        {
          ibge: '1505403',
          cityName: 'Ourem'
        },
        {
          ibge: '1505437',
          cityName: 'Ourilandia do Norte'
        },
        {
          ibge: '1505486',
          cityName: 'Pacaja'
        },
        {
          ibge: '1505494',
          cityName: 'Palestina do Para'
        },
        {
          ibge: '1505502',
          cityName: 'Paragominas'
        },
        {
          ibge: '1505536',
          cityName: 'Parauapebas'
        },
        {
          ibge: '1505551',
          cityName: 'Pau d\'Arco'
        },
        {
          ibge: '1505601',
          cityName: 'Peixe-Boi'
        },
        {
          ibge: '1505635',
          cityName: 'Picarra'
        },
        {
          ibge: '1505650',
          cityName: 'Placas'
        },
        {
          ibge: '1505700',
          cityName: 'Ponta de Pedras'
        },
        {
          ibge: '1505809',
          cityName: 'Portel'
        },
        {
          ibge: '1505908',
          cityName: 'Porto de Moz'
        },
        {
          ibge: '1506005',
          cityName: 'Prainha'
        },
        {
          ibge: '1506104',
          cityName: 'Primavera'
        },
        {
          ibge: '1506112',
          cityName: 'Quatipuru'
        },
        {
          ibge: '1506138',
          cityName: 'Redencao'
        },
        {
          ibge: '1506161',
          cityName: 'Rio Maria'
        },
        {
          ibge: '1506187',
          cityName: 'Rondon do Para'
        },
        {
          ibge: '1506195',
          cityName: 'Ruropolis'
        },
        {
          ibge: '1506203',
          cityName: 'Salinopolis'
        },
        {
          ibge: '1506302',
          cityName: 'Salvaterra'
        },
        {
          ibge: '1506351',
          cityName: 'Santa Barbara do Para'
        },
        {
          ibge: '1506401',
          cityName: 'Santa Cruz do Arari'
        },
        {
          ibge: '1506500',
          cityName: 'Santa Izabel do Para'
        },
        {
          ibge: '1506559',
          cityName: 'Santa Luzia do Para'
        },
        {
          ibge: '1506583',
          cityName: 'Santa Maria das Barreiras'
        },
        {
          ibge: '1506609',
          cityName: 'Santa Maria do Para'
        },
        {
          ibge: '1506708',
          cityName: 'Santana do Araguaia'
        },
        {
          ibge: '1506807',
          cityName: 'Santarem'
        },
        {
          ibge: '1506906',
          cityName: 'Santarem Novo'
        },
        {
          ibge: '1507003',
          cityName: 'Santo Antonio do Taua'
        },
        {
          ibge: '1507102',
          cityName: 'Sao Caetano de Odivelas'
        },
        {
          ibge: '1507151',
          cityName: 'Sao Domingos do Araguaia'
        },
        {
          ibge: '1507201',
          cityName: 'Sao Domingos do Capim'
        },
        {
          ibge: '1507300',
          cityName: 'Sao Felix do Xingu'
        },
        {
          ibge: '1507409',
          cityName: 'Sao Francisco do Para'
        },
        {
          ibge: '1507458',
          cityName: 'Sao Geraldo do Araguaia'
        },
        {
          ibge: '1507466',
          cityName: 'Sao Joao da Ponta'
        },
        {
          ibge: '1507474',
          cityName: 'Sao Joao de Pirabas'
        },
        {
          ibge: '1507508',
          cityName: 'Sao Joao do Araguaia'
        },
        {
          ibge: '1507607',
          cityName: 'Sao Miguel do Guama'
        },
        {
          ibge: '1507706',
          cityName: 'Sao Sebastiao da Boa Vista'
        },
        {
          ibge: '1507755',
          cityName: 'Sapucaia'
        },
        {
          ibge: '1507805',
          cityName: 'Senador Jose Porfi­rio'
        },
        {
          ibge: '1507904',
          cityName: 'Soure'
        },
        {
          ibge: '1507953',
          cityName: 'Tailandia'
        },
        {
          ibge: '1507961',
          cityName: 'Terra Alta'
        },
        {
          ibge: '1507979',
          cityName: 'Terra Santa'
        },
        {
          ibge: '1508001',
          cityName: 'Tome-Acu'
        },
        {
          ibge: '1508035',
          cityName: 'Tracuateua'
        },
        {
          ibge: '1508050',
          cityName: 'Trairao'
        },
        {
          ibge: '1508084',
          cityName: 'Tucuma'
        },
        {
          ibge: '1508100',
          cityName: 'Tucurui­'
        },
        {
          ibge: '1508126',
          cityName: 'Ulianopolis'
        },
        {
          ibge: '1508159',
          cityName: 'Uruara'
        },
        {
          ibge: '1508209',
          cityName: 'Vigia'
        },
        {
          ibge: '1508308',
          cityName: 'Viseu'
        },
        {
          ibge: '1508357',
          cityName: 'Vitoria do Xingu'
        },
        {
          ibge: '1508407',
          cityName: 'Xinguara'
        }
      ]
    },
    {
      abbreviation: 'PB',
      cities: [
        {
          ibge: '2500106',
          cityName: 'Agua Branca'
        },
        {
          ibge: '2500205',
          cityName: 'Aguiar'
        },
        {
          ibge: '2500304',
          cityName: 'Alagoa Grande'
        },
        {
          ibge: '2500403',
          cityName: 'Alagoa Nova'
        },
        {
          ibge: '2500502',
          cityName: 'Alagoinha'
        },
        {
          ibge: '2500536',
          cityName: 'Alcantil'
        },
        {
          ibge: '2500577',
          cityName: 'Algodao de Jandai­ra'
        },
        {
          ibge: '2500601',
          cityName: 'Alhandra'
        },
        {
          ibge: '2500734',
          cityName: 'Amparo'
        },
        {
          ibge: '2500775',
          cityName: 'Aparecida'
        },
        {
          ibge: '2500809',
          cityName: 'Aracagi'
        },
        {
          ibge: '2500908',
          cityName: 'Arara'
        },
        {
          ibge: '2501005',
          cityName: 'Araruna'
        },
        {
          ibge: '2501104',
          cityName: 'Areia'
        },
        {
          ibge: '2501153',
          cityName: 'Areia de Baraiºnas'
        },
        {
          ibge: '2501203',
          cityName: 'Areial'
        },
        {
          ibge: '2501302',
          cityName: 'Aroeiras'
        },
        {
          ibge: '2501351',
          cityName: 'Assuncao'
        },
        {
          ibge: '2501401',
          cityName: 'Bai­a da Traicao'
        },
        {
          ibge: '2501500',
          cityName: 'Bananeiras'
        },
        {
          ibge: '2501534',
          cityName: 'Baraiºna'
        },
        {
          ibge: '2501609',
          cityName: 'Barra de Santa Rosa'
        },
        {
          ibge: '2501575',
          cityName: 'Barra de Santana'
        },
        {
          ibge: '2501708',
          cityName: 'Barra de Sao Miguel'
        },
        {
          ibge: '2501807',
          cityName: 'Bayeux'
        },
        {
          ibge: '2501906',
          cityName: 'Belem'
        },
        {
          ibge: '2502003',
          cityName: 'Belem do Brejo do Cruz'
        },
        {
          ibge: '2502052',
          cityName: 'Bernardino Batista'
        },
        {
          ibge: '2502102',
          cityName: 'Boa Ventura'
        },
        {
          ibge: '2502151',
          cityName: 'Boa Vista'
        },
        {
          ibge: '2502201',
          cityName: 'Bom Jesus'
        },
        {
          ibge: '2502300',
          cityName: 'Bom Sucesso'
        },
        {
          ibge: '2502409',
          cityName: 'Bonito de Santa Fe'
        },
        {
          ibge: '2502508',
          cityName: 'Boqueirao'
        },
        {
          ibge: '2502706',
          cityName: 'Borborema'
        },
        {
          ibge: '2502805',
          cityName: 'Brejo do Cruz'
        },
        {
          ibge: '2502904',
          cityName: 'Brejo dos Santos'
        },
        {
          ibge: '2503001',
          cityName: 'Caapora'
        },
        {
          ibge: '2503100',
          cityName: 'Cabaceiras'
        },
        {
          ibge: '2503209',
          cityName: 'Cabedelo'
        },
        {
          ibge: '2503308',
          cityName: 'Cachoeira dos Andios'
        },
        {
          ibge: '2503407',
          cityName: 'Cacimba de Areia'
        },
        {
          ibge: '2503506',
          cityName: 'Cacimba de Dentro'
        },
        {
          ibge: '2503555',
          cityName: 'Cacimbas'
        },
        {
          ibge: '2503605',
          cityName: 'Caicara'
        },
        {
          ibge: '2503704',
          cityName: 'Cajazeiras'
        },
        {
          ibge: '2503753',
          cityName: 'Cajazeirinhas'
        },
        {
          ibge: '2503803',
          cityName: 'Caldas Brandao'
        },
        {
          ibge: '2503902',
          cityName: 'Camalaiº'
        },
        {
          ibge: '2504009',
          cityName: 'Campina Grande'
        },
        {
          ibge: '2504033',
          cityName: 'Capim'
        },
        {
          ibge: '2504074',
          cityName: 'Caraiºbas'
        },
        {
          ibge: '2504108',
          cityName: 'Carrapateira'
        },
        {
          ibge: '2504157',
          cityName: 'Casserengue'
        },
        {
          ibge: '2504207',
          cityName: 'Catingueira'
        },
        {
          ibge: '2504306',
          cityName: 'Catole do Rocha'
        },
        {
          ibge: '2504355',
          cityName: 'Caturite'
        },
        {
          ibge: '2504405',
          cityName: 'Conceicao'
        },
        {
          ibge: '2504504',
          cityName: 'Condado'
        },
        {
          ibge: '2504603',
          cityName: 'Conde'
        },
        {
          ibge: '2504702',
          cityName: 'Congo'
        },
        {
          ibge: '2504801',
          cityName: 'Coremas'
        },
        {
          ibge: '2504850',
          cityName: 'Coxixola'
        },
        {
          ibge: '2504900',
          cityName: 'Cruz do Espi­rito Santo'
        },
        {
          ibge: '2505006',
          cityName: 'Cubati'
        },
        {
          ibge: '2505105',
          cityName: 'Cuite'
        },
        {
          ibge: '2505238',
          cityName: 'Cuite de Mamanguape'
        },
        {
          ibge: '2505204',
          cityName: 'Cuitegi'
        },
        {
          ibge: '2505279',
          cityName: 'Curral de Cima'
        },
        {
          ibge: '2505303',
          cityName: 'Curral Velho'
        },
        {
          ibge: '2505352',
          cityName: 'Damiao'
        },
        {
          ibge: '2505402',
          cityName: 'Desterro'
        },
        {
          ibge: '2505600',
          cityName: 'Diamante'
        },
        {
          ibge: '2505709',
          cityName: 'Dona Iniªs'
        },
        {
          ibge: '2505808',
          cityName: 'Duas Estradas'
        },
        {
          ibge: '2505907',
          cityName: 'Emas'
        },
        {
          ibge: '2506004',
          cityName: 'Esperanca'
        },
        {
          ibge: '2506103',
          cityName: 'Fagundes'
        },
        {
          ibge: '2506202',
          cityName: 'Frei Martinho'
        },
        {
          ibge: '2506251',
          cityName: 'Gado Bravo'
        },
        {
          ibge: '2506301',
          cityName: 'Guarabira'
        },
        {
          ibge: '2506400',
          cityName: 'Gurinhem'
        },
        {
          ibge: '2506509',
          cityName: 'Gurjao'
        },
        {
          ibge: '2506608',
          cityName: 'Ibiara'
        },
        {
          ibge: '2502607',
          cityName: 'Igaracy'
        },
        {
          ibge: '2506707',
          cityName: 'Imaculada'
        },
        {
          ibge: '2506806',
          cityName: 'Inga'
        },
        {
          ibge: '2506905',
          cityName: 'Itabaiana'
        },
        {
          ibge: '2507002',
          cityName: 'Itaporanga'
        },
        {
          ibge: '2507101',
          cityName: 'Itapororoca'
        },
        {
          ibge: '2507200',
          cityName: 'Itatuba'
        },
        {
          ibge: '2507309',
          cityName: 'Jacaraiº'
        },
        {
          ibge: '2507408',
          cityName: 'Jerico'
        },
        {
          ibge: '2507507',
          cityName: 'Joao Pessoa'
        },
        {
          ibge: '2513653',
          cityName: 'Joca Claudino'
        },
        {
          ibge: '2507606',
          cityName: 'Juarez Tavora'
        },
        {
          ibge: '2507705',
          cityName: 'Juazeirinho'
        },
        {
          ibge: '2507804',
          cityName: 'Junco do Serido'
        },
        {
          ibge: '2507903',
          cityName: 'Juripiranga'
        },
        {
          ibge: '2508000',
          cityName: 'Juru'
        },
        {
          ibge: '2508109',
          cityName: 'Lagoa'
        },
        {
          ibge: '2508208',
          cityName: 'Lagoa de Dentro'
        },
        {
          ibge: '2508307',
          cityName: 'Lagoa Seca'
        },
        {
          ibge: '2508406',
          cityName: 'Lastro'
        },
        {
          ibge: '2508505',
          cityName: 'Livramento'
        },
        {
          ibge: '2508554',
          cityName: 'Logradouro'
        },
        {
          ibge: '2508604',
          cityName: 'Lucena'
        },
        {
          ibge: '2508703',
          cityName: 'Mae d\'Agua'
        },
        {
          ibge: '2508802',
          cityName: 'Malta'
        },
        {
          ibge: '2508901',
          cityName: 'Mamanguape'
        },
        {
          ibge: '2509008',
          cityName: 'Manai­ra'
        },
        {
          ibge: '2509057',
          cityName: 'Marcacao'
        },
        {
          ibge: '2509107',
          cityName: 'Mari'
        },
        {
          ibge: '2509156',
          cityName: 'Marizopolis'
        },
        {
          ibge: '2509206',
          cityName: 'Massaranduba'
        },
        {
          ibge: '2509305',
          cityName: 'Mataraca'
        },
        {
          ibge: '2509339',
          cityName: 'Matinhas'
        },
        {
          ibge: '2509370',
          cityName: 'Mato Grosso'
        },
        {
          ibge: '2509396',
          cityName: 'Matureia'
        },
        {
          ibge: '2509404',
          cityName: 'Mogeiro'
        },
        {
          ibge: '2509503',
          cityName: 'Montadas'
        },
        {
          ibge: '2509602',
          cityName: 'Monte Horebe'
        },
        {
          ibge: '2509701',
          cityName: 'Monteiro'
        },
        {
          ibge: '2509800',
          cityName: 'Mulungu'
        },
        {
          ibge: '2509909',
          cityName: 'Natuba'
        },
        {
          ibge: '2510006',
          cityName: 'Nazarezinho'
        },
        {
          ibge: '2510105',
          cityName: 'Nova Floresta'
        },
        {
          ibge: '2510204',
          cityName: 'Nova Olinda'
        },
        {
          ibge: '2510303',
          cityName: 'Nova Palmeira'
        },
        {
          ibge: '2510402',
          cityName: 'Olho d\'Agua'
        },
        {
          ibge: '2510501',
          cityName: 'Olivedos'
        },
        {
          ibge: '2510600',
          cityName: 'Ouro Velho'
        },
        {
          ibge: '2510659',
          cityName: 'Parari'
        },
        {
          ibge: '2510709',
          cityName: 'Passagem'
        },
        {
          ibge: '2510808',
          cityName: 'Patos'
        },
        {
          ibge: '2510907',
          cityName: 'Paulista'
        },
        {
          ibge: '2511004',
          cityName: 'Pedra Branca'
        },
        {
          ibge: '2511103',
          cityName: 'Pedra Lavrada'
        },
        {
          ibge: '2511202',
          cityName: 'Pedras de Fogo'
        },
        {
          ibge: '2512721',
          cityName: 'Pedro Regis'
        },
        {
          ibge: '2511301',
          cityName: 'Pianco'
        },
        {
          ibge: '2511400',
          cityName: 'Picui­'
        },
        {
          ibge: '2511509',
          cityName: 'Pilar'
        },
        {
          ibge: '2511608',
          cityName: 'Piliµes'
        },
        {
          ibge: '2511707',
          cityName: 'Piliµezinhos'
        },
        {
          ibge: '2511806',
          cityName: 'Pirpirituba'
        },
        {
          ibge: '2511905',
          cityName: 'Pitimbu'
        },
        {
          ibge: '2512002',
          cityName: 'Pocinhos'
        },
        {
          ibge: '2512036',
          cityName: 'Poco Dantas'
        },
        {
          ibge: '2512077',
          cityName: 'Poco de Jose de Moura'
        },
        {
          ibge: '2512101',
          cityName: 'Pombal'
        },
        {
          ibge: '2512200',
          cityName: 'Prata'
        },
        {
          ibge: '2512309',
          cityName: 'Princesa Isabel'
        },
        {
          ibge: '2512408',
          cityName: 'Puxinana'
        },
        {
          ibge: '2512507',
          cityName: 'Queimadas'
        },
        {
          ibge: '2512606',
          cityName: 'Quixaba'
        },
        {
          ibge: '2512705',
          cityName: 'Remi­gio'
        },
        {
          ibge: '2512747',
          cityName: 'Riachao'
        },
        {
          ibge: '2512754',
          cityName: 'Riachao do Bacamarte'
        },
        {
          ibge: '2512762',
          cityName: 'Riachao do Poco'
        },
        {
          ibge: '2512788',
          cityName: 'Riacho de Santo Antonio'
        },
        {
          ibge: '2512804',
          cityName: 'Riacho dos Cavalos'
        },
        {
          ibge: '2512903',
          cityName: 'Rio Tinto'
        },
        {
          ibge: '2513000',
          cityName: 'Salgadinho'
        },
        {
          ibge: '2513109',
          cityName: 'Salgado de Sao Felix'
        },
        {
          ibge: '2513158',
          cityName: 'Santa Ceci­lia'
        },
        {
          ibge: '2513208',
          cityName: 'Santa Cruz'
        },
        {
          ibge: '2513307',
          cityName: 'Santa Helena'
        },
        {
          ibge: '2513356',
          cityName: 'Santa Iniªs'
        },
        {
          ibge: '2513406',
          cityName: 'Santa Luzia'
        },
        {
          ibge: '2513703',
          cityName: 'Santa Rita'
        },
        {
          ibge: '2513802',
          cityName: 'Santa Teresinha'
        },
        {
          ibge: '2513505',
          cityName: 'Santana de Mangueira'
        },
        {
          ibge: '2513604',
          cityName: 'Santana dos Garrotes'
        },
        {
          ibge: '2513851',
          cityName: 'Santo Andre'
        },
        {
          ibge: '2513927',
          cityName: 'Sao Bentinho'
        },
        {
          ibge: '2513901',
          cityName: 'Sao Bento'
        },
        {
          ibge: '2513968',
          cityName: 'Sao Domingos'
        },
        {
          ibge: '2513943',
          cityName: 'Sao Domingos do Cariri'
        },
        {
          ibge: '2513984',
          cityName: 'Sao Francisco'
        },
        {
          ibge: '2514008',
          cityName: 'Sao Joao do Cariri'
        },
        {
          ibge: '2500700',
          cityName: 'Sao Joao do Rio do Peixe'
        },
        {
          ibge: '2514107',
          cityName: 'Sao Joao do Tigre'
        },
        {
          ibge: '2514206',
          cityName: 'Sao Jose da Lagoa Tapada'
        },
        {
          ibge: '2514305',
          cityName: 'Sao Jose de Caiana'
        },
        {
          ibge: '2514404',
          cityName: 'Sao Jose de Espinharas'
        },
        {
          ibge: '2514503',
          cityName: 'Sao Jose de Piranhas'
        },
        {
          ibge: '2514552',
          cityName: 'Sao Jose de Princesa'
        },
        {
          ibge: '2514602',
          cityName: 'Sao Jose do Bonfim'
        },
        {
          ibge: '2514651',
          cityName: 'Sao Jose do Brejo do Cruz'
        },
        {
          ibge: '2514701',
          cityName: 'Sao Jose do Sabugi'
        },
        {
          ibge: '2514800',
          cityName: 'Sao Jose dos Cordeiros'
        },
        {
          ibge: '2514453',
          cityName: 'Sao Jose dos Ramos'
        },
        {
          ibge: '2514909',
          cityName: 'Sao Mamede'
        },
        {
          ibge: '2515005',
          cityName: 'Sao Miguel de Taipu'
        },
        {
          ibge: '2515104',
          cityName: 'Sao Sebastiao de Lagoa de Roca'
        },
        {
          ibge: '2515203',
          cityName: 'Sao Sebastiao do Umbuzeiro'
        },
        {
          ibge: '2515401',
          cityName: 'Sao Vicente do Serido'
        },
        {
          ibge: '2515302',
          cityName: 'Sape'
        },
        {
          ibge: '2515500',
          cityName: 'Serra Branca'
        },
        {
          ibge: '2515609',
          cityName: 'Serra da Raiz'
        },
        {
          ibge: '2515708',
          cityName: 'Serra Grande'
        },
        {
          ibge: '2515807',
          cityName: 'Serra Redonda'
        },
        {
          ibge: '2515906',
          cityName: 'Serraria'
        },
        {
          ibge: '2515930',
          cityName: 'Sertaozinho'
        },
        {
          ibge: '2515971',
          cityName: 'Sobrado'
        },
        {
          ibge: '2516003',
          cityName: 'Solanea'
        },
        {
          ibge: '2516102',
          cityName: 'Soledade'
        },
        {
          ibge: '2516151',
          cityName: 'Sossiªgo'
        },
        {
          ibge: '2516201',
          cityName: 'Sousa'
        },
        {
          ibge: '2516300',
          cityName: 'Sume'
        },
        {
          ibge: '2516409',
          cityName: 'Tacima'
        },
        {
          ibge: '2516508',
          cityName: 'Taperoa'
        },
        {
          ibge: '2516607',
          cityName: 'Tavares'
        },
        {
          ibge: '2516706',
          cityName: 'Teixeira'
        },
        {
          ibge: '2516755',
          cityName: 'Tenorio'
        },
        {
          ibge: '2516805',
          cityName: 'Triunfo'
        },
        {
          ibge: '2516904',
          cityName: 'Uiraiºna'
        },
        {
          ibge: '2517001',
          cityName: 'Umbuzeiro'
        },
        {
          ibge: '2517100',
          cityName: 'Varzea'
        },
        {
          ibge: '2517209',
          cityName: 'Vieiropolis'
        },
        {
          ibge: '2505501',
          cityName: 'Vista Serrana'
        },
        {
          ibge: '2517407',
          cityName: 'Zabeliª'
        }
      ]
    },
    {
      abbreviation: 'PE',
      cities: [
        {
          ibge: '2600054',
          cityName: 'Abreu e Lima'
        },
        {
          ibge: '2600104',
          cityName: 'Afogados da Ingazeira'
        },
        {
          ibge: '2600203',
          cityName: 'Afranio'
        },
        {
          ibge: '2600302',
          cityName: 'Agrestina'
        },
        {
          ibge: '2600401',
          cityName: 'Agua Preta'
        },
        {
          ibge: '2600500',
          cityName: 'Aguas Belas'
        },
        {
          ibge: '2600609',
          cityName: 'Alagoinha'
        },
        {
          ibge: '2600708',
          cityName: 'Alianca'
        },
        {
          ibge: '2600807',
          cityName: 'Altinho'
        },
        {
          ibge: '2600906',
          cityName: 'Amaraji'
        },
        {
          ibge: '2601003',
          cityName: 'Angelim'
        },
        {
          ibge: '2601052',
          cityName: 'Aracoiaba'
        },
        {
          ibge: '2601102',
          cityName: 'Araripina'
        },
        {
          ibge: '2601201',
          cityName: 'Arcoverde'
        },
        {
          ibge: '2601300',
          cityName: 'Barra de Guabiraba'
        },
        {
          ibge: '2601409',
          cityName: 'Barreiros'
        },
        {
          ibge: '2601508',
          cityName: 'Belem de Maria'
        },
        {
          ibge: '2601607',
          cityName: 'Belem do Sao Francisco'
        },
        {
          ibge: '2601706',
          cityName: 'Belo Jardim'
        },
        {
          ibge: '2601805',
          cityName: 'Betania'
        },
        {
          ibge: '2601904',
          cityName: 'Bezerros'
        },
        {
          ibge: '2602001',
          cityName: 'Bodoco'
        },
        {
          ibge: '2602100',
          cityName: 'Bom Conselho'
        },
        {
          ibge: '2602209',
          cityName: 'Bom Jardim'
        },
        {
          ibge: '2602308',
          cityName: 'Bonito'
        },
        {
          ibge: '2602407',
          cityName: 'Brejao'
        },
        {
          ibge: '2602506',
          cityName: 'Brejinho'
        },
        {
          ibge: '2602605',
          cityName: 'Brejo da Madre de Deus'
        },
        {
          ibge: '2602704',
          cityName: 'Buenos Aires'
        },
        {
          ibge: '2602803',
          cityName: 'Bui­que'
        },
        {
          ibge: '2602902',
          cityName: 'Cabo de Santo Agostinho'
        },
        {
          ibge: '2603009',
          cityName: 'Cabrobo'
        },
        {
          ibge: '2603108',
          cityName: 'Cachoeirinha'
        },
        {
          ibge: '2603207',
          cityName: 'Caetes'
        },
        {
          ibge: '2603306',
          cityName: 'Calcado'
        },
        {
          ibge: '2603405',
          cityName: 'Calumbi'
        },
        {
          ibge: '2603454',
          cityName: 'Camaragibe'
        },
        {
          ibge: '2603504',
          cityName: 'Camocim de Sao Felix'
        },
        {
          ibge: '2603603',
          cityName: 'Camutanga'
        },
        {
          ibge: '2603702',
          cityName: 'Canhotinho'
        },
        {
          ibge: '2603801',
          cityName: 'Capoeiras'
        },
        {
          ibge: '2603900',
          cityName: 'Carnai­ba'
        },
        {
          ibge: '2603926',
          cityName: 'Carnaubeira da Penha'
        },
        {
          ibge: '2604007',
          cityName: 'Carpina'
        },
        {
          ibge: '2604106',
          cityName: 'Caruaru'
        },
        {
          ibge: '2604155',
          cityName: 'Casinhas'
        },
        {
          ibge: '2604205',
          cityName: 'Catende'
        },
        {
          ibge: '2604304',
          cityName: 'Cedro'
        },
        {
          ibge: '2604403',
          cityName: 'Cha de Alegria'
        },
        {
          ibge: '2604502',
          cityName: 'Cha Grande'
        },
        {
          ibge: '2604601',
          cityName: 'Condado'
        },
        {
          ibge: '2604700',
          cityName: 'Correntes'
        },
        {
          ibge: '2604809',
          cityName: 'Cortiªs'
        },
        {
          ibge: '2604908',
          cityName: 'Cumaru'
        },
        {
          ibge: '2605004',
          cityName: 'Cupira'
        },
        {
          ibge: '2605103',
          cityName: 'Custodia'
        },
        {
          ibge: '2605152',
          cityName: 'Dormentes'
        },
        {
          ibge: '2605202',
          cityName: 'Escada'
        },
        {
          ibge: '2605301',
          cityName: 'Exu'
        },
        {
          ibge: '2605400',
          cityName: 'Feira Nova'
        },
        {
          ibge: '2605459',
          cityName: 'Fernando de Noronha'
        },
        {
          ibge: '2605509',
          cityName: 'Ferreiros'
        },
        {
          ibge: '2605608',
          cityName: 'Flores'
        },
        {
          ibge: '2605707',
          cityName: 'Floresta'
        },
        {
          ibge: '2605806',
          cityName: 'Frei Miguelinho'
        },
        {
          ibge: '2605905',
          cityName: 'Gameleira'
        },
        {
          ibge: '2606002',
          cityName: 'Garanhuns'
        },
        {
          ibge: '2606101',
          cityName: 'Gloria do Goita'
        },
        {
          ibge: '2606200',
          cityName: 'Goiana'
        },
        {
          ibge: '2606309',
          cityName: 'Granito'
        },
        {
          ibge: '2606408',
          cityName: 'Gravata'
        },
        {
          ibge: '2606507',
          cityName: 'Iati'
        },
        {
          ibge: '2606606',
          cityName: 'Ibimirim'
        },
        {
          ibge: '2606705',
          cityName: 'Ibirajuba'
        },
        {
          ibge: '2606804',
          cityName: 'Igarassu'
        },
        {
          ibge: '2606903',
          cityName: 'Iguaracy'
        },
        {
          ibge: '2607604',
          cityName: 'Ilha de Itamaraca'
        },
        {
          ibge: '2607000',
          cityName: 'Inaja'
        },
        {
          ibge: '2607109',
          cityName: 'Ingazeira'
        },
        {
          ibge: '2607208',
          cityName: 'Ipojuca'
        },
        {
          ibge: '2607307',
          cityName: 'Ipubi'
        },
        {
          ibge: '2607406',
          cityName: 'Itacuruba'
        },
        {
          ibge: '2607505',
          cityName: 'Itai­ba'
        },
        {
          ibge: '2607653',
          cityName: 'Itambe'
        },
        {
          ibge: '2607703',
          cityName: 'Itapetim'
        },
        {
          ibge: '2607752',
          cityName: 'Itapissuma'
        },
        {
          ibge: '2607802',
          cityName: 'Itaquitinga'
        },
        {
          ibge: '2607901',
          cityName: 'Jaboatao dos Guararapes'
        },
        {
          ibge: '2607950',
          cityName: 'Jaqueira'
        },
        {
          ibge: '2608008',
          cityName: 'Jataiºba'
        },
        {
          ibge: '2608057',
          cityName: 'Jatoba'
        },
        {
          ibge: '2608107',
          cityName: 'Joao Alfredo'
        },
        {
          ibge: '2608206',
          cityName: 'Joaquim Nabuco'
        },
        {
          ibge: '2608255',
          cityName: 'Jucati'
        },
        {
          ibge: '2608305',
          cityName: 'Jupi'
        },
        {
          ibge: '2608404',
          cityName: 'Jurema'
        },
        {
          ibge: '2608503',
          cityName: 'Lagoa de Itaenga'
        },
        {
          ibge: '2608453',
          cityName: 'Lagoa do Carro'
        },
        {
          ibge: '2608602',
          cityName: 'Lagoa do Ouro'
        },
        {
          ibge: '2608701',
          cityName: 'Lagoa dos Gatos'
        },
        {
          ibge: '2608750',
          cityName: 'Lagoa Grande'
        },
        {
          ibge: '2608800',
          cityName: 'Lajedo'
        },
        {
          ibge: '2608909',
          cityName: 'Limoeiro'
        },
        {
          ibge: '2609006',
          cityName: 'Macaparana'
        },
        {
          ibge: '2609105',
          cityName: 'Machados'
        },
        {
          ibge: '2609154',
          cityName: 'Manari'
        },
        {
          ibge: '2609204',
          cityName: 'Maraial'
        },
        {
          ibge: '2609303',
          cityName: 'Mirandiba'
        },
        {
          ibge: '2614303',
          cityName: 'Moreilandia'
        },
        {
          ibge: '2609402',
          cityName: 'Moreno'
        },
        {
          ibge: '2609501',
          cityName: 'Nazare da Mata'
        },
        {
          ibge: '2609600',
          cityName: 'Olinda'
        },
        {
          ibge: '2609709',
          cityName: 'Orobo'
        },
        {
          ibge: '2609808',
          cityName: 'Oroco'
        },
        {
          ibge: '2609907',
          cityName: 'Ouricuri'
        },
        {
          ibge: '2610004',
          cityName: 'Palmares'
        },
        {
          ibge: '2610103',
          cityName: 'Palmeirina'
        },
        {
          ibge: '2610202',
          cityName: 'Panelas'
        },
        {
          ibge: '2610301',
          cityName: 'Paranatama'
        },
        {
          ibge: '2610400',
          cityName: 'Parnamirim'
        },
        {
          ibge: '2610509',
          cityName: 'Passira'
        },
        {
          ibge: '2610608',
          cityName: 'Paudalho'
        },
        {
          ibge: '2610707',
          cityName: 'Paulista'
        },
        {
          ibge: '2610806',
          cityName: 'Pedra'
        },
        {
          ibge: '2610905',
          cityName: 'Pesqueira'
        },
        {
          ibge: '2611002',
          cityName: 'Petrolandia'
        },
        {
          ibge: '2611101',
          cityName: 'Petrolina'
        },
        {
          ibge: '2611200',
          cityName: 'Pocao'
        },
        {
          ibge: '2611309',
          cityName: 'Pombos'
        },
        {
          ibge: '2611408',
          cityName: 'Primavera'
        },
        {
          ibge: '2611507',
          cityName: 'Quipapa'
        },
        {
          ibge: '2611533',
          cityName: 'Quixaba'
        },
        {
          ibge: '2611606',
          cityName: 'Recife'
        },
        {
          ibge: '2611705',
          cityName: 'Riacho das Almas'
        },
        {
          ibge: '2611804',
          cityName: 'Ribeirao'
        },
        {
          ibge: '2611903',
          cityName: 'Rio Formoso'
        },
        {
          ibge: '2612000',
          cityName: 'Saire'
        },
        {
          ibge: '2612109',
          cityName: 'Salgadinho'
        },
        {
          ibge: '2612208',
          cityName: 'Salgueiro'
        },
        {
          ibge: '2612307',
          cityName: 'Saloa'
        },
        {
          ibge: '2612406',
          cityName: 'Sanharo'
        },
        {
          ibge: '2612455',
          cityName: 'Santa Cruz'
        },
        {
          ibge: '2612471',
          cityName: 'Santa Cruz da Baixa Verde'
        },
        {
          ibge: '2612505',
          cityName: 'Santa Cruz do Capibaribe'
        },
        {
          ibge: '2612554',
          cityName: 'Santa Filomena'
        },
        {
          ibge: '2612604',
          cityName: 'Santa Maria da Boa Vista'
        },
        {
          ibge: '2612703',
          cityName: 'Santa Maria do Cambuca'
        },
        {
          ibge: '2612802',
          cityName: 'Santa Terezinha'
        },
        {
          ibge: '2612901',
          cityName: 'Sao Benedito do Sul'
        },
        {
          ibge: '2613008',
          cityName: 'Sao Bento do Una'
        },
        {
          ibge: '2613107',
          cityName: 'Sao Caetano'
        },
        {
          ibge: '2613206',
          cityName: 'Sao Joao'
        },
        {
          ibge: '2613305',
          cityName: 'Sao Joaquim do Monte'
        },
        {
          ibge: '2613404',
          cityName: 'Sao Jose da Coroa Grande'
        },
        {
          ibge: '2613503',
          cityName: 'Sao Jose do Belmonte'
        },
        {
          ibge: '2613602',
          cityName: 'Sao Jose do Egito'
        },
        {
          ibge: '2613701',
          cityName: 'Sao Lourenco da Mata'
        },
        {
          ibge: '2613800',
          cityName: 'Sao Vicente Ferrer'
        },
        {
          ibge: '2613909',
          cityName: 'Serra Talhada'
        },
        {
          ibge: '2614006',
          cityName: 'Serrita'
        },
        {
          ibge: '2614105',
          cityName: 'Sertania'
        },
        {
          ibge: '2614204',
          cityName: 'Sirinhaem'
        },
        {
          ibge: '2614402',
          cityName: 'Solidao'
        },
        {
          ibge: '2614501',
          cityName: 'Surubim'
        },
        {
          ibge: '2614600',
          cityName: 'Tabira'
        },
        {
          ibge: '2614709',
          cityName: 'Tacaimbo'
        },
        {
          ibge: '2614808',
          cityName: 'Tacaratu'
        },
        {
          ibge: '2614857',
          cityName: 'Tamandare'
        },
        {
          ibge: '2615003',
          cityName: 'Taquaritinga do Norte'
        },
        {
          ibge: '2615102',
          cityName: 'Terezinha'
        },
        {
          ibge: '2615201',
          cityName: 'Terra Nova'
        },
        {
          ibge: '2615300',
          cityName: 'Timbaiºba'
        },
        {
          ibge: '2615409',
          cityName: 'Toritama'
        },
        {
          ibge: '2615508',
          cityName: 'Tracunhaem'
        },
        {
          ibge: '2615607',
          cityName: 'Trindade'
        },
        {
          ibge: '2615706',
          cityName: 'Triunfo'
        },
        {
          ibge: '2615805',
          cityName: 'Tupanatinga'
        },
        {
          ibge: '2615904',
          cityName: 'Tuparetama'
        },
        {
          ibge: '2616001',
          cityName: 'Venturosa'
        },
        {
          ibge: '2616100',
          cityName: 'Verdejante'
        },
        {
          ibge: '2616183',
          cityName: 'Vertente do Lerio'
        },
        {
          ibge: '2616209',
          cityName: 'Vertentes'
        },
        {
          ibge: '2616308',
          cityName: 'Viciªncia'
        },
        {
          ibge: '2616407',
          cityName: 'Vitoria de Santo Antao'
        },
        {
          ibge: '2616506',
          cityName: 'Xexeu'
        }
      ]
    },
    {
      abbreviation: 'PI',
      cities: [
        {
          ibge: '2200053',
          cityName: 'Acaua'
        },
        {
          ibge: '2200103',
          cityName: 'Agricolandia'
        },
        {
          ibge: '2200202',
          cityName: 'Agua Branca'
        },
        {
          ibge: '2200251',
          cityName: 'Alagoinha do Piaui­'
        },
        {
          ibge: '2200277',
          cityName: 'Alegrete do Piaui­'
        },
        {
          ibge: '2200301',
          cityName: 'Alto Longa'
        },
        {
          ibge: '2200400',
          cityName: 'Altos'
        },
        {
          ibge: '2200459',
          cityName: 'Alvorada do Gurgueia'
        },
        {
          ibge: '2200509',
          cityName: 'Amarante'
        },
        {
          ibge: '2200608',
          cityName: 'Angical do Piaui­'
        },
        {
          ibge: '2200707',
          cityName: 'Ani­sio de Abreu'
        },
        {
          ibge: '2200806',
          cityName: 'Antonio Almeida'
        },
        {
          ibge: '2200905',
          cityName: 'Aroazes'
        },
        {
          ibge: '2200954',
          cityName: 'Aroeiras do Itaim'
        },
        {
          ibge: '2201002',
          cityName: 'Arraial'
        },
        {
          ibge: '2201051',
          cityName: 'Assuncao do Piaui­'
        },
        {
          ibge: '2201101',
          cityName: 'Avelino Lopes'
        },
        {
          ibge: '2201150',
          cityName: 'Baixa Grande do Ribeiro'
        },
        {
          ibge: '2201176',
          cityName: 'Barra D\'Alcantara'
        },
        {
          ibge: '2201200',
          cityName: 'Barras'
        },
        {
          ibge: '2201309',
          cityName: 'Barreiras do Piaui­'
        },
        {
          ibge: '2201408',
          cityName: 'Barro Duro'
        },
        {
          ibge: '2201507',
          cityName: 'Batalha'
        },
        {
          ibge: '2201556',
          cityName: 'Bela Vista do Piaui­'
        },
        {
          ibge: '2201572',
          cityName: 'Belem do Piaui­'
        },
        {
          ibge: '2201606',
          cityName: 'Beneditinos'
        },
        {
          ibge: '2201705',
          cityName: 'Bertoli­nia'
        },
        {
          ibge: '2201739',
          cityName: 'Betania do Piaui­'
        },
        {
          ibge: '2201770',
          cityName: 'Boa Hora'
        },
        {
          ibge: '2201804',
          cityName: 'Bocaina'
        },
        {
          ibge: '2201903',
          cityName: 'Bom Jesus'
        },
        {
          ibge: '2201919',
          cityName: 'Bom Princi­pio do Piaui­'
        },
        {
          ibge: '2201929',
          cityName: 'Bonfim do Piaui­'
        },
        {
          ibge: '2201945',
          cityName: 'Boqueirao do Piaui­'
        },
        {
          ibge: '2201960',
          cityName: 'Brasileira'
        },
        {
          ibge: '2201988',
          cityName: 'Brejo do Piaui­'
        },
        {
          ibge: '2202000',
          cityName: 'Buriti dos Lopes'
        },
        {
          ibge: '2202026',
          cityName: 'Buriti dos Montes'
        },
        {
          ibge: '2202059',
          cityName: 'Cabeceiras do Piaui­'
        },
        {
          ibge: '2202075',
          cityName: 'Cajazeiras do Piaui­'
        },
        {
          ibge: '2202083',
          cityName: 'Cajueiro da Praia'
        },
        {
          ibge: '2202091',
          cityName: 'Caldeirao Grande do Piaui­'
        },
        {
          ibge: '2202109',
          cityName: 'Campinas do Piaui­'
        },
        {
          ibge: '2202117',
          cityName: 'Campo Alegre do Fidalgo'
        },
        {
          ibge: '2202133',
          cityName: 'Campo Grande do Piaui­'
        },
        {
          ibge: '2202174',
          cityName: 'Campo Largo do Piaui­'
        },
        {
          ibge: '2202208',
          cityName: 'Campo Maior'
        },
        {
          ibge: '2202251',
          cityName: 'Canavieira'
        },
        {
          ibge: '2202307',
          cityName: 'Canto do Buriti'
        },
        {
          ibge: '2202406',
          cityName: 'Capitao de Campos'
        },
        {
          ibge: '2202455',
          cityName: 'Capitao Gervasio Oliveira'
        },
        {
          ibge: '2202505',
          cityName: 'Caracol'
        },
        {
          ibge: '2202539',
          cityName: 'Caraiºbas do Piaui­'
        },
        {
          ibge: '2202554',
          cityName: 'Caridade do Piaui­'
        },
        {
          ibge: '2202604',
          cityName: 'Castelo do Piaui­'
        },
        {
          ibge: '2202653',
          cityName: 'Caxingo'
        },
        {
          ibge: '2202703',
          cityName: 'Cocal'
        },
        {
          ibge: '2202711',
          cityName: 'Cocal de Telha'
        },
        {
          ibge: '2202729',
          cityName: 'Cocal dos Alves'
        },
        {
          ibge: '2202737',
          cityName: 'Coivaras'
        },
        {
          ibge: '2202752',
          cityName: 'Colonia do Gurgueia'
        },
        {
          ibge: '2202778',
          cityName: 'Colonia do Piaui­'
        },
        {
          ibge: '2202802',
          cityName: 'Conceicao do Caninde'
        },
        {
          ibge: '2202851',
          cityName: 'Coronel Jose Dias'
        },
        {
          ibge: '2202901',
          cityName: 'Corrente'
        },
        {
          ibge: '2203008',
          cityName: 'Cristalandia do Piaui­'
        },
        {
          ibge: '2203107',
          cityName: 'Cristino Castro'
        },
        {
          ibge: '2203206',
          cityName: 'Curimata'
        },
        {
          ibge: '2203230',
          cityName: 'Currais'
        },
        {
          ibge: '2203271',
          cityName: 'Curral Novo do Piaui­'
        },
        {
          ibge: '2203255',
          cityName: 'Curralinhos'
        },
        {
          ibge: '2203305',
          cityName: 'Demerval Lobao'
        },
        {
          ibge: '2203354',
          cityName: 'Dirceu Arcoverde'
        },
        {
          ibge: '2203404',
          cityName: 'Dom Expedito Lopes'
        },
        {
          ibge: '2203453',
          cityName: 'Dom Inociªncio'
        },
        {
          ibge: '2203420',
          cityName: 'Domingos Mourao'
        },
        {
          ibge: '2203503',
          cityName: 'Elesbao Veloso'
        },
        {
          ibge: '2203602',
          cityName: 'Eliseu Martins'
        },
        {
          ibge: '2203701',
          cityName: 'Esperantina'
        },
        {
          ibge: '2203750',
          cityName: 'Fartura do Piaui­'
        },
        {
          ibge: '2203800',
          cityName: 'Flores do Piaui­'
        },
        {
          ibge: '2203859',
          cityName: 'Floresta do Piaui­'
        },
        {
          ibge: '2203909',
          cityName: 'Floriano'
        },
        {
          ibge: '2204006',
          cityName: 'Francinopolis'
        },
        {
          ibge: '2204105',
          cityName: 'Francisco Ayres'
        },
        {
          ibge: '2204154',
          cityName: 'Francisco Macedo'
        },
        {
          ibge: '2204204',
          cityName: 'Francisco Santos'
        },
        {
          ibge: '2204303',
          cityName: 'Fronteiras'
        },
        {
          ibge: '2204352',
          cityName: 'Geminiano'
        },
        {
          ibge: '2204402',
          cityName: 'Gilbues'
        },
        {
          ibge: '2204501',
          cityName: 'Guadalupe'
        },
        {
          ibge: '2204550',
          cityName: 'Guaribas'
        },
        {
          ibge: '2204600',
          cityName: 'Hugo Napoleao'
        },
        {
          ibge: '2204659',
          cityName: 'Ilha Grande'
        },
        {
          ibge: '2204709',
          cityName: 'Inhuma'
        },
        {
          ibge: '2204808',
          cityName: 'Ipiranga do Piaui­'
        },
        {
          ibge: '2204907',
          cityName: 'Isai­as Coelho'
        },
        {
          ibge: '2205003',
          cityName: 'Itainopolis'
        },
        {
          ibge: '2205102',
          cityName: 'Itaueira'
        },
        {
          ibge: '2205151',
          cityName: 'Jacobina do Piaui­'
        },
        {
          ibge: '2205201',
          cityName: 'Jaicos'
        },
        {
          ibge: '2205250',
          cityName: 'Jardim do Mulato'
        },
        {
          ibge: '2205276',
          cityName: 'Jatoba do Piaui­'
        },
        {
          ibge: '2205300',
          cityName: 'Jerumenha'
        },
        {
          ibge: '2205359',
          cityName: 'Joao Costa'
        },
        {
          ibge: '2205409',
          cityName: 'Joaquim Pires'
        },
        {
          ibge: '2205458',
          cityName: 'Joca Marques'
        },
        {
          ibge: '2205508',
          cityName: 'Jose de Freitas'
        },
        {
          ibge: '2205516',
          cityName: 'Juazeiro do Piaui­'
        },
        {
          ibge: '2205524',
          cityName: 'Jiºlio Borges'
        },
        {
          ibge: '2205532',
          cityName: 'Jurema'
        },
        {
          ibge: '2205557',
          cityName: 'Lagoa Alegre'
        },
        {
          ibge: '2205573',
          cityName: 'Lagoa de Sao Francisco'
        },
        {
          ibge: '2205565',
          cityName: 'Lagoa do Barro do Piaui­'
        },
        {
          ibge: '2205581',
          cityName: 'Lagoa do Piaui­'
        },
        {
          ibge: '2205599',
          cityName: 'Lagoa do Si­tio'
        },
        {
          ibge: '2205540',
          cityName: 'Lagoinha do Piaui­'
        },
        {
          ibge: '2205607',
          cityName: 'Landri Sales'
        },
        {
          ibge: '2205706',
          cityName: 'Lui­s Correia'
        },
        {
          ibge: '2205805',
          cityName: 'Luzilandia'
        },
        {
          ibge: '2205854',
          cityName: 'Madeiro'
        },
        {
          ibge: '2205904',
          cityName: 'Manoel Emi­dio'
        },
        {
          ibge: '2205953',
          cityName: 'Marcolandia'
        },
        {
          ibge: '2206001',
          cityName: 'Marcos Parente'
        },
        {
          ibge: '2206050',
          cityName: 'Massapiª do Piaui­'
        },
        {
          ibge: '2206100',
          cityName: 'Matias Oli­mpio'
        },
        {
          ibge: '2206209',
          cityName: 'Miguel Alves'
        },
        {
          ibge: '2206308',
          cityName: 'Miguel Leao'
        },
        {
          ibge: '2206357',
          cityName: 'Milton Brandao'
        },
        {
          ibge: '2206407',
          cityName: 'Monsenhor Gil'
        },
        {
          ibge: '2206506',
          cityName: 'Monsenhor Hipolito'
        },
        {
          ibge: '2206605',
          cityName: 'Monte Alegre do Piaui­'
        },
        {
          ibge: '2206654',
          cityName: 'Morro Cabeca no Tempo'
        },
        {
          ibge: '2206670',
          cityName: 'Morro do Chapeu do Piaui­'
        },
        {
          ibge: '2206696',
          cityName: 'Murici dos Portelas'
        },
        {
          ibge: '2206704',
          cityName: 'Nazare do Piaui­'
        },
        {
          ibge: '2206720',
          cityName: 'Nazaria'
        },
        {
          ibge: '2206753',
          cityName: 'Nossa Senhora de Nazare'
        },
        {
          ibge: '2206803',
          cityName: 'Nossa Senhora dos Remedios'
        },
        {
          ibge: '2207959',
          cityName: 'Nova Santa Rita'
        },
        {
          ibge: '2206902',
          cityName: 'Novo Oriente do Piaui­'
        },
        {
          ibge: '2206951',
          cityName: 'Novo Santo Antonio'
        },
        {
          ibge: '2207009',
          cityName: 'Oeiras'
        },
        {
          ibge: '2207108',
          cityName: 'Olho D\'Agua do Piaui­'
        },
        {
          ibge: '2207207',
          cityName: 'Padre Marcos'
        },
        {
          ibge: '2207306',
          cityName: 'Paes Landim'
        },
        {
          ibge: '2207355',
          cityName: 'Pajeiº do Piaui­'
        },
        {
          ibge: '2207405',
          cityName: 'Palmeira do Piaui­'
        },
        {
          ibge: '2207504',
          cityName: 'Palmeirais'
        },
        {
          ibge: '2207553',
          cityName: 'Paqueta'
        },
        {
          ibge: '2207603',
          cityName: 'Parnagua'
        },
        {
          ibge: '2207702',
          cityName: 'Parnai­ba'
        },
        {
          ibge: '2207751',
          cityName: 'Passagem Franca do Piaui­'
        },
        {
          ibge: '2207777',
          cityName: 'Patos do Piaui­'
        },
        {
          ibge: '2207793',
          cityName: 'Pau D\'Arco do Piaui­'
        },
        {
          ibge: '2207801',
          cityName: 'Paulistana'
        },
        {
          ibge: '2207850',
          cityName: 'Pavussu'
        },
        {
          ibge: '2207900',
          cityName: 'Pedro II'
        },
        {
          ibge: '2207934',
          cityName: 'Pedro Laurentino'
        },
        {
          ibge: '2208007',
          cityName: 'Picos'
        },
        {
          ibge: '2208106',
          cityName: 'Pimenteiras'
        },
        {
          ibge: '2208205',
          cityName: 'Pio IX'
        },
        {
          ibge: '2208304',
          cityName: 'Piracuruca'
        },
        {
          ibge: '2208403',
          cityName: 'Piripiri'
        },
        {
          ibge: '2208502',
          cityName: 'Porto'
        },
        {
          ibge: '2208551',
          cityName: 'Porto Alegre do Piaui­'
        },
        {
          ibge: '2208601',
          cityName: 'Prata do Piaui­'
        },
        {
          ibge: '2208650',
          cityName: 'Queimada Nova'
        },
        {
          ibge: '2208700',
          cityName: 'Redencao do Gurgueia'
        },
        {
          ibge: '2208809',
          cityName: 'Regeneracao'
        },
        {
          ibge: '2208858',
          cityName: 'Riacho Frio'
        },
        {
          ibge: '2208874',
          cityName: 'Ribeira do Piaui­'
        },
        {
          ibge: '2208908',
          cityName: 'Ribeiro Goncalves'
        },
        {
          ibge: '2209005',
          cityName: 'Rio Grande do Piaui­'
        },
        {
          ibge: '2209104',
          cityName: 'Santa Cruz do Piaui­'
        },
        {
          ibge: '2209153',
          cityName: 'Santa Cruz dos Milagres'
        },
        {
          ibge: '2209203',
          cityName: 'Santa Filomena'
        },
        {
          ibge: '2209302',
          cityName: 'Santa Luz'
        },
        {
          ibge: '2209377',
          cityName: 'Santa Rosa do Piaui­'
        },
        {
          ibge: '2209351',
          cityName: 'Santana do Piaui­'
        },
        {
          ibge: '2209401',
          cityName: 'Santo Antonio de Lisboa'
        },
        {
          ibge: '2209450',
          cityName: 'Santo Antonio dos Milagres'
        },
        {
          ibge: '2209500',
          cityName: 'Santo Inacio do Piaui­'
        },
        {
          ibge: '2209559',
          cityName: 'Sao Braz do Piaui­'
        },
        {
          ibge: '2209609',
          cityName: 'Sao Felix do Piaui­'
        },
        {
          ibge: '2209658',
          cityName: 'Sao Francisco de Assis do Piaui­'
        },
        {
          ibge: '2209708',
          cityName: 'Sao Francisco do Piaui­'
        },
        {
          ibge: '2209757',
          cityName: 'Sao Goncalo do Gurgueia'
        },
        {
          ibge: '2209807',
          cityName: 'Sao Goncalo do Piaui­'
        },
        {
          ibge: '2209856',
          cityName: 'Sao Joao da Canabrava'
        },
        {
          ibge: '2209872',
          cityName: 'Sao Joao da Fronteira'
        },
        {
          ibge: '2209906',
          cityName: 'Sao Joao da Serra'
        },
        {
          ibge: '2209955',
          cityName: 'Sao Joao da Varjota'
        },
        {
          ibge: '2209971',
          cityName: 'Sao Joao do Arraial'
        },
        {
          ibge: '2210003',
          cityName: 'Sao Joao do Piaui­'
        },
        {
          ibge: '2210052',
          cityName: 'Sao Jose do Divino'
        },
        {
          ibge: '2210102',
          cityName: 'Sao Jose do Peixe'
        },
        {
          ibge: '2210201',
          cityName: 'Sao Jose do Piaui­'
        },
        {
          ibge: '2210300',
          cityName: 'Sao Juliao'
        },
        {
          ibge: '2210359',
          cityName: 'Sao Lourenco do Piaui­'
        },
        {
          ibge: '2210375',
          cityName: 'Sao Luis do Piaui­'
        },
        {
          ibge: '2210383',
          cityName: 'Sao Miguel da Baixa Grande'
        },
        {
          ibge: '2210391',
          cityName: 'Sao Miguel do Fidalgo'
        },
        {
          ibge: '2210409',
          cityName: 'Sao Miguel do Tapuio'
        },
        {
          ibge: '2210508',
          cityName: 'Sao Pedro do Piaui­'
        },
        {
          ibge: '2210607',
          cityName: 'Sao Raimundo Nonato'
        },
        {
          ibge: '2210623',
          cityName: 'Sebastiao Barros'
        },
        {
          ibge: '2210631',
          cityName: 'Sebastiao Leal'
        },
        {
          ibge: '2210656',
          cityName: 'Sigefredo Pacheco'
        },
        {
          ibge: '2210706',
          cityName: 'Simiµes'
        },
        {
          ibge: '2210805',
          cityName: 'Simpli­cio Mendes'
        },
        {
          ibge: '2210904',
          cityName: 'Socorro do Piaui­'
        },
        {
          ibge: '2210938',
          cityName: 'Sussuapara'
        },
        {
          ibge: '2210953',
          cityName: 'Tamboril do Piaui­'
        },
        {
          ibge: '2210979',
          cityName: 'Tanque do Piaui­'
        },
        {
          ibge: '2211001',
          cityName: 'Teresina'
        },
        {
          ibge: '2211100',
          cityName: 'Uniao'
        },
        {
          ibge: '2211209',
          cityName: 'Urucui­'
        },
        {
          ibge: '2211308',
          cityName: 'Valenca do Piaui­'
        },
        {
          ibge: '2211357',
          cityName: 'Varzea Branca'
        },
        {
          ibge: '2211407',
          cityName: 'Varzea Grande'
        },
        {
          ibge: '2211506',
          cityName: 'Vera Mendes'
        },
        {
          ibge: '2211605',
          cityName: 'Vila Nova do Piaui­'
        },
        {
          ibge: '2211704',
          cityName: 'Wall Ferraz'
        }
      ]
    },
    {
      abbreviation: 'PR',
      cities: [
        {
          ibge: '4100103',
          cityName: 'Abatia'
        },
        {
          ibge: '4100202',
          cityName: 'Adrianopolis'
        },
        {
          ibge: '4100301',
          cityName: 'Agudos do Sul'
        },
        {
          ibge: '4100400',
          cityName: 'Almirante Tamandare'
        },
        {
          ibge: '4100459',
          cityName: 'Altamira do Parana'
        },
        {
          ibge: '4128625',
          cityName: 'Alto Parai­so'
        },
        {
          ibge: '4100608',
          cityName: 'Alto Parana'
        },
        {
          ibge: '4100707',
          cityName: 'Alto Piquiri'
        },
        {
          ibge: '4100509',
          cityName: 'Altonia'
        },
        {
          ibge: '4100806',
          cityName: 'Alvorada do Sul'
        },
        {
          ibge: '4100905',
          cityName: 'Amapora'
        },
        {
          ibge: '4101002',
          cityName: 'Ampere'
        },
        {
          ibge: '4101051',
          cityName: 'Anahy'
        },
        {
          ibge: '4101101',
          cityName: 'Andira'
        },
        {
          ibge: '4101150',
          cityName: 'i‚ngulo'
        },
        {
          ibge: '4101200',
          cityName: 'Antonina'
        },
        {
          ibge: '4101309',
          cityName: 'Antonio Olinto'
        },
        {
          ibge: '4101408',
          cityName: 'Apucarana'
        },
        {
          ibge: '4101507',
          cityName: 'Arapongas'
        },
        {
          ibge: '4101606',
          cityName: 'Arapoti'
        },
        {
          ibge: '4101655',
          cityName: 'Arapua'
        },
        {
          ibge: '4101705',
          cityName: 'Araruna'
        },
        {
          ibge: '4101804',
          cityName: 'Araucaria'
        },
        {
          ibge: '4101853',
          cityName: 'Ariranha do Ivai­'
        },
        {
          ibge: '4101903',
          cityName: 'Assai­'
        },
        {
          ibge: '4102000',
          cityName: 'Assis Chateaubriand'
        },
        {
          ibge: '4102109',
          cityName: 'Astorga'
        },
        {
          ibge: '4102208',
          cityName: 'Atalaia'
        },
        {
          ibge: '4102307',
          cityName: 'Balsa Nova'
        },
        {
          ibge: '4102406',
          cityName: 'Bandeirantes'
        },
        {
          ibge: '4102505',
          cityName: 'Barbosa Ferraz'
        },
        {
          ibge: '4102703',
          cityName: 'Barra do Jacare'
        },
        {
          ibge: '4102604',
          cityName: 'Barracao'
        },
        {
          ibge: '4102752',
          cityName: 'Bela Vista da Caroba'
        },
        {
          ibge: '4102802',
          cityName: 'Bela Vista do Parai­so'
        },
        {
          ibge: '4102901',
          cityName: 'Bituruna'
        },
        {
          ibge: '4103008',
          cityName: 'Boa Esperanca'
        },
        {
          ibge: '4103024',
          cityName: 'Boa Esperanca do Iguacu'
        },
        {
          ibge: '4103040',
          cityName: 'Boa Ventura de Sao Roque'
        },
        {
          ibge: '4103057',
          cityName: 'Boa Vista da Aparecida'
        },
        {
          ibge: '4103107',
          cityName: 'Bocaiiºva do Sul'
        },
        {
          ibge: '4103156',
          cityName: 'Bom Jesus do Sul'
        },
        {
          ibge: '4103206',
          cityName: 'Bom Sucesso'
        },
        {
          ibge: '4103222',
          cityName: 'Bom Sucesso do Sul'
        },
        {
          ibge: '4103305',
          cityName: 'Borrazopolis'
        },
        {
          ibge: '4103354',
          cityName: 'Braganey'
        },
        {
          ibge: '4103370',
          cityName: 'Brasilandia do Sul'
        },
        {
          ibge: '4103404',
          cityName: 'Cafeara'
        },
        {
          ibge: '4103453',
          cityName: 'Cafelandia'
        },
        {
          ibge: '4103479',
          cityName: 'Cafezal do Sul'
        },
        {
          ibge: '4103503',
          cityName: 'California'
        },
        {
          ibge: '4103602',
          cityName: 'Cambara'
        },
        {
          ibge: '4103701',
          cityName: 'Cambe'
        },
        {
          ibge: '4103800',
          cityName: 'Cambira'
        },
        {
          ibge: '4103909',
          cityName: 'Campina da Lagoa'
        },
        {
          ibge: '4103958',
          cityName: 'Campina do Simao'
        },
        {
          ibge: '4104006',
          cityName: 'Campina Grande do Sul'
        },
        {
          ibge: '4104055',
          cityName: 'Campo Bonito'
        },
        {
          ibge: '4104105',
          cityName: 'Campo do Tenente'
        },
        {
          ibge: '4104204',
          cityName: 'Campo Largo'
        },
        {
          ibge: '4104253',
          cityName: 'Campo Magro'
        },
        {
          ibge: '4104303',
          cityName: 'Campo Mourao'
        },
        {
          ibge: '4104402',
          cityName: 'Candido de Abreu'
        },
        {
          ibge: '4104428',
          cityName: 'Candoi'
        },
        {
          ibge: '4104451',
          cityName: 'Cantagalo'
        },
        {
          ibge: '4104501',
          cityName: 'Capanema'
        },
        {
          ibge: '4104600',
          cityName: 'Capitao Leonidas Marques'
        },
        {
          ibge: '4104659',
          cityName: 'Carambei­'
        },
        {
          ibge: '4104709',
          cityName: 'Carlopolis'
        },
        {
          ibge: '4104808',
          cityName: 'Cascavel'
        },
        {
          ibge: '4104907',
          cityName: 'Castro'
        },
        {
          ibge: '4105003',
          cityName: 'Catanduvas'
        },
        {
          ibge: '4105102',
          cityName: 'Centenario do Sul'
        },
        {
          ibge: '4105201',
          cityName: 'Cerro Azul'
        },
        {
          ibge: '4105300',
          cityName: 'Ceu Azul'
        },
        {
          ibge: '4105409',
          cityName: 'Chopinzinho'
        },
        {
          ibge: '4105508',
          cityName: 'Cianorte'
        },
        {
          ibge: '4105607',
          cityName: 'Cidade Gaiºcha'
        },
        {
          ibge: '4105706',
          cityName: 'Clevelandia'
        },
        {
          ibge: '4105805',
          cityName: 'Colombo'
        },
        {
          ibge: '4105904',
          cityName: 'Colorado'
        },
        {
          ibge: '4106001',
          cityName: 'Congonhinhas'
        },
        {
          ibge: '4106100',
          cityName: 'Conselheiro Mairinck'
        },
        {
          ibge: '4106209',
          cityName: 'Contenda'
        },
        {
          ibge: '4106308',
          cityName: 'Corbelia'
        },
        {
          ibge: '4106407',
          cityName: 'Cornelio Procopio'
        },
        {
          ibge: '4106456',
          cityName: 'Coronel Domingos Soares'
        },
        {
          ibge: '4106506',
          cityName: 'Coronel Vivida'
        },
        {
          ibge: '4106555',
          cityName: 'Corumbatai­ do Sul'
        },
        {
          ibge: '4106803',
          cityName: 'Cruz Machado'
        },
        {
          ibge: '4106571',
          cityName: 'Cruzeiro do Iguacu'
        },
        {
          ibge: '4106605',
          cityName: 'Cruzeiro do Oeste'
        },
        {
          ibge: '4106704',
          cityName: 'Cruzeiro do Sul'
        },
        {
          ibge: '4106852',
          cityName: 'Cruzmaltina'
        },
        {
          ibge: '4106902',
          cityName: 'Curitiba'
        },
        {
          ibge: '4107009',
          cityName: 'Curiiºva'
        },
        {
          ibge: '4107157',
          cityName: 'Diamante D\'Oeste'
        },
        {
          ibge: '4107108',
          cityName: 'Diamante do Norte'
        },
        {
          ibge: '4107124',
          cityName: 'Diamante do Sul'
        },
        {
          ibge: '4107207',
          cityName: 'Dois Vizinhos'
        },
        {
          ibge: '4107256',
          cityName: 'Douradina'
        },
        {
          ibge: '4107306',
          cityName: 'Doutor Camargo'
        },
        {
          ibge: '4128633',
          cityName: 'Doutor Ulysses'
        },
        {
          ibge: '4107405',
          cityName: 'Eneas Marques'
        },
        {
          ibge: '4107504',
          cityName: 'Engenheiro Beltrao'
        },
        {
          ibge: '4107538',
          cityName: 'Entre Rios do Oeste'
        },
        {
          ibge: '4107520',
          cityName: 'Esperanca Nova'
        },
        {
          ibge: '4107546',
          cityName: 'Espigao Alto do Iguacu'
        },
        {
          ibge: '4107553',
          cityName: 'Farol'
        },
        {
          ibge: '4107603',
          cityName: 'Faxinal'
        },
        {
          ibge: '4107652',
          cityName: 'Fazenda Rio Grande'
        },
        {
          ibge: '4107702',
          cityName: 'Fiªnix'
        },
        {
          ibge: '4107736',
          cityName: 'Fernandes Pinheiro'
        },
        {
          ibge: '4107751',
          cityName: 'Figueira'
        },
        {
          ibge: '4107850',
          cityName: 'Flor da Serra do Sul'
        },
        {
          ibge: '4107801',
          cityName: 'Florai­'
        },
        {
          ibge: '4107900',
          cityName: 'Floresta'
        },
        {
          ibge: '4108007',
          cityName: 'Florestopolis'
        },
        {
          ibge: '4108106',
          cityName: 'Florida'
        },
        {
          ibge: '4108205',
          cityName: 'Formosa do Oeste'
        },
        {
          ibge: '4108304',
          cityName: 'Foz do Iguacu'
        },
        {
          ibge: '4108452',
          cityName: 'Foz do Jordao'
        },
        {
          ibge: '4108320',
          cityName: 'Francisco Alves'
        },
        {
          ibge: '4108403',
          cityName: 'Francisco Beltrao'
        },
        {
          ibge: '4108502',
          cityName: 'General Carneiro'
        },
        {
          ibge: '4108551',
          cityName: 'Godoy Moreira'
        },
        {
          ibge: '4108601',
          cityName: 'Goioeriª'
        },
        {
          ibge: '4108650',
          cityName: 'Goioxim'
        },
        {
          ibge: '4108700',
          cityName: 'Grandes Rios'
        },
        {
          ibge: '4108809',
          cityName: 'Guai­ra'
        },
        {
          ibge: '4108908',
          cityName: 'Guairaca'
        },
        {
          ibge: '4108957',
          cityName: 'Guamiranga'
        },
        {
          ibge: '4109005',
          cityName: 'Guapirama'
        },
        {
          ibge: '4109104',
          cityName: 'Guaporema'
        },
        {
          ibge: '4109203',
          cityName: 'Guaraci'
        },
        {
          ibge: '4109302',
          cityName: 'Guaraniacu'
        },
        {
          ibge: '4109401',
          cityName: 'Guarapuava'
        },
        {
          ibge: '4109500',
          cityName: 'Guaraquecaba'
        },
        {
          ibge: '4109609',
          cityName: 'Guaratuba'
        },
        {
          ibge: '4109658',
          cityName: 'Honorio Serpa'
        },
        {
          ibge: '4109708',
          cityName: 'Ibaiti'
        },
        {
          ibge: '4109757',
          cityName: 'Ibema'
        },
        {
          ibge: '4109807',
          cityName: 'Ibipora'
        },
        {
          ibge: '4109906',
          cityName: 'Icarai­ma'
        },
        {
          ibge: '4110003',
          cityName: 'Iguaracu'
        },
        {
          ibge: '4110052',
          cityName: 'Iguatu'
        },
        {
          ibge: '4110078',
          cityName: 'Imbaiº'
        },
        {
          ibge: '4110102',
          cityName: 'Imbituva'
        },
        {
          ibge: '4110201',
          cityName: 'Inacio Martins'
        },
        {
          ibge: '4110300',
          cityName: 'Inaja'
        },
        {
          ibge: '4110409',
          cityName: 'Indianopolis'
        },
        {
          ibge: '4110508',
          cityName: 'Ipiranga'
        },
        {
          ibge: '4110607',
          cityName: 'Ipora'
        },
        {
          ibge: '4110656',
          cityName: 'Iracema do Oeste'
        },
        {
          ibge: '4110706',
          cityName: 'Irati'
        },
        {
          ibge: '4110805',
          cityName: 'Iretama'
        },
        {
          ibge: '4110904',
          cityName: 'Itaguaje'
        },
        {
          ibge: '4110953',
          cityName: 'Itaipulandia'
        },
        {
          ibge: '4111001',
          cityName: 'Itambaraca'
        },
        {
          ibge: '4111100',
          cityName: 'Itambe'
        },
        {
          ibge: '4111209',
          cityName: 'Itapejara d\'Oeste'
        },
        {
          ibge: '4111258',
          cityName: 'Itaperucu'
        },
        {
          ibge: '4111308',
          cityName: 'Itaiºna do Sul'
        },
        {
          ibge: '4111407',
          cityName: 'Ivai­'
        },
        {
          ibge: '4111506',
          cityName: 'Ivaipora'
        },
        {
          ibge: '4111555',
          cityName: 'Ivate'
        },
        {
          ibge: '4111605',
          cityName: 'Ivatuba'
        },
        {
          ibge: '4111704',
          cityName: 'Jaboti'
        },
        {
          ibge: '4111803',
          cityName: 'Jacarezinho'
        },
        {
          ibge: '4111902',
          cityName: 'Jaguapita'
        },
        {
          ibge: '4112009',
          cityName: 'Jaguariai­va'
        },
        {
          ibge: '4112108',
          cityName: 'Jandaia do Sul'
        },
        {
          ibge: '4112207',
          cityName: 'Janiopolis'
        },
        {
          ibge: '4112306',
          cityName: 'Japira'
        },
        {
          ibge: '4112405',
          cityName: 'Japura'
        },
        {
          ibge: '4112504',
          cityName: 'Jardim Alegre'
        },
        {
          ibge: '4112603',
          cityName: 'Jardim Olinda'
        },
        {
          ibge: '4112702',
          cityName: 'Jataizinho'
        },
        {
          ibge: '4112751',
          cityName: 'Jesui­tas'
        },
        {
          ibge: '4112801',
          cityName: 'Joaquim Tavora'
        },
        {
          ibge: '4112900',
          cityName: 'Jundiai­ do Sul'
        },
        {
          ibge: '4112959',
          cityName: 'Juranda'
        },
        {
          ibge: '4113007',
          cityName: 'Jussara'
        },
        {
          ibge: '4113106',
          cityName: 'Kalore'
        },
        {
          ibge: '4113205',
          cityName: 'Lapa'
        },
        {
          ibge: '4113254',
          cityName: 'Laranjal'
        },
        {
          ibge: '4113304',
          cityName: 'Laranjeiras do Sul'
        },
        {
          ibge: '4113403',
          cityName: 'Leopolis'
        },
        {
          ibge: '4113429',
          cityName: 'Lidianopolis'
        },
        {
          ibge: '4113452',
          cityName: 'Lindoeste'
        },
        {
          ibge: '4113502',
          cityName: 'Loanda'
        },
        {
          ibge: '4113601',
          cityName: 'Lobato'
        },
        {
          ibge: '4113700',
          cityName: 'Londrina'
        },
        {
          ibge: '4113734',
          cityName: 'Luiziana'
        },
        {
          ibge: '4113759',
          cityName: 'Lunardelli'
        },
        {
          ibge: '4113809',
          cityName: 'Lupionopolis'
        },
        {
          ibge: '4113908',
          cityName: 'Mallet'
        },
        {
          ibge: '4114005',
          cityName: 'Mamboriª'
        },
        {
          ibge: '4114104',
          cityName: 'Mandaguacu'
        },
        {
          ibge: '4114203',
          cityName: 'Mandaguari'
        },
        {
          ibge: '4114302',
          cityName: 'Mandirituba'
        },
        {
          ibge: '4114351',
          cityName: 'Manfrinopolis'
        },
        {
          ibge: '4114401',
          cityName: 'Mangueirinha'
        },
        {
          ibge: '4114500',
          cityName: 'Manoel Ribas'
        },
        {
          ibge: '4114609',
          cityName: 'Marechal Candido Rondon'
        },
        {
          ibge: '4114708',
          cityName: 'Maria Helena'
        },
        {
          ibge: '4114807',
          cityName: 'Marialva'
        },
        {
          ibge: '4114906',
          cityName: 'Marilandia do Sul'
        },
        {
          ibge: '4115002',
          cityName: 'Marilena'
        },
        {
          ibge: '4115101',
          cityName: 'Mariluz'
        },
        {
          ibge: '4115200',
          cityName: 'Maringa'
        },
        {
          ibge: '4115309',
          cityName: 'Mariopolis'
        },
        {
          ibge: '4115358',
          cityName: 'Maripa'
        },
        {
          ibge: '4115408',
          cityName: 'Marmeleiro'
        },
        {
          ibge: '4115457',
          cityName: 'Marquinho'
        },
        {
          ibge: '4115507',
          cityName: 'Marumbi'
        },
        {
          ibge: '4115606',
          cityName: 'Matelandia'
        },
        {
          ibge: '4115705',
          cityName: 'Matinhos'
        },
        {
          ibge: '4115739',
          cityName: 'Mato Rico'
        },
        {
          ibge: '4115754',
          cityName: 'Maua da Serra'
        },
        {
          ibge: '4115804',
          cityName: 'Medianeira'
        },
        {
          ibge: '4115853',
          cityName: 'Mercedes'
        },
        {
          ibge: '4115903',
          cityName: 'Mirador'
        },
        {
          ibge: '4116000',
          cityName: 'Miraselva'
        },
        {
          ibge: '4116059',
          cityName: 'Missal'
        },
        {
          ibge: '4116109',
          cityName: 'Moreira Sales'
        },
        {
          ibge: '4116208',
          cityName: 'Morretes'
        },
        {
          ibge: '4116307',
          cityName: 'Munhoz de Melo'
        },
        {
          ibge: '4116406',
          cityName: 'Nossa Senhora das Gracas'
        },
        {
          ibge: '4116505',
          cityName: 'Nova Alianca do Ivai­'
        },
        {
          ibge: '4116604',
          cityName: 'Nova America da Colina'
        },
        {
          ibge: '4116703',
          cityName: 'Nova Aurora'
        },
        {
          ibge: '4116802',
          cityName: 'Nova Cantu'
        },
        {
          ibge: '4116901',
          cityName: 'Nova Esperanca'
        },
        {
          ibge: '4116950',
          cityName: 'Nova Esperanca do Sudoeste'
        },
        {
          ibge: '4117008',
          cityName: 'Nova Fatima'
        },
        {
          ibge: '4117057',
          cityName: 'Nova Laranjeiras'
        },
        {
          ibge: '4117107',
          cityName: 'Nova Londrina'
        },
        {
          ibge: '4117206',
          cityName: 'Nova Oli­mpia'
        },
        {
          ibge: '4117255',
          cityName: 'Nova Prata do Iguacu'
        },
        {
          ibge: '4117214',
          cityName: 'Nova Santa Barbara'
        },
        {
          ibge: '4117222',
          cityName: 'Nova Santa Rosa'
        },
        {
          ibge: '4117271',
          cityName: 'Nova Tebas'
        },
        {
          ibge: '4117297',
          cityName: 'Novo Itacolomi'
        },
        {
          ibge: '4117305',
          cityName: 'Ortigueira'
        },
        {
          ibge: '4117404',
          cityName: 'Ourizona'
        },
        {
          ibge: '4117453',
          cityName: 'Ouro Verde do Oeste'
        },
        {
          ibge: '4117503',
          cityName: 'Paicandu'
        },
        {
          ibge: '4117602',
          cityName: 'Palmas'
        },
        {
          ibge: '4117701',
          cityName: 'Palmeira'
        },
        {
          ibge: '4117800',
          cityName: 'Palmital'
        },
        {
          ibge: '4117909',
          cityName: 'Palotina'
        },
        {
          ibge: '4118006',
          cityName: 'Parai­so do Norte'
        },
        {
          ibge: '4118105',
          cityName: 'Paranacity'
        },
        {
          ibge: '4118204',
          cityName: 'Paranagua'
        },
        {
          ibge: '4118303',
          cityName: 'Paranapoema'
        },
        {
          ibge: '4118402',
          cityName: 'Paranavai­'
        },
        {
          ibge: '4118451',
          cityName: 'Pato Bragado'
        },
        {
          ibge: '4118501',
          cityName: 'Pato Branco'
        },
        {
          ibge: '4118600',
          cityName: 'Paula Freitas'
        },
        {
          ibge: '4118709',
          cityName: 'Paulo Frontin'
        },
        {
          ibge: '4118808',
          cityName: 'Peabiru'
        },
        {
          ibge: '4118857',
          cityName: 'Perobal'
        },
        {
          ibge: '4118907',
          cityName: 'Perola'
        },
        {
          ibge: '4119004',
          cityName: 'Perola d\'Oeste'
        },
        {
          ibge: '4119103',
          cityName: 'Piiªn'
        },
        {
          ibge: '4119152',
          cityName: 'Pinhais'
        },
        {
          ibge: '4119251',
          cityName: 'Pinhal de Sao Bento'
        },
        {
          ibge: '4119202',
          cityName: 'Pinhalao'
        },
        {
          ibge: '4119301',
          cityName: 'Pinhao'
        },
        {
          ibge: '4119400',
          cityName: 'Pirai­ do Sul'
        },
        {
          ibge: '4119509',
          cityName: 'Piraquara'
        },
        {
          ibge: '4119608',
          cityName: 'Pitanga'
        },
        {
          ibge: '4119657',
          cityName: 'Pitangueiras'
        },
        {
          ibge: '4119707',
          cityName: 'Planaltina do Parana'
        },
        {
          ibge: '4119806',
          cityName: 'Planalto'
        },
        {
          ibge: '4119905',
          cityName: 'Ponta Grossa'
        },
        {
          ibge: '4119954',
          cityName: 'Pontal do Parana'
        },
        {
          ibge: '4120002',
          cityName: 'Porecatu'
        },
        {
          ibge: '4120101',
          cityName: 'Porto Amazonas'
        },
        {
          ibge: '4120150',
          cityName: 'Porto Barreiro'
        },
        {
          ibge: '4120200',
          cityName: 'Porto Rico'
        },
        {
          ibge: '4120309',
          cityName: 'Porto Vitoria'
        },
        {
          ibge: '4120333',
          cityName: 'Prado Ferreira'
        },
        {
          ibge: '4120358',
          cityName: 'Pranchita'
        },
        {
          ibge: '4120408',
          cityName: 'Presidente Castelo Branco'
        },
        {
          ibge: '4120507',
          cityName: 'Primeiro de Maio'
        },
        {
          ibge: '4120606',
          cityName: 'Prudentopolis'
        },
        {
          ibge: '4120655',
          cityName: 'Quarto Centenario'
        },
        {
          ibge: '4120705',
          cityName: 'Quatigua'
        },
        {
          ibge: '4120804',
          cityName: 'Quatro Barras'
        },
        {
          ibge: '4120853',
          cityName: 'Quatro Pontes'
        },
        {
          ibge: '4120903',
          cityName: 'Quedas do Iguacu'
        },
        {
          ibge: '4121000',
          cityName: 'Queriªncia do Norte'
        },
        {
          ibge: '4121109',
          cityName: 'Quinta do Sol'
        },
        {
          ibge: '4121208',
          cityName: 'Quitandinha'
        },
        {
          ibge: '4121257',
          cityName: 'Ramilandia'
        },
        {
          ibge: '4121307',
          cityName: 'Rancho Alegre'
        },
        {
          ibge: '4121356',
          cityName: 'Rancho Alegre D\'Oeste'
        },
        {
          ibge: '4121406',
          cityName: 'Realeza'
        },
        {
          ibge: '4121505',
          cityName: 'Reboucas'
        },
        {
          ibge: '4121604',
          cityName: 'Renascenca'
        },
        {
          ibge: '4121703',
          cityName: 'Reserva'
        },
        {
          ibge: '4121752',
          cityName: 'Reserva do Iguacu'
        },
        {
          ibge: '4121802',
          cityName: 'Ribeirao Claro'
        },
        {
          ibge: '4121901',
          cityName: 'Ribeirao do Pinhal'
        },
        {
          ibge: '4122008',
          cityName: 'Rio Azul'
        },
        {
          ibge: '4122107',
          cityName: 'Rio Bom'
        },
        {
          ibge: '4122156',
          cityName: 'Rio Bonito do Iguacu'
        },
        {
          ibge: '4122172',
          cityName: 'Rio Branco do Ivai­'
        },
        {
          ibge: '4122206',
          cityName: 'Rio Branco do Sul'
        },
        {
          ibge: '4122305',
          cityName: 'Rio Negro'
        },
        {
          ibge: '4122404',
          cityName: 'Rolandia'
        },
        {
          ibge: '4122503',
          cityName: 'Roncador'
        },
        {
          ibge: '4122602',
          cityName: 'Rondon'
        },
        {
          ibge: '4122651',
          cityName: 'Rosario do Ivai­'
        },
        {
          ibge: '4122701',
          cityName: 'Sabaudia'
        },
        {
          ibge: '4122800',
          cityName: 'Salgado Filho'
        },
        {
          ibge: '4122909',
          cityName: 'Salto do Itarare'
        },
        {
          ibge: '4123006',
          cityName: 'Salto do Lontra'
        },
        {
          ibge: '4123105',
          cityName: 'Santa Amelia'
        },
        {
          ibge: '4123204',
          cityName: 'Santa Ceci­lia do Pavao'
        },
        {
          ibge: '4123303',
          cityName: 'Santa Cruz de Monte Castelo'
        },
        {
          ibge: '4123402',
          cityName: 'Santa Fe'
        },
        {
          ibge: '4123501',
          cityName: 'Santa Helena'
        },
        {
          ibge: '4123600',
          cityName: 'Santa Iniªs'
        },
        {
          ibge: '4123709',
          cityName: 'Santa Isabel do Ivai­'
        },
        {
          ibge: '4123808',
          cityName: 'Santa Izabel do Oeste'
        },
        {
          ibge: '4123824',
          cityName: 'Santa Liºcia'
        },
        {
          ibge: '4123857',
          cityName: 'Santa Maria do Oeste'
        },
        {
          ibge: '4123907',
          cityName: 'Santa Mariana'
        },
        {
          ibge: '4123956',
          cityName: 'Santa Monica'
        },
        {
          ibge: '4124020',
          cityName: 'Santa Tereza do Oeste'
        },
        {
          ibge: '4124053',
          cityName: 'Santa Terezinha de Itaipu'
        },
        {
          ibge: '4124004',
          cityName: 'Santana do Itarare'
        },
        {
          ibge: '4124103',
          cityName: 'Santo Antonio da Platina'
        },
        {
          ibge: '4124202',
          cityName: 'Santo Antonio do Caiua'
        },
        {
          ibge: '4124301',
          cityName: 'Santo Antonio do Parai­so'
        },
        {
          ibge: '4124400',
          cityName: 'Santo Antonio do Sudoeste'
        },
        {
          ibge: '4124509',
          cityName: 'Santo Inacio'
        },
        {
          ibge: '4124608',
          cityName: 'Sao Carlos do Ivai­'
        },
        {
          ibge: '4124707',
          cityName: 'Sao Jeronimo da Serra'
        },
        {
          ibge: '4124806',
          cityName: 'Sao Joao'
        },
        {
          ibge: '4124905',
          cityName: 'Sao Joao do Caiua'
        },
        {
          ibge: '4125001',
          cityName: 'Sao Joao do Ivai­'
        },
        {
          ibge: '4125100',
          cityName: 'Sao Joao do Triunfo'
        },
        {
          ibge: '4125209',
          cityName: 'Sao Jorge d\'Oeste'
        },
        {
          ibge: '4125308',
          cityName: 'Sao Jorge do Ivai­'
        },
        {
          ibge: '4125357',
          cityName: 'Sao Jorge do Patroci­nio'
        },
        {
          ibge: '4125407',
          cityName: 'Sao Jose da Boa Vista'
        },
        {
          ibge: '4125456',
          cityName: 'Sao Jose das Palmeiras'
        },
        {
          ibge: '4125506',
          cityName: 'Sao Jose dos Pinhais'
        },
        {
          ibge: '4125555',
          cityName: 'Sao Manoel do Parana'
        },
        {
          ibge: '4125605',
          cityName: 'Sao Mateus do Sul'
        },
        {
          ibge: '4125704',
          cityName: 'Sao Miguel do Iguacu'
        },
        {
          ibge: '4125753',
          cityName: 'Sao Pedro do Iguacu'
        },
        {
          ibge: '4125803',
          cityName: 'Sao Pedro do Ivai­'
        },
        {
          ibge: '4125902',
          cityName: 'Sao Pedro do Parana'
        },
        {
          ibge: '4126009',
          cityName: 'Sao Sebastiao da Amoreira'
        },
        {
          ibge: '4126108',
          cityName: 'Sao Tome'
        },
        {
          ibge: '4126207',
          cityName: 'Sapopema'
        },
        {
          ibge: '4126256',
          cityName: 'Sarandi'
        },
        {
          ibge: '4126272',
          cityName: 'Saudade do Iguacu'
        },
        {
          ibge: '4126306',
          cityName: 'Senges'
        },
        {
          ibge: '4126355',
          cityName: 'Serranopolis do Iguacu'
        },
        {
          ibge: '4126405',
          cityName: 'Sertaneja'
        },
        {
          ibge: '4126504',
          cityName: 'Sertanopolis'
        },
        {
          ibge: '4126603',
          cityName: 'Siqueira Campos'
        },
        {
          ibge: '4126652',
          cityName: 'Sulina'
        },
        {
          ibge: '4126678',
          cityName: 'Tamarana'
        },
        {
          ibge: '4126702',
          cityName: 'Tamboara'
        },
        {
          ibge: '4126801',
          cityName: 'Tapejara'
        },
        {
          ibge: '4126900',
          cityName: 'Tapira'
        },
        {
          ibge: '4127007',
          cityName: 'Teixeira Soares'
        },
        {
          ibge: '4127106',
          cityName: 'Teliªmaco Borba'
        },
        {
          ibge: '4127205',
          cityName: 'Terra Boa'
        },
        {
          ibge: '4127304',
          cityName: 'Terra Rica'
        },
        {
          ibge: '4127403',
          cityName: 'Terra Roxa'
        },
        {
          ibge: '4127502',
          cityName: 'Tibagi'
        },
        {
          ibge: '4127601',
          cityName: 'Tijucas do Sul'
        },
        {
          ibge: '4127700',
          cityName: 'Toledo'
        },
        {
          ibge: '4127809',
          cityName: 'Tomazina'
        },
        {
          ibge: '4127858',
          cityName: 'Triªs Barras do Parana'
        },
        {
          ibge: '4127882',
          cityName: 'Tunas do Parana'
        },
        {
          ibge: '4127908',
          cityName: 'Tuneiras do Oeste'
        },
        {
          ibge: '4127957',
          cityName: 'Tupassi'
        },
        {
          ibge: '4127965',
          cityName: 'Turvo'
        },
        {
          ibge: '4128005',
          cityName: 'Ubirata'
        },
        {
          ibge: '4128104',
          cityName: 'Umuarama'
        },
        {
          ibge: '4128203',
          cityName: 'Uniao da Vitoria'
        },
        {
          ibge: '4128302',
          cityName: 'Uniflor'
        },
        {
          ibge: '4128401',
          cityName: 'Urai­'
        },
        {
          ibge: '4128534',
          cityName: 'Ventania'
        },
        {
          ibge: '4128559',
          cityName: 'Vera Cruz do Oeste'
        },
        {
          ibge: '4128609',
          cityName: 'Veriª'
        },
        {
          ibge: '4128658',
          cityName: 'Virmond'
        },
        {
          ibge: '4128708',
          cityName: 'Vitorino'
        },
        {
          ibge: '4128500',
          cityName: 'Wenceslau Braz'
        },
        {
          ibge: '4128807',
          cityName: 'Xambriª'
        }
      ]
    },
    {
      abbreviation: 'RJ',
      cities: [
        {
          ibge: '3300100',
          cityName: 'Angra dos Reis'
        },
        {
          ibge: '3300159',
          cityName: 'Aperibe'
        },
        {
          ibge: '3300209',
          cityName: 'Araruama'
        },
        {
          ibge: '3300225',
          cityName: 'Areal'
        },
        {
          ibge: '3300233',
          cityName: 'Armacao dos Biºzios'
        },
        {
          ibge: '3300258',
          cityName: 'Arraial do Cabo'
        },
        {
          ibge: '3300308',
          cityName: 'Barra do Pirai­'
        },
        {
          ibge: '3300407',
          cityName: 'Barra Mansa'
        },
        {
          ibge: '3300456',
          cityName: 'Belford Roxo'
        },
        {
          ibge: '3300506',
          cityName: 'Bom Jardim'
        },
        {
          ibge: '3300605',
          cityName: 'Bom Jesus do Itabapoana'
        },
        {
          ibge: '3300704',
          cityName: 'Cabo Frio'
        },
        {
          ibge: '3300803',
          cityName: 'Cachoeiras de Macacu'
        },
        {
          ibge: '3300902',
          cityName: 'Cambuci'
        },
        {
          ibge: '3301009',
          cityName: 'Campos dos Goytacazes'
        },
        {
          ibge: '3301108',
          cityName: 'Cantagalo'
        },
        {
          ibge: '3300936',
          cityName: 'Carapebus'
        },
        {
          ibge: '3301157',
          cityName: 'Cardoso Moreira'
        },
        {
          ibge: '3301207',
          cityName: 'Carmo'
        },
        {
          ibge: '3301306',
          cityName: 'Casimiro de Abreu'
        },
        {
          ibge: '3300951',
          cityName: 'Comendador Levy Gasparian'
        },
        {
          ibge: '3301405',
          cityName: 'Conceicao de Macabu'
        },
        {
          ibge: '3301504',
          cityName: 'Cordeiro'
        },
        {
          ibge: '3301603',
          cityName: 'Duas Barras'
        },
        {
          ibge: '3301702',
          cityName: 'Duque de Caxias'
        },
        {
          ibge: '3301801',
          cityName: 'Engenheiro Paulo de Frontin'
        },
        {
          ibge: '3301850',
          cityName: 'Guapimirim'
        },
        {
          ibge: '3301876',
          cityName: 'Iguaba Grande'
        },
        {
          ibge: '3301900',
          cityName: 'Itaborai­'
        },
        {
          ibge: '3302007',
          cityName: 'Itaguai­'
        },
        {
          ibge: '3302056',
          cityName: 'Italva'
        },
        {
          ibge: '3302106',
          cityName: 'Itaocara'
        },
        {
          ibge: '3302205',
          cityName: 'Itaperuna'
        },
        {
          ibge: '3302254',
          cityName: 'Itatiaia'
        },
        {
          ibge: '3302270',
          cityName: 'Japeri'
        },
        {
          ibge: '3302304',
          cityName: 'Laje do Muriae'
        },
        {
          ibge: '3302403',
          cityName: 'Macae'
        },
        {
          ibge: '3302452',
          cityName: 'Macuco'
        },
        {
          ibge: '3302502',
          cityName: 'Mage'
        },
        {
          ibge: '3302601',
          cityName: 'Mangaratiba'
        },
        {
          ibge: '3302700',
          cityName: 'Marica'
        },
        {
          ibge: '3302809',
          cityName: 'Mendes'
        },
        {
          ibge: '3302858',
          cityName: 'Mesquita'
        },
        {
          ibge: '3302908',
          cityName: 'Miguel Pereira'
        },
        {
          ibge: '3303005',
          cityName: 'Miracema'
        },
        {
          ibge: '3303104',
          cityName: 'Natividade'
        },
        {
          ibge: '3303203',
          cityName: 'Nilopolis'
        },
        {
          ibge: '3303302',
          cityName: 'Niteroi'
        },
        {
          ibge: '3303401',
          cityName: 'Nova Friburgo'
        },
        {
          ibge: '3303500',
          cityName: 'Nova Iguacu'
        },
        {
          ibge: '3303609',
          cityName: 'Paracambi'
        },
        {
          ibge: '3303708',
          cityName: 'Parai­ba do Sul'
        },
        {
          ibge: '3303807',
          cityName: 'Paraty'
        },
        {
          ibge: '3303856',
          cityName: 'Paty do Alferes'
        },
        {
          ibge: '3303906',
          cityName: 'Petropolis'
        },
        {
          ibge: '3303955',
          cityName: 'Pinheiral'
        },
        {
          ibge: '3304003',
          cityName: 'Pirai­'
        },
        {
          ibge: '3304102',
          cityName: 'Porciiºncula'
        },
        {
          ibge: '3304110',
          cityName: 'Porto Real'
        },
        {
          ibge: '3304128',
          cityName: 'Quatis'
        },
        {
          ibge: '3304144',
          cityName: 'Queimados'
        },
        {
          ibge: '3304151',
          cityName: 'Quissama'
        },
        {
          ibge: '3304201',
          cityName: 'Resende'
        },
        {
          ibge: '3304300',
          cityName: 'Rio Bonito'
        },
        {
          ibge: '3304409',
          cityName: 'Rio Claro'
        },
        {
          ibge: '3304508',
          cityName: 'Rio das Flores'
        },
        {
          ibge: '3304524',
          cityName: 'Rio das Ostras'
        },
        {
          ibge: '3304557',
          cityName: 'Rio de Janeiro'
        },
        {
          ibge: '3304607',
          cityName: 'Santa Maria Madalena'
        },
        {
          ibge: '3304706',
          cityName: 'Santo Antonio de Padua'
        },
        {
          ibge: '3304805',
          cityName: 'Sao Fidelis'
        },
        {
          ibge: '3304755',
          cityName: 'Sao Francisco de Itabapoana'
        },
        {
          ibge: '3304904',
          cityName: 'Sao Goncalo'
        },
        {
          ibge: '3305000',
          cityName: 'Sao Joao da Barra'
        },
        {
          ibge: '3305109',
          cityName: 'Sao Joao de Meriti'
        },
        {
          ibge: '3305133',
          cityName: 'Sao Jose de Uba'
        },
        {
          ibge: '3305158',
          cityName: 'Sao Jose do Vale do Rio Preto'
        },
        {
          ibge: '3305208',
          cityName: 'Sao Pedro da Aldeia'
        },
        {
          ibge: '3305307',
          cityName: 'Sao Sebastiao do Alto'
        },
        {
          ibge: '3305406',
          cityName: 'Sapucaia'
        },
        {
          ibge: '3305505',
          cityName: 'Saquarema'
        },
        {
          ibge: '3305554',
          cityName: 'Seropedica'
        },
        {
          ibge: '3305604',
          cityName: 'Silva Jardim'
        },
        {
          ibge: '3305703',
          cityName: 'Sumidouro'
        },
        {
          ibge: '3305752',
          cityName: 'Tangua'
        },
        {
          ibge: '3305802',
          cityName: 'Teresopolis'
        },
        {
          ibge: '3305901',
          cityName: 'Trajano de Moraes'
        },
        {
          ibge: '3306008',
          cityName: 'Triªs Rios'
        },
        {
          ibge: '3306107',
          cityName: 'Valenca'
        },
        {
          ibge: '3306156',
          cityName: 'Varre-Sai'
        },
        {
          ibge: '3306206',
          cityName: 'Vassouras'
        },
        {
          ibge: '3306305',
          cityName: 'Volta Redonda'
        }
      ]
    },
    {
      abbreviation: 'RN',
      cities: [
        {
          ibge: '2400109',
          cityName: 'Acari'
        },
        {
          ibge: '2400208',
          cityName: 'Acu'
        },
        {
          ibge: '2400307',
          cityName: 'Afonso Bezerra'
        },
        {
          ibge: '2400406',
          cityName: 'Agua Nova'
        },
        {
          ibge: '2400505',
          cityName: 'Alexandria'
        },
        {
          ibge: '2400604',
          cityName: 'Almino Afonso'
        },
        {
          ibge: '2400703',
          cityName: 'Alto do Rodrigues'
        },
        {
          ibge: '2400802',
          cityName: 'Angicos'
        },
        {
          ibge: '2400901',
          cityName: 'Antonio Martins'
        },
        {
          ibge: '2401008',
          cityName: 'Apodi'
        },
        {
          ibge: '2401107',
          cityName: 'Areia Branca'
        },
        {
          ibge: '2401206',
          cityName: 'Ariªs'
        },
        {
          ibge: '2401305',
          cityName: 'Augusto Severo (Campo Grande)'
        },
        {
          ibge: '2401404',
          cityName: 'Bai­a Formosa'
        },
        {
          ibge: '2401453',
          cityName: 'Baraiºna'
        },
        {
          ibge: '2401503',
          cityName: 'Barcelona'
        },
        {
          ibge: '2401602',
          cityName: 'Bento Fernandes'
        },
        {
          ibge: '2401651',
          cityName: 'Bodo'
        },
        {
          ibge: '2401701',
          cityName: 'Bom Jesus'
        },
        {
          ibge: '2401800',
          cityName: 'Brejinho'
        },
        {
          ibge: '2401859',
          cityName: 'Caicara do Norte'
        },
        {
          ibge: '2401909',
          cityName: 'Caicara do Rio do Vento'
        },
        {
          ibge: '2402006',
          cityName: 'Caico'
        },
        {
          ibge: '2402105',
          cityName: 'Campo Redondo'
        },
        {
          ibge: '2402204',
          cityName: 'Canguaretama'
        },
        {
          ibge: '2402303',
          cityName: 'Caraiºbas'
        },
        {
          ibge: '2402402',
          cityName: 'Carnaiºba dos Dantas'
        },
        {
          ibge: '2402501',
          cityName: 'Carnaubais'
        },
        {
          ibge: '2402600',
          cityName: 'Ceara-Mirim'
        },
        {
          ibge: '2402709',
          cityName: 'Cerro Cora'
        },
        {
          ibge: '2402808',
          cityName: 'Coronel Ezequiel'
        },
        {
          ibge: '2402907',
          cityName: 'Coronel Joao Pessoa'
        },
        {
          ibge: '2403004',
          cityName: 'Cruzeta'
        },
        {
          ibge: '2403103',
          cityName: 'Currais Novos'
        },
        {
          ibge: '2403202',
          cityName: 'Doutor Severiano'
        },
        {
          ibge: '2403301',
          cityName: 'Encanto'
        },
        {
          ibge: '2403400',
          cityName: 'Equador'
        },
        {
          ibge: '2403509',
          cityName: 'Espi­rito Santo'
        },
        {
          ibge: '2403608',
          cityName: 'Extremoz'
        },
        {
          ibge: '2403707',
          cityName: 'Felipe Guerra'
        },
        {
          ibge: '2403756',
          cityName: 'Fernando Pedroza'
        },
        {
          ibge: '2403806',
          cityName: 'Florania'
        },
        {
          ibge: '2403905',
          cityName: 'Francisco Dantas'
        },
        {
          ibge: '2404002',
          cityName: 'Frutuoso Gomes'
        },
        {
          ibge: '2404101',
          cityName: 'Galinhos'
        },
        {
          ibge: '2404200',
          cityName: 'Goianinha'
        },
        {
          ibge: '2404309',
          cityName: 'Governador Dix-Sept Rosado'
        },
        {
          ibge: '2404408',
          cityName: 'Grossos'
        },
        {
          ibge: '2404507',
          cityName: 'Guamare'
        },
        {
          ibge: '2404606',
          cityName: 'Ielmo Marinho'
        },
        {
          ibge: '2404705',
          cityName: 'Ipanguacu'
        },
        {
          ibge: '2404804',
          cityName: 'Ipueira'
        },
        {
          ibge: '2404853',
          cityName: 'Itaja'
        },
        {
          ibge: '2404903',
          cityName: 'Itaiº'
        },
        {
          ibge: '2405009',
          cityName: 'Jacana'
        },
        {
          ibge: '2405108',
          cityName: 'Jandai­ra'
        },
        {
          ibge: '2405207',
          cityName: 'Jandui­s'
        },
        {
          ibge: '2405306',
          cityName: 'Januario Cicco (Boa Saiºde)'
        },
        {
          ibge: '2405405',
          cityName: 'Japi'
        },
        {
          ibge: '2405504',
          cityName: 'Jardim de Angicos'
        },
        {
          ibge: '2405603',
          cityName: 'Jardim de Piranhas'
        },
        {
          ibge: '2405702',
          cityName: 'Jardim do Serido'
        },
        {
          ibge: '2405801',
          cityName: 'Joao Camara'
        },
        {
          ibge: '2405900',
          cityName: 'Joao Dias'
        },
        {
          ibge: '2406007',
          cityName: 'Jose da Penha'
        },
        {
          ibge: '2406106',
          cityName: 'Jucurutu'
        },
        {
          ibge: '2406155',
          cityName: 'Jundia'
        },
        {
          ibge: '2406205',
          cityName: 'Lagoa d\'Anta'
        },
        {
          ibge: '2406304',
          cityName: 'Lagoa de Pedras'
        },
        {
          ibge: '2406403',
          cityName: 'Lagoa de Velhos'
        },
        {
          ibge: '2406502',
          cityName: 'Lagoa Nova'
        },
        {
          ibge: '2406601',
          cityName: 'Lagoa Salgada'
        },
        {
          ibge: '2406700',
          cityName: 'Lajes'
        },
        {
          ibge: '2406809',
          cityName: 'Lajes Pintadas'
        },
        {
          ibge: '2406908',
          cityName: 'Lucrecia'
        },
        {
          ibge: '2407005',
          cityName: 'Lui­s Gomes'
        },
        {
          ibge: '2407104',
          cityName: 'Macai­ba'
        },
        {
          ibge: '2407203',
          cityName: 'Macau'
        },
        {
          ibge: '2407252',
          cityName: 'Major Sales'
        },
        {
          ibge: '2407302',
          cityName: 'Marcelino Vieira'
        },
        {
          ibge: '2407401',
          cityName: 'Martins'
        },
        {
          ibge: '2407500',
          cityName: 'Maxaranguape'
        },
        {
          ibge: '2407609',
          cityName: 'Messias Targino'
        },
        {
          ibge: '2407708',
          cityName: 'Montanhas'
        },
        {
          ibge: '2407807',
          cityName: 'Monte Alegre'
        },
        {
          ibge: '2407906',
          cityName: 'Monte das Gameleiras'
        },
        {
          ibge: '2408003',
          cityName: 'Mossoro'
        },
        {
          ibge: '2408102',
          cityName: 'Natal'
        },
        {
          ibge: '2408201',
          cityName: 'Ni­sia Floresta'
        },
        {
          ibge: '2408300',
          cityName: 'Nova Cruz'
        },
        {
          ibge: '2408409',
          cityName: 'Olho-d\'Agua do Borges'
        },
        {
          ibge: '2408508',
          cityName: 'Ouro Branco'
        },
        {
          ibge: '2408607',
          cityName: 'Parana'
        },
        {
          ibge: '2408706',
          cityName: 'Paraiº'
        },
        {
          ibge: '2408805',
          cityName: 'Parazinho'
        },
        {
          ibge: '2408904',
          cityName: 'Parelhas'
        },
        {
          ibge: '2403251',
          cityName: 'Parnamirim'
        },
        {
          ibge: '2409100',
          cityName: 'Passa e Fica'
        },
        {
          ibge: '2409209',
          cityName: 'Passagem'
        },
        {
          ibge: '2409308',
          cityName: 'Patu'
        },
        {
          ibge: '2409407',
          cityName: 'Pau dos Ferros'
        },
        {
          ibge: '2409506',
          cityName: 'Pedra Grande'
        },
        {
          ibge: '2409605',
          cityName: 'Pedra Preta'
        },
        {
          ibge: '2409704',
          cityName: 'Pedro Avelino'
        },
        {
          ibge: '2409803',
          cityName: 'Pedro Velho'
        },
        {
          ibge: '2409902',
          cityName: 'Pendiªncias'
        },
        {
          ibge: '2410009',
          cityName: 'Piliµes'
        },
        {
          ibge: '2410108',
          cityName: 'Poco Branco'
        },
        {
          ibge: '2410207',
          cityName: 'Portalegre'
        },
        {
          ibge: '2410256',
          cityName: 'Porto do Mangue'
        },
        {
          ibge: '2410405',
          cityName: 'Pureza'
        },
        {
          ibge: '2410504',
          cityName: 'Rafael Fernandes'
        },
        {
          ibge: '2410603',
          cityName: 'Rafael Godeiro'
        },
        {
          ibge: '2410702',
          cityName: 'Riacho da Cruz'
        },
        {
          ibge: '2410801',
          cityName: 'Riacho de Santana'
        },
        {
          ibge: '2410900',
          cityName: 'Riachuelo'
        },
        {
          ibge: '2408953',
          cityName: 'Rio do Fogo'
        },
        {
          ibge: '2411007',
          cityName: 'Rodolfo Fernandes'
        },
        {
          ibge: '2411106',
          cityName: 'Ruy Barbosa'
        },
        {
          ibge: '2411205',
          cityName: 'Santa Cruz'
        },
        {
          ibge: '2409332',
          cityName: 'Santa Maria'
        },
        {
          ibge: '2411403',
          cityName: 'Santana do Matos'
        },
        {
          ibge: '2411429',
          cityName: 'Santana do Serido'
        },
        {
          ibge: '2411502',
          cityName: 'Santo Antonio'
        },
        {
          ibge: '2411601',
          cityName: 'Sao Bento do Norte'
        },
        {
          ibge: '2411700',
          cityName: 'Sao Bento do Trairi­'
        },
        {
          ibge: '2411809',
          cityName: 'Sao Fernando'
        },
        {
          ibge: '2411908',
          cityName: 'Sao Francisco do Oeste'
        },
        {
          ibge: '2412005',
          cityName: 'Sao Goncalo do Amarante'
        },
        {
          ibge: '2412104',
          cityName: 'Sao Joao do Sabugi'
        },
        {
          ibge: '2412203',
          cityName: 'Sao Jose de Mipibu'
        },
        {
          ibge: '2412302',
          cityName: 'Sao Jose do Campestre'
        },
        {
          ibge: '2412401',
          cityName: 'Sao Jose do Serido'
        },
        {
          ibge: '2412500',
          cityName: 'Sao Miguel'
        },
        {
          ibge: '2412559',
          cityName: 'Sao Miguel do Gostoso'
        },
        {
          ibge: '2412609',
          cityName: 'Sao Paulo do Potengi'
        },
        {
          ibge: '2412708',
          cityName: 'Sao Pedro'
        },
        {
          ibge: '2412807',
          cityName: 'Sao Rafael'
        },
        {
          ibge: '2412906',
          cityName: 'Sao Tome'
        },
        {
          ibge: '2413003',
          cityName: 'Sao Vicente'
        },
        {
          ibge: '2413102',
          cityName: 'Senador Eloi de Souza'
        },
        {
          ibge: '2413201',
          cityName: 'Senador Georgino Avelino'
        },
        {
          ibge: '2410306',
          cityName: 'Serra Caiada'
        },
        {
          ibge: '2413300',
          cityName: 'Serra de Sao Bento'
        },
        {
          ibge: '2413359',
          cityName: 'Serra do Mel'
        },
        {
          ibge: '2413409',
          cityName: 'Serra Negra do Norte'
        },
        {
          ibge: '2413508',
          cityName: 'Serrinha'
        },
        {
          ibge: '2413557',
          cityName: 'Serrinha dos Pintos'
        },
        {
          ibge: '2413607',
          cityName: 'Severiano Melo'
        },
        {
          ibge: '2413706',
          cityName: 'Si­tio Novo'
        },
        {
          ibge: '2413805',
          cityName: 'Taboleiro Grande'
        },
        {
          ibge: '2413904',
          cityName: 'Taipu'
        },
        {
          ibge: '2414001',
          cityName: 'Tangara'
        },
        {
          ibge: '2414100',
          cityName: 'Tenente Ananias'
        },
        {
          ibge: '2414159',
          cityName: 'Tenente Laurentino Cruz'
        },
        {
          ibge: '2411056',
          cityName: 'Tibau'
        },
        {
          ibge: '2414209',
          cityName: 'Tibau do Sul'
        },
        {
          ibge: '2414308',
          cityName: 'Timbaiºba dos Batistas'
        },
        {
          ibge: '2414407',
          cityName: 'Touros'
        },
        {
          ibge: '2414456',
          cityName: 'Triunfo Potiguar'
        },
        {
          ibge: '2414506',
          cityName: 'Umarizal'
        },
        {
          ibge: '2414605',
          cityName: 'Upanema'
        },
        {
          ibge: '2414704',
          cityName: 'Varzea'
        },
        {
          ibge: '2414753',
          cityName: 'Venha-Ver'
        },
        {
          ibge: '2414803',
          cityName: 'Vera Cruz'
        },
        {
          ibge: '2414902',
          cityName: 'Vicosa'
        },
        {
          ibge: '2415008',
          cityName: 'Vila Flor'
        }
      ]
    },
    {
      abbreviation: 'RO',
      cities: [
        {
          ibge: '1100015',
          cityName: 'Alta Floresta D\'Oeste'
        },
        {
          ibge: '1100379',
          cityName: 'Alto Alegre dos Parecis'
        },
        {
          ibge: '1100403',
          cityName: 'Alto Parai­so'
        },
        {
          ibge: '1100346',
          cityName: 'Alvorada D\'Oeste'
        },
        {
          ibge: '1100023',
          cityName: 'Ariquemes'
        },
        {
          ibge: '1100452',
          cityName: 'Buritis'
        },
        {
          ibge: '1100031',
          cityName: 'Cabixi'
        },
        {
          ibge: '1100601',
          cityName: 'Cacaulandia'
        },
        {
          ibge: '1100049',
          cityName: 'Cacoal'
        },
        {
          ibge: '1100700',
          cityName: 'Campo Novo de Rondonia'
        },
        {
          ibge: '1100809',
          cityName: 'Candeias do Jamari'
        },
        {
          ibge: '1100908',
          cityName: 'Castanheiras'
        },
        {
          ibge: '1100056',
          cityName: 'Cerejeiras'
        },
        {
          ibge: '1100924',
          cityName: 'Chupinguaia'
        },
        {
          ibge: '1100064',
          cityName: 'Colorado do Oeste'
        },
        {
          ibge: '1100072',
          cityName: 'Corumbiara'
        },
        {
          ibge: '1100080',
          cityName: 'Costa Marques'
        },
        {
          ibge: '1100940',
          cityName: 'Cujubim'
        },
        {
          ibge: '1100098',
          cityName: 'Espigao D\'Oeste'
        },
        {
          ibge: '1101005',
          cityName: 'Governador Jorge Teixeira'
        },
        {
          ibge: '1100106',
          cityName: 'Guajara-Mirim'
        },
        {
          ibge: '1101104',
          cityName: 'Itapua do Oeste'
        },
        {
          ibge: '1100114',
          cityName: 'Jaru'
        },
        {
          ibge: '1100122',
          cityName: 'Ji-Parana'
        },
        {
          ibge: '1100130',
          cityName: 'Machadinho D\'Oeste'
        },
        {
          ibge: '1101203',
          cityName: 'Ministro Andreazza'
        },
        {
          ibge: '1101302',
          cityName: 'Mirante da Serra'
        },
        {
          ibge: '1101401',
          cityName: 'Monte Negro'
        },
        {
          ibge: '1100148',
          cityName: 'Nova Brasilandia D\'Oeste'
        },
        {
          ibge: '1100338',
          cityName: 'Nova Mamore'
        },
        {
          ibge: '1101435',
          cityName: 'Nova Uniao'
        },
        {
          ibge: '1100502',
          cityName: 'Novo Horizonte do Oeste'
        },
        {
          ibge: '1100155',
          cityName: 'Ouro Preto do Oeste'
        },
        {
          ibge: '1101450',
          cityName: 'Parecis'
        },
        {
          ibge: '1100189',
          cityName: 'Pimenta Bueno'
        },
        {
          ibge: '1101468',
          cityName: 'Pimenteiras do Oeste'
        },
        {
          ibge: '1100205',
          cityName: 'Porto Velho'
        },
        {
          ibge: '1100254',
          cityName: 'Presidente Medici'
        },
        {
          ibge: '1101476',
          cityName: 'Primavera de Rondonia'
        },
        {
          ibge: '1100262',
          cityName: 'Rio Crespo'
        },
        {
          ibge: '1100288',
          cityName: 'Rolim de Moura'
        },
        {
          ibge: '1100296',
          cityName: 'Santa Luzia D\'Oeste'
        },
        {
          ibge: '1101484',
          cityName: 'Sao Felipe D\'Oeste'
        },
        {
          ibge: '1101492',
          cityName: 'Sao Francisco do Guapore'
        },
        {
          ibge: '1100320',
          cityName: 'Sao Miguel do Guapore'
        },
        {
          ibge: '1101500',
          cityName: 'Seringueiras'
        },
        {
          ibge: '1101559',
          cityName: 'Teixeiropolis'
        },
        {
          ibge: '1101609',
          cityName: 'Theobroma'
        },
        {
          ibge: '1101708',
          cityName: 'Urupa'
        },
        {
          ibge: '1101757',
          cityName: 'Vale do Anari'
        },
        {
          ibge: '1101807',
          cityName: 'Vale do Parai­so'
        },
        {
          ibge: '1100304',
          cityName: 'Vilhena'
        }
      ]
    },
    {
      abbreviation: 'RR',
      cities: [
        {
          ibge: '1400050',
          cityName: 'Alto Alegre'
        },
        {
          ibge: '1400027',
          cityName: 'Amajari'
        },
        {
          ibge: '1400100',
          cityName: 'Boa Vista'
        },
        {
          ibge: '1400159',
          cityName: 'Bonfim'
        },
        {
          ibge: '1400175',
          cityName: 'Canta'
        },
        {
          ibge: '1400209',
          cityName: 'Caracarai­'
        },
        {
          ibge: '1400233',
          cityName: 'Caroebe'
        },
        {
          ibge: '1400282',
          cityName: 'Iracema'
        },
        {
          ibge: '1400308',
          cityName: 'Mucajai­'
        },
        {
          ibge: '1400407',
          cityName: 'Normandia'
        },
        {
          ibge: '1400456',
          cityName: 'Pacaraima'
        },
        {
          ibge: '1400472',
          cityName: 'Rorainopolis'
        },
        {
          ibge: '1400506',
          cityName: 'Sao Joao da Baliza'
        },
        {
          ibge: '1400605',
          cityName: 'Sao Luiz'
        },
        {
          ibge: '1400704',
          cityName: 'Uiramuta'
        }
      ]
    },
    {
      abbreviation: 'RS',
      cities: [
        {
          ibge: '4300034',
          cityName: 'Acegua'
        },
        {
          ibge: '4300059',
          cityName: 'Agua Santa'
        },
        {
          ibge: '4300109',
          cityName: 'Agudo'
        },
        {
          ibge: '4300208',
          cityName: 'Ajuricaba'
        },
        {
          ibge: '4300307',
          cityName: 'Alecrim'
        },
        {
          ibge: '4300406',
          cityName: 'Alegrete'
        },
        {
          ibge: '4300455',
          cityName: 'Alegria'
        },
        {
          ibge: '4300471',
          cityName: 'Almirante Tamandare do Sul'
        },
        {
          ibge: '4300505',
          cityName: 'Alpestre'
        },
        {
          ibge: '4300554',
          cityName: 'Alto Alegre'
        },
        {
          ibge: '4300570',
          cityName: 'Alto Feliz'
        },
        {
          ibge: '4300604',
          cityName: 'Alvorada'
        },
        {
          ibge: '4300638',
          cityName: 'Amaral Ferrador'
        },
        {
          ibge: '4300646',
          cityName: 'Ametista do Sul'
        },
        {
          ibge: '4300661',
          cityName: 'Andre da Rocha'
        },
        {
          ibge: '4300703',
          cityName: 'Anta Gorda'
        },
        {
          ibge: '4300802',
          cityName: 'Antonio Prado'
        },
        {
          ibge: '4300851',
          cityName: 'Arambare'
        },
        {
          ibge: '4300877',
          cityName: 'Ararica'
        },
        {
          ibge: '4300901',
          cityName: 'Aratiba'
        },
        {
          ibge: '4301008',
          cityName: 'Arroio do Meio'
        },
        {
          ibge: '4301073',
          cityName: 'Arroio do Padre'
        },
        {
          ibge: '4301057',
          cityName: 'Arroio do Sal'
        },
        {
          ibge: '4301206',
          cityName: 'Arroio do Tigre'
        },
        {
          ibge: '4301107',
          cityName: 'Arroio dos Ratos'
        },
        {
          ibge: '4301305',
          cityName: 'Arroio Grande'
        },
        {
          ibge: '4301404',
          cityName: 'Arvorezinha'
        },
        {
          ibge: '4301503',
          cityName: 'Augusto Pestana'
        },
        {
          ibge: '4301552',
          cityName: 'Aurea'
        },
        {
          ibge: '4301602',
          cityName: 'Bage'
        },
        {
          ibge: '4301636',
          cityName: 'Balneario Pinhal'
        },
        {
          ibge: '4301651',
          cityName: 'Barao'
        },
        {
          ibge: '4301701',
          cityName: 'Barao de Cotegipe'
        },
        {
          ibge: '4301750',
          cityName: 'Barao do Triunfo'
        },
        {
          ibge: '4301859',
          cityName: 'Barra do Guarita'
        },
        {
          ibge: '4301875',
          cityName: 'Barra do Quarai­'
        },
        {
          ibge: '4301909',
          cityName: 'Barra do Ribeiro'
        },
        {
          ibge: '4301925',
          cityName: 'Barra do Rio Azul'
        },
        {
          ibge: '4301958',
          cityName: 'Barra Funda'
        },
        {
          ibge: '4301800',
          cityName: 'Barracao'
        },
        {
          ibge: '4302006',
          cityName: 'Barros Cassal'
        },
        {
          ibge: '4302055',
          cityName: 'Benjamin Constant do Sul'
        },
        {
          ibge: '4302105',
          cityName: 'Bento Goncalves'
        },
        {
          ibge: '4302154',
          cityName: 'Boa Vista das Missiµes'
        },
        {
          ibge: '4302204',
          cityName: 'Boa Vista do Burica'
        },
        {
          ibge: '4302220',
          cityName: 'Boa Vista do Cadeado'
        },
        {
          ibge: '4302238',
          cityName: 'Boa Vista do Incra'
        },
        {
          ibge: '4302253',
          cityName: 'Boa Vista do Sul'
        },
        {
          ibge: '4302303',
          cityName: 'Bom Jesus'
        },
        {
          ibge: '4302352',
          cityName: 'Bom Princi­pio'
        },
        {
          ibge: '4302378',
          cityName: 'Bom Progresso'
        },
        {
          ibge: '4302402',
          cityName: 'Bom Retiro do Sul'
        },
        {
          ibge: '4302451',
          cityName: 'Boqueirao do Leao'
        },
        {
          ibge: '4302501',
          cityName: 'Bossoroca'
        },
        {
          ibge: '4302584',
          cityName: 'Bozano'
        },
        {
          ibge: '4302600',
          cityName: 'Braga'
        },
        {
          ibge: '4302659',
          cityName: 'Brochier'
        },
        {
          ibge: '4302709',
          cityName: 'Butia'
        },
        {
          ibge: '4302808',
          cityName: 'Cacapava do Sul'
        },
        {
          ibge: '4302907',
          cityName: 'Cacequi'
        },
        {
          ibge: '4303004',
          cityName: 'Cachoeira do Sul'
        },
        {
          ibge: '4303103',
          cityName: 'Cachoeirinha'
        },
        {
          ibge: '4303202',
          cityName: 'Cacique Doble'
        },
        {
          ibge: '4303301',
          cityName: 'Caibate'
        },
        {
          ibge: '4303400',
          cityName: 'Caicara'
        },
        {
          ibge: '4303509',
          cityName: 'Camaqua'
        },
        {
          ibge: '4303558',
          cityName: 'Camargo'
        },
        {
          ibge: '4303608',
          cityName: 'Cambara do Sul'
        },
        {
          ibge: '4303673',
          cityName: 'Campestre da Serra'
        },
        {
          ibge: '4303707',
          cityName: 'Campina das Missiµes'
        },
        {
          ibge: '4303806',
          cityName: 'Campinas do Sul'
        },
        {
          ibge: '4303905',
          cityName: 'Campo Bom'
        },
        {
          ibge: '4304002',
          cityName: 'Campo Novo'
        },
        {
          ibge: '4304101',
          cityName: 'Campos Borges'
        },
        {
          ibge: '4304200',
          cityName: 'Candelaria'
        },
        {
          ibge: '4304309',
          cityName: 'Candido Godoi'
        },
        {
          ibge: '4304358',
          cityName: 'Candiota'
        },
        {
          ibge: '4304408',
          cityName: 'Canela'
        },
        {
          ibge: '4304507',
          cityName: 'Cangucu'
        },
        {
          ibge: '4304606',
          cityName: 'Canoas'
        },
        {
          ibge: '4304614',
          cityName: 'Canudos do Vale'
        },
        {
          ibge: '4304622',
          cityName: 'Capao Bonito do Sul'
        },
        {
          ibge: '4304630',
          cityName: 'Capao da Canoa'
        },
        {
          ibge: '4304655',
          cityName: 'Capao do Cipo'
        },
        {
          ibge: '4304663',
          cityName: 'Capao do Leao'
        },
        {
          ibge: '4304689',
          cityName: 'Capela de Santana'
        },
        {
          ibge: '4304697',
          cityName: 'Capitao'
        },
        {
          ibge: '4304671',
          cityName: 'Capivari do Sul'
        },
        {
          ibge: '4304713',
          cityName: 'Caraa'
        },
        {
          ibge: '4304705',
          cityName: 'Carazinho'
        },
        {
          ibge: '4304804',
          cityName: 'Carlos Barbosa'
        },
        {
          ibge: '4304853',
          cityName: 'Carlos Gomes'
        },
        {
          ibge: '4304903',
          cityName: 'Casca'
        },
        {
          ibge: '4304952',
          cityName: 'Caseiros'
        },
        {
          ibge: '4305009',
          cityName: 'Catui­pe'
        },
        {
          ibge: '4305108',
          cityName: 'Caxias do Sul'
        },
        {
          ibge: '4305116',
          cityName: 'Centenario'
        },
        {
          ibge: '4305124',
          cityName: 'Cerrito'
        },
        {
          ibge: '4305132',
          cityName: 'Cerro Branco'
        },
        {
          ibge: '4305157',
          cityName: 'Cerro Grande'
        },
        {
          ibge: '4305173',
          cityName: 'Cerro Grande do Sul'
        },
        {
          ibge: '4305207',
          cityName: 'Cerro Largo'
        },
        {
          ibge: '4305306',
          cityName: 'Chapada'
        },
        {
          ibge: '4305355',
          cityName: 'Charqueadas'
        },
        {
          ibge: '4305371',
          cityName: 'Charrua'
        },
        {
          ibge: '4305405',
          cityName: 'Chiapetta'
        },
        {
          ibge: '4305439',
          cityName: 'Chui­'
        },
        {
          ibge: '4305447',
          cityName: 'Chuvisca'
        },
        {
          ibge: '4305454',
          cityName: 'Cidreira'
        },
        {
          ibge: '4305504',
          cityName: 'Ciri­aco'
        },
        {
          ibge: '4305587',
          cityName: 'Colinas'
        },
        {
          ibge: '4305603',
          cityName: 'Colorado'
        },
        {
          ibge: '4305702',
          cityName: 'Condor'
        },
        {
          ibge: '4305801',
          cityName: 'Constantina'
        },
        {
          ibge: '4305835',
          cityName: 'Coqueiro Baixo'
        },
        {
          ibge: '4305850',
          cityName: 'Coqueiros do Sul'
        },
        {
          ibge: '4305871',
          cityName: 'Coronel Barros'
        },
        {
          ibge: '4305900',
          cityName: 'Coronel Bicaco'
        },
        {
          ibge: '4305934',
          cityName: 'Coronel Pilar'
        },
        {
          ibge: '4305959',
          cityName: 'Cotipora'
        },
        {
          ibge: '4305975',
          cityName: 'Coxilha'
        },
        {
          ibge: '4306007',
          cityName: 'Crissiumal'
        },
        {
          ibge: '4306056',
          cityName: 'Cristal'
        },
        {
          ibge: '4306072',
          cityName: 'Cristal do Sul'
        },
        {
          ibge: '4306106',
          cityName: 'Cruz Alta'
        },
        {
          ibge: '4306130',
          cityName: 'Cruzaltense'
        },
        {
          ibge: '4306205',
          cityName: 'Cruzeiro do Sul'
        },
        {
          ibge: '4306304',
          cityName: 'David Canabarro'
        },
        {
          ibge: '4306320',
          cityName: 'Derrubadas'
        },
        {
          ibge: '4306353',
          cityName: 'Dezesseis de Novembro'
        },
        {
          ibge: '4306379',
          cityName: 'Dilermando de Aguiar'
        },
        {
          ibge: '4306403',
          cityName: 'Dois Irmaos'
        },
        {
          ibge: '4306429',
          cityName: 'Dois Irmaos das Missiµes'
        },
        {
          ibge: '4306452',
          cityName: 'Dois Lajeados'
        },
        {
          ibge: '4306502',
          cityName: 'Dom Feliciano'
        },
        {
          ibge: '4306601',
          cityName: 'Dom Pedrito'
        },
        {
          ibge: '4306551',
          cityName: 'Dom Pedro de Alcantara'
        },
        {
          ibge: '4306700',
          cityName: 'Dona Francisca'
        },
        {
          ibge: '4306734',
          cityName: 'Doutor Mauri­cio Cardoso'
        },
        {
          ibge: '4306759',
          cityName: 'Doutor Ricardo'
        },
        {
          ibge: '4306767',
          cityName: 'Eldorado do Sul'
        },
        {
          ibge: '4306809',
          cityName: 'Encantado'
        },
        {
          ibge: '4306908',
          cityName: 'Encruzilhada do Sul'
        },
        {
          ibge: '4306924',
          cityName: 'Engenho Velho'
        },
        {
          ibge: '4306957',
          cityName: 'Entre Rios do Sul'
        },
        {
          ibge: '4306932',
          cityName: 'Entre-Ijui­s'
        },
        {
          ibge: '4306973',
          cityName: 'Erebango'
        },
        {
          ibge: '4307005',
          cityName: 'Erechim'
        },
        {
          ibge: '4307054',
          cityName: 'Ernestina'
        },
        {
          ibge: '4307203',
          cityName: 'Erval Grande'
        },
        {
          ibge: '4307302',
          cityName: 'Erval Seco'
        },
        {
          ibge: '4307401',
          cityName: 'Esmeralda'
        },
        {
          ibge: '4307450',
          cityName: 'Esperanca do Sul'
        },
        {
          ibge: '4307500',
          cityName: 'Espumoso'
        },
        {
          ibge: '4307559',
          cityName: 'Estacao'
        },
        {
          ibge: '4307609',
          cityName: 'Estancia Velha'
        },
        {
          ibge: '4307708',
          cityName: 'Esteio'
        },
        {
          ibge: '4307807',
          cityName: 'Estrela'
        },
        {
          ibge: '4307815',
          cityName: 'Estrela Velha'
        },
        {
          ibge: '4307831',
          cityName: 'Eugiªnio de Castro'
        },
        {
          ibge: '4307864',
          cityName: 'Fagundes Varela'
        },
        {
          ibge: '4307906',
          cityName: 'Farroupilha'
        },
        {
          ibge: '4308003',
          cityName: 'Faxinal do Soturno'
        },
        {
          ibge: '4308052',
          cityName: 'Faxinalzinho'
        },
        {
          ibge: '4308078',
          cityName: 'Fazenda Vilanova'
        },
        {
          ibge: '4308102',
          cityName: 'Feliz'
        },
        {
          ibge: '4308201',
          cityName: 'Flores da Cunha'
        },
        {
          ibge: '4308250',
          cityName: 'Floriano Peixoto'
        },
        {
          ibge: '4308300',
          cityName: 'Fontoura Xavier'
        },
        {
          ibge: '4308409',
          cityName: 'Formigueiro'
        },
        {
          ibge: '4308433',
          cityName: 'Forquetinha'
        },
        {
          ibge: '4308458',
          cityName: 'Fortaleza dos Valos'
        },
        {
          ibge: '4308508',
          cityName: 'Frederico Westphalen'
        },
        {
          ibge: '4308607',
          cityName: 'Garibaldi'
        },
        {
          ibge: '4308656',
          cityName: 'Garruchos'
        },
        {
          ibge: '4308706',
          cityName: 'Gaurama'
        },
        {
          ibge: '4308805',
          cityName: 'General Camara'
        },
        {
          ibge: '4308854',
          cityName: 'Gentil'
        },
        {
          ibge: '4308904',
          cityName: 'Getiºlio Vargas'
        },
        {
          ibge: '4309001',
          cityName: 'Girua'
        },
        {
          ibge: '4309050',
          cityName: 'Glorinha'
        },
        {
          ibge: '4309100',
          cityName: 'Gramado'
        },
        {
          ibge: '4309126',
          cityName: 'Gramado dos Loureiros'
        },
        {
          ibge: '4309159',
          cityName: 'Gramado Xavier'
        },
        {
          ibge: '4309209',
          cityName: 'Gravatai­'
        },
        {
          ibge: '4309258',
          cityName: 'Guabiju'
        },
        {
          ibge: '4309308',
          cityName: 'Guai­ba'
        },
        {
          ibge: '4309407',
          cityName: 'Guapore'
        },
        {
          ibge: '4309506',
          cityName: 'Guarani das Missiµes'
        },
        {
          ibge: '4309555',
          cityName: 'Harmonia'
        },
        {
          ibge: '4307104',
          cityName: 'Herval'
        },
        {
          ibge: '4309571',
          cityName: 'Herveiras'
        },
        {
          ibge: '4309605',
          cityName: 'Horizontina'
        },
        {
          ibge: '4309654',
          cityName: 'Hulha Negra'
        },
        {
          ibge: '4309704',
          cityName: 'Humaita'
        },
        {
          ibge: '4309753',
          cityName: 'Ibarama'
        },
        {
          ibge: '4309803',
          cityName: 'Ibiaca'
        },
        {
          ibge: '4309902',
          cityName: 'Ibiraiaras'
        },
        {
          ibge: '4309951',
          cityName: 'Ibirapuita'
        },
        {
          ibge: '4310009',
          cityName: 'Ibiruba'
        },
        {
          ibge: '4310108',
          cityName: 'Igrejinha'
        },
        {
          ibge: '4310207',
          cityName: 'Ijui­'
        },
        {
          ibge: '4310306',
          cityName: 'Ilopolis'
        },
        {
          ibge: '4310330',
          cityName: 'Imbe'
        },
        {
          ibge: '4310363',
          cityName: 'Imigrante'
        },
        {
          ibge: '4310405',
          cityName: 'Independiªncia'
        },
        {
          ibge: '4310413',
          cityName: 'Inhacora'
        },
        {
          ibge: '4310439',
          cityName: 'Ipiª'
        },
        {
          ibge: '4310462',
          cityName: 'Ipiranga do Sul'
        },
        {
          ibge: '4310504',
          cityName: 'Irai­'
        },
        {
          ibge: '4310538',
          cityName: 'Itaara'
        },
        {
          ibge: '4310553',
          cityName: 'Itacurubi'
        },
        {
          ibge: '4310579',
          cityName: 'Itapuca'
        },
        {
          ibge: '4310603',
          cityName: 'Itaqui'
        },
        {
          ibge: '4310652',
          cityName: 'Itati'
        },
        {
          ibge: '4310702',
          cityName: 'Itatiba do Sul'
        },
        {
          ibge: '4310751',
          cityName: 'Ivora'
        },
        {
          ibge: '4310801',
          cityName: 'Ivoti'
        },
        {
          ibge: '4310850',
          cityName: 'Jaboticaba'
        },
        {
          ibge: '4310876',
          cityName: 'Jacuizinho'
        },
        {
          ibge: '4310900',
          cityName: 'Jacutinga'
        },
        {
          ibge: '4311007',
          cityName: 'Jaguarao'
        },
        {
          ibge: '4311106',
          cityName: 'Jaguari'
        },
        {
          ibge: '4311122',
          cityName: 'Jaquirana'
        },
        {
          ibge: '4311130',
          cityName: 'Jari'
        },
        {
          ibge: '4311155',
          cityName: 'Joia'
        },
        {
          ibge: '4311205',
          cityName: 'Jiºlio de Castilhos'
        },
        {
          ibge: '4311239',
          cityName: 'Lagoa Bonita do Sul'
        },
        {
          ibge: '4311270',
          cityName: 'Lagoa dos Triªs Cantos'
        },
        {
          ibge: '4311304',
          cityName: 'Lagoa Vermelha'
        },
        {
          ibge: '4311254',
          cityName: 'Lagoao'
        },
        {
          ibge: '4311403',
          cityName: 'Lajeado'
        },
        {
          ibge: '4311429',
          cityName: 'Lajeado do Bugre'
        },
        {
          ibge: '4311502',
          cityName: 'Lavras do Sul'
        },
        {
          ibge: '4311601',
          cityName: 'Liberato Salzano'
        },
        {
          ibge: '4311627',
          cityName: 'Lindolfo Collor'
        },
        {
          ibge: '4311643',
          cityName: 'Linha Nova'
        },
        {
          ibge: '4311718',
          cityName: 'Macambara'
        },
        {
          ibge: '4311700',
          cityName: 'Machadinho'
        },
        {
          ibge: '4311734',
          cityName: 'Mampituba'
        },
        {
          ibge: '4311759',
          cityName: 'Manoel Viana'
        },
        {
          ibge: '4311775',
          cityName: 'Maquine'
        },
        {
          ibge: '4311791',
          cityName: 'Marata'
        },
        {
          ibge: '4311809',
          cityName: 'Marau'
        },
        {
          ibge: '4311908',
          cityName: 'Marcelino Ramos'
        },
        {
          ibge: '4311981',
          cityName: 'Mariana Pimentel'
        },
        {
          ibge: '4312005',
          cityName: 'Mariano Moro'
        },
        {
          ibge: '4312054',
          cityName: 'Marques de Souza'
        },
        {
          ibge: '4312104',
          cityName: 'Mata'
        },
        {
          ibge: '4312138',
          cityName: 'Mato Castelhano'
        },
        {
          ibge: '4312153',
          cityName: 'Mato Leitao'
        },
        {
          ibge: '4312179',
          cityName: 'Mato Queimado'
        },
        {
          ibge: '4312203',
          cityName: 'Maximiliano de Almeida'
        },
        {
          ibge: '4312252',
          cityName: 'Minas do Leao'
        },
        {
          ibge: '4312302',
          cityName: 'Miraguai­'
        },
        {
          ibge: '4312351',
          cityName: 'Montauri'
        },
        {
          ibge: '4312377',
          cityName: 'Monte Alegre dos Campos'
        },
        {
          ibge: '4312385',
          cityName: 'Monte Belo do Sul'
        },
        {
          ibge: '4312401',
          cityName: 'Montenegro'
        },
        {
          ibge: '4312427',
          cityName: 'Mormaco'
        },
        {
          ibge: '4312443',
          cityName: 'Morrinhos do Sul'
        },
        {
          ibge: '4312450',
          cityName: 'Morro Redondo'
        },
        {
          ibge: '4312476',
          cityName: 'Morro Reuter'
        },
        {
          ibge: '4312500',
          cityName: 'Mostardas'
        },
        {
          ibge: '4312609',
          cityName: 'Mucum'
        },
        {
          ibge: '4312617',
          cityName: 'Muitos Capiµes'
        },
        {
          ibge: '4312625',
          cityName: 'Muliterno'
        },
        {
          ibge: '4312658',
          cityName: 'Nao-Me-Toque'
        },
        {
          ibge: '4312674',
          cityName: 'Nicolau Vergueiro'
        },
        {
          ibge: '4312708',
          cityName: 'Nonoai'
        },
        {
          ibge: '4312757',
          cityName: 'Nova Alvorada'
        },
        {
          ibge: '4312807',
          cityName: 'Nova Araca'
        },
        {
          ibge: '4312906',
          cityName: 'Nova Bassano'
        },
        {
          ibge: '4312955',
          cityName: 'Nova Boa Vista'
        },
        {
          ibge: '4313003',
          cityName: 'Nova Brescia'
        },
        {
          ibge: '4313011',
          cityName: 'Nova Candelaria'
        },
        {
          ibge: '4313037',
          cityName: 'Nova Esperanca do Sul'
        },
        {
          ibge: '4313060',
          cityName: 'Nova Hartz'
        },
        {
          ibge: '4313086',
          cityName: 'Nova Padua'
        },
        {
          ibge: '4313102',
          cityName: 'Nova Palma'
        },
        {
          ibge: '4313201',
          cityName: 'Nova Petropolis'
        },
        {
          ibge: '4313300',
          cityName: 'Nova Prata'
        },
        {
          ibge: '4313334',
          cityName: 'Nova Ramada'
        },
        {
          ibge: '4313359',
          cityName: 'Nova Roma do Sul'
        },
        {
          ibge: '4313375',
          cityName: 'Nova Santa Rita'
        },
        {
          ibge: '4313490',
          cityName: 'Novo Barreiro'
        },
        {
          ibge: '4313391',
          cityName: 'Novo Cabrais'
        },
        {
          ibge: '4313409',
          cityName: 'Novo Hamburgo'
        },
        {
          ibge: '4313425',
          cityName: 'Novo Machado'
        },
        {
          ibge: '4313441',
          cityName: 'Novo Tiradentes'
        },
        {
          ibge: '4313466',
          cityName: 'Novo Xingu'
        },
        {
          ibge: '4313508',
          cityName: 'Osorio'
        },
        {
          ibge: '4313607',
          cityName: 'Paim Filho'
        },
        {
          ibge: '4313656',
          cityName: 'Palmares do Sul'
        },
        {
          ibge: '4313706',
          cityName: 'Palmeira das Missiµes'
        },
        {
          ibge: '4313805',
          cityName: 'Palmitinho'
        },
        {
          ibge: '4313904',
          cityName: 'Panambi'
        },
        {
          ibge: '4313953',
          cityName: 'Pantano Grande'
        },
        {
          ibge: '4314001',
          cityName: 'Parai­'
        },
        {
          ibge: '4314027',
          cityName: 'Parai­so do Sul'
        },
        {
          ibge: '4314035',
          cityName: 'Pareci Novo'
        },
        {
          ibge: '4314050',
          cityName: 'Parobe'
        },
        {
          ibge: '4314068',
          cityName: 'Passa Sete'
        },
        {
          ibge: '4314076',
          cityName: 'Passo do Sobrado'
        },
        {
          ibge: '4314100',
          cityName: 'Passo Fundo'
        },
        {
          ibge: '4314134',
          cityName: 'Paulo Bento'
        },
        {
          ibge: '4314159',
          cityName: 'Paverama'
        },
        {
          ibge: '4314175',
          cityName: 'Pedras Altas'
        },
        {
          ibge: '4314209',
          cityName: 'Pedro Osorio'
        },
        {
          ibge: '4314308',
          cityName: 'Pejucara'
        },
        {
          ibge: '4314407',
          cityName: 'Pelotas'
        },
        {
          ibge: '4314423',
          cityName: 'Picada Cafe'
        },
        {
          ibge: '4314456',
          cityName: 'Pinhal'
        },
        {
          ibge: '4314464',
          cityName: 'Pinhal da Serra'
        },
        {
          ibge: '4314472',
          cityName: 'Pinhal Grande'
        },
        {
          ibge: '4314498',
          cityName: 'Pinheirinho do Vale'
        },
        {
          ibge: '4314506',
          cityName: 'Pinheiro Machado'
        },
        {
          ibge: '4314548',
          cityName: 'Pinto Bandeira'
        },
        {
          ibge: '4314555',
          cityName: 'Pirapo'
        },
        {
          ibge: '4314605',
          cityName: 'Piratini'
        },
        {
          ibge: '4314704',
          cityName: 'Planalto'
        },
        {
          ibge: '4314753',
          cityName: 'Poco das Antas'
        },
        {
          ibge: '4314779',
          cityName: 'Pontao'
        },
        {
          ibge: '4314787',
          cityName: 'Ponte Preta'
        },
        {
          ibge: '4314803',
          cityName: 'Portao'
        },
        {
          ibge: '4314902',
          cityName: 'Porto Alegre'
        },
        {
          ibge: '4315008',
          cityName: 'Porto Lucena'
        },
        {
          ibge: '4315057',
          cityName: 'Porto Maua'
        },
        {
          ibge: '4315073',
          cityName: 'Porto Vera Cruz'
        },
        {
          ibge: '4315107',
          cityName: 'Porto Xavier'
        },
        {
          ibge: '4315131',
          cityName: 'Pouso Novo'
        },
        {
          ibge: '4315149',
          cityName: 'Presidente Lucena'
        },
        {
          ibge: '4315156',
          cityName: 'Progresso'
        },
        {
          ibge: '4315172',
          cityName: 'Protasio Alves'
        },
        {
          ibge: '4315206',
          cityName: 'Putinga'
        },
        {
          ibge: '4315305',
          cityName: 'Quarai­'
        },
        {
          ibge: '4315313',
          cityName: 'Quatro Irmaos'
        },
        {
          ibge: '4315321',
          cityName: 'Quevedos'
        },
        {
          ibge: '4315354',
          cityName: 'Quinze de Novembro'
        },
        {
          ibge: '4315404',
          cityName: 'Redentora'
        },
        {
          ibge: '4315453',
          cityName: 'Relvado'
        },
        {
          ibge: '4315503',
          cityName: 'Restinga Siªca'
        },
        {
          ibge: '4315552',
          cityName: 'Rio dos Andios'
        },
        {
          ibge: '4315602',
          cityName: 'Rio Grande'
        },
        {
          ibge: '4315701',
          cityName: 'Rio Pardo'
        },
        {
          ibge: '4315750',
          cityName: 'Riozinho'
        },
        {
          ibge: '4315800',
          cityName: 'Roca Sales'
        },
        {
          ibge: '4315909',
          cityName: 'Rodeio Bonito'
        },
        {
          ibge: '4315958',
          cityName: 'Rolador'
        },
        {
          ibge: '4316006',
          cityName: 'Rolante'
        },
        {
          ibge: '4316105',
          cityName: 'Ronda Alta'
        },
        {
          ibge: '4316204',
          cityName: 'Rondinha'
        },
        {
          ibge: '4316303',
          cityName: 'Roque Gonzales'
        },
        {
          ibge: '4316402',
          cityName: 'Rosario do Sul'
        },
        {
          ibge: '4316428',
          cityName: 'Sagrada Fami­lia'
        },
        {
          ibge: '4316436',
          cityName: 'Saldanha Marinho'
        },
        {
          ibge: '4316451',
          cityName: 'Salto do Jacui­'
        },
        {
          ibge: '4316477',
          cityName: 'Salvador das Missiµes'
        },
        {
          ibge: '4316501',
          cityName: 'Salvador do Sul'
        },
        {
          ibge: '4316600',
          cityName: 'Sananduva'
        },
        {
          ibge: '4317103',
          cityName: 'Sant\'Ana do Livramento'
        },
        {
          ibge: '4316709',
          cityName: 'Santa Barbara do Sul'
        },
        {
          ibge: '4316733',
          cityName: 'Santa Ceci­lia do Sul'
        },
        {
          ibge: '4316758',
          cityName: 'Santa Clara do Sul'
        },
        {
          ibge: '4316808',
          cityName: 'Santa Cruz do Sul'
        },
        {
          ibge: '4316972',
          cityName: 'Santa Margarida do Sul'
        },
        {
          ibge: '4316907',
          cityName: 'Santa Maria'
        },
        {
          ibge: '4316956',
          cityName: 'Santa Maria do Herval'
        },
        {
          ibge: '4317202',
          cityName: 'Santa Rosa'
        },
        {
          ibge: '4317251',
          cityName: 'Santa Tereza'
        },
        {
          ibge: '4317301',
          cityName: 'Santa Vitoria do Palmar'
        },
        {
          ibge: '4317004',
          cityName: 'Santana da Boa Vista'
        },
        {
          ibge: '4317400',
          cityName: 'Santiago'
        },
        {
          ibge: '4317509',
          cityName: 'Santo i‚ngelo'
        },
        {
          ibge: '4317608',
          cityName: 'Santo Antonio da Patrulha'
        },
        {
          ibge: '4317707',
          cityName: 'Santo Antonio das Missiµes'
        },
        {
          ibge: '4317558',
          cityName: 'Santo Antonio do Palma'
        },
        {
          ibge: '4317756',
          cityName: 'Santo Antonio do Planalto'
        },
        {
          ibge: '4317806',
          cityName: 'Santo Augusto'
        },
        {
          ibge: '4317905',
          cityName: 'Santo Cristo'
        },
        {
          ibge: '4317954',
          cityName: 'Santo Expedito do Sul'
        },
        {
          ibge: '4318002',
          cityName: 'Sao Borja'
        },
        {
          ibge: '4318051',
          cityName: 'Sao Domingos do Sul'
        },
        {
          ibge: '4318101',
          cityName: 'Sao Francisco de Assis'
        },
        {
          ibge: '4318200',
          cityName: 'Sao Francisco de Paula'
        },
        {
          ibge: '4318309',
          cityName: 'Sao Gabriel'
        },
        {
          ibge: '4318408',
          cityName: 'Sao Jeronimo'
        },
        {
          ibge: '4318424',
          cityName: 'Sao Joao da Urtiga'
        },
        {
          ibge: '4318432',
          cityName: 'Sao Joao do Poliªsine'
        },
        {
          ibge: '4318440',
          cityName: 'Sao Jorge'
        },
        {
          ibge: '4318457',
          cityName: 'Sao Jose das Missiµes'
        },
        {
          ibge: '4318465',
          cityName: 'Sao Jose do Herval'
        },
        {
          ibge: '4318481',
          cityName: 'Sao Jose do Hortiªncio'
        },
        {
          ibge: '4318499',
          cityName: 'Sao Jose do Inhacora'
        },
        {
          ibge: '4318507',
          cityName: 'Sao Jose do Norte'
        },
        {
          ibge: '4318606',
          cityName: 'Sao Jose do Ouro'
        },
        {
          ibge: '4318614',
          cityName: 'Sao Jose do Sul'
        },
        {
          ibge: '4318622',
          cityName: 'Sao Jose dos Ausentes'
        },
        {
          ibge: '4318705',
          cityName: 'Sao Leopoldo'
        },
        {
          ibge: '4318804',
          cityName: 'Sao Lourenco do Sul'
        },
        {
          ibge: '4318903',
          cityName: 'Sao Luiz Gonzaga'
        },
        {
          ibge: '4319000',
          cityName: 'Sao Marcos'
        },
        {
          ibge: '4319109',
          cityName: 'Sao Martinho'
        },
        {
          ibge: '4319125',
          cityName: 'Sao Martinho da Serra'
        },
        {
          ibge: '4319158',
          cityName: 'Sao Miguel das Missiµes'
        },
        {
          ibge: '4319208',
          cityName: 'Sao Nicolau'
        },
        {
          ibge: '4319307',
          cityName: 'Sao Paulo das Missiµes'
        },
        {
          ibge: '4319356',
          cityName: 'Sao Pedro da Serra'
        },
        {
          ibge: '4319364',
          cityName: 'Sao Pedro das Missiµes'
        },
        {
          ibge: '4319372',
          cityName: 'Sao Pedro do Butia'
        },
        {
          ibge: '4319406',
          cityName: 'Sao Pedro do Sul'
        },
        {
          ibge: '4319505',
          cityName: 'Sao Sebastiao do Cai­'
        },
        {
          ibge: '4319604',
          cityName: 'Sao Sepe'
        },
        {
          ibge: '4319703',
          cityName: 'Sao Valentim'
        },
        {
          ibge: '4319711',
          cityName: 'Sao Valentim do Sul'
        },
        {
          ibge: '4319737',
          cityName: 'Sao Valerio do Sul'
        },
        {
          ibge: '4319752',
          cityName: 'Sao Vendelino'
        },
        {
          ibge: '4319802',
          cityName: 'Sao Vicente do Sul'
        },
        {
          ibge: '4319901',
          cityName: 'Sapiranga'
        },
        {
          ibge: '4320008',
          cityName: 'Sapucaia do Sul'
        },
        {
          ibge: '4320107',
          cityName: 'Sarandi'
        },
        {
          ibge: '4320206',
          cityName: 'Seberi'
        },
        {
          ibge: '4320230',
          cityName: 'Sede Nova'
        },
        {
          ibge: '4320263',
          cityName: 'Segredo'
        },
        {
          ibge: '4320305',
          cityName: 'Selbach'
        },
        {
          ibge: '4320321',
          cityName: 'Senador Salgado Filho'
        },
        {
          ibge: '4320354',
          cityName: 'Sentinela do Sul'
        },
        {
          ibge: '4320404',
          cityName: 'Serafina Corriªa'
        },
        {
          ibge: '4320453',
          cityName: 'Serio'
        },
        {
          ibge: '4320503',
          cityName: 'Sertao'
        },
        {
          ibge: '4320552',
          cityName: 'Sertao Santana'
        },
        {
          ibge: '4320578',
          cityName: 'Sete de Setembro'
        },
        {
          ibge: '4320602',
          cityName: 'Severiano de Almeida'
        },
        {
          ibge: '4320651',
          cityName: 'Silveira Martins'
        },
        {
          ibge: '4320677',
          cityName: 'Sinimbu'
        },
        {
          ibge: '4320701',
          cityName: 'Sobradinho'
        },
        {
          ibge: '4320800',
          cityName: 'Soledade'
        },
        {
          ibge: '4320859',
          cityName: 'Tabai­'
        },
        {
          ibge: '4320909',
          cityName: 'Tapejara'
        },
        {
          ibge: '4321006',
          cityName: 'Tapera'
        },
        {
          ibge: '4321105',
          cityName: 'Tapes'
        },
        {
          ibge: '4321204',
          cityName: 'Taquara'
        },
        {
          ibge: '4321303',
          cityName: 'Taquari'
        },
        {
          ibge: '4321329',
          cityName: 'Taquarucu do Sul'
        },
        {
          ibge: '4321352',
          cityName: 'Tavares'
        },
        {
          ibge: '4321402',
          cityName: 'Tenente Portela'
        },
        {
          ibge: '4321436',
          cityName: 'Terra de Areia'
        },
        {
          ibge: '4321451',
          cityName: 'Teutonia'
        },
        {
          ibge: '4321469',
          cityName: 'Tio Hugo'
        },
        {
          ibge: '4321477',
          cityName: 'Tiradentes do Sul'
        },
        {
          ibge: '4321493',
          cityName: 'Toropi'
        },
        {
          ibge: '4321501',
          cityName: 'Torres'
        },
        {
          ibge: '4321600',
          cityName: 'Tramandai­'
        },
        {
          ibge: '4321626',
          cityName: 'Travesseiro'
        },
        {
          ibge: '4321634',
          cityName: 'Triªs Arroios'
        },
        {
          ibge: '4321667',
          cityName: 'Triªs Cachoeiras'
        },
        {
          ibge: '4321709',
          cityName: 'Triªs Coroas'
        },
        {
          ibge: '4321808',
          cityName: 'Triªs de Maio'
        },
        {
          ibge: '4321832',
          cityName: 'Triªs Forquilhas'
        },
        {
          ibge: '4321857',
          cityName: 'Triªs Palmeiras'
        },
        {
          ibge: '4321907',
          cityName: 'Triªs Passos'
        },
        {
          ibge: '4321956',
          cityName: 'Trindade do Sul'
        },
        {
          ibge: '4322004',
          cityName: 'Triunfo'
        },
        {
          ibge: '4322103',
          cityName: 'Tucunduva'
        },
        {
          ibge: '4322152',
          cityName: 'Tunas'
        },
        {
          ibge: '4322186',
          cityName: 'Tupanci do Sul'
        },
        {
          ibge: '4322202',
          cityName: 'Tupancireta'
        },
        {
          ibge: '4322251',
          cityName: 'Tupandi'
        },
        {
          ibge: '4322301',
          cityName: 'Tuparendi'
        },
        {
          ibge: '4322327',
          cityName: 'Turucu'
        },
        {
          ibge: '4322343',
          cityName: 'Ubiretama'
        },
        {
          ibge: '4322350',
          cityName: 'Uniao da Serra'
        },
        {
          ibge: '4322376',
          cityName: 'Unistalda'
        },
        {
          ibge: '4322400',
          cityName: 'Uruguaiana'
        },
        {
          ibge: '4322509',
          cityName: 'Vacaria'
        },
        {
          ibge: '4322533',
          cityName: 'Vale do Sol'
        },
        {
          ibge: '4322541',
          cityName: 'Vale Real'
        },
        {
          ibge: '4322525',
          cityName: 'Vale Verde'
        },
        {
          ibge: '4322558',
          cityName: 'Vanini'
        },
        {
          ibge: '4322608',
          cityName: 'Venancio Aires'
        },
        {
          ibge: '4322707',
          cityName: 'Vera Cruz'
        },
        {
          ibge: '4322806',
          cityName: 'Veranopolis'
        },
        {
          ibge: '4322855',
          cityName: 'Vespasiano Corriªa'
        },
        {
          ibge: '4322905',
          cityName: 'Viadutos'
        },
        {
          ibge: '4323002',
          cityName: 'Viamao'
        },
        {
          ibge: '4323101',
          cityName: 'Vicente Dutra'
        },
        {
          ibge: '4323200',
          cityName: 'Victor Graeff'
        },
        {
          ibge: '4323309',
          cityName: 'Vila Flores'
        },
        {
          ibge: '4323358',
          cityName: 'Vila Langaro'
        },
        {
          ibge: '4323408',
          cityName: 'Vila Maria'
        },
        {
          ibge: '4323457',
          cityName: 'Vila Nova do Sul'
        },
        {
          ibge: '4323507',
          cityName: 'Vista Alegre'
        },
        {
          ibge: '4323606',
          cityName: 'Vista Alegre do Prata'
        },
        {
          ibge: '4323705',
          cityName: 'Vista Gaiºcha'
        },
        {
          ibge: '4323754',
          cityName: 'Vitoria das Missiµes'
        },
        {
          ibge: '4323770',
          cityName: 'Westfalia'
        },
        {
          ibge: '4323804',
          cityName: 'Xangri-la'
        }
      ]
    },
    {
      abbreviation: 'SC',
      cities: [
        {
          ibge: '4200051',
          cityName: 'Abdon Batista'
        },
        {
          ibge: '4200101',
          cityName: 'Abelardo Luz'
        },
        {
          ibge: '4200200',
          cityName: 'Agrolandia'
        },
        {
          ibge: '4200309',
          cityName: 'Agronomica'
        },
        {
          ibge: '4200408',
          cityName: 'Agua Doce'
        },
        {
          ibge: '4200507',
          cityName: 'Aguas de Chapeco'
        },
        {
          ibge: '4200556',
          cityName: 'Aguas Frias'
        },
        {
          ibge: '4200606',
          cityName: 'Aguas Mornas'
        },
        {
          ibge: '4200705',
          cityName: 'Alfredo Wagner'
        },
        {
          ibge: '4200754',
          cityName: 'Alto Bela Vista'
        },
        {
          ibge: '4200804',
          cityName: 'Anchieta'
        },
        {
          ibge: '4200903',
          cityName: 'Angelina'
        },
        {
          ibge: '4201000',
          cityName: 'Anita Garibaldi'
        },
        {
          ibge: '4201109',
          cityName: 'Anitapolis'
        },
        {
          ibge: '4201208',
          cityName: 'Antonio Carlos'
        },
        {
          ibge: '4201257',
          cityName: 'Apiiºna'
        },
        {
          ibge: '4201273',
          cityName: 'Arabuta'
        },
        {
          ibge: '4201307',
          cityName: 'Araquari'
        },
        {
          ibge: '4201406',
          cityName: 'Ararangua'
        },
        {
          ibge: '4201505',
          cityName: 'Armazem'
        },
        {
          ibge: '4201604',
          cityName: 'Arroio Trinta'
        },
        {
          ibge: '4201653',
          cityName: 'Arvoredo'
        },
        {
          ibge: '4201703',
          cityName: 'Ascurra'
        },
        {
          ibge: '4201802',
          cityName: 'Atalanta'
        },
        {
          ibge: '4201901',
          cityName: 'Aurora'
        },
        {
          ibge: '4201950',
          cityName: 'Balneario Arroio do Silva'
        },
        {
          ibge: '4202057',
          cityName: 'Balneario Barra do Sul'
        },
        {
          ibge: '4202008',
          cityName: 'Balneario Camboriiº'
        },
        {
          ibge: '4202073',
          cityName: 'Balneario Gaivota'
        },
        {
          ibge: '4212809',
          cityName: 'Balneario Picarras'
        },
        {
          ibge: '4220000',
          cityName: 'Balneario Rincao'
        },
        {
          ibge: '4202081',
          cityName: 'Bandeirante'
        },
        {
          ibge: '4202099',
          cityName: 'Barra Bonita'
        },
        {
          ibge: '4202107',
          cityName: 'Barra Velha'
        },
        {
          ibge: '4202131',
          cityName: 'Bela Vista do Toldo'
        },
        {
          ibge: '4202156',
          cityName: 'Belmonte'
        },
        {
          ibge: '4202206',
          cityName: 'Benedito Novo'
        },
        {
          ibge: '4202305',
          cityName: 'Biguacu'
        },
        {
          ibge: '4202404',
          cityName: 'Blumenau'
        },
        {
          ibge: '4202438',
          cityName: 'Bocaina do Sul'
        },
        {
          ibge: '4202503',
          cityName: 'Bom Jardim da Serra'
        },
        {
          ibge: '4202537',
          cityName: 'Bom Jesus'
        },
        {
          ibge: '4202578',
          cityName: 'Bom Jesus do Oeste'
        },
        {
          ibge: '4202602',
          cityName: 'Bom Retiro'
        },
        {
          ibge: '4202453',
          cityName: 'Bombinhas'
        },
        {
          ibge: '4202701',
          cityName: 'Botuvera'
        },
        {
          ibge: '4202800',
          cityName: 'Braco do Norte'
        },
        {
          ibge: '4202859',
          cityName: 'Braco do Trombudo'
        },
        {
          ibge: '4202875',
          cityName: 'Brunopolis'
        },
        {
          ibge: '4202909',
          cityName: 'Brusque'
        },
        {
          ibge: '4203006',
          cityName: 'Cacador'
        },
        {
          ibge: '4203105',
          cityName: 'Caibi'
        },
        {
          ibge: '4203154',
          cityName: 'Calmon'
        },
        {
          ibge: '4203204',
          cityName: 'Camboriiº'
        },
        {
          ibge: '4203303',
          cityName: 'Campo Alegre'
        },
        {
          ibge: '4203402',
          cityName: 'Campo Belo do Sul'
        },
        {
          ibge: '4203501',
          cityName: 'Campo Eriª'
        },
        {
          ibge: '4203600',
          cityName: 'Campos Novos'
        },
        {
          ibge: '4203709',
          cityName: 'Canelinha'
        },
        {
          ibge: '4203808',
          cityName: 'Canoinhas'
        },
        {
          ibge: '4203253',
          cityName: 'Capao Alto'
        },
        {
          ibge: '4203907',
          cityName: 'Capinzal'
        },
        {
          ibge: '4203956',
          cityName: 'Capivari de Baixo'
        },
        {
          ibge: '4204004',
          cityName: 'Catanduvas'
        },
        {
          ibge: '4204103',
          cityName: 'Caxambu do Sul'
        },
        {
          ibge: '4204152',
          cityName: 'Celso Ramos'
        },
        {
          ibge: '4204178',
          cityName: 'Cerro Negro'
        },
        {
          ibge: '4204194',
          cityName: 'Chapadao do Lageado'
        },
        {
          ibge: '4204202',
          cityName: 'Chapeco'
        },
        {
          ibge: '4204251',
          cityName: 'Cocal do Sul'
        },
        {
          ibge: '4204301',
          cityName: 'Concordia'
        },
        {
          ibge: '4204350',
          cityName: 'Cordilheira Alta'
        },
        {
          ibge: '4204400',
          cityName: 'Coronel Freitas'
        },
        {
          ibge: '4204459',
          cityName: 'Coronel Martins'
        },
        {
          ibge: '4204558',
          cityName: 'Correia Pinto'
        },
        {
          ibge: '4204509',
          cityName: 'Corupa'
        },
        {
          ibge: '4204608',
          cityName: 'Criciiºma'
        },
        {
          ibge: '4204707',
          cityName: 'Cunha Pora'
        },
        {
          ibge: '4204756',
          cityName: 'Cunhatai­'
        },
        {
          ibge: '4204806',
          cityName: 'Curitibanos'
        },
        {
          ibge: '4204905',
          cityName: 'Descanso'
        },
        {
          ibge: '4205001',
          cityName: 'Dioni­sio Cerqueira'
        },
        {
          ibge: '4205100',
          cityName: 'Dona Emma'
        },
        {
          ibge: '4205159',
          cityName: 'Doutor Pedrinho'
        },
        {
          ibge: '4205175',
          cityName: 'Entre Rios'
        },
        {
          ibge: '4205191',
          cityName: 'Ermo'
        },
        {
          ibge: '4205209',
          cityName: 'Erval Velho'
        },
        {
          ibge: '4205308',
          cityName: 'Faxinal dos Guedes'
        },
        {
          ibge: '4205357',
          cityName: 'Flor do Sertao'
        },
        {
          ibge: '4205407',
          cityName: 'Florianopolis'
        },
        {
          ibge: '4205431',
          cityName: 'Formosa do Sul'
        },
        {
          ibge: '4205456',
          cityName: 'Forquilhinha'
        },
        {
          ibge: '4205506',
          cityName: 'Fraiburgo'
        },
        {
          ibge: '4205555',
          cityName: 'Frei Rogerio'
        },
        {
          ibge: '4205605',
          cityName: 'Galvao'
        },
        {
          ibge: '4205704',
          cityName: 'Garopaba'
        },
        {
          ibge: '4205803',
          cityName: 'Garuva'
        },
        {
          ibge: '4205902',
          cityName: 'Gaspar'
        },
        {
          ibge: '4206009',
          cityName: 'Governador Celso Ramos'
        },
        {
          ibge: '4206108',
          cityName: 'Grao Para'
        },
        {
          ibge: '4206207',
          cityName: 'Gravatal'
        },
        {
          ibge: '4206306',
          cityName: 'Guabiruba'
        },
        {
          ibge: '4206405',
          cityName: 'Guaraciaba'
        },
        {
          ibge: '4206504',
          cityName: 'Guaramirim'
        },
        {
          ibge: '4206603',
          cityName: 'Guaruja do Sul'
        },
        {
          ibge: '4206652',
          cityName: 'Guatambiº'
        },
        {
          ibge: '4206702',
          cityName: 'Herval d\'Oeste'
        },
        {
          ibge: '4206751',
          cityName: 'Ibiam'
        },
        {
          ibge: '4206801',
          cityName: 'Ibicare'
        },
        {
          ibge: '4206900',
          cityName: 'Ibirama'
        },
        {
          ibge: '4207007',
          cityName: 'Icara'
        },
        {
          ibge: '4207106',
          cityName: 'Ilhota'
        },
        {
          ibge: '4207205',
          cityName: 'Imarui­'
        },
        {
          ibge: '4207304',
          cityName: 'Imbituba'
        },
        {
          ibge: '4207403',
          cityName: 'Imbuia'
        },
        {
          ibge: '4207502',
          cityName: 'Indaial'
        },
        {
          ibge: '4207577',
          cityName: 'Iomeriª'
        },
        {
          ibge: '4207601',
          cityName: 'Ipira'
        },
        {
          ibge: '4207650',
          cityName: 'Ipora do Oeste'
        },
        {
          ibge: '4207684',
          cityName: 'Ipuacu'
        },
        {
          ibge: '4207700',
          cityName: 'Ipumirim'
        },
        {
          ibge: '4207759',
          cityName: 'Iraceminha'
        },
        {
          ibge: '4207809',
          cityName: 'Irani'
        },
        {
          ibge: '4207858',
          cityName: 'Irati'
        },
        {
          ibge: '4207908',
          cityName: 'Irineopolis'
        },
        {
          ibge: '4208005',
          cityName: 'Ita'
        },
        {
          ibge: '4208104',
          cityName: 'Itaiopolis'
        },
        {
          ibge: '4208203',
          cityName: 'Itajai­'
        },
        {
          ibge: '4208302',
          cityName: 'Itapema'
        },
        {
          ibge: '4208401',
          cityName: 'Itapiranga'
        },
        {
          ibge: '4208450',
          cityName: 'Itapoa'
        },
        {
          ibge: '4208500',
          cityName: 'Ituporanga'
        },
        {
          ibge: '4208609',
          cityName: 'Jabora'
        },
        {
          ibge: '4208708',
          cityName: 'Jacinto Machado'
        },
        {
          ibge: '4208807',
          cityName: 'Jaguaruna'
        },
        {
          ibge: '4208906',
          cityName: 'Jaragua do Sul'
        },
        {
          ibge: '4208955',
          cityName: 'Jardinopolis'
        },
        {
          ibge: '4209003',
          cityName: 'Joacaba'
        },
        {
          ibge: '4209102',
          cityName: 'Joinville'
        },
        {
          ibge: '4209151',
          cityName: 'Jose Boiteux'
        },
        {
          ibge: '4209177',
          cityName: 'Jupia'
        },
        {
          ibge: '4209201',
          cityName: 'Lacerdopolis'
        },
        {
          ibge: '4209300',
          cityName: 'Lages'
        },
        {
          ibge: '4209409',
          cityName: 'Laguna'
        },
        {
          ibge: '4209458',
          cityName: 'Lajeado Grande'
        },
        {
          ibge: '4209508',
          cityName: 'Laurentino'
        },
        {
          ibge: '4209607',
          cityName: 'Lauro Muller'
        },
        {
          ibge: '4209706',
          cityName: 'Lebon Regis'
        },
        {
          ibge: '4209805',
          cityName: 'Leoberto Leal'
        },
        {
          ibge: '4209854',
          cityName: 'Lindoia do Sul'
        },
        {
          ibge: '4209904',
          cityName: 'Lontras'
        },
        {
          ibge: '4210001',
          cityName: 'Luiz Alves'
        },
        {
          ibge: '4210035',
          cityName: 'Luzerna'
        },
        {
          ibge: '4210050',
          cityName: 'Macieira'
        },
        {
          ibge: '4210100',
          cityName: 'Mafra'
        },
        {
          ibge: '4210209',
          cityName: 'Major Gercino'
        },
        {
          ibge: '4210308',
          cityName: 'Major Vieira'
        },
        {
          ibge: '4210407',
          cityName: 'Maracaja'
        },
        {
          ibge: '4210506',
          cityName: 'Maravilha'
        },
        {
          ibge: '4210555',
          cityName: 'Marema'
        },
        {
          ibge: '4210605',
          cityName: 'Massaranduba'
        },
        {
          ibge: '4210704',
          cityName: 'Matos Costa'
        },
        {
          ibge: '4210803',
          cityName: 'Meleiro'
        },
        {
          ibge: '4210852',
          cityName: 'Mirim Doce'
        },
        {
          ibge: '4210902',
          cityName: 'Modelo'
        },
        {
          ibge: '4211009',
          cityName: 'Mondai­'
        },
        {
          ibge: '4211058',
          cityName: 'Monte Carlo'
        },
        {
          ibge: '4211108',
          cityName: 'Monte Castelo'
        },
        {
          ibge: '4211207',
          cityName: 'Morro da Fumaca'
        },
        {
          ibge: '4211256',
          cityName: 'Morro Grande'
        },
        {
          ibge: '4211306',
          cityName: 'Navegantes'
        },
        {
          ibge: '4211405',
          cityName: 'Nova Erechim'
        },
        {
          ibge: '4211454',
          cityName: 'Nova Itaberaba'
        },
        {
          ibge: '4211504',
          cityName: 'Nova Trento'
        },
        {
          ibge: '4211603',
          cityName: 'Nova Veneza'
        },
        {
          ibge: '4211652',
          cityName: 'Novo Horizonte'
        },
        {
          ibge: '4211702',
          cityName: 'Orleans'
        },
        {
          ibge: '4211751',
          cityName: 'Otaci­lio Costa'
        },
        {
          ibge: '4211801',
          cityName: 'Ouro'
        },
        {
          ibge: '4211850',
          cityName: 'Ouro Verde'
        },
        {
          ibge: '4211876',
          cityName: 'Paial'
        },
        {
          ibge: '4211892',
          cityName: 'Painel'
        },
        {
          ibge: '4211900',
          cityName: 'Palhoca'
        },
        {
          ibge: '4212007',
          cityName: 'Palma Sola'
        },
        {
          ibge: '4212056',
          cityName: 'Palmeira'
        },
        {
          ibge: '4212106',
          cityName: 'Palmitos'
        },
        {
          ibge: '4212205',
          cityName: 'Papanduva'
        },
        {
          ibge: '4212239',
          cityName: 'Parai­so'
        },
        {
          ibge: '4212254',
          cityName: 'Passo de Torres'
        },
        {
          ibge: '4212270',
          cityName: 'Passos Maia'
        },
        {
          ibge: '4212304',
          cityName: 'Paulo Lopes'
        },
        {
          ibge: '4212403',
          cityName: 'Pedras Grandes'
        },
        {
          ibge: '4212502',
          cityName: 'Penha'
        },
        {
          ibge: '4212601',
          cityName: 'Peritiba'
        },
        {
          ibge: '4212650',
          cityName: 'Pescaria Brava'
        },
        {
          ibge: '4212700',
          cityName: 'Petrolandia'
        },
        {
          ibge: '4212908',
          cityName: 'Pinhalzinho'
        },
        {
          ibge: '4213005',
          cityName: 'Pinheiro Preto'
        },
        {
          ibge: '4213104',
          cityName: 'Piratuba'
        },
        {
          ibge: '4213153',
          cityName: 'Planalto Alegre'
        },
        {
          ibge: '4213203',
          cityName: 'Pomerode'
        },
        {
          ibge: '4213302',
          cityName: 'Ponte Alta'
        },
        {
          ibge: '4213351',
          cityName: 'Ponte Alta do Norte'
        },
        {
          ibge: '4213401',
          cityName: 'Ponte Serrada'
        },
        {
          ibge: '4213500',
          cityName: 'Porto Belo'
        },
        {
          ibge: '4213609',
          cityName: 'Porto Uniao'
        },
        {
          ibge: '4213708',
          cityName: 'Pouso Redondo'
        },
        {
          ibge: '4213807',
          cityName: 'Praia Grande'
        },
        {
          ibge: '4213906',
          cityName: 'Presidente Castello Branco'
        },
        {
          ibge: '4214003',
          cityName: 'Presidente Getiºlio'
        },
        {
          ibge: '4214102',
          cityName: 'Presidente Nereu'
        },
        {
          ibge: '4214151',
          cityName: 'Princesa'
        },
        {
          ibge: '4214201',
          cityName: 'Quilombo'
        },
        {
          ibge: '4214300',
          cityName: 'Rancho Queimado'
        },
        {
          ibge: '4214409',
          cityName: 'Rio das Antas'
        },
        {
          ibge: '4214508',
          cityName: 'Rio do Campo'
        },
        {
          ibge: '4214607',
          cityName: 'Rio do Oeste'
        },
        {
          ibge: '4214805',
          cityName: 'Rio do Sul'
        },
        {
          ibge: '4214706',
          cityName: 'Rio dos Cedros'
        },
        {
          ibge: '4214904',
          cityName: 'Rio Fortuna'
        },
        {
          ibge: '4215000',
          cityName: 'Rio Negrinho'
        },
        {
          ibge: '4215059',
          cityName: 'Rio Rabbreviationino'
        },
        {
          ibge: '4215075',
          cityName: 'Riqueza'
        },
        {
          ibge: '4215109',
          cityName: 'Rodeio'
        },
        {
          ibge: '4215208',
          cityName: 'Romelandia'
        },
        {
          ibge: '4215307',
          cityName: 'Salete'
        },
        {
          ibge: '4215356',
          cityName: 'Saltinho'
        },
        {
          ibge: '4215406',
          cityName: 'Salto Veloso'
        },
        {
          ibge: '4215455',
          cityName: 'Sangao'
        },
        {
          ibge: '4215505',
          cityName: 'Santa Ceci­lia'
        },
        {
          ibge: '4215554',
          cityName: 'Santa Helena'
        },
        {
          ibge: '4215604',
          cityName: 'Santa Rosa de Lima'
        },
        {
          ibge: '4215653',
          cityName: 'Santa Rosa do Sul'
        },
        {
          ibge: '4215679',
          cityName: 'Santa Terezinha'
        },
        {
          ibge: '4215695',
          cityName: 'Santa Terezinha do Progresso'
        },
        {
          ibge: '4215687',
          cityName: 'Santiago do Sul'
        },
        {
          ibge: '4215703',
          cityName: 'Santo Amaro da Imperatriz'
        },
        {
          ibge: '4215802',
          cityName: 'Sao Bento do Sul'
        },
        {
          ibge: '4215752',
          cityName: 'Sao Bernardino'
        },
        {
          ibge: '4215901',
          cityName: 'Sao Bonifacio'
        },
        {
          ibge: '4216008',
          cityName: 'Sao Carlos'
        },
        {
          ibge: '4216057',
          cityName: 'Sao Cristovao do Sul'
        },
        {
          ibge: '4216107',
          cityName: 'Sao Domingos'
        },
        {
          ibge: '4216206',
          cityName: 'Sao Francisco do Sul'
        },
        {
          ibge: '4216305',
          cityName: 'Sao Joao Batista'
        },
        {
          ibge: '4216354',
          cityName: 'Sao Joao do Itaperiiº'
        },
        {
          ibge: '4216255',
          cityName: 'Sao Joao do Oeste'
        },
        {
          ibge: '4216404',
          cityName: 'Sao Joao do Sul'
        },
        {
          ibge: '4216503',
          cityName: 'Sao Joaquim'
        },
        {
          ibge: '4216602',
          cityName: 'Sao Jose'
        },
        {
          ibge: '4216701',
          cityName: 'Sao Jose do Cedro'
        },
        {
          ibge: '4216800',
          cityName: 'Sao Jose do Cerrito'
        },
        {
          ibge: '4216909',
          cityName: 'Sao Lourenco do Oeste'
        },
        {
          ibge: '4217006',
          cityName: 'Sao Ludgero'
        },
        {
          ibge: '4217105',
          cityName: 'Sao Martinho'
        },
        {
          ibge: '4217154',
          cityName: 'Sao Miguel da Boa Vista'
        },
        {
          ibge: '4217204',
          cityName: 'Sao Miguel do Oeste'
        },
        {
          ibge: '4217253',
          cityName: 'Sao Pedro de Alcantara'
        },
        {
          ibge: '4217303',
          cityName: 'Saudades'
        },
        {
          ibge: '4217402',
          cityName: 'Schroeder'
        },
        {
          ibge: '4217501',
          cityName: 'Seara'
        },
        {
          ibge: '4217550',
          cityName: 'Serra Alta'
        },
        {
          ibge: '4217600',
          cityName: 'Sideropolis'
        },
        {
          ibge: '4217709',
          cityName: 'Sombrio'
        },
        {
          ibge: '4217758',
          cityName: 'Sul Brasil'
        },
        {
          ibge: '4217808',
          cityName: 'Taio'
        },
        {
          ibge: '4217907',
          cityName: 'Tangara'
        },
        {
          ibge: '4217956',
          cityName: 'Tigrinhos'
        },
        {
          ibge: '4218004',
          cityName: 'Tijucas'
        },
        {
          ibge: '4218103',
          cityName: 'Timbe do Sul'
        },
        {
          ibge: '4218202',
          cityName: 'Timbo'
        },
        {
          ibge: '4218251',
          cityName: 'Timbo Grande'
        },
        {
          ibge: '4218301',
          cityName: 'Triªs Barras'
        },
        {
          ibge: '4218350',
          cityName: 'Treviso'
        },
        {
          ibge: '4218400',
          cityName: 'Treze de Maio'
        },
        {
          ibge: '4218509',
          cityName: 'Treze Ti­lias'
        },
        {
          ibge: '4218608',
          cityName: 'Trombudo Central'
        },
        {
          ibge: '4218707',
          cityName: 'Tubarao'
        },
        {
          ibge: '4218756',
          cityName: 'Tunapolis'
        },
        {
          ibge: '4218806',
          cityName: 'Turvo'
        },
        {
          ibge: '4218855',
          cityName: 'Uniao do Oeste'
        },
        {
          ibge: '4218905',
          cityName: 'Urubici'
        },
        {
          ibge: '4218954',
          cityName: 'Urupema'
        },
        {
          ibge: '4219002',
          cityName: 'Urussanga'
        },
        {
          ibge: '4219101',
          cityName: 'Vargeao'
        },
        {
          ibge: '4219150',
          cityName: 'Vargem'
        },
        {
          ibge: '4219176',
          cityName: 'Vargem Bonita'
        },
        {
          ibge: '4219200',
          cityName: 'Vidal Ramos'
        },
        {
          ibge: '4219309',
          cityName: 'Videira'
        },
        {
          ibge: '4219358',
          cityName: 'Vitor Meireles'
        },
        {
          ibge: '4219408',
          cityName: 'Witmarsum'
        },
        {
          ibge: '4219507',
          cityName: 'Xanxeriª'
        },
        {
          ibge: '4219606',
          cityName: 'Xavantina'
        },
        {
          ibge: '4219705',
          cityName: 'Xaxim'
        },
        {
          ibge: '4219853',
          cityName: 'Zortea'
        }
      ]
    },
    {
      abbreviation: 'SP',
      cities: [
        {
          ibge: '3500105',
          cityName: 'Adamantina'
        },
        {
          ibge: '3500204',
          cityName: 'Adolfo'
        },
        {
          ibge: '3500303',
          cityName: 'Aguai­'
        },
        {
          ibge: '3500402',
          cityName: 'Aguas da Prata'
        },
        {
          ibge: '3500501',
          cityName: 'Aguas de Lindoia'
        },
        {
          ibge: '3500550',
          cityName: 'Aguas de Santa Barbara'
        },
        {
          ibge: '3500600',
          cityName: 'Aguas de Sao Pedro'
        },
        {
          ibge: '3500709',
          cityName: 'Agudos'
        },
        {
          ibge: '3500758',
          cityName: 'Alambari'
        },
        {
          ibge: '3500808',
          cityName: 'Alfredo Marcondes'
        },
        {
          ibge: '3500907',
          cityName: 'Altair'
        },
        {
          ibge: '3501004',
          cityName: 'Altinopolis'
        },
        {
          ibge: '3501103',
          cityName: 'Alto Alegre'
        },
        {
          ibge: '3501152',
          cityName: 'Alumi­nio'
        },
        {
          ibge: '3501202',
          cityName: 'Alvares Florence'
        },
        {
          ibge: '3501301',
          cityName: 'Alvares Machado'
        },
        {
          ibge: '3501400',
          cityName: 'Alvaro de Carvalho'
        },
        {
          ibge: '3501509',
          cityName: 'Alvinlandia'
        },
        {
          ibge: '3501608',
          cityName: 'Americana'
        },
        {
          ibge: '3501707',
          cityName: 'Americo Brasiliense'
        },
        {
          ibge: '3501806',
          cityName: 'Americo de Campos'
        },
        {
          ibge: '3501905',
          cityName: 'Amparo'
        },
        {
          ibge: '3502002',
          cityName: 'Analandia'
        },
        {
          ibge: '3502101',
          cityName: 'Andradina'
        },
        {
          ibge: '3502200',
          cityName: 'Angatuba'
        },
        {
          ibge: '3502309',
          cityName: 'Anhembi'
        },
        {
          ibge: '3502408',
          cityName: 'Anhumas'
        },
        {
          ibge: '3502507',
          cityName: 'Aparecida'
        },
        {
          ibge: '3502606',
          cityName: 'Aparecida d\'Oeste'
        },
        {
          ibge: '3502705',
          cityName: 'Apiai­'
        },
        {
          ibge: '3502754',
          cityName: 'Aracariguama'
        },
        {
          ibge: '3502804',
          cityName: 'Aracatuba'
        },
        {
          ibge: '3502903',
          cityName: 'Aracoiaba da Serra'
        },
        {
          ibge: '3503000',
          cityName: 'Aramina'
        },
        {
          ibge: '3503109',
          cityName: 'Arandu'
        },
        {
          ibge: '3503158',
          cityName: 'Arapei­'
        },
        {
          ibge: '3503208',
          cityName: 'Araraquara'
        },
        {
          ibge: '3503307',
          cityName: 'Araras'
        },
        {
          ibge: '3503356',
          cityName: 'Arco-Aris'
        },
        {
          ibge: '3503406',
          cityName: 'Arealva'
        },
        {
          ibge: '3503505',
          cityName: 'Areias'
        },
        {
          ibge: '3503604',
          cityName: 'Areiopolis'
        },
        {
          ibge: '3503703',
          cityName: 'Ariranha'
        },
        {
          ibge: '3503802',
          cityName: 'Artur Nogueira'
        },
        {
          ibge: '3503901',
          cityName: 'Aruja'
        },
        {
          ibge: '3503950',
          cityName: 'Aspasia'
        },
        {
          ibge: '3504008',
          cityName: 'Assis'
        },
        {
          ibge: '3504107',
          cityName: 'Atibaia'
        },
        {
          ibge: '3504206',
          cityName: 'Auriflama'
        },
        {
          ibge: '3504305',
          cityName: 'Avai­'
        },
        {
          ibge: '3504404',
          cityName: 'Avanhandava'
        },
        {
          ibge: '3504503',
          cityName: 'Avare'
        },
        {
          ibge: '3504602',
          cityName: 'Bady Bassitt'
        },
        {
          ibge: '3504701',
          cityName: 'Balbinos'
        },
        {
          ibge: '3504800',
          cityName: 'Balsamo'
        },
        {
          ibge: '3504909',
          cityName: 'Bananal'
        },
        {
          ibge: '3505005',
          cityName: 'Barao de Antonina'
        },
        {
          ibge: '3505104',
          cityName: 'Barbosa'
        },
        {
          ibge: '3505203',
          cityName: 'Bariri'
        },
        {
          ibge: '3505302',
          cityName: 'Barra Bonita'
        },
        {
          ibge: '3505351',
          cityName: 'Barra do Chapeu'
        },
        {
          ibge: '3505401',
          cityName: 'Barra do Turvo'
        },
        {
          ibge: '3505500',
          cityName: 'Barretos'
        },
        {
          ibge: '3505609',
          cityName: 'Barrinha'
        },
        {
          ibge: '3505708',
          cityName: 'Barueri'
        },
        {
          ibge: '3505807',
          cityName: 'Bastos'
        },
        {
          ibge: '3505906',
          cityName: 'Batatais'
        },
        {
          ibge: '3506003',
          cityName: 'Bauru'
        },
        {
          ibge: '3506102',
          cityName: 'Bebedouro'
        },
        {
          ibge: '3506201',
          cityName: 'Bento de Abreu'
        },
        {
          ibge: '3506300',
          cityName: 'Bernardino de Campos'
        },
        {
          ibge: '3506359',
          cityName: 'Bertioga'
        },
        {
          ibge: '3506409',
          cityName: 'Bilac'
        },
        {
          ibge: '3506508',
          cityName: 'Birigui'
        },
        {
          ibge: '3506607',
          cityName: 'Biritiba-Mirim'
        },
        {
          ibge: '3506706',
          cityName: 'Boa Esperanca do Sul'
        },
        {
          ibge: '3506805',
          cityName: 'Bocaina'
        },
        {
          ibge: '3506904',
          cityName: 'Bofete'
        },
        {
          ibge: '3507001',
          cityName: 'Boituva'
        },
        {
          ibge: '3507100',
          cityName: 'Bom Jesus dos Perdiµes'
        },
        {
          ibge: '3507159',
          cityName: 'Bom Sucesso de Itarare'
        },
        {
          ibge: '3507209',
          cityName: 'Bora'
        },
        {
          ibge: '3507308',
          cityName: 'Boraceia'
        },
        {
          ibge: '3507407',
          cityName: 'Borborema'
        },
        {
          ibge: '3507456',
          cityName: 'Borebi'
        },
        {
          ibge: '3507506',
          cityName: 'Botucatu'
        },
        {
          ibge: '3507605',
          cityName: 'Braganca Paulista'
        },
        {
          ibge: '3507704',
          cityName: 'Braiºna'
        },
        {
          ibge: '3507753',
          cityName: 'Brejo Alegre'
        },
        {
          ibge: '3507803',
          cityName: 'Brodowski'
        },
        {
          ibge: '3507902',
          cityName: 'Brotas'
        },
        {
          ibge: '3508009',
          cityName: 'Buri'
        },
        {
          ibge: '3508108',
          cityName: 'Buritama'
        },
        {
          ibge: '3508207',
          cityName: 'Buritizal'
        },
        {
          ibge: '3508306',
          cityName: 'Cabralia Paulista'
        },
        {
          ibge: '3508405',
          cityName: 'Cabreiºva'
        },
        {
          ibge: '3508504',
          cityName: 'Cacapava'
        },
        {
          ibge: '3508603',
          cityName: 'Cachoeira Paulista'
        },
        {
          ibge: '3508702',
          cityName: 'Caconde'
        },
        {
          ibge: '3508801',
          cityName: 'Cafelandia'
        },
        {
          ibge: '3508900',
          cityName: 'Caiabu'
        },
        {
          ibge: '3509007',
          cityName: 'Caieiras'
        },
        {
          ibge: '3509106',
          cityName: 'Caiua'
        },
        {
          ibge: '3509205',
          cityName: 'Cajamar'
        },
        {
          ibge: '3509254',
          cityName: 'Cajati'
        },
        {
          ibge: '3509304',
          cityName: 'Cajobi'
        },
        {
          ibge: '3509403',
          cityName: 'Cajuru'
        },
        {
          ibge: '3509452',
          cityName: 'Campina do Monte Alegre'
        },
        {
          ibge: '3509502',
          cityName: 'Campinas'
        },
        {
          ibge: '3509601',
          cityName: 'Campo Limpo Paulista'
        },
        {
          ibge: '3509700',
          cityName: 'Campos do Jordao'
        },
        {
          ibge: '3509809',
          cityName: 'Campos Novos Paulista'
        },
        {
          ibge: '3509908',
          cityName: 'Cananeia'
        },
        {
          ibge: '3509957',
          cityName: 'Canas'
        },
        {
          ibge: '3510005',
          cityName: 'Candido Mota'
        },
        {
          ibge: '3510104',
          cityName: 'Candido Rodrigues'
        },
        {
          ibge: '3510153',
          cityName: 'Canitar'
        },
        {
          ibge: '3510203',
          cityName: 'Capao Bonito'
        },
        {
          ibge: '3510302',
          cityName: 'Capela do Alto'
        },
        {
          ibge: '3510401',
          cityName: 'Capivari'
        },
        {
          ibge: '3510500',
          cityName: 'Caraguatatuba'
        },
        {
          ibge: '3510609',
          cityName: 'Carapicui­ba'
        },
        {
          ibge: '3510708',
          cityName: 'Cardoso'
        },
        {
          ibge: '3510807',
          cityName: 'Casa Branca'
        },
        {
          ibge: '3510906',
          cityName: 'Cassia dos Coqueiros'
        },
        {
          ibge: '3511003',
          cityName: 'Castilho'
        },
        {
          ibge: '3511102',
          cityName: 'Catanduva'
        },
        {
          ibge: '3511201',
          cityName: 'Catigua'
        },
        {
          ibge: '3511300',
          cityName: 'Cedral'
        },
        {
          ibge: '3511409',
          cityName: 'Cerqueira Cesar'
        },
        {
          ibge: '3511508',
          cityName: 'Cerquilho'
        },
        {
          ibge: '3511607',
          cityName: 'Cesario Lange'
        },
        {
          ibge: '3511706',
          cityName: 'Charqueada'
        },
        {
          ibge: '3557204',
          cityName: 'Chavantes'
        },
        {
          ibge: '3511904',
          cityName: 'Clementina'
        },
        {
          ibge: '3512001',
          cityName: 'Colina'
        },
        {
          ibge: '3512100',
          cityName: 'Colombia'
        },
        {
          ibge: '3512209',
          cityName: 'Conchal'
        },
        {
          ibge: '3512308',
          cityName: 'Conchas'
        },
        {
          ibge: '3512407',
          cityName: 'Cordeiropolis'
        },
        {
          ibge: '3512506',
          cityName: 'Coroados'
        },
        {
          ibge: '3512605',
          cityName: 'Coronel Macedo'
        },
        {
          ibge: '3512704',
          cityName: 'Corumbatai­'
        },
        {
          ibge: '3512803',
          cityName: 'Cosmopolis'
        },
        {
          ibge: '3512902',
          cityName: 'Cosmorama'
        },
        {
          ibge: '3513009',
          cityName: 'Cotia'
        },
        {
          ibge: '3513108',
          cityName: 'Cravinhos'
        },
        {
          ibge: '3513207',
          cityName: 'Cristais Paulista'
        },
        {
          ibge: '3513306',
          cityName: 'Cruzalia'
        },
        {
          ibge: '3513405',
          cityName: 'Cruzeiro'
        },
        {
          ibge: '3513504',
          cityName: 'Cubatao'
        },
        {
          ibge: '3513603',
          cityName: 'Cunha'
        },
        {
          ibge: '3513702',
          cityName: 'Descalvado'
        },
        {
          ibge: '3513801',
          cityName: 'Diadema'
        },
        {
          ibge: '3513850',
          cityName: 'Dirce Reis'
        },
        {
          ibge: '3513900',
          cityName: 'Divinolandia'
        },
        {
          ibge: '3514007',
          cityName: 'Dobrada'
        },
        {
          ibge: '3514106',
          cityName: 'Dois Corregos'
        },
        {
          ibge: '3514205',
          cityName: 'Dolcinopolis'
        },
        {
          ibge: '3514304',
          cityName: 'Dourado'
        },
        {
          ibge: '3514403',
          cityName: 'Dracena'
        },
        {
          ibge: '3514502',
          cityName: 'Duartina'
        },
        {
          ibge: '3514601',
          cityName: 'Dumont'
        },
        {
          ibge: '3514700',
          cityName: 'Echapora'
        },
        {
          ibge: '3514809',
          cityName: 'Eldorado'
        },
        {
          ibge: '3514908',
          cityName: 'Elias Fausto'
        },
        {
          ibge: '3514924',
          cityName: 'Elisiario'
        },
        {
          ibge: '3514957',
          cityName: 'Embaiºba'
        },
        {
          ibge: '3515004',
          cityName: 'Embu das Artes'
        },
        {
          ibge: '3515103',
          cityName: 'Embu-Guacu'
        },
        {
          ibge: '3515129',
          cityName: 'Emilianopolis'
        },
        {
          ibge: '3515152',
          cityName: 'Engenheiro Coelho'
        },
        {
          ibge: '3515186',
          cityName: 'Espi­rito Santo do Pinhal'
        },
        {
          ibge: '3515194',
          cityName: 'Espi­rito Santo do Turvo'
        },
        {
          ibge: '3557303',
          cityName: 'Estiva Gerbi'
        },
        {
          ibge: '3515202',
          cityName: 'Estrela d\'Oeste'
        },
        {
          ibge: '3515301',
          cityName: 'Estrela do Norte'
        },
        {
          ibge: '3515350',
          cityName: 'Euclides da Cunha Paulista'
        },
        {
          ibge: '3515400',
          cityName: 'Fartura'
        },
        {
          ibge: '3515608',
          cityName: 'Fernando Prestes'
        },
        {
          ibge: '3515509',
          cityName: 'Fernandopolis'
        },
        {
          ibge: '3515657',
          cityName: 'Fernao'
        },
        {
          ibge: '3515707',
          cityName: 'Ferraz de Vasconcelos'
        },
        {
          ibge: '3515806',
          cityName: 'Flora Rica'
        },
        {
          ibge: '3515905',
          cityName: 'Floreal'
        },
        {
          ibge: '3516002',
          cityName: 'Florida Paulista'
        },
        {
          ibge: '3516101',
          cityName: 'Flori­nia'
        },
        {
          ibge: '3516200',
          cityName: 'Franca'
        },
        {
          ibge: '3516309',
          cityName: 'Francisco Morato'
        },
        {
          ibge: '3516408',
          cityName: 'Franco da Rocha'
        },
        {
          ibge: '3516507',
          cityName: 'Gabriel Monteiro'
        },
        {
          ibge: '3516606',
          cityName: 'Galia'
        },
        {
          ibge: '3516705',
          cityName: 'Garca'
        },
        {
          ibge: '3516804',
          cityName: 'Gastao Vidigal'
        },
        {
          ibge: '3516853',
          cityName: 'Gaviao Peixoto'
        },
        {
          ibge: '3516903',
          cityName: 'General Salgado'
        },
        {
          ibge: '3517000',
          cityName: 'Getulina'
        },
        {
          ibge: '3517109',
          cityName: 'Glicerio'
        },
        {
          ibge: '3517208',
          cityName: 'Guaicara'
        },
        {
          ibge: '3517307',
          cityName: 'Guaimbiª'
        },
        {
          ibge: '3517406',
          cityName: 'Guai­ra'
        },
        {
          ibge: '3517505',
          cityName: 'Guapiacu'
        },
        {
          ibge: '3517604',
          cityName: 'Guapiara'
        },
        {
          ibge: '3517703',
          cityName: 'Guara'
        },
        {
          ibge: '3517802',
          cityName: 'Guaracai­'
        },
        {
          ibge: '3517901',
          cityName: 'Guaraci'
        },
        {
          ibge: '3518008',
          cityName: 'Guarani d\'Oeste'
        },
        {
          ibge: '3518107',
          cityName: 'Guaranta'
        },
        {
          ibge: '3518206',
          cityName: 'Guararapes'
        },
        {
          ibge: '3518305',
          cityName: 'Guararema'
        },
        {
          ibge: '3518404',
          cityName: 'Guaratingueta'
        },
        {
          ibge: '3518503',
          cityName: 'Guarei­'
        },
        {
          ibge: '3518602',
          cityName: 'Guariba'
        },
        {
          ibge: '3518701',
          cityName: 'Guaruja'
        },
        {
          ibge: '3518800',
          cityName: 'Guarulhos'
        },
        {
          ibge: '3518859',
          cityName: 'Guatapara'
        },
        {
          ibge: '3518909',
          cityName: 'Guzolandia'
        },
        {
          ibge: '3519006',
          cityName: 'Herculandia'
        },
        {
          ibge: '3519055',
          cityName: 'Holambra'
        },
        {
          ibge: '3519071',
          cityName: 'Hortolandia'
        },
        {
          ibge: '3519105',
          cityName: 'Iacanga'
        },
        {
          ibge: '3519204',
          cityName: 'Iacri'
        },
        {
          ibge: '3519253',
          cityName: 'Iaras'
        },
        {
          ibge: '3519303',
          cityName: 'Ibate'
        },
        {
          ibge: '3519402',
          cityName: 'Ibira'
        },
        {
          ibge: '3519501',
          cityName: 'Ibirarema'
        },
        {
          ibge: '3519600',
          cityName: 'Ibitinga'
        },
        {
          ibge: '3519709',
          cityName: 'Ibiiºna'
        },
        {
          ibge: '3519808',
          cityName: 'Icem'
        },
        {
          ibge: '3519907',
          cityName: 'Iepiª'
        },
        {
          ibge: '3520004',
          cityName: 'Igaracu do Tietiª'
        },
        {
          ibge: '3520103',
          cityName: 'Igarapava'
        },
        {
          ibge: '3520202',
          cityName: 'Igarata'
        },
        {
          ibge: '3520301',
          cityName: 'Iguape'
        },
        {
          ibge: '3520426',
          cityName: 'Ilha Comprida'
        },
        {
          ibge: '3520442',
          cityName: 'Ilha Solteira'
        },
        {
          ibge: '3520400',
          cityName: 'Ilhabela'
        },
        {
          ibge: '3520509',
          cityName: 'Indaiatuba'
        },
        {
          ibge: '3520608',
          cityName: 'Indiana'
        },
        {
          ibge: '3520707',
          cityName: 'Indiapora'
        },
        {
          ibge: '3520806',
          cityName: 'Iniºbia Paulista'
        },
        {
          ibge: '3520905',
          cityName: 'Ipaussu'
        },
        {
          ibge: '3521002',
          cityName: 'Ipero'
        },
        {
          ibge: '3521101',
          cityName: 'Ipeiºna'
        },
        {
          ibge: '3521150',
          cityName: 'Ipigua'
        },
        {
          ibge: '3521200',
          cityName: 'Iporanga'
        },
        {
          ibge: '3521309',
          cityName: 'Ipua'
        },
        {
          ibge: '3521408',
          cityName: 'Iracemapolis'
        },
        {
          ibge: '3521507',
          cityName: 'Irapua'
        },
        {
          ibge: '3521606',
          cityName: 'Irapuru'
        },
        {
          ibge: '3521705',
          cityName: 'Itabera'
        },
        {
          ibge: '3521804',
          cityName: 'Itai­'
        },
        {
          ibge: '3521903',
          cityName: 'Itajobi'
        },
        {
          ibge: '3522000',
          cityName: 'Itaju'
        },
        {
          ibge: '3522109',
          cityName: 'Itanhaem'
        },
        {
          ibge: '3522158',
          cityName: 'Itaoca'
        },
        {
          ibge: '3522208',
          cityName: 'Itapecerica da Serra'
        },
        {
          ibge: '3522307',
          cityName: 'Itapetininga'
        },
        {
          ibge: '3522406',
          cityName: 'Itapeva'
        },
        {
          ibge: '3522505',
          cityName: 'Itapevi'
        },
        {
          ibge: '3522604',
          cityName: 'Itapira'
        },
        {
          ibge: '3522653',
          cityName: 'Itapirapua Paulista'
        },
        {
          ibge: '3522703',
          cityName: 'Itapolis'
        },
        {
          ibge: '3522802',
          cityName: 'Itaporanga'
        },
        {
          ibge: '3522901',
          cityName: 'Itapui­'
        },
        {
          ibge: '3523008',
          cityName: 'Itapura'
        },
        {
          ibge: '3523107',
          cityName: 'Itaquaquecetuba'
        },
        {
          ibge: '3523206',
          cityName: 'Itarare'
        },
        {
          ibge: '3523305',
          cityName: 'Itariri'
        },
        {
          ibge: '3523404',
          cityName: 'Itatiba'
        },
        {
          ibge: '3523503',
          cityName: 'Itatinga'
        },
        {
          ibge: '3523602',
          cityName: 'Itirapina'
        },
        {
          ibge: '3523701',
          cityName: 'Itirapua'
        },
        {
          ibge: '3523800',
          cityName: 'Itobi'
        },
        {
          ibge: '3523909',
          cityName: 'Itu'
        },
        {
          ibge: '3524006',
          cityName: 'Itupeva'
        },
        {
          ibge: '3524105',
          cityName: 'Ituverava'
        },
        {
          ibge: '3524204',
          cityName: 'Jaborandi'
        },
        {
          ibge: '3524303',
          cityName: 'Jaboticabal'
        },
        {
          ibge: '3524402',
          cityName: 'Jacarei­'
        },
        {
          ibge: '3524501',
          cityName: 'Jaci'
        },
        {
          ibge: '3524600',
          cityName: 'Jacupiranga'
        },
        {
          ibge: '3524709',
          cityName: 'Jaguariiºna'
        },
        {
          ibge: '3524808',
          cityName: 'Jales'
        },
        {
          ibge: '3524907',
          cityName: 'Jambeiro'
        },
        {
          ibge: '3525003',
          cityName: 'Jandira'
        },
        {
          ibge: '3525102',
          cityName: 'Jardinopolis'
        },
        {
          ibge: '3525201',
          cityName: 'Jarinu'
        },
        {
          ibge: '3525300',
          cityName: 'Jaiº'
        },
        {
          ibge: '3525409',
          cityName: 'Jeriquara'
        },
        {
          ibge: '3525508',
          cityName: 'Joanopolis'
        },
        {
          ibge: '3525607',
          cityName: 'Joao Ramalho'
        },
        {
          ibge: '3525706',
          cityName: 'Jose Bonifacio'
        },
        {
          ibge: '3525805',
          cityName: 'Jiºlio Mesquita'
        },
        {
          ibge: '3525854',
          cityName: 'Jumirim'
        },
        {
          ibge: '3525904',
          cityName: 'Jundiai­'
        },
        {
          ibge: '3526001',
          cityName: 'Junqueiropolis'
        },
        {
          ibge: '3526100',
          cityName: 'Juquia'
        },
        {
          ibge: '3526209',
          cityName: 'Juquitiba'
        },
        {
          ibge: '3526308',
          cityName: 'Lagoinha'
        },
        {
          ibge: '3526407',
          cityName: 'Laranjal Paulista'
        },
        {
          ibge: '3526506',
          cityName: 'Lavi­nia'
        },
        {
          ibge: '3526605',
          cityName: 'Lavrinhas'
        },
        {
          ibge: '3526704',
          cityName: 'Leme'
        },
        {
          ibge: '3526803',
          cityName: 'Lencois Paulista'
        },
        {
          ibge: '3526902',
          cityName: 'Limeira'
        },
        {
          ibge: '3527009',
          cityName: 'Lindoia'
        },
        {
          ibge: '3527108',
          cityName: 'Lins'
        },
        {
          ibge: '3527207',
          cityName: 'Lorena'
        },
        {
          ibge: '3527256',
          cityName: 'Lourdes'
        },
        {
          ibge: '3527306',
          cityName: 'Louveira'
        },
        {
          ibge: '3527405',
          cityName: 'Lucelia'
        },
        {
          ibge: '3527504',
          cityName: 'Lucianopolis'
        },
        {
          ibge: '3527603',
          cityName: 'Lui­s Antonio'
        },
        {
          ibge: '3527702',
          cityName: 'Luiziania'
        },
        {
          ibge: '3527801',
          cityName: 'Lupercio'
        },
        {
          ibge: '3527900',
          cityName: 'Lutecia'
        },
        {
          ibge: '3528007',
          cityName: 'Macatuba'
        },
        {
          ibge: '3528106',
          cityName: 'Macaubal'
        },
        {
          ibge: '3528205',
          cityName: 'Macedonia'
        },
        {
          ibge: '3528304',
          cityName: 'Magda'
        },
        {
          ibge: '3528403',
          cityName: 'Mairinque'
        },
        {
          ibge: '3528502',
          cityName: 'Mairipora'
        },
        {
          ibge: '3528601',
          cityName: 'Manduri'
        },
        {
          ibge: '3528700',
          cityName: 'Maraba Paulista'
        },
        {
          ibge: '3528809',
          cityName: 'Maracai­'
        },
        {
          ibge: '3528858',
          cityName: 'Marapoama'
        },
        {
          ibge: '3528908',
          cityName: 'Mariapolis'
        },
        {
          ibge: '3529005',
          cityName: 'Mari­lia'
        },
        {
          ibge: '3529104',
          cityName: 'Marinopolis'
        },
        {
          ibge: '3529203',
          cityName: 'Martinopolis'
        },
        {
          ibge: '3529302',
          cityName: 'Matao'
        },
        {
          ibge: '3529401',
          cityName: 'Maua'
        },
        {
          ibge: '3529500',
          cityName: 'Mendonca'
        },
        {
          ibge: '3529609',
          cityName: 'Meridiano'
        },
        {
          ibge: '3529658',
          cityName: 'Mesopolis'
        },
        {
          ibge: '3529708',
          cityName: 'Miguelopolis'
        },
        {
          ibge: '3529807',
          cityName: 'Mineiros do Tietiª'
        },
        {
          ibge: '3530003',
          cityName: 'Mira Estrela'
        },
        {
          ibge: '3529906',
          cityName: 'Miracatu'
        },
        {
          ibge: '3530102',
          cityName: 'Mirandopolis'
        },
        {
          ibge: '3530201',
          cityName: 'Mirante do Paranapanema'
        },
        {
          ibge: '3530300',
          cityName: 'Mirassol'
        },
        {
          ibge: '3530409',
          cityName: 'Mirassolandia'
        },
        {
          ibge: '3530508',
          cityName: 'Mococa'
        },
        {
          ibge: '3530607',
          cityName: 'Mogi das Cruzes'
        },
        {
          ibge: '3530706',
          cityName: 'Mogi Guacu'
        },
        {
          ibge: '3530805',
          cityName: 'Mogi Mirim'
        },
        {
          ibge: '3530904',
          cityName: 'Mombuca'
        },
        {
          ibge: '3531001',
          cityName: 'Monciµes'
        },
        {
          ibge: '3531100',
          cityName: 'Mongagua'
        },
        {
          ibge: '3531209',
          cityName: 'Monte Alegre do Sul'
        },
        {
          ibge: '3531308',
          cityName: 'Monte Alto'
        },
        {
          ibge: '3531407',
          cityName: 'Monte Aprazi­vel'
        },
        {
          ibge: '3531506',
          cityName: 'Monte Azul Paulista'
        },
        {
          ibge: '3531605',
          cityName: 'Monte Castelo'
        },
        {
          ibge: '3531803',
          cityName: 'Monte Mor'
        },
        {
          ibge: '3531704',
          cityName: 'Monteiro Lobato'
        },
        {
          ibge: '3531902',
          cityName: 'Morro Agudo'
        },
        {
          ibge: '3532009',
          cityName: 'Morungaba'
        },
        {
          ibge: '3532058',
          cityName: 'Motuca'
        },
        {
          ibge: '3532108',
          cityName: 'Murutinga do Sul'
        },
        {
          ibge: '3532157',
          cityName: 'Nantes'
        },
        {
          ibge: '3532207',
          cityName: 'Narandiba'
        },
        {
          ibge: '3532306',
          cityName: 'Natividade da Serra'
        },
        {
          ibge: '3532405',
          cityName: 'Nazare Paulista'
        },
        {
          ibge: '3532504',
          cityName: 'Neves Paulista'
        },
        {
          ibge: '3532603',
          cityName: 'Nhandeara'
        },
        {
          ibge: '3532702',
          cityName: 'Nipoa'
        },
        {
          ibge: '3532801',
          cityName: 'Nova Alianca'
        },
        {
          ibge: '3532827',
          cityName: 'Nova Campina'
        },
        {
          ibge: '3532843',
          cityName: 'Nova Canaa Paulista'
        },
        {
          ibge: '3532868',
          cityName: 'Nova Castilho'
        },
        {
          ibge: '3532900',
          cityName: 'Nova Europa'
        },
        {
          ibge: '3533007',
          cityName: 'Nova Granada'
        },
        {
          ibge: '3533106',
          cityName: 'Nova Guataporanga'
        },
        {
          ibge: '3533205',
          cityName: 'Nova Independiªncia'
        },
        {
          ibge: '3533304',
          cityName: 'Nova Luzitania'
        },
        {
          ibge: '3533403',
          cityName: 'Nova Odessa'
        },
        {
          ibge: '3533254',
          cityName: 'Novais'
        },
        {
          ibge: '3533502',
          cityName: 'Novo Horizonte'
        },
        {
          ibge: '3533601',
          cityName: 'Nuporanga'
        },
        {
          ibge: '3533700',
          cityName: 'Ocaucu'
        },
        {
          ibge: '3533809',
          cityName: 'i“leo'
        },
        {
          ibge: '3533908',
          cityName: 'Oli­mpia'
        },
        {
          ibge: '3534005',
          cityName: 'Onda Verde'
        },
        {
          ibge: '3534104',
          cityName: 'Oriente'
        },
        {
          ibge: '3534203',
          cityName: 'Orindiiºva'
        },
        {
          ibge: '3534302',
          cityName: 'Orlandia'
        },
        {
          ibge: '3534401',
          cityName: 'Osasco'
        },
        {
          ibge: '3534500',
          cityName: 'Oscar Bressane'
        },
        {
          ibge: '3534609',
          cityName: 'Osvaldo Cruz'
        },
        {
          ibge: '3534708',
          cityName: 'Ourinhos'
        },
        {
          ibge: '3534807',
          cityName: 'Ouro Verde'
        },
        {
          ibge: '3534757',
          cityName: 'Ouroeste'
        },
        {
          ibge: '3534906',
          cityName: 'Pacaembu'
        },
        {
          ibge: '3535002',
          cityName: 'Palestina'
        },
        {
          ibge: '3535101',
          cityName: 'Palmares Paulista'
        },
        {
          ibge: '3535200',
          cityName: 'Palmeira d\'Oeste'
        },
        {
          ibge: '3535309',
          cityName: 'Palmital'
        },
        {
          ibge: '3535408',
          cityName: 'Panorama'
        },
        {
          ibge: '3535507',
          cityName: 'Paraguacu Paulista'
        },
        {
          ibge: '3535606',
          cityName: 'Paraibuna'
        },
        {
          ibge: '3535705',
          cityName: 'Parai­so'
        },
        {
          ibge: '3535804',
          cityName: 'Paranapanema'
        },
        {
          ibge: '3535903',
          cityName: 'Paranapua'
        },
        {
          ibge: '3536000',
          cityName: 'Parapua'
        },
        {
          ibge: '3536109',
          cityName: 'Pardinho'
        },
        {
          ibge: '3536208',
          cityName: 'Pariquera-Acu'
        },
        {
          ibge: '3536257',
          cityName: 'Parisi'
        },
        {
          ibge: '3536307',
          cityName: 'Patroci­nio Paulista'
        },
        {
          ibge: '3536406',
          cityName: 'Pauliceia'
        },
        {
          ibge: '3536505',
          cityName: 'Pauli­nia'
        },
        {
          ibge: '3536570',
          cityName: 'Paulistania'
        },
        {
          ibge: '3536604',
          cityName: 'Paulo de Faria'
        },
        {
          ibge: '3536703',
          cityName: 'Pederneiras'
        },
        {
          ibge: '3536802',
          cityName: 'Pedra Bela'
        },
        {
          ibge: '3536901',
          cityName: 'Pedranopolis'
        },
        {
          ibge: '3537008',
          cityName: 'Pedregulho'
        },
        {
          ibge: '3537107',
          cityName: 'Pedreira'
        },
        {
          ibge: '3537156',
          cityName: 'Pedrinhas Paulista'
        },
        {
          ibge: '3537206',
          cityName: 'Pedro de Toledo'
        },
        {
          ibge: '3537305',
          cityName: 'Penapolis'
        },
        {
          ibge: '3537404',
          cityName: 'Pereira Barreto'
        },
        {
          ibge: '3537503',
          cityName: 'Pereiras'
        },
        {
          ibge: '3537602',
          cityName: 'Perui­be'
        },
        {
          ibge: '3537701',
          cityName: 'Piacatu'
        },
        {
          ibge: '3537800',
          cityName: 'Piedade'
        },
        {
          ibge: '3537909',
          cityName: 'Pilar do Sul'
        },
        {
          ibge: '3538006',
          cityName: 'Pindamonhangaba'
        },
        {
          ibge: '3538105',
          cityName: 'Pindorama'
        },
        {
          ibge: '3538204',
          cityName: 'Pinhalzinho'
        },
        {
          ibge: '3538303',
          cityName: 'Piquerobi'
        },
        {
          ibge: '3538501',
          cityName: 'Piquete'
        },
        {
          ibge: '3538600',
          cityName: 'Piracaia'
        },
        {
          ibge: '3538709',
          cityName: 'Piracicaba'
        },
        {
          ibge: '3538808',
          cityName: 'Piraju'
        },
        {
          ibge: '3538907',
          cityName: 'Pirajui­'
        },
        {
          ibge: '3539004',
          cityName: 'Pirangi'
        },
        {
          ibge: '3539103',
          cityName: 'Pirapora do Bom Jesus'
        },
        {
          ibge: '3539202',
          cityName: 'Pirapozinho'
        },
        {
          ibge: '3539301',
          cityName: 'Pirassununga'
        },
        {
          ibge: '3539400',
          cityName: 'Piratininga'
        },
        {
          ibge: '3539509',
          cityName: 'Pitangueiras'
        },
        {
          ibge: '3539608',
          cityName: 'Planalto'
        },
        {
          ibge: '3539707',
          cityName: 'Platina'
        },
        {
          ibge: '3539806',
          cityName: 'Poa'
        },
        {
          ibge: '3539905',
          cityName: 'Poloni'
        },
        {
          ibge: '3540002',
          cityName: 'Pompeia'
        },
        {
          ibge: '3540101',
          cityName: 'Pongai­'
        },
        {
          ibge: '3540200',
          cityName: 'Pontal'
        },
        {
          ibge: '3540259',
          cityName: 'Pontalinda'
        },
        {
          ibge: '3540309',
          cityName: 'Pontes Gestal'
        },
        {
          ibge: '3540408',
          cityName: 'Populina'
        },
        {
          ibge: '3540507',
          cityName: 'Porangaba'
        },
        {
          ibge: '3540606',
          cityName: 'Porto Feliz'
        },
        {
          ibge: '3540705',
          cityName: 'Porto Ferreira'
        },
        {
          ibge: '3540754',
          cityName: 'Potim'
        },
        {
          ibge: '3540804',
          cityName: 'Potirendaba'
        },
        {
          ibge: '3540853',
          cityName: 'Pracinha'
        },
        {
          ibge: '3540903',
          cityName: 'Pradopolis'
        },
        {
          ibge: '3541000',
          cityName: 'Praia Grande'
        },
        {
          ibge: '3541059',
          cityName: 'Pratania'
        },
        {
          ibge: '3541109',
          cityName: 'Presidente Alves'
        },
        {
          ibge: '3541208',
          cityName: 'Presidente Bernardes'
        },
        {
          ibge: '3541307',
          cityName: 'Presidente Epitacio'
        },
        {
          ibge: '3541406',
          cityName: 'Presidente Prudente'
        },
        {
          ibge: '3541505',
          cityName: 'Presidente Venceslau'
        },
        {
          ibge: '3541604',
          cityName: 'Promissao'
        },
        {
          ibge: '3541653',
          cityName: 'Quadra'
        },
        {
          ibge: '3541703',
          cityName: 'Quata'
        },
        {
          ibge: '3541802',
          cityName: 'Queiroz'
        },
        {
          ibge: '3541901',
          cityName: 'Queluz'
        },
        {
          ibge: '3542008',
          cityName: 'Quintana'
        },
        {
          ibge: '3542107',
          cityName: 'Rafard'
        },
        {
          ibge: '3542206',
          cityName: 'Rancharia'
        },
        {
          ibge: '3542305',
          cityName: 'Redencao da Serra'
        },
        {
          ibge: '3542404',
          cityName: 'Regente Feijo'
        },
        {
          ibge: '3542503',
          cityName: 'Reginopolis'
        },
        {
          ibge: '3542602',
          cityName: 'Registro'
        },
        {
          ibge: '3542701',
          cityName: 'Restinga'
        },
        {
          ibge: '3542800',
          cityName: 'Ribeira'
        },
        {
          ibge: '3542909',
          cityName: 'Ribeirao Bonito'
        },
        {
          ibge: '3543006',
          cityName: 'Ribeirao Branco'
        },
        {
          ibge: '3543105',
          cityName: 'Ribeirao Corrente'
        },
        {
          ibge: '3543204',
          cityName: 'Ribeirao do Sul'
        },
        {
          ibge: '3543238',
          cityName: 'Ribeirao dos Andios'
        },
        {
          ibge: '3543253',
          cityName: 'Ribeirao Grande'
        },
        {
          ibge: '3543303',
          cityName: 'Ribeirao Pires'
        },
        {
          ibge: '3543402',
          cityName: 'Ribeirao Preto'
        },
        {
          ibge: '3543600',
          cityName: 'Rifaina'
        },
        {
          ibge: '3543709',
          cityName: 'Rincao'
        },
        {
          ibge: '3543808',
          cityName: 'Rinopolis'
        },
        {
          ibge: '3543907',
          cityName: 'Rio Claro'
        },
        {
          ibge: '3544004',
          cityName: 'Rio das Pedras'
        },
        {
          ibge: '3544103',
          cityName: 'Rio Grande da Serra'
        },
        {
          ibge: '3544202',
          cityName: 'Riolandia'
        },
        {
          ibge: '3543501',
          cityName: 'Riversul'
        },
        {
          ibge: '3544251',
          cityName: 'Rosana'
        },
        {
          ibge: '3544301',
          cityName: 'Roseira'
        },
        {
          ibge: '3544400',
          cityName: 'Rubiacea'
        },
        {
          ibge: '3544509',
          cityName: 'Rubineia'
        },
        {
          ibge: '3544608',
          cityName: 'Sabino'
        },
        {
          ibge: '3544707',
          cityName: 'Sagres'
        },
        {
          ibge: '3544806',
          cityName: 'Sales'
        },
        {
          ibge: '3544905',
          cityName: 'Sales Oliveira'
        },
        {
          ibge: '3545001',
          cityName: 'Salesopolis'
        },
        {
          ibge: '3545100',
          cityName: 'Salmourao'
        },
        {
          ibge: '3545159',
          cityName: 'Saltinho'
        },
        {
          ibge: '3545209',
          cityName: 'Salto'
        },
        {
          ibge: '3545308',
          cityName: 'Salto de Pirapora'
        },
        {
          ibge: '3545407',
          cityName: 'Salto Grande'
        },
        {
          ibge: '3545506',
          cityName: 'Sandovalina'
        },
        {
          ibge: '3545605',
          cityName: 'Santa Adelia'
        },
        {
          ibge: '3545704',
          cityName: 'Santa Albertina'
        },
        {
          ibge: '3545803',
          cityName: 'Santa Barbara d\'Oeste'
        },
        {
          ibge: '3546009',
          cityName: 'Santa Branca'
        },
        {
          ibge: '3546108',
          cityName: 'Santa Clara d\'Oeste'
        },
        {
          ibge: '3546207',
          cityName: 'Santa Cruz da Conceicao'
        },
        {
          ibge: '3546256',
          cityName: 'Santa Cruz da Esperanca'
        },
        {
          ibge: '3546306',
          cityName: 'Santa Cruz das Palmeiras'
        },
        {
          ibge: '3546405',
          cityName: 'Santa Cruz do Rio Pardo'
        },
        {
          ibge: '3546504',
          cityName: 'Santa Ernestina'
        },
        {
          ibge: '3546603',
          cityName: 'Santa Fe do Sul'
        },
        {
          ibge: '3546702',
          cityName: 'Santa Gertrudes'
        },
        {
          ibge: '3546801',
          cityName: 'Santa Isabel'
        },
        {
          ibge: '3546900',
          cityName: 'Santa Liºcia'
        },
        {
          ibge: '3547007',
          cityName: 'Santa Maria da Serra'
        },
        {
          ibge: '3547106',
          cityName: 'Santa Mercedes'
        },
        {
          ibge: '3547403',
          cityName: 'Santa Rita d\'Oeste'
        },
        {
          ibge: '3547502',
          cityName: 'Santa Rita do Passa Quatro'
        },
        {
          ibge: '3547601',
          cityName: 'Santa Rosa de Viterbo'
        },
        {
          ibge: '3547650',
          cityName: 'Santa Salete'
        },
        {
          ibge: '3547205',
          cityName: 'Santana da Ponte Pensa'
        },
        {
          ibge: '3547304',
          cityName: 'Santana de Parnai­ba'
        },
        {
          ibge: '3547700',
          cityName: 'Santo Anastacio'
        },
        {
          ibge: '3547809',
          cityName: 'Santo Andre'
        },
        {
          ibge: '3547908',
          cityName: 'Santo Antonio da Alegria'
        },
        {
          ibge: '3548005',
          cityName: 'Santo Antonio de Posse'
        },
        {
          ibge: '3548054',
          cityName: 'Santo Antonio do Aracangua'
        },
        {
          ibge: '3548104',
          cityName: 'Santo Antonio do Jardim'
        },
        {
          ibge: '3548203',
          cityName: 'Santo Antonio do Pinhal'
        },
        {
          ibge: '3548302',
          cityName: 'Santo Expedito'
        },
        {
          ibge: '3548401',
          cityName: 'Santopolis do Aguapei­'
        },
        {
          ibge: '3548500',
          cityName: 'Santos'
        },
        {
          ibge: '3548609',
          cityName: 'Sao Bento do Sapucai­'
        },
        {
          ibge: '3548708',
          cityName: 'Sao Bernardo do Campo'
        },
        {
          ibge: '3548807',
          cityName: 'Sao Caetano do Sul'
        },
        {
          ibge: '3548906',
          cityName: 'Sao Carlos'
        },
        {
          ibge: '3549003',
          cityName: 'Sao Francisco'
        },
        {
          ibge: '3549102',
          cityName: 'Sao Joao da Boa Vista'
        },
        {
          ibge: '3549201',
          cityName: 'Sao Joao das Duas Pontes'
        },
        {
          ibge: '3549250',
          cityName: 'Sao Joao de Iracema'
        },
        {
          ibge: '3549300',
          cityName: 'Sao Joao do Pau d\'Alho'
        },
        {
          ibge: '3549409',
          cityName: 'Sao Joaquim da Barra'
        },
        {
          ibge: '3549508',
          cityName: 'Sao Jose da Bela Vista'
        },
        {
          ibge: '3549607',
          cityName: 'Sao Jose do Barreiro'
        },
        {
          ibge: '3549706',
          cityName: 'Sao Jose do Rio Pardo'
        },
        {
          ibge: '3549805',
          cityName: 'Sao Jose do Rio Preto'
        },
        {
          ibge: '3549904',
          cityName: 'Sao Jose dos Campos'
        },
        {
          ibge: '3549953',
          cityName: 'Sao Lourenco da Serra'
        },
        {
          ibge: '3550001',
          cityName: 'Sao Luiz do Paraitinga'
        },
        {
          ibge: '3550100',
          cityName: 'Sao Manuel'
        },
        {
          ibge: '3550209',
          cityName: 'Sao Miguel Arcanjo'
        },
        {
          ibge: '3550308',
          cityName: 'Sao Paulo'
        },
        {
          ibge: '3550407',
          cityName: 'Sao Pedro'
        },
        {
          ibge: '3550506',
          cityName: 'Sao Pedro do Turvo'
        },
        {
          ibge: '3550605',
          cityName: 'Sao Roque'
        },
        {
          ibge: '3550704',
          cityName: 'Sao Sebastiao'
        },
        {
          ibge: '3550803',
          cityName: 'Sao Sebastiao da Grama'
        },
        {
          ibge: '3550902',
          cityName: 'Sao Simao'
        },
        {
          ibge: '3551009',
          cityName: 'Sao Vicente'
        },
        {
          ibge: '3551108',
          cityName: 'Sarapui­'
        },
        {
          ibge: '3551207',
          cityName: 'Sarutaia'
        },
        {
          ibge: '3551306',
          cityName: 'Sebastianopolis do Sul'
        },
        {
          ibge: '3551405',
          cityName: 'Serra Azul'
        },
        {
          ibge: '3551603',
          cityName: 'Serra Negra'
        },
        {
          ibge: '3551504',
          cityName: 'Serrana'
        },
        {
          ibge: '3551702',
          cityName: 'Sertaozinho'
        },
        {
          ibge: '3551801',
          cityName: 'Sete Barras'
        },
        {
          ibge: '3551900',
          cityName: 'Severi­nia'
        },
        {
          ibge: '3552007',
          cityName: 'Silveiras'
        },
        {
          ibge: '3552106',
          cityName: 'Socorro'
        },
        {
          ibge: '3552205',
          cityName: 'Sorocaba'
        },
        {
          ibge: '3552304',
          cityName: 'Sud Mennucci'
        },
        {
          ibge: '3552403',
          cityName: 'Sumare'
        },
        {
          ibge: '3552551',
          cityName: 'Suzanapolis'
        },
        {
          ibge: '3552502',
          cityName: 'Suzano'
        },
        {
          ibge: '3552601',
          cityName: 'Tabapua'
        },
        {
          ibge: '3552700',
          cityName: 'Tabatinga'
        },
        {
          ibge: '3552809',
          cityName: 'Taboao da Serra'
        },
        {
          ibge: '3552908',
          cityName: 'Taciba'
        },
        {
          ibge: '3553005',
          cityName: 'Taguai­'
        },
        {
          ibge: '3553104',
          cityName: 'Taiacu'
        },
        {
          ibge: '3553203',
          cityName: 'Taiiºva'
        },
        {
          ibge: '3553302',
          cityName: 'Tambaiº'
        },
        {
          ibge: '3553401',
          cityName: 'Tanabi'
        },
        {
          ibge: '3553500',
          cityName: 'Tapirai­'
        },
        {
          ibge: '3553609',
          cityName: 'Tapiratiba'
        },
        {
          ibge: '3553658',
          cityName: 'Taquaral'
        },
        {
          ibge: '3553708',
          cityName: 'Taquaritinga'
        },
        {
          ibge: '3553807',
          cityName: 'Taquarituba'
        },
        {
          ibge: '3553856',
          cityName: 'Taquarivai­'
        },
        {
          ibge: '3553906',
          cityName: 'Tarabai'
        },
        {
          ibge: '3553955',
          cityName: 'Taruma'
        },
        {
          ibge: '3554003',
          cityName: 'Tatui­'
        },
        {
          ibge: '3554102',
          cityName: 'Taubate'
        },
        {
          ibge: '3554201',
          cityName: 'Tejupa'
        },
        {
          ibge: '3554300',
          cityName: 'Teodoro Sampaio'
        },
        {
          ibge: '3554409',
          cityName: 'Terra Roxa'
        },
        {
          ibge: '3554508',
          cityName: 'Tietiª'
        },
        {
          ibge: '3554607',
          cityName: 'Timburi'
        },
        {
          ibge: '3554656',
          cityName: 'Torre de Pedra'
        },
        {
          ibge: '3554706',
          cityName: 'Torrinha'
        },
        {
          ibge: '3554755',
          cityName: 'Trabiju'
        },
        {
          ibge: '3554805',
          cityName: 'Tremembe'
        },
        {
          ibge: '3554904',
          cityName: 'Triªs Fronteiras'
        },
        {
          ibge: '3554953',
          cityName: 'Tuiuti'
        },
        {
          ibge: '3555000',
          cityName: 'Tupa'
        },
        {
          ibge: '3555109',
          cityName: 'Tupi Paulista'
        },
        {
          ibge: '3555208',
          cityName: 'Turiiºba'
        },
        {
          ibge: '3555307',
          cityName: 'Turmalina'
        },
        {
          ibge: '3555356',
          cityName: 'Ubarana'
        },
        {
          ibge: '3555406',
          cityName: 'Ubatuba'
        },
        {
          ibge: '3555505',
          cityName: 'Ubirajara'
        },
        {
          ibge: '3555604',
          cityName: 'Uchoa'
        },
        {
          ibge: '3555703',
          cityName: 'Uniao Paulista'
        },
        {
          ibge: '3555802',
          cityName: 'Urania'
        },
        {
          ibge: '3555901',
          cityName: 'Uru'
        },
        {
          ibge: '3556008',
          cityName: 'Urupiªs'
        },
        {
          ibge: '3556107',
          cityName: 'Valentim Gentil'
        },
        {
          ibge: '3556206',
          cityName: 'Valinhos'
        },
        {
          ibge: '3556305',
          cityName: 'Valparai­so'
        },
        {
          ibge: '3556354',
          cityName: 'Vargem'
        },
        {
          ibge: '3556404',
          cityName: 'Vargem Grande do Sul'
        },
        {
          ibge: '3556453',
          cityName: 'Vargem Grande Paulista'
        },
        {
          ibge: '3556503',
          cityName: 'Varzea Paulista'
        },
        {
          ibge: '3556602',
          cityName: 'Vera Cruz'
        },
        {
          ibge: '3556701',
          cityName: 'Vinhedo'
        },
        {
          ibge: '3556800',
          cityName: 'Viradouro'
        },
        {
          ibge: '3556909',
          cityName: 'Vista Alegre do Alto'
        },
        {
          ibge: '3556958',
          cityName: 'Vitoria Brasil'
        },
        {
          ibge: '3557006',
          cityName: 'Votorantim'
        },
        {
          ibge: '3557105',
          cityName: 'Votuporanga'
        },
        {
          ibge: '3557154',
          cityName: 'Zacarias'
        }
      ]
    },
    {
      abbreviation: 'TO',
      cities: [
        {
          ibge: '1700251',
          cityName: 'Abreulandia'
        },
        {
          ibge: '1700301',
          cityName: 'Aguiarnopolis'
        },
        {
          ibge: '1700350',
          cityName: 'Alianca do Tocantins'
        },
        {
          ibge: '1700400',
          cityName: 'Almas'
        },
        {
          ibge: '1700707',
          cityName: 'Alvorada'
        },
        {
          ibge: '1701002',
          cityName: 'Ananas'
        },
        {
          ibge: '1701051',
          cityName: 'Angico'
        },
        {
          ibge: '1701101',
          cityName: 'Aparecida do Rio Negro'
        },
        {
          ibge: '1701309',
          cityName: 'Aragominas'
        },
        {
          ibge: '1701903',
          cityName: 'Araguacema'
        },
        {
          ibge: '1702000',
          cityName: 'Araguacu'
        },
        {
          ibge: '1702109',
          cityName: 'Araguai­na'
        },
        {
          ibge: '1702158',
          cityName: 'Araguana'
        },
        {
          ibge: '1702208',
          cityName: 'Araguatins'
        },
        {
          ibge: '1702307',
          cityName: 'Arapoema'
        },
        {
          ibge: '1702406',
          cityName: 'Arraias'
        },
        {
          ibge: '1702554',
          cityName: 'Augustinopolis'
        },
        {
          ibge: '1702703',
          cityName: 'Aurora do Tocantins'
        },
        {
          ibge: '1702901',
          cityName: 'Axixa do Tocantins'
        },
        {
          ibge: '1703008',
          cityName: 'Babaculandia'
        },
        {
          ibge: '1703057',
          cityName: 'Bandeirantes do Tocantins'
        },
        {
          ibge: '1703073',
          cityName: 'Barra do Ouro'
        },
        {
          ibge: '1703107',
          cityName: 'Barrolandia'
        },
        {
          ibge: '1703206',
          cityName: 'Bernardo Sayao'
        },
        {
          ibge: '1703305',
          cityName: 'Bom Jesus do Tocantins'
        },
        {
          ibge: '1703602',
          cityName: 'Brasilandia do Tocantins'
        },
        {
          ibge: '1703701',
          cityName: 'Brejinho de Nazare'
        },
        {
          ibge: '1703800',
          cityName: 'Buriti do Tocantins'
        },
        {
          ibge: '1703826',
          cityName: 'Cachoeirinha'
        },
        {
          ibge: '1703842',
          cityName: 'Campos Lindos'
        },
        {
          ibge: '1703867',
          cityName: 'Cariri do Tocantins'
        },
        {
          ibge: '1703883',
          cityName: 'Carmolandia'
        },
        {
          ibge: '1703891',
          cityName: 'Carrasco Bonito'
        },
        {
          ibge: '1703909',
          cityName: 'Caseara'
        },
        {
          ibge: '1704105',
          cityName: 'Centenario'
        },
        {
          ibge: '1705102',
          cityName: 'Chapada da Natividade'
        },
        {
          ibge: '1704600',
          cityName: 'Chapada de Areia'
        },
        {
          ibge: '1705508',
          cityName: 'Colinas do Tocantins'
        },
        {
          ibge: '1716703',
          cityName: 'Colmeia'
        },
        {
          ibge: '1705557',
          cityName: 'Combinado'
        },
        {
          ibge: '1705607',
          cityName: 'Conceicao do Tocantins'
        },
        {
          ibge: '1706001',
          cityName: 'Couto Magalhaes'
        },
        {
          ibge: '1706100',
          cityName: 'Cristalandia'
        },
        {
          ibge: '1706258',
          cityName: 'Crixas do Tocantins'
        },
        {
          ibge: '1706506',
          cityName: 'Darcinopolis'
        },
        {
          ibge: '1707009',
          cityName: 'Dianopolis'
        },
        {
          ibge: '1707108',
          cityName: 'Divinopolis do Tocantins'
        },
        {
          ibge: '1707207',
          cityName: 'Dois Irmaos do Tocantins'
        },
        {
          ibge: '1707306',
          cityName: 'Duere'
        },
        {
          ibge: '1707405',
          cityName: 'Esperantina'
        },
        {
          ibge: '1707553',
          cityName: 'Fatima'
        },
        {
          ibge: '1707652',
          cityName: 'Figueiropolis'
        },
        {
          ibge: '1707702',
          cityName: 'Filadelfia'
        },
        {
          ibge: '1708205',
          cityName: 'Formoso do Araguaia'
        },
        {
          ibge: '1708254',
          cityName: 'Fortaleza do Tabocao'
        },
        {
          ibge: '1708304',
          cityName: 'Goianorte'
        },
        {
          ibge: '1709005',
          cityName: 'Goiatins'
        },
        {
          ibge: '1709302',
          cityName: 'Guarai­'
        },
        {
          ibge: '1709500',
          cityName: 'Gurupi'
        },
        {
          ibge: '1709807',
          cityName: 'Ipueiras'
        },
        {
          ibge: '1710508',
          cityName: 'Itacaja'
        },
        {
          ibge: '1710706',
          cityName: 'Itaguatins'
        },
        {
          ibge: '1710904',
          cityName: 'Itapiratins'
        },
        {
          ibge: '1711100',
          cityName: 'Itapora do Tocantins'
        },
        {
          ibge: '1711506',
          cityName: 'Jaiº do Tocantins'
        },
        {
          ibge: '1711803',
          cityName: 'Juarina'
        },
        {
          ibge: '1711902',
          cityName: 'Lagoa da Confusao'
        },
        {
          ibge: '1711951',
          cityName: 'Lagoa do Tocantins'
        },
        {
          ibge: '1712009',
          cityName: 'Lajeado'
        },
        {
          ibge: '1712157',
          cityName: 'Lavandeira'
        },
        {
          ibge: '1712405',
          cityName: 'Lizarda'
        },
        {
          ibge: '1712454',
          cityName: 'Luzinopolis'
        },
        {
          ibge: '1712504',
          cityName: 'Marianopolis do Tocantins'
        },
        {
          ibge: '1712702',
          cityName: 'Mateiros'
        },
        {
          ibge: '1712801',
          cityName: 'Maurilandia do Tocantins'
        },
        {
          ibge: '1713205',
          cityName: 'Miracema do Tocantins'
        },
        {
          ibge: '1713304',
          cityName: 'Miranorte'
        },
        {
          ibge: '1713601',
          cityName: 'Monte do Carmo'
        },
        {
          ibge: '1713700',
          cityName: 'Monte Santo do Tocantins'
        },
        {
          ibge: '1713957',
          cityName: 'Muricilandia'
        },
        {
          ibge: '1714203',
          cityName: 'Natividade'
        },
        {
          ibge: '1714302',
          cityName: 'Nazare'
        },
        {
          ibge: '1714880',
          cityName: 'Nova Olinda'
        },
        {
          ibge: '1715002',
          cityName: 'Nova Rosalandia'
        },
        {
          ibge: '1715101',
          cityName: 'Novo Acordo'
        },
        {
          ibge: '1715150',
          cityName: 'Novo Alegre'
        },
        {
          ibge: '1715259',
          cityName: 'Novo Jardim'
        },
        {
          ibge: '1715507',
          cityName: 'Oliveira de Fatima'
        },
        {
          ibge: '1721000',
          cityName: 'Palmas'
        },
        {
          ibge: '1715705',
          cityName: 'Palmeirante'
        },
        {
          ibge: '1713809',
          cityName: 'Palmeiras do Tocantins'
        },
        {
          ibge: '1715754',
          cityName: 'Palmeiropolis'
        },
        {
          ibge: '1716109',
          cityName: 'Parai­so do Tocantins'
        },
        {
          ibge: '1716208',
          cityName: 'Parana'
        },
        {
          ibge: '1716307',
          cityName: 'Pau D\'Arco'
        },
        {
          ibge: '1716505',
          cityName: 'Pedro Afonso'
        },
        {
          ibge: '1716604',
          cityName: 'Peixe'
        },
        {
          ibge: '1716653',
          cityName: 'Pequizeiro'
        },
        {
          ibge: '1717008',
          cityName: 'Pindorama do Tocantins'
        },
        {
          ibge: '1717206',
          cityName: 'Piraquiª'
        },
        {
          ibge: '1717503',
          cityName: 'Pium'
        },
        {
          ibge: '1717800',
          cityName: 'Ponte Alta do Bom Jesus'
        },
        {
          ibge: '1717909',
          cityName: 'Ponte Alta do Tocantins'
        },
        {
          ibge: '1718006',
          cityName: 'Porto Alegre do Tocantins'
        },
        {
          ibge: '1718204',
          cityName: 'Porto Nacional'
        },
        {
          ibge: '1718303',
          cityName: 'Praia Norte'
        },
        {
          ibge: '1718402',
          cityName: 'Presidente Kennedy'
        },
        {
          ibge: '1718451',
          cityName: 'Pugmil'
        },
        {
          ibge: '1718501',
          cityName: 'Recursolandia'
        },
        {
          ibge: '1718550',
          cityName: 'Riachinho'
        },
        {
          ibge: '1718659',
          cityName: 'Rio da Conceicao'
        },
        {
          ibge: '1718709',
          cityName: 'Rio dos Bois'
        },
        {
          ibge: '1718758',
          cityName: 'Rio Sono'
        },
        {
          ibge: '1718808',
          cityName: 'Sampaio'
        },
        {
          ibge: '1718840',
          cityName: 'Sandolandia'
        },
        {
          ibge: '1718865',
          cityName: 'Santa Fe do Araguaia'
        },
        {
          ibge: '1718881',
          cityName: 'Santa Maria do Tocantins'
        },
        {
          ibge: '1718899',
          cityName: 'Santa Rita do Tocantins'
        },
        {
          ibge: '1718907',
          cityName: 'Santa Rosa do Tocantins'
        },
        {
          ibge: '1719004',
          cityName: 'Santa Tereza do Tocantins'
        },
        {
          ibge: '1720002',
          cityName: 'Santa Terezinha do Tocantins'
        },
        {
          ibge: '1720101',
          cityName: 'Sao Bento do Tocantins'
        },
        {
          ibge: '1720150',
          cityName: 'Sao Felix do Tocantins'
        },
        {
          ibge: '1720200',
          cityName: 'Sao Miguel do Tocantins'
        },
        {
          ibge: '1720259',
          cityName: 'Sao Salvador do Tocantins'
        },
        {
          ibge: '1720309',
          cityName: 'Sao Sebastiao do Tocantins'
        },
        {
          ibge: '1720499',
          cityName: 'Sao Valerio'
        },
        {
          ibge: '1720655',
          cityName: 'Silvanopolis'
        },
        {
          ibge: '1720804',
          cityName: 'Si­tio Novo do Tocantins'
        },
        {
          ibge: '1720853',
          cityName: 'Sucupira'
        },
        {
          ibge: '1720903',
          cityName: 'Taguatinga'
        },
        {
          ibge: '1720937',
          cityName: 'Taipas do Tocantins'
        },
        {
          ibge: '1720978',
          cityName: 'Talisma'
        },
        {
          ibge: '1721109',
          cityName: 'Tocanti­nia'
        },
        {
          ibge: '1721208',
          cityName: 'Tocantinopolis'
        },
        {
          ibge: '1721257',
          cityName: 'Tupirama'
        },
        {
          ibge: '1721307',
          cityName: 'Tupiratins'
        },
        {
          ibge: '1722081',
          cityName: 'Wanderlandia'
        },
        {
          ibge: '1722107',
          cityName: 'Xambioa'
        }
      ]
    }
  ];

  getStateList(){
    return this.stateList;
  }

  citiesByState(search: string){
    if(search){
      let state = this.citiesList.find(state => state.abbreviation === search);
      return state.cities;
    }
  }

  getCityByKey(abbreviation: string, ibge: string){
    let citiesOfState: any = [];
    let city: any = [];

    citiesOfState = this.citiesList.find(state => state.abbreviation === abbreviation);
    city = citiesOfState.cities.find(cities => cities.ibge === ibge);
    return city['ibge'];
  }

  constructor() { }
}
