import compraventa from '../assets/icons/compraventa.svg'
import arrendamiento from '../assets/icons/arrendamiento.svg'
import matrimonio from '../assets/icons/matrimonio.svg'
import rectificacion from '../assets/icons/rectificacionDePartidas.svg'
import sucesion from '../assets/icons/sucesionIntestada.svg'
import legalizaciones from '../assets/icons/legalizaciones.svg'
import constitucion from '../assets/icons/constitucionDeEmpresas.svg'
import poderes from '../assets/icons/poderes.svg'
import autorizacion from '../assets/icons/autorizacionDeViajes.svg'
import vehiculos from '../assets/icons/vehicular.svg'
import anticipo from '../assets/icons/anticipoDeHerencia.svg'
import donacion from '../assets/icons/donacion.svg'
import divorcio from '../assets/icons/divorcio.svg'
import testamento from '../assets/icons/testamento.svg'
import otros from '../assets/icons/otrosServicios.svg'

import imgCompraventa from "../assets/images/servicios/imgCompraventa.jpg"
import imgArrendamiento from "../assets/images/servicios/imgArrendamiento.jpg"
import imgMatrimonio from "../assets/images/servicios/imgMatrimonio.jpg"
import imgRectificacion from "../assets/images/servicios/imgRectificacion.jpg"
import imgSucesion from "../assets/images/servicios/imgSucesion.jpg"
import imgLegalizacion from "../assets/images/servicios/imgLegalizaciones.jpg"
import imgConstitucion from "../assets/images/servicios/imgConstitucion.jpg"
import imgPoderes from "../assets/images/servicios/imgPoderes.jpg"
import imgAutorizacion from "../assets/images/servicios/imgAutorizacion.jpg"
import imgVehicular from "../assets/images/servicios/imgVehicular.jpg"
import imgAnticipo from "../assets/images/servicios/imgAnticipo.jpg"
import imgDonacion from "../assets/images/servicios/imgDonacion.jpg"
import imgDivorcio from "../assets/images/servicios/imgDivorcio.jpg"
import imgTestamento from "../assets/images/servicios/imgTestamento.jpg"
import imgOtros from "../assets/images/servicios/imgOtros.jpg"

export const service = [
  {
    slug: "compraventa",
    titulo: "Compraventa",
    icono: compraventa,
    imagen: imgCompraventa,
    requisitos: [
      "• Minuta autorizada por abogado (contrato de compraventa).",
      "• Documento de identidad de comprador(es) y vendedor(es).",
      "• Copia literal registral del inmueble",
      "• Declaración Jurada de autovalúo HR y PU del año en curso (Municipalidad).",
      "• Constancia de No Adeudo al impuesto predial (Municipalidad).",
      "• Pago de impuesto de alcabala (SAT), o inafectación al pago si fuese el caso.",
      "• Exhibición de medio de pago (Cheque, transferencia, etc.).",
      "• Pago de impuesto a la renta por segunda categoría, si fuera el caso.",
      "• Retención del IGV, en caso de primera venta de inmuebles por empresas constructoras"
    ],
  },
  {
    slug: "arrendamiento",
    titulo: "Arrendamiento",
    icono: arrendamiento,
    imagen: imgArrendamiento,
    secciones: [
    {
      titulo: "Escritura pública:",
      items: [
        "• Minuta autorizada por abogado",
        "• Documento de identidad de arrendatario y arrendador",
        "• Copia literal de inmueble(s)",
      ]
    },
    {
      titulo: "Legalización de firmas:",
      items: [
        "• Contrato de arrendamiento",
        "• Copia de DNI de contratantes",
      ]
    }
  ]
  },
  {
    slug: "legalizaciones",
    titulo: "Legalizaciones, certificaciones y cartas notariales",
    icono: legalizaciones,
    imagen: imgLegalizacion,
    secciones: [
    {
      titulo: "Cartas Notariales:",
      items: [
        "• Presentar original y copia de carta a diligenciar con dirección exacta del inmueble."
      ]
    },
    {
      titulo: "Legalización de firmas:",
      items: [
        "• Presencia con documento de identidad de quien legalizará su firma.",
        "• Documento con firmas por legalizar."
      ]
    },
    {
      titulo: "Legalización de Copias:",
      items: [
        "• Presentar documentos originales y copias a legalizar."
      ]
    },
    {
      titulo: "Apertura de libro de actas de Junta de Propietarios:",
      items: [
        "• Presencia con documento de identidad del Presidente designado.",
        "• Acta de constitución de la Junta de Propietarios en la que se designó al Presidente.",
        "• Cartas de convocatoria a junta dirigidas a todos los propietarios firmadas por propietarios que representan al menos el 25% de participación en zonas comunes.",
        "• Cartas de quienes no asistieron a la sesión, salvo haya existido participación del 100% de propietarios.",
        "• Copia literal de partida registral matriz del inmueble.",
        "• Partida matriz."
      ]
    },
    {
      titulo: "Protestos:",
      items: [
        "• Título valor original."
      ]
    }
    ]
  },
  {
    slug: "constitucion",
    titulo: "Constitución de Empresas, de Asociaciones y Actos Societarios",
    icono: constitucion,
    imagen: imgConstitucion,
    secciones:[
      {
        titulo: "Constitución de Sociedades/EIRL:",
        items: [
          "• Minuta autorizada por abogado.",
          "• Documento de identidad de socios.",
          "• Respecto al aporte de capital:",
          "1. Si se aportan bienes no dinerarios, deberá presentarse una declaración jurada detallando los bienes aportados y su valorización, firmada por el gerente general.",
          "2. Si se aportan bienes no dinerarios, deberá presentarse una declaración jurada detallando los bienes aportados y su valorización, firmada por el gerente general.",
          "3. Si el aporte es dinerario, deberá presentarse la constancia bancaria del depósito efectuado en la cuenta de la sociedad.",
          "• Reserva de nombre (opcional)."
        ]
      },
      {
        titulo: "Constitución de Asociación:",
        items: [
          "• Minuta autorizada por abogado (Firmada por todos los asociados) o Acta de fundación de asociación pegada en el libro de actas aperturado firmada por todos los asociados.",
          "• Documento de identidad de intervinientes",
          "• Reserva de nombre (opcional)"
        ]
      },
      {
        titulo: "Apertura de Libros (Actas, matrícula de acciones, contables, padrón de asociados):",
        items: [
          "Primer libro:",
          "• Presencia con documento de identidad del Gerente General o Presidente del Consejo Directivo",
          "• Vigencia de poder que será verificada por la notaría.",
          "• Vigencia de poder (no mayor a 05 días).",
          "• Copia del RUC.",
          "• Copia de DNI del Gerente General.",
          "Pérdida de libro:",
          "• Denuncia policial por pérdida del libro.",
          "• Carta a SUNAT comunicando la pérdida del libro.",
          "• Presencia de todos los accionistas/ socios y gerente general.",
          "• Acta de Junta de Accionistas/Socios/ Asamblea con firma legalizada de los accionistas/socios dando conformidad de la legalización del siguiente libro por pérdida.",
          "• Presencia con documento de identidad y vigencia de poder del Gerente General o Presidente del Consejo Directivo que será verificada por la notaría.",
          "• Copia literal de la persona jurídica.",
          "• Copia del RUC."
        ]
      },
      {
        titulo: "Copia certificada de Actas de Sociedades (Renuncia de Gerente General y/o remoción de Gerente General, Nombramiento de Gerente General y/o Subgerente, Otorgamiento de poder):",
        items: [
          "• Vigencia de poder del Gerente General (no mayor a 05 días)",
          "• Libro de actas con acta a certificar pegada en él",
          "• Certificación del gerente general donde se certifique que las firmas de los accionistas que suscriben el acta la corresponde a cada uno de ellos",
          "• Presencia del Gerente General",
          "• Copia de DNI del Gerente General",
          "• Solicitud debidamente completada (brindada por la notaría)"
        ]
      },
      {
        titulo: "Aumento de Capital:",
        items: [
          "• Minuta autorizada por abogado",
          "• Libro de actas con el acta del acuerdo de la junta general de accionistas/ socios",
          "• Acta de Junta General de socios, pegada en el libro de actas, donde se acuerde el aumento de capital y su modificación de estatuto",
          "• Certificación de Gerente que las firmas de quienes suscriben el acta",
          "• Si el aumento es en bienes muebles: declaración jurada de recepción de bienes suscrita por el gerente general",
          "• Si el aumento es con aporte dinerario: depósito bancario a nombre de la sociedad/empresa",
          "• Ficha RUC",
          "• Vigencia de poder del Gerente General",
          "• Copia literal de la sociedad/empresa"
        ]
      },
      {
        titulo: "Reducción de Capital:",
        items: [
          "• Minuta autorizada por abogado",
          "• Libro de actas con el acta de Junta general de accionistas/ socios",
          "• Acta de Junta general de accionistas, pegado en el libro de actas, donde se acuerde la reducción de capital y la modificación de estatuto",
          "• Certificación de firmas de los accionistas que suscriben el acta por el Gerente General de la sociedad",
          "• Publicaciones de ley",
          "• Ficha RUC",
          "• Vigencia de poder",
          "• Copia literal de la sociedad/empresa"
        ]
      },
      {
        titulo: "Modificación de Estatutos:",
        items: [
          "• Minuta autorizada por abogado",
          "• Libro de actas con el acta del acuerdo de Junta General de socios",
          "• Acta de Junta General de socios, pegada en el libro de actas, donde se acuerde la modificación de estatuto",
          "• Certificación de Gerente de las firmas de quienes suscriben el acta",
          "• Ficha RUC",
          "• Vigencia de poder del Gerente General",
          "• Copia literal de la sociedad/empresa"
        ]
      },
      {
        titulo: "Sucursal en el Perú de Sociedad Constituida en el extranjero:",
        items: [
          "• Minuta autorizada por abogado, suscrita por la persona facultada de la empresa matriz",
          "• Certificado de vigencia de la sociedad principal en su país de origen, con constancia de que su pacto social ni su estatuto le impiden establecer sucursales en el instrumento",
          "• Copia del pacto social y del estatuto, o de los instrumentos equivalentes en el país de origen",
          "• Acuerdo del órgano social competente de la sociedad extranjera, mediante el cual se dispone el establecimiento de la sucursal en el Perú. Este acuerdo deberá contener:",
          "1. Denominación o razón social de la sociedad constituida en el extranjero",
          "2. Capital asignado a la sucursal",
          "3. Domicilio de la sucursal en el Perú",
          "4. Nombre y documento de identidad del representante legal permanente, indicando sus facultades; si hubiera más de uno, deberá precisarse la misma información respecto de cada uno",
          "5. Actividades a desarrollar, declarando que se encuentran comprendidas dentro del objeto social de la matriz",
          "6. Compromiso expreso de sometimiento a las leyes peruanas, para responder por las obligaciones que contraiga la sucursal en el país",
          "• Toda documentación proveniente del extranjero deberá contar con el Apostillado de La Haya o, en su defecto, con la legalización consular correspondiente, así como con traducción oficial si los documentos estuvieran redactados en idioma distinto al castellano",
          "• No es necesario acreditar ante el Registro el capital asignado a la sucursal"
        ]
      },
      {
        titulo: "Transformación de tipo societario (EIRL a SAC):",
        items: [
          "• Libro de actas de la empresa aperturado",
          "• Acta de decisión de transformación donde conste el acuerdo adoptado por el titular",
          "• Minuta autorizada por abogado",
          "• Vigencia de poder del gerente general (no mayor a 05 días)",
          "• Copia literal de la persona jurídica",
          "• Ficha RUC",
          "• Copia del DNI del titular y del socio que será incorporado a la empresa",
          "• Constancia del medio de pago, en caso el aporte del socio sea un depósito bancario",
          "• Declaración jurada de recepción de bienes muebles, si el aporte incluye este tipo de bienes",
          "• Tres (3) publicaciones originales en el Diario Oficial El Peruano y en un diario de circulación nacional a elección del cliente",
          "• Estas publicaciones deben realizarse dentro de los quince (15) días calendarios posteriores a la fecha de la escritura"
        ]
      },
      {
        titulo: "Transferencia de titularidad de EIRL:",
        items: [
          "• Minuta autorizada por abogado",
          "• Libro de actas aperturado",
          "• Copia de DNI del transferente y del adquirente",
          "• Copia literal de la persona jurídica",
          "• Vigencia de poder",
          "• Balance general cerrado un día antes de firmada la minuta",
          "• Acta de decisión del titular de transferir su titularidad",
          "• Medio de pago, en caso de ser una transferencia onerosa"
        ]
      },
      {
        titulo: "Transferencia de acciones (acto no inscribible):",
        items: [
          "Si se desea una Escritura pública:",
          "1. Minuta autorizada por abogado",
          "2. Copia de DNI de otorgantes",
          "3. Medio de pago, de ser el caso",
          "Si se desea legalización de firmas:",
          "1. Contrato de transferencia de acciones",
          "2. Presencia y documento de identidad de los otorgantes",
          "Si se desea dejar constancia en acta de junta:",
          "1. Libro de Actas aperturado",
          "2. Acta donde se deja constancia de la transferencia de acciones",
          "3. Copia de DNI de otorgantes"
        ]
      },
      {
        titulo: "Nombramiento, remoción, renuncia y revocación de representantes/Gerente General por Escritura Pública:",
        items: [
          "• Libro de actas aperturado",
          "• Presencia y documento de identidad de gerente general",
          "• Ficha RUC",
          "• Copia literal de sociedad",
          "• Acta donde se acuerde el nombramiento, remoción, aceptación renuncia o revocación de representantes o gerente general",
          "• Certificación del gerente general sobre la autenticidad de las firmas de los accionistas que suscriben el acta",
          "• Minuta autorizada por abogado",
          "• Vigencia de poder del Gerente General actual"
        ]
      },
      {
        titulo: "Disolución y Liquidación:",
        items: [
          "• Libro de actas donde conste el acuerdo de la junta general de accionistas/ socios con el nombramiento del liquidador",
          "• Copias de los DNI de todos los socios",
          "• Copia literal de la empresa",
          "• Presentación con documento de identidad y vigencia de poder del gerente general",
          "• Ficha RUC de la empresa",
          "• Libro de actas aperturado",
          "• Debe incluirse la designación del liquidador responsable del proceso de liquidación",
          "* Tres (3) publicaciones originales en el Diario Oficial El Peruano y tres (3) publicaciones en un diario de circulación nacional a elección del cliente",
          "* Las publicaciones deben realizarse dentro de los quince (15) días de emitida la escritura, y los originales deben ser presentados en la notaría"
        ]
      }
    ]
  },
  {
    slug: "poderes",
    titulo: "Poderes",
    icono: poderes,
    imagen: imgPoderes,
    secciones: [
    {
      titulo: "Carta Poder:",
      items: [
        "• Presentar documento."
      ]
    },
    {
      titulo: "Poder fuera de registro:",
      items: [
        "• Presencia con documento de identidad de poderdante.",
        "• Detalle de los actos de representación u objeto del poder."
      ]
    },
    {
      titulo: "Poder por escritura pública (otorgamiento, ampliación, revocatoria):",
      items: [
        "• Minuta autorizada por abogado.",
        "• Documento de identidad de poderdante y apoderado."
      ]
    }
    ]
  },
  {
    slug: "autorizacion",
    titulo: "Autorización",
    icono: autorizacion,
    imagen: imgAutorizacion,
    secciones:[
    {
      titulo: "Autorización de viaje al interior:",
      items: [
        "• Presencia con documento de identidad del padre o de la madre.",
        "• Documento de identidad del menor.",
        "• Copia certificada de acta de nacimiento del menor."
      ]
    },
    {
      titulo: "Autorización de Viaje al Exterior:",
      items: [
        "* Si el menor viaja con el padre o la madre, de todas maneras debe ser firmado el permiso por ambos padres.",
        "• Presencia con documento de identidad del padre y de la madre.",
        "• Documento de identidad del menor.",
        "• Copia certificada de acta de nacimiento del menor."
      ]
    }
    ]
  },
  {
    slug: "vehicular",
    titulo: "Vehicular",
    icono: vehiculos,
    imagen: imgVehicular,
    secciones:[
    {
      titulo: "Transferencias vehiculares:",
      items: [
        "• Presencia y documento de identidad de los contratantes.",
        "• Tarjeta de identificación del vehículo.",
        "• Medio de pago bancarizado si el precio es igual o mayor a 03 UIT.",
        "• Constancia de no adeudo del impuesto vehicular, si corresponde.",
        "• Si se trata de persona jurídica: Vigencia de poder del representante."
      ]
    },
    {
      titulo: "Prescripción Adquisitiva Vehicular:",
      items: [
        "• Solicitud firmada por el interesado y autorizada por abogado colegiado.",
        "• Copia literal de la Partida Registral del vehículo.",
        "• Declaración testimonial de no menos de tres (3) ni más de seis (6) testigos, todos mayores de veinticinco (25) años, que acrediten el tiempo y la forma de posesión del vehículo.",
        "• Certificación emitida por la Dirección de Investigación de Robo de Vehículos (DIROVE) de la Policía Nacional del Perú, en la que conste que el vehículo no presenta afectaciones ni registro por robo.",
        "• Pago de SOAT por 4 años, y evidencia documentada de la posesión del vehículo."
      ]
    }
    ]
  },
  {
    slug: "anticipo",
    titulo: "Anticipo de legítima / herencia",
    icono: anticipo,
    imagen: imgAnticipo,
    requisitos:[
      "• Minuta autorizada por abogado.",
      "• Documento de identidad de anticipante y anticipado(s).",
      "• Partida de nacimiento de los hijos.",
      "• Copia Literal de inmuebles.",
      "• Declaración Jurada de Autoavalúo HR y PU del año en curso.",
      "• Constancia de No Adeudo de impuesto predial."
    ]
  },
  {
    slug: "donacion",
    titulo: "Donación",
    icono: donacion,
    imagen: imgDonacion,
    requisitos:[
      "• Minuta autorizada por abogado.",
      "• Documento de identidad de donante y donatorio.",
      "• Copia literal del inmueble.",
      "• Constancia de no adeudo del impuesto predial.",
      "• Declaración Jurada de Autoavalúo, HR, PU del año en curso.",
      "• Constancia de pago de impuesto alcabala (SAT) o inafectación, de ser el caso."
    ]
  },
  {
    slug: "divorcio",
    titulo: "Divorcio",
    icono: divorcio,
    imagen: imgDivorcio,
    requisitos:[
      "• Documento de identidad de ambos cónyuges.",
      "• Copia certificada del Acta de Matrimonio, con una vigencia no mayor de tres (3) meses.",
      "• Declaración Jurada, suscrita con firma y huella digital de ambos cónyuges, manifestando no tener hijos menores de edad ni hijos con incapacidad.",
      "• Copia certificada del Acta de Nacimiento de los hijos, con una vigencia no mayor de tres (3) meses.",
      "• Copia certificada de la Sentencia Judicial firme o Acta de Conciliación que regule los regímenes de patria potestad, alimentos, tenencia y visitas.",
      "• Copia certificada de la Sentencia Judicial firme o Acta de Conciliación que regule los regímenes de curatela, alimentos y visitas de los hijos mayores con incapacidad, de ser el caso.",
      "• Copia certificada de la Sentencia Judicial firme que declare la interdicción del hijo mayor con incapacidad y que nombre a su curador, si lo hubiera.",
      "• Escritura Pública inscrita en los Registros Públicos de Separación de Patrimonios; o, en su defecto, Declaración Jurada con firma e hulla digital de ambos cónyuges, manifestando carecer de bienes sujetos al régimen de sociedad de gananciales.",
      "• Escritura Pública inscrita en los Registros Públicos de sustitución o liquidación del régimen patrimonial, si correspondiera.",],
    
    secciones:[
      {
      titulo: "Inventario:",
      items: [
        "• Solicitud por escrito, presentada a petición de parte, indicando el lugar donde se efectuará el inventario.",
        "• Documento Nacional de Identidad del solicitante o, en su caso, del representante legal de la persona jurídica.",
        "• Vigencia de poder del representante, cuando se trate de una persona jurídica."
      ]
    }
    ]
  },
  {
    slug: "matrimonio",
    titulo: "Matrimonio",
    icono: matrimonio,
    imagen: imgMatrimonio,
    requisitos:[
      "• Copia certificada de las partidas de nacimiento de ambos contrayentes.",
      "• Declaración jurada de domicilio de los contrayentes.",
      "• Certificado médico (incluido certificado psiquiátrico) expedido con una antigüedad no mayor de treinta (30) días, que acredite la capacidad legal para contraer matrimonio.",
      "• Declaración jurada de dos (2) testigos mayores de edad, que conozcan a los contrayentes por un periodo mínimo de tres (3) años y declaren que no existe impedimento legal para el matrimonio.",
      "• Copias de DNI de los contrayentes y de los testigos."
    ],
    secciones:[
      {
      titulo: "En casos de parentesco, viudez o extranjería:",
      items: [
        "• Dispensa del parentesco de consanguinidad colateral en tercer grado, si correspondiera.",
        "• Copia certificada del acta de defunción del cónyuge anterior o de la sentencia de divorcio, según corresponda.",
        "• Certificado consular de soltería o viudez, en el caso de contrayentes extranjeros."
      ]
    }
    ]
  },
  {
    slug: "rectificacion",
    titulo: "Rectificación de partidas",
    icono: rectificacion,
    imagen: imgRectificacion,
    secciones:[
    {
      titulo: "Rectificación de Partidas de Nacimiento:",
      items: [
        "• Fotocopia simple del DNI del solicitante.",
        "• Partida de nacimiento que se desea rectificar.",
        "• Partidas de nacimiento de los padres."
      ]
    },
    {
      titulo: "Rectificación de Partidas de Matrimonio:",
      items: [
        "• Fotocopia simple del DNI del solicitante.",
        "• Partida de matrimonio a rectificar.",
        "• Partidas de nacimiento de contrayentes.",
        "• Partida de nacimiento de hijos u otro familiar directo, según corresponda."
      ]
    },
    {
      titulo: "Rectificación de Partida de Defunción:",
      items: [
        "• Fotocopia Simple del DNI del solicitante.",
        "• Partida de defunción a rectificar.",
        "• Partida de matrimonio del cónyuge supérstite.",
        "• Partida de nacimiento de los hijos y otro familiar directo."
      ]
    }
    ]
  },
  {
    slug: "sucesion",
    titulo: "Sucesión intestada",
    icono: sucesion,
    imagen: imgSucesion,
    requisitos:[
      "• Copia de DNI del solicitante.",
      "• Copia certificada del Acta de Defunción del causante.",
      "• Copia certificada de las Actas de Nacimiento de los herederos legales.",
      "• Copia certificada del Acta de Matrimonio, en caso de corresponder.",
      "• Copia certificada del Acta de defunción de cónyuge, de ser el caso.",
      "• Certificado negativo de:" ,
      "• Inscripción de testamento (SUNARP).", 
      "• Inscripción sucesión intestada (SUNARP).", 
      "• Unión de hecho (SUNARP).",
      "• Minuta autorizada por abogado.",
      "• Solicitar información adicional a nuestros números de contactos o correos."
    ]
  },
  {
    slug: "testamento",
    titulo: "Testamento",
    icono: testamento,
    imagen: imgTestamento,
    requisitos:[
      "• Copia de DNI del Testador(a)",
      "• Dos (02) testigos que no sean familiares del testador(a) hasta el 4to grado de consanguinidad",
      "• Copia de documentos de identidad de testigos",
      "• Entrevista con Notario",
      "• Proyecto de disposiciones testamentarias",
      "• Copias de documentos de identidad de los herederos o legatarios",
      "• Solicitar información adicional a nuestros números de contactos o correos"
    ]
  },
  {
    slug: "otros",
    titulo: "Otros servicios notariales",
    icono: otros,
    imagen: imgOtros,
    secciones:[
      {
        titulo: "Adopción de personas mayores:",
        items: [
          "* La edad del adoptante debe ser igual a la suma de la mayoría de edad del hijo por adoptar",
          "• Minuta autorizada por abogado",
          "• Declaración jurada del adoptante en el sentido que goza de solvencia moral",
          "• Copia certificada de nacimiento del adoptante y de matrimonio, de ser casado",
          "• Documento que acredite que las cuentas de la administración han sido aprobadas si el solicitante ha sido representante del adoptado",
          "• Testimonio del inventario de los bienes que tuviere el adoptado"
        ]
      },
      {
        titulo: "Dación en pago:",
        items: [
          "• Minuta autorizada por abogado",
          "• Documento de identidad de otorgantes",
          "• Copia literal del inmueble",
          "• Pago de impuesto a la renta, de ser el caso",
          "• HR, PU, Autoavalúo",
          "• Constancia de no adeudo de impuesto predial",
          "• Formato de declaración jurada de no pagar impuesto a la renta (SUNAT)"
        ]
      },
      {
        titulo: "Designación de Apoyo a Adulto Mayor que no pueda manifestar voluntad (solo para cobro de Pensiones):",
        items: [
          "• Minuta autorizada por abogado",
          "• Certificado médico emitido por un neurólogo o psiquiatra que acredite la imposibilidad de manifestar la voluntad de la persona adulta mayor",
          "• Declaración jurada de dos testigos mayores de edad que conozcan a la persona adulta mayor y den fe de la imposibilidad que tiene de manifestar su voluntad",
          "• Declaración jurada de la persona que va a ser apoyo de no tener antecedentes penales y judiciales",
          "• Declaración jurada de persona designada como apoyo de no ser deudor alimentario",
          "Documento que acredite condición de apoyo",
          "• En caso sea cónyuge: Partida de Matrimonio",
          "• En caso sea hijo: Partida de Nacimiento",
          "• En caso sea hermano: Partida de Nacimiento de ambos",
          "• En caso sea apoyo previamente designado: Testimonio / inscripción"
        ]
      },
      {
        titulo: "Desalojo notarial:",
          items: [
            "• Minuta autorizada por abogado.",
            "• Testimonio de la escritura pública original del contrato de arrendamiento.",
            "• Carta notarial original del requerimiento de restitución, notificada en el domicilio del inmueble y contractual.",
            "• Copia Literal del Inmueble.",
            "• Copia de DNI del Solicitante.",
            "• Vigencia de poder, de ser el caso que se actúe con representación. \nDe tratarse de Persona Jurídica: Vigencia de poder del representante legal (máximo 5 días de expedida).",
          ]
      },
      {
        titulo: "Hipoteca y levantamiento de hipoteca:",         
          items: [
              "Hipoteca",
              "• Documento de identidad de otorgantes.",
              "• Copia literal del inmueble.",
              "• Minuta autorizada por abogado.",
              "Levantamiento de hipoteca",
              "• Minuta autorizada por abogado y firmada por acreedor.",
              "• Copia literal del inmueble."
          ],
      },
      { 
        titulo: "Mutuo con o sin garantía:", 
          items: [
            "• Documentos",
            "• Minuta autorizada por abogado.",
            "• Copia de DNI de otorgantes.",
            "• Medio de pago a utilizarse para la entrega del dinero.",
            "• Copia literal del inmueble."
          ]
      },
      { 
          titulo: "Patrimonio familiar:", 
           items: [
            "• Minuta autorizada por abogado.",
            "• Declaración expresa de no tener deudas.",
            "• Copia certificada de acta de matrimonio y acta de nacimiento de los hijos.",
            "• Certificado de Gravamen del inmueble materia del patrimonio familiar.",
            "* Podrán solicitar la constitución de patrimonio familiar las personas comprendidas en el artículo 493° del Código.",
            "Civil, conforme a los siguientes supuestos:",
            "1. Cualquiera de los cónyuges, sobre bienes de su propiedad.",
            "2. Ambos cónyuges, respecto de bienes de la sociedad conyugal.",
            "3. Padre o madre, viudo(a) o divorciado(a), sobre bienes propios.",
            "4. Padre o madre solteros, sobre bienes de su propiedad.",
            "5. Cualquier persona, dentro de los límites en que pueda donar o disponer por testamento.",
            "* La constitución de patrimonio familiar solo podrá otorgarse en beneficio de las personas indicadas en el artículo 495° del Código Civil, a saber:",
            "1. Los cónyuges.",
            "2. Los hijos.",
            "3. Otros descendientes menores o incapaces.",
            "4. Los padres u otros ascendientes que se encuentren en estado de necesidad.",
            "5. Los hermanos menores o incapaces del constituyente."
          ],
      },
      {  
        titulo: "Prescripción Adquisitiva de dominio de Inmuebles:",
           items: [
            "1. Solicitud del interesado, indicando:",
            "• El tiempo de posesión del solicitante y, de ser el caso, el de sus causantes.",
            "• Si existiera alguna persona con derechos inscritos sobre el bien.",
            "• El nombre y dirección del inmediato transferente.",
            "• Los nombres y domicilios de los propietarios u ocupantes colindantes.",
            "• Una descripción detallada del bien objeto de saneamiento, con la mayor exactitud posible.",
            "2. Referencia breve de la posesión y forma de adquisición del inmueble materia de prescripción.",
            "3. Certificación municipal o administrativa que acredite a la persona como propietaria o poseedora del bien.",
            "4. Copia literal de los asientos registrales de dominio correspondientes a los últimos diez (10) años del predio urbano, o certificación que acredite que el inmueble no se encuentra inscrito.",
            "5. En la solicitud presentada, declaración de entre tres (3) y seis (6) testigos, mayores de veinticinco (25) años, quienes acrediten conocer al solicitante e indiquen el tiempo durante el cual este viene poseyendo el inmueble.",
            "6. Certificado catastral, expedido por los Registros Públicos de Lima.",
            "7. Comprobantes de pago de los tributos que afecten al bien, tales como:",
            "• Impuesto Predial, HR y PU.",
            "• Recibos de agua y luz correspondientes, de aproximadamente los últimos diez (10) años.",
            "• Formulario registral debidamente llenado.",
            "• Planos de ubicación y perimétricos, suscritos por ingeniero o arquitecto colegiado, y visados por la municipalidad correspondiente.",
            "• Descripción de las edificaciones existentes, suscrita y autorizada por ingeniero o arquitecto colegiado.",
            "• Memoria descriptiva del plano perimétrico, firmada por ingeniero o arquitecto colegiado.",
            "• Informe técnico del verificador, emitido por arquitecto o ingeniero civil colegiado inscrito en el Índice de Verificadores de la SUNARP.",
            "•  Certificado de parámetros urbanísticos y edificatorios, o certificado de zonificación urbana, expedido por la municipalidad competente.",
            "* Solicitar información adicional a nuestros números de contactos o correos."
           ]
      },
      {  
        titulo: "Reconocimiento de paternidad:",
           items: [
            "• Minuta autorizada por abogado.",
            "• Documento de identidad de padre y/o madre del menor."
        ]
      },
      {  
        titulo: "Rectificación de áreas y linderos:",
           items: [
            "• Minuta autorizada por abogado.",
            "• Copia literal del inmueble (Plazo máximo de vigencia: 10 días).",
            "• Plano de ubicación, de localización y perimétrico.",
            "• Memoria descriptiva del inmueble que refleje la situación real del predio (firmada por ingeniero o arquitecto colegiado) visado por municipio o autoridad administrativa correspondiente.",
            "• Búsqueda catastral de Registros Públicos (SUNARP).",
            "• Vigencia de poder, en caso de apoderado.",
            "• Información de predios colindantes y nombre de los propietarios.",
            "• Certificado de superposición (área mayor).",
            "* Solicitar información adicional a nuestros números de contactos o correos."
        ]
      },
      {  
          titulo: "Unión de hecho:",
           items: [
            "• Minuta autorizada por abogado.",
            "• Copia de DNI de ambos convivientes.",
            "• Copia de DNI de dos (02) testigos.",
            "• Declaración expresa en la que ambos manifiesten haber convivido de manera continua por un período no menor de dos (2) años.",
            "• Declaración expresa en la que los convivientes señalen que se encuentran libres de impedimento matrimonial y que ninguno mantiene vida en común con otra persona.",
            "• Declaración jurada de domicilio de ambos convivientes.",
            "• Certificado negativo de unión de hecho de ambos convivientes, emitido por SUNARP.",
            "• Declaración testimonial de dos (2) personas que acrediten conocer a los convivientes por un período no menor de dos (2) años.",
            "• Documentos complementarios que acrediten la unión de hecho, tales como:",
            "1. DNI de ambos convivientes con el mismo domicilio (emitidos con una antigüedad mínima de dos años).",
            "2. Partidas de nacimiento de hijos en común.",
            "3. Contratos, testimonios u otros documentos que demuestren la convivencia.",
            "* Solicitar información adicional a nuestros números de contactos o correos."
        ]
      },
    ]
  }
];