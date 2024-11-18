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
    "Abirl",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  console.log(diaSemana[fecha.getDay()]);
  console.log(mes[fecha.getMonth()]);
  console.log(fecha.getFullYear());

  const mifecha = `${diaSemana[fecha.getDay()]} ${fecha.getDate()} de ${
    mes[fecha.getMonth()]
  } ${fecha.getFullYear()} 🗓️`;
  console.log(mifecha);

  const fechaTitulo = document.querySelector("h2");
  const hora = document.querySelector("h3");
  console.log(fechaTitulo);

  fechaTitulo.innerText = mifecha;
  hora.innerText = `🕛${fecha.getHours()} : ${fecha.getMinutes()} : ${fecha.getMilliseconds()}`;
  console.log(hora);
}

setInterval(obtenerfecha, 1000);
