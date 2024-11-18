function obtenerfecha() {
  const fecha = new Date();

  const diaSemana = [
    "domingo ",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes ",
    "Sabado",
  ];

  const mes = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const mifecha = `${diaSemana[fecha.getDay()]} ${fecha.getDate()} de ${
    mes[fecha.getMonth()]
  } ${fecha.getFullYear()} 🗓️`;

  const fechaTitulo = document.querySelector("h2");
  const reloj = document.querySelector("h3");

  fechaTitulo.innerText = mifecha;

  let hora = fecha.getHours();
  const minutos = fecha.getMinutes().toString().padStart(2, "0");
  const segundos = fecha.getSeconds().toString().padStart(2, "0");

  const amPm = hora >= 12 ? "PM" : "AM";
  hora = hora % 12 || 12; //;
  reloj.innerText = `🕛 ${hora}:${minutos}:${segundos} ${amPm}`;
}

setInterval(obtenerfecha, 1000);
