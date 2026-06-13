import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIcon } from "@angular/material/icon";


@Component({
  selector: 'app-home-component',
  imports: [CommonModule, MatIcon],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit, OnDestroy {

  heroImages = [
    "https://i.postimg.cc/PxJrhgfV/polodepotivo.jpg",
    "https://i.postimg.cc/NFrs2RH6/ropacasual.jpg",
    "https://i.postimg.cc/Y9P2Sdhd/ropaformal.jpg"
  ];

  currentImage = 0;
  loading = true;
  error = false;
  private intervalId: any;

  services=[
    {
      imagen:"https://scontent.ftru5-1.fna.fbcdn.net/v/t39.30808-6/702326063_1638406434956711_5126800599782081101_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1152x2048&ctp=s1152x2048&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KknWc2Z2IcUQ7kNvwEqSUe3&_nc_oc=AdqUhLnR03eYtEapqtcIcjtsXkajZoamUaQgrcwBMdxMqliKA-UR5hpRiLkBu3ZOw0Q&_nc_zt=23&_nc_ht=scontent.ftru5-1.fna&_nc_gid=A6X_5fVuCW0aJf__ervxNQ&_nc_ss=7b2a8&oh=00_Af9xM05A-Fzwmnvf8GDsUvvvYnfuKPSQJBF1vXueXAfL2w&oe=6A329730",
      icon:"sports_soccer",

      number:"01",
      title:"Uniformes Deportivos",
      description:"Fabricamos camisetas, shorts, buzos y uniformes completos para equipos de fútbol, vóley, básquet y otras disciplinas."
      
    },
  {
      imagen:"https://scontent.ftru5-1.fna.fbcdn.net/v/t39.30808-6/488255349_1255684573228901_7296503816202069233_n.jpg?stp=dst-jpg_tt6&cstp=mx1170x1635&ctp=s1170x1635&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=A2rtT42KmHYQ7kNvwG_16ts&_nc_oc=AdrnUErE5Ik9OVg2sCaebhojTDHbSlDcsWJryAmg9mgCLAb9sOFrTem-OhAN2HxYWO0&_nc_zt=23&_nc_ht=scontent.ftru5-1.fna&_nc_gid=hRoqHGl-rmMjwxb9iL0G-w&_nc_ss=7b2a8&oh=00_Af8nouSJtOo6nfSKX2TEnrXmcK-WYSdUffyZEfTzXmBBWQ&oe=6A32B602",
      icon:"business_center",

      number:"02",
      title:"Uniformes Corporativos",
      description:"Uniformes profesionales para empresas, restaurantes, hoteles, farmacias y negocios que buscan proyectar una imagen sólida."
      
    },

    {
      imagen:"https://scontent.ftru5-1.fna.fbcdn.net/v/t39.30808-6/481705468_1227763902687635_4871070421439370475_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kQ_Xb5XTyoMQ7kNvwG3imdQ&_nc_oc=Adq6SPIuMOUoMKBvNs1z9rQNtGj9mhtfpS46RKdLNuSRh12n-WQ74mhbYwvnchuCfG8&_nc_zt=23&_nc_ht=scontent.ftru5-1.fna&_nc_gid=GvAX4h-nsJm-Q9JbEsp0ZA&_nc_ss=7b2a8&oh=00_Af_2DjXrHMEaRS9B4euy9WyJtgNbxP9HREqjbK01ADKGhA&oe=6A32A010",
      icon:"palette",

      number:"03",
      title:"Sublimación",
      description:"Diseños personalizados con colores vibrantes, alta definición y excelente durabilidad."
    },
    {
      imagen:"https://scontent.ftru5-1.fna.fbcdn.net/v/t39.30808-6/490050707_1259346972862661_5970817683952433287_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1480&ctp=s2048x1480&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_vz8wjUrYsgQ7kNvwG0S5ht&_nc_oc=AdqwhVMQ0IFb40tQwoedFF_brOi1EXtgkBYTpdLQ3vDTbv6KD3u1Q0NM5pDCSbtiMJw&_nc_zt=23&_nc_ht=scontent.ftru5-1.fna&_nc_gid=cM_RaOzFohtsDeLy1hLroQ&_nc_ss=7b2a8&oh=00_Af81SFxuqFtmKvp6WkcIUjN5iCI89jXQBYVg1zsY0BYOmQ&oe=6A32A495",
      icon:"auto_fix_high",

      number:"04",
      title:"Bordados",
      description:"Logotipos, nombres y diseños bordados con acabados profesionales para empresas e instituciones."
    },

    {
      imagen:"url",
      icon:"content_cut",

      number:"05",
      title:"Arreglos y Composturas",
      description:"Ajustes, bastas, cambios de cierre y reparaciones para prolongar la vida útil de tus prendas."
    },
    {
      imagen:"https://scontent.ftru5-1.fna.fbcdn.net/v/t39.30808-6/486196414_1245943564203002_206828301829619421_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1152&ctp=s2048x1152&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LgVs65i3NgYQ7kNvwFx94io&_nc_oc=Adop8wMjDh3tJhNRSi_AKDIVakPgpPzBKbKX7zyRJC-UommoCx6SUhf9nHPA6Rj7s-Y&_nc_zt=23&_nc_ht=scontent.ftru5-1.fna&_nc_gid=yTN85bzs6xN5_AQhmjHIIQ&_nc_ss=7b2a8&oh=00_Af9txeLK57EW-TMp50Cx-AqibEv1zGzvcQEl5YkYBUhWsQ&oe=6A32B87B",
      icon:"checkroom",

      number:"06",
      title:"Confección Personalizada",
      description:"Creamos prendas únicas según tus necesidades, desde la idea inicial hasta el producto final."
    }
  ]

  choose=[{
    number:"01",
    icon:"workspace_premium",
    title:"Calidad Garantizada",
    description:"Utilizamos materiales de calidad y cuidamos cada detalle para lograr acabados profesionales."
  },
  {
    number:"02",
    icon:"schedule",
    title:"Entregas Puntuales",
    description:"Cumplimos los tiempos acordados para que recibas tus pedidos cuando los necesitas."
  },
  {
    number:"03",
    icon:"design_services",
    title:"Diseños Personalizados",
    description:"Adaptamos cada prenda a la identidad de tu empresa, institución o equipo deportivo."
  },
  {
    number:"04",
    icon:"support_agent",
    title:"Atención Personalizada",
    description:"Te acompañamos durante todo el proceso, desde la cotización hasta la entrega."
  },
  {
    number:"05",
    icon:"checkroom",
    title:"Producción a Medida",
    description:"Fabricamos prendas según tus necesidades, sin importar si es un pedido pequeño o grande."
  },
  {
    number:"06",
    icon:"verified",
    title:"Compromiso con tu Imagen",
    description:"Cada prenda representa tu marca, empresa o institución, por eso cuidamos cada detalle."
  }]

  galery=[{
    imagen:"https://scontent.ftru5-1.fna.fbcdn.net/v/t39.308",
    title:"Uniformes Deportivos",
    description:"Equipo de fútbol",
    solicitado:true
  
  },
  {
    imagen:"https://scontent.ftru5-1.fna.fbcdn.net/v/t39.308",
    title:"Bordados",
    description:"Logos empresariales"

  },
  {
    imagen:"https://scontent.ftru5-1.fna.fbcdn.net/v/t39.308",
    title:"",
    description:""


  },
  {
    imagen:"https://scontent.ftru5-1.fna.fbcdn.net/v/t39.308",
    title:"",
    description:""


  }
]

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef // Inyectamos el detector de cambios
  ) {}

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentImage = (this.currentImage + 1) % this.heroImages.length;
      this.cdr.detectChanges(); // Forzamos a Angular a renderizar el cambio
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpiamos el timer al salir de la vista
    }
  }
}